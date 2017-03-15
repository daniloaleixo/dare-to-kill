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
				<div className='instructions'>
					<div className='textbox'>
						<h2 className='title'>You won</h2>
						<button onClick={this.props.onClick}>Play Again</button>
						<h3 className='title' style={{marginBottom: '-0.5em'}}>
							Share
						</h3>
						{/* Share facebook*/}
						<span
							data-href="https://daretokill-79f8f.firebaseapp.com/" 
							data-layout="button" 
							data-mobile-iframe="true"><a 
							className="fb-xfbml-parse-ignore" 
							target="_blank" 
							href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdaretokill-79f8f.firebaseapp.com%2F&amp;src=sdkpreparse">
								<button className='share-button'>Facebook</button>
							</a>
						</span>
					{/* Share twitter*/}
						<span>
							<a href="https://twitter.com/share" 
								data-url="https://daretokill-79f8f.firebaseapp.com/" 
								data-hashtags="getupcloud">
									<button className='share-button'>Twitter</button>
							</a> 
						</span>
					</div>
				</div>
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