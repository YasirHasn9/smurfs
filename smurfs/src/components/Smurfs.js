import React, { useState } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actionCreator/index";

function Smurfs(props) {
  console.log("and this the props", props.smurfs);

  const fetchSmurf = e => {
    e.preventDefault();
    props.getSmurfs();
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
          </div>
        ))}
      </div>
      {props.error && <p>{props.error}</p>}
      <button onClick={fetchSmurf}>Get Smurfs</button>
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
  getSmurfs
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
