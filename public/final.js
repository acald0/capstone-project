console.log('FINAL.JS WORKING')
// const area = document.getElementById('progress-button')
const resultsDiv = document.getElementById("progress-results")

const savingsDisplayed = (event) => {
    // console.log(res.data) to test

    //make URL below:
    //const body and below
    axios.get('http://localhost:4000/api/totalsavings')
    .then((response) => {
        console.log(response.data)
        const displayedSavings = 
        `
            <h1>${response.data.savings}</h1>
        `
        resultsDiv.innerHTML = displayedSavings
    })

}

// area.addEventListener('click', savingsDisplayed)
savingsDisplayed()