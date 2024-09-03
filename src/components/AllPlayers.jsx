import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllPlayers = ({ setTargetPlayerId }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
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
        <p>I'm home and working</p>
        {players.map((player) => {
          return (
            <div className="card" key={player.id}>
              <img src={player.imageUrl} />
              <p>{player.name}</p>
              <p>{player.id}</p>
              <p>{player.breed}</p>
              <button
                onClick={() => {
                  navigate(`/player/${player.id}`);
                }}
              >
                Details
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default AllPlayers;
