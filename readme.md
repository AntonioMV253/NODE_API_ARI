<em>Muchas gracias por considerarme para la oferta, es mi primera vez realizando una api desde cero asi que esta sujeto a errores y fallos a nivel de logica aqui dejare el apartado de las api y como consultarlas</em>

Comando para Inicializar proyecto: *"npm run dev"*

METODOS EXISTENTES:
Habitaciones Disponibles:

Método: GET
Ruta: /api/habitaciones/disponibles?fecha=yyyy-mm-dd
Descripción: Retorna la disponibilidad de habitaciones para una fecha específica.
Parámetros de consulta:
fecha: La fecha específica para la cual deseas verificar la disponibilidad de habitaciones (en formato yyyy-mm-dd).
Actualizar Precio de Habitación:

Método: POST
Ruta: /api/habitaciones/actualizar-precio
Descripción: Permite actualizar el precio por noche de las habitaciones según el tipo.
Cuerpo de la petición (formato JSON):
tipoHabitacion: El tipo de habitación que deseas actualizar.
nuevoPrecio: El nuevo precio por noche para la habitación.
Reportar Ocupación:

Método: GET
Ruta: /api/reservas/reportar-ocupacion?fechaInicio=yyyy-mm-dd&fechaFin=yyyy-mm-dd
Descripción: Genera un reporte de ocupación por fechas dentro de un rango especificado.
Parámetros de consulta:
fechaInicio: La fecha de inicio del rango para el reporte (en formato yyyy-mm-dd).
fechaFin: La fecha de fin del rango para el reporte (en formato yyyy-mm-dd).
Reservas por Cliente:

Método: GET
Ruta: /api/reservas/por-cliente/:clienteId
Descripción: Obtiene todas las reservas asociadas a un cliente específico.
Parámetros de ruta:
clienteId: El ID del cliente del cual deseas obtener las reservas asociadas.
Revisar tabla (General):

Método: GET
Ruta: /api/revisar/:tabla
Descripción: Permite realizar una revisión general de los registros en una tabla específica de la base de datos.
Parámetros de ruta:
tabla: El nombre de la tabla que deseas revisar.

Aparte todo lo necesario para dicho proyecto y lo que utilice esta dentro de *package.json* 
Cambio minimo en readme.md 10/04/24 7:32 am
