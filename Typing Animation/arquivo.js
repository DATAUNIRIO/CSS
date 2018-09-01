                var heading = document.querySelector("h1");
                var data = ["Hi! I'm Udit 😄","I am a web developer!","I ❤️ Mr. Robot!","I ❤️ Game of Thrones!","House Targaryen ❤️","I ❤️ Music","Poetry Lover","Knows Python 🐍"];
                var j = 0;
                var i = 0;
    

            var k;

            function typing(){
                if(heading.innerHTML.length === data[j].length){
                    k = 0;
                    setTimeout(del, 1200);
                }
                if(i<data[j].length){
                    heading.innerHTML += data[j].charAt(i);
                    i++;
                    setTimeout(typing, 50);
                }
                else{
                    j++;
                    i = 0;
                    k = 0;
                    setTimeout(typing, 3000);
                }
                if(j === data.length){
                    j = 0;
                }
            }
                
            // var check = document.getElementById("check");
            // var k = 0;
            function del(){
                if(heading.innerHTML.length == 0){
                    clearTimeout(time);
                }
                else{
                heading.innerHTML = heading.innerHTML.slice(0, heading.innerHTML.length - k);
                k++;
                var time = setTimeout(del, 100);
                }
            }

            typing();