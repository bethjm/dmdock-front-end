import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";


function Show(props) {
    // console.log(props.showtheMonsters, "this is show the monsters")
    console.log(props.monsters, "this is props from Monsters.js")

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
    <div className="show-page">
      <div className="show-page-contents">
        <p id="show-page-name">{props.monsters.name}</p>


        <table id="type-size">
        <p>{props.monsters.type}</p>
        <p>{props.monsters.size}</p>
        <p>{props.monsters.armor_class}</p>
        </table>


          <div className="all-of-the-tables">


            <div className="stats-table">
              <h1>STATS</h1>
            <table>
            <tr>
              <td>STR</td>
              <td>{props.monsters.strength}</td>
            </tr>
            <tr>
              <td>DEX</td>
              <td>{props.monsters.dexterity}</td>
            </tr>
            <tr>
              <td>CON</td>
              <td>{props.monsters.constitution}</td>
            </tr>
            <tr>
              <td>INT</td>
              <td>{props.monsters.intelligence}</td>
            </tr>
            <tr>
              <td>WIS</td>
              <td>{props.monsters.wisdom}</td>
            </tr>
            <tr>
              <td>PRC</td>
              <td>{props.monsters.skills.perception}</td>
            </tr>
            <tr>
              <td>CHAR</td>
              <td>{props.monsters.skills.charisma}</td>
            </tr>
            </table>
            </div>

            <div className="saving-table">
              <h1>SAVING THROWS</h1>
            <table>
            <tr>
              <td>STR</td>
              <td>{props.monsters.strength}</td>
            </tr>
            <tr>
              <td>DEX</td>
              <td>{props.monsters.dexterity}</td>
            </tr>
            <tr>
              <td>CON</td>
              <td>{props.monsters.constitution}</td>
            </tr>
            <tr>
              <td>INT</td>
              <td>{props.monsters.intelligence_save}</td>
            </tr>
            <tr>
              <td>WIS</td>
              <td>{props.monsters.wisdom_save}</td>
            </tr>
            <tr>
              <td>PRC</td>
              <td>{props.monsters.perception_save}</td>
            </tr>
            <tr>
              <td>CHAR</td>
              <td>{props.monsters.charisma_save}</td>
            </tr>
            
            </table>
            </div>

            <div className="battle-table">
            <h1>BATTLE INFO</h1>
            <table>
            <tr>
              <td>HP</td>
              <td>{props.monsters.hit_points}</td>
            </tr>
            <tr>
              <td>Hit Dice</td>
              <td>{props.monsters.hit_dice}</td>
            </tr>
            <tr>
              <td>Walk speed</td>
              <td>{props.monsters.speed.walk}</td>
            </tr>
            <tr>
              <td>Swim Speed</td>
              <td>{props.monsters.speed.swim}</td>
            </tr>
            </table>
            </div>



            </div>
            </div>
    </div>
  );
}

export default Show;