const Model = require("./model.js")

class Posting extends Model {
  static get tableName() {
    return "postings"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId", "jobId"],
      properties: {
        userId: { type: ["string", "integer"] },
        jobId: { type: ["string", "integer"] }
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
          from: "postings.jobId",
          to: "job.id"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "postings.userId",
          to: "user.id"
        }
      }
    }
  }
}

module.exports = Posting