import React, { useState } from "react";
import { connect } from "react-redux";
import { getSmurfs, addNewSmurf, deleteSmurf } from "../actionCreator/index";

function Smurfs(props) {
  console.log(props);
  const initialSmurf = {
    name: "",
    age: "",
    height: "",
    id: Date.now()
  };
  const [newSmurf, setNewSmurf] = useState(initialSmurf);

  const fetchSmurf = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const removeSmurf = smurfId => {
    props.deleteSmurf(smurfId);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewSmurf(newSmurf);
    setNewSmurf(initialSmurf);
  };

  return (
    <div>
      {props.isLoading && <p>Fetching your Smurfs</p>}
      <div>
        {props.smurfs.map(smurf => (
          <div>
            <h4 key={smurf.id}>{smurf.name}</h4>
            <p>
              Hello, my name is {smurf.name}.<br />
              My age is {smurf.age}.<br />
              My height is {smurf.height}.{" "}
            </p>
            <button onClick={() => removeSmurf(smurf.id)}>delete</button>
          </div>
        ))}
      </div>
      {props.error && <p>{props.error}</p>}
      <button onClick={fetchSmurf}>Get Smurfs</button>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={newSmurf.name}
          onChange={handleChange}
        />
        <input
          name="age"
          type="number"
          value={newSmurf.age}
          onChange={handleChange}
        />
        <input
          name="height"
          type="number"
          value={newSmurf.height}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    smurfs: store.smurfs,
    isLoading: store.isLoading
  };
};

const mapDispatchToProps = {
  getSmurfs,
  addNewSmurf,
  deleteSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smurfs);

/*



  return 
};

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = {
    getSmurfs,
    addSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);
*/
