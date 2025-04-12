const Usuario = require('./Usuario');
const FactoryNotificacion = require('./FactoryNotificacion');

class Anfitrion {
  constructor() {
    this.alojamientos = [];
  }

  aceptarReserva(reserva) {
    const notificacion = FactoryNotificacion.crearNotificacionReservaAceptada(reserva);
    notificacion.enviarNotificacion();
    reserva.actualizarEstado("Aceptada");

  }
  rechazarReserva(reserva) {
    const notificacion = FactoryNotificacion.crearNotificacionReservaCancelada(reserva);
    notificacion.enviarNotificacion();
    reserva.actualizarEstado("Rechazado");

  }

}

module.exports = Anfitrion;
