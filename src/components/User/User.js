import React, { useState, useEffect } from "react";
import { Wrapper } from "./styledUser";

const User = (props) => {
  const [userData, setUserData] = useState({});
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => setUserData(props.userData), []);

  const handleCancelEditUser = () => setUserData(props.userData);

  const handleUpdateUser = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleUpdateUserAddress = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      address: {
        ...userData.address,
        [name]: value,
      },
    });
  };

  useEffect(() => console.log("Rerender: ", userData));

  const isSaveDisabled =
    JSON.stringify(props.userData) === JSON.stringify(userData);

  return (
    <Wrapper>
      <div className={"user-header"}>
        <h3>
          {props.userData.id}. {props.userData.name}
        </h3>
        <div>
          <button onClick={() => setCanEdit(!canEdit)}>Edit user</button>
        </div>
      </div>

      {canEdit && (
        <>
          <div className="edit-form">
            <div className="input-wrapper">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                value={userData.name}
                onChange={handleUpdateUser}
                name="name"
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                value={userData.username}
                onChange={handleUpdateUser}
                name="username"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                value={userData.email}
                onChange={handleUpdateUser}
                name="email"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                value={userData.phone}
                onChange={handleUpdateUser}
                name="phone"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="website">Website:</label>
              <input
                type="text"
                value={userData.website}
                onChange={handleUpdateUser}
                name="website"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="street">Street:</label>
              <input
                type="text"
                value={userData.address?.street}
                onChange={handleUpdateUserAddress}
                name="street"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="suite">Suite:</label>
              <input
                type="text"
                value={userData.address?.suite}
                onChange={handleUpdateUserAddress}
                name="suite"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="City">City:</label>
              <input
                type="text"
                value={userData.address?.city}
                onChange={handleUpdateUserAddress}
                name="city"
              />
            </div>
          </div>
          <div className="form-actions">
            <button
              onClick={() => props.handleUpdateUser(userData)}
              disabled={isSaveDisabled}
            >
              Save
            </button>
            <button onClick={handleCancelEditUser} disabled={isSaveDisabled}>
              Cancel
            </button>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default React.memo(User);

/*
address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
email: "Sincere@april.biz"
id: 1
name: "Leanne Graham"
phone: "1-770-736-8031 x56442"
username: "Bret"
website: "hildegard.org"*/
