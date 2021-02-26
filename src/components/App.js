import '../App.css';
import {Container, Row, Col} from 'react-bootstrap'
import {useState, useEffect} from 'react';
import Money from './Money'
import Numbers from './Numbers'
import Selected from './Selected'
import CheckoutModal from './CheckoutModal'

function App() {

    const [numbers, setNumbers] = useState([]);
    const [value, setValue] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const addValue = (n) => {
        const newValue = value + n;
        setValue(newValue);
    }

    const selectNumber = (id) => {
        const foundNumber = numbers.find((number) => number.id === id);
        if (foundNumber.selected === false && selectedNumbers.length < 5) {
            addNumber(id);
        } else {
            removeNumber(id);
        }
    }

    const addNumber = (id) => {
        const newNumber = {id: id, selected: true};
        const updatedNumers = numbers.map(el => el.id === newNumber.id ? newNumber : el)
        setNumbers(updatedNumers)
        setSelectedNumbers([...selectedNumbers, newNumber]);
    }

    const removeNumber = (id) => {
        const newNumber = {id: id, selected: false};
        const updatedNumers = numbers.map(el => el.id === newNumber.id ? newNumber : el)
        const newSelectedNumbers = selectedNumbers.filter((number)=>{
            return number.id !== id
        })
        setNumbers(updatedNumers)
        setSelectedNumbers(newSelectedNumbers);
    }

    const clear = () => {
        const newNumbers = [
            {
                id:1,
                selected: false
            }, 
            {
                id:2,
                selected: false
            }, 
            {
                id:3,
                selected: false
            }, 
            {
                id:4,
                selected: false
            }, 
            {
                id:5,
                selected: false
            }, 
            {
                id:6,
                selected: false
            }, 
            {
                id:7,
                selected: false
            }, 
            {
                id:8,
                selected: false
            }, 
            {
                id:9,
                selected: false
            }, 
            {
                id:10,
                selected: false
            }, 
            {
                id:11,
                selected: false
            }, 
            {
                id:12,
                selected: false
            }, 
            {
                id:13,
                selected: false
            }, 
            {
                id:14,
                selected: false
            }, 
            {
                id:15,
                selected: false
            }, 
            {
                id:16,
                selected: false
            }, 
            {
                id:17,
                selected: false
            }, 
            {
                id:18,
                selected: false
            }, 
            {
                id:19,
                selected: false
            }, 
            {
                id:20,
                selected: false
            }, 
        ]
        setNumbers(newNumbers);
        setSelectedNumbers([])
        setValue(0)
    }

    const validate = () => {
        let validated = true;
        if (selectedNumbers.length < 5) {
            alert("Please select 5 numbers");
            validated = false;
        } else {
            if (value === 0) {
            alert("Please assign a money value");
            validated = false;
        }}
        
        return validated
    }

    const cash = () => {
        if (validate()) {
            setShowModal(true);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        const newNumbers = [
            {
                id:1,
                selected: false
            }, 
            {
                id:2,
                selected: false
            }, 
            {
                id:3,
                selected: false
            }, 
            {
                id:4,
                selected: false
            }, 
            {
                id:5,
                selected: false
            }, 
            {
                id:6,
                selected: false
            }, 
            {
                id:7,
                selected: false
            }, 
            {
                id:8,
                selected: false
            }, 
            {
                id:9,
                selected: false
            }, 
            {
                id:10,
                selected: false
            }, 
            {
                id:11,
                selected: false
            }, 
            {
                id:12,
                selected: false
            }, 
            {
                id:13,
                selected: false
            }, 
            {
                id:14,
                selected: false
            }, 
            {
                id:15,
                selected: false
            }, 
            {
                id:16,
                selected: false
            }, 
            {
                id:17,
                selected: false
            }, 
            {
                id:18,
                selected: false
            }, 
            {
                id:19,
                selected: false
            }, 
            {
                id:20,
                selected: false
            }, 
        ]
        setNumbers(newNumbers);
    }, []);

    return (
        <Container>
            <h1 className="title"> WHE WHE on D'Avenue</h1>
            <Row>
                <Col ><Money onAdd={addValue}/></Col>
                <Col xs={6}><Numbers numbers={numbers} onSelect={selectNumber} onClear={clear} onCash={cash}/></Col>
                <Col><Selected value={value} selectedNumbers={selectedNumbers}/></Col>
            </Row>
            <CheckoutModal show={showModal} toggle={closeModal} value={value}/>
        </Container>
    );
}

export default App;
