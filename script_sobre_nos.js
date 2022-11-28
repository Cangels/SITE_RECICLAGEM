var header = document.getElementById("header");
var navegação_botões = document.getElementById("navegação_botões");
var main_titulo = document.getElementById("main_titulo");
var showSidebar = false;

    function toggleSidebar()
{ showSidebar =!showSidebar;
  if(showSidebar)
  {
     navegação_botões.style.marginLeft = "-7vw";
     navegação_botões.style.animationName = "showSidebar";
  }
  else
  {
     navegação_botões.style.marginLeft = "-100vw";
     navegação_botões.style.animationName = '';
  }

}

    function closeSidebar()
    {
    if(showSidebar)
    {
        toggleSidebar();
    }
    }

    window.addEventListener('resize', function(event){
        if(window.innerWidth > 768 && showSidebar)
        {
            toggleSidebar();
        }
    });