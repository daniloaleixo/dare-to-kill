import React from 'react'
import logo from '../logo-getup.png'
import './Game.css';
import '../animate.css'
import GameStateMachine from '../containers/GameStateMachine'


export default React.createClass({
	render(){
		return (
			<div>
				<div className='bgImage'>
					<div className='title-box'>
						<h1>I Dare you to kill my app</h1>
						<GameStateMachine/>
					</div>
					<div className='logoFooter'>
						<img src={logo} alt='Logo' className='img-logo'/>
					</div>
				</div>
			</div>
			)
	}

	
})