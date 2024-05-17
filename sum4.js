let cars =[
    {
        brand : "toyota",
        model : "Corolla",
        year : 2022,
    },
{
    brand : "Honda",
        model : "Civic",
        year : 2021,  
},
{
    brand : "Ford",
    model : "Fusion",
    year : 2020,  
}
];
for(let x=0 ; x<cars.length;x++){
    for(let key in cars[x]){
        console.log(`Brand: ${cars[x].brand}, Model: ${cars[x].model}`);
    }
}