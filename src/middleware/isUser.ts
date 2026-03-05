import { Request, Response, NextFunction } from "express";

const isUser = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.session.user || req.session.user.role !== "user") {
    res.redirect("/login");
    return;
  }

  next();
};

export default isUser;