import * as dotenv from "dotenv"
dotenv.config()

// application
export const VERSION = process.env.VERSION
export const PORT = process.env.PORT || 3000
export const SECRET_KEY = process.env.SECRET_KEY as string
// Line
export const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN as string
export const LINE_CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET as string