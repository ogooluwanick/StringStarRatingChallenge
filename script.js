


function StringChallenge(str){
        let rating =Number(str)
        let result=[]
        if (rating)  {
                result.push (rating>=1 ? "full" : rating>=.5 ? "half":"empty") 
                result.push (rating>=2 ? "full" : rating>=1.5 ? "half":"empty") 
                result.push (rating>=3 ? "full" : rating>=2.5 ? "half":"empty") 
                result.push (rating>=4 ? "full" : rating>=3.5 ? "half":"empty") 
                result.push (rating>=5 ? "full" : rating>=4.5 ? "half":"empty") 
        }
        else{
                return "Invalid Input"
        }

        return result;
}
let starArr=StringChallenge("3.")
console.log( StringChallenge("4.7").toString());

function createDOM(){
        var ratebox=document.getElementById("ratebox");
        var child = document.createElement("img");
        child.alt="star";
        child.id="star";

        ratebox.append(child,child.cloneNode(true),child.cloneNode(true),child.cloneNode(true),child.cloneNode(true))

}
createDOM()



function assignImages(){

        var children = ratebox.children;
        for(var i=0; i<children.length; i++){
            var child = children[i];
            var value = starArr[i];

            if(value=="empty"){
                child.src = "assets/empty.png";
                child.className="empty"

            }
            else if(value=="half"){
                child.src = "assets/half.png";
            }
            else if(value=="full"){
                child.src = "assets/star.png"
            }
            ;
        }
}

assignImages()