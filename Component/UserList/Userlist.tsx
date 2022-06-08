import React from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { User } from '../Utils/request';
import List from './List';
import * as styled from './Style'  
  
  const Userlist = (items : {data: User[]}): JSX.Element => {
console.log(items);

    
 const ListHandler : ListRenderItem<User> =  (item) => {

   return(
    <List data={item.item} />
   )
 }
   return(
      <styled.view>
          <FlatList data={items.data} renderItem={ListHandler} />
      </styled.view>
   )
  }

  export default Userlist;

