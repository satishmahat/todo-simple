let inputs = document.getElementById("inp");
    let text = document.querySelector(".text");
    let check = document.getElementById("check")

    function Add(){
        if(inputs.value==""){
            alert("NO INPUTS");
        }
        else{
            let newElement = document.createElement("ul");//ul tag banayo js ko help bata
            newElement.innerHTML = "<a id='check' class='bx bx-check-square'></a>" + "<span id='sp'>" + inputs.value + "</span>" + "<i class='bx bx-trash'></i>";//element ko inner html bhitra hamley input ko value halyo//dekhawonu paryo ni haina aba
            text.appendChild(newElement);
            inputs.value="";
            newElement.querySelector("i").addEventListener("click",remove);
            newElement.querySelector("a").addEventListener("click",ch);

            function remove(){
                newElement.remove();
            }
            function ch(){
                newElement.innerHTML="<del>"+newElement.textContent+"</del>";
                //the textcontent property in JS is used to access or modify the text content of an HTML element
                setInterval(function(){
                    newElement.remove();
                },10000);
            }
        }
    
    }