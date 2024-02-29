import React from "react";
import Form from "./addTodoForm";
import { TodoItem } from "@/components/ServerComponent";

const page = () => {
  return (
    <div className="container">
      <Form />
      <section className="todosContainer">
        <TodoItem
          title={"Sample task"}
          description={"sample task description"}
          id={"sampleId"}
          completed={true}
        />
      </section>
    </div>
  );
};

export default page;
