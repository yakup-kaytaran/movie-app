<template>


    <main class="main">

        <div class="loader" v-if="loading"></div>

        <div class="movie" :style="{ background: index%2 == 0 ? '#ffffff' : '#e3e3e3' }"
             v-for="(item,index) in wholeResponse"
             :key="index"
        >
            <p class="movie__name">{{item.Title}}</p>
            <p class="movie__score">Puan:{{item.imdbID}}</p>
            <div class="movie__content">
                <figure>
                    <img :src="item.Poster"/>
                </figure>
                <div class="movie__summary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum varius ultricies. Ut
                    malesuada
                    lobortis hendrerit. Aenean tincidunt cursus orci in auctor
                </div>
                <button class="movie__button" @click="detailMovie(item.imdbID)"> DETAY</button>
            </div>
        </div>


    </main>


</template>

<script>
    import MovieApi from "../services/MovieApi";


    export default {
        data() {
            return {
                wholeResponse: [],
                loading: true
            }
        },
        mounted() {
            this.$nextTick(function () {
                MovieApi.fetchMovieCollection('Spider man')
                    .then(response => {
                        this.wholeResponse = response.Search
                        this.loading = false;
                        //console.log(this.wholeResponse)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
        },
        methods: {
            detailMovie(id) {
                this.$router.push('/Movie/' + id);
            }
        }
    }
</script>

<style lang="scss" scoped>

    //loaidng

    .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
        margin: 5% auto;
    }

    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }


    .main {
        max-width: 900px;
        margin: 0 auto;

        .movie {
            //background: #ffffff;
            width: 80%;
            margin: auto;
            overflow: hidden;
            padding: 0.5em;
            margin-top: 1em;
            margin-bottom: 1em;

            &__name {
                float: left;
                padding-bottom: 20px;
                font-weight: 600;
                color: #636363;

            }

            &__score {
                float: right;
                font-weight: 600;
                color: #ec561b

            }

            &__summary {
                width: 320px;
                float: left;
                margin-left: 2em;
                font-size: 14px;
                color: #636363
            }

            &__button {
                background-color: #376fe1;
                border: none;
                color: white;
                padding: 7px 32px;
                text-decoration: none;
                cursor: pointer;
                border-radius: 5px;
                width: 160px;
                position: absolute;
                right: 0;
                bottom: 0
            }
        }

        .movie__content {
            float: left;
            clear: both;
            width: 100%;
            position: relative;

            figure {
                float: left;

                img {
                    width: 9em;
                }
            }
        }
    }


    @media screen and (max-width: 600px) {
        .movie {
            width: 100% !important;

            &__name {
                font-size: 0.9em;
            }

            &__score {
                font-size: 0.9em;
            }

            &__button {
                padding: 7px 7px !important;
                width: 100px !important;
                font-size: 0.8em;
            }

            &__summary {
                width: auto !important;
                float: none !important;
                font-size: 12px !important;

            }

            figure {
                margin-right: 0.3em;

                img {
                    width: 6em;
                }
            }

        }
    }

</style>