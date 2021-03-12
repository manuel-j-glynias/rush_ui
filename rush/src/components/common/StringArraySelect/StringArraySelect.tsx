import * as React from 'react'
import Select, {ValueType} from 'react-select';

import './styles.css'

interface Props  {
    stringArray: string[];
    selectedString:string;
    set_selectedString: (selected:string) => void;
}

const className = 'StringArraySelect';



const StringArraySelect: React.FC<Props> = ({stringArray,selectedString,set_selectedString}) => {

    interface ISelectState {
        value: string; label: string;
    }

    let options: ISelectState[] = [ ];

    React.useEffect(() => {
        let i : number;
        for(i=0;i<stringArray.length;i++){
            options.push({value:stringArray[i], label:stringArray[i]})
        }
    }, );
    const state  = {
        selectedOption: { value: selectedString, label: selectedString },
    };

    const handleChange = async (option:ValueType<ISelectState,any>) => {
        // @ts-ignore
        state.selectedOption.value = option.value;
        // @ts-ignore
        state.selectedOption.label = option.label;
        set_selectedString(state.selectedOption.label);
    }
    return (<span> <Select className={`${className}__select`}  options = {options} onChange={option => handleChange(option)}
                           value={state.selectedOption}
        /></span>
    )
}

export default StringArraySelect;