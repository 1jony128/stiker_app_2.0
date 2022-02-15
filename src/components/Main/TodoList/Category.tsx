import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../TodoCreate/Fields";
import {TodoState} from "../../../types/todo-type";

interface ICategory {
    todos: TodoState[]
}

const Category: FC<ICategory> = ({todos, children}) => {
    const [categories, setCategories] = useState<any[]>([])

    useEffect(() => {
        if(todos.length > 0){
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
                categories && categories.map((header:string) => {
                    // console.log(header)
                    return (
                        <div className={"cart"}>
                            <h2>
                                {header}
                            </h2>
                            <div className={"container"}>
                                <div className="cart-items">
                                    {children}
                                </div>
                            </div>
                        </div>)
                })
            }
        </>
    );
};

export default Category;