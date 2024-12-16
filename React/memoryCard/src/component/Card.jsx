/* eslint-disable react/prop-types */
import "./Card.css"

export default function Card({id,onClick,name,url}){
    return (
        <div className="card" onClick={onClick}>
            <img src={url} alt="" />
            <h2>{name}</h2>
        </div>
    );
}