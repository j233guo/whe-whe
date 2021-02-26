import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Money = (props) => {

    const addMoney = (n) => {
        props.onAdd(n)
    }

    return (
        <div>
            <Card body style={{backgroundColor: 'skyblue'}}>
                <div className="mb-2">
                    <Button variant="success" size="lg" onClick={()=>{addMoney(1)}} className="money-button">$1 </Button>{' '}
                    <Button variant="success" size="lg" onClick={()=>{addMoney(5)}} className="money-button">$5</Button>{' '}
                </div>
                <div>
                    <Button variant="success" size="lg" onClick={()=>{addMoney(10)}} className="money-button">$10</Button>{' '}
                    <Button variant="success" size="lg" onClick={()=>{addMoney(20)}} className="money-button">$20</Button>{' '}
                </div>
            </Card>
        </div>
    )
}

export default Money
