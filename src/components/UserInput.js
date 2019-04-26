import React from 'react';

const UserInput = (props) => {
  return (
    <div>
      <p>{props.username}</p>
      <input type="text" onChange={props.changeUser}/>
    </div>
  );
}
export default UserInput;