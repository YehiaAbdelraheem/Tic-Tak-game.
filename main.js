
let title = document.querySelector('.Title');

let turn = 'x'

function winner(){
    let squares = [];
    for(let i = 1;i<10;i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    if(squares[1] == squares[2] && squares[2] == squares[3]  && squares[1] != '') {
        title.innerHTML = squares[1] + ' is winner'
        document.getElementById('item' + 1).style.backgroundColor = 'black';
        document.getElementById('item' + 2).style.backgroundColor = 'black';
        document.getElementById('item' + 3).style.backgroundColor = 'black';
        

        swal("Play another game", "Nice Tour" ,"success",{
            buttons: {
              catch: {
                text: "Play another game",
                value: "Play another game",
              },
              defeat: true,
            },
          })
          .then((value) => {
            switch (value) {
                
              case "Play another game":
                setInterval(function(){title.innerHTML +='.'},1000)
                setTimeout(function(){location.reload()},4000)
                break;
           
              case "defeat":
                swal("Gotcha!", "Have a nice Trip", "success");
                setInterval(function(){title.innerHTML +='.'},1000)
                setTimeout(function(){location.reload()},4000)
                break;
           
              default:
                swal("See You later!!");
                setInterval(function(){title.innerHTML +='.'},1000)
                setTimeout(function(){location.reload()},4000)
            }
          });
       
    }

    else if(squares[4] == squares[5] && squares[5] == squares[6]  && squares[4] != '') {
        title.innerHTML = squares[4] + ' is winner'
        document.getElementById('item' + 4).style.backgroundColor = 'black'
        document.getElementById('item' + 5).style.backgroundColor = 'black'
        document.getElementById('item' + 6).style.backgroundColor = 'black'
        swal("Play another game", "Nice Tour" ,"success",{
          buttons: {
            catch: {
              text: "Play another game",
              value: "Play another game",
            },
            defeat: true,
          },
        })
        .then((value) => {
          switch (value) {
              
            case "Play another game":
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            case "defeat":
              swal("Gotcha!", "Have a nice Trip", "success");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            default:
              swal("See You later!!");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
          }
        });       

}

    else if(squares[7] == squares[8] && squares[8] == squares[9]  && squares[7] != '') {
        title.innerHTML = squares[7] + ' is winner'
        document.getElementById('item' + 7).style.backgroundColor = 'black'
        document.getElementById('item' + 8).style.backgroundColor = 'black'
        document.getElementById('item' + 9).style.backgroundColor = 'black'
        swal("Play another game", "Nice Tour" ,"success",{
          buttons: {
            catch: {
              text: "Play another game",
              value: "Play another game",
            },
            defeat: true,
          },
        })
        .then((value) => {
          switch (value) {
              
            case "Play another game":
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            case "defeat":
              swal("Gotcha!", "Have a nice Trip", "success");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            default:
              swal("See You later!!");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
          }
        });
    }



    else if(squares[1] == squares[4] && squares[4] == squares[7]  && squares[1] != '') {
        title.innerHTML = squares[1] + ' is winner'
        document.getElementById('item' + 1).style.backgroundColor = 'black'
        document.getElementById('item' + 4).style.backgroundColor = 'black'
        document.getElementById('item' + 7).style.backgroundColor = 'black'
        swal("Play another game", "Nice Tour" ,"success",{
          buttons: {
            catch: {
              text: "Play another game",
              value: "Play another game",
            },
            defeat: true,
          },
        })
        .then((value) => {
          switch (value) {
              
            case "Play another game":
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            case "defeat":
              swal("Gotcha!", "Have a nice Trip", "success");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            default:
              swal("See You later!!");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
          }
        });
    }

    else if(squares[2] == squares[5] && squares[5] == squares[8]  && squares[2] != '') {
        title.innerHTML = squares[2] + ' is winner'
        document.getElementById('item' + 2).style.backgroundColor = 'black'
        document.getElementById('item' + 5).style.backgroundColor = 'black'
        document.getElementById('item' + 8).style.backgroundColor = 'black'
        swal("Play another game", "Nice Tour" ,"success",{
          buttons: {
            catch: {
              text: "Play another game",
              value: "Play another game",
            },
            defeat: true,
          },
        })
        .then((value) => {
          switch (value) {
              
            case "Play another game":
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            case "defeat":
              swal("Gotcha!", "Have a nice Trip", "success");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            default:
              swal("See You later!!");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
          }
        });
    }

    else if(squares[3] == squares[6] && squares[6] == squares[9]  && squares[3] != '') {
        title.innerHTML = squares[3] + ' is winner'
        document.getElementById('item' + 3).style.backgroundColor = 'black'
        document.getElementById('item' + 6).style.backgroundColor = 'black'
        document.getElementById('item' + 9).style.backgroundColor = 'black'
        swal("Play another game", "Nice Tour" ,"success",{
          buttons: {
            catch: {
              text: "Play another game",
              value: "Play another game",
            },
            defeat: true,
          },
        })
        .then((value) => {
          switch (value) {
              
            case "Play another game":
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            case "defeat":
              swal("Gotcha!", "Have a nice Trip", "success");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            default:
              swal("See You later!!");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
          }
        });
    }


    else if(squares[1] == squares[5] && squares[5] == squares[9]  && squares[1] != '') {
        title.innerHTML = squares[1] + ' is winner'
        document.getElementById('item' + 1).style.backgroundColor = 'black'
        document.getElementById('item' + 5).style.backgroundColor = 'black'
        document.getElementById('item' + 9).style.backgroundColor = 'black'
        swal("Play another game", "Nice Tour" ,"success",{
          buttons: {
            catch: {
              text: "Play another game",
              value: "Play another game",
            },
            defeat: true,
          },
        })
        .then((value) => {
          switch (value) {
              
            case "Play another game":
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            case "defeat":
              swal("Gotcha!", "Have a nice Trip", "success");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            default:
              swal("See You later!!");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
          }
        });
    }

    else if(squares[3] == squares[5] && squares[5] == squares[7]  && squares[3] != '') {
        title.innerHTML = squares[3] + ' is winner'
        document.getElementById('item' + 3).style.backgroundColor = 'black'
        document.getElementById('item' + 5).style.backgroundColor = 'black'
        document.getElementById('item' + 7).style.backgroundColor = 'black'
        swal("Play another game", "Nice Tour" ,"success",{
          buttons: {
            catch: {
              text: "Play another game",
              value: "Play another game",
            },
            defeat: true,
          },
        })
        .then((value) => {
          switch (value) {
              
            case "Play another game":
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            case "defeat":
              swal("oops", "Have a nice Trip", "oops");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
              break;
         
            default:
              swal("See You later!!");
              setInterval(function(){title.innerHTML +='.'},1000)
              setTimeout(function(){location.reload()},4000)
          }
        });
    }
}


function game(id) {
    let element = document.getElementById(id);
    if(turn == 'x' && element.innerHTML == '') {
        element.innerHTML = 'x'
        title.innerHTML ='O'
        turn = 'o'
    }
    else if(turn == 'o' && element.innerHTML == '') {
        element.innerHTML = 'o'
        title.innerHTML ='X'
        turn = 'x'
    }
    winner();
}



