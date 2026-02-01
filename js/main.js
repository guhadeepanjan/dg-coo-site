(function(){
  const y = document.getElementById('y');
  if(y) y.textContent = new Date().getFullYear();

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.links a').forEach(a=>{
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
})();
