import { Logger } from "sass"
import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class BurgerService {
    async getAll() {
        const burgers = await dbContext.burgers
        return burgers
    }
    async getOne(burgerId) {
        const burger = await dbContext.Burgers.find(b => b.id == burgerId)
        if(!burger) throw new BadRequest('no burger named ' + burgerId)
        return burger
    }
    async create(newBurger) {
        Logger.log(newBurger)
        newBurger.id = dbContext.Burgers[dbContext.Burgers.length - 1].id + 1
        await dbContext.Burgers.push(newBurger)
        return newBurger
    }
    async remove(burgerId) {
        const burger = await this.getOne(burgerId)
        let index = dbContext.Burgers.indexOf(burger)
        dbContext.Burgers.splice(index, 1)
        return `${burger.name} removed`
    }
}
export const burgerService = new BurgerService()