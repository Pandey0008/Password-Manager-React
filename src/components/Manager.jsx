import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("Copied to clipboard!", { position: "top-right", theme: "dark" });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
      ref.current.src = "icons/eyecross.png";
    } else {
      passwordRef.current.type = "password";
      ref.current.src = "icons/eye.png";
    }
  };

  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      const updatedPasswords = [...passwordArray, { ...form, id: uuidv4() }];
      setPasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      setForm({ site: "", username: "", password: "" });
      toast("Password saved!", { position: "top-right", theme: "dark" });
    } else {
      toast("Error: Password not saved!", { position: "top-right", theme: "dark" });
    }
  };

  const deletePassword = (id) => {
    if (confirm("Do you really want to delete this password?")) {
      const updatedPasswords = passwordArray.filter((item) => item.id !== id);
      setPasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      toast("Password Deleted!", { position: "top-right", theme: "dark" });
    }
  };

  const editPassword = (id) => {
    setForm(passwordArray.find((i) => i.id === id));
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer position="top-right" theme="light" />

      {/* Background Styling */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="p-3 md:p-0 md:mycontainer min-h-[88.2vh]">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          <span className="text-green-500"> &lt;</span>
          <span className="text-white">Password</span>
          <span className="text-green-500">Manager/&gt;</span>
        </h1>
        <p className="text-green-500 text-base sm:text-lg text-center">Your own Password Manager</p>

        {/* Form Section */}
        <div className="flex flex-col p-4 text-black gap-4 sm:gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full sm:w-3/4 p-3 text-sm sm:text-base"
            type="text"
            name="site"
          />
          <div className="flex flex-col sm:flex-row w-full sm:w-3/4 gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-3 text-sm sm:text-base"
              type="text"
              name="username"
            />
            <div className="relative w-full">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-3 text-sm sm:text-base"
                type="password"
                name="password"
              />
              <span className="absolute right-3 top-3 cursor-pointer" onClick={showPassword}>
                <img ref={ref} className="w-6 sm:w-7" src="icons/eye.png" alt="eye" />
              </span>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={savePassword}
            className="bg-green-800 hover:bg-green-500 rounded-full px-6 sm:px-8 py-2 text-white flex items-center gap-2"
          >
            <img className="invert w-5 sm:w-6" src="/icons/diskette.png" alt="save" />
            Save
          </button>
        </div>

        {/* Password Table Section */}
        <div className="passwords">
          <h2 className="font-bold text-xl sm:text-2xl py-4 text-white">Your Passwords</h2>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            {passwordArray.length === 0 ? (
              <div className="text-white text-center">No passwords to show</div>
            ) : (
              <table className="table-auto w-full rounded-md overflow-hidden mb-10 text-sm sm:text-base">
                <thead className="bg-green-800 text-white">
                  <tr>
                    <th className="py-2 px-4">Site</th>
                    <th className="py-2 px-4">Username</th>
                    <th className="py-2 px-4">Password</th>
                    <th className="py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {passwordArray.map((item) => (
                    <tr key={item.id} className="border border-white">
                      <td className="py-2 px-4 text-center">{item.site}</td>
                      <td className="py-2 px-4 text-center">{item.username}</td>
                      <td className="py-2 px-4 text-center">{item.password}</td>
                      <td className="py-2 px-4 flex justify-center gap-2">
                        <img onClick={() => editPassword(item.id)} src="/icons/edit-text.png" className="w-6 cursor-pointer" />
                        <img onClick={() => deletePassword(item.id)} src="/icons/bin.png" className="w-6 cursor-pointer" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
