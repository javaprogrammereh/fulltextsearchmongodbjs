const { Router } = require("express");
const bookController =require('../controllers/bookController');

const router = new Router();

//  @desc   Handle Point Creation
//  @route  POST //add-
// router.post("/add-book",pointController.createBook);

//  @desc   select 
//  @route  GET /books/text-search/:query
router.get("/text-search/:query",bookController.getScorebooks);

module.exports = router;
