"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
          <p>OR</p>
          <Link href={"/login"}>User already have an account? Login here.</Link>
        </form>
      </section>
    </div>
  );
};

export default page;
