$("html").click(function(evt){
   
  mouse_move_fac=4;
});


//bar game
$(".inbox").click(function(){
   $(".bar").addClass("bardown");
   setTimeout(function(){
     $("#game_li1").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li1>li").length)*70)+"px");
      $("#game_li2").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li2>li").length)*70)+"px");
      $("#game_li3").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li3>li").length)*70)+"px");
   },1);
   setTimeout(function(){
     $("#game_li1").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li1>li").length)*70)+"px");
      $("#game_li2").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li2>li").length)*70)+"px");
      $("#game_li3").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li3>li").length)*70)+"px");
   },200);
  setTimeout(function(){
     $("#game_li1").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li1>li").length)*70)+"px");
      $("#game_li2").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li2>li").length)*70)+"px");
      $("#game_li3").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li3>li").length)*70)+"px");
   },400);
   setTimeout(function(){
     $("#game_li1").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li1>li").length)*70)+"px");
      $("#game_li2").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li2>li").length)*70)+"px");
      $("#game_li3").css("margin-top","-"+(Math.floor(Math.random()*$("#game_li3>li").length)*70)+"px");
   },600);
   setTimeout(function(){
     var ind1=Math.floor(Math.random()*$("#game_li1>li").length);
     var ind2=Math.floor(Math.random()*$("#game_li2>li").length);
     var ind3=Math.floor(Math.random()*$("#game_li3>li").length);
     $("#game_li1").css("margin-top","-"+(ind1)*70+"px");
      $("#game_li2").css("margin-top","-"+(ind2)*70+"px");
      $("#game_li3").css("margin-top","-"+(ind3)*70+"px");
     console.log(ind1);
     
     barresult="有一天"+$($("#game_li1>li")[ind1]).html()
       +"，竟然"+$($("#game_li2>li")[ind2]).html()
       +"，然後就"+$($("#game_li3>li")[ind3]).html()+"。";
   },800);
   
  
   setTimeout(function(){
      $(".bar").removeClass("bardown");
   },400);
});


// share
$(".btnshare").click(function(){
  var share_url= 'https://www.facebook.com/dialog/feed?'+
                  'app_id=1577826275849523'+
                  '&display=popup'+
                  '&caption='+"美好生活節產生器"+
                  '&picture='+"http://monoame.com/complex_festival/barshare.png"+
                  '&description='+"我的美好生活是:"+barresult+
                  '&link='+"http://monoame.com/complex_festival/";
                  //'&redirect_uri=http://www.isayaroma.com/';

      window.open(share_url);

});
      //# sourceURL=pen.js