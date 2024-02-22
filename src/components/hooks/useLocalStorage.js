export const useLocalStorage = ({ key }) => {
  const set = (key, value) => {
    let data;
    if (typeof value === "object") {
      data = JSON.stringify(value);
    }
    localStorage.setItem(key, data);
  };

  const get = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  return {
    set,
    get,
    remove,
  };
};
