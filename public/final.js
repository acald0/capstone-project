console.log('FINAL.JS WORKING')
// const area = document.getElementById('progress-button')
const resultsDiv = document.getElementById("progress-results")
const spendingDiv = document.getElementById("spending-results")

const savingsDisplayed = (event) => {
    // console.log(res.data) to test

    //make URL below:
    //const body and below
    axios.get('http://localhost:4000/api/totalsavings')
    .then((response) => {
        console.log(response.data)
        const displayedSavings = 
        `
            <h2>TOTAL SAVINGS:</h2>
            <h1>$${response.data.savings}</h1>
        `
        resultsDiv.innerHTML = displayedSavings
    })

}

const spendingsDisplayed = (event) => {
    // console.log(res.data) to test
    //make URL below:
    //const body and below
    axios.get('http://localhost:4000/api/spending')
    .then((response) => {
        console.log(response.data)
        const displayedSpendings = 
        `
            <h2>TOTAL SPENDINGS:</h2>
            <h3>CLOTHING: $${response.data.clothing}</h3>
            <h3>ENTERTAINMENT: $${response.data.entertainment}</h3>
            <h3>GAS: $${response.data.gas}</h3>
            <h3>GROCERIES: $${response.data.groceries}</h3>
            <h3>HOUSEHOLD ITEMS: $${response.data.household}</h3>
            <h3>MISC: $${response.data.miscellaneous}</h3>
        `
        spendingDiv.innerHTML = displayedSpendings
    })

}


// area.addEventListener('click', savingsDisplayed)
savingsDisplayed()
spendingsDisplayed()