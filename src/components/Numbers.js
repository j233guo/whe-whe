import React from 'react'
import {Card, Button} from 'react-bootstrap'
import NumberButton from './NumberButton'

const Number = (props) => {
    return (
        <Card body style={{backgroundColor: '#0099FF'}}>
            <div className="mb-2">
                {props.numbers.map((number)=>(
                    <NumberButton key={number.id} id={number.id} selected={number.selected} onSelect={props.onSelect}/>)
                )}
            </div>
            <div>
                <Button variant="warning" size="lg" onClick={props.onCash}>CASH</Button>{' '}
                <Button variant="warning" size="lg" onClick={props.onClear}>CLEAR</Button>{' '}
            </div>
        </Card>
    )
}

export default Number
