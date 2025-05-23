// import { useEffect, useState } from "react";
// import { axiosInstance } from "../utils";

// export function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsPending(true);
//       try {
//         const req = await axiosInstance(url);
//         setData(req);
//       } catch (error) {
//         console.log(error);
//         setError(error);
//       } finally {
//         setIsPending(false);
//       }
//     };
//     fetchData();
//   }, [url]);
//   return { data, error, isPending };
// }


import { useState, useEffect } from "react";
import { axiosInstance } from "../utils";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await axiosInstance(url);
        setData(req);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, error, isPending };
};
