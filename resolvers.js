import { users, posts } from "./data.js";

export const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((u) => u.id === id) || null,

    posts: () => posts,
    post: (_, { id }) => posts.find((p) => p.id === id) || null,
  },
  User: {
    posts: (parent) => posts.filter((p) => p.authorId === parent.id),
  },
  Post: {
    author: (parent) => users.find((u) => u.id === parent.authorId),
  },
};
