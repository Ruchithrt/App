import Link from "next/link";
import React from "react";
import { LogoutBtn } from "../components/Clients.jsx";

const header = () => {
  return (
    <div className="header">
      <div>
        <h2>Todo</h2>
      </div>
      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <LogoutBtn />
      </article>
    </div>
  );
};

export default header;
