/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o9xhfqszcd4mhs8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3qvg5toa",
    "name": "permission_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "khprxe3jxq7facj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o9xhfqszcd4mhs8")

  // remove
  collection.schema.removeField("3qvg5toa")

  return dao.saveCollection(collection)
})
