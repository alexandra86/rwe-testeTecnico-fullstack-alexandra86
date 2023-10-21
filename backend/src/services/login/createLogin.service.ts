import "dotenv/config";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { ILogin, ILoginResponse } from "../../interfaces/login.interface";
import { IUserRepo } from "../../interfaces/users.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";

export const createLoginService = async (
  loginData: ILogin
): Promise<ILoginResponse> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  const {
    id,
    name,
    email,
    phone,
    birthday,
    bio,
    image,
    linkedin,
    portfolio,
    facebook,
    gender,
  } = user;

  return {
    token,
    user: {
      id,
      name,
      email,
      phone,
      birthday,
      bio,
      image,
      linkedin,
      portfolio,
      facebook,
      gender,
    },
  };
};
