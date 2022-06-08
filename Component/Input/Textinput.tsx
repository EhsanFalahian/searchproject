import * as Styled from './Style'

 type Inputprop = {
    placeholder?: string,
    change? : (text : string ) => void,
    value? : string
}


const Textinput = (prop : Inputprop): JSX.Element => {

    const {placeholder , change , value} = prop


   return(

    <Styled.input onChangeText={(enterdtext) => change?.(enterdtext)} value={value} placeholder={placeholder}/>

   )
}

export default Textinput;


