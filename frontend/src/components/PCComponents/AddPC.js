import { useEffect, useState } from "react";
import useAxios from "../../utils/useAxios";
import Swal from "sweetalert2"
import 'bulma/css/bulma.min.css';
import "./PC.css"



function AddPC({onSave}) {
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

  ////dont touch above
  const [characterName, setCharacterName] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [level, setLevel] = useState('');
  const [HP, setHP] = useState('');
  const [AC, setAC] = useState('');
  const [campaign, setCampaign] = useState('');

  ////swal notification

  const onSubmit = (e) => {
    e.preventDefault();
    if (!characterName && !playerName && !level && !HP && !AC && !campaign) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please check over youe form and fill in all fields!'
        })
    } else {
        onSave({ characterName, playerName, level, HP, AC, campaign });
    }
    setCharacterName('');
    setPlayerName('');
    setLevel('');
    setHP('');
    setAC('');
    setCampaign('');
}

  return (
    <div class="container box p-6 has-background-light">
      <h1 class="title has-text-centered">Add A new PC</h1>
      <form  onSubmit={onSubmit}>
          <div class="field">
              <label class="label">What campaign do they belong to?</label>
              <input class="input" type="text"  value={campaign} onChange={(e) => setCampaign(e.target.value)} />
          </div>
          <div class="field">
              <label class="label">Character Name</label>
              <input class="input" type="text" placeholder="Character Name" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />
          </div>
          <div >
              <label class="label">Player Name</label>
              <input class="input" type="text" placeholder="Player Name" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
          </div>
          <div >
              <label class="label">Level</label>
              <input class="input" type="text"  value={level} onChange={(e) => setLevel(e.target.value)} />
          </div>
          <div >
              <label class="label">HP</label>
              <input class="input" type="text"  value={HP} onChange={(e) => setHP(e.target.value)} />
          </div>
          <div >
              <label class="label">AC</label>
              <input class="input" type="text"  value={AC} onChange={(e) => setAC(e.target.value)} />
          </div>
          <input class="button is-outlined" type="submit" value="Add PC" />

      </form>


    </div>
  );
}

export default AddPC;