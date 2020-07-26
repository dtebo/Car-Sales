import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/actions';

const AdditionalFeature = props => {
  const addCarFeature = (feature) => {
    addFeature(feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => addCarFeature(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    name: state.features.name,
    price: state.features.price
  };
};

export default connect(mapStateToProps, {})(AdditionalFeature);
