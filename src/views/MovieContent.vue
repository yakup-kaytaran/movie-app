<template>

    <div class="movie-detail">
        <div class="movie-detail__content">
            <ul class="movie-detail__info">
                <li><span class="movie-detail__info-font"> Vizyon Yılı: </span>{{singleMovie.Year}}</li>
                <li><span class="movie-detail__info-font">Film Süresi: </span>{{singleMovie.Runtime}}</li>
                <li><span class="movie-detail__info-font">Tür:</span> {{singleMovie.Genre}}</li>
                <li><span class="movie-detail__info-font">Aktörler: </span>{{singleMovie.Actors}}</li>
            </ul>

            <figure class="movie-detail__poster">
                <img :src="singleMovie.Poster"/>
            </figure>
        </div>
    </div>

</template>

<script>
    import MovieApi from "../services/MovieApi";
    import {bus} from "../main";


    export default {
        props: ['id'],

        data() {
            return {
                singleMovie: ''
            }
        },
        mounted() {
            MovieApi.fetchSingleMovie(this.id)
                .then(response => {
                    this.singleMovie = response
                    console.log(this.singleMovie);
                    bus.$emit('headerMovieName', this.singleMovie.Title);
                    this.loading = false
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>

<style lang="scss" scoped>
    .movie-detail {
        &__content {
            max-width: 900px;
            margin: 0 auto;
            overflow: hidden;
            margin-top: 1em;
        }

        &__info {
            float: left;

            li {
                padding: 0.3em 0;
            }

            &-font {
                font-weight: bold;
                color: #636363;

            }
        }

        &__poster {
            float: right;
        }

    }


    @media screen and (max-width: 600px) {

        .movie-detail {
            &__content {
                display: flex;
            }

            &__info {
                float: none;
                position: absolute;
                left: 0;
                right: 0;
                text-align: center;
                margin-top: 75%;
            }

            &__poster {
                display: flex;
                float: none;
                margin: auto;


                img {
                    width: 60%;
                    margin: auto;
                }

            }

        }


    }


</style>