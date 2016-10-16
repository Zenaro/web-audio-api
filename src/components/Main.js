require('normalize.css/normalize.css');
require('styles/app.less');

import React from 'react';

let AudioComponent = require('./AudioComponent.js');


let AppUtil = require('../Lib/AppUtil.js');

// let yeomanImage = require('../images/yeoman.png');

/*
 *	项目入口 	AppComponent
 *	global 对象
 */
const AppComponent = React.createClass({
	getInitialState: function() {
		return {
			isDragEnter: false
		};
	},
	onModal: function() {
		this.setState({
			isDragEnter: true
		});
	},
	offModal: function() {
		this.setState({
			isDragEnter: false
		});
	},
	render: function() {
		return (
			<div className="container" onDragEnter={this.onModal} onDrop={this.offModal} onClick={this.offModal}>
				<EffectComponent/>
	        	<canvas id="canvas"></canvas>
	        	<AudioComponent/>
	        	<DragComponent isDragEnter={this.state.isDragEnter}/>
      		</div>
		);
	}
});

class EffectComponent extends React.Component {
	render() {
		return (
			<ul className="btn-group effect-component">
				<li><a href="javascript:void(0);">3d 环绕声</a></li>
				<li><a href="javascript:void(0);">消声</a></li>
				<li><a href="javascript:void(0);">delay 延时</a></li>
			</ul>
		);
	}
}

class DragComponent extends React.Component {
	handleChange(event) {
		AppUtil.render(event.target.files);
	}
	render() {
		let style = 'drag-component';
		if (this.props.isDragEnter) {
			style += ' show';
		}
		return (
			<div className={style}>
	        	<input type="file" multiple="" onChange={this.handleChange.bind(this)}/>	
			</div>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;