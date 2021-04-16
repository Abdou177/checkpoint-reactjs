import React from 'react';

const Car =(props) => {
    const {
       children,
       color,
       price
      } = props;
            return(
                <div style={{backgroundColor:'green'}}>
                    <h5>Marque:{children}</h5>
                    <h5>Couleur:{color}</h5>
                    <h5>Prix:{price}</h5>
                </div>
                
            )
}
export default Car;