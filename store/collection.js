import axios from "axios";

import Repository, {
    serializeQuery,
    baseUrl
} from '~/repositories/Repository.js';

export const state = () => ({
    collections: null,
    categories: null,
    queries: null
});

export const mutations = {
    setCollections(state, payload) {
        state.collections = payload;
    },

    setCategories(state, payload) {
        state.categories = payload;
    },
    setQueries(state, payload) {
        state.queries = payload;
    }
};

export const actions = {
    async getCollectionsBySlugs({ commit }, payload) {

        console.log("get CollectionsBy Slugs");
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        // const reponse = await Repository.get(`${baseUrl}/collections?${query}`)
        //     .then(response => {
        //         commit('setCollections', response.data);
        //         console.log(response.data);
        //         return response.data;
        //     })
        const reponse = axios.get("http://127.0.0.1:8000/api/v1/productsdemo").then(response => {
                commit('setCollections', response.data);
                console.log(response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        console.log(reponse.data);
        return reponse;
    },
    async getCategoriesBySlugs({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(
            `${baseUrl}/product-categories?${query}`
        )
            .then(response => {
                commit('setCategories', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
