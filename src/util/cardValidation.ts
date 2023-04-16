export const checkName = (name: string) => {
  if (name.length < 3 || /[^a-zA-Z ]/.test(name)) {
    return true;
  }
  return false;
};

export const checkCardNumber = (cardNumber: string) => {
  if (cardNumber.length !== 16 || /[^0-9]/.test(cardNumber)) {
    return true;
  }
  return false;
};

export const checkCvc = (cvc: string) => {
  if (cvc.length !== 3 || /[^0-9]/.test(cvc)) {
    return true;
  }
  return false;
};

export const checkExpirationMM = (expirationMM: string) => {
  if (
    expirationMM.length !== 2 ||
    /[^0-9]/.test(expirationMM) ||
    parseInt(expirationMM) > 12 ||
    parseInt(expirationMM) < 1
  ) {
    return true;
  }
  return false;
};

export const checkExpirationYY = (expirationYY: string) => {
  if (
    expirationYY.length !== 2 ||
    /[^0-9]/.test(expirationYY) ||
    parseInt(expirationYY) < 23
  ) {
    return true;
  }
  return false;
};
