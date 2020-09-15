export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDVJODtKqT6o9cTrawb2B7aLFWceYRpqAYP2OBfp7l-_OaP-hL5Vep4R4DrQoYc76s-HcmSzXXFsusMAIuoqJBZZGcaPyImVs4Grwa-x1TMqftKCBSXqZ9Acl1Mnb8VnExDQ3u4eOUoIm4QLuDs6uJF-l5xOBCtwn8pS2kveMc1GRYj",
  //   //set initial value JUST WHILE DEBUGGING to token string from console.log test from app.js
  //   //This will bypass login steps and bring you to welcome page
};

const reducer = (state, action) => {
  //Protip: console.log action for debugging purposes...
  console.log(action);

  //Action -> type, [payload] (payload is the user)

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
