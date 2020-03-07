import queryString from 'query-string';
import api from '@/plugins/api';
import router from '@/plugins/router';

import * as actionTypes from './action-types';
import * as mutationTypes from './mutation-types';

export default {

    async [actionTypes.PRODUCTS_GET]({ commit, state }) {
        const { category } = router.currentRoute.query
        const { itemsPerPage, page } = state.pagination;
        const query = queryString.stringifyUrl({
            url: '/website/products',
            query: {
                category: category,
                limit: itemsPerPage,
                page: page
            }
        });
        const response = await api.get(query);
        const products = response.data.docs;
        const totalDocs = response.data.totalDocs;
        commit(mutationTypes.PRODUCTS_SET, { products, totalDocs });
    },
}