require('../styles/AudioComponent.less');
import React from 'react';

let album = require('../images/player/default_album.jpg');
class AudioComponent extends React.Component {
	render() {
		return (
			<div className="audio-player">
				<div className="play-btns">
					<a href="javascript:void(0);" className="prv" title="上一首"></a>
					<a href="javascript:void(0);" className="play play-ply" title="播放"></a>
					<a href="javascript:void(0);" className="nxt" title="下一首"></a>
				</div>
				<div className="play-head">
					<a href="javascript:void(0);">
						<img src={album} alt=""/>
					</a>
				</div>
				<div className="play-ing">
					<div className="ptitle">
						<a href="javascript:void(0);" className="title" title="曲名"></a>
						<a href="javascript:void(0);" className="singer" title="演绎者"></a>
					</div>
					<div className="pbar">
						<div className="barbg">
							<div className="rdy"></div>
							<div className="cur">
								<div className="cur-inner">
									<span className="btn-cur">
										<i></i>
									</span>
								</div>
							</div>
						</div>
						<span className="clock"><i>00:00</i><span> / </span><em>00:00</em></span>
					</div>
				</div>
				<div className="play-ctrl">
					<div className="cbar">
						<div className="barbg">
							<div className="cur">
								<span className="btn-cur"></span>
							</div>
						</div>
					</div>
					<a href="javascript:void(0);" className="icon-vol" title="音量"></a>
					<a href="javascript:void(0);" className="icon-loop" id="icn-lop" title="循环"></a>
					<div className="lop-hint">单曲循环</div>
				</div>
			</div>
		);
	}
}

module.exports = AudioComponent;