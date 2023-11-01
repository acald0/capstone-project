let express = require('express')
let app = express()
let cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/public'))

const { addGoal, addActivity, getTotal, getSpending } = require('./controller.js')

app.post("/api/incomeandsavings", addGoal);

app.post("/api/savedandspent", addActivity);

app.get("/api/totalsavings", getTotal);

app.get("/api/spending", getSpending);


app.listen(4000, () => console.log("Server running on 4000"));