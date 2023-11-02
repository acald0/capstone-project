let savings = 0
let spending = {'clothing':0, 'entertainment': 0, 'gas': 0, 'groceries': 0, 'household': 0, 'miscellaneous': 0}

module.exports = {
    addGoal: (req, res) => {
        let {dateVariable, yearlyIncome, percentToSave, weeksSaved} = req.body
        let yearToDate = ((+yearlyIncome / 52)/percentToSave) * +weeksSaved
        yearToDate = Math.trunc(yearToDate)
        console.log(dateVariable)
        savings += yearToDate
        // console.log(req.body)
        console.log(weeksSaved)
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
            spending.clothing += amountSpent
        } else if(categorySpending === "entertainment"){
            spending.entertainment += amountSpent
        } else if(categorySpending === "gas"){
            spending.gas += amountSpent
        } else if(categorySpending === "groceries"){
            spending.groceries += amountSpent
        } else if(categorySpending === "household"){
            spending.household += amountSpent
        } else if(categorySpending === "miscellaneous"){
            spending.misc += amountSpent
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
    },
    
    getSpending: (req, res) => {
        res.status(200).send(spending)
        console.log("getSpending's working")
    }

}