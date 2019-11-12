export default class Client {
  constructor(socket) {
    this._id = socket.id
    this._socket = socket

    this.getClientFromDb()
  }

  async getClientFromDb() {
    // TODO: get client from database if exists
    let client = undefined;
  }
}
