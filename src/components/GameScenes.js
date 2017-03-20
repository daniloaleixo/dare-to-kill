import React, { Component } from 'react'
import HandlingContainersObjects from '../containers/HandlingContainersObjects'
import {Image, PageHeader, Button, Grid, Row, Col} from 'react-bootstrap'
import '../animate.css'
import './GameScenes.css'
import playingGif from '../img/playing.gif'

class WelcomeScreen extends Component {
	constructor(...args){
		super(...args);
		this.state = {}
	}

	render(){
		return (
			<Grid className="animated fadeIn">
				<Row className="show-grid margin-top-10">
					<Col xs={1} md={3} />
					<Col xs={10} md={6}>
						<PageHeader className="no-border-bottom animated tada">I Dare you to kill my app</PageHeader>
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
			<Grid className="animated fadeIn">
				<Row className="show-grid  margin-top-10">
					<Col xs={1} md={3} />
					<Col xs={10} md={6} className="white-box">
						<h2>Como jogar</h2>
						<p>
							Containers docker no Kubernetes são rápidos, mas será que você consegue ser mais rápido ainda?
							Clique nos containers docker para derrubá-los antes deles se tornarem responsivos novamente
						</p>
						<Button bsStyle="primary"
							onClick={this.props.onClick} className="margin-bottom-10">Play</Button>
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
			<div className='animated fadeIn margin-top-30'>
				<HandlingContainersObjects numContainers={this.props.numContainers} 
													inCaseOfWin={this.props.inCaseOfWin}/>
			</div>
		)
	}
}

class GameWonScreen extends Component {
	render(){
		return (
			<Grid className="animated fadeIn">
				<Row className="no-margin-bottom">
					<Col xs={1} md={3} />
					<Col xs={10} md={6}>
						<Row>
							<Col xs={12} md={12}>
								<PageHeader className="no-border-bottom 
									no-margin-bottom animated tada">
									Você ganhou!!</PageHeader>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={12} className="align-center">
								<Image src={playingGif} responsive alt="playing gif" 
										className="margin-bottom-5 full-width full-height max-width-250"/>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={12}>
								<Button bsStyle="primary" onClick={this.props.onClick}>Jogue novamente</Button>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={12}>
								<h3 className="white-text">
									Compartilhe
								</h3>
							</Col>
						</Row>
						<Row>
							<Col xs={6} md={6} className="align-center">
								<span
									data-href="https://daretokill-79f8f.firebaseapp.com/" 
									data-layout="button" 
									data-mobile-iframe="true"><a 
									className="fb-xfbml-parse-ignore full-width" 
									target="_blank" 
									href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdaretokill-79f8f.firebaseapp.com%2F&amp;src=sdkpreparse">
										<Button bsStyle="info" bsSize="xsmall">Facebook</Button>
									</a>
								</span>
							</Col>
							<Col xs={6} md={6}>
								<span className="full-width">
									<a href="https://twitter.com/share" 
										data-url="https://daretokill-79f8f.firebaseapp.com/" 
										data-hashtags="getupcloud">
											<Button bsStyle="info" bsSize="xsmall">Twitter</Button>
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