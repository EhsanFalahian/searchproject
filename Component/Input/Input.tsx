import React, {  useState } from 'react'
import Icon from '../Icon/Icon';
import { getuser } from '../Utils/request';
import {useQuery} from 'react-query'
import * as Styled from './Style';
import Textinput from './Textinput';
import Userlist from '../UserList/Userlist';
import Button from '../Button/button';



const Input = (): JSX.Element => {
    const [value, setvalue] = useState<string>('')

    const inputHandler = (text:string):void => {
        if(typeof text === 'string'){
            setvalue(text)        
        }else{
            setvalue('')
        }
    }


const {data} = useQuery(['getUser' , value] , () => getuser(value) , {
    refetchOnWindowFocus: false,
    
})

const clearvalue = ():void => {
    setvalue('')

    
}

    return (
        <>
        <Styled.container>
            <Icon name="search-outline" size={24} color="black"/>
           <Textinput placeholder='Type in a GitHub username...' change={inputHandler} value={value}/>
            <Button onpress={clearvalue}/>
        </Styled.container>
        {data &&

            <Userlist data = {data}/>
        }
        </>
    )
}

export default Input;
