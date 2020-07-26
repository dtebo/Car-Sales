import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeFeature } from '../actions/actions';

const AddedFeature = props => {
  const dispatch = useDispatch();
  const carFeature = useSelector(state => state.car.features[props.feature.id]);

  const removeFeature = (feature) => {
    //Remember to always call action creators with props.<actionCreatorName> (when using connect, not with hooks)
    removeFeature(feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
            dispatch({ type: 'REMOVE_FEATURE', payload: props.feature});
          }
        }
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

/*Refactored to use redux hooks*/
// const mapStateToProps = state => {
//   return {
//     id: state.car.features.id,
//     name: state.car.features.name,
//     price: state.car.features.price
//   }
// };

export default AddedFeature;
