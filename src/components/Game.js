import React from 'react'
import HandlingContainersObjects from '../containers/HandlingContainersObjects'

export default React.createClass({
	getInitialState(){
		return { game: 'welcome' }
	},

	gameComponent: null,
	numContainers: 11,

	handleGameState(){
		// If we're in the welcome screen play the game
		if(this.state.game === 'welcome')
			this.setState({game: 'instructions'})
		if(this.state.game === 'instructions')
			this.setState({game: 'play'})
		else if(this.state.game === 'play')
			this.setState({game: 'won'})
		else if(this.state.game === 'won')
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
		switch(this.state.game){
			case 'welcome':
				this.gameComponent = <button onClick={this.handleGameState}>Start Game</button>
				break
			case 'play':
				this.gameComponent = <HandlingContainersObjects numContainers={this.numContainers} 
										inCaseOfWin={this.handleGameState}/>
				break
			case 'won':
				this.gameComponent = (
					<div>
						<h2>Você ganhou</h2>
						<button onClick={this.handleGameState}>Play Again</button>
					</div>
					)
				break
			case 'instructions':
				this.gameComponent = (
					<div>
						<h2>Instructions</h2>
						<button onClick={this.handleGameState}>Play</button>
					</div>
					)
				break
			default:
				break
		}


	}
})