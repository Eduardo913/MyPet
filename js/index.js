"use strict"

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.apellido = "";
        this.edad = undefined;
    }

    set setApellido(apellido) {
        this.apellido = apellido;
    }

    set setEdad(edad) {
        this.edad = edad;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getApellido() {
        return this.apellido;
    }

    get getNombre() {
        return this.nombre;
    }

    get getEdad() {
        return this.edad;
    }
}

class Registro {
    constructor(correoElectronico, nombreMascota, diaReservacion) {
        this.correoElectronico = correoElectronico;
        this.nombreMascota = nombreMascota;
        this.diaReservacion = diaReservacion;
    }

    set setCorreoElectronico(correo) {
        this.correoElectronico = correo;
    }
    set setNombreMascota(nombre) {
        this.nombreMascota = nombre;
    }

    set setDiaReservacion(diaReservacion) {
        this.diaReservacion = diaReservacion;
    }

    get getCorreoElectronico() {
        return this.correoElectronico;
    }
    get getNombreMascota() {
        return this.nombreMascota;
    }

    get getDiaReservacion() {
        return this.diaReservacion;
    }

    hacerReservacion(habitacion,persona) {
        console.log(`se ha hecho tu reservacion de la abitacion ${habitacion.getAbitacion} del dia ${this.diaReservacion}`,
        `sabemos que eres ${persona.getNombre} y que tu mascota es ${this.nombreMascota}`)
    }
}

class Habitacion {
    constructor(nombreAbitacion) {
        this.nombreAbitacion = nombreAbitacion;
    }

    set setAbitacion(abitacion) {
        this.nombreAbitacion = abitacion;
    }

    get getAbitacion(){
        return this.nombreAbitacion;
    }
}

