import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch , useSelector } from "react-redux";
import Layout from "@/Components/Layout";
const New = () => {
  const router = useRouter();
//   const dispatch = useDispatch();
const length = useSelector((state)=>state.list.initialList.length)
// console.log(length)
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const [formData, setFormData] = useState({
    id:length,
    firstName: "",
    lastName: "",
    phone: "",
  });

  const postReq = (event) => {
    event.preventDefault();
    // console.log(formData);
    const axios = require("axios").default;
    axios
      .post("http://localhost:3000/api/hello", formData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    router.push("/");
  };

  return (
    <Layout>
      <form className="w-1/2 mx-auto">
        <h1 className="text-3xl text-center py-10">New Entry Page</h1>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Home
        </a>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input1"
          >
            First Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firsstname"
            type="text"
            placeholder="first name"
            ref={firstNameRef}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input2"
          >
            Last Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="last name"
            ref={lastNameRef}
            //   value={formData.input2}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input3"
          >
            Phone Number
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="number"
            placeholder="phone"
            ref={phoneRef}
            // value={formData.input3}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="flex  w-full justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={postReq}
          >
            Save
          </button>
        </div>
      </form>
    </Layout>
  );
};
export default New;
