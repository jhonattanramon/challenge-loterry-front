import React from "react";
import "./style.css"
import Loading from "../Loading";

interface TypePropsNumbersResultPrizeDraw extends React.HtmlHTMLAttributes<HTMLDivElement>{
    numbers: string[];
    
}

const NumberResultPrizeDraw:React.FC<TypePropsNumbersResultPrizeDraw> = ({numbers, ...rest}) =>{
    return numbers.length > 0 ? (
        <div className="containerNumbers">
        {
            numbers.map( (number,index) =>
            <div key={index} className="ball" {...rest}> 
            <p  className="numberBall" >{number}</p>
            </div>
            )
        }
        </div>
    ): ( <Loading />)
}

export default NumberResultPrizeDraw