import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
import { newPasswordSchema } from "@/schema/newPassword";

const Password = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: newPasswordSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <form className="lg:my-10 lg:px-10 flex-1 flex flex-col justify-between lg:text-start text-center gap-5 lg:gap-0" onSubmit={handleSubmit}>
      <Title className="text-[40px]">Password</Title>

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
      <button className="btn-primary w-max mx-auto lg:m-0 mb-5" type="submit">Update</button>
    </form>
  );
};

export default Password;
