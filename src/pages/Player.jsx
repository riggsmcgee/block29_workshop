import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = ({ targetPlayerId }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const idNumb = parseInt(id);
  console.log(idNumb);
  const puppyBowlUrl =
    'https://fsa-puppy-bowl.herokuapp.com/api/2405-ftb-et-web-pt/players';
  const getPlayers = async () => {
    const response = await fetch(puppyBowlUrl);
    const data = await response.json();
    const players = data.data.players;
    console.log(players);
    setPlayers(players);
    setLoading(false);
  };
  useEffect(() => {
    getPlayers();
  }, []);

  if (loading === true) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <p>I'm the single player view</p>
        {players.map((player) => {
          //   console.log(player.id);
          if (player.id === idNumb) {
            return (
              <div className="card" key={player.id}>
                <img src={player.imageUrl} />
                <p>{player.name}</p>
                <p>{player.id}</p>
                <p>{player.breed}</p>
                <button onClick={() => navigate(`/`)}>Return</button>
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default Player;
