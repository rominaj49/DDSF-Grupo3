class Usuario {
  constructor(nombre, email, tipo) {
    this.nombre = nombre;
    this.email = email;
    this.tipo = tipo; // aca se instancian hueped o anfitrion
    //recomendaria agregar notis?
    this.notificaciones = [];
  }

  recibirNotificacion(notificacion) {
    this.notificaciones.push(notificacion);
  }

  mostrarNotificaciones() {
    this.notificaciones.forEach((noti, index) => {
      console.log(`${index + 1}. ${noti.mensaje} (${noti.leida ? 'Leída' : 'No leída'})`);
    });
  }
  
  mostrarNotificacionesLeidas() {
    return this.notificaciones.filter(n => n.leida);
  }

  mostrarNotificacionesNoLeidas() {
    return this.notificaciones.filter(n => !n.leida);
  }


  
  
}
  
module.exports = Usuario;
  