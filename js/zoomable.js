$.Zoomable = function (target, options) {
	this.$target = $(target);
	this.$target.addClass('zoomable');
	this.boxSize = ((options && options.boxSize) || 100);

	this.$target.on('mousemove', this.showFocusBox.bind(this));
	// this.$target.on('mouseleave', this.removeFocuxBox.bind(this));
};


$.Zoomable.prototype.showFocusBox = function (event) {
	if(!this.mousedOver) {
		this.mousedOver = true;
		this.$focusBox = $('<div class="focus-box"></div>');
		this.$focusBox.css('height', this.boxSize).css('width',this.boxSize);
		this.$target.append(this.$focusBox);

		this.offsetY = this.$target.offset().top;
		this.offsetX = this.$target.offset().left;

		console.log(this.$target)

		var img = this.$target.find('img')
		this.imgWidth = img.innerWidth();
		this.imgHeight = img.innerHeight();
	}

	console.log(event.pageY + ":" + this.offsetY)
	var xDiff = event.pageX - this.offsetX - (this.boxSize / 2);
	var yDiff = event.pageY - this.offsetY - (this.boxSize / 2);
	if (xDiff < 0) {
		xDiff = 0;
	}
	if (yDiff < 0) {
		yDiff = 0;
	}

	if (xDiff > this.imgWidth - this.boxSize){
		xDiff = this.imgWidth - this.boxSize;
	}

	if (yDiff > this.imgHeight - this.boxSize){
		yDiff = this.imgHeight - this.boxSize;
	}
	this.$focusBox.css('left', xDiff).css('top', yDiff);

	this.showZoom(xDiff, yDiff);
};

$.Zoomable.prototype.removeFocuxBox = function (event) {
	this.mousedOver = false;
	this.$focusBox.remove();

	this.zoomed = false;
	this.$zoom.remove();
};

$.Zoomable.prototype.showZoom = function (xDiff, yDiff) {
	if (!this.zoomed) {
		this.zoomed = true;
		this.windowHeight = window.innerHeight;

		var blowUpScale = (this.imgWidth / this.boxSize) * 100;

		this.$zoom = $('<div class="zoomed-image"></div>');
		this.$zoom.css('background-image', 'url(' + this.$target.find('img').attr('src') + ')')
.css('width', this.windowHeight).css('background-size', blowUpScale + '% auto')
		$('body').append(this.$zoom);	

	}

	var ratio = this.windowHeight / this.boxSize;
	var xDiff = xDiff * ratio; 
	var yDiff = yDiff * ratio;

	this.$zoom.css('background-position', '-'+ xDiff + 'px -' + yDiff + 'px' );

};

$.fn.zoomable = function (options) {
	this.each(function () {
		new $.Zoomable(this, options);
	});
};

$(function() {
	$('#zoomable').zoomable({boxSize: 100})
})