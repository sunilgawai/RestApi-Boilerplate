import dotenv from "dotenv";
dotenv.config();

export const {
    APP_PORT,
    DB_URL,
    JWT_SECRET,
    REFRESH_TOKEN_SECRET,
    DEBUG_MODE
} = process.env;