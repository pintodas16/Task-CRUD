import React from "react";
import Form from "./Form.jsx";
import Input from "./Input.jsx";
function FormContainer() {
  const options = [
    { value: "in-progress", label: "in-progress" },
    { value: "in-progress", label: "completed" },
  ];
  return (
    <Form>
      {/* <!-- input for title  --> */}
      <Input label="Title" type="text" />
      {/* <!-- input for description  --> */}
      <Input label="description" type="text-area" />

      {/* <!-- input for status --> */}
      <Input label="status" type="select" options={options} />

      {/* <!-- input for date --> */}
      <Input label="date" type="date" />

      {/* <!-- submit --> */}
      <div className="flex justify-end ">
        <button
          type="submit"
          className="px-6 py-2 text-center font-semibold border-2 bg-red-300 border-red-300 hover:bg-white hover:text-red-400 hover:border-red-400 rounded-lg"
        >
          Create task
        </button>
      </div>
    </Form>
  );
}
export default FormContainer;
