import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./src/stacks/MainStack";
import { UserContextProvider } from "./src/contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}

export { App }