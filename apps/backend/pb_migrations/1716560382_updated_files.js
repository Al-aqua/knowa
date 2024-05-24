/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m3p4g03bz13qnwo")

  // remove
  collection.schema.removeField("zcudqoir")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m3p4g03bz13qnwo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zcudqoir",
    "name": "file_path",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
})
