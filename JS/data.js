/**
 * Created by gggywww on 2015/11/18.
 */
var dataObj = function()
{
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;

}

dataObj.prototype.draw = function()
{
    var w = can1.width;
    var h = can1.height;
    ctx1.save();
    ctx1.fillStyle = "white";
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    //ctx1.fillText("num:" + this.fruitNum, w * 0.5 , h - 50);
   // ctx1.fillText("double:" + this.double, w * 0.5 , h - 80);
    ctx1.fillText("score :" + this.score, w * 0.5 , h - 20);
   // console.log(this.fruitNum);

    if(this.gameOver)
    {
        this.alpha += daltaTime * 0.0001;
        if(this.alpha >1)
        {
            this.alpha = 1;
        }

        ctx1.fillStyle = "rgba(255,255,255," + this.alpha+ ")" ;
        ctx1.fillText("GAMEOVER" , w * 0.5 , h * 0.5);

    }

    if(baby.babyBobyCount == 8||baby.babyBobyCount == 9||baby.babyBobyCount == 10||baby.babyBobyCount == 11||
        baby.babyBobyCount == 12||baby.babyBobyCount == 13||baby.babyBobyCount == 14||baby.babyBobyCount == 15)
    {
        ctx1.fillText(" yawei, wo yaoŒ“ chi " , w * 0.5 , h - 50);
    }
    ctx1.restore();
}
dataObj.prototype.daddScore = function()
{
    this.score += this.fruitNum * 100 * this.double;
    this.fruitNum = 0;
    this.double = 1;
}
