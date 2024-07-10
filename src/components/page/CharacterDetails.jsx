import { useContext, useState } from "react";
import { APIContext } from "../../context/Character";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { characters, assignLocation } = useContext(APIContext);
  const character = characters.find((char) => char.id.toString() === id);
  const [location, setLocation] = useState("");

  const handleLocationSubmit = (event) => {
    event.preventDefault();
    assignLocation(character.id, location);
    setLocation("");
    navigate("/location");
  };

  if (!character) {
    return <div className="container mx-auto mt-5">Character not found.</div>;
  }

  return (
    <div className="container mx-auto mt-5">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Gambar karakter */}
          <div className="md:flex-shrink-0">
            <img
              className="h-auto w-full object-cover md:w-74"
              src={character.image}
              alt={character.name}
            />
          </div>
          {/* Detail karakter */}
          <div className="p-8 flex flex-col md:pl-8">
            <div>
              <div
                className="uppercase tracking-wide text-xl text-indigo-500 font-bold"
                style={{ textDecoration: "underline" }}
              >
                {character.name}
              </div>
              <p className="block mt-2 leading-tight text-gray-900">
                Status : {character.status}
              </p>
              <p className="mt-2 text-gray-900">Species: {character.species}</p>
            </div>
            {/* Form lokasi */}
            <form onSubmit={handleLocationSubmit} className="mt-4 md:mt-6">
              <Input
                type="text"
                className="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full md:max-w-md md:w-full mb-4"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <Button
                  type="submit"
                  className=" text-white py-2 px-4 rounded w-full md:w-auto"
                >
                  Assign Location
                </Button>
                <Link
                  to="/"
                  className="bg-gray-500 text-white py-2 px-4 rounded block text-center w-full md:w-auto mt-4 md:mt-0"
                >
                  Back to List
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
