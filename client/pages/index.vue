<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <div class="text-center">
                <logo/>
                <vuetify-logo/>
            </div>
            <v-card>
                <v-card-title class="headline">
                    Welcome to the Vuetify + Nuxt.js template
                </v-card-title>
                <v-card-text>
                    <p>Vuetify is a progressive Material Design component framework for Vue.js. It
                        was designed to empower
                        developers to create amazing applications.</p>
                    <p>
                        For more information on Vuetify, check out the <a
                        href="https://vuetifyjs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        documentation
                    </a>.
                    </p>
                    <hr class="my-3">
                    <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nuxt Documentation
                    </a>
                    <br>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
    components: {
        Logo,
        VuetifyLogo
    }
}
</script>
