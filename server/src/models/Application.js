const Model = require("./Model.js")

class Application extends Model {
  static get tableName() {
    return "applications"
  }

  static set jsonSchema() {
    return {
      type: "object",
      required: ["userId", "jobId", "resumeLink"],
      properties: {
        userId: { type: ["integer", "string"] },
        jobId: { type: ["integer", "string"] },
        resumeLink: { type: "string" }
      }
    }
  }

  static get relationMappings() {
    const { Job, User } = require("./index.js")
    return {
      job: {
        relation: Model.BelongsToOneRelation,
        modelClass: Job,
        join: {
          from: "applications.jobId",
          to: "jobs.id"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "applications.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Application