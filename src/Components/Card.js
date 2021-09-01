import React from 'react';
import '../Components/Card.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Card(props){
    // console.log(props);
    return (
        <div className='card_header'>
            <div className='card_subheader1'>
                <div className='subscribe_type'>{props.objs.type}</div>
                <div className='amount'>{props.objs.price}</div>
                <hr/>
            </div>
            <div className='card_list'>
                <ul>
                    {
                        props.objs.access_lists.map((i)=>{
                            return <div className='accesslist_style'>
                                <FontAwesomeIcon icon='check' className='fontawesome_style'></FontAwesomeIcon>
                                <li className='access_list' key={props.objs.access_lists.indexOf(i)}>{i}</li>
                            </div>
                            
                        })
                    }
                    {
                        props.objs.nonaccess_lists.map((i)=>{
                            return <div className='accesslist_style'>
                                <FontAwesomeIcon icon='times' className='fontawesome_nonaccess_style'></FontAwesomeIcon>
                                <li className='nonaccess_list' key={props.objs.nonaccess_lists.indexOf(i)}>{i}</li>
                            </div>
                        }
                        )
                    }
                </ul>
            </div>
            <div className='card_button'>
                <button>Button</button>
            </div>
        </div>
    );
}

export default Card;