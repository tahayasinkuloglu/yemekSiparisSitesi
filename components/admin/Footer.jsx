import { useState } from "react";
import { useFormik } from "formik";
import Input from "../form/Input";
import Title from "../ui/Title";
import { footerSchema } from "@/schema/footer";
import { AiFillDelete } from "react-icons/ai";

const Footer = () => {
  const [linkAddress, setLinkAddress] = useState("");
  const [iconName, setIconName] = useState("");
  const [icons, setIcons] = useState([
    "fa fa-facebook",
    "fa fa-twitter",
    "fa fa-instagram",
  ]);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Your Description",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];

  return (
    <form
      className="lg:my-10 lg:px-10 flex-1 flex flex-col justify-between lg:text-start text-center gap-5 lg:gap-0"
      onSubmit={handleSubmit}
    >
      <Title className="text-[40px]">Footer Settings</Title>

      <div className="grid lg:grid-cols-2 gap-5" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4 flex-col sm:flex-row gap-10 sm:gap-0">
        <div className="flex items-center gap-5">
          <Input placeholder="Link Address" value="https://" onChange="" />
          <Input
            placeholder="fa fa-instagram"
            onChange={(e) => setIconName(e.target.value)}
            value={iconName}
          />
          <button
            className="btn-primary"
            type="button"
            onClick={() => {
              setIcons([...icons, iconName]);
              setIconName("fa fa-");
            }}
          >
            Add
          </button>
        </div>
        <ul className="flex gap-8">
          {icons.map((icon, index) => (
            <li
              key={index}
              className="flex flex-col gap-2 items-center text-2xl first:ml-5"
            >
              <i className={`${icon} text-2xl`}></i>
              <button
                className="text-danger text-lg"
                type="button"
                onClick={() =>
                  setIcons((prev) => prev.filter((item, i) => i !== index))
                }
              >
                <AiFillDelete />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="btn-primary w-max mx-auto lg:m-0 mb-7 mt-2"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};

export default Footer;
