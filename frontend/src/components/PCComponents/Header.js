import { useEffect, useState } from "react";
import useAxios from "../../utils/useAxios";
import Button from "./Button"
import 'bulma/css/bulma.min.css';
import "./PC.css"

function Header({ showForm, changeTextAndColor }) {
  const [res, setRes] = useState("");
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch {
        setRes("Something went wrong");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header>
    <h2 id="pc-header">Your PC's</h2>
    <Button  onClick={showForm} color={changeTextAndColor ? '#A68756': '#5E53A8' } text=     {changeTextAndColor ? 'Close' : 'Add'} />
  </header>
  );
}

export default Header;