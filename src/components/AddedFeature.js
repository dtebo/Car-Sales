import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/actions';

const AddedFeature = props => {
  const removeFeature = (feature) => {
    //Remember to always call action creators with props.<actionCreatorName>
    props.removeFeature(feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
            removeFeature(props.feature)
          }
        }
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    id: state.car.features.id,
    name: state.car.features.name,
    price: state.car.features.price
  }
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
