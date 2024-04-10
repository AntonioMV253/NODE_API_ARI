import { getConnection, sql } from "../database/connection.js"; 

export const reportarOcupacion = async (req, res) => {
    const { fechaInicio, fechaFin } = req.query;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("fechaInicio", sql.Date, fechaInicio)
            .input("fechaFin", sql.Date, fechaFin)
            .query(`
                WITH Fechas AS (
                  SELECT @fechaInicio AS Fecha
                  UNION ALL
                  SELECT DATEADD(day, 1, Fecha)
                  FROM Fechas
                  WHERE Fecha < @fechaFin
                )
                SELECT 
                  Fecha,
                  COUNT(CASE WHEN Disponible = 0 THEN 1 END) AS HabitacionesOcupadas,
                  COUNT(CASE WHEN Disponible = 1 THEN 1 END) AS HabitacionesDisponibles
                FROM 
                  Fechas
                LEFT JOIN Reservas ON Fechas.Fecha BETWEEN Reservas.FechaEntrada AND Reservas.FechaSalida
                LEFT JOIN Habitaciones ON Reservas.HabitacionID = Habitaciones.HabitacionID
                GROUP BY 
                  Fecha;
            `);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default reportarOcupacion;
