import { object } from "webidl-conversions";
import { Modeloproductos } from "../models/productos.model";

const test =() => {
    console.log('conexion a productos')
}

Modeloproductos.create({
    object:'Milk',
    size: 'Small',
    brand: 'SanMarcos',
    origin: 'Aguascalientes'

})

export default test