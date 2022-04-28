class Rectangle {
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return  this.height * this.width;
    }
    getPer() {
        return (this.height + this.width) * 2;
    }
    setHeight(height) {
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
}