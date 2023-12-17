/* eslint-disable react/prop-types */
import React from "react";
function Form({ children }) {
  return (
    <form action="" className="flex flex-col gap-2 p-4">
      {children}
    </form>
  );
}
export default Form;
