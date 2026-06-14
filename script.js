/* =====================================================================
   FEEL TUNE — script.js
   ===================================================================== */

/* -----------------------------------------------------------------------
   HAMBURGER MENU (all pages)
   --------------------------------------------------------------------- */
(function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose  = document.getElementById('menuClose');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function () {
    this.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  if (menuClose) {
    menuClose.addEventListener('click', function () {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  }

  // Close when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
})();

/* -----------------------------------------------------------------------
   INDEX — Chat form & Registro form
   --------------------------------------------------------------------- */
function sendIndexChat(e) {
  e.preventDefault();
  var input = document.getElementById('chatIndexInput');
  if (!input || !input.value.trim()) return;
  input.value = '';
}

function sendRegistro(e) {
  e.preventDefault();
  var form    = document.getElementById('registroForm');
  var success = document.getElementById('registroSuccess');
  if (!form) return;
  form.querySelectorAll('input').forEach(function(i){ i.style.display='none'; });
  form.querySelector('.btn-enviar').style.display = 'none';
  success.style.display = 'block';
}

/* -----------------------------------------------------------------------
   CHAT PAGE — send message + normas dropdown
   --------------------------------------------------------------------- */
function sendChat(e) {
  e.preventDefault();
  var input    = document.getElementById('chatInput');
  var messages = document.getElementById('chatMessages');
  if (!input || !messages || !input.value.trim()) return;

  var burbuja = document.createElement('div');
  burbuja.className = 'chat-burbuja derecha';
  burbuja.textContent = input.value.trim();
  // Insert before the form (last child of chat-section)
  var form = document.getElementById('chatForm');
  messages.parentNode.insertBefore(burbuja, form);
  input.value = '';
}

function toggleNormas() {
  var btn  = document.getElementById('normasBtn');
  var list = document.getElementById('normasList');
  if (!btn || !list) return;
  btn.classList.toggle('open');
  list.classList.toggle('open');
}

/* -----------------------------------------------------------------------
   PREGUNTAS — FAQ accordion
   --------------------------------------------------------------------- */
function toggleFaq(btn) {
  var item = btn.closest('.faq-item');
  if (!item) return;
  var isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item.open').forEach(function(i) { i.classList.remove('open'); });
  if (!isOpen) item.classList.add('open');
}

/* -----------------------------------------------------------------------
   CANTANTES DATA
   --------------------------------------------------------------------- */
var generos = [
  { nombre: 'Rock Argentino', cantantes: [
    { nombre: 'Intoxicados',  img: 'imagenes/intoxicados.webp' },
    { nombre: 'Turf',         img: 'imagenes/turf.webp' },
    { nombre: 'Intoxicados',  img: 'imagenes/intoxicados.webp' },
    { nombre: 'Turf',         img: 'imagenes/turf.webp' },
  ]},
  { nombre: 'Rock', cantantes: [
    { nombre: 'Nirvana',        img: 'imagenes/nirvana_group.jpg' },
    { nombre: 'ACDC',         img: 'imagenes/acdc.webp' },
    { nombre: 'Nirvana ',        img: 'imagenes/nirvana_group.jpg' },
    { nombre: 'ACDC',         img: 'imagenes/acdc.webp' },
  ]},
  { nombre: 'Pop', cantantes: [
    { nombre: 'Michael Jackson',        img: 'imagenes/michael-jackson.webp' },
    { nombre: 'Miranda',         img: 'imagenes/miranda.webp' },
    { nombre: 'Michael Jackson ',        img: 'imagenes/michael-jackson.webp' },
    { nombre: 'Miranda',         img: 'imagenes/miranda.webp' },
  ]},
  { nombre: 'Reggaetón', cantantes: [
    { nombre: 'Nicky Jam',       img: 'imagenes/nickyjam.jpg' },
    { nombre: 'Daddy Yankee',        img: 'imagenes/daddy_y.webp' },
    { nombre: 'Nicky Jam',       img: 'imagenes/nickyjam.jpg' },
    { nombre: 'Daddy Yankee',        img: 'imagenes/daddy_y.webp' },
  ]},
  { nombre: 'Trap', cantantes: [
    { nombre: 'Milo J',         img:'imagenes/milo.jpg'  },
    { nombre: 'Trueno',       img:'imagenes/trueno.jpg'  },
    { nombre: 'YSY A',        img:'imagenes/ysy.webp' },
    { nombre: 'Duki',         img:'imagenes/duki.webp'  },
  ]},
  { nombre: 'Hip-Hop / Rap', cantantes: [
    { nombre: 'Trueno',       img: 'imagenes/trueno.jpg' },
    { nombre: 'Duki',         img: 'imagenes/duki.webp'},
    { nombre: 'Trueno',       img: 'imagenes/trueno.jpg' },
    { nombre: 'Duki',         img: 'imagenes/duki.webp'},
  ]},
  { nombre: 'Electrónica', cantantes: [
    { nombre: 'DJ Padre',     img: 'imagenes/dj_padre.jpg' },
    { nombre: 'BZRP',        img: 'imagenes/bzrp.jpg' },
    { nombre: 'DJ Padre',     img: 'imagenes/dj_padre.jpg' },
    { nombre: 'BZRP',        img: 'imagenes/bzrp.jpg' },
  ]},
  { nombre: 'Cumbia', cantantes: [
    { nombre: 'Valentino Merlo',         img: 'imagenes/valentino_m.webp' },
    { nombre: 'La T Y La M',  img: 'imagenes/tym.webp' },
    { nombre: 'Valentino Merlo',         img: 'imagenes/valentino_m.webp' },
    { nombre: 'La T Y La M',  img: 'imagenes/tym.webp' },
  ]},
  { nombre: 'Under Argentino', cantantes: [
    { nombre: 'Fro',         img: 'imagenes/fro.jpg' },
    { nombre: 'Little Boogie', img: 'imagenes/little_b.webp' },
    { nombre: 'Fro',         img: 'imagenes/fro.jpg' },
    { nombre: 'Turf',         img: 'imagenes/little_b.webp' },
  ]},
  { nombre: 'Indie', cantantes: [
    { nombre: 'Carlos Zanetti Band',         img: 'imagenes/carlos-zanetti.webp' },
    { nombre: 'Himnóticos',  img: 'imagenes/himnoticos.webp' },
    { nombre: 'Carlos Zanetti Band',         img: 'imagenes/carlos-zanetti.webp' },
    { nombre: 'Himnóticos',  img: 'imagenes/himnoticos.webp' },
  ]},
  { nombre: 'Música Clásica', cantantes: [
    { nombre: 'Beethoven',     img: 'imagenes/beethoven.jpg' },
    { nombre: 'Mozart',       img: 'imagenes/mozart.webp' },
    { nombre: 'Beethoven',     img: 'imagenes/beethoven.jpg' },
    { nombre: 'Mozart',       img: 'imagenes/mozart.webp' },
  ]},
];

var currentGenreIndex = 4; // Trap por defecto

/* -----------------------------------------------------------------------
   CANTANTES PAGE — MOBILE (circular grid)
   --------------------------------------------------------------------- */
function renderMobileCantantesCircular() {
  var nameEl = document.getElementById('genreCurrentName');
  var grid   = document.getElementById('cantantesGridMobile');
  if (!grid) return;

  var genero = generos[currentGenreIndex];
  if (nameEl) nameEl.textContent = genero.nombre;

  grid.innerHTML = '';
  genero.cantantes.forEach(function(c) {
    var a = document.createElement('a');
    a.className = 'cantante-card-mobile';
    a.href = 'info.html?nombre=' + encodeURIComponent(c.nombre) + '&img=' + encodeURIComponent(c.img) + '&genero=' + encodeURIComponent(genero.nombre);
    a.innerHTML = '<img src="' + c.img + '" alt="' + c.nombre + '">' +
                  '<div class="cantante-card-mobile-nombre">' + c.nombre + '</div>';
    grid.appendChild(a);
  });
}

/* -----------------------------------------------------------------------
   CANTANTES PAGE — MOBILE (CD + flechas género + cantante único)
   --------------------------------------------------------------------- */
var currentMobileSingerIndex = 0;

function renderMobileCantantesNuevo() {
  var genero = generos[currentGenreIndex];

  if (currentMobileSingerIndex >= genero.cantantes.length) {
    currentMobileSingerIndex = 0;
  }

  var titleEl  = document.getElementById('mobileGenreTitle');
  var imgEl    = document.getElementById('mobileSingerImg');
  var nameEl   = document.getElementById('mobileSingerName');
  var linkEl   = document.getElementById('mobileSingerLink');

  if (titleEl) titleEl.textContent = genero.nombre;

  var cantante = genero.cantantes[currentMobileSingerIndex];
  if (imgEl)  { imgEl.src = cantante.img; imgEl.alt = cantante.nombre; }
  if (nameEl)   nameEl.textContent = cantante.nombre;
  if (linkEl)   linkEl.href = 'info.html?nombre=' + encodeURIComponent(cantante.nombre) +
                               '&img=' + encodeURIComponent(cantante.img) +
                               '&genero=' + encodeURIComponent(genero.nombre);
}

// Flechas de género mobile
(function() {
  var prevG = document.getElementById('mobileGenrePrev');
  var nextG = document.getElementById('mobileGenreNext');
  if (!prevG || !nextG) return;
  prevG.addEventListener('click', function() {
    currentGenreIndex = (currentGenreIndex - 1 + generos.length) % generos.length;
    currentMobileSingerIndex = 0;
    renderMobileCantantesNuevo();
    renderMobileCantantesCircular();
    renderTabletCantantes();
  });
  nextG.addEventListener('click', function() {
    currentGenreIndex = (currentGenreIndex + 1) % generos.length;
    currentMobileSingerIndex = 0;
    renderMobileCantantesNuevo();
    renderMobileCantantesCircular();
    renderTabletCantantes();
  });
})();

// Flechas de cantante mobile
(function() {
  var prevBtn = document.getElementById('mobilePrev');
  var nextBtn = document.getElementById('mobileNext');
  if (!prevBtn || !nextBtn) return;
  prevBtn.addEventListener('click', function() {
    var total = generos[currentGenreIndex].cantantes.length;
    currentMobileSingerIndex = (currentMobileSingerIndex - 1 + total) % total;
    renderMobileCantantesNuevo();
  });
  nextBtn.addEventListener('click', function() {
    var total = generos[currentGenreIndex].cantantes.length;
    currentMobileSingerIndex = (currentMobileSingerIndex + 1) % total;
    renderMobileCantantesNuevo();
  });
})();

/* -----------------------------------------------------------------------
   CANTANTES PAGE — TABLET / DESKTOP
   --------------------------------------------------------------------- */
function renderTabletCantantes() {
  var nameEl       = document.getElementById('genreCurrentName');
  var nameDesktopEl= document.getElementById('genreCurrentNameDesktop');
  var labelEl      = document.getElementById('tabletGenreLabel');
  var tituloEl     = document.getElementById('tabletTitulo');
  var listEl       = document.getElementById('tabletCantantesList');
  if (!listEl) return;

  var genero = generos[currentGenreIndex];
  if (nameEl)        nameEl.textContent       = genero.nombre;
  if (nameDesktopEl) nameDesktopEl.textContent = genero.nombre;
  if (labelEl)       labelEl.textContent      = 'Género';
  if (tituloEl)      tituloEl.textContent     = 'Cantantes';

  listEl.innerHTML = '';
  genero.cantantes.forEach(function(c) {
    var a = document.createElement('a');
    a.className = 'tablet-cantante-card';
    a.href = 'info.html?nombre=' + encodeURIComponent(c.nombre) + '&img=' + encodeURIComponent(c.img) + '&genero=' + encodeURIComponent(genero.nombre);
    a.innerHTML = '<img src="' + c.img + '" alt="' + c.nombre + '">' +
                  '<span>' + c.nombre + '</span>';
    listEl.appendChild(a);
  });
}

function changeGenreTablet(dir) {
  currentGenreIndex = (currentGenreIndex + dir + generos.length) % generos.length;
  currentMobileSingerIndex = 0;
  renderMobileCantantesNuevo();
  renderMobileCantantesCircular();
  renderTabletCantantes();
}

// Init cantantes page
if (document.querySelector('.pag-cantantes')) {
  renderMobileCantantesNuevo();
  renderMobileCantantesCircular();
  renderTabletCantantes();
}

/* -----------------------------------------------------------------------
   INFO PAGE
   --------------------------------------------------------------------- */
(function() {
  var container = document.getElementById('infoContainer');
  if (!container) return;

  var params  = new URLSearchParams(window.location.search);
  var nombre  = params.get('nombre') || 'Artista';
  var img     = params.get('img')    || 'duki.webp';
  var genero  = params.get('genero') || '';

var bios = {
  'Duki': 'Mauro Ezequiel Lombardo, conocido como Duki, es uno de los máximos referentes del trap argentino. Surgió de las batallas de freestyle y ayudó a popularizar la música urbana argentina a nivel internacional.',

  'Trueno': 'Mateo Palacios Corazzina, conocido como Trueno, es un rapero argentino nacido en La Boca. Destaca por su combinación de rap, freestyle y ritmos urbanos con influencias latinoamericanas.',

  'YSY A': 'Alejo Nahuel Acosta, conocido como YSY A, es uno de los pioneros del trap argentino. Fundador de El Quinto Escalón, se caracteriza por su estilo innovador y su independencia artística.',

  'Milo J': 'Milo J es un cantante y compositor argentino de música urbana que ganó popularidad siendo muy joven. Su estilo combina trap, rap y melodías emocionales que conectan con las nuevas generaciones.',

  'Intoxicados': 'Intoxicados fue una banda de rock argentino fundada por Pity Álvarez. Sus canciones mezclan rock, reggae y punk, convirtiéndose en una de las agrupaciones más populares de los años 2000.',

  'Turf': 'Turf es una banda argentina de rock y pop reconocida por sus melodías pegadizas y su energía en vivo. Desde los años 90 se mantiene como una de las bandas más queridas del país.',

  'La T Y La M': 'La T y La M es un reconocido dúo argentino de cumbia y música urbana, originario de Florencio Varela, Buenos Aires. Formado en 2020 durante la cuarentena.',

  'Valentino Merlo': 'Valentino merloValentino Merlo es un joven cantante argentino de cumbia urbana y cuarteto, nacido el 24 de enero de 2009 en Rosario, Santa Fe.',

  'Nirvana': 'Nirvana fue una banda estadounidense liderada por Kurt Cobain. Considerada uno de los mayores exponentes del grunge, revolucionó la música alternativa durante la década de 1990.',

  'ACDC': 'AC/DC es una legendaria banda australiana de hard rock fundada en 1973. Con éxitos como "Back in Black" y "Highway to Hell", se convirtió en una de las bandas más influyentes de la historia.',

  'Miranda': 'Miranda! es un dúo argentino de pop formado por Ale Sergi y Juliana Gattas. Se destaca por sus canciones pegadizas, su estilo extravagante y su enorme éxito en Latinoamérica.',

  'Michael Jackson': 'Michael Jackson fue un cantante, compositor y bailarín estadounidense conocido como el "Rey del Pop". Su impacto en la música y el entretenimiento lo convirtió en una de las figuras más importantes de todos los tiempos.',

  'Nicky Jam': 'Nicky Jam es un cantante estadounidense de ascendencia puertorriqueña considerado una de las figuras más importantes del reggaetón. Alcanzó fama mundial con éxitos como "El Perdón".',

  'Daddy Yankee': 'Daddy Yankee es un cantante y productor puertorriqueño reconocido como uno de los pioneros del reggaetón. Su éxito "Gasolina" ayudó a popularizar el género en todo el mundo.',

  'DJ Padre': 'DJ Padre es un DJ y productor asociado a la escena electrónica argentina. Su propuesta combina música electrónica con sonidos modernos orientados a la pista de baile.',

  'BZRP': 'Bizarrap, también conocido como BZRP, es un productor argentino reconocido internacionalmente por sus Music Sessions. Ha colaborado con artistas de todo el mundo y es una de las figuras más influyentes de la música urbana actual.',

  'Fro': 'Fro es un artista emergente de la escena urbana argentina. Su música combina influencias del trap y el rap con una identidad propia dentro del movimiento under nacional.',

  'Little Boogie': 'Little Boogie es un artista independiente de la escena under argentina. Su propuesta mezcla sonidos urbanos contemporáneos con una fuerte impronta personal.',

  'Carlos Zanetti Band': 'Carlos Zanetti Band es un proyecto musical independiente que combina influencias del rock alternativo, el indie y la música contemporánea en una propuesta original.',

  'Himnóticos': 'Himnóticos es una banda argentina de rock alternativo e indie. Se caracteriza por melodías modernas, letras cuidadas y una fuerte presencia dentro de la escena independiente.',

  'Beethoven': 'Ludwig van Beethoven fue un compositor y pianista alemán considerado uno de los mayores genios de la música clásica. Sus obras marcaron la transición entre el clasicismo y el romanticismo.',

  'Mozart': 'Wolfgang Amadeus Mozart fue un compositor austríaco y una de las figuras más importantes de la música clásica. Su talento extraordinario le permitió crear algunas de las obras más famosas de la historia.'
};

  var bio = bios[nombre] || 'Artista de la escena musical argentina. Conocido por su estilo único y su capacidad para conectar con el público a través de la música. Explorá su discografía y descubrí por qué es uno de los favoritos de Feel Tune.';

  container.innerHTML =
    '<a href="cantantes.html" style="color:var(--ft-accent);font-size:0.8rem;margin-bottom:8px;">← Volver</a>' +
    '<img class="info-foto" src="' + img + '" alt="' + nombre + '">' +
    '<h1 class="info-nombre">' + nombre + '</h1>' +
    (genero ? '<div class="info-genero">' + genero + '</div>' : '') +
    '<p class="info-texto">' + bio + '</p>';
})();

/* -----------------------------------------------------------------------
   DESCUBRIR — QUIZ
   --------------------------------------------------------------------- */
var questions = [
  {q:"¿Qué buscás cuando escuchás música?",opts:["Energía y potencia","Alegría y diversión","Emoción y sentimiento","Relajación y calma","Creatividad y originalidad","Identidad y mensaje"]},
  {q:"¿Qué tipo de ritmo te gusta más?",opts:["Fuerte e intenso","Bailable y pegadizo","Variable y expresivo","Suave y lento","Experimental","Urbano con flow"]},
  {q:"Cuando escuchás música normalmente...",opts:["Me activo o entreno","Me dan ganas de bailar","Me pongo a pensar","Me relajo","Me inspiro","Me identifico con la letra"]},
  {q:"¿Qué tipo de letras te gustan más?",opts:["Rebeldía y fuerza","Fiesta y diversión","Historias y emociones","Reflexión y vida","Diferentes y creativas","Calle y realidad"]},
  {q:"¿Qué instrumento o sonido te atrae más?",opts:["Guitarra eléctrica potente","Beats digitales","Piano o acústico","Sonidos suaves","Sintetizadores raros","Base urbana (808, trap)"]},
  {q:"¿Qué tipo de ambiente te gusta más?",opts:["Energético y fuerte","Fiesta","Tranquilo pero con emoción","Calmo","Alternativo","Urbano"]},
  {q:"¿Qué hacés mientras escuchás música?",opts:["Me muevo o entreno","Bailo","Pienso o escribo","Descanso","Creo cosas","Camino o estoy en la calle"]},
  {q:"¿Qué emoción preferís en una canción?",opts:["Adrenalina","Felicidad","Tristeza o emoción profunda","Paz","Inspiración","Realidad"]},
  {q:"¿Qué preferís en una canción?",opts:["Potencia","Ritmo pegadizo","Letra profunda","Suavidad","Innovación","Flow"]},
  {q:"¿Cómo te gusta descubrir música nueva?",opts:["Algo fuerte","Lo que está de moda","Recomendaciones con letra buena","Música tranquila","Cosas raras o nuevas","Artistas urbanos"]},
  {q:"¿Qué te engancha más?",opts:["La energía","Lo pegadizo","La emoción","La calma","La originalidad","La calle"]},
  {q:"¿Qué sensación querés que te deje la música?",opts:["Fuerza","Alegría","Emoción","Tranquilidad","Inspiración","Identidad"]},
  {q:"¿Qué tipo de sonido preferís?",opts:["Distorsión y potencia","Comercial y bailable","Acústico o emocional","Suave","Experimental","Urbano moderno"]},
  {q:"¿Qué te interesa más en la música?",opts:["Intensidad","Diversión","Mensaje","Relajación","Creatividad","Realidad social"]},
  {q:"¿Cuál frase te representa más?",opts:["Quiero potencia.","Quiero divertirme.","Quiero sentir.","Quiero paz.","Quiero algo distinto.","Quiero identidad."]}
];

var letters = ["A","B","C","D","E","F"];
var genres = [
  {name:"Rock Argentino",emoji:"🎸",desc:"Sos intenso/a, apasionado/a y la música tiene que moverte por dentro. El rock nacional corre por tus venas.",color:"#ff3a6e",key:"A"},
  {name:"Pop",emoji:"🎤",desc:"Te gusta lo pegadizo, lo alegre y compartir canciones con todos. Vivís el presente al máximo.",color:"#ffb800",key:"B"},
  {name:"Indie / Alternativo",emoji:"🌿",desc:"Sos profundo/a, pensativo/a y buscás canciones que cuenten algo real. La emoción importa más que el ritmo.",color:"#5dcaa5",key:"C"},
  {name:"Música Clásica",emoji:"🎹",desc:"Valorás la calma, la profundidad y los detalles. La música para vos es un espacio de paz interior.",color:"#85b7eb",key:"D"},
  {name:"Electrónica",emoji:"🎛️",desc:"Te atraen los sonidos innovadores, los paisajes sonoros únicos y explorar territorios musicales nuevos.",color:"#b8ff3a",key:"E"},
  {name:"Trap / Hip-Hop",emoji:"🎧",desc:"Te identificás con la calle, la autenticidad y el flow. La música habla de tu realidad y tu identidad.",color:"#afa9ec",key:"F"}
];

var current  = 0;
var selected = null;
var answers  = [];

function buildDots() {
  var d = document.getElementById('progressDots');
  if (!d) return;
  d.innerHTML = '';
  for (var i = 0; i < 15; i++) {
    var dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.id = 'dot' + i;
    d.appendChild(dot);
  }
}

function updateStats() {
  var done = answers.length;
  var dEl = document.getElementById('statDone');
  var lEl = document.getElementById('statLeft');
  var pEl = document.getElementById('statPct');
  var pfEl = document.getElementById('progressBarFill');
  if (dEl) dEl.textContent = done;
  if (lEl) lEl.textContent = 15 - done;
  if (pEl) pEl.textContent = Math.round(done / 15 * 100) + '%';
  if (pfEl) pfEl.style.width = (done / 15 * 100) + '%';

  var ul = document.getElementById('upcomingList');
  if (!ul) return;
  ul.innerHTML = '';
  var remaining = questions.slice(current + 1, current + 4);
  remaining.forEach(function(q, i) {
    var item = document.createElement('div');
    item.className = 'upcoming-item';
    item.innerHTML = '<span class="upcoming-num">' + (current + i + 2) + '/15</span>' +
                     '<span class="upcoming-q">' + q.q + '</span>';
    ul.appendChild(item);
  });
}

function renderQuestion() {
  var q = questions[current];
  var qc = document.getElementById('qCounter');
  var qt = document.getElementById('qText');
  var c  = document.getElementById('optionsContainer');
  var cb = document.getElementById('confirmBtn');
  if (!q || !c) return;
  if (qc) qc.textContent = 'Pregunta ' + (current + 1) + ' de 15';
  if (qt) qt.textContent = q.q;
  c.innerHTML = '';
  selected = null;
  if (cb) cb.classList.remove('active');
  q.opts.forEach(function(opt, i) {
    var btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = '<span class="opt-letter">' + letters[i] + '</span><span>' + opt + '</span>';
    btn.addEventListener('click', function() { selectOption(i, btn); });
    c.appendChild(btn);
  });
  document.querySelectorAll('.dot').forEach(function(d, i) {
    d.className = 'dot' + (i < answers.length ? ' done' : (i === current ? ' active' : ''));
  });
  updateStats();
}

function selectOption(idx, btn) {
  document.querySelectorAll('.opt-btn').forEach(function(b) { b.classList.remove('selected'); });
  btn.classList.add('selected');
  selected = idx;
  var cb = document.getElementById('confirmBtn');
  if (cb) cb.classList.add('active');
}

function confirmAnswer() {
  if (selected === null) return;
  answers.push(selected);
  document.querySelectorAll('.opt-btn').forEach(function(b, i) {
    if (i === selected) b.classList.add('correct');
  });
  var cb = document.getElementById('confirmBtn');
  if (cb) cb.classList.remove('active');
  setTimeout(function() {
    current++;
    if (current >= 15) { showResults(); }
    else { renderQuestion(); }
  }, 600);
}

function showResults() {
  var qb = document.getElementById('quizBody');
  var rs = document.getElementById('resultScreen');
  var pf = document.getElementById('progressBarFill');
  if (qb) qb.style.display = 'none';
  if (pf) pf.style.width = '100%';
  document.querySelectorAll('.dot').forEach(function(d) { d.className = 'dot done'; });

  var counts = {A:0,B:0,C:0,D:0,E:0,F:0};
  answers.forEach(function(a) { counts[letters[a]]++; });
  var top   = Object.entries(counts).sort(function(x,y){ return y[1]-x[1]; })[0][0];
  var genre = genres.find(function(g){ return g.key === top; }) || genres[0];

  if (rs) rs.classList.add('show');
  var reEl = document.getElementById('resultEmoji');
  var rgEl = document.getElementById('resultGenre');
  var rdEl = document.getElementById('resultDesc');
  if (reEl) reEl.textContent = genre.emoji;
  if (rgEl) rgEl.textContent = genre.name;
  if (rdEl) rdEl.textContent = genre.desc;

  var bd = document.getElementById('resultBreakdown');
  if (!bd) return;
  bd.innerHTML = '';
  var barColors = ['#ff3a6e','#ffb800','#5dcaa5','#85b7eb','#b8ff3a','#afa9ec'];
  Object.entries(counts).forEach(function(entry, i) {
    var k = entry[0]; var v = entry[1];
    var pct = Math.round(v / 15 * 100);
    var row = document.createElement('div');
    row.className = 'result-bar-row';
    row.innerHTML = '<div class="result-bar-label">' + k + '</div>' +
      '<div class="result-bar-track"><div class="result-bar-fill" style="width:0%;background:' + barColors[i] + ';" data-w="' + pct + '%"></div></div>' +
      '<div style="font-size:12px;color:var(--ft-muted);min-width:28px">' + v + '</div>';
    bd.appendChild(row);
  });
  setTimeout(function() {
    document.querySelectorAll('.result-bar-fill').forEach(function(b) { b.style.width = b.dataset.w; });
  }, 100);
}

function restartQuiz() {
  current = 0; answers = []; selected = null;
  var qb = document.getElementById('quizBody');
  var rs = document.getElementById('resultScreen');
  if (qb) qb.style.display = 'block';
  if (rs) rs.classList.remove('show');
  buildDots();
  renderQuestion();
}

// Init quiz only on descubrir page
if (document.getElementById('quizBody')) {
  buildDots();
  renderQuestion();
}
