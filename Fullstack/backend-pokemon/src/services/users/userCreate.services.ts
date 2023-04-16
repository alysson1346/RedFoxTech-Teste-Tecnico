import { IUserCreate } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";

const currentDate = new Date();

const userCreateService = async ({
  name,
  email,
  password,
  is_admin,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.is_admin = is_admin;
  user.created_at = currentDate;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
