//新建待办事物列表
import React,{PropTypes} from 'react';
import propTypes from 'prop-types';

const propTypes = {
   onClick:PropTypes.func.isRequired
}

function CreateButton({onClick}){
    return(
        <div className ="createButton">
            <button onClick={()=>{onClick();}}></button>
        </div>
    )
}

CreateButton.propTypes = propTypes;

export default CreateButton;

