import React from "react"
import "./style.css"

interface TypeOptions{
    option: string,
    value: string,
}

interface TypesComboBoxProps{
    options: Array<TypeOptions>
    updateLottery: (lottery: string) => void
} 

const ComboBox: React.FC<TypesComboBoxProps> = ({options,updateLottery}) => {


    return(
     <select 
        className="containerComboBox" 
        onChange={ (value) => updateLottery(value.target.value)}
        >
            {
                options.map( ({option,value},index) => (
                    <option value={value} key={index}>
                        {option}
                    </option>
                ))
            }
        </select>
    )
}

export default ComboBox