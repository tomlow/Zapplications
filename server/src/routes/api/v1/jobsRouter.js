import express from "express"
import Job from "../../../models/Job.js"

const jobsRouter = new express.Router()

jobsRouter.get("/", async (req, res) => {
  try {
    const { title, location, level, fullTime } = req.body

    const jobs = await Job.query().select("title", "location", "level", "fullTime").where("title", title).where("location", location).where("level", level, "fullTime", fullTime).orderBy("createdAt")

    const serializedJobs = jobSerializer.getSummary(jobs)
    res.status(200).json({ jobs: serializedJobs })
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

export default jobsRouter