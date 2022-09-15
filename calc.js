(function(){
    let screen = document.querySelector('.screen');
    let buttons  = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-delete');
    let Equal =  document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
        screen.value += value;        })
    })
})
Equal.addEventListener('click', function(e)
{
  if(screen.value === "")
  {
   screen.value = ""; 
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  } 
})
clearInterval.addEventListener('click', function(e)
{
    screen.value = "";
})
();



