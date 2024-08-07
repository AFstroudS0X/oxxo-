import {esquema} from "./productos.model.js";
import {model} from 'mongoose'

export const ModeloproductosFlatantes = new model('productosfaltantes', esquema)