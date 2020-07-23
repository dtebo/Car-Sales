import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature } from './actions/actions';

const App = () => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const mapStateToProps = state => {
    return {
      car: state.car,
      additionalFeatures: state.additionalFeatures,
      additionalPrice: state.additionalPrice
    }
  };

  const addFeature = (feature) => {
    //Add the new feature
    addFeature(feature);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={this.state.car} />
        <AddedFeatures car={this.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={this.state.additionalFeatures}
          addFeature={addFeature}
        />
        <Total car={this.state.car} additionalPrice={this.state.additionalPrice} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { addFeature })(App);
