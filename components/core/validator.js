class Validator {

  validateEmail (email) {
    let regex = /^[^@\/\\*,~!#^()]+@[a-z]+\.[a-z]+$/;
    return regex.test(email);
  }

  validatePassword (password) {
    if(!password) return false;
    return password.length >= 6 && password.length <= 24;
  }
  validateName (name) {
    let nameRegex = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    return nameRegex.test(name);
  }
  validatePoints (points) {
    if (!points) return false;
    return points > 0 && points <= 10;
  }
  validateUrl(url) {
    let regex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regex.test(url);
  }
  validateTitle(title) {
    if (!title) return false;
    return title.length >= 3 && title.length <= 100;
  }
  validateType(type) {
    if (type === 'quiz' || type === 'project' || type === 'lesson' || type === 'video' || type === 'problem') return type;
    return false;
  }
  validateEstimation(estimation) {
    if (estimation === Number) return estimation;
    return estimation >= 0 && estimation <= 1000;
  }
  validateContent(content) {
    if (!content) return false;
    return content.length >= 1 && content.length <= 100;
  }
  validateAnswer(value,correct) {
      if ( (typeof(value) == 'string') && ( typeof(correct  === "boolean") )) return true;
      return false;
  }
  validateAnswerAsObject(quiz_answers){
    if (quiz_answers.value && quiz_answers.correct) {
        if ( (typeof(quiz_answers.value) == 'string') && ( typeof(quiz_answers.correct  === "boolean") )) return true;
    }
  }
  validateLinkedItems(linked) {
      if (!Array.isArray(linked)) return false;
      let ObjectId = require('mongoose').Types.ObjectId;
      for(let i = 0; i < linked.length; ++i) {
        if (typeof linked[i] !== 'string') return false;
        if (!linked[i].match(/^[0-9a-fA-F]{24}$/)) return false;
      }
      return true;
  }

  validateLevel(level) {
    if (level === Number) return level;
    return level >= 0 && level <= 10;
  }

  validateCategoriesType(type) {
    if (type === 'C++' || type === 'Node js' || type === 'C#' || type === 'Angular' || type === 'PHP') return type;
    return false;
  }

  validateDescription(description) {
    if (description === String) return description;
    return description.length >= 1 && description.length <= 100;
  }

  validateMongoId(id) {
    let checkId = new RegExp("^[0-9a-fA-F]{24}$");
    return checkId.test(id);
  }

}
module.exports = new Validator();
