import React from 'react'
import ContainerObject from '../components/ContainerObject'

const style = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent:'center'
}

const NUM_CONTAINERS = 11, INTERVAL_MS = 700;

export default React.createClass({
	getInitialState() {
		const containersStateAux = []
		for(let i = 0; i < NUM_CONTAINERS; i++)
		{
			containersStateAux.push({
				index: i,
				stateName: 'down'
			})
		}
		this.handleIntervals(INTERVAL_MS)
		return { containersState: containersStateAux}
	},

	intervals: [],
	intervalCounter: 0,

	handleIntervals(ms) {
	   	this.intervals.push(setInterval(function(){


	   		//Increment the interval counter
	     	this.intervalCounter = (this.intervalCounter + 1) % 10

	     	// Put everyone up
	     	if(this.intervalCounter === 0){
				const prevContainersState = this.state.containersState
				prevContainersState.forEach((currentContainer) => {
					currentContainer.stateName = 'up'
					})
		     	this.setState({prevContainersState})
	     	}

	     	// Put everyone down
	     	if(this.intervalCounter === 8){
		     	const prevContainersState = this.state.containersState
				prevContainersState.forEach((currentContainer) => {
					currentContainer.stateName = 'down'
					})
		     	this.setState({prevContainersState})
	     	}

	   	}.bind(this), ms));
	},

	verifyEndGame(){
		const currentContainersState = this.state.containersState
		for(let i = 0; i < currentContainersState.length; i++)
			if(currentContainersState[i].stateName !== 'clicked')
				return false;
		return true;
	},

	// Just change the state to 'clicked'
	handleClick(index){
		const prevContainersState = this.state.containersState;
		if(prevContainersState[index].stateName === 'up'){
			prevContainersState[index].stateName = 'clicked'
			this.setState({prevContainersState})
			console.log(this.verifyEndGame())
		}
	},


	render(){
		return (
			<div style={style}>
				{
					this.state.containersState.slice(0,NUM_CONTAINERS/2 + 1)
					.map( (containerState) => {
					return (
						<ContainerObject 
							stateName={containerState.stateName}
							index={containerState.index}
							onClick={this.handleClick}/>
						)
					} )
				}
				<br/>
				{
					this.state.containersState.slice(NUM_CONTAINERS/2 + 1,NUM_CONTAINERS)
					.map( (containerState) => {
					return (
						<ContainerObject 
							stateName={containerState.stateName}
							index={containerState.index}
							onClick={this.handleClick}/>
						)
					} )
				}
			</div>
			)
	}
})