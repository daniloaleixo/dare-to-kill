import React from "react"
import logo from "../img/logo-getup.png"
import "./Game.css";
import "../animate.css"
import GameStateMachine from "../containers/GameStateMachine"
import {Image} from "react-bootstrap"

const getupLogo = (
  <Image src={logo} responsive alt="logo getup cloud"/>
);

export default React.createClass({
	render(){
		return (
			<div>
				<div className="bgImage">
					<div className="title-box">
						<GameStateMachine/>
					</div>
					<a href="https://getupcloud.com/">
						{getupLogo}
					</a>
				</div>
			</div>
			)
	}

	
})