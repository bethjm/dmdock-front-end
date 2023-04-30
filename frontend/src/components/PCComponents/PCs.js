import { useEffect, useState } from "react";
import useAxios from "../../utils/useAxios";
import PC from "./PC"
import 'bulma/css/bulma.min.css';
import "./PC.css"


function PCs({ pcs, onDelete, onEdit }) {
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
    <div>
   <div >
      {
        pcs.map((pc) => (
          <PC key={pc.id} pc={pc} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </div>
    </div>
  );
}

export default PCs;