let AudioComponent = { // 自定义的播放器组件类
	audio: {},
	audioCtx: {},
	source: null, // 音频源
	analyser: null, // 音频分析器
	panner: null, // panner实现立体声
	gain: null, // 
	bufferLength: 512, // 频域分析 fft 快速傅里叶变换的大小,默认调整为 512
	init: function() {
		this.audio = new Audio();
		this.audioCtx = new(window.AudioContext || window.webkitAudioContext)();
		this.source = this.audioCtx.createMediaElementSource(this.audio);
		this.analyser = this.audioCtx.createAnalyser();
		this.analyser.fftSize = this.bufferLength;

		// source  ->  analyser  ->  destination  播放的一条通路
		this.source.connect(this.analyser);
		this.analyser.connect(this.audioCtx.destination);
	},

	/*
	 * 播放方法
	 * @src：歌曲文件的路径
	 */
	play: function(src) {
		src && this.audio.src = src;
		this.audio.play();
	},

	/*
	 * 暂停
	 */
	pause: function() {
		this.audio.pause();
	},

	/*
	 * 获取analyser对象及fft参数，canvas画图用
	 */
	getAnalyser: function() {
		return {
			bufferLength: this.bufferLength,
			analyser: this.analyser
		}
	},

	/*
	 * 使用 panner 来实现立体声
	 */
	stereo: function() {
		this.panner = this.audioCtx.createPanner();
	}

	/*
	 * 随机换歌
	 */

	/*
	 *
	 */
};

module.exports = AudioComponent;