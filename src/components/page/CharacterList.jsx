import { useContext } from "react";
import { APIContext } from "../../context/Character";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function CharacterList() {
  const { characters } = useContext(APIContext);

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {characters.map((character) => (
          <div
            key={character.id}
            className="max-w-sm overflow-hidden shadow-lg flex flex-col border border-black"
            style={{ borderRadius: "10px", marginBottom: "20px" }}
          >
            <img
              className="w-full"
              src={character.image}
              alt={character.name}
            />
            <div className="px-4 py-4 flex flex-col flex-grow">
              <div className="font-semibold text-lg ">{character.name}</div>
              <div className="text-gray-700 mb-4 font-medium">
                Gender: {character.gender}
              </div>
              <div className="flex flex-col justify-center">
                <Button className="mx-auto">
                  <Link
                    to={`/character/${character.id}`}
                    className="text-white  py-2 px-4 rounded block text-center"
                  >
                    Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
