import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import AddPC from "./PCComponents/AddPC";
import PCs from "./PCComponents/PCs"
import Header from "./PCComponents/Header"
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import "./PCComponents/PC.css"


function PCShow() {
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

  /////dont touch above

  const [pcs, setPCs] = useState([]); // Task State
  const [showAddPC, setShowAddPC] = useState(false); // To reveal add task form

// Fetch from Local Storage
const getPCs = JSON.parse(localStorage.getItem("pcAdded"));

useEffect(() => {
    if (getPCs == null) {
        setPCs([])
    } else {
        setPCs(getPCs);
    }
}, [])

///create
const addPC = (pc) => {
    const id = uuidv4();
    const newPC = { id, ...pc }
    setPCs([...pcs, newPC]);
    Swal.fire({
        icon: 'success',
        title: 'Yay...',
        text: 'You have successfully added a new pc!'
    })
    localStorage.setItem("pcAdded", JSON.stringify([...pcs, newPC]));
}


///delete
const deletePC = (id) => {
    const deletePC = pcs.filter((pc) => pc.id !== id);
    setPCs(deletePC);
    Swal.fire({
        icon: 'success',
        title: 'Oops...',
        text: 'You have successfully deleted a PC!'
    })
    localStorage.setItem("pcAdded", JSON.stringify(deletePC));

}

//update
const editPC = (id) => {
    const campaign = prompt("What campaign are they in?");
    const characterName = prompt("Character name");
    const playerName = prompt("Player name");
    const level = prompt("What level are they?");
    const HP = prompt("What's their HP?");
    const AC = prompt("What's their AC?");
    let data = JSON.parse(localStorage.getItem('pcAdded'));
    const myData = data.map(x => {
        if (x.id === id) {
            return {
                ...x,
                campaign: campaign,
                characterName: characterName,
                characterName: characterName,
                playerName: playerName,
                level: level,
                HP: HP,
                AC: AC,
                id: uuidv4()
            }
        }
        return x;
    })
    Swal.fire({
        icon: 'success',
        title: 'Yay...',
        text: 'You have successfully edited your PC!'
    })
    localStorage.setItem("pcAdded", JSON.stringify(myData));
    window.location.reload();
}





  return (
    <>
    <div>
    {/* App Header */}
    <Header showForm={() => setShowAddPC(!showAddPC)} changeTextAndColor={showAddPC} />
    {/* Revealing the Add Task Form */}
    {showAddPC && <AddPC onSave={addPC} />}


    {/* Displaying Tasks */}
    {
        pcs.length > 0
            ?
            (<PCs pcs={pcs} onDelete={deletePC} onEdit={editPC} />)
            :
            (`No PC's Found!`)
                        }


  </div>
</>
  );
}

export default PCShow;