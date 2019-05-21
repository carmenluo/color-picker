$(function(){
	var ctx=document.getElementById('canvas_picker').getContext('2d');
	var img=new Image();
	img.src="280.png";
	img.setAttribute('crossOrigin', '');
	img.onload=function(){
		ctx.drawImage(img,0,0);
	}
	$("#canvas_picker").on("mousemove",function(event){
		//alert("hello");
		var x=event.pageX-event.currentTarget.offsetLeft;
		var y=event.pageY-event.currentTarget.offsetTop;
		var ctx=document.getElementById("canvas_picker").getContext("2d");
		var imgd=ctx.getImageData(x,y,1,1,);
		var data=imgd.data;
		//alert(data[0]);
		var output=$("#result");
		var hexString=RGBtoHex(data[0],data[1],data[2]);
		output.html("color is #"+hexString);
		output.attr("style","background-color:#"+hexString+";");
	});
});
function RGBtoHex(R,G,B){return toHex(R)+toHex(G)+toHex(B);}

function toHex(decimal){
	if (decimal==null) return "00";
	decimal=parseInt(decimal);
	if (decimal==0) return "00";
	decimal=Math.round(decimal);
	return "0123456789ABCDEF".charAt(((decimal-decimal%16)/16))+"0123456789ABCDEF".charAt(decimal%16);
};