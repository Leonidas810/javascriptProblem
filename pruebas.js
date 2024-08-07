const Alumnos = [
    { alumno: 'Alumno1', edad: 20, sexo: 'M' },
    { alumno: 'Alumno2', edad: 20, sexo: 'M' },
    { alumno: 'Alumno3', edad: 20, sexo: 'M' }
];
const Maestros = [
    { alumno: 'Maestro1', edad: 20, sexo: 'M' },
    { alumno: 'Maestro2', edad: 20, sexo: 'M' },
    { alumno: 'Maestro3', edad: 20, sexo: 'M' }
];
const Papas = [
    { alumno: 'Papas1', edad: 20, sexo: 'M' },
    { alumno: 'Papas2', edad: 20, sexo: 'M' },
    { alumno: 'Papas3', edad: 20, sexo: 'M' }
];
const promesa1 = new Promise((resolve, reject) => {
    if(Alumnos.length === 0)reject( new Error('No hay datos'));
    setTimeout(() => {
        resolve(Alumnos);
    }, 2000);
});

const promesa2 = new Promise((resolve, reject) => {
    if(Maestros.length === 0)reject( new Error('No hay datos'));
    setTimeout(() => {
        resolve(Maestros);
    }, 2000);
});

const promesa3 = new Promise((resolve, reject) => {
    if(Papas.length === 0)reject( new Error('No hay datos'));
    setTimeout(() => {
        resolve(Papas);
    }, 2000);
});


async function fetchDatosAlumnos (datos) {
    let lista = await promesa1;
    console.log(lista);
}

async function fetchDatosMaestrosPapas(datos){
    try {
        const resultado = await Promise.all([promesa2, promesa3]);
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}


fetchDatosAlumnos();
fetchDatosMaestrosPapas();