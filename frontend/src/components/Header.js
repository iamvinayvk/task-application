import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav class=" border-gray-200 px-2 sm:px-4 py-2.5  bg-blue-600">
        <div class="container flex flex-wrap justify-center items-center mx-auto">
          <a href="#" class="flex justify-center items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              dygnify
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
