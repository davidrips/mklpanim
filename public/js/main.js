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
})

    var enterAnim1 = TweenMax.to($("#secondpgcontent1"), 1, {left:0, ease:"Power2.easeInOut"});
    var enterAnim2= TweenMax.to($("#secondpgcontent1a"), 1, {right:0, ease:"Power2.easeInOut"});
    var enterAnim3= TweenMax.to($("#secondpgcontent1b"), 1, {left:0, ease:"Power2.easeInOut"});
    var qlcircle= TweenMax.to("#qlcirc", 1, {width: '20%', height: '20%', rotation: "360", ease:"Power2.easeInOut" })
    var shrinkCircle = TweenMax.to($("#qlcirc"), 1, {width: '0%', height:"0%", rotation:"-360", ease: "Power2.easeInOut"});
    // var pushdownprovtext = TweenMax.to($("#secondpgcontent1b"),1,{top:"24vh", ease: "Power2.easeInOut"});
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

    var scene1 = new ScrollMagic.Scene({triggerElement: "#section2", duration: "50%"})
        scene1.setTween(enterAnim1);
        scene1.addTo(controller);
    var scene2 = new ScrollMagic.Scene({triggerElement: "#section2", duration: "60%", offset: "15%"}).setTween(enterAnim2).addTo(controller);
    var scene3 = new ScrollMagic.Scene({triggerElement: "#section2", duration: "60%", offset: "15%"}).setTween(enterAnim3).addTo(controller);
    var scene4 = new ScrollMagic.Scene({triggerElement: "#section2", duration: "40%", offset: "15%"}).setTween(qlcircle).addTo(controller);
    var scene6 = new ScrollMagic.Scene({triggerElement:"#questionLines", triggerHook:"onLeave", offset: "-80%",duration:"25%"}).setTween(shrinkCircle).addTo(controller);

    var testnew = new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.1"}).setPin("#missioncont",{spacerClass:"controw2spacer"}).addTo(controller);
    // var scene7 = new ScrollMagic.Scene({triggerElement:"#controw2", triggerHook:"onLeave"}).setPin("#controw2",{spacerClass:"controw2spacer"}).addTo(controller);
    // var scene9 = new ScrollMagic.Scene({triggerElement:"#controw2", triggerHook:"onLeave"}).setPin("#controw3",{spacerClass:"controw2spacer"}).addTo(controller);
    // var scene8 = new ScrollMagic.Scene({triggerElement:"#controw2", triggerHook:"onLeave"}).setPin("#controw4",{spacerClass:"controw2spacer"}).addTo(controller);
    // var scene12a =  new ScrollMagic.Scene({triggerElement:"#controw2", triggerHook:"onLeave"}).setPin("#svgrow",{spacerClass:"controw2spacer"}).addTo(controller);
    // var scene12 = new ScrollMagic.Scene({triggerElement:"#controw2", triggerHook:"onLeave", duration:"20%"}).setTween(pushdownprovtext).addTo(controller);
    var scene13 = new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.2", duration:"40%"}).setTween(bringouttools2).addTo(controller);
    var scene13 = new ScrollMagic.Scene({triggerElement:"#missioncont", triggerHook:"0.2", duration:"50%"}).setTween(bringouttools).addTo(controller);
    var scene14 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave", offset:14, duration:"95%"}).setPin("#controw5", {pushFollowers:true}).addTo(controller);
    // scene14.on('start', function(){testnew.update()})
    // scene14.on("end", function() {testnew.removePin()})

    var scene15 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave", offset:"50vh", duration:"60%"}).setTween(changelamp).addTo(controller);
    var scene16 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave"}).setTween(blinkarrows).addTo(controller);
    var scene17 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave", offset:"50vh", duration:"80%"}).setTween(drawscribs).addTo(controller);

    // var scene18 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"onLeave", offset:"50vh", duration:"95%"}).removePin("#controw5").addTo(controller);
    var scene19 = new ScrollMagic.Scene({triggerElement:"#controw5", triggerHook:"0"}).setTween(hidepinned).addTo(controller)
    // var scene19 = new ScrollMagic.Scene({triggerElement:"#controw6", triggerHook:"onLeave", offset:14}).setPin("#controw6").addTo(controller);
    var scene20 = new ScrollMagic.Scene({triggerElement:"#controw7", triggerHook:"onLeave", offset:14, duration:"195%"}).setPin("#controw7a", {pushFollowers:true}).addTo(controller);

    // init ScrollMagic
    var controller = new ScrollMagic.Controller();

    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#crtxt1',
        triggerHook: 0,
        duration:'150%'
    }).setPin("#crtxt1", {pushFollowers:false}).addTo(controller)

    //pin again
    // var pinIntroScene2 = new ScrollMagic.Scene({
    //     triggerElement: '#crtxt1',
    //     triggerHook: 0,
    //     duration:"90%"
    // })
    // .setPin('#crtxt2', {pushFollowers: false})
    // .addTo(controller);

    //build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secondpgcontent3a img',
        duration: '50%',
        triggerHook: 0.9
    })
    .setClassToggle('#secondpgcontent3a', 'fade-in') //add class to project01
    .addIndicators({
        name: 'fade scene',
        colorTrigger:'white',
        colorStart:'#75C695',
        colorEnd: 'pink'
    }) //this requires a plugin

    .addTo(controller);

 //build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secondpgcontent3b img',
        duration: '50%',
        triggerHook: 0.9
    })
    .setClassToggle('#secondpgcontent3b', 'fade-in') //add class to project01
    .addIndicators({
        name: 'fade scene',
        colorTrigger:'white',
        colorStart:'#75C695',
        colorEnd: 'pink'
    }) //this requires a plugin

    .addTo(controller);

     //build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secondpgcontent3c img',
        duration: '50%',
        triggerHook: 0.9
    })
    .setClassToggle('#secondpgcontent3c', 'fade-in') //add class to project01
    .addIndicators({
        name: 'fade scene',
        colorTrigger:'white',
        colorStart:'#75C695',
        colorEnd: 'pink'
    }) //this requires a plugin

    .addTo(controller);
// var len = $("#svgscrib2").get(0).getTotalLength();
// console.log(len);;

// 191.69161987304688

// 172.48553466796875

   

   

    // var timeline1 = new TimelineMax().add(pushdownprovtext).add(maketoolbiggers);

    function givesize(){
        var controw2space = $(".controw2spacer").css("padding-bottom")
        // console.log(controw2space);
        setOffset(controw2space)
    }

    function setOffset(size){
        console.log(size);
        var numsize = size.substring(0, size.length-2);
        console.log(numsize);
        var theheight =$("#secondpgcontent1a").css("height")
        console.log(theheight);
        var height1 = parseInt(theheight);

        var height2 = height1 * 1.2;
        // var newnumsize = numsize-height2;
        // console.log(newnumsize);
        a = height2
        console.log(a);
        // changeit(a)
    }

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