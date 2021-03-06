import React from 'react'
import ContainersTogether from '../components/ContainersTogether'


const INTERVAL_MS = 700;

export default React.createClass({
	getInitialState() {
		return { game: false, 
				containersState: this.createContainers(this.props.numContainers),
				counter: 'Ready??' }
	},

	intervals: [],
	intervalCounter: -4,

	componentDidMount(){
		this.handleIntervals(INTERVAL_MS)
	},

	handleIntervals(ms) {
	   	this.intervals.push(setInterval(function(){

	   		//Increment the interval counter
	     	this.intervalCounter = (this.intervalCounter + 1) % 10

	     	if(this.intervalCounter < 0){
		     	// Print 3
		     	const counterAux = this.intervalCounter * - 1
		     	this.setState({counter: counterAux})
		     	
	     	} 
	     	else {
		     	// Put everyone up
		     	if(this.intervalCounter === 0){
					const prevContainersState = this.state.containersState
					prevContainersState.forEach((currentContainer) => {
						currentContainer.stateName = 'up'
						})
			     	this.setState({containerState: prevContainersState, 
			     				game: true, counter: 'UP'})
		     	}

		     	// Put everyone down
		     	if(this.intervalCounter === 8){
			     	const prevContainersState = this.state.containersState
					prevContainersState.forEach((currentContainer) => {
						currentContainer.stateName = 'down'
						})
			     	this.setState({containerState: prevContainersState, 
			     				counter: 'DOWN'})
		     	}
	     	}



	   	}.bind(this), ms));
	},

	// Just change the state to 'clicked'
	handleClick(index){
		const prevContainersState = this.state.containersState;
		if(prevContainersState[index].stateName === 'up'){
			prevContainersState[index].stateName = 'clicked'
			this.setState({containerState: prevContainersState})
		}
		this.verifyEndGame()
	},


	render(){
		return (
			<ContainersTogether containersState={this.state.containersState} 
						onClick={this.handleClick} 
						counterText={this.state.counter}
						numContainers={this.props.numContainers}/>
			)
	},

	// *************************

	// Auxiliar functions

	// *************************
	verifyEndGame(){
		const currentContainersState = this.state.containersState
		let i = 0;
		for(i = 0; i < currentContainersState.length; i++)
			if(currentContainersState[i].stateName !== 'clicked')
				break;
		// Check if the game is over
		if(i === currentContainersState.length) {
			this.endGame()
			this.props.inCaseOfWin()
		}
	},

	startGame(){
		this.intervalCounter = 8
	},

	endGame(){
		this.intervals = []
		this.setState({game: false})
	},

	createContainers(numContainers){
		const containersStateAux = []
		for(let i = 0; i < numContainers; i++)
		{
			containersStateAux.push({
				index: i,
				stateName: 'down'
			})
		}
		return containersStateAux
	}


})