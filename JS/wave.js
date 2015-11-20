/**
 * Created by gggywww on 2015/11/20.
 */
var waveObj = function()
{
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}
waveObj.prototype.num = 10;
waveObj.prototype.init = function()
{
    for(var i = 0;i < this.num;i++)
    {
        this.alive[i] = false;
        this.r[i] = 0;
    }
}
waveObj.prototype.draw = function()
{

    for(var i = 0;i < this.num;i++)
    {

        if(this.alive[i])
        {
            this.r[i] += daltaTime * 0.02;
            if(this.r[i] > 40)
                {
                    this.alive[i] = false;
                    break;
                }
            var alpha = 1 - this.r[i] / 40;
            //api
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i], 0 ,Math.PI * 2);
            ctx1.closePath();
            ctx1.stroke();
            ctx1.strokeStyle = "rgba(255,255,255," + alpha +")";
           // console.log("1");
            //draw
            ctx1.restore();
        }
    }

}
waveObj.prototype.born = function(x,y)
{
    for(var i = 0;i < this.num;i++)
    {
        if(!this.alive[i])
        {
            //born
            this.alive[i] = true;
            this.r[i] = 10;
            this.x[i] = x;
            this.y[i] = y;
            return;
        }
    }
}