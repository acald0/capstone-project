let savings = ''
let spending = {}

module.exports = {
    addGoal: (req, res) => {
        const {dateVariable, yearlyIncome, percentToSave} = req.body
        let yearToDate = (+yearlyIncome / 52)
        console.log(dateVariable)
        savings += yearToDate
        // console.log(req.body)
        res.status(200).send(savings)
    },

    addExtraSavings: (req, res) => {
        const {extraSavings} = req.body
        savings += extraSavings
        res.status(200).send(savings)
    },

    getGoal: (req, res) => {
        res.status(200).send(savings)
    },

    addActivity: (req, res) => {
        const {amountSaved, categorySpending, amountSpent} = req.body
        console.log(req.body)
        savings += amountSaved 
        // spending = spending.push(categorySpending[amountSpent])
        if(categorySpending === "clothing"){
            spending.clothing = amountSpent
        } else if(categorySpending === "entertainment"){
            spending.entertainment = amountSpent
        } else if(categorySpending === "gas"){
            spending.gas = amountSpent
        } else if(categorySpending === "groceries"){
            spending.groceries = amountSpent
        } else if(categorySpending === "household items"){
            spending.household = amountSpent
        } else if(categorySpending === "miscellaneous"){
            spending.misc = amountSpent
        }
        console.log(spending)
        res.status(200).send(savings)
    },

    getTotal: (req, res) => {
        res.status(200).send(savings)
    }

    // getActivity: (req, res) => {
    //     const {saved, spent} = req.body

    //     activity = {
    //         saved,
    //         spent
    //     }
    // },

    // getTotal: (req, res) => {
    //     let total = yearToDate
    //     total = total + addedSaved
    // },

    // getSpending: (req, res) => {
    //     let spending = 0
    //     spending = spending + addedSpending
    // }

}