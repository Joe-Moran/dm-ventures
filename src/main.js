import { inject } from "@vercel/analytics";
import Alpine from "alpinejs";
import resize from "@alpinejs/resize";

Alpine.plugin(resize);

inject();

window.Alpine = Alpine;

const phoneFormatter = {
  format(phoneNumber) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  },
};

const formatPhoneNumber = (phoneNumber) => {
  return phoneFormatter.format(phoneNumber);
};

const david = {
  name: "David",
  phone: {
    value: "6164142850",
    get formatted() {
      return formatPhoneNumber(this.value);
    },
  },
};

const molly = {
  name: "Molly",
  phone: {
    value: "6163043275",
    get formatted() {
      return formatPhoneNumber(this.value);
    },
  },
};

Alpine.data("app", () => ({
  david,
  molly,
}));

Alpine.start();
