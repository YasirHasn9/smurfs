import React from "react";
import { connect } from "react-redux";

function Smurfs(props) {
  console.log(props);
  
  return (
      <>

      sumrfs
      </>
  );
}

const mapStateToProps = store => {
  return {
    smurfs: store.smurfs,
    isLoading: store.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(Smurfs);
