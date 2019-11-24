var notesData = require("./db/db");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function(req, res) {
      notesData.push(req.body);
      res.json(true);  
  });

  app.delete("/api/notes/:id", function(req, res) {
    
    const requestID = req.params.id;

    let note = notesData.filter(note => {
      return note.id ===requestID;
    })[0];

    const index = notesData.indexOf(note);

    notesData.splice(index, 1);

    res.json("Note deleted");  
});

};
