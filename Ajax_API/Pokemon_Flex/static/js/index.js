
  pokemon.forEach(p => {
    console.log(p.name);

  });
  $(document).ready(function(){
      for(var i=0; i<pokemon.length; i++){
        var html_str="";
        var pokename= "#" +pokemon[i].name;
          html_str+="<h2>" + pokemon[i].name + "</h2>";
          html_str+="<div class='cat'>"+"Id: "+"Height: "+"Weight: "+"Moves: "+"</div>";
          html_str+="<div class='val'>";
          html_str+="<p>"+ pokemon[i].id + "</p>";
          html_str+="<p>"+ pokemon[i].height + "</p>";
          html_str+="<p>"+ pokemon[i].weight + "</p>";
          for(var j=1; j<pokemon[i].moves.length; j++){html_str+= "<div class='val'>"+"<ul>"+"<li>"+pokemon[i].moves[j]+"</li>"+"</ul>"+"</div>";};
          html_str+="</div>";
          $(pokename).html(html_str);
      } 
   });