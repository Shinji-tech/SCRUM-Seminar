import express from "express";
import cors from "cors";
import axios from "axios";


const app = express();
app.use(cors());

app.listen(5000,() => console.log("app is running"));

