const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

//GET
server.get("/api/accounts", (request, response) => {
    db.select("*").from("accounts")
        .then((accounts) => {
            response.status(200).json({ ...accounts });
        })
        .catch((error) => {
            response.status(500).json({ message: "Internal server error. Scream at the devs until this is FIXED." });
            console.log("\n\n\n !!! *** ~INTERNAL SERVER ERROR~ *** !!!\n", error, "\n\n");
        })
});

//POST
server.post("/api/accounts", (request, response) => {
    db("accounts").insert({ ...request.body })
        .then((things) => {
            response.status(200).json({
                message: "All good!",
                stuff: things,
            });
        })
        .catch((error) => {
            response.status(500).json({ message: "Internal server error. Scream at the devs until this is FIXED." });
            console.log("\n\n\n !!! *** ~INTERNAL SERVER ERROR~ *** !!!\n", error, "\n\n");
        })
})

//PUT
server.put("/api/accounts", (request, response) => {
    db("accounts").where("id", "=", request.body.id).update({ ...request.body })
        .then((things) => {
            response.status(200).json({
                message: "All good!",
                stuff: things,
            });
        })
        .catch((error) => {
            response.status(500).json({ message: "Internal server error. Scream at the devs until this is FIXED." });
            console.log("\n\n\n !!! *** ~INTERNAL SERVER ERROR~ *** !!!\n", error, "\n\n");
        })
})

//DELET THIS
server.delete("/api/accounts", (request, response) => {
    db("accounts").where("id", "=", request.body.id).delete().
        then((things) => {
            response.status(200).json({
                message: "All good!",
                stuff: things,
            });
        })
        .catch((error) => {
            response.status(500).json({ message: "Internal server error. Scream at the devs until this is FIXED." });
            console.log("\n\n\n !!! *** ~INTERNAL SERVER ERROR~ *** !!!\n", error, "\n\n");
        })
})

module.exports = server;