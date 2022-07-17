import React from "react";
import Link from "next/Link";

const Header = () => {
  return (
    <div class="navbar">
      <Link href={"/"}>
        <a>Home</a>
      </Link>

      <Link href={"/books"}>
        <a>Books</a>
      </Link>

      <Link href={"/addbooks"}>
        <a>Add-Book</a>
      </Link>
    </div>
  );
};

export default Header;
