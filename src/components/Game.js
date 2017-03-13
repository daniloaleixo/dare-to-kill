import React from 'react'
import HandlingContainersObjects from '../containers/HandlingContainersObjects'
import logo from '../logo-getup.png'
import './Game.css';
import '../animations.css'

const gameStyle = {
	
}


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
			<div style={gameStyle}>
				<div className='bgImage'>
					<div className='title-box  fadeIn'>
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
				this.gameComponent = (<button
									onClick={this.handleGameState}>
										Start Game
									</button>)
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
						<div className='instructions'>
							<div className='textbox'>
								<h2 className='title'>Instructions</h2>
								<p className='text'>
									You have to dsajkhdad
									sadjbasdaja
									dhdasd
									sadassaasbsahdsa
								</p>
								<button className='button' 
									onClick={this.handleGameState}>Play</button>
							</div>
						</div>
					</div>
					)
				break
			default:
				break
		}


	}
})