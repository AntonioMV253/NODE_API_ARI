import express from "express";
import cors from "cors";
import morgan from "morgan";
import habitacionesRoutes from "./routes/habitaciones.routes.js";
import reservasRoutes from "./routes/reservas.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use("/api/habitaciones", habitacionesRoutes);
app.use("/api/reservas", reservasRoutes);

// Ruta para revisión general
app.get("/api/revisar/:tabla", async (req, res) => {
    const { tabla } = req.params;
    try {
        const pool = await getConnection();
        const result = await pool.request().query(`SELECT * FROM ${tabla}`);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default app;
