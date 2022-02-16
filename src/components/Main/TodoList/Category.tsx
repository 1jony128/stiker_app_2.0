import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../TodoCreate/Fields";
import {TodoState} from "../../../types/todo-type";
import Todo from "./Todo";
import {bgColors} from "../../../helpers/bgColors";

interface ICategory {
    todos: TodoState[]
}

const Category: FC<ICategory> = ({todos}) => {
    const [categories, setCategories] = useState<any[]>([])

    useEffect(() => {
        if(todos && todos.length > 0){
            let clone = JSON.parse(JSON.stringify(todos))
            clone = clone.map((todo: ITodo) => {
                return todo.categories
            })
            clone = Array.from(new Set(clone))
            setCategories(clone)
        }
    }, [todos])


    return (
        <>
            {
                categories && categories.map((header:string, index) => {
                    return (
                        <div key={header} className={"cart"} style={{background: bgColors[index]}}>
                            <h2>{header}</h2>
                            <div className={"container"}>
                                <div className="cart-items">
                                    {
                                        todos && todos.map((todo:TodoState) => {
                                            if(todo.categories === header){
                                                return <Todo key={todo.id} todo={todo}/>
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>)
                })
            }
        </>
    );
};

export default Category;