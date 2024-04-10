import { Router } from "express";
import { getDisponibilidadHabitaciones, actualizarPrecioHabitacion } from "../controllers/habitaciones.controller.js";

const router = Router();

router.get("/disponibles", getDisponibilidadHabitaciones);

router.post("/actualizar-precio", actualizarPrecioHabitacion);

export default router;
