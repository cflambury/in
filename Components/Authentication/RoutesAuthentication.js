import { TabNavigator } from "react-navigation";
import Home from "./Home";
import Search from "./Search";
import Add from "./Add";
import Follow from "./Follow";
import Profile from "./Profile";

const RoutesAuthentication = TabNavigator({
    Home:{
        screen: Home,
    },
    Search: {
        screen: Search,
    },
        Add:{
        screen: Add,
    },
    Follow: {
        screen: Follow,
    },
    Profile: {
        screen: Profile,
    }    

});

export { RoutesAuthentication };