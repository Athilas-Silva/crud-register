const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//Conexão com o banco de dados
const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "empregos_aqui"
});

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
    const sql = "SELECT id, nome_completo, cpf, email, telefone_cel, created_at, updated_at FROM usuarios";

    db.query(sql, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        
        const users = result.map(user => {
            const createdFormat = new Date(user.created_at);
            const updatedFormat = new Date(user.updated_at);

            return { 
                "id": user.id,
                "nome_completo": user.nome_completo,
                "cpf": user.cpf,
                "email": user.email,
                "telefone_cel": user.telefone_cel,
                "created_at": createdFormat.toLocaleString(),
                "updated_at": updatedFormat.toLocaleString()
            }
        });
        return res.json(users);
    });
});

app.post("/users", (req, res) => {
    const nome = req.body.nome_completo;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const telefone = req.body.telefone_cel;
    const created = new Date().toLocaleString("sv-SE");
    const update = new Date().toLocaleString("sv-SE");

    if(nome == "" || nome == undefined){
        return res.status(400).json({ msg: "Por favor, informe seu nome" });
    }

    if(cpf == "" || cpf == undefined){
        return res.status(400).json({ msg: "Por favor, informe seu cpf" });
    }

    if(email == "" || email == undefined){
        return res.status(400).json({ msg: "Por favor, informe seu E-mail" });
    }

    if(telefone == undefined || telefone == ""){
        return res.status(400).json({ msg: "Por favor, informe seu telefone"});
    }

    const sql = "INSERT INTO usuarios ( nome_completo, cpf, email, telefone_cel, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [nome, cpf, email, telefone, created, update], (err, result) => {

        if(err){
            return res.status(400).json(err);
        }

        return res.status(201).json(result);
    });

});

app.put("/users", (req, res) => {
    const id = req.body.idUser;
    const nome = req.body.nomeUser;
    const cpf = req.body.cpfUser;
    const email = req.body.emailUser;
    const telefone = req.body.telefoneUser;
    const update = new Date().toLocaleString("sv-SE");

    const sql = "UPDATE usuarios SET nome_completo = ?, cpf = ?, email = ?, telefone_cel = ?, updated_at = ? WHERE id = ?";

    db.query(sql, [nome, cpf, email, telefone, update, id], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }

        return res.json(result);
    });
});

app.delete("/users", (req, res) => {
    const id = req.body.id;

    const sql = "DELETE FROM usuarios WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }

        return res.status(200).json(result);
    });
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});