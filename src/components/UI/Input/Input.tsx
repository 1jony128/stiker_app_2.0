import React, {Dispatch, PropsWithChildren, useState, FC} from 'react';
import {ITodo} from "../../Main/TodoCreate/Fields";

interface IInput {
    value: PropsWithChildren<string>,
    setValue: Dispatch<React.SetStateAction<string>>,
    placeholder: string,
}

const Input: FC<IInput> = ({value, setValue, placeholder}) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value)
    }

    return (
        <div className={"input-wrapper"}>
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={"input"}
            />
        </div>
    );
};

export default Input;