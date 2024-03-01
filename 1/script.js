let hora = minuto = segundo = milisegundo = "0" + 0, startTimer;

const startButton = document.querySelector(".start"),
    stopButton = document.querySelector(".stop"),
    resetButton = document.querySelector(".reset");

    startButton.addEventListener("click", start);
    stopButton.addEventListener("click", stop);
    resetButton.addEventListener("click", reset);

    function start(){
        startButton.classList.add("active");
        stopButton.classList.remove("stopActive");

        startTimer = setInterval(() => {
            milisegundo++;
            milisegundo = milisegundo < 10 ? "0" + milisegundo : milisegundo;
            
            if ( milisegundo == 100 ){
                segundo++;
                segundo = segundo < 10 ? "0" + segundo : segundo;
                milisegundo = "0" + 0;
            }

            if (segundo == 60 ){
                minuto++;
                minuto = minuto < 10 ? "0" + minuto : minuto;
                segundo = "0" + 0;
            }

            if ( minuto == 60 ){
                hora++;
                hora = hora < 10 ? "0" + hora : hora;
            }

            putValue();

        }, 10);
    }

    function stop(){
        startButton.classList.remove("active");
        stopButton.classList.remove("stopActive");  
        clearInterval(startTimer);
    }

    function reset(){
        startButton.classList.remove("active");
        stopButton.classList.remove("stopActive");
        clearInterval(startTimer);
        hora = minuto = segundo = milisegundo = "0" + 0;
        putValue();
    }

    function putValue(){
        document.querySelector(".hora").innerHTML = hora;
        document.querySelector(".minuto").innerHTML = minuto;
        document.querySelector(".segundo").innerHTML = segundo;
        document.querySelector(".milisegundo").innerHTML = milisegundo;
    }

