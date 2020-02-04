const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const algoliasearch = require("algoliasearch");
const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key;
const ALGOLIA_INDEX_NAME = "Practice";
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

exports.onProductCreated = functions.firestore
  .document("posts/{id}")
  .onCreate((snap, context) => {
    const data = snap.data();
    data.objectID = context.params.id;
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.saveObject(data);
  });
