<template>
<v-form>
    <v-layout row justify-center>
        <h2> {{title}} </h2>
    </v-layout>
    <Names @details="makeDriver" />
    <Contact @details="makeDriver" />
    <Details driverRelation="Self" @details="makeDriver" />
    <Address @details="makeDriver" />
    <Accidents @details="makeDriver" />
</v-form>
</template>

<script>
import Names from "./Names";
import Contact from "./Contact";
import Details from "./Details";
import Address from "./Address";
import Accidents from "./Accidents";

export default {
    components: {
        Names,
        Contact,
        Details,
        Address,
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
    }

}
</script>
