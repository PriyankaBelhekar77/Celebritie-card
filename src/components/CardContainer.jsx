import { useEffect, useState } from "react";
import celebrities from "../celebrities.json";
import Card from "./Card";

function CardContainer() {
  const [celebritiesList, setCelebritiesList] = useState([]);
  const [searchUserName, setSearchUserName] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleCardDelete = (id) => {
    const editedCardList = celebritiesList.filter((card) => card.id !== id);
    setCelebritiesList(editedCardList);
  };

  const handleCardEdit = (data) => {
    const { id, description, age, gender, country } = data;
    const editCelebritiesInfo = [...celebritiesList];
    const index = editCelebritiesInfo.findIndex((celeb) => celeb.id === id);
    editCelebritiesInfo[index].description = description;
    editCelebritiesInfo[index].age = age;
    editCelebritiesInfo[index].gender = gender;
    editCelebritiesInfo[index].country = country;
  };

  useEffect(() => {
    setCelebritiesList(celebrities);
  }, []);

  const handleSearchUser = (e) => {
    setSearchUserName(e.target.value);
  };

  useEffect(() => {
    const searchList = celebritiesList.filter((card) =>
      card.first.toLowerCase().includes(searchUserName)
    );
    setSearchResult(searchList);
  }, [searchUserName]);

  return (
    <div className="parent-container">
      <div className="search-container">
        <input
          className="search-input"
          name="searchUserName"
          value={searchUserName}
          placeholder="Search user"
          onChange={handleSearchUser}
        />
      </div>
      {searchResult.length ? (
        <>
          {searchResult.map((celebritie) => {
            return (
              <Card
                key={celebritie.id}
                celebritie={celebritie}
                handleCardDelete={handleCardDelete}
                handleCardEdit={handleCardEdit}
              />
            );
          })}
        </>
      ) : (
        <>
          {celebritiesList.map((celebritie) => {
            return (
              <Card
                key={celebritie.id}
                celebritie={celebritie}
                handleCardDelete={handleCardDelete}
                handleCardEdit={handleCardEdit}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default CardContainer;
