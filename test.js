var potterBooks = require('./index.js');
var price = potterBooks.price;
// var potter = potterBooks.potter;
// var countBooks = potterBooks.countBooks;
// var numberOfDifferentBooks = potterBooks.numberOfDifferentBooks;

var should = require('should');

describe('index', function() {

  describe('book price', function() {
    
    it('should return zero price for zero books', function() {
      price([]).should.be.eql(0);
    });
    it('should return full price for one book', function() {
      price([2]).should.be.eql(8);
    });
    it('should return discount price for 2 book', function() {
      price([2, 3]).should.be.eql(8 * 2 * 0.95);
    });
    it('should return discount price for 3 books', function() {
      price([2, 3, 4]).should.be.eql(8 * 3 * 0.9);
    });
    it('should return discount price for 5 books', function() {
      price([1, 2, 3, 4, 5]).should.be.eql(8 * 5 * 0.75);
    });
    it('should return 1 full + 2 discount price for 3 books', function() {
      price([1, 1, 3]).should.be.eql(8 + (8 * 2 * 0.95));
    });
    it('should price a set of 3 and an extra', function() {
      price([0, 0, 1, 2]).should.be.eql(8 + (8 * 3 * 0.90));
    });
    it('should price two sets of 2', function() {
      price([0, 0, 1, 1]).should.be.eql(2 * (8 * 2 * 0.95));
    });



 
  });
});