class Rectangle{
    width:number;
    height:number;
    constructor (width:number,height:number){
        this.width=width;
        this.height=height;
    }
    getDT():number{
        return this.width*this.height
    }
    getCV():number{
        return  (this.width+this.height)*2
    }
   
}
 const rect = new Rectangle(5, 10);
    console.log(`Diện tích: ${rect.getDT()}`);
    console.log(`Chu vi: ${rect.getCV()}`);