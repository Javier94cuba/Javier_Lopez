import persona from "../interfaces/interface_persona";

const javier : persona= {
    apellido: "cepero",
    direccion:"",
    nombre:"Javier"
}

console.log(javier.nombre)

function sumar (valor_a:number,valor_b:number) {
    return valor_a+valor_b;
}

export {sumar};

