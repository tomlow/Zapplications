const Model = require("./Model.js")

class Job extends Model {
  static get tableName() {
    return "jobs"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "location", "level", "description", "remote"],
      properties: {
        title: { type: "string" },
        location: { type: "string" },
        level: { type: "string" },
        description: { type: "string" },
        remote: { type: "boolean" }
      }
    }
  }

  static get relationMappings() {
    const { Application, User } = require("./index.js")
    return {
      applications: {
        relation: Model.HasManyRelation,
        modelClass: Application,
        join: {
          from: "jobs.id",
          to: "applications.jobId"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "jobs.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Job