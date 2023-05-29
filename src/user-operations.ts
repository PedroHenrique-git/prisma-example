import { User } from "@prisma/client";
import db from "./db";

export default {
  getUsers: async () => {
    return db.user.findMany({ include: { posts: true } });
  },
  getLastUser: async () => {
    return db.user.findFirst({
      orderBy: {
        id: "desc",
      },
    });
  },
  createUser: async ({ email, name }: Omit<User, "id">) => {
    return db.user.create({
      data: {
        email,
        name,
      },
    });
  },
  updateUser: async (id: number, { email, name }: Omit<User, "id">) => {
    return db.user.update({
      where: { id },
      data: {
        email,
        name,
      },
    });
  },
  deleteUser: async (id: number) => {
    return db.user.delete({ where: { id } });
  },
};
