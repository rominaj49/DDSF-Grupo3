const Reserva = require('./RangoFechas');
const FactoryNotificacion = require('./FactoryNotificacion');


class Reserva {
  constructor(huespedReservador, alojamiento, rangoFechas, cantHuespedes, estado, precioPorNoche) {
    this.fechaAlta = new Date();
    this.huespedReservador = huespedReservador; //instancia usuario
    this.alojamiento = alojamiento;
    this.rangoFechas = rangoFechas;
    this.cantHuespedes = cantHuespedes;
    this.estado = estado;
    this.precioPorNoche = precioPorNoche;
  }

  hacerReserva() {
    const notificacion = FactoryNotificacion.crearNotificacionReservaCreada(this);
    notificacion.enviarNotificacion();
    this.estado = "pendiente";
  }

  actualizarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }


}
  
module.exports = Reserva;
  