// ML Bespoke Interiors — Quantweb 2026
(function(){
  // mobile drawer
  var back=document.querySelector('.mm-back'), menu=document.querySelector('.mobile-menu');
  function open(){menu&&menu.classList.add('open');back&&back.classList.add('open')}
  function close(){menu&&menu.classList.remove('open');back&&back.classList.remove('open')}
  document.querySelectorAll('[data-mm-open]').forEach(function(b){b.addEventListener('click',open)});
  document.querySelectorAll('[data-mm-close]').forEach(function(b){b.addEventListener('click',close)});

  // reveal on scroll
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('[data-reveal]').forEach(function(el){io.observe(el)});

  // lightbox
  var box=document.getElementById('lb');
  if(box){
    var imgEl=box.querySelector('img'), items=[].slice.call(document.querySelectorAll('[data-lb]')), i=0;
    function show(n){i=(n+items.length)%items.length; imgEl.src=items[i].getAttribute('data-lb');}
    items.forEach(function(a,n){a.addEventListener('click',function(e){e.preventDefault();show(n);box.classList.add('open')})});
    box.querySelector('.x').addEventListener('click',function(){box.classList.remove('open')});
    box.querySelector('.next').addEventListener('click',function(e){e.stopPropagation();show(i+1)});
    box.querySelector('.prev').addEventListener('click',function(e){e.stopPropagation();show(i-1)});
    box.addEventListener('click',function(e){if(e.target===box)box.classList.remove('open')});
    document.addEventListener('keydown',function(e){if(!box.classList.contains('open'))return;if(e.key==='Escape')box.classList.remove('open');if(e.key==='ArrowRight')show(i+1);if(e.key==='ArrowLeft')show(i-1)});
  }
})();
