import React, { Component } from 'react'
import ChildrenTable from './ChildrenTable'

class ReactFragments extends Component {
  render() {
    return (
        <React.Fragment>
            {/* Fragments don't create unneccesary dom elements and will consume less space as compared to div tags which are occupying dom space */}
            <h1> Hi welcome to Fragments Sesstion</h1>
            <p> You are in fragments Sessions</p>
            <table>
                <tbody>
                <tr>
                   <ChildrenTable />
                </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
  }
}

export default ReactFragments
