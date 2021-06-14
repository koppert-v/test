var click=true;
var lang=true;
var reg_name=/[0-9]/;
var reg_name=/[0-9]/;
    $('#pol').click(function () { 
        if(click==false){
            $('#menu').slideUp('slow');
            click=true
        }
        else if(click==true){
            $('#menu').slideDown('slow');
            click=false
        }
    $('#menu').click(function () { 
        if(lang==true){
            $('#en').text('RU')
            $('#ru').text('EN')
            $('#img_3').css('background','url(./image/image_7.png)')
            $('#img_2').css('background','url(./image/United-Kingdom.png)')
            lang=false;
        }else{
            $('#en').text('EN')
            $('#ru').text('RU')
            $('#img_2').css('background','url(./image/image_7.png)')
            $('#img_3').css('background','url(./image/United-Kingdom.png)')
            lang=true;
        }        
    });
    });

    $('#field_name').keypress(function (e) { 
        //console.log($('#field_name').val().match(reg_name));
        console.log(e.key);
        if(String(e.key).match(reg_name)){
            e.preventDefault();
        }else{
            
        }  
          
    });
    
