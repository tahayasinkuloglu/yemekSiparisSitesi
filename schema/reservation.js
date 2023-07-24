import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full Name is required.")
    .min(3, "Full Name must be at least 3 charachters."),

  phoneNumber: Yup.string()
    .required("Phone Number is required.")
    .min(10, "Phone Number must be at least 10 charachters."),

  email: Yup.string().required("Email is required.").email("Email is invalid."),
  persons: Yup.string().required("Persons is required."),
  date: Yup.string().required("Date is required."),
});