$(function () {

});

/*


$('li:gt(3)').css('color', 'blue')
    $('li:lt(3)').css('color', 'green')
    $('li:eq(3)').css('color', 'red')

$('.highlight:eq(2)').css("color","blue");
$('.highlight:nth-child(2)').css('color','blue');

for(x=0;x<$('li').length;x++){
    $('li:eq('+x+')').html(x+1)
}

 $('.highlight').css('color', 'red')
    $('.highlight').html('First')
    $('.highlight').html('Default')
    $('.highlight:first').html('First')
    $('li:first-child').html('The one')
    $('.highlight:last').html('Last')
    $('.highlight:even').html('EVEN')
    $('.highlight:odd').html('ODD')
    $('p:last').html('SECOND')

$(function () {
  let checkBoxes = $('input[type=checkbox]');
  console.log(checkBoxes.val());
});

  $('img:eq(0)').on('click', function () {
        $('img:eq(0)').css({
            display: 'block',
            position: 'absolute',
            top: '30vh',
            left: '30%',
            // margin: '0px auto',
            width: '50%',
            height: "350px",


        })
        $('.slika').css({
            height: '100vh',
            width: '100%',
            position: "absolute",
            'z-index': "99999",
            background: "rgba(0,0,0, 0.9)",
        })

        $('img:eq(1), li,p, input').css("display", 'none')

    })

 $('p').click(function () {
        $('li').first().css('color', "blue")
        $('li').has('span').css('color', 'red')
    })


$('li').click(function () {
        $(this).filter('.higlight').css('color', 'red')
    })

 $('img').attr({
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1227513%2Fpexels-photo-1227513.jpeg%3Fcs%3Dsrgb%26dl%3Dagriculture-blue-sky-clouds-1227513.jpg%26fm%3Djpg&f=1&nofb=1",
        alt: "Pole",
        height: "250px",
        width: "400px"
    });

    $('img').attr({
        src: function (e) {
            console.log(e);
            return 'https://dummyimage.com/250x150&text=Hello ' + e
        }
    })

      $('#img1').attr('src', "https://dummyimage.com/250x150&text=Raboti")
    $('#img2').attr('src', "https://dummyimage.com/350x250&text=Raboti")
    $('.higlight').html('UPDATED')
    $('.higlight').attr({
        title: "On Sale",


    })

    var checkBoxes = $('input[type=checkbox]')
    console.log(checkBoxes.val())

    hover---------
    $('.higlight').css({
        color: 'red',
        fontSize: "28px"
    })

    $(".higlight").hover(function () {
        $(this).css({
            background: 'red',
            color: 'yellow',
        });
    }, function () {
        $(this).css({
            background: 'none',
            color: 'red'
        });
    });

    $('.higlight').css({
        color: 'red',
        fontSize: "28px"
    })
    $('.higlight').html('Default')
    $('.higlight:first').html('First')
    $('li:first-child').html('the one')
    $('.higlight:last').html('Last')
    $('.higlight:even').html('EVEN')
    $('.higlight:odd').html('ODD')


    $('.higlight:eq(2)').css('color', 'blue');
    $('.higlight:nth-child(2)').html('Spavas li mirno');
    $('li:eq()').html('1');
    for (i = 0; i < $('li').length; i++) {
        $('li:eq(' + i + ')').text(i + 1)
    }

    $('li:gt(3)').css('color', "aqua")
    $('li:lt(3)').css('color', "pink")
    $('li:gt(3)').css('color', "aqua")
    $('li:eq(3)').css('color', "red")

    $('img:eq(0)').on('click', function () {
        $('img:eq(0)').css({
            display: 'block',
            position: 'absolute',
            top: '30vh',
            left: '50vh',
            // margin: '0px auto',
            width: '50%',
            height: "350px",


        })
        $('.slika').css({
            height: '100vh',
            width: '100%',
            position: "absolute",
            'z-index': "99999",
            background: "rgba(0,0,0, 0.9)",
        })

        $('img:eq(1), li,p, input').css("display", 'none')

    })


     $('li').click(function () {
        console.log($(this))
        console.log(this)
    })

    $('p').bind('click', function () {
        console.log('bind clicked')
    })


*/
