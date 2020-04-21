
var ClassNumber=localStorage.getItem("ClassNumber");
var ClassWeak=localStorage.getItem("ClassWeak");

function InsertText()
{
    var TotalClass = ClassNumber * ClassWeak;

    var cnt = 0,flg=true,flgfl=true;

    var colstart = Math.floor((45 - TotalClass)/5);

    var colrna = 1 + Math.floor(Math.random()*colstart);


    if(TotalClass<41){
        var rowrna = 1 + Math.floor(Math.random()*5);
    }else{
        var rowrna = 1;
    }
    




    for(var i=colrna;i<=9;i++){
        var TF = true;
        for((flgfl == true) ?  j=rowrna : j=1;j<=5;j++){
            flgfl = false ;
            var tc = "t" ;
            var nr = j;
            var nc = i;
            var temp = j;
            
            ID = tc + nr + nc;

            if(cnt % ClassNumber==0){
                if(flg == true){
                    flg = false;
                }else{
                    flg = true;
                }
            }


            if(flg==false || ClassNumber < 3){
                var mod =cnt % ClassNumber;
            }

            else{
                var mod =ClassNumber - ((cnt % ClassNumber)+1);
            }
            
            cnt++;

            if(cnt > TotalClass){
                break;
            }

            document.getElementById(ID).innerHTML = "Sub"+(mod+1);

        }
         
    }

}

