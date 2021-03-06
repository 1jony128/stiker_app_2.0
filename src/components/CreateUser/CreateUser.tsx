import { Button, MenuItem, TextField, FormControl } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { addUserAction, updateUserAction } from '../../store/action-creators/user-action';
import { IUser } from '../../types/user-type';

const CreateUser: FC  = () => {

  const name = useInput('');
  const email = useInput('');
  const relation = useInput('');
  const position = useInput('');
  const age = useInput('');
  const reputation = [0,1,2,3,4,5];


  const dispatch = useDispatch();
  const { editing } = useTypedSelector(state => state.users);

  const clearForm = () => {
    name.setValue('')
    email.setValue('')
    relation.setValue('')
    position.setValue('')
    age.setValue('')
  }

  const cancelEditUser = () => {
    if(typeof editing === "object"){
      dispatch(updateUserAction(editing))
      clearForm()
    }
  }

  const createUser = () => {
    const state = [name, email, position, age, relation]

    const isError = state.find(field => {
      if(field.value === ""){
        field.setError(true)
        return field
      } else {
        field.setError(false)
      }
    })

    if(!isError){
      const newUser: IUser = {
        id: Number((new Date()).getTime()),
        name: name.value,
        email: email.value,
        age: Number(age.value),
        position: position.value,
        relation: Number(relation.value)
      }

      if(typeof editing === "object"){
        newUser.id = editing.id
        dispatch(updateUserAction(newUser))
        clearForm()
        return
      }

      dispatch(addUserAction(newUser))

      clearForm()
    }
  }

  
  useEffect(() => {
    if(typeof editing === "object"){
      const clone = JSON.parse(JSON.stringify(editing))

      name.setValue(clone.name)
      email.setValue(clone.email)
      relation.setValue(clone.relation)
      position.setValue(clone.position)
      age.setValue(clone.age)
    }
  }, [editing])
  

  return (
        <div className='create-user'>
          <FormControl>
          <h1>{
            editing
            ?
            "???????????????????????????? ????????????????"
            :
            "???????????????? ???????????? ????????????????"
          }</h1>
          <div className="input_wrapper">
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="??????, ??????????????"
              placeholder='???????????? ????????'
              value={name.value}
              onChange={name.onChange}
            />
            {
              name.error && <div className={"error"}>?????????????? ?????? ?? ??????????????</div>
            }
          </div>
          <div className="input_wrapper">
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Email"
              placeholder='ivanov@gmail.com'
              inputProps={{ inputMode: 'numeric', pattern: email }}
              value={email.value}
              onChange={email.onChange}
            />
            {
              email.error && <div className={"error"}> ?????????????? email</div>
            }
          </div>
          <div className="input_wrapper">
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="??????????????????"
              placeholder='Frontend developer'
              value={position.value}
              onChange={position.onChange}
            />
            {
              position.error && <div className={"error"}>?????????????? ??????????????????</div>
            }
          </div>
          <div className="double_input_wrapper">
            <div className="input_wrapper">
              <TextField
                required
                id="outlined-required"
                label="??????????????"
                type="number"
                fullWidth
                placeholder='23'
                value={age.value}
                onChange={age.onChange}
              />
              {
                age.error && <div className={"error"}>?????????????? ??????????????</div>
              } 
            </div>
            <div className="input_wrapper">
              <TextField
                required
                id="outlined-required"
                label="?????????????????? ?? ????????????????"
                select
                fullWidth
                placeholder='???? 0 ???? 5'
                defaultValue={0}
                value={relation.value}
                onChange={relation.onChange}
              >
                {reputation.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              {
                relation.error && <div className={"error"}>?????????????? ???????? ?????????????????? ?? ??????????????</div>
              }
            </div>
            
          </div>
          <div className="double_button_wrapper">
            <>
              <Button 
              variant="contained" 
              onClick={createUser}
              >
                
                {
                  editing
                  ?
                  "?????????????????????????? ??????????????"
                  :
                  "?????????????? ??????????????"
                }
              </Button>
            </>
            <>
              {
              editing 
              &&  
              <Button 
                variant="outlined" 
                onClick={cancelEditUser}
              >
              ????????????
              </Button>
              }
            </>
          </div>
                
          </FormControl>
        </div>
  );
}

export default CreateUser; 
