import { AxiosRequestConfig, AxiosResponse } from "axios"

import { Useritem } from "../UserList/Useritem";

import Instance from "./axios";

export type User = {
    login : string;
    id: number,
    avatar_url : string,
    html_url: string
}

export async function get<T>(url: string , config?: AxiosRequestConfig): Promise<AxiosResponse<T>>{   
    return(
      Instance.get<T>(url , config)

    )

}

export function getuser(name : string):Promise<User[]>{
    return(
        get<any>(`/search/users?q=${name}`)
        .then(response => response.data?.items?.map((item : User) => {
   
           return Useritem(item)
            
        }))
        .catch(error => { console.log(error);
        })
        )
        
    
}
