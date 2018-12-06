import React from 'react'
import { connect } from 'react-redux'
import { addKPI } from '../actions'

const AddKPI = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addKPI(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add KPI
        </button>
      </form>
    </div>
  )
}

export default connect()(AddKPI)
