// Minimal slide engine: arrow keys, space, tap zones, swipe. Big-text decks.
(function(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  let i = 0;
  const bar = document.querySelector('.bar');
  const pageno = document.querySelector('.pageno');
  function show(n){
    i = Math.max(0, Math.min(slides.length-1, n));
    slides.forEach((s,k)=>s.classList.toggle('active', k===i));
    if(bar) bar.style.width = ((i)/(slides.length-1)*100) + '%';
    if(pageno) pageno.textContent = (i+1) + ' / ' + slides.length;
    location.hash = i+1;
  }
  function next(){ show(i+1); }
  function prev(){ show(i-1); }
  document.addEventListener('keydown', e=>{
    if(['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)){ e.preventDefault(); next(); }
    else if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){ e.preventDefault(); prev(); }
    else if(e.key==='Home'){ show(0); }
    else if(e.key==='End'){ show(slides.length-1); }
  });
  document.querySelector('.tap.right')?.addEventListener('click', next);
  document.querySelector('.tap.left')?.addEventListener('click', prev);
  let x0=null;
  document.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
  document.addEventListener('touchend',e=>{
    if(x0===null) return;
    const dx=e.changedTouches[0].clientX-x0;
    if(Math.abs(dx)>50){ dx<0?next():prev(); }
    x0=null;
  },{passive:true});
  const start = parseInt(location.hash.replace('#',''))||1;
  show(start-1);
})();
