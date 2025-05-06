import { useEffect, useState } from "react";
import ListObject from "./ListObject";
import "./graph.css";
function Graph() {
  const [isLoaded, setIsLoaded] = useState();
  const [data, setData] = useState("loading");

  useEffect(() => {
    setIsLoaded(false);
    async function fetchData() {
      try {
        console.log("fethcign");
        let response = await fetch("/images/data.json");
        console.log("fetheddd");
        if (!response.ok) {
          throw new Error("this is an error message");
        } else {
          let json = await response.json();
          console.log("is thas been stringicfied ");
          setData(json);

          setIsLoaded(true);
        }
      } catch (error) {
        console.error(error);
        console.log("some error ");
      }
    }
    fetchData();
  }, []);
  const formatData = () => {
    return (
      <ul>
        {data.map((element, index) => {
          return (
            <li key={index}>
              {" "}
              <ListObject {...element} />{" "}
            </li>
          );
        })}
      </ul>
    );
  };
  return <article>{isLoaded ? formatData() : "loading"}</article>;
}

export default Graph;
