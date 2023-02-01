const UIcontroller = (function(){
  //Privete vars and funcs
  let text = "change the h1."
  const textChange = function(){
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  //Return public funcs and vars
  return {
    callTectChange: function(){
      textChange();
      console.log(text);
    }
  }
})();
UIcontroller.callTectChange();