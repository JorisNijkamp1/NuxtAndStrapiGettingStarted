<template>
    <v-row>
        <v-col v-for="restaurant in restaurants"
               :key="restaurant.id"
               cols="12"
               sm="4"
        >
            <v-card>
                <h1>{{ restaurant.name }}</h1> <br>
                <p> {{ restaurant.description }}</p> <br>
                Categories:
                <strong v-for="categories in restaurant.categories"> {{ categories.name }}</strong>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
import {mapState} from "vuex"

export default {
    computed: mapState(["restaurants"]),
    mounted() {
        this.$store.dispatch("getRestaurants");
    },
    methods: {}
}

</script>