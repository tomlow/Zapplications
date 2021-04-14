/* eslint-disable no-console */
const tableName = "users"

/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  const tableExists = await knex.schema.hasTable(tableName)

  if (!tableExists) {
    console.log(`Creating ${tableName}`)
    return knex.schema.createTable(tableName, (table) => {
      table.bigIncrements("id")
      table.string("name").notNullable()
      table.string("email").notNullable().unique()
      table.string("cryptedPassword").notNullable()
      table.string("location").notNullable()
      table.string("github")
      table.string("linkedin")
      table.string("phone")
      table.string("picture")
      table.string("description", 1000)
      table.boolean("is_employer").notNullable()
      table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
      table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
  }

  console.log(`${tableName} already exists; skipping`)
  return 1
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  console.log(`Rolling back ${tableName}`)
  return knex.schema.dropTableIfExists(tableName)
}
