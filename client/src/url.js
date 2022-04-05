import dotenv from "dotenv";
dotenv.config();

export const URL = process.env.REACT_APP_API || "http://localhost:3001";
