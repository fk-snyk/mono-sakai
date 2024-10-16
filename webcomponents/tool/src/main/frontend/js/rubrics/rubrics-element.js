import {SakaiElement} from "../sakai-element.js";
import { getUserLocale } from "../sakai-portal-utils.js";

class RubricsElement extends SakaiElement {

  constructor() {

    super();

    this.locale = getUserLocale();
  }

  isUtilsAvailable() {

    const available = window.top.rubrics && window.top.rubrics.utils;
    if (!available) {
      console.error("Rubrics Utils has not been loaded (sakai-rubrics-utils.js). THINGS WILL BREAK!");
    }
    return available;
  }

  initLightbox(i18n) {

    if (this.isUtilsAvailable()) {
      window.top.rubrics.utils.initLightbox(i18n);
    }
  }

  showRubricLightbox(id, attributes) {

    if (this.isUtilsAvailable()) {
      window.top.rubrics.utils.showRubric(id, attributes);
    }
  }

  getHighLow(myArray) {

    let lowest = Number.POSITIVE_INFINITY;
    let highest = Number.NEGATIVE_INFINITY;
    let tmp;

    for (let i = myArray.length - 1; i >= 0; i--) {
      tmp = myArray[i].points;
      if (tmp < lowest) lowest = tmp;
      if (tmp > highest) highest = tmp;
    }

    return {
      high: highest,
      low: lowest
    };
  }
}

export {RubricsElement};
