import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || "Pruebas";
export const DB_PASSWORD = process.env.DB_PASSWORD || "prueba1$";
export const DB_SERVER = process.env.DB_SERVER || "DESKTOP-VGS4H1P\\SQLEXPRESS";
export const DB_DATABASE = process.env.DB_DATABASE || "Hosteleria_Reservacion";