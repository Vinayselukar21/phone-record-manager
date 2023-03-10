import axios from "axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { listActions } from "@/store/list";
import { useRouter } from "next/router";
import Layout from "./Layout";

const LandingPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/hello")
      .then((response) => {
        setData(response.data);
        dispatch(listActions.setList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(data);

  const editEntry = (userEntry) => {
    // console.log(userEntry)
    dispatch(listActions.setEntry(userEntry));
    router.push("/edit");
  };

  return (
    <Layout>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.firstName}</td>
              <td className="border px-4 py-2">{item.lastName}</td>
              <td className="border px-4 py-2">{item.phone}</td>
                <button
                  onClick={()=>editEntry(item)}
                  className="flex justify-center"
                  
                >
                  <span className="px-5 py-2 bg-green-200 rounded border-2 border-green-500 mx-10">Edit</span>
                </button>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-10  my-10">
        <Link
          href="/new"
          className="px-5 py-2 bg-green-200 rounded border-2 border-green-500 "
        >
          New
        </Link>
      </div>
    </Layout>
  );
};
export default LandingPage;
