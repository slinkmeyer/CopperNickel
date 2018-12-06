import { connect } from 'react-redux'
import { toggleKPI } from '../actions'
import KPIList from '../components/KPIList'
import { VisibilityFilters } from '../actions'

const getVisibleKPIs = (KPIs, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return KPIs
    case VisibilityFilters.SHOW_COMPLETED:
      return KPIs.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return KPIs.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  KPIs: getVisibleKPIs(state.KPIs, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleKPI: id => dispatch(toggleKPI(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KPIList)
