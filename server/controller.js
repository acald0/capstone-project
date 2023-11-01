let savings = 0
let spending = {}

module.exports = {
    addGoal: (req, res) => {
        let {dateVariable, yearlyIncome, percentToSave} = req.body
        let yearToDate = (+yearlyIncome / 52)
        console.log(dateVariable)
        savings += yearToDate
        // console.log(req.body)
        res.status(200).send({savings})
    },

    addExtraSavings: (req, res) => {
        const {extraSavings} = req.body
        savings += extraSavings
        res.status(200).send({savings})
    },

    getGoal: (req, res) => {
        res.status(200).send({savings})
    },

    addActivity: (req, res) => {
        let {amountSaved, categorySpending, amountSpent} = req.body
        console.log(req.body)
        savings += +amountSaved 
        amountSpent = +amountSpent
        // spending = spending.push(categorySpending[amountSpent])
        if(categorySpending === "clothing"){
            if(spending.clothing){
                spending.clothing += amountSpent
            } else{
                spending.clothing = amountSpent
            }
        } else if(categorySpending === "entertainment"){
            if(spending.entertainment){
                spending.entertainment += amountSpent
            } else{
                spending.entertainment = amountSpent
            }
        } else if(categorySpending === "gas"){
            if(spending.gas){
                spending.gas += amountSpent
            } else{
                spending.gas = amountSpent
            }
        } else if(categorySpending === "groceries"){
            if(spending.groceries){
                spending.groceries += amountSpent
            } else{
                spending.groceries = amountSpent
            }
        } else if(categorySpending === "household items"){
            if(spending.household){
                spending.household += amountSpent
            } else{
                spending.household = amountSpent
            }
        } else if(categorySpending === "miscellaneous"){
            if(spending.misc){
                spending.misc += amountSpent
            } else{
                spending.misc = amountSpent
            }
        }
        console.log(spending)
        res.status(200).send({savings})
        console.log('addActivity logs')
        console.log('----savings----')
        console.log(savings)
        console.log('----spending----')
        console.log(spending)
        console.log('----------------')
    },

    getTotal: (req, res) => {
        res.status(200).send({savings})
        console.log('getTotal logs')
        console.log('----savings----')
        console.log(savings)
        console.log('----spending----')
        console.log(spending)
        console.log('----------------')
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