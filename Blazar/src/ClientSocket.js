import Client from "./Client"

export default class ClientSocket {
  constructor(io) {
    this.clients = {}

    this.io = io.of('/client').on('connection', (socket) => {
      console.log("----- render connected -----")
      console.log(`render.id: ${socket.id}`)

      let client = new Client(socket)
      this.clients[socket.id] = client
    });
  }
}
