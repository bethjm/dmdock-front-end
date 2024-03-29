import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";

function ProtectedPage() {
  const [res, setRes] = useState("");
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await api.get("/test/");
        const response = await api.get(
          "https://sleepy-reaches-47910-977292e5012a.herokuapp.com/api/test/"
        );
        setRes(response.data.response);
      } catch {
        setRes("You're not logged in!");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{res}</p>
    </div>
  );
}

export default ProtectedPage;
