<template>
    <header class="MovieHeader">
        <div class="MovieHeader-content">
            <div class="MovieHeader-title">
                <p class="MovieHeader-title__item MovieHeader-title__item-font ">
                    {{ movieName}}
                </p>
            </div>
        </div>
    </header>
</template>

<script>

    import {bus} from "../main";


    export default {
        data() {
            return {
                movieName: ''
            }
        },
        created() {
            bus.$on('headerMovieName', (data) => {
                this.movieName = data;
            })
        }
    }
</script>

<style lang="scss" scoped>


    .MovieHeader {
        background: rgb(69, 152, 190);
        background: linear-gradient(100deg, rgba(69, 152, 190, 1) 0%, rgba(217, 226, 229, 1) 100%);

        .MovieHeader-content {
            max-width: 900px;
            margin: 0 auto;
            overflow: hidden;
            padding: 2em 0;

            .MovieHeader-title {
                float: left;

                &__item-font {
                    font-size: 2em;
                    font-weight: 600;
                    padding-top: 1em;
                    letter-spacing: 1px;
                }
            }

        }

    }


    @media screen and (max-width: 600px) {
        .MovieHeader {
            background: none;

            .MovieHeader-content {
                padding: 0;
            }

            .MovieHeader-title {
                float: none !important;
                text-align: center;

                &__item-font {
                    padding-top: 0.5em !important;

                }
            }
        }
    }

</style>