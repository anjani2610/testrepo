import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return <div><h1 className="title-red">Hello {this.props.name}</h1>{this.props.children}</div>;
  }
}


Hello.propTypes = {
  name: PropTypes.string.isRequired
}

export default Hello;
