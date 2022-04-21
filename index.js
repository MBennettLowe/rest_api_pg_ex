const express = require('express');
const pool = require("./db");

const app = express();
const port = 3000;

app.use(express.json()) // => req.body

// Routes

// Get all todos

// Get a todo

// Create a todo
app.post("/todos", async(req, res) => {
    try{
        const { description } = req.body;
        const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES ($1) RETURNING *",
        [description]
    );
        
      res.json(newTodo.row[0]);
    } catch(err) {
        console.log(err.message)
    }
});

// Update a todo

// Delete a todo
//app.use(routes, )

app.listen(`${port}`, () => {
    console.log(`Hello from port:${port}`)
})