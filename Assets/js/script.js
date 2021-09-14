$(function() {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    
    $('#enviarCorreo').click(function(){
        alert('Enviar por correo')
    });
   // $( "toggle" ).click(function() {
     //   $( "h5 p" ).toggle( "slow" );
     // });

  
    
});

$('#toggle').click( function(){
    $('#texto').toggle('1000'); 
       
      
});

$('#toggle_2').click( function(){
  $('#texto_2').toggle('slow'); 
     
    
});
$('#toggle_3').click( function(){
  $('#texto_3').toggle('slow'); 
     
    
});