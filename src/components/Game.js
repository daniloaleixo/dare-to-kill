import React from 'react'
import logo from '../logo-getup.png'
import './Game.css';
import '../animate.css'
import {WelcomeScreen, InstructionsScreen, PlayingScreen, GameWonScreen} from './GameScenes'


export default React.createClass({
	getInitialState(){
		return { game: 'welcome' }
	},

	gameComponent: null,
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

	render(){
		this.checkButtonOrGame()
		return (
			<div>
				<div className='bgImage'>
					<div className='title-box'>
						<h1>I Dare you to kill my app</h1>
						{this.gameComponent}
					</div>
					<div className='logoFooter'>
						<img src={logo} alt='Logo' className='img-logo'/>
					</div>
				</div>
			</div>
			)
	},

	checkButtonOrGame(){
		switch(this.state.game){
			case 'welcome':
				this.gameComponent = <WelcomeScreen onClick={this.handleGameState}/>
				break
			case 'instructions':
				this.gameComponent = <InstructionsScreen onClick={this.handleGameState}/>
				break
			case 'play':
				this.gameComponent = <PlayingScreen numContainers={this.numContainers} 
										inCaseOfWin={this.handleGameState}/>
				break
			case 'won':
				this.gameComponent = <GameWonScreen onClick={this.handleGameState}/>
				break
			default:
				break
		}


	}
})