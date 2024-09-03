import AllPlayers from '../components/AllPlayers';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <AllPlayers />
    </div>
  );
}
export default Home;

/*       <div className="card" key={player.id}>
              <img src={player.imageUrl} />
              <p>{player.name}</p>
              <p>{player.id}</p>
              <p>{player.breed}</p>
              <button onClick={navigate()}>Details</button>
            </div> */
