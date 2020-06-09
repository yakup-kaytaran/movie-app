<template>
    <header class="header">
        <p class="header-visitTime"> Visiting time:
            <time> {{visitTime}}</time>
        </p>
        <div class="header-content">
            <div class="header-title">
                <p class="header-title__item header-title__item-font ">
                    Lorem Ipsum <br>
                    Dolor sit amet consectetur..
                </p>
                <p class="header-title__item2 header-title__item2-font">
                    Lorem ipsum dolor sit amet, consectetur <br> adipisicing elit, sed do eiusmod tempor.
                </p>
                <button class="header-title__button-cta">CTA BUTTON</button>
            </div>
            <div class="header-logo">
                <img class="header-logo__movie-image" src="../assets/movie.png" alt="logo">
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                visitTime: ''
            }
        },
        mounted() {
            this.visitTime = localStorage.getItem("visitTime");
        }
    }
</script>

<style lang="scss" scoped>


    .header {
        background: rgb(69, 152, 190);
        background: linear-gradient(100deg, rgba(69, 152, 190, 1) 0%, rgba(217, 226, 229, 1) 100%);

        .header-visitTime {
            position: fixed;
            bottom: 0;
            padding: 0.5em;
            color: orangered;
        }

        .header-content {
            max-width: 900px;
            margin: 0 auto;
            overflow: hidden;

            .header-title {
                float: left;

                &__item-font {
                    font-size: 1.5em;
                    font-weight: 600;
                    padding-top: 1em;
                    letter-spacing: 1px;
                }

                &__item2-font {
                    font-size: 1em;
                    font-weight: 100;
                    padding-top: 1em;
                    letter-spacing: 1px;
                }
            }

            .header-logo {
                float: right;

                &__movie-image {
                    width: 190px;
                    margin: 1em;
                }
            }
        }

        .header-title__button-cta {
            background-color: #376fe1;
            border: none;
            color: white;
            padding: 12px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            margin-top: 1em;
            cursor: pointer;
            border-radius: 5px;
            width: 250px;
        }
    }


    @media screen and (max-width: 600px) {
        .header {
            background: #ebebeb;
        }

        .header-title {
            float: none !important;

            &__item-font, &__item2-font {
                text-align: center;
            }

            &__button-cta {
                display: none !important;
            }
        }

        .header-logo {
            display: flex;
            float: none !important;

            &__movie-image {
                margin: 1em auto !important;
            }
        }
    }


</style>