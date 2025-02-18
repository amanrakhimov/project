let storeName = 'Store';
let storeDescription = { 
    budget : 1000, 
    employees : ['s','t','r'], 
    products : {
        apple : 100,
        banana : 300
    },
    open : true 
};

storeDescription.fr = '123';
console.log(storeDescription.fr);
console.log(storeDescription);