const _cloudant = require("./cloudantHelper")();

/**
 * crud helper
 * @module crudHelper
 * */
module.exports = {
  /**
   * @method createPlaneStatus
   * @async
   * @return {Array}
   */
  createPlaneStatus(database, status) {
    return new Promise((resolve, reject) => {
      _cloudant
        .postData(database, status)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  },
  /**
   * @method readPlaneStatus
   * @async
   * @return {Array}
   */
  readPlaneStatus(database) {
    return new Promise((resolve, reject) => {
      _cloudant
        .queryData(
          database,
          {
            _id: {
              $gt: "0",
            },
          },
          ["_id", "_rev", "planeObject"]
        )
        .then((result) => {
          resolve(result.docs);
        })
        .catch((err) => reject(err));
    });
  },
  /**
   * @method updatePlaneStatus
   * @async
   * @return {Array}
   */
  updatePlaneStatus(database, status) {
    return new Promise((resolve, reject) => {
      _cloudant
        .postData(database, status)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  },
  /**
   * @method deletePlaneStatus
   * @async
   * @return {Array}
   */
  deletePlaneStatus(database, status) {
    return new Promise((resolve, reject) => {
      _cloudant
        .deleteData(database, status._id, status._rev)
        .catch((err) => reject(err));
    });
  },
};
