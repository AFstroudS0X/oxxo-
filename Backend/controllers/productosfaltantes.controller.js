import { ModeloproductosFlatantes } from "../models/productosfaltantes.model.js";

const test =() => {
    console.log('conexion a productos faltantes')
}

ModeloproductosFlatantes.create({
    object:'rice',
    size:'big',
    brand:'koreanrice',
    origin:'Korean'
})

export default test

