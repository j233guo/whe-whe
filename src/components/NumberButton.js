import React from 'react'
import {Button} from 'react-bootstrap'

const NumberButton = (props) => {

    const clickHandler = () => {
        props.onSelect(props.id);
    }
    
    return (
        <Button className="number-button" 
            variant={props.selected ? "warning" : "dark"} 
            size="lg"
            onClick={clickHandler}>{props.id}
        </Button>
    )
}

export default NumberButton
