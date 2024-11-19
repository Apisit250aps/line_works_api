import { Request, Response } from "express";

export default {
    async index(req: Request, res: Response) {
        res.send("Hello World");
    }
}