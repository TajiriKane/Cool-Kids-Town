window.gml_Script_gmcallback_scaling();

function loadingBar_hook(ctx, width, height, total, current, image)
{
	var backgroundColor = "#512123";
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, width, height);
	ctx.drawImage(image,0,0,width,height);
}

function helloWorld() {
  alert("Hello world!");
}