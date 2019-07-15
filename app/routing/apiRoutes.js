// ===============================================================================
// LOAD DATA
// I am linking my routes to a "data" source.
// The data source holds arrays of information on friends.
// ===============================================================================

var data = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(data);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object)
  // ...the JSON is pushed to the JavaScript array
  // (ex. User fills out a friend request survey... this data is then sent to the server...
  // Then the server saves the data to the data array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. The "server" will respond to requests and let users know if they have a friend match or not.
    // It will do this by sending out the value "true" have a friend
    // req.body is available since I'm using the body parsing middleware
    if (data.length > 0) {
      data.push(req.body);
      res.json(true);
    }
    else {
      data.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the friend while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    data.length = 0;

    res.json({ ok: true });
  });
};