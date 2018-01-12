import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Flowchart from './flowchart.js'

/*
  Software Arch

  class Describable
    title: string
    description: string

  class Navigator : React.View
    pages: [React.View]
    current: int
    next(): void
    prev(): void

  class FlowChart : Navigator
    stages: [FlowStage]
    nextStage(): void
    load(json): static FlowChart

  class FlowStage : Describable, React.View
    items: [FlowItem]
    onEnter(): void
    onExit(): void

  class FlowStageTimed : FlowStage
    // implements onEnter and onExit

  class FlowStageChecked : FlowStage
    // implements onEnter and onExit
  
  class FlowItem : Describable, React.Component
    // 

  class FlowItemTimed : FlowItem
    timeStart: time
    timeEnd: time

  class FlowItemChecked : FlowItem
    checked: bool
  
  
 */

export default class App extends React.Component {
  render() {
    return (
	<Flowchart></Flowchart>
    );
  }
}
