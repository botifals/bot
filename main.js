$(document).ready(function(){
  $('#modepoin').append('<option value="CALL">RISE</option><option value="PUT">FALL</option>')
	$('#tokencopytrade').css('color','black');
	$('#barrir').attr('disabled',true);
    $('#ceck').attr('disabled',true);
	$('#lossvirtual').attr('disabled',true);
    $('#tickworm').attr('checked',true);
    $('#tickpattern').attr('checked',false);
    $('#tickpoin').attr('checked',false);
    $('#tokenvirtual').attr('disabled',true);
$('input[type=radio][name=moder]').change(function () {
    $('#ticksignal').attr('checked',false);
    $('#tickpattern').attr('checked',false);
    $('#tickpoin').attr('checked',false);
});
$('#lossvirtual').change(function(){
if($('#lossvirtual').val() > 0){
   $('#ceck').attr('disabled',false);
   $('#tokenvirtual').attr('disabled',false);
}else{
   $('#ceck').attr('disabled',true);
   $('#tokenvirtual').attr('disabled',true);
}
});
$('#file').change(function(){
if(['higherlower','onetouch','notouch'].indexOf($('#file').val()) != -1)
	$('#barrir').prop('disabled',false);
  else $('#barrir').prop('disabled',true);
 if(['higherlower','onetouch','notouch','risefall'].indexOf($('#file').val()) != -1){
    $('#tickreader').attr('checked',true);
    $('#tickpoin').attr('disabled',false);
    $('#pivotpoin').attr('disabled',false)
    $('#ticksignal').attr('disabled',false);
    $('#tickpicker').attr('disabled',false);
    $('#tickworm').attr('disabled',false);
    $('#tickpattern').attr('disabled',false);
    $('#type_duration').attr('disabled',false);
  	$('#multiplier').val(2.15);
 	$('#max_marti').val(7);
 }else{
 	$('#tickreader').prop('checked',true);
    $('#pivotpoin').attr('disabled',true)
    $('#tickpoin').attr('disabled',true);
    $('#ticksignal').attr('disabled',true);
    $('#tickpicker').attr('disabled',true);
    $('#tickworm').attr('disabled',true);
    $('#tickpattern').attr('disabled',true);
    $('#type_duration').val('t');
    $('#type_duration').attr('disabled',true);
 }
 if($('#file').val() == 'digitmatches') {
 	$('#metode').val('continueorder');
 	//$('#metode').attr('disabled',true);
 	$('#multiplier').val(1.125);
 	$('#max_marti').val(50);
 }else{
 	$('#metode').val('reanalise');
 	$('#metode').attr('disabled',false);
 }
 if($('#file').val() == 'digitdiffers'){
 	$('#multiplier').val(11);
 	$('#max_marti').val(3);
 }
/* if($(this).val() == 'notouch' || $(this).val() == 'onetouch'){
 	$('#type_duration').val('m');
 	$('#type_duration').attr('disabled',true);
 }*/
});
});
