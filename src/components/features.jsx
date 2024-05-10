import React from "react";
import Featuresbox from "./featurebox";

import featureimage1 from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';


const Features = () => {

return (
    <div id="features">
        <div className="a-container">
            <Featuresbox image={featureimage1} title="Devolopment course"/>
            <Featuresbox image={featureimage2} title="Money Saving Service"/>
            <Featuresbox image={featureimage3} title="Usablity Interface"/>

        </div>

    </div>
);

};
export default Features;