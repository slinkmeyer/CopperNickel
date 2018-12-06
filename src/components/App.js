import React from 'react'
import Footer from './Footer'
import AddKPI from '../containers/AddKPI'
import VisibleKPIList from '../containers/VisibleKPIList'

const App = () => (
  <div>
    <h1>This is where KPI data will be stored</h1>
    <h3>This is a place holder for Country</h3>
    <AddKPI />
    <VisibleKPIList />
    <Footer />
    <h3>This is a place holder for Territory</h3>
    <AddKPI />
    <VisibleKPIList />
    <Footer />
    <h3>This is a place holder for State</h3>
    <AddKPI />
    <VisibleKPIList />
    <Footer />
    <h3>This is a place holder for Owner</h3>
    <AddKPI />
    <VisibleKPIList />
    <Footer />
    <h3>This is a place holder for Clinic</h3>
    <AddKPI />
    <VisibleKPIList />
    <Footer />
    <h3>This is a place holder for Sales</h3>
    <AddKPI />
    <VisibleKPIList />
    <Footer />
    <h3>This is a place holder for Product</h3>
    <AddKPI />
    <VisibleKPIList />
    <Footer />
  </div>
)

export default App
