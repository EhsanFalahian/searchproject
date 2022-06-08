import React from 'react'
import { Pressable } from 'react-native'
import Icon from '../Icon/Icon'
import * as styled from './Style'

type props ={ 
    onpress ?: () => void
}

const Button = (prop : props): JSX.Element => {
    return (
        <Pressable onPress={prop.onpress}>
            <styled.btncontainer>
                <Icon name="close"  size={16} color="black"/>
            </styled.btncontainer>
        </Pressable>
    )
}

export default Button
