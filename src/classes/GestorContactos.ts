import { Agenda } from "./Agenda";
  
  // Ejemplo de uso
const agenda = new Agenda();

agenda.agregarContacto('Rocio Larrosa', 'rocio@gmail.com', '123-456-7890');
agenda.agregarContacto('Monica Larrosa', 'moni@yahoo.com', '987-654-3210');
agenda.agregarContacto('Elisa Cladis', 'eli@hotmail.com', '555-123-4567');

agenda.mostrarListaDeContactos();

agenda.buscarContactoPorNombre('rocio'); 

// Puedes seguir agregando más contactos y realizando búsquedas según sea necesario.
  