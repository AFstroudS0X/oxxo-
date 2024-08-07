import { ModeloPromociones } from "../models/promociones.model.js";

const test =() => {
    console.log('conexion  a las promociones')
}

ModeloPromociones.create({
    product:'gatorade',
    price:'23',
    discount:'10%',
    finalprice:'18'
})

export default test