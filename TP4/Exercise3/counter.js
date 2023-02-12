class Counter{
    number=0;
  
    constructor(num){
      this.number = parseInt(num);
    }
    decrease(){
      this.number=this.number-1;
      localStorage.setItem("counter",this.number);
      show_number();
    }
  
    increase(){
      this.number=this.number+1; 
      localStorage.setItem("counter",this.number);
      show_number();
    }
  
    reset(){
      this.number=0;
      localStorage.setItem("counter",0);
      show_number();
    }
  }
  
  function show_number(){
    var num = localStorage.getItem("counter");
    $(".number").html(num);
    if(num>0){
      $(".number").css("color","green");
    }else if(num<0){
      $(".number").css("color","red");
    }else{
      $(".number").css("color","black");
    }
  }
  
  var default_num = localStorage.getItem("counter");
  default_num = parseInt(default_num);
  let count = new Counter(default_num);
  
  $("#decrease").click(function(){
    count.decrease();
  })
  $("#reset").click(function(){
    count.reset();
  })
  $("#increase").click(function(){
    count.increase();
  })
  
  $(function () {

    if(typeof(localStorage.getItem("counter"))=='undefined'){
        localStorage.setItem("counter",0);
    };
})