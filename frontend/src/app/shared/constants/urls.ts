import ENV from '../../../../../env.json';

const BASE_URL = 'http://localhost:' + ENV.PORT;

export const PRODUCTS_URL = BASE_URL + '/api/product';

export const CATEGORIES_URL = PRODUCTS_URL + '/category';

export const THUMB_URL = PRODUCTS_URL + '/thumb';
export const THUMB_BY_ID_URL = THUMB_URL + '/';

export const PRODUCT_BY_SEARCH_URL = PRODUCTS_URL + '/search/';
export const PRODUCT_BY_CATE_URL = PRODUCTS_URL + '/category/';
export const PRODUCT_BY_ID_URL = PRODUCTS_URL + '/';

export const USER_URL = BASE_URL + '/api/user';
export const USER_LOGIN_URL = USER_URL + '/login';
export const USER_REGISETER_URL = USER_URL + '/register'