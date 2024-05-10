const About = (props) =>{

    return(
        <div id="about">
            <div className="about-image">
                <img src={props.image} className="img-fluid" alt="" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Atque adipisci ducimus a ut molestias sint quidem corporis 
                    minima nemo dolores quaerat laborum assumenda eius placeat 
                    eligendi alias pariatur, nam sunt?</p>
                    <button>{props.button}</button>
            </div>
        </div>

    );


};

export default About;