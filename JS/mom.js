/**
 * Created by gggywww on 2015/11/14.
 */
var momObj = function()
{
    this.x;
    this.y;
    this.angle;
   this.bigEye = new Image;
    //this.bigBody = new  Image;
   //this.bigTail = new  Image;
    this.momTailTimer = 0;
    this.momTailCount = 0;

    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;

    this.momBodyCount = 0;
}
momObj.prototype.init = function()
{
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
   this.bigEye.src = "./src/bigEye0.png";
    //this.bigBody.src = "./src/bigSwim0.png";
   // this.bigTail.src = "./src/bigTail0.png";
}
momObj.prototype.draw = function() {
    //lerp x,y
    this.x = lerpDistance(mx, this.x, 0.95);
    this.y = lerpDistance(my, this.y, 0.95);

    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;
    this.angle = lerpAngle(beta, this.angle, 0.6);
    // mom tail
    this.momTailTimer += daltaTime;
    if (this.momTailTimer > 50)
    {
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTimer %= 50;
        //console.log("1111");
    }
    //mom eye
    this.momEyeTimer += daltaTime;
    if (this.momEyeTimer > this.momEyeInterval)
    {
        this.momEyeCount = (this.momEyeCount + 1) % 2;
        this.momEyeTimer %= this.momEyeInterval;
        if (this.momEyeCount == 0) {
            this.momEyeInterval = Math.random() * 1500 + 3000;
            // console.log("1");
        }
        else {
            this.momEyeInterval = 500;
            // console.log("1");}
        }
    }
        ctx1.save();
        ctx1.translate(this.x, this.y);
        ctx1.rotate(this.angle);
        var bigTailCount = this.momTailCount;
        var bigEyeCount = this.momEyeCount;
        var momBodyCount = this.momBodyCount;
        if(data.double == 1)
        {
            ctx1.drawImage( momBodyOra[momBodyCount], -momBodyOra[momBodyCount].width * 0.5, -momBodyOra[momBodyCount].height * 0.5);
        }
        else{
            ctx1.drawImage( momBodyBlue[momBodyCount], -momBodyBlue[momBodyCount].width * 0.5, -momBodyBlue[momBodyCount].height * 0.5);

        }
        ctx1.drawImage(momTail[bigTailCount], -momTail[bigTailCount].width * 0.5 + 23, -momTail[bigTailCount].height * 0.5);

        ctx1.drawImage(momEye[bigEyeCount], -momEye[bigEyeCount].width * 0.5, -momEye[bigEyeCount].height * 0.5);
        ctx1.restore();

}