import * as Types from '../constants/ActionTypes';
import callAPI from '../utils/apiCaller';

export const actFetchProductsRequest = () =>{
    return (dispatch) => {
        return callAPI('products', 'GET',null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    }
};

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
};

export const actDeleteProductsRequest = (id) =>{
    return (dispatch) => {
        return callAPI(`products/${id}`,'DELETE',null).then(res => {
            dispatch(actDeleteProducts(id))
        });
    }
};

export const actDeleteProducts = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
};

export const actAddProductsRequest = (products) => {
    return dispatch => {
        return callAPI('products','POST',products).then(res => {
            dispatch(actAddProducts(res.data))
        });
    }
};

export const actAddProducts = (products) => {
    return{
        type : Types.ADD_PRODUCT,
        products
    }
};

export const actGetProductsRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`,'GET',null).then(res =>{
            dispatch(actGetProducts(res.data));
        });
    }
}

export const actGetProducts = (products) => {
    return{
        type : Types.EDIT_PRODUCT,
        products
    }
}

export const actUpdateProductsRequest = (products) => {
    return dispatch => {
        return callAPI(`products/${products.id}`,'PUT', products).then(res =>{
            dispatch(actUpdateProducts(res.data));
        });
    }
}

export const actUpdateProducts = (products) => {
    return{
        type : Types.UPDATE_PRODUCT,
        products
    }
}