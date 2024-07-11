/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m3p4g03bz13qnwo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wd9aat0j",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m3p4g03bz13qnwo")

  // remove
  collection.schema.removeField("wd9aat0j")

  return dao.saveCollection(collection)
})
