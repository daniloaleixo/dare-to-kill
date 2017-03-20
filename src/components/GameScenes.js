import React, { Component } from 'react'
import HandlingContainersObjects from '../containers/HandlingContainersObjects'
import {Image, PageHeader, Button, Grid, Row, Col} from 'react-bootstrap'
import '../animate.css'
import './GameScenes.css'
import playingGif from '../img/playing.gif'

class WelcomeScreen extends Component {
	constructor(...args){
		super(...args);
		this.state= {}
	}

	render(){
		return (
			<Grid>
				<Row className="show-grid margin-top-30">
					<Col xs={1} md={3} />
					<Col xs={10} md={6}>
						<PageHeader className="no-border-bottom">I Dare you to kill my app</PageHeader>
						<Button
					        bsStyle="primary"
					        onClick={this.props.onClick}>
					        Iniciar
					</Button>
					</Col>
					<Col xs={1} md={3} />
				</Row>
			</Grid>
		)
	}
}

class InstructionsScreen extends Component {
	render(){
		return (
			<Grid>
				<Row className="show-grid">
					<Col xs={1} md={3} />
					<Col xs={10} md={6}>
						<h2 className='title'>Instructions</h2>
						<p className='text'>
							You have to click on the containers and try to bring them down
						</p>
						<Button bsStyle="primary"
							onClick={this.props.onClick}>Play</Button>
					</Col>
					<Col xs={1} md={3} />
				</Row>
			</Grid>
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
			<Grid>
				<Row>
					<Col xs={1} md={3} />
					<Col xs={10} md={6}>
						<Row>
							<Col xs={12} md={12}>
								<PageHeader>You won</PageHeader>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={12}>
								<Image src={playingGif} responsive alt="playing gif"/>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={12}>
								<Button bsStyle="primary" onClick={this.props.onClick}>Play Again</Button>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={12}>
								<h3>
									Compartilhe
								</h3>
							</Col>
						</Row>
						<Row>
							<Col xs={6} md={6}>
								<span
									data-href="https://daretokill-79f8f.firebaseapp.com/" 
									data-layout="button" 
									data-mobile-iframe="true"><a 
									className="fb-xfbml-parse-ignore" 
									target="_blank" 
									href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdaretokill-79f8f.firebaseapp.com%2F&amp;src=sdkpreparse">
										<Button bsStyle="primary" bsSize="xsmall">Facebook</Button>
									</a>
								</span>
							</Col>
							<Col xs={6} md={6}>
								<span>
									<a href="https://twitter.com/share" 
										data-url="https://daretokill-79f8f.firebaseapp.com/" 
										data-hashtags="getupcloud">
											<Button bsStyle="primary" bsSize="xsmall">Twitter</Button>
									</a> 
								</span>
							</Col>
						</Row>
					</Col>
					<Col xs={1} md={3} />
				</Row>
			</Grid>
		)
	}
}


export {
	WelcomeScreen,
	InstructionsScreen,
	PlayingScreen,
	GameWonScreen
}