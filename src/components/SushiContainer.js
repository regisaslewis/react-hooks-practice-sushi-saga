import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushiList, showNext, charge }) {

  const [indexNumber, setIndexNumber] = useState(0)

  const sushiArray = sushiList.slice(indexNumber, indexNumber + 4).map(e => <Sushi key={e.id} item={e} charge={charge} />);

  function showNext() {
    setIndexNumber(() => indexNumber + 4)
  }

  return (
    <div className="belt">
      {sushiArray}
      <MoreButton showNext={showNext} />
    </div>
  );
}

export default SushiContainer;
