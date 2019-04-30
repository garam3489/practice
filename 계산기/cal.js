       $("#C").click(function(){
           console.log("a");
             $("#input").text("")
            $("#output").text("0")
        });
        
        $(".value").click(function(event){
            $("#input").append($(event.target).attr("id"));
        });
        
        $(".oper").click(function(event){
            if($(event.target).html()=="─")
                $("#input").append(" - ");
            else
                $("#input").append(" "+$(event.target.firstChild).text()+" ");
        });
        
        $("#equal").click(function(){
            var result=0.0;
            var temp;
            var par=$("#input").text().trim().split(" ");
            var par_num=par.length;
            for(i=0;i<par_num;)
                {
                    if(par[par_num-i-2]=="＋")
                        result+=parseFloat(par[par_num-i-1]);
                    else if(par[par_num-i-2]=="-")
                        result-=parseFloat(par[par_num-i-1]);
                    else if(par[par_num-i-2]=="x")
                        par[par_num-i-3]=parseFloat(par[par_num-i-3])*parseFloat(par[par_num-i-1]);
                    else if(par[par_num-i-2]=="÷")
                        par[par_num-i-3]=parseFloat(par[par_num-i-3])/parseFloat(par[par_num-i-1]);
                    i+=2;
                }
            result+=parseFloat(par[0]);
            if(!isNaN(result))
                $("#output").text(result);
            else
                $("#output").text("Invalid input");
        });