import React from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import ContainerObject from './ContainerObject'


const style = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent:'center'
}

export default React.createClass({
	render(){
		return(
			<Grid>
				<Row>
					<Col xs={1} md={3} />
					<Col xs={10} md={6}>
						<Row>
							<Col xs={12} md={12} style={style}>

								{
									this.props.containersState.slice(0,this.props.numContainers/2)
									.map( (containerState) => {
									return (
										<ContainerObject 
											stateName={containerState.stateName}
											index={containerState.index}
											onClick={this.props.onClick}/>
										)
									} )
								}
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={12}  style={style}>
								{
									this.props.containersState.slice(this.props.numContainers/2,this.props.numContainers)
									.map( (containerState) => {
									return (
										<ContainerObject 
											stateName={containerState.stateName}
											index={containerState.index}
											onClick={this.props.onClick}/>
										)
									} )
								}
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={12}>
								<h2 className="white-text font-size-40">{this.props.counterText}</h2>
							</Col>
						</Row>
					</Col>
					<Col xs={1} md={3} />
				</Row>
			</Grid>
			)
	}
})