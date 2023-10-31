console.log('FINAL.JS WORKING')
const area = document.getElementById('progress-button')


const savingsDisplayed = (event) => {
    // console.log(res.data) to test

    //make URL below:
    //const body and below
    axios.get('http://localhost:4000/api/totalsavings')
    .then((response) => {
        console.log(response.data)
        const displayedSavings = 
        `<div>
            <h1>${response.data}</h1>
        </div>`
    })

}

area.addEventListener('click', savingsDisplayed)