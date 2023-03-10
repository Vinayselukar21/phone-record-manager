import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { listActions } from "@/store/list";

import Link from "next/link";
import Layout from "@/Components/Layout";
const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch();

  const userEntry = useSelector((state) => state.list.initialEntry);
  const id = userEntry.id;
  const [fValue, setFValue] = useState(userEntry.firstName);
  const [lValue, setLValue] = useState(userEntry.lastName);
  const [pValue, setPValue] = useState(userEntry.phone);

  // const firstNameRef = useRef();
  // const lastNameRef = useRef();
  // const phoneRef = useRef();

  // console.log(id)

  const firstNameChange = (event) => {
    event.preventDefault();
    setFValue(event.target.value);
  };
  const lastNameChange = (event) => {
    event.preventDefault();
    setLValue(event.target.value);
  };
  const phoneChange = (event) => {
    event.preventDefault();
    setPValue(event.target.value);
  };

  const putReq = (event) => {
    event.preventDefault();
    // console.log(fValue)
    let Data={
        id: id,
        firstName: fValue,
        lastName: lValue,
        phone: pValue,
      }
    console.log(Data);
    // let respData = {}
    const axios = require("axios").default;
    axios
    .put("http://localhost:3000/api/hello", Data)
    .then(function (response) {
      console.log(response.data);
      // dispatch(listActions.setList(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
      router.push("/");
  };


  return (
    <Layout>
      <form className="w-1/2 mx-auto">
        <h1 className="text-3xl text-center py-10">Edit Page</h1>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Home
        </Link>
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
            // ref={firstNameRef}
            value={fValue}
            onChange={firstNameChange}
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
            // ref={lastNameRef}
            value={lValue}
            onChange={lastNameChange}
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
            // ref={phoneRef}
            value={pValue}
            onChange={phoneChange}
          />
        </div>
        <div className="flex float-right w-full">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={putReq}
          >
            Save
          </button>
        </div>
      </form>
    </Layout>
  );
};
export default Edit;
