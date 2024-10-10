import profilePic from './assets/profile.jpg'
function Card() {

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Ayomide</h2>
            <p className="card-text">I'm a Frontend Developer and I love cooking</p>
        </div>
    );
}

export default Card