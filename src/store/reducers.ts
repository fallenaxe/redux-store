export const initialState = {
  loaded: false,
  loading: true,
  data: [{ label: 'Eat pizza', complete: false }]
};

export function reducers(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case 'ADD_TODO':
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data
      };

    default:
      break;
  }

  return state;
}
