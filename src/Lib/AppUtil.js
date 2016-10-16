require('./AudioUtil.js');
require('./CanvasUtil.js');

let Index = {
	list: [], // 歌单
	render: function(files) {

		// 将新选中的歌曲 填充进歌单
		for (let i = files.length - 1, name = '', url = ''; i >= 0; i--) {
			if (files[i].type.indexOf('audio') < 0) continue;
			name = files[i].name.substr(0, files[i].name.lastIndexOf('.'));
			url = URL.createObjectURL(files[i]);
			this.list.push({
				'name': name,
				'url': url
			});
		}

		// 播放
		AudioComponent.init();
		AudioComponent.play(this.list[0].url);

		// 绘画
		CanvasComponent.init();
		CanvasComponent.drawRect();
	}
};

module.exports = Index;