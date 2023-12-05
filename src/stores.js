import { makeObservable, observable, action } from 'mobx';

class Page1Store {
  data = 'Data for Page 1';

  constructor() {
    makeObservable(this, {
      data: observable,
      setData: action
    });
  }

  getOptions() {
    const {defaultOptions} = this.selectProps;
    const {elements} = this;
    
    if (!elements?.length) {
        return defaultOptions
    }

    if (elements.length === 1) {
      const [selectedElement] = elements;
    
      if (defaultOptions.some((option) => option.id === selectedElement.id)) {
        return defaultOptions;
      }
    
      return [selectedElement, ...defaultOptions];
    }

    return elements;
}

  setData(data) {
    this.data = data;
  }
}

const page1Store = new Page1Store();
export default page1Store;