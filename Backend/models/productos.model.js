import {Schema, model} from 'mongoose'

export const esquema = new Schema ({
    object:{
        type: String
    },
    size:{
        type: Strings
    },
    brand:{
        type: String
    },
    origin: {
        type: String
    }
})

export const Modeloproductos = new model ('Productos', esquema)