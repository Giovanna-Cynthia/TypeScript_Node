import express, { Request, Response } from "express";
import { IUser } from "./types/user";

//Exemplo, nome pode ser uma String ou null
const nome: String | null = null;

const app = express();

app.use(express.json());

// Importar o request e response
app.post("/criar", (req: Request, res: Response) => {
    const { nome, senha, endereco } = req.body;

    const usuario: IUser = {
        nome,
        senha,
        endereco
    };

});