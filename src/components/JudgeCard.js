import React from 'react'

export default function JudgeCard(props) {
    if (props.ltr == "true") {
        return (
        <div className='card'>
        <div className="card-col">
            <img src={props.image}></img>
        </div>
        <div className="card-col">
            <h1>{props.name}</h1><br/>
            <h2>{props.title}</h2><br/>
            {props.children}
        </div>
    </div> )
    }
    return (
        <div className='card'>
            <div className="card-col">
                <h1>{props.name}</h1><br/>
                <h2>{props.title}</h2><br/>
                {props.children}
            </div>
            <div className="card-col">
                <img src={props.image}></img>
            </div>
        </div>
    )
}
