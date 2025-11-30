export interface subject {
  registerObserver: (observer: observer) => void;
  removeObserver: (observer: observer) => void;
  notifyObserver: () => void;
}

export interface observer {
  update: () => void;
}
