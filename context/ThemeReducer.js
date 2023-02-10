const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        currentTheme: action.payload.theme,
      };
  }
};

export default ThemeReducer;
