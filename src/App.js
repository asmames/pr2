
import React from 'react';
import ProfileComponent from './profile/ProfileComponent';



const profile= {fullname:"Asma",bio:"FST",profession:"student"}
  
function App() {
  return (
    <div className="App">
      <ProfileComponent profile={profile}>
        <img src='https://images.unsplash.com/photo-1590179003252-af4a172506f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'alt='asma'/>
      </ProfileComponent>
    </div>
  )
}


export default App;
