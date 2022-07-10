const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ProjectDatabase'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


//to sent info to frontend
app.get('/api/get', (req, res) => {
    console.log('get')
    const sqlInsert = "SELECT * FROM project_review";
    connection.query(sqlInsert, (err, result) => {
        console.log(result);
        res.send(result)
    })
})

app.post("/api/insert", (req, res) => {

    const projectName = req.body.projectName
    const projectReview = req.body.projectReview

    const sqlInsert = "INSERT INTO project_review (projectName, projectReview) VALUES (?, ?)"
    connection.query(sqlInsert, [ projectName, projectReview ], (err, result) => {
        console.log(err)
        console.log(result);
        res.send(result)
    })
})


app.listen(4001, () => {
    console.log('Server running on port 4001')
})
