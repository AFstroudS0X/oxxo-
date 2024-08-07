import {esquema1} from "./empleados.model.js";
import {model} from 'mongoose'

export const ModeloGerentes = new model('Gerentes', esquema1)