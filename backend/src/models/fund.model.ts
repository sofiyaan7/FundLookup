// Placeholder model definition — to be replaced with a real ORM schema
// (e.g. Prisma, TypeORM, Mongoose) once a database is connected.

export interface FundModel {
  id: string
  slug: string
  name: string
  category: string
  status: 'Active' | 'Exited'
  // ...full schema to mirror src/data/funds.ts on the frontend
}
