import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client"; // Ajusta el import si usas una ruta custom
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // 1. Creamos el pool de conexiones de 'pg'
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    // 2. Creamos el adaptador usando el pool
    const adapter = new PrismaPg(pool);

    // 3. Pasamos el adaptador al constructor de PrismaClient
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
