class CambioEstadoReserva {
  constructor(fecha = new Date(), estado, reserva, motivo, usuario) {
    this.fecha = fecha;
    this.estado = estado; 
    this.reserva = reserva; 
    this.motivo = motivo; 
    this.usuario = usuario; 
  }

  getEstado() { 
    return this.estado;
  }

  getFechaHora() {
    return this.fechaHora;
  }
}

module.exports = CambioEstadoReserva;
