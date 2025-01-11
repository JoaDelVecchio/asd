import express from "express";
import {
  getAvailableCountries,
  getCountryInfo,
} from "../controllers/countriesControllers.js";

const router = express.Router();

router.get("/", getAvailableCountries);
router.get("/:id", getCountryInfo);

export default router;
