<template>
<v-form>
    <v-layout row justify-center>
        <h2> {{title}} </h2>
    </v-layout>
    <Names @details="makeDriver" />
    <Details :driverRelation="title" @details="makeDriver" />
    <Accidents @details="makeDriver" />
</v-form>
</template>

<script>
import Names from "./Names";
import Details from "./Details";
import Accidents from "./Accidents";

export default {
    components: {
        Names,
        Details,
        Accidents
    },
    data() {
        return {
            driver: {}
        };
    },
    props: ['title'],
    methods: {
        makeDriver(msg) {
            this.driver = Object.assign(
                this.driver, msg);

        }
    },
    created() {
        Event.$on("get-drivers", () => {
            Event.$emit('driver', this.driver)

        });
    },
        destroyed(){
            Event.$off('get-drivers')
        }

};
</script>
