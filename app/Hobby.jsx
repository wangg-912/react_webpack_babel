import React,{PropTypes} from 'react';

const propTypes = {
  "hobby":PropTypes.string.isRequired
}

export default class Hobby extends React.Component{
   render(){
     return(
       <li>{this.props.hobby}</li>
     )
   }
}

//Hobby.PropTypes = PropTypes;