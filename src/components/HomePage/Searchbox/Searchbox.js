import { faA, faMapLocationDot, faSearch, faTree } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Searchbox.css';

const Searchbox = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/SearchPage/`;
        navigate(path);
    }


    // const [filter, setFilter] = useState('');

    const serchCountry = (e) => {
        // setFilter(e.target.value)
    }

    const searchText = (e) => {
        // setFilter(e.target.value);
    }
    // console.warn(filter)



    return (
        <div>
            <div className="container">
                <div>
                    <div className='text-center'>
                        <form action="">
                            <div className='d-flex justify-content-center mt-4'>
                                <p><FontAwesomeIcon icon={faA} /><select className='search-select' name="" id="">
                                    <option value="">国を選択する</option>
                                    <option value="">India</option>
                                    <option value="">China</option>
                                </select></p>
                                <p><FontAwesomeIcon icon={faTree} /><select className='search-select' name="" id="">
                                    <option value="">都市を選択する</option>
                                    <option value="">India</option>
                                    <option value="">China</option>
                                </select></p>
                                <p className='d-flex'><FontAwesomeIcon className='mt-2 mx-2' icon={faMapLocationDot} />

                                    <div className='input-field-div'>
                                        <FontAwesomeIcon className='mx-2' icon={faSearch} /><input type="text" className='search-input-field' placeholder='学校名で検索する' />
                                    </div>
                                </p>
                                <p><button className='btn search-button' onClick={routeChange}>検索する</button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Searchbox;