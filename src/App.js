import { PROPERTY_TYPES } from '@babel/types';
import React from 'react';

const App = () => {
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 15 },
    { name: 'NoName', age: 3 },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name} age={props.age} years old!
    </div>
  );
};

User.propType = {
  name: PROPERTY_TYPES.string,
  age: PROPERTY_TYPES.number,
};

export default App;
