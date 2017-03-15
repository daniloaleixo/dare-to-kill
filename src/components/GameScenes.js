import React, { Component } from 'react'
import HandlingContainersObjects from '../containers/HandlingContainersObjects'
import '../animate.css'
import './GameScenes.css'

class WelcomeScreen extends Component {
	render(){
		return (
			<div className='animated fadeIn'>
				<button
				onClick={this.props.onClick}>
					Start Game
				</button>
			</div>
		)
	}
}

class InstructionsScreen extends Component {
	render(){
		return (
			<div className='animated fadeIn'>
				<div className='instructions'>
					<div className='textbox'>
						<h2 className='title'>Instructions</h2>
						<p className='text'>
							You have to click on the containers and try to bring them down
						</p>
						<button className='button' 
							onClick={this.props.onClick}>Play</button>
					</div>
				</div>
			</div>
		)
	}
}

class PlayingScreen extends Component {
	render(){
		return (
			<div className='animated fadeIn'>
				<HandlingContainersObjects numContainers={this.props.numContainers} 
													inCaseOfWin={this.props.inCaseOfWin}/>
			</div>
		)
	}
}

class GameWonScreen extends Component {
	render(){
		return (
			<div className='animated fadeIn'>
				<h2>You won</h2>
				<button onClick={this.props.onClick}>Play Again</button>
			</div>
		)
	}
}


export {
	WelcomeScreen,
	InstructionsScreen,
	PlayingScreen,
	GameWonScreen
}