import { useState } from "react";
import Modal from "./Modal";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

function Card({ celebritie, handleCardDelete, handleCardEdit }) {
  const [toggleCard, setToggleCard] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState(celebritie.description);
  const [age, setAge] = useState(40);
  const [gender, setGender] = useState(celebritie.gender);
  const [country, setCountry] = useState(celebritie.country);

  const handleExpandCard = () => {
    setToggleCard(!toggleCard);
  };

  const handleEditBtnClick = () => {
    setEditCard(!editCard);
  };

  const handleDiscardChanges = () => {
    setEditCard(!editCard);
    setDescription(celebritie.description);
    setAge(40);
    setGender(celebritie.gender);
    setCountry(celebritie.country);
  };

  function onShow() {
    setShowModal(!showModal);
    return showModal;
  }

  const handleDelete = () => {
    setShowModal(!showModal);
    handleCardDelete(celebritie.id);
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <img
          className="celeb-img"
          src={celebritie.picture}
          alt={celebritie.first}
        />
        <label>{`${celebritie.first}  ${celebritie.last}`}</label>
        <button className="icon-btn" onClick={() => handleExpandCard()}>
          {toggleCard ? (
            <MdOutlineKeyboardArrowUp size={20} />
          ) : (
            <MdOutlineKeyboardArrowDown size={20} />
          )}
        </button>
      </div>
      {toggleCard ? (
        <>
          <div className="card-body">
            {editCard ? (
              <>
                <div className="row">
                  <div className="col">
                    <label>Age</label>
                    <input
                      name="age"
                      value={age}
                      maxlength="3"
                      size="3"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Rather not say">Rather not say</option>
                    </select>
                  </div>
                  <div className="col">
                    <label>Country</label>
                    <input
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
                <label>Description</label>
                <textarea
                  disabled={!editCard}
                  rows={"7"}
                  cols={"5"}
                  name="description"
                  className="card-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </>
            ) : (
              <>
                <div className="row">
                  <div className="col">
                    <label>Age</label>
                    <div>{age}</div>
                  </div>
                  <div className="col">
                    <label>Gender</label>
                    <div>{gender}</div>
                  </div>
                  <div className="col">
                    <label>Country</label>
                    <div>{country}</div>
                  </div>
                </div>
                <label>Description</label>
                <div className="card-description remove-border">
                  {description}
                </div>
              </>
            )}
          </div>
          <div className="card-footer">
            {editCard ? (
              <div className="btn-container">
                <button
                  className="icon-btn"
                  onClick={() => handleDiscardChanges()}
                >
                  <AiOutlineCloseCircle size={20} />
                </button>
                <button
                  className="icon-btn"
                  onClick={() => {
                    setEditCard(!editCard);
                    handleCardEdit({
                      id: celebritie.id,
                      description,
                      age,
                      gender,
                      country,
                    });
                  }}
                >
                  <AiOutlineCheckCircle size={20} />
                </button>
              </div>
            ) : (
              <div className="btn-container">
                <button className="icon-btn" onClick={onShow}>
                  <RiDeleteBin6Line size={20} />
                </button>
                <button className="icon-btn" onClick={handleEditBtnClick}>
                  <RiEditLine size={20} />
                </button>
              </div>
            )}
          </div>
          {showModal ? (
            <Modal
              onShow={onShow}
              message={"Are you sure you want to delete?"}
              handleDelete={handleDelete}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default Card;
