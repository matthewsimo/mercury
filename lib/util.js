
isValidSlug = function(value) {
  if(value.toLowerCase() === 'posts' || value.toLowerCase() === 'admin') {
    return false;
  } else {
    return true;
  }
};
