import React from 'react'
import './ContainerObject.css'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import container from '../img/icone-pod-lg.svg'
// import sad from '../img/main-qimg-fa13beb8faa5b5ad2b5534932f5c1f7f_sad3.png'
// import blocked from '../img/main-qimg-fa13beb8faa5b5ad2b5534932f5c1f7f_blocked2.png'
import dead from '../img/icone-pod-pausado.svg'
import alive from '../img/icone-status-pod.svg'
import '../animate.css'
import {Image} from 'react-bootstrap'


const containerImageStyle = {
	width: '3em',
	height: '3em',
	float: 'left',
	clear: 'none',
	margin: '1%'
};


export default React.createClass({
	
	propTypes: {
		index: React.PropTypes.number,
	  	stateName: React.PropTypes.string
	},

	handleClick(e){
		this.props.onClick(this.props.index)
	},

	render() {
		let statusImg = ''
		let imgAnimation = ''
		let brightnessClass = ''

		switch(this.props.stateName){
			case 'down': 
				imgAnimation = 'animated fadeInDown brightness-50'; 
				statusImg = alive;
				break;
			case 'up': 
				imgAnimation = 'shakeUpAndDown brightness-100'; 
				statusImg = alive;
				break;
			case 'clicked': 
				imgAnimation = 'animated fadeOutDown brightness-50'; 
				statusImg = dead;
				break;
			default: 
				console.log("default")
		}
		return (
			<div className={imgAnimation} onClick={this.handleClick}>
				<Image src={container} 
						responsive 
						className="containerStyle"
						alt="Container Image"
						/>
				<Image 	src={statusImg} 
						responsive 
						className="statusStyle"
						// style={statusStyle} 
						alt="Container Image"/>
			</div>
			)
	}
})