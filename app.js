const express = require("express");

const createdb = require("./todo/rest-api/todo-rest-api-server");
const todoRouter = require("./todo/rest-api/todo-router");
const todoManeger = require("./todo/todo-service-maneger");
const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

// app.use("/todo",todoRouter);
//createdb();
todoManeger();

module.exports = app;