import React, { useState } from "react";

function Sushi({ item, charge }) {

  const [eaten, setEaten] = useState(false);

  function eat() {
    if (eaten === false) {
      charge(item);
      if (charge(item)) {
      setEaten(true);
      }
    }
  }

  return (
    
    <div className="sushi">
      <div className="plate" onClick={eat}>
        {eaten ? null : (
          <img
            src={item.img_url}
            alt={item.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {item.name} - ${item.price}
      </h4>
    </div>
  );
}

export default Sushi;
