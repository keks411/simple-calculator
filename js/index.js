var outP = document.getElementById("tBox");
var opvar = "+";
var arr = [];
var parr = [];
parr[0] = 1;
var x = 0;
var result = 0;
var tover;
var ope2 = "";
var mop = 0;
var cache = 0;

function nbtn(num) {
  if (outP.value.length > 12) {
    outP.value = "";
    alert("Sorry but that is too much for me");
  }
  switch (num) {
    case 0:
      if (outP.value === "") {
        outP.value = N0;
      } else {
        outP.value = outP.value + 0;
      }
      break;
    case 1:
      if (outP.value === "") {
        outP.value = 1;
      } else {
        outP.value = outP.value + 1;
      }
      break;
    case 2:
      if (outP.value === "") {
        outP.value = 2;
      } else {
        outP.value = outP.value + 2;
      }
      break;
    case 3:
      if (outP.value === "") {
        outP.value = 3;
      } else {
        outP.value = outP.value + 3;
      }
      break;
    case 4:
      if (outP.value === "") {
        outP.value = 4;
      } else {
        outP.value = outP.value + 4;
      }
      break;
    case 5:
      if (outP.value === "") {
        outP.value = 5;
      } else {
        outP.value = outP.value + 5;
      }
      break;
    case 6:
      if (outP.value === "") {
        outP.value = 6;
      } else {
        outP.value = outP.value + 6;
      }
      break;
    case 7:
      if (outP.value === "") {
        outP.value = 7;
      } else {
        outP.value = outP.value + 7;
      }
      break;
    case 8:
      if (outP.value === "") {
        outP.value = 8;
      } else {
        outP.value = outP.value + 8;
      }
      break;
    case 9:
      if (outP.value === "") {
        outP.value = 9;
      } else {
        outP.value = outP.value + 9;
      }
      break;
  }
}

function fclear() {
  outP.value = "";
  x = 0;
  arr = [];
  parr = [];
  parr[0] = 1;
  result = 0;
  ope2 = "";
  mop = 0;
  cache = 0;
}

function nswitch() {
  if (outP.value === "") {
    outP.value = "-";
  } else {
    outP.value = outP.value * -1;
  }
}

function fplus() {
  if (ope2 === "*" || ope2 === "/") {
    fequals();
    parr[x + 1] = 1;
    arr[x] = outP.value;
    x = x + 1;
    outP.value = "";
  } else {
    parr[x + 1] = 1;
    arr[x] = outP.value;
    x = x + 1;
    outP.value = "";
  }

}

function fminus() {
  if (ope2 === "*" || ope2 === "/") {
    fequals();
    parr[x + 1] = -1;
    arr[x] = outP.value;
    x = x + 1;
    outP.value = "";
  } else {
    parr[x + 1] = -1;
    arr[x] = outP.value;
    x = x + 1;
    outP.value = "";
  }
}

function fmulti() {
  fequals();
  mop = outP.value;
  ope2 = "*";
  outP.value = "";
}

function fdiv() {
  fequals();
  mop = outP.value;
  ope2 = "/";
  outP.value = "";
}

function nth() {
  if (outP.value === 0 || outP.value === "") {
    // do nothing
    alert("nothing");
  } else {
    outP.value = outP.value + ".";
  }
}

function fequals() {
  switch (ope2) {
    case "*":
      cache = outP.value;
      outP.value = mop * cache;
      ope2 = "";
      break;

    case "/":
      cache = outP.value;
      outP.value = (mop / cache);
      ope2 = "";
      break;

    case "":
      arr[x] = outP.value;
      for (i = 0; i < arr.length; i++) {
        result = result + (arr[i] * parr[i]);
      }
      tover = result;
      fclear();
      outP.value = tover;
  }
}