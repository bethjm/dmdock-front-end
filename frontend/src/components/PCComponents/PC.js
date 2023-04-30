import { useEffect, useState } from "react";
import useAxios from "../../utils/useAxios";
import 'bulma/css/bulma.min.css';
import "./PC.css"


function PC({ pc, onDelete, onEdit }) {
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
    <div id="pc-cards-page" class='container has-text-centered'>
      
      <div class='columns is-mobile is-centered'>
        <div class='column is-5'>
          <div class="card">
          <div class="card-content" id="pc-card">
          <h1 class='is-success' id="pc-name">{pc.characterName}</h1>
            <p> Campaign: {pc.campaign}</p>
            <p> Character Name: </p>
            <p> Player Name: {pc.playerName}</p>
            <p> Level: {pc.playerName}</p>
            <p> HP: {pc.playerName}</p>
            <p> AC: {pc.AC}</p>  
            <br/>          
            <button class="button is-medium" onClick={() => onDelete(pc.id)} >Delete</button>
            <button class="button is-medium" onClick={() => onEdit(pc.id)} >Edit</button>
            </div>
            </div>
            <div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default PC;