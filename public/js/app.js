document.getElementById('foo').addEventListener('click', function(){
  alert('Hello FooBar2');
});
document.getElementById('bar').addEventListener('click', function(){
  var name = prompt('Tell Me, What\'s your name?');
  alert('Goodbye ' + name);
});