import React  from 'react';
import PropTypes from "prop-types"



const inLineError = ({text})=>(
    <span style={{color:"red"}}>
        {text}
    </span>
)
    

inLineError.propTypes ={
    text: PropTypes.string.isRequired
}

export default inLineError
