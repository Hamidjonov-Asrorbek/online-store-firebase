import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

function useGetData(collectionName) {
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
  }, [collectionName]);

  return { data, isPending, error };
}

export default useGetData;
