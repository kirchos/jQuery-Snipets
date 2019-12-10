$(function () {
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

})


/*
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
*/