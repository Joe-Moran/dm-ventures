const david = {
  name: "David",
  phone: {
    value: "6164142850",
    get formatted() {
      return formatPhoneNumber(this.value);
    },
  },
};

const mollie = {
  name: "Mollie",
  phone: {
    value: "6163043275",
    get formatted() {
      return formatPhoneNumber(this.value);
    },
  },
};

const phoneFormatter = {
  format(phoneNumber) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  },
};

const formatPhoneNumber = (phoneNumber) => {
  return phoneFormatter.format(phoneNumber);
};

export { david, mollie };
