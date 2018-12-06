let nextKPIId = 0
export const addKPI = text => ({
  type: 'ADD_KPI',
  id: nextKPIId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleKPI = id => ({
  type: 'TOGGLE_KPI',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
