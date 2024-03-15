let bsnss = [
    {
        name: "ali-airlines",
        budget: 3500000,
        tax: 18,
        expenses: [
            1200000,
            500000,
            100000
        ]
    },
    {
        name: "jav-oil",
        budget: 1500000,
        tax: 12,
        expenses: [
            10000,
            500000,
            25000
        ]
    },
    {
        name: "munir-auto",
        budget: 10000000,
        tax: 24,
        expenses: [
            6000000,
            20000,
            60000
        ]
    },
    {
        name: "jago-kalyoshi",
        budget: 500000,
        tax: 8,
        expenses: [
            10000,
            8000,
            12000
        ]
    },
    {
        name: "jahonbek-nosfrush",
        budget: 1000000,
        tax: 0,
        expenses: [
            200000,
            15000,
            3000
        ]
    }
]

// найти компанию которая больше всех платит налог
// найти компанию которая меньше всех платит налог
// покзать сколько гос-во зарабатывает со всех компаний 
// найти успешные и не успешные 20000
let unsuccessfull = []
let successfull = []


for(let item of bsnss) {
    let total_expenses = item.expenses.reduce((a,b) => a + b) / 12
    let total_month_budget = (item.budget / 12) - total_expenses 

    total_month_budget = total_month_budget - (item.tax * (total_month_budget) / 100) 


    console.log(total_month_budget);
}

let min = bsnss.reduce((a,b) => {
    if (a.tax < b.tax) {
        return a
    }else{
        return b
    }
}).tax
let max = bsnss.reduce((a,b) => {
    if (a.tax > b.tax) {
        return a
    }else{
        return b
    }
}).tax


let GoverTax = bsnss.reduce((a,b) =>a + (b.budget * b.tax / 100),0)

let sccss = bsnss.filter((el) =>{
    if(el <= 20000){
        unsuccessfull.push(el)
    }else{
        successfull.push(el)
    }
})



console.log('max', max);
console.log('min', min);
console.log('goverment' ,GoverTax);
console.log('unsuccessfull' , unsuccessfull);
console.log('successfull' , successfull);