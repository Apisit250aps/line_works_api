import * as dotenv from "dotenv"
import { CorsOptions } from "cors"
dotenv.config()

export const corsOptions: CorsOptions = {
  origin: "http://localhost",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}

export const PORT = process.env.PORT || 3000
