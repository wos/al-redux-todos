//@flow

const windowStorage = window.localStorage;

const localStorage = {
  setItem(key: string, value: string): void {
    return windowStorage.setItem(key, JSON.stringify(value));
  },
  getItem(key: string): string | null {
    let item = windowStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
};

export default localStorage;
