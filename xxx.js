function A(name) {
  this.name = name;
  this.getThis = function () {
    console.log(this);
  };
  this.getThis2 =  ()=> {
    console.log(this);
  };
}

// new A().eat();
new A("fpc").getThis2();
