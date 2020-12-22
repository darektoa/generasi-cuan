const $ = (query, option = '') => {
  if (option.match(/^all$/i)) {
    return document.querySelectorAll(query);
  }

  return document.querySelector(query);
};

export default $;