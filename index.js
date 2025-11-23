const express = require("express");
const app = express();
app.use(express.json());

let books = [
  { id: 1, bookName: "Java", bookCount: 10 },
  { id: 2, bookName: "Python", bookCount: 7 }
];

// CREATE
app.post("/books", (req, res) => {
  books.push(req.body);
  res.json({ message: "Book added", data: req.body });
});

// READ
app.get("/books", (req, res) => {
  res.json(books);
});

// UPDATE
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.map(b => b.id === id ? { ...b, ...req.body } : b);
  res.json({ message: "Book updated" });
});
// testing CI pipeline
// DELETE
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.json({ message: "Book deleted" });
});

app.listen(3000, () => console.log("Book Service running on port 3000"));
