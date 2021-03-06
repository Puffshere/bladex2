import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function BladeDetails() {

    const [knives, setKnives] = useState([]);
    const [noKnives, setNoKnives] = useState('');
    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        brand: '',
        model: '',
        price: 0,
        steel: '',
        handleMaterial: '',
        bladeShape: '',
        checkbox: false,
    })

    useEffect(() => {
        const knivesRequest = {
            userId: '5f0587584f6e92c4ce549a24'
        }
        axios.post('https://blade-x.herokuapp.com/api/getKnives', knivesRequest).then(res => {
            if (res.data.knives.length < 0) {
                setNoKnives('You need to go buy some knives.');
            }
            setKnives(res.data.knives);
        })
    })

    const MyKnives = () => {
        if (knives.length > 0) {
            return (
                <div>
                    {knives.map(knife => {
                        return (
                            <div className='row'>
                                <img className='detail col-5 mt-3 mb-3' src="benchmadeBugoutBrown.jpg"></img>
                                <div className='col-7 mt-3 mb-3'>
                                    <h2 className='title'>{knife.brand}</h2>
                                    <h2 className='title'>{knife.model}</h2>
                                    <p>Price:  ${knife.price}</p>
                                    <h6 className='metascore'>For Sale Price:  </h6>
                                    <SaleAmount>${knife.forSalePrice}</SaleAmount>
                                    <hr></hr>
                                    <p>Steel:  {knife.steel}</p>
                                    <p>Handle Material:  {knife.handleMaterial}</p>
                                    <p>Blade Shape:  {knife.bladeShape}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <h4>Loading...</h4>
            )
        }
    }

    return (
        <div className='mud'>
            <div className='container card mt-3 mb-3 p-0 space'>
                <div className='card-body'>
                    <div className='container'>
                        {<MyKnives />}
                        <Link className='detailsStyling' to='/dashboard'>Return to DashBoard</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SaleAmount = styled.p`
color: maroon;
padding-left: 5em
`

export default BladeDetails
