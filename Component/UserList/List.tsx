import { Linking, Pressable} from "react-native"
import * as styled from './Style'
import { User } from "../Utils/request"

const List = (data: { data: User }): JSX.Element => {
   
  const UserpressHandler = ():void => {
      Linking.openURL(data.data.html_url)
    
  }

 
  return (
    <Pressable onPress={UserpressHandler}>
      <styled.listcontainer>
        <styled.Imagecontainer>
            <styled.image source={{uri : data.data.avatar_url}}/>
        </styled.Imagecontainer>
        <styled.Namecontainer>
             <styled.Text>{data.data.login}</styled.Text>
        </styled.Namecontainer>
      </styled.listcontainer>
    </Pressable>
  )
}


export default List