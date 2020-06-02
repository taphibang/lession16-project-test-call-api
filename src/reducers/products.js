var initialState = [
    {
        id: 1,
        name : 'Iphone X',
        price : 1500,
        status : true
    },
    {
        id: 2,
        name : 'Iphone XS MAX',
        price : 2500,
        status : true
    },
    {
        id: 3,
        name : 'Iphone 11 PRO',
        price : 3000,
        status : true
    },
    {
        id: 4,
        name : 'Iphone 12',
        price : 3500,
        status : true
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
};

export default products;