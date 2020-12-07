import { configureStore } from "@reduxjs/toolkit";
import ScreenReducer from "../features/screenSlice";
import SignupPageReducer from "../features/signupPageSlice";
import SignupInfoReducer from "../features/signupInfoSlice";
import SideDrawerReducer from "../features/sideDrawerSlice";
import CarSelectedReducer from "../features/carSelectedSlice";
import FetchingLoaderReducer from "../features/fetchingLoaderSlice";

export default configureStore({
  reducer: {
    screen: ScreenReducer,
    signupPage: SignupPageReducer,
    signupInfo: SignupInfoReducer,
    isSideDrawerOpen: SideDrawerReducer,
    carSelected: CarSelectedReducer,
    isFetchingLoaderShown: FetchingLoaderReducer,
  },
});
