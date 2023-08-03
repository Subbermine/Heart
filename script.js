var again = 0;
var degrees = 0;
var i = 0;
function start() {
  if (again === 0) {
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
              again++;
            }
          }
        }
      }
    }
  }
}
