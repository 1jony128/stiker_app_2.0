import React, {Dispatch, FC, PropsWithChildren, useEffect, useState} from 'react';
import Input from "../../UI/Input/Input";

export interface ITodo {
    content: string,
    description: string,
    categories: string,
}

interface IFields {
    setTodo: Dispatch<React.SetStateAction<ITodo>>,
    todo: PropsWithChildren<ITodo>
}

const Fields: FC<IFields> = ({todo, setTodo}) => {
    const [content, setContent] = useState("")
    const [description, setDescription] = useState("")
    const [categories, setCategories] = useState("")
    useEffect(() => {
        const fields = {
            content,
            description,
            categories
        }
        setTodo(fields)
    }, [content, description, categories])

    return (
        <div className={"content"}>
            <Input
                value={content}
                setValue={setContent}
                placeholder={"Заголовок"}
            />
            <Input
                value={description}
                setValue={setDescription}
                placeholder={"Описание"}
            />
            <Input
                value={categories}
                setValue={setCategories}
                placeholder={"Категория"}
            />
        </div>
    );
};

export default Fields;