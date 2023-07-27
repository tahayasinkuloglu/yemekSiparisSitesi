import { useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [category, setCategory] = useState(["pizza"]);

  return (
    <div className="lg:mt-10 lg:px-10 flex-1 lg:text-start text-center mb-10 lg:mb-0">
      <Title className="text-[40px]">Category</Title>
      <div className="mt-5">
        <div className="flex gap-4">
          <Input
            placeholder="Add Category"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            className="btn-primary"
            onClick={() => {
              setCategory([...category, inputText]);
              setInputText("");
            }}
          >
            Add
          </button>
        </div>
        <div className="mt-10">
          {category.map((item, index) => (
            <div className="flex justify-between items-center mt-4" key={index}>
              <b className="text-xl">{item}</b>
              <button
                className="btn-primary !bg-danger"
                onClick={() =>
                    setCategory(category.filter((cat) => cat !== item))
                  }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
