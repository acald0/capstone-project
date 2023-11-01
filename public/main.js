console.log("ANOTHER TEST")

const goals = document.querySelector('#formtoselect')
const yearlyIncome = document.getElementById('yearly-income')
const percentToSave = document.getElementById('percent-for-savings')
const weeksSaved = document.getElementById('weeks-saved')

// let totalSaved;

// const savingsDisplayed = () => {
//     // console.log(res.data) to test
//     //make URL below:
//     axios.get('http://localhost:4000/api/totalsavings', getgoal)
//     .then((response) => {
//         const displayedSavings = 
//         `<div>
//             <h1>${response.data}</h1>
//         </div>`
//     })

// }

const anotherFunction = (event) => {
    event.preventDefault()
    console.log('TESTING')
    // const dateVariable = new Date().toString()
    const dateVariable = new Date().toLocaleDateString()
    const body = {
        dateVariable,
        yearlyIncome: yearlyIncome.value,
        percentToSave: percentToSave.value,
        weeksSaved: weeksSaved.value
    }
    axios.post('http://localhost:4000/api/incomeandsavings', body)
    .then((response) => {
        let weeklySavings = response.data
        console.log(weeklySavings)
    })
    .catch((err) => {
        console.log(err)
    })
}

goals.addEventListener('submit', anotherFunction)
