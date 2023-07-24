import Input from "./form/Input";
import Title from "./ui/Title";
import { useFormik } from "formik";
import { reservationSchema } from "@/schema/reservation";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        placeholder: "",
        email: "",
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <Title className={"text-[40px] mb-10"}>Book A Table</Title>
      <div className="flex flex-wrap-reverse justify-between items-center gap-10">
        <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            {inputs.map((item) => (
              <Input
                key={item.id}
                {...item}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <button type="submit" className="btn-primary mt-5">
            BOOK NOW
          </button>
        </form>
        <div className="lg:flex-1 h-[384px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d709020.0826959914!2d137.61860221768035!3d34.35965040369344!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1689504994526!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
