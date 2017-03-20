import React from 'react'
import {	WelcomeScreen, 
			InstructionsScreen, 
			PlayingScreen, 
			GameWonScreen} from '../components/GameScenes'


export default React.createClass({
	getInitialState(){
		return { game: 'play' }
	},
	gameScene: null,
	numContainers: 11,

	handleGameState(){
		// Handling state machine
		if(this.state.game === 'welcome')
			this.setState({game: 'instructions'})
		if(this.state.game === 'instructions')
			this.setState({game: 'play'})
		else if(this.state.game === 'play')
			this.setState({game: 'won'})
		else if(this.state.game === 'won')
			this.setState({game: 'play'})
	},

	chooseState(){
		switch(this.state.game){
			case 'welcome':
				this.gameScene = <WelcomeScreen onClick={this.handleGameState}/>
				break
			case 'instructions':
				this.gameScene = <InstructionsScreen onClick={this.handleGameState}/>
				break
			case 'play':
				this.gameScene = <PlayingScreen numContainers={this.numContainers} 
										inCaseOfWin={this.handleGameState}/>
				break
			case 'won':
				this.gameScene = <GameWonScreen onClick={this.handleGameState}/>
				break
			default:
				break
		}
	},

	render(){
		this.chooseState()
		return (<div>{this.gameScene}</div>)
	}
})

