import React, { useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList, setSushiList] = useState([]);
  const [funds, setFunds] = useState(150);
    
  useEffect(() => {
    fetch(`http://localhost:3001/sushis`)
      .then(resp => resp.json())
      .then(data => setSushiList(data))
  }, []);

  function charge(item) {
    if (funds < item.price) {
      return false;
    } else if (funds >= item.price) {
      setFunds(funds - item.price);
      return true;
    }
  }

  return (
    <div className="app">
      <SushiContainer
        sushiList={sushiList}
        charge={charge}
      />
      <Table funds={funds} />
    </div>
  );
}

export default App;
