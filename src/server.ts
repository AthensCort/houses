import express from 'express'
import houseRoutes from "./routes/house"

const app = express();
app.use(express.json());
app.use("/api/house", houseRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("El server carga dentro del puerto "+PORT));

//IDENTIFICACION MENSAJE
//Carolina de jesus Ortega Cepeda A01282386

//Actividad dde houses (trbajo en clase)
//funciones de get, get con id, filter on type y con price
//semana antes de semana santa owowowowowowow