import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import User from "../components/User/User";
import Loader from "../components/Loader/Loader";
import { Wrapper } from './styledUsersPage';

export default function UsersPage() {
  const usersState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchUsers());
  }, []);

  const handleUpdateUser = userData => {
    dispatch(actions.updateUser(userData));
  }

  if (usersState.loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      {usersState.users.map((user) => (
        <User userData={user} handleUpdateUser={handleUpdateUser} key={user.id} />
      ))}
    </Wrapper>
  );
}
