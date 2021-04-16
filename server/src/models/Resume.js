const Model = require("./Model.js")

class Resume extends Model {
  static get tableName() {
    return "resumes"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "userId", "s3Link"],
      properties: {
        name: { type: "string" },
        userId: { type: ["string", "integer"] },
        s3Link: { type: "string" }
      }
    }
  }

  static get relationMappings() {
    const { User } = require("./index.js")
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "resumes.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Resume