import { Post } from "@prisma/client";
import db from "./db";

export default {
  getPosts: async () => {
    return db.post.findMany();
  },
  createPost: async ({
    authorId,
    content,
    published,
    title,
  }: Omit<Post, "id">) => {
    return db.post.create({
      data: {
        authorId,
        content,
        published,
        title,
      },
    });
  },
  updatePost: async (
    id: number,
    { authorId, content, published, title }: Omit<Post, "id">
  ) => {
    return db.post.update({
      where: { id },
      data: {
        authorId,
        content,
        published,
        title,
      },
    });
  },
  deletePost: async (id: number) => {
    return db.post.delete({ where: { id } });
  },
};
