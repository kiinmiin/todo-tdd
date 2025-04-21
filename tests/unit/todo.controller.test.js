const TodoContoller = require('../../controllers/todo.controller')

describe('TodoController.createTodo', () => {
    it('should have a createTodo function', () => {
        expect(typeof TodoContoller.createTodo).toBe('function')
    })
})