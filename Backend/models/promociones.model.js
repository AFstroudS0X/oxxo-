import {Schema, model} from 'mongoose'

export const esquema2 = new Schema ({
    product: {
        type: String
    },
    price:{
        type: String
    },
    discount:{
        type: String
    },
    finalprice:{
        type: String
    }
})

export const ModeloPromociones = new model ('Promociones', esquema2)