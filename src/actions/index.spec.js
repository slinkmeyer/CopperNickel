import * as actions from './index'

describe('KPI actions', () => {
  it('addKPI should create ADD_KPI action', () => {
    expect(actions.addKPI('Use Redux')).toEqual({
      type: 'ADD_KPI',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleKPI should create TOGGLE_KPI action', () => {
    expect(actions.toggleKPI(1)).toEqual({
      type: 'TOGGLE_KPI',
      id: 1
    })
  })
})
