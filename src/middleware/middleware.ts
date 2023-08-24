import {NextFunction, Request, Response} from "express";

const Middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('HEADER', req.header('xxx-auth-token'))
    next();
};

export default Middleware;