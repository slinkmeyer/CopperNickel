const KPIs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_KPI':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_KPI':
      return state.map(KPI =>
        (KPI.id === action.id)
          ? {...KPI, completed: !KPI.completed}
          : KPI
      )
    default:
      return state
  }
}

export default KPIs
