var again = 1;
function start() {
  if (again % 2) {
    let degrees = 0;
    let i = 0;
    let op = 1;
    show = setInterval(opa, 50);
    function opa() {
      document.getElementById("heart").style.opacity = op / 10;
      op += 1;
      if (op == 10) {
        clearInterval(show);
        set = setInterval(rotate, 10);
        function rotate() {
          document.getElementById(
            "heart"
          ).style.transform = `rotate(${degrees}deg)`;
          degrees++;
          i++;
          if (i == 46) {
            clearInterval(set);
            small = setInterval(left, 10);
            let pos = 1;
            function left() {
              let st1 = document.styleSheets[0].cssRules[1];
              let st2 = document.styleSheets[0].cssRules[2];
              st2.style.right = `${pos / 10}rem`;
              st1.style.bottom = `${pos / 10}rem`;
              pos++;
              if (pos == 50) clearInterval(small);
              {
                again++;
                document.getElementById("butt").innerHTML = "Back";
              }
            }
          }
        }
      }
    }
  } else {
    pos = 50;
    int1 = setInterval(back1, 10);
    function back1() {
      let st1 = document.styleSheets[0].cssRules[1];
      let st2 = document.styleSheets[0].cssRules[2];
      st2.style.right = `${pos / 10}rem`;
      st1.style.bottom = `${pos / 10}rem`;
      pos--;
      if (pos == -1) {
        clearInterval(int1);
        rot = 45;
        rotat = setInterval(back2, 10);
        function back2() {
          document.getElementById(
            "heart"
          ).style.transform = `rotate(${rot}deg)`;
          rot--;
          if (rot == -1) {
            clearInterval(rotat);
            opicity = 10;
            int3 = setInterval(back3, 50);
            function back3() {
              document.getElementById("heart").style.opacity = opicity / 10;
              opicity--;
              if (opicity == -1) {
                again++;
                clearInterval(int3);
                document.getElementById("butt").innerHTML = "Start";
              }
            }
          }
        }
      }
    }
  }
}
