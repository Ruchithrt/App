"use client"; // it is used as client because onchange functionality in order to store data by user
import React from "react";

const addTodoForm = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" placeholder=" Task Title" />
          <input type="text" placeholder="Task Description" />
          <button type="submit">Add Task</button>
        </form>
      </section>
    </div>
  );
};

export default addTodoForm;
