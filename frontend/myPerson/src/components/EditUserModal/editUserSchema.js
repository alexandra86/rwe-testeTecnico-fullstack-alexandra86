import * as yup from "yup";

export const editUserSchema = yup.object().shape({
  name: yup
    .string()
    .notRequired()
    .min(3, "The name must be at least 3 characters long.")
    .max(127, "The name can have a maximum of 127 characters."),

  email: yup.string().email("You must provide an email.").notRequired(),

  phone: yup.string().notRequired(),

  birthday: yup.string().notRequired(),

  bio: yup.string().notRequired(),

  image: yup.string().notRequired(),

  linkedin: yup.string().notRequired(),

  portfolio: yup.string().notRequired(),

  facebook: yup.string().notRequired(),

  gender: yup.string().notRequired(),
});
