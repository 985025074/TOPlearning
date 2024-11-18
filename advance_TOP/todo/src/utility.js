export  function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

export function getFormItem(form){
  let inputs = form.querySelectorAll('input');
  let data = {};
  for(let i=0; i<inputs.length; i++){
    let input = inputs[i];
    data[input.id] = input.value;
  }
  return data;
}