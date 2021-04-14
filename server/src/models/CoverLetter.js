const Model = require("./Model.js")

class CoverLetter extends Model {
  static get tableName() {
    return "coverLetters"
  }

  static set jsonSchema() {
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
          from: "coverLetters.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = CoverLetter