import React from 'react'
import { random }  from '../helpers/helpers'
import ContainerObject from '../components/ContainerObject'

const style = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent:'space-between'
}

const NUM_CONTAINERS = 10, INTERVAL_MS = 200;

export default React.createClass({
	getInitialState() {
		const containersStateAux = []
		for(let i = 0; i < NUM_CONTAINERS; i++)
		{
			containersStateAux.push({
				index: i,
				stateName: 'a'
			})
		}
		this.handleIntervals(INTERVAL_MS)
		return { containersState: containersStateAux}
	},

	intervals: [],
	intervalCounter: 0,
	last_container:-1,

	handleIntervals(ms) {
	   	this.intervals.push(setInterval(function(){
	   		let containerChosen = -1


	   		//Increment the interval counter
	     	this.intervalCounter = (this.intervalCounter + 1) % 10

	     	//Each second I generate another container to be hit
	     	if(this.intervalCounter === 0){	     		
				containerChosen = random(0, NUM_CONTAINERS);

	     		//Choose a container different then the last one
	     		while(containerChosen === this.last_container) 
	     			containerChosen = random(0, NUM_CONTAINERS);

	     		this.last_container = containerChosen
		     	const prevContainersState = this.state.containersState
		     	prevContainersState[containerChosen].stateName = 'b'
		     	this.setState({prevContainersState})
	     	}

	     	//When I wait 0.8s the Container come back to normal
	     	if(this.intervalCounter === 8){
		     	const prevContainersState = this.state.containersState
		     	if(this.last_container >= 0) prevContainersState[this.last_container].stateName = 'a'
		     	this.setState({prevContainersState})
	     	}

	   	}.bind(this), ms));
	   	console.log(this.intervals);
	 },
	handleClick(index){
		const prevContainersState = this.state.containersState;
		if(prevContainersState[index].stateName === 'b'){
			prevContainersState[index].stateName = 'c'
			this.setState({prevContainersState})
		}
	},
	render(){
		return (
			<div style={style}>
				{
					this.state.containersState.map( (containerState) => {
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