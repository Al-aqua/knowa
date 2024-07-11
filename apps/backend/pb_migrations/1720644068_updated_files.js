/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m3p4g03bz13qnwo")

  // remove
  collection.schema.removeField("zpecpfk7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pgpfign7",
    "name": "file",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m3p4g03bz13qnwo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zpecpfk7",
    "name": "file",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("pgpfign7")

  return dao.saveCollection(collection)
})
