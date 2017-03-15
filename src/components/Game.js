import React from 'react'
import logo from '../logo-getup.png'
import './Game.css';
import GameStateMachine from '../containers/GameStateMachine'
import '../animate.css'


export default React.createClass({
	render(){
		return (
			<div>
				<div className='bgImage'>
					<div className='title-box'>
						<h1 className='animated tada'>I Dare you to kill my app</h1>
						<GameStateMachine/>
					</div>
					<div className='logoFooter'>
						<a href='https://getupcloud.com/'>
							<img src={logo} alt='Logo' className='img-logo'/>
						</a>
					</div>
				</div>
			</div>
			)
	}

	
})