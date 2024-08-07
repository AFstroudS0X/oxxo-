import { ModeloGerentes } from "../models/gerentes.model.js";

const test =() => {
    console.log('conexion a gerentes establecida')
}

ModeloGerentes.create({
    name: 'Luis',
    apepat:'Daniel',
    apemat:'Santillan'
})

export default test