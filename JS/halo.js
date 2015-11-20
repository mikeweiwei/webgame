/**
 * Created by gggywww on 2015/11/20.
 */
var haloObj = function()
{
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}
haloObj.prototype.num = 5;
haloObj.prototype.init = function()
{
    for(var i = 0;i < this.num;i++)
    {
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.r[i] = 0;
    }
}
haloObj.prototype.draw = function()
{
    for(var i = 0;i < this.num;i++)
    {
        if(this.alive[i])
        {

            if(this.alive[i])
            {
                this.r[i] += daltaTime * 0.02;
                if(this.r[i] > 45)
                {
                    this.alive[i] = false;
                    break;
                }
                var alpha = 1 - this.r[i] / 45;
                //api
                ctx1.beginPath();
                ctx1.arc(this.x[i],this.y[i],this.r[i], 0 ,Math.PI * 2);
                ctx1.closePath();
                ctx1.strokeStyle = "rgba(134,45,145," + alpha +")";
                // console.log("1");
                //draw
                ctx1.stroke();
            }
        }

    }
}
haloObj.prototype.born = function(x,y)
{
    for(var i = 0;i < this.num;i++)
    {
        if(!this.alive[i])
        {
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 10;
            this.alive[i] = true;
        }

    }
}