/**
 * Created by gggywww on 2015/11/15.
 */
var babyObj = function ()
{
    this.x;
    this.y;
    this.angle;
   // this.babyEye = new Image();
   // this.babyBoby = new Image();
   // this.babyTail = new Image();

    this.babyTailTimer = 0;
    this.babyTailCount = 0;
    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;
    this.babyBobyTimer = 0;
    this.babyBobyCount = 0;
}
babyObj.prototype.init = function()
{
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    this.angle = 0;
    ///this.babyEye.src = "./src/babyEye0.png";
   // this.babyBoby.src = "./src/babyFade0.png";
   // this.babyTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function()
{
    //lerp x,y
    this.x = lerpDistance(mom.x,this.x,0.99);
    this.y = lerpDistance(mom.y,this.y,0.99);
    //ctx1
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    //lerp,angle
    var beta = Math.atan2(deltaY,deltaX) + Math.PI;
    this.angle = lerpAngle(beta,this.angle,0.6);
    //babyTail
    this.babyTailTimer += daltaTime;
    if(this.babyTailTimer > 50)
    {
        this.babyTailCount = (this.babyTailCount + 1) % 8;
        this.babyTailTimer %= 50;
       // console.log(daltaTime);
    }
    //babyEye
    this.babyEyeTimer += daltaTime;
    if(this.babyEyeTimer > this.babyEyeInterval)
    {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer %= this.babyEyeInterval;
        if(this.babyEyeCount == 0)
        {
            this.babyEyeInterval = Math.random() * 1500 + 3000;
            //console.log("1");
        }
        else{ this.babyEyeInterval = 500;}
    }
    //baby body
    this.babyBobyTimer += daltaTime;
    if(this.babyBobyTimer > 500)
    {
        this.babyBobyCount = this.babyBobyCount + 1;
        this.babyBobyTimer %= 500;
        if(this.babyBobyCount > 19)
        {
            this.babyBobyCount = 19;
            //over
            data.gameOver = true;
        }
       //console.log("1");
    }
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var babyTailCount = this.babyTailCount;
    ctx1.drawImage(babyTail[babyTailCount],- babyTail[babyTailCount].width * 0.5 + 23,- babyTail[babyTailCount].height * 0.5);
    ctx1.drawImage(babyBoby[this.babyBobyCount],- babyBoby[this.babyBobyCount].width * 0.5,- babyBoby[this.babyBobyCount].height * 0.5);
    ctx1.drawImage(babyEye[this.babyEyeCount],- babyEye[this.babyEyeCount].width * 0.5 ,- babyEye[this.babyEyeCount].height * 0.5);
    ctx1.restore();

}