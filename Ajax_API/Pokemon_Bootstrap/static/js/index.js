
  pokemon.forEach(p => {
    console.log(p.name);

  });
  $(document).ready(function(){
      for(var i=0; i<pokemon.length; i++){
        var html_str="";
        var pokename= "#" +pokemon[i].name;
          html_str+="<div class='col-11 bg-light'>";
          html_str+="<img style='margin:0px; padding:0px; width: 100%;'src="+pokemon[i].image+">"
          html_str+="<h2>" + pokemon[i].name + "</h2>";
          
          

          for(var j=0; j<pokemon[i].moves.length; j++){html_str+= "<ul>"+"<li>"+pokemon[i].moves[j]+"</li>"+"</ul>";};
          html_str+="</div>";
          $(pokename).html(html_str);
      } 
   });