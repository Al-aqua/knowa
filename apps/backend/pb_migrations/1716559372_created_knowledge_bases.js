/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "d8o5ybd22yunfbi",
    "created": "2024-05-24 14:02:52.774Z",
    "updated": "2024-05-24 14:02:52.774Z",
    "name": "knowledge_bases",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "anqzwcvg",
        "name": "kb_name",
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
        "id": "bgv8yn5p",
        "name": "owner_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("d8o5ybd22yunfbi");

  return dao.deleteCollection(collection);
})
