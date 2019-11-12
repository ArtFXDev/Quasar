import express from 'express'

var router = express.Router

export default class Router extends express.Router {
  constructor(server) {
    super()
    this.server = server

    this.route('/jobs')
    .all((req, res, next) => {
      next()
    })
    .get((req, res, next) => {
      res.json({job: "test"})
    })
    .post((req, res, next) => {
      console.log("----- Post Job -----");
      console.log(req.body)
      res.json(req.body)
    })
  }
}
