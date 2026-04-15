// Hero scroll effect - similar to Nordiska Museet
(function() {
  const heroBackground = document.querySelector('.hero-background');
  const heroContent = document.querySelector('.hero-content');
  
  if (heroBackground && heroContent) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const heroHeight = window.innerHeight;
      
      // Calculate opacity based on scroll position
      const opacity = 1 - (scrolled / heroHeight);
      
      if (scrolled < heroHeight) {
        heroBackground.style.opacity = opacity;
        heroContent.style.opacity = opacity;
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  }
})();

// Location cards functionality
document.addEventListener('DOMContentLoaded', function(){
  const locs=[
    {id:1,name:"Punta Arenas, Chile",lat:-53.1638,lng:-70.9171,color:"#A9CBB7",days:"Partida y regreso",desc:"Puerto base de la expedición. Postprocesamiento de muestras y coordinación logística con UMAG e INACH."},
    {id:2,name:"Pasaje de Drake",lat:-59.0,lng:-65.0,color:"#81B3D2",days:"Días 1–5 y 20–22",desc:"Travesía por las aguas más turbulentas del mundo. Regreso: tormenta con olas de 12 m durante 3 días."},
    {id:3,name:"Isla Rey Jorge / Bahía Fildes",lat:-62.200,lng:-58.964,color:"#E5956B",days:"Días 7–8",desc:"Evacuación de miembro de la expedición checa. Apoyo de traducción entre el Noosfera y las bases chilenas."},
    {id:4,name:"Isla Lieja / Base Primavera",lat:-64.028029,lng:-61.958037,color:"#E5956B",days:"Día 9",desc:"CTD, Red Bongo, sedimento marino a 1,061 m de profundidad."},
    {id:5,name:"Estación Palmer / Palmer Deep",lat:-64.774,lng:-64.054,color:"#4A6A8A",days:"Días 10–11",desc:"CTD y Red Bongo. Sacatestigos de Gravedad a 1,340 m. Primera nevada para los equipos."},
    {id:6,name:"Estación Vernadsky (Isla Galíndez)",lat:-65.2456,lng:-64.2572,color:"#D85A30",days:"Base principal · Días 5–20",desc:"Centro terrestre de operaciones. 30° aniversario. Bandera mexicana izada el 12 de diciembre de 2025."},
    {id:7,name:"Isla Petermann",lat:-65.1713,lng:-64.1436,color:"#D85A30",days:"Días 8–9",desc:"Primer muestreo: tapetes microbianos, agua y sedimentos en 3 lagos. Turnos de 12 horas."},
    {id:8,name:"\"Pequeño Barceló\" (Isla Galíndez)",lat:-65.243,lng:-64.250,color:"#D85A30",days:"Día 11",desc:"Ascenso de 150 m casi vertical sin equipo de escalada hasta lago prístino en la cima."},
    {id:9,name:"Isla 8",lat:-65.225,lng:-64.195,color:"#D85A30",days:"Día 13",desc:"Sobresaturación de oxígeno biogénico identificada."},
    {id:10,name:"Isla Irizar",lat:-65.217,lng:-64.200,color:"#D85A30",days:"Día 17",desc:"4 sitios muestreados: tapetes microbianos (MX), crustáceos, agua y sedimentos (UA)."},
    {id:11,name:"Norte de Isla Adelaide",lat:-67.000,lng:-68.500,color:"#E5956B",days:"Días 12–13",desc:"Puntos de muestreo con multicorer. Clima adverso impidió varios despliegues."},
    {id:12,name:"Estación Rothera (Isla Adelaide)",lat:-67.567,lng:-68.133,color:"#4A6A8A",days:"Días 14–16",desc:"Visita a base británica. Encuentro con ingeniero mexicano. Multicorer a 528 m."},
    {id:13,name:"Bahía Margarita (Círculo Polar Antártico)",lat:-68.000,lng:-68.500,color:"#E5956B",days:"Días 14–18",desc:"Cruce del Círculo Polar. Punto más al sur alcanzado por la expedición."},
    {id:14,name:"Estrecho de Penola",lat:-65.200,lng:-64.220,color:"#81B3D2",days:"Día 19",desc:"Último día de muestreo. CTD, Bongo, Draga, Arrastre y Multicorer a 337 m."}
  ];
  
  const grid = document.getElementById('locCards');
  const toast = document.getElementById('toastMsg');
  
  if (!grid || !toast) {
    console.error('No se encontraron los elementos necesarios: locCards o toastMsg');
    return;
  }
  
  let tt;
  
  function fmt(lat,lng){
    return Math.abs(lat).toFixed(4)+'°S, '+Math.abs(lng).toFixed(4)+'°O';
  }
  
  function dec(lat,lng){
    return lat.toFixed(4)+', '+lng.toFixed(4);
  }
  
  function cp(lat,lng,name){
    var t=dec(lat,lng);
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t).then(function(){
        showT(name,t);
      }).catch(function(err){
        console.error('Error al copiar con clipboard API:', err);
        fallbackCopy(t, name);
      });
    } else {
      fallbackCopy(t, name);
    }
  }
  
  function fallbackCopy(text, name) {
    var a = document.createElement('textarea');
    a.value = text;
    a.style.position = 'fixed';
    a.style.top = '0';
    a.style.left = '0';
    a.style.opacity = '0';
    document.body.appendChild(a);
    a.focus();
    a.select();
    try {
      document.execCommand('copy');
      showT(name, text);
    } catch(err) {
      console.error('Error al copiar:', err);
      alert('No se pudo copiar. Coordenadas: ' + text);
    }
    document.body.removeChild(a);
  }
  
  function showT(n,t){
    toast.textContent='📋 '+n+' — '+t+' copiado';
    toast.classList.add('show');
    clearTimeout(tt);
    tt=setTimeout(function(){
      toast.classList.remove('show');
    },2200);
  }
  
  locs.forEach(function(l){
    var c=document.createElement('div');
    c.className='loc-card-item';
    c.onclick=function(e){
      e.preventDefault();
      cp(l.lat,l.lng,l.name);
    };
    c.style.cursor = 'pointer';
    c.innerHTML='<div class="loc-card-num" style="background:'+l.color+'">'+l.id+'</div>'
      +'<div class="loc-card-body"><h4>'+l.name+'</h4>'
      +'<div class="loc-days">'+l.days+'</div>'
      +'<div class="loc-desc">'+l.desc+'</div>'
      +'<div class="coord-row">'
      +'<svg class="coord-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>'
      +'<span class="coord-text">'+fmt(l.lat,l.lng)+'</span>'
      +'<span class="coord-copy">Copiar</span>'
      +'</div></div>';
    grid.appendChild(c);
  });
  
  console.log('Tarjetas de ubicación cargadas correctamente:', locs.length);
});
