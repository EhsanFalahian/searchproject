import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { QueryClientProvider } from "react-query";
import queryclient from "./Component/Utils/query";
import SearchUser from "./Screen/Search_user";


const Stack = createStackNavigator();

export default function App() : JSX.Element {
  return (
    <QueryClientProvider client={queryclient}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
         <Stack.Screen name="home" component={SearchUser}/>
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>

  );
}


