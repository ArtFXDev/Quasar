import express from 'express'
import { createServer } from 'http'
import SocketIO from 'socket.io'

import ClientSocket from './ClientSocket'
import Router from './Router'

export default class Server {
  constructor() {
    this._router = new Router(this)
    this._app = express()
    this._app.use(express.json())
    this._app.use('/', this._router)
    this._http = createServer(this._app)
    this.io = new SocketIO(this._http)
    this.clientSocket = new ClientSocket(this.io)

    this.startServer()
  }

  startServer() {
    this._http.listen(9845, function(){
      console.log('----- listening on *:9845 -----')
    });
  }
}
