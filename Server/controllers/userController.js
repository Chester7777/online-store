const ApiError = require("../Error/ApiError")
const bcrypt = require("bcrypt")
const {User, Basket } = require("../models/models")


class UserController {
    async registration(req, res, next) {
const {email, password, role} = req.body
        if(!email && !password) {
            return next(ApiError.badRequest("Некорректный email или password"))
        }
        const candidate = await  User.findOne({where: {email}})
        if(candidate) {
            return next(ApiError.badRequest("Пользователь с таким email уже существует"))
        }
    }


    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest("не задан id"))
        }
        res.json(id)
    }
}

module.exports = new UserController()