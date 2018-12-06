import React from 'react'
import PropTypes from 'prop-types'
import KPI from './KPI'

const KPIList = ({ KPIs, toggleKPI }) => (
  <ul>
    {KPIs.map(KPI =>
      <KPI
        key={KPI.id}
        {...KPI}
        onClick={() => toggleKPI(KPI.id)}
      />
    )}
  </ul>
)

KPIList.propTypes = {
  KPIs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleKPI: PropTypes.func.isRequired
}

export default KPIList
