import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { loginSchema } from "@/schema/login";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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
    <div className="container mx-auto flex justify-center items-center min-h-[calc(100vh_-_436px)]">
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
          <button className="btn-primary !bg-secondary flex items-center justify-center gap-1">
            <AiFillGithub className="text-xl" />
            GITHUB
          </button>
          <Link href="/auth/register">
            <span className="text-sm underline text-gray-400">
              Do you no have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
