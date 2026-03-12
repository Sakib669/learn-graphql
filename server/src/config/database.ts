import { PrismaClient } from "../generated";

const prisma = new PrismaClient({
  log: ["query", "error"],
  errorFormat: "pretty",
});

export default prisma;
