const { addNewBookHandler, getAllBookHandler, getBookByIdHandler, updateBookByIdHandler, deleteBookByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNewBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBookByIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler
  },
];

module.exports = routes;