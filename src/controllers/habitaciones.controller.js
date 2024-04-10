import { getConnection, sql } from "../database/connection.js";

export const getDisponibilidadHabitaciones = async (req, res) => {
    const { fecha } = req.query;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("fecha", sql.Date, fecha)
            .query(`
        SELECT TipoHabitacion, 
               CASE WHEN COUNT(*) > 0 THEN 'Disponible'
                    ELSE 'No Disponible'
               END AS Disponibilidad
        FROM Habitaciones
        LEFT JOIN Reservas ON Habitaciones.HabitacionID = Reservas.HabitacionID
                            AND @fecha BETWEEN FechaEntrada AND FechaSalida
        GROUP BY TipoHabitacion;
      `);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const actualizarPrecioHabitacion = async (req, res) => {
    const { tipoHabitacion, nuevoPrecio } = req.body;

    if (tipoHabitacion == null || nuevoPrecio == null) {
        return res.status(400).json({ msg: "Bad Request. Please provide type of room and new price" });
    }

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("tipoHabitacion", sql.VarChar, tipoHabitacion)
            .input("nuevoPrecio", sql.Decimal, nuevoPrecio)
            .query(`
        UPDATE Habitaciones
        SET PrecioPorNoche = @nuevoPrecio
        WHERE TipoHabitacion = @tipoHabitacion;
      `);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
