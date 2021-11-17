import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Gecerli bir email girin")
    .required("zorunlu alan"),
  password: yup
    .string()
    .min(8, "Parolaniz en az 8 karakter olmalidir")
    .required("Zorunlu alan"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyusmuyor")
    .required("Zorunlu Alan"),
});

export default validations;