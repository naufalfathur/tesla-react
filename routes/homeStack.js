import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CustomOrder from "../screens/CustomOrder";
import LandingPage from "../screens/LandingPage";
import ExistingInventory from "../screens/ExistingInventory"

const screens = {
  LandingPage: {
    screen: LandingPage,
    navigationOptions: {
      header: null,
    },
  },
  CustomOrder: { screen: CustomOrder },
  ExistingInventory: { screen: ExistingInventory },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
