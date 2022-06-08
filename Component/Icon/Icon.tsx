import  { Ionicons } from '@expo/vector-icons'
import { ReactNode } from 'react'
import * as styled from './Style'


type props ={
    name ?: any,
    size ?: number,
    color?: string
}
const Icon = (prop : props):JSX.Element =>{
    const { name , size , color} = prop
    return(
        <>
        <styled.container>
        <Ionicons name={name} size={size} color={color} />
        </styled.container>
        </>
    )
}

export default Icon;