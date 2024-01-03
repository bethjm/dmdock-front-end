import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Favorites({ favorites, setFavorites, onRemove }) {
  const [setRes] = useState("");
  const api = useAxios();

  useEffect(() => {
    //this is for user auth
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

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div>
      <p id="fav-monsters-title">YOUR FAVORITE MONSTERS</p>
      <ul>
        {favorites.map((favorite) => {
          console.log(favorite, "favorite from favorites");
          return (
            <div id="pc-cards-page" class="container has-text-centered">
              <div class="columns is-mobile is-centered">
                <div class="column is-5">
                  <div class="card">
                    <div class="card-content" id="pc-card">
                      <li key={favorite.slug}>
                        <p>{favorite.name}</p>

                        <p>{favorite.type}</p>
                        <p>{favorite.size}</p>

                        <p>{favorite.armor_class}</p>
                        <p>{favorite.skills.perception}</p>

                        <p>{favorite.hit_points}</p>
                        <p>{favorite.hit_dice}</p>

                        <p>{favorite.speed.walk}</p>
                        <p>{favorite.speed.swim}</p>

                        <p>{favorite.strength}</p>
                        <p>{favorite.dexterity}</p>
                        <p>{favorite.constitution}</p>
                        <p>{favorite.intelligence}</p>
                        <p>{favorite.wisdom}</p>

                        <p>{favorite.strength_save}</p>
                        <p>{favorite.dexterity_save}</p>
                        <p>{favorite.constitution_save}</p>
                        <p>{favorite.intelligence_save}</p>
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => onRemove(favorite)}
                        />
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
