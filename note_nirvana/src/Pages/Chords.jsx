import { Link, useActionData, useParams } from "react-router-dom";
import Filter from "../components/carousel/FilterBar";
import { useState, useEffect } from "react";
import AuthContext from "../components/userLogin/UserContext";
import { useContext } from "react";

const Chords = () => {
  const [filter, setFilter] = useState({});
  const [data, setData] = useState([]);
  const ctx = useContext(AuthContext);
  const newFilter = ctx.chords;

  const fetchData = async () => {
    try {
      const requestFilter =
        Object.keys(newFilter).length !== 0 ? newFilter : filter;
      console.log(requestFilter);
      const response = await fetch(
        "http://localhost:8081/Lyrics/GetSongsList/",
        {
          method: "POST",
          body: JSON.stringify(requestFilter),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const Songs = await response.json();
      setData(Songs);
      ctx.setChords({});
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  return (
    <>
      <div style={{ paddingBottom: "1rem" }}>
        <Filter setFilter={setFilter}></Filter>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Song</th>
            <th>Created on</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr>
              <td>{e.artist}</td>
              <td>
                <Link to={`/chords/lyrics/${e.id}`}>{e.title}</Link>
              </td>
              <td>{e.created_on}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Chords;

//write a loader function
