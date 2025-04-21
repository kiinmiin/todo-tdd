const TodoContoller = require('../../controllers/todo.controller')
const TodoModel = require('../../models/todo.model')
const httpMocks = require('node-mocks-http')
const newTodo = require('../mock-data/new-todo.json')

TodoModel.create = jest.fn()

let req, res, next
beforeEach(() => { 
        req = httpMocks.createRequest()
        res = httpMocks.createResponse()
        next = null
}) 

describe('TodoController.createTodo', () => {
    beforeEach(() => {
        req.body = newTodo
    })
    it('should have a createTodo function', () => {
        expect(typeof TodoContoller.createTodo).toBe('function')
    })
    it('should call TodoModel.create', () => {
        TodoContoller.createTodo(req, res, next)
        expect(TodoModel.create).toBeCalledWith(newTodo)
    })
    it('should return 201 response code', async () => {
        await TodoContoller.createTodo(req, res, next)
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBeTruthy()
    })
    it('should return json body in response', async () => {
        await TodoModel.create.mockReturnValue(newTodo)
        await TodoContoller.createTodo(req, res, next)
        expect(res._getJSONData()).toStrictEqual(newTodo)
    })
})