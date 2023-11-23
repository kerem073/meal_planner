/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ac6p023wkdupoi")

  collection.name = "plannerdays"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ac6p023wkdupoi")

  collection.name = "days"

  return dao.saveCollection(collection)
})
