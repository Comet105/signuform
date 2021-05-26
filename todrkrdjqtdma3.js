function dksl()
{
  var a = document.querySelector('input[name="idea"]');
  var b = document.querySelector('input[name="password1"]');
  var c = document.querySelector('input[name="password2"]');
  var d = document.querySelector('input[name="birth"]');
  var e = document.querySelector('input[name="gender"]:checked');
  if(b.value !== c.value)
  {
    alert("패스워드가 일치하지 않습니다.")
  }else{
    console.log(a.value);


    console.log(b.value);


    console.log(c.value);


    console.log(d.value);


    console.log(e.value);
    return false;
  }
}
