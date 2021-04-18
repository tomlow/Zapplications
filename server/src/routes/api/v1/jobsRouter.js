import express from "express"
import Job from "../../../models/Job.js"

const jobsRouter = new express.Router()

jobsRouter.get("/", async (req, res) => {
  try {

    //FIXME: edit such that any variety of search parameters could be applied here. 
    const { title, location, level, fullTime } = req.body
    //FIXME: edit this so that you're looking for what INCLUDES title, not what matches title
    //FIXME: also figure out a way to do this query nicer
    const jobs = await Job.query().select("title", "location", "level", "fullTime", "remote").where("title", title).where("location", location).where("level", level).where("fullTime", fullTime).where("remote", remote).orderBy("createdAt")

    const serializedJobs = jobs.map(job => jobSerializer.getSummary(job))
    //jobs should be returning an array of objects with only the information necessary to display the search results on the front end. A more specified ID route will be used to display all job info on show page. Last note: we will need to do some finagling to get the time passed since posting, as right now it's just returning the updatedAt property of the job record. 
    res.status(200).json({ jobs: serializedJobs })
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

export default jobsRouter