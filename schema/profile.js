import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required("Full Name is required.")
    .min(3, "Full Name must be at least 3 charachters."),

  phoneNumber: Yup.string()
    .required("Phone Number is required.")
    .min(10, "Phone Number must be at least 10 charachters."),

  email: Yup.string().required("Email is required.").email("Email is invalid."),
  address: Yup.string().required("Address is required."),
  job: Yup.string().required("Job is required."),
  bio: Yup.string().required("Bio is required.")
});
