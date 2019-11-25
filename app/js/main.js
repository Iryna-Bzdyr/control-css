document.getElementById('drop_down').addEventListener('click',function(){
   document.getElementById('header_menu').style.display = 'block';
   document.getElementById('drop_down').style.display = 'none';

})

document.getElementById('header_menu').addEventListener('mouseover',function(){
    document.getElementById('header_menu').style.display = 'none';
    document.getElementById('drop_down').style.display = 'block';
 
 })