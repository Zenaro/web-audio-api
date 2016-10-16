let CanvasComponent = {
	canvas: {},
	canvasCtx: {},
	WIDTH: 500,
	HEIGHT: 300,
	bufferLength: 0,
	dataArray: null,
	AudioAnalyser: null,
	init: function() {
		this.canvas = document.getElementById('canvas');
		this.canvasCtx = this.canvas.getContext('2d');
		this.canvasCtx.clearRect(0, 0, this.WIDTH, this.HEIGHT);

		/* 获取三个必要参数，以确保draw方法的运行 */
		let AudioData = AudioComponent.getAnalyser();
		this.bufferLength = AudioData.bufferLength;
		this.dataArray = new Float32Array(this.bufferLength);
		this.AudioAnalyser = AudioData.analyser;
	},
	drawWave: function() {

		this.AudioAnalyser.getFloatTimeDomainData(this.dataArray);

		this.canvasCtx.fillStyle = 'rgb(200, 200, 200)';
		this.canvasCtx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
		this.canvasCtx.lineWidth = 2;
		this.canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
		this.canvasCtx.beginPath();

		var sliceWidth = this.WIDTH * 1.0 / this.bufferLength;
		var x = 0;

		for (var i = 0; i < this.bufferLength; i++) {
			var v = this.dataArray[i] * 200.0;
			var y = this.HEIGHT / 2 + v;

			if (i === 0) {
				this.canvasCtx.moveTo(x, y);
			} else {
				this.canvasCtx.lineTo(x, y);
			}
			x += sliceWidth;
		}

		this.canvasCtx.lineTo(this.WIDTH, this.HEIGHT / 2);
		this.canvasCtx.stroke();

		requestAnimationFrame(this.drawWave.bind(this)); // 传递this进去
	},
	drawRect: function() {
		this.AudioAnalyser.getFloatTimeDomainData(this.dataArray);
		this.canvasCtx.clearRect(0, 0, 500, 300);
		for (let i = 0, cellW = 6; i < this.bufferLength; i++) {

			requestAnimationFrame(() => {
				let y = this.dataArray[i] * 100;
				y = y > 1 ? y : 1;
				this.canvasCtx.fillStyle = 'rgb(200, 200, 200)';
				this.canvasCtx.fillRect(i * (cellW + 1), 150 - y, cellW, y);

			});
		}

		setTimeout(this.drawRect.bind(this), 200); // 传递this进去

		/*
		 *若使用request代替定时器，则clearRect()函数要缓冲一会再执行，否则没有动画
		 */
		// requestAnimationFrame(this.drawRect.bind(this)); 
	}
};
module.exports = CanvasComponent;