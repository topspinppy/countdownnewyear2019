import { observable, action, decorate } from "mobx";
import { createContext } from "react";

export class countdownStore {
  countdown = false;

  changeCountdown (status) {
    this.countdown = status
  }
}

decorate(countdownStore, {
  countdown: observable,
  changeCountdown: action
});

export default createContext(new countdownStore());