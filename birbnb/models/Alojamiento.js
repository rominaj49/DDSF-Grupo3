class Alojamiento {
  constructor(anfitrion, nombre, descripcion, precioPorNoche, moneda, horarioCheckIn, horarioCheckOut, direccion, cantHuespedesMax) {
    this.anfitrion = anfitrion; //clase usuario
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precioPorNoche = precioPorNoche;
    this.moneda = moneda;
    this.horarioCheckIn = horarioCheckIn;
    this.horarioCheckOut = horarioCheckOut;
    this.direccion = direccion;
    this.cantHuespedesMax = cantHuespedesMax;
    this.caracteristicas = []; 
    this.reservas = []; 
    this.fotos = [];
  }
  
  estaDisponibleEn(rangoDeFechas) {
  }

  suPrecioEstaDentroDe(valorMinimo, valorMaximo) {}

  tenesCaracteristica(caracteristica) {
  }

  puedenAlojarse(cantHuespedes) {
  }

  agregarReserva(reserva) {
    this.reservas.push(reserva);
  }
}
  
module.exports = Alojamiento;
  