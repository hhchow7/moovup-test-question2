import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import PropTypes from "prop-types";

import "./style.scss";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    const {location} = this.props
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: '',  // Google Api key here
            language: 'en'
         }}
         yesIWantToUseGoogleMapApiInternals
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={location.latitude}
            lng={location.longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  location: PropTypes.object.isRequired
}


export default Map;
