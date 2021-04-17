import { Job, User } from "../../models/index.js"

const rng = (base, range) => {
  return Math.floor(Math.random() * range + base)
}

const userCount = await User.query().count('id as number')

const job1 = {
  name: "QA Engineer",
  userId: rng(1, userCount), remote: true,
  minSal: 55000,
  maxSal: 85000,
  location: "Mountain View, CA",
  department: "Engineering",
  description: "Write tests, be happy."
}

const job2 = {
  name: "Software Engineer",
  userId: rng(1, userCount),
  remote: false,
  minSal: 70000,
  maxSal: 100000,
  location: "New York, NY",
  department: "Engineering",
  description: "What is this job, anyway. WHAT IS IT."
}

const job3 = {
  name: "Sales Engineer",
  userId: rng(1, userCount),
  remote: true,
  minSal: 80000,
  maxSal: 100000,
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