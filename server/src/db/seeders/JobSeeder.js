import { Job, User } from "../../models/index.js"

// const rng = (base, range) => {
//   return Math.floor(Math.random() * range + base)
// }

// const userCount = await User.query().where('isEmployer', true).count('id as number')

const user1 = await User.query().first()
const user2 = await User.query().findById(2)

const job1 = {
  title: "QA Engineer",
  userId: parseInt(user1.id),
  remote: true,
  minSal: 55000,
  maxSal: 85000,
  level: "Entry Level",
  location: "Mountain View, CA",
  department: "Engineering",
  description: "Write tests, be happy."
}

const job2 = {
  title: "Software Engineer",
  userId: parseInt(user1.id),
  remote: false,
  minSal: 70000,
  maxSal: 100000,
  level: "Entry Level",
  location: "New York, NY",
  department: "Engineering",
  description: "What is this job, anyway. WHAT IS IT."
}

const job3 = {
  title: "Sales Engineer",
  userId: user2.id,
  remote: true,
  minSal: 80000,
  maxSal: 100000,
  level: "Mid-Level",
  location: "Boston, MA",
  department: "Sales",
  description: "Tell me a tale."
}

class JobSeeder {
  static async seed() {
    await Job.query().insert(job1)
    await Job.query().insert(job2)
    await Job.query().insert(job3)
  }
}

export default JobSeeder