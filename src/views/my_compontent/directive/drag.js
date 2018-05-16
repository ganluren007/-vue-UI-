export default {
	bind: function(ele, bind) {
        
		var oW, oH;
		// 绑定touchstart事件
		ele.addEventListener("touchstart", function(e) {
			bind.value.startFun&&bind.value.startFun()
			console.log(e);
			var touches = e.touches[0];
			oW = touches.clientX - ele.offsetLeft;
			oH = touches.clientY - ele.offsetTop;
			//阻止页面的滑动默认事件
			document.addEventListener("touchmove", defaultEvent, false);
		}, false)

		ele.addEventListener("touchmove", function(e) {
			
			var touches = e.touches[0];
			var oLeft = touches.clientX - oW;
			var oTop = touches.clientY - oH;
			if(bind.value.xLimit){
				if(oLeft < bind.value.xLimit.min) {
					oLeft = bind.value.xLimit.min;
				} else if(oLeft > bind.value.xLimit.max) {
					oLeft = bind.value.xLimit.max;
				}
			}
			
			if(bind.value.yLimit){
				if(oTop < bind.value.yLimit.min) {
					oTop = bind.value.yLimit.min;
				} else if(oTop > bind.value.yLimit.max) {
					oTop = bind.value.yLimit.max;
				}
			}

			ele.style.left = oLeft + "px";
			ele.style.top = oTop + "px";
			bind.value.moveFun&&bind.value.moveFun({left:oLeft,top:oTop})
		}, false);

		ele.addEventListener("touchend", function() {
			bind.value.endFun&&bind.value.endFun()
			document.removeEventListener("touchmove", defaultEvent, false);
		}, false);
		
		
		
		function defaultEvent(e) {
			e.preventDefault();
		}
	}
}