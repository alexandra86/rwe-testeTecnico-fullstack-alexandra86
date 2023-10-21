import { Request, Response, NextFunction } from "express";
import { IUserRepo } from "../interfaces/users.interface";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { User } from "../entities/users.entity";

export const ensureUniqueEmailMiddleware = async (
  request: Request,
  _: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const emailFind = await userRepository.findOne({
    where: {
      email: request.body.email,
    },
  });

  if (!!emailFind) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};
