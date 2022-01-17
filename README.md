# BlankNote
### Diario de Desarrollo

#### Planificaion y Investigacion

-Para el frontend selecione React ya que me iba a facilitar el renderizado condicional y los manejadores de estados (con hooks), que imagine tendria que utilizarlos para mantener
los datos arraigados.

-A partir de esto investigue la mejor manera de reconocer usuarios, lo mas seguro decidi que era guardar los datos en `localStorage` ya que el cliente lo iba a estar necesitando, no el server (usaria cookies entonces, las mandaria en cada peticion).

-Por lo cual ahora tenia que integrar una base de datos que persista toda la informacion. Para esto use MongoDB hosteada en Atlas.

#### Desarrollo

-Desarrolle una API con node.js y usando express (me facilita mucho el backend) que maneje la entrada de usuario (en el login) y texto (cada renderizado), y la recuperacion del texto al ingresar.

-Tambien dearrole un login modal y una interfaz de personalizacion dinamica, teniendo en cuenta un diseno responsive


-En el caso de que se borre el localStorage y se intente acceder (mediante devTools o el login modal) con un usuario existente esta solventado.No quise implementar un login clasico con contrasena para simplificar la experiencia, en el caso de que un usuario limpie sus datos del navegador, perderia su informacion.

-Escribi test unitarios y uno de integracion para el frontend tratando de cubrir lo maximo posible del codigo.


Me centre en que los datos ingresados sean persistentes, que la interfaz sea solida, que sea una manera confiable de guardar notas y recordatorios,
No deja de ser proyecto de experimentacion, con host de db, server y cliente gratuitos. Y el codigo disponible en github sin ofuscar ni minimizar.
