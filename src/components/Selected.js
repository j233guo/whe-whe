import React from 'react'
import {Card} from 'react-bootstrap'

const Selected = (props) => {
    return (
        <Card body style={{backgroundColor: '#FCC41C'}}>
            <h5>Numbers Selected: </h5>
            {props.selectedNumbers.map((number)=>(
                <div>Mark: {number.id}</div>)
            )}
            <hr/>
            <h5>Total: ${props.value}</h5>
        </Card>
    )
}

export default Selected
