import { ModeloCombos } from "../models/combos.model.js";

const test =() =>{
    console.log('conexion a combos')
}

ModeloCombos.create({
    product:'Cocacola',
    price:'22',
    discount:'2x1',
    finalprice:'22'
})

export default test