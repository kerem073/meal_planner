/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ac6p023wkdupoi")

  // remove
  collection.schema.removeField("fcsnjl1b")

  // remove
  collection.schema.removeField("iputqt3b")

  // remove
  collection.schema.removeField("y4mvzkoc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r0x4c9b2",
    "name": "day",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ac6p023wkdupoi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcsnjl1b",
    "name": "day",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iputqt3b",
    "name": "month",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y4mvzkoc",
    "name": "year",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("r0x4c9b2")

  return dao.saveCollection(collection)
})
