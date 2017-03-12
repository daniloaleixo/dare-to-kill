import React from 'react'
import HandlingContainersObjects from '../containers/HandlingContainersObjects'

export default React.createClass({
	getInitialState(){
		return { game: 'welcome' }
	},

	gameComponent: null,

	handleClick(){
		// If we're in the welcome screen play the game
		if(this.state.game === 'welcome')
			this.setState({game: 'play'})
	},

	render(){
		this.checkButtonOrGame()
		return (
			<div>
				<h1>Dare to kill my app</h1>
				{this.gameComponent}
			</div>
			)
	},

	checkButtonOrGame(){
		this.gameComponent = this.state.game === 'welcome' ?  
			this.gameComponent = <button onClick={this.handleClick}>Start Game</button> : 
			this.gameComponent = <HandlingContainersObjects/>

	}
})