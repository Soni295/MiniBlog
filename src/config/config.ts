export const config = {
  db: process.env.DATABASE ?? "",
  dbPort: process.env.DB_PORT_LOCAL ?? "",
  dbPass: process.env.DB_PASSWORD ?? "",
  dbUser: process.env.DB_USER ?? ""
}
