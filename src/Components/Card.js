import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'
import Dice from './Dice';
import AdviceDivider from './AdviceDivider';

export default function Card() {
    const [newAdvice, setNewAdvice] = useState('');
    const [button, setButton] = useState(0);

    useEffect(() => {
        console.log('Button value:', button);
        axios.get('https://api.adviceslip.com/advice')
        .then(response => {
            setNewAdvice(response.data.slip);
            console.log(response);
        })
        .catch(error => console.error('Error:', error));
    },[button])

  return (
    <main className = 'container-sm position-relative'>
      <div className='d-flex justify-content-center text-center align-self-center'>
        <div className=" adviceCard">
            <div className="row id text-sm ">
                <p>ADVICE #{newAdvice?.id}</p>
            </div>
            <div className="row advice">
                <p>{newAdvice?.advice}</p>
            </div>
            {/* Responsive divider */}
            <AdviceDivider />
            <Dice setButton = {setButton} />
        </div>
      </div>
    </main>
  )
}
