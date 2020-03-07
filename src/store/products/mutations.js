import * as mutationTypes from './mutation-types';

export default {

    [mutationTypes.PRODUCTS_SET](state, products) {
        state.products = products;
    },
    [mutationTypes.PAGE_INDEX_SET](state, page) {
        state.pagination.page = page;
    },
    [mutationTypes.PAGE_LIMIT_SET](state, limit) {
        state.pagination.itemsPerPage = limit;
    },
};
