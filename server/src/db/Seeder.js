import JobSeeder from "./seeders/JobSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"
import { connection } from "../boot.js"

class Seeder {
  static async seed() {
    console.log("Seeding users...")
    await UserSeeder.seed()

    console.log("Seeding jobs...")
    await JobSeeder.seed()

    console.log("Done! Terminating connection.")

    await connection.destroy()
  }
}

export default Seeder