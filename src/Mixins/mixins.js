export const TechnologyMixin = {
  data() {
    return {
      list: [1, 2, 3]
    }
  }
};

export const FormMixin = {
  methods: {
    resetForm(form) {
      Object.keys(form).forEach(function (key, index) {
        if (typeof form[key] === "string") {
          form[key] = '';
        } else if (typeof form[key] === "boolean") {
          form[key] = false;
        }
      });
    },
    serializeForm(form, allow = {}) {
      let obj = {...form};
      Object.keys(obj).forEach(function (key) {
        if (!obj[key] && !allow[obj[key]]) {
          delete obj[key];
        }
      });
      return obj;
    }
  }
};
