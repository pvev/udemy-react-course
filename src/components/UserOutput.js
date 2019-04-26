import React from 'react';

const UserOuput = (props) => {
    return(
      <div>
        <p>This is my firts { props.username }</p>
        <p>This is my second { props.lastname }</p>
      </div>
    );
}

export default UserOuput;