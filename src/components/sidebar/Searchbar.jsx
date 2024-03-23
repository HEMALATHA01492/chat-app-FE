import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be atleast 3 characters");
    }
    const conversations = conversation.find((c) =>
      c.username.toLowerCase().includes(search.toLowerCase())
    );

    if (conversations) {
      setSelectedConversation(conversations);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form className="flex items-center gap-2 m-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle  hover:bg-indigo-600 hover:text-white bg-white text-primary"
      >
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default Searchbar;
