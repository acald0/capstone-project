console.log('NEW.JS WORKING')
const activities = document.getElementById('activity-form')
const amountSaved = document.getElementById('amount-saved')
const categorySpending = document.getElementById('categories')
const amountSpent = document.getElementById('amount-spent')



const oneFunction = (event) => {
    event.preventDefault()
    console.log('TESTING123')
    const body = {
        amountSaved: amountSaved.value,
        categorySpending: categorySpending.value,
        amountSpent: amountSpent.value
    }
    axios.post('http://localhost:4000/api/savedandspent', body)
    .then((response) => {
        let activities = response.data
        console.log(activities)
    })
    .catch((err) => {
        console.log(err)
    })
}

activities.addEventListener('submit', oneFunction)