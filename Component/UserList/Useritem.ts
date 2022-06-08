
import { User } from "../Utils/request";

export const Useritem = (item:User):User =>{

   
  const data = {
    login : item.login,
    id: item.id,
    avatar_url : item.avatar_url,
    html_url: item.html_url
  }
  return(
    data
  )
}

