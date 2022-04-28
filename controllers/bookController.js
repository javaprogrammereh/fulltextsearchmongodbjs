const Book = require("../models/Book");

exports.createBook = async (req, res, next) => {
  try {
    await Book.create(req.body);
    res.status(201).json({ message: "Book create successfully..." });
  } catch (err) {
    next(err);
  }
};

exports.getScorebooks = async (req, res, next) => {
  try {
    const books = await Book.find(
      {
        $text: { $search: req.params.query },
      },
      {
        score: { $meta: "textScore" },
        subtitle: 1,
        description: 1,
      },
      {
        sort: {
          score: { $meta: "textScore" },
        },
      }
    );
    // .toArray((err, items) =>{
    //   res.status(200).json({items});
    // })
    // .
    // sort({
    //   score: { $meta: "textScore" },
    // });
    res.status(200).json({ books });
  } catch (err) {
    next(err);
  }
};
