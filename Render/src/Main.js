import Socket from './Socket'

export default class Main {
  constructor() {
    this.socket = new Socket(this);
  }
}
