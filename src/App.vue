<template>
    <div id="app">
        <component :is="header"></component>
        <router-view/>
    </div>
</template>


<script>

    import Header from "./components/Header";
    import MovieHeader from "./components/MovieHeader";


    const default_header = "appHeader";

    let Time = new Date();
    let visitTime = Time.getHours() + ":" + Time.getMinutes();

    export default {

        components: {
            appHeader: Header,
            appMovieHeader: MovieHeader
        },
        computed: {
            header() {
                return (this.$route.meta.whichHeader || default_header);
            }
        },
        created() {

            if (!localStorage.getItem("visitTime")) {
                localStorage.setItem("visitTime", visitTime);
            }


        }, mounted() {

            var startTime = visitTime;
            var endTime = localStorage.getItem("visitTime");
            var s = startTime.split(':');
            var e = endTime.split(':');
            var end = parseInt(e[0]) * 60 + parseInt(e[1]);
            var start = parseInt(s[0]) * 60 + parseInt(s[1]);
            var elapsedMs = start - end;
            var hours = parseInt(elapsedMs / 60) + " hours " + elapsedMs % 60 + " minutes";
            console.log(hours)
        }

    }
</script>


<style lang="scss">
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font: 400 16px sans-serif;
    }

    #app {
        background-color: #c7c7c7;
        min-height: 100vh;
    }

</style>
