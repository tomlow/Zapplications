import JobSeeder from "./seeders/JobSeeder.js"
import { connection } from "../boot.js"

class Seeder {
  static async seed() {
    console.log("Seeding jobs...")
    await JobSeeder.seed()

    console.log("Done! Terminating connection.")

    await connection.destroy()
  }
}

export default Seeder