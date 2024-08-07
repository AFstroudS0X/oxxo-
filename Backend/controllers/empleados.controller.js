import { ModeloEmpleados } from "../models/empleados.model.js";

const test =() => {
    console.log('conexion a empleados establecida')
}

ModeloEmpleados.create({
    name: 'Arturo',
    apepat:'Avila',
    apemat:'Gutierrez'
})

export default test