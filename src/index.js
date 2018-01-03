const canBeFrozen = item => {
  if (item === null || item === undefined) {
    return false;
  }

  if (typeof item !== 'object' && typeof item !== 'function') {
    return false;
  }

  return !Object.isFrozen(item);
};

const recurFreeze = obj => {
  const propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(propName => {
    const prop = obj[propName];

    if (canBeFrozen(prop)) {
      recurFreeze(prop);
    }
  });

  return Object.freeze(obj);
};

export default recurFreeze;
