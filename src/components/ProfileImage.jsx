const ProfileImage = (props) => {
    /* console.log("This are my props", props) */
    return ( 
        <>
        <img
        src={props.image}
        className="profile"
        alt="profile"
        />
        </>
     );
}
 
export default ProfileImage;