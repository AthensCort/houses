import express from "express";
import { houseHandler } from "../handler/house";

const router = express.Router();

router.get("/", (req, res, next) => houseHandler.getAllHouses(req, res, next));

router.get("/:id", (req, res, next) => houseHandler.getHouseById(req, res, next));

router.get("/filter/search", async (req, res, next) => {
    await houseHandler.getHousesByTypeAndPrice(req, res, next);
});

export default router;