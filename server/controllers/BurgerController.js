import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgerController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
        .get('', this.getAll)
        .get('/:id', this.getOne)
        .post(', this.create')
        .put('/:id', this.update)
        .delete('/:id', this.remove)
    }
    async getAll(request, response, next) {
        try {
            const burgers = await burgerService.getAll()
            return response.send(burgers)
        } catch (error) {
            next(error)
        }
    }
    async getOne(request, response, next) {
        try {
            const newBurger = await burgerService.create(request.body)
            return response.send(newBurger)
        } catch (error) {
            next(error)
        }
    }
    async remove(request, response, next) {
        try {
            const message = await burgerService.remove(request.params.id)
            return response.send(message)
        } catch (error) {
            next(error)
        }
    }
}