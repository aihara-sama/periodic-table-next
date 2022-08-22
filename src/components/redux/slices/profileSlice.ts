import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  details: {
    mobile: string;
    name: string;
  };
}

const initialState: IInitialState = {
  details: {
    mobile: "",
    name: "",
  },
};

const profileSlice = createSlice({
  initialState,
  name: "profile",
  reducers: {
    setMobile: (state, action: PayloadAction<string>) => {
      state.details.mobile = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.details.name = action.payload;
    },
  },
});

export default profileSlice;
