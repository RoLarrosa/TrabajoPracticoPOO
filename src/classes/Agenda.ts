import { Contacto } from "./Contactos";

export class Agenda {
    contactos: Contacto[] = [];
  
    // Método para agregar un nuevo contacto
    agregarContacto(nombre: string, email: string, telefono: string) {
      const nuevoContacto = new Contacto(nombre, email, telefono);
      this.contactos.push(nuevoContacto);
      console.log(`Contacto ${nombre} agregado.`);
    }
  
    // Método para buscar contactos por nombre
    buscarContactoPorNombre(nombre: string) {
        const resultados = this.contactos.filter((contacto) =>
            contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
    
        if (resultados.length === 0) {
            console.log(`No se encontraron contactos con el nombre "${nombre}".`);
        } else {
            console.log(`Resultados de búsqueda para "${nombre}":`);
            resultados.forEach((contacto) => {
            console.log(`Nombre: ${contacto.nombre}`);
            console.log(`Correo electrónico: ${contacto.email}`);
            console.log(`Teléfono: ${contacto.telefono}`);
            console.log('------------------------');
            });
        }
    }
  
    // Método para mostrar la lista completa de contactos
    mostrarListaDeContactos() {
        if (this.contactos.length === 0) {
            console.log('La lista de contactos está vacía.');
        } else {
            console.log('Lista de contactos:');
            this.contactos.forEach((contacto) => {
            console.log(`Nombre: ${contacto.nombre}`);
            console.log(`Correo electrónico: ${contacto.email}`);
            console.log(`Teléfono: ${contacto.telefono}`);
            console.log('------------------------');
            });
        }
    }
}