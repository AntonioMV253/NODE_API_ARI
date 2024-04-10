import { getConnection, sql } from "./connection.js";

export const BuscarReservasPorCliente = async (clienteId) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("clienteId", sql.Int, clienteId)
      .query("SELECT * FROM Reservas WHERE ClienteID = @clienteId");

    return result.recordset;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default BuscarReservasPorCliente; // Exportamos por defecto la función
