import io from 'socket.io-client';

export default class Socket {
  constructor(parent) {
    this.parent = parent;
    this.socket = io('http://localhost:9845/client');
  }
}
