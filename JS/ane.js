/**
 * Created by gggywww on 2015/11/14.
 */
var aneObj = function()
{
    // deadx,deady,rootx

    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.alpha = 0;
    this.amp = [];


}
aneObj.prototype.num = 50;
aneObj.prototype.init = function()
{
   // var h = can1.height;
    for(var i = 0;i<this.num;i++)
    {
        this.rootx[i] = i * 16+ Math.random() * 20;//[0,1)
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
    }
    //console.log("a");
}
aneObj.prototype.draw = function()
{
    this.alpha += daltaTime * 0.0003;
    var l = Math.sin(this.alpha);
    ctx2.save();
    ctx2.globalAlpha = 0.7;
    ctx2.lineWidth = 20;
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineCap = "round";
    for(var  i = 0;i<this.num;i++)
    {
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHeight);
        this.headx[i] = this.rootx[i] +  l * this.amp[i];
        ctx2.quadraticCurveTo(this.rootx[i],canHeight - 100,this.headx[i],this.heady[i]);

        ctx2.stroke();
    }
    ctx2.restore();
}