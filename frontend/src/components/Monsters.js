import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import axios from "axios";
import Pagination from "./Pagination";
import Search from "./Search";
import Show from "./Show";
import Favorites from "./Favorites";
import "./Monsters.css";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

function Monster() {
  const [res, setRes] = useState("");
  const api = useAxios();

  useEffect(() => {
    const fetchData = async (props) => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch {
        setRes("Something went wrong");
      }
    };
    fetchData();
  }, []);

  // /////////////leave above alone /////////

  //this is for pagination
  const [monsters, setMonsters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(200);

  // const getMonsters = () => {
  //   axios.get('https://api.open5e.com/monsters/?limit=30' ).then((response) => {
  //     // console.log(response)
  //     setMonsters(response.data.results)
  //   })
  // }

  ///////////
  // !!!!!!!!! NEED TO CHANGE THIS BACK TO 2500
  // const getMonsters = (sortBy) => {
  //   axios.get(`https://api.open5e.com/monsters/?limit=1000&ordering=${sortBy}`).then((response) => {
  //     const sortedMonsters = response.data.results.sort((a, b) => {
  //       if (typeof a[sortBy] === 'number') {
  //         return a[sortBy] - b[sortBy];
  //       } else {
  //         return a[sortBy].localeCompare(b[sortBy]);
  //       }
  //     });
  //     setMonsters(sortedMonsters);
  //   });
  // };

  const getMonsters = (sortBy) => {
    if (!sortBy) {
      return;
    }

    axios
      .get(`https://api.open5e.com/monsters/?limit=2450&ordering=${sortBy}`)
      .then((response) => {
        const sortedMonsters = response.data.results.sort((a, b) => {
          if (typeof a[sortBy] === "number") {
            return a[sortBy] - b[sortBy];
          } else {
            return a[sortBy].localeCompare(b[sortBy]);
          }
        });
        setMonsters(sortedMonsters);
      });
  };

  //get current posts- this is for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const Currentmonsters = monsters.slice(indexOfFirstPost, indexOfLastPost);

  //Change page- this is for pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // to get ind toggle- this is for show page
  const [showMonster, setShowMonster] = useState(
    Currentmonsters.map((monster) => false)
  );
  const [i, setI] = useState(null);

  //this is for favourites
  const [favorites, setFavorites] = useState([]);

  const storedFavorites = JSON.parse(localStorage.getItem("favorites"));

  useEffect(() => {
    if (storedFavorites == null) {
      setFavorites([]);
    } else {
      setFavorites(storedFavorites);
    }
  }, []);

  // function to add a monster to favorites
  const addToFavorites = (index) => {
    const updatedFavorites = [...favorites, monsters[index]];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    console.log("ADDED TO FAVORITES!");
  };

  // Function to remove a monster from favorites
  const removeFromFavorites = (monster) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.slug !== monster.slug
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  /// shows and hides the favorites section
  const [hidden1, setHidden1] = useState("visible");
  const [hidden2, setHidden2] = useState("hidden");

  const showMonsters = () => {
    setHidden1("visible");
    setHidden2("hidden");
  };

  const showFavorites = () => {
    setHidden1("hidden");
    setHidden2("visible");
  };

  console.log(Currentmonsters, "paginated monsters");
  console.log(monsters, "PRE paginated monsters");

  //leave this alone
  useEffect(() => {
    getMonsters();
  }, []);

  return (
    <div className="monster-page">
      <div className="icons">
        <div onClick={showMonsters} className="dragon">
          <FontAwesomeIcon icon={faDragon} />
          <p>Monsters</p>
        </div>

        <div onClick={showFavorites} className="heart">
          <FontAwesomeIcon icon={faHeart} />
          <p>Favorites</p>
        </div>
      </div>

      <div className={hidden1}>
        {/* <Search className="search-bar"/> */}

        <div className="monster-table">
          <h1 id="monsters-title">5e Monsters</h1>
          <h3 id="monsters-sub-title">Select how to sort your monsters</h3>

          <select
            className="drop-down"
            onChange={(e) => getMonsters(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="type">Type</option>
            <option value="size">Size</option>
            <option value="armor_class">Armor Class</option>
            <option value="hit_points">Hit Points</option>
            <option value="strength">Strength</option>
          </select>

          <Search className="search-bar" />

          <table id="monsters">
            <tr>
              <th>name </th>
              <th>type </th>
              <th>AC </th>
              <th>HP </th>
              <th>strength </th>
              <th>size </th>
              <th>add to favorite </th>
              <th>see more details </th>
            </tr>

            {Currentmonsters.map((monster, index) => {
              return (
                <tr key={monster.slug}>
                  <td>{monster.name}</td>
                  <td>{monster.type}</td>
                  <td>{monster.armor_class}</td>
                  <td>{monster.hit_points}</td>
                  <td>{monster.strength}</td>
                  <td>{monster.size}</td>
                  <td>
                    <FontAwesomeIcon
                      id="add-to-favorites"
                      icon={faHeart}
                      onClick={() => addToFavorites(index)}
                    />
                  </td>
                  <td>
                    <a
                      onClick={() => {
                        const newShowMonster = [...showMonster];
                        newShowMonster[index] = !newShowMonster[index];
                        setShowMonster(newShowMonster);
                        setI(index);
                      }}
                    >
                      {showMonster[index] ? "Hide Details" : "Show"}
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        {showMonster[i] && <Show monsters={monsters[i]} />}

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={monsters.length}
          paginate={paginate}
        />
      </div>

      <div className={hidden2}>
        <Favorites
          favorites={favorites}
          setFavorites={setFavorites}
          onRemove={removeFromFavorites}
        />
      </div>
    </div>
  );
}

export default Monster;
