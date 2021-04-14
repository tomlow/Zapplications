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
    const { Application, Posting } = require("./index.js")
    return {
      applications: {
        relation: Model.HasManyRelation,
        modelClass: Application,
        join: {
          from: "jobs.id",
          to: "applications.jobId"
        }
      },
      postings: {
        relation: Model.HasManyRelation,
        modelClass: Posting,
        join: {
          from: "jobs.id",
          to: "postings.jobId"
        }
      }
    }
  }
}

module.exports = Job