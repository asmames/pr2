import React from 'react';

import PropTypes from 'prop-types';

export default function ProfileComponent(props) {
    return (
        <div>
        {props.children}
        <h1>{props.profile.fullname}</h1>
         <h2>{props.profile.bio}</h2>
         <p>{props.profile.profession}</p>
          </div>
    )

    }

        <div style ={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            
           
            <h1 style={{fontFamily:'arial' , backgroundColor:'#ff6699',width:'600px',textAlign:'center',color:'white'}}>{Fullname}</h1>
            <h4 style={{fontFamily:'arial' }}>- {Bio} -</h4>
            <h5 style={{fontFamily:'arial',color:'#9475f0'}}>{Profession}</h5>
            {children}

        </div>
        
    


Profile.defaultProps =
{
    data : {Fullname:"Asma",Bio:"Fst",Profession:"student"} 
    
}

Profile.propTypes ={
    data: PropTypes.objectOf(PropTypes.string),
    children:PropTypes.element ,
    handleClick:PropTypes.func
    
  } ;

export default ProfileComponent;



