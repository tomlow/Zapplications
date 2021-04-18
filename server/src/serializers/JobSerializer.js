import { User } from "../models/index.js"


class JobSerializer {
  static async getSearchSummary(job) {
    const allowedAttributes = ["title", "level", "updatedAt"]
    //REVISIT: Is this the best way to do this? Is there a related query we can use? 
    const jobPoster = await User.query().findById(job.userId)

    let serializedJob = {}

    for (const attribute of allowedAttributes) {
      serializedJob[attribute] = job[attribute]
    }

    serializedJob.jobPoster = jobPoster.name

    return serializedJob
  }
}

export default JobSerializer