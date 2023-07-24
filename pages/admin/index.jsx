import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { adminSchema } from "@/schema/admin";

const Admin = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container flex justify-center items-center mx-auto min-h-[calc(100vh_-_436px)]">
      <form
        className="flex flex-col items-center md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title className="text-[40px] mb-6">Login</Title>
        <div className="flex flex-col gap-3 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-4 mt-6">
          <button className="btn-primary">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
