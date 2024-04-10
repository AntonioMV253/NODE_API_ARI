import { Router } from "express";
import {
    reportarOcupacion,
} from "../controllers/reservas.controller.js";
import { BuscarReservasPorCliente } from "../database/procedimientos.js";

const router = Router();

router.get("/reportar-ocupacion", reportarOcupacion);

router.get("/por-cliente/:clienteId", async (req, res) => {
    const { clienteId } = req.params;
    try {
        const reservas = await BuscarReservasPorCliente(parseInt(clienteId));
        res.json(reservas);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;