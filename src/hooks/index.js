import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase/config";

async function useGetData(collectionName) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState({ status: false, message: "" });
  useEffect(() => {
    const getData = async () => {
      const documents = [];
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          console.log({ ...doc.data(), id: doc.id });
          documents.push({ ...doc.data(), id: doc.id });
        });
        setData(documents);
      } catch (error) {
        setError({ status: true, message: error.message });
      } finally {
        setIsPending(false);
      }
    };
    getData();
  }, []);
  return { data, isPending, error };
}

export default useGetData;
