$(document).ready(function(){

    // var logoW = $("#navLogo").width();
    // $("#navLogo").css({'height':logoW})\
// $('#myForm').validator()


    $('#myForm').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            console.log('gotstuck');
        // handle the invalid form...
        } else {
        // everything looks good!
        e.preventDefault();
            console.log("clicked");

            var first = $('#inputFirstName').val()
            var last = $('#inputLastName').val() 
            var email = $('#inputEmail').val()

            $.post('/signup', {
                first: $('#inputFirstName').val(),
                last: $('#inputLastName').val(), 
                email: $('#inputEmail').val()
            }, function(data){
                // console.log(data);
                console.log('herenow');
                $('#newModalTitle').text("Welcome to myKlovr " + first)
                    $('#newModal').modal();
                    }
            )
        }
    })
if(!Modernizr.touchevents){

    console.log('hiiii');

    var enterAnim1 = TweenMax.to($("#secondpgcontent1"), 1, {left:0, ease:"Power2.easeInOut"});
    var enterAnim2= TweenMax.to($("#secondpgcontent1a"), 1, {right:0, ease:"Power2.easeInOut"});
    var enterAnim3= TweenMax.to($("#secondpgcontent1b"), 1, {left:0, ease:"Power2.easeInOut"});
    var qlcircle= TweenMax.to("#qlcirc", 1, {width: '50%', rotation: "360", ease:"Power2.easeInOut" })
    var shrinkCircle = TweenMax.to($("#qlcirc"), 1, {width: '0%', height:"0%", rotation:"-360", ease: "Power2.easeInOut"});
    var bringouttools= TweenMax.to($("#svgrow"),2,{scale:1, ease: "Power2.easeInOut"})
    var bringouttools2= TweenMax.to($("#svgrow"),2,{height:"20vh", ease: "Power2.easeInOut"})
    var changelamp = TweenMax.to($(".testsvgblue"), 1, {fill:"white"})
    var blinkarrows = TweenMax.fromTo($(".svgarrow"), 1, {fill:"#45A2D9"}, {fill:"#FED139", repeat: -1, repeatDelay:2,ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})});
    var hidepinned = TweenMax.to($("#missioncont"), .1, {visibility:"hidden"});
    var drawscribs = new TimelineMax()
        .add(TweenMax.to($("#svgscrib2"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#svgscrib1"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#svgscrib3"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))

    var a = 100;

    var controller = new ScrollMagic.Controller({loglevel: 3});

    var scene1a = new ScrollMagic.Scene({triggerElement: '#probquest', triggerHook: 'onLeave', duration:"90%"}).setPin("#probquest").addTo(controller);
    var scene1 = new ScrollMagic.Scene({triggerElement: "#probquest", duration: "50%"}).setTween(enterAnim1).addTo(controller);
    var scene2 = new ScrollMagic.Scene({triggerElement: "#section2", duration: "60%", offset: "15%"}).setTween(enterAnim2).addTo(controller);
    var scene3 = new ScrollMagic.Scene({triggerElement: "#section2", duration: "60%", offset: "15%"}).setTween(enterAnim3).addTo(controller);
    var scene4 = new ScrollMagic.Scene({triggerElement: "#probquest", duration: "80%"}).setTween(qlcircle).addTo(controller);
    var scene6 = new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.5",duration:"25%"}).setTween(shrinkCircle).addTo(controller);
    var testnew = new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.1"}).setPin("#missioncont",{spacerClass:"controw2spacer"}).addTo(controller);
    var scene13 = new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.2", duration:"40%"}).setTween(bringouttools2).addTo(controller);
    var scene13a= new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.2", duration:"50%"}).setTween(bringouttools).addTo(controller);
    var scene14 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave", offset:'14', duration:"150%"}).setPin("#controw5", {pushFollowers: false}).addTo(controller);
    var scene15 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave", offset:"50vh", duration:"60%"}).setTween(changelamp).addTo(controller);
    var scene16 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave"}).setTween(blinkarrows).addTo(controller);
    var scene17 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave", offset:"50vh", duration:"80%"}).setTween(drawscribs).addTo(controller);
    var scene19 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"0"}).setTween(hidepinned).addTo(controller)
    var drawGraphs = new TimelineMax()
        .add(TweenMax.to($("#barsvgy1"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#barsvgp1"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#barsvgy2"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#barsvgp2"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#barsvgy3"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#barsvgp3"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.staggerTo($(".linepdots"),.5,{opacity: 1, ease:Linear.easeNone}, 0.2))
        .add(TweenMax.to($(".pline"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.staggerTo($(".lineydots"),.5,{opacity: 1, ease:Linear.easeNone}, 0.2))
        .add(TweenMax.to($(".yline"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#gaugepartr"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#gaugeparty"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#gaugepartg"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#gaugepartp"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
        .add(TweenMax.to($("#gaugepartl"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))

    var scene20 = new ScrollMagic.Scene({triggerElement:"#pinContainer", triggerHook:"onLeave", offset:14, duration:"200%"}).setPin("#pinContainer", {pushFollowers:true}).addTo(controller);
    var scene21 = new ScrollMagic.Scene({triggerElement:"#pinContainer", triggerHook:0, offset:30, duration:"90%"}).setTween(drawGraphs).addTo(controller);
    var g;
    var h = $("#secondpgcontent3").css('height');
    function spc3Height(size)
        {
            var size2 = size.substring(0, size.length-2);
            var size3 = parseInt(size2);
            var size4 = size3 * 1.05;
            g = size4
        }
    spc3Height(h);
    var makedots= new TimelineMax()
        .add(TweenMax.to($(".bigconcircles"), 0.9,{opacity:"1", ease:Linear.easeNone}),0)
        .add(TweenMax.to($(".yellowconcircles"), 0.9,{opacity:"1", ease:Linear.easeNone}),1)
        .add(TweenMax.to($(".iconcongrp"), 0.9,{opacity:"1", ease:Linear.easeNone}),2)
        .add(TweenMax.to($(".littleconcircles"), 0.9,{opacity:"1", ease:Linear.easeNone}),3)
        .add(TweenMax.to($("#conright"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
        .add(TweenMax.to($("#conbottom"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
        .add(TweenMax.to($("#contop"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
        .add(TweenMax.to($("#conleft"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
        .add(TweenMax.to($("#conleft2"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
        // .add(TweenMax.to($("#secondpgcontent7"), 5, {right:"300%", ease:"Power2.easeInOut"}),5)
        .add(TweenMax.to($("#secondpgcontent7a"), 5, {left:"0%", ease:"Power2.easeInOut"}),4)


    var sr6a = new ScrollMagic.Scene({triggerElement: '#controw6o',triggerHook: 0, offset: '14',
    duration:"300%"}).setPin("#controw6o", {pushFollowers:false}).addTo(controller);
    var sr6b = new ScrollMagic.Scene({triggerElement: '#svg6wrap', triggerHook: "onLeave",  duration:"200%"}).setPin('#svg6wrap', {pushFollowers:false}).addTo(controller);
    sr6b.offset(g*-1);
    var sr6c = new ScrollMagic.Scene({triggerElement: '#controw6b', triggerHook: 0.8,  duration:"100%"}).setPin('#controw6b', {pushFollowers:false}).addTo(controller);
    var con = new ScrollMagic.Scene({triggerElement: '#connectContainer', triggerHook: "onLeave", offset:"14", duration:"500%"}).setPin('#connectContainer', {pushFollowers:true}).addTo(controller);
     var con1move= TweenMax.to($("#secondpgcontent7"), 1, {right:0, ease:"Power2.easeInOut"});
    var con1 = new ScrollMagic.Scene({triggerElement: '#connectContainer', triggerHook: "onLeave", offset:"14"}).setTween(con1move).addTo(controller);
    var drawConAnim2= new ScrollMagic.Scene({triggerElement:"#connectContainer", triggerHook:"onLeave", duration:"400%"}).setTween(makedots).addTo(controller);
}else{
    console.log('touchin');

    // $("#introhead").html("<h1>TESTINGITTT</h1>")

    var blinkarrows = TweenMax.fromTo($(".svgarrow"), 1, {fill:"#45A2D9"}, {fill:"#FED139", repeat: -1, repeatDelay:2,ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})});

    var drawscribs = new TimelineMax({repeat:-1})
        .add(TweenMax.to($("#svgscrib2"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),1)
        .add(TweenMax.to($("#svgscrib1"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),3)
        .add(TweenMax.to($("#svgscrib3"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),5)

    var makedots= new TimelineMax({repeat:-1, repeatDelay:1, yoyo:true})
        .add(TweenMax.to($(".bigconcircles"), 0.9,{opacity:"1", ease:Linear.easeNone}),0)
        .add(TweenMax.to($(".yellowconcircles"), 0.5,{opacity:"1", ease:Linear.easeNone}),1)
        .add(TweenMax.to($(".iconcongrp"), 0.5,{opacity:"1", ease:Linear.easeNone}),2)
        .add(TweenMax.to($(".littleconcircles"), 0.3,{opacity:"1", ease:Linear.easeNone}),3)
        .add(TweenMax.to($("#conright"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
        .add(TweenMax.to($("#conbottom"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
        .add(TweenMax.to($("#contop"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
        .add(TweenMax.to($("#conleft"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
        .add(TweenMax.to($("#conleft2"), 2, {strokeDashoffset: 0, ease:Linear.easeNone}),4)
}
 
   


    // var drawGauge = new TimelineMax()
    //     .add(TweenMax.to($("#gaugepartr"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    //     .add(TweenMax.to($("#gaugeparty"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    //     .add(TweenMax.to($("#gaugepartg"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    //     .add(TweenMax.to($("#gaugepartp"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    //     .add(TweenMax.to($("#gaugepartl"), 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))

// var gaugepartr = $("#conright").get(0).getTotalLength();
// console.log("conright = " + gaugepartr);
// var gaugepartr = $("#conbottom").get(0).getTotalLength();
// console.log("conbottom" + gaugepartr);
// var gaugepartg = $("#contop").get(0).getTotalLength();
// console.log("contop " + gaugepartg);
// var gaugeparty = $("#conleft").get(0).getTotalLength();
// console.log("conleft" + gaugeparty);
// var gaugepartl = $("#conleft2").get(0).getTotalLength();
// console.log("conleft2 " + gaugepartl);
// conright = 2801.720458984375
// conbottom = 2674.608154296875
// contop= 2828.107666015625
// conleft= 2070.843994140625
// conleft2= 4688.1962890625
    //pin again
    // var pinIntroScene2 = new ScrollMagic.Scene({
    //     triggerElement: '#crtxt1',
    //     triggerHook: 0,
    //     duration:"90%"
    // })
    // .setPin('#crtxt2', {pushFollowers: false})
    // .addTo(controller);

    //build a scene
 //    var ourScene = new ScrollMagic.Scene({
 //        triggerElement: '#secondpgcontent3a img',
 //        duration: '50%',
 //        triggerHook: 0.9
 //    })
 //    .setClassToggle('#secondpgcontent3a', 'fade-in') //add class to project01
 //    .addIndicators({
 //        name: 'fade scene',
 //        colorTrigger:'white',
 //        colorStart:'#75C695',
 //        colorEnd: 'pink'
 //    }) //this requires a plugin

 //    .addTo(controller);

 // //build a scene
 //    var ourScene = new ScrollMagic.Scene({
 //        triggerElement: '#secondpgcontent3b img',
 //        duration: '50%',
 //        triggerHook: 0.9
 //    })
 //    .setClassToggle('#secondpgcontent3b', 'fade-in') //add class to project01
 //    .addIndicators({
 //        name: 'fade scene',
 //        colorTrigger:'white',
 //        colorStart:'#75C695',
 //        colorEnd: 'pink'
 //    }) //this requires a plugin

 //    .addTo(controller);

 //     //build a scene
 //    var ourScene = new ScrollMagic.Scene({
 //        triggerElement: '#secondpgcontent3c img',
 //        duration: '50%',
 //        triggerHook: 0.9
 //    })
 //    .setClassToggle('#secondpgcontent3c', 'fade-in') //add class to project01
 //    .addIndicators({
 //        name: 'fade scene',
 //        colorTrigger:'white',
 //        colorStart:'#75C695',
 //        colorEnd: 'pink'
 //    }) //this requires a plugin

 //    .addTo(controller);
    // var scene21 = new ScrollMagic.Scene({triggerElement:"#pinContainer", triggerHook:"onLeave", offset:400, duration:"200%"}).setTween(wipeAnimation).addTo(controller);

     






// 191.69161987304688

// 172.48553466796875

   

   

    // var timeline1 = new TimelineMax().add(pushdownprovtext).add(maketoolbiggers);

    // function givesize(){
    //     var controw2space = $(".controw2spacer").css("padding-bottom")
    //     // console.log(controw2space);
    //     setOffset(controw2space)
    // }

    // function setOffset(size){
    //     console.log(size);
    //     var numsize = size.substring(0, size.length-2);
    //     console.log(numsize);
    //     var theheight =$("#secondpgcontent1a").css("height")
    //     console.log(theheight);
    //     var height1 = parseInt(theheight);

    //     var height2 = height1 * 1.2;
    //     // var newnumsize = numsize-height2;
    //     // console.log(newnumsize);
    //     a = height2
    //     console.log(a);
    //     // changeit(a)
    // }

    // function changeit(displace){
    //     console.log('displaced it by' + [displace]);
    //     // TweenMax.to($("#secondpgcontent1b"), 1, {top:[displace]});
    //     // TweenMax.to()
    // }





    // var controw2space = $(".controw2spacer").attr('padding-bottom')
    // console.log(controw2space);
    
    // var scene8 = new ScrollMagic.Scene({triggerElement:"#controw2", triggerHook:"onLeave", duration:"50%"}).setTween(maketoolbiggers).addTo(controller);
   

    // var scene8 = new ScrollMagic.Scene({})

    // var maketoolbiggers = new TweenMax.to($(".toolsvgs"),1,{width:"20vw", height:"20vh", ease: "Power2.easeInOut" });

    // var movet2down = TweenMax.to($("#secondpgcontent1b"), 1, {top:}


    // var scene7 = new ScrollMagic.Scene({triggerElement:"#questinLines", triggerHook:"onLeave", duration:"25%"}).setTween(enterAnim2).addTo(controller);

    // var scene7 = new ScrollMagic.Scene({triggerElement:"#secondpgcontent1a", triggerHook:"onLeave", duration:"30%"}).setPin("#secondpgcontent1a").addTo(controller)



    // $('#myForm').on('submit', function(e){
    //     // e.preventDefault();
    //     console.log("clicked");

    //     var first = $('#inputFirstName').val()
    //     var last = $('#inputLastName').val() 
    //     var email = $('#inputEmail').val()

     

    //     $.post('/signup', {
    //         first: $('#inputFirstName').val(),
    //         last: $('#inputLastName').val(), 
    //         email: $('#inputEmail').val()
    //     }, function(data){
    //         // console.log(data);
    //         $('#newModalTitle').text("Welcome to myKlovr " + first)
    //             $('#newModal').modal();
    //         // if (data.have == true){
    //         //     console.log("this");
    //         //     $('#newModal').modal();

    //         // }else{console.log('that')
    //         //     $('#newModalTitle').text("Welcome to myKlovr " + first)
    //         //     $('#newModal').modal();
    //         // }
           



    //     });






    // })














    // $("#mainNav").hide();

    // // fade in .navbar
    // $(function () {
    //     $(window).scroll(function () {

    //              // set distance user needs to scroll before we start fadeIn
    //         if ($(this).scrollTop() > 100) {
    //             $('.navbar').fadeIn();
    //         } else {
    //             $('.navbar').fadeOut();
    //         }
    //     });
    // });





    // $("#myBtn").click(function(){
    //     $("#myModal").modal();
    // });
    // $("#myBtnBusiness").click(function(){
    //     $("#myBusiness").modal();
    // });
    // $("#myBtnSchools").click(function(){
    //     $("#mySchools").modal();
    // });
    //   $("#myBtnEducators").click(function(){
    //     $("#myEducators").modal();
    // });







// });
})