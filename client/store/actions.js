export default {
    async getRestaurants({commit}) {
        const response = await (await fetch("http://localhost:1337/restaurants")).json();
        console.log(response);
        commit("setRestaurants", response);
    },
}