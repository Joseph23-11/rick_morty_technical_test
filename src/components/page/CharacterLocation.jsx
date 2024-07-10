import { useContext } from "react";
import { APIContext } from "../../context/Character";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function CharacterLocation() {
  const { locations } = useContext(APIContext);

  return (
    <div className="container mx-auto mt-8">
      {Object.keys(locations).length === 0 && (
        <div className="text-center">No locations assigned yet.</div>
      )}
      {Object.entries(locations).map(([location, characters]) => (
        <div
          key={location}
          className="mb-3 p-4 shadow rounded-lg border border-black"
          style={{ borderRadius: "10px" }}
        >
          <h3 className="font-semibold text-lg mb-2">{location}</h3>
          {characters.map((char) => (
            <div
              key={char.id}
              className="flex items-center justify-between hover:bg-gray-100 rounded"
            >
              <span className="">{char.name}</span>
              <Button>
                <Link
                  to={`/character/${char.id}`}
                  className="text-whit ml-auto"
                >
                  Details
                </Link>
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CharacterLocation;
