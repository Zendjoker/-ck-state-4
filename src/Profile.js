import React from 'react';
import "./App.css"
class Profile extends React.Component {
constructor(props){
super(props);
this.state= {Person : { fullName: "Adam Azouz",
bio: "This is my bio",
profession: "FullStack Developper"
} }}


render() {
    return (
    <div>
    <img style={{width:"100px"}} 
src= "https://image.noelshack.com/fichiers/2021/48/4/1638451035-profile-icon-png-916.png"
alt="Profil">       
</img>                  
<h1>{this.state.Person.fullName}</h1>
<h1>{this.state.Person.bio} ......</h1>
<h1>{this.state.Person.profession}</h1>
    </div>
    ) }
}

export default Profile;