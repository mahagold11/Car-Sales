import React from 'react';
import {useDispatch} from 'react-redux'
import {buyFeature} from '../actions'


const AdditionalFeature = props => {
  
  const dispatch = useDispatch();

  const handleAddFeature = () => {
    buyFeature(props.feature);
    dispatch(buyFeature(props.feature));

  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" type = 'submit' value = {props.feature.id} onClick ={handleAddFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
