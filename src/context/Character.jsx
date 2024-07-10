import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters: ", error);
      }
    };

    const savedLocations = localStorage.getItem("locations");
    if (savedLocations) {
      setLocations(JSON.parse(savedLocations));
    }

    fetchCharacters();
  }, []);

  const isCharacterAlreadyAssigned = (characterId) => {
    return Object.values(locations).some((location) =>
      location.some((char) => char.id === characterId)
    );
  };

  const assignLocation = (characterId, locationName) => {
    const character = characters.find((char) => char.id === characterId);

    if (character) {
      if (isCharacterAlreadyAssigned(characterId)) {
        alert("This character is already assigned to another location.");
        return;
      }

      setLocations((prevLocations) => {
        const newLocations = {
          ...prevLocations,
          [locationName]: [...(prevLocations[locationName] || []), character],
        };

        localStorage.setItem("locations", JSON.stringify(newLocations));

        return newLocations;
      });
    } else {
      alert("Character is invalid.");
    }
  };

  return (
    <APIContext.Provider value={{ characters, locations, assignLocation }}>
      {children}
    </APIContext.Provider>
  );
};

APIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
