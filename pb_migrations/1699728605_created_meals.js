/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3041pviyukdwnho",
    "created": "2023-11-11 18:50:05.236Z",
    "updated": "2023-11-11 18:50:05.236Z",
    "name": "meals",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rcdbdlz2",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "syoxdjbe",
        "name": "ingredients",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3041pviyukdwnho");

  return dao.deleteCollection(collection);
})
