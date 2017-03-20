import React from "react"
import logo from "../img/logo-getup.png"
import "./Game.css";
import "../animate.css"
import GameStateMachine from "../containers/GameStateMachine"
import {Image, Grid, Row, Col} from "react-bootstrap"

const getupLogo = (
  <Image src={logo} responsive alt="logo getup cloud" className="logo-size"/>
);

export default React.createClass({
	render(){
		return (
			<Grid className="background-image">
				<Row className="show-grid full-height">
					<Col xs={1} md={3} />
					<Col xs={10} md={6}>
						<GameStateMachine/>
					</Col>
					<Col xs={1} md={3} />
				</Row>
				<Row className="show-grid">
					<Col xs={12} md={12} className="align-right footer-position">
						<a href="https://getupcloud.com/">
							{getupLogo}
						</a>
					</Col>
				</Row>
			</Grid>
			)
	}

	
})