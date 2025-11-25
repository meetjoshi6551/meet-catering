document.getElementById('year').textContent = new Date().getFullYear();

function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
}

function calcPrice(){
  const guests = parseInt(document.getElementById('estimateGuests').value||0,10);
  const per = parseInt(document.getElementById('estimatePackage').value||550,10);
  if(!guests || guests<1){document.getElementById('estimateResult').textContent='Enter valid guests';return}
  const total = guests*per;
  document.getElementById('estimateResult').textContent = `Approx: ₹${total.toLocaleString()}`;
}

function calculateTotal(){
  const guests = parseInt(document.getElementById('calcGuests').value||0,10);
  const per = parseInt(document.getElementById('calcPkg').value||550,10);
  if(!guests || guests<1){document.getElementById('calcResult').textContent='Enter number of guests';return}
  const total = guests*per;
  document.getElementById('calcResult').textContent = `Total: ₹${total.toLocaleString()} (for ${guests} guests)`;
}

function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const guests = document.getElementById('guests2').value;
  const pkg = document.getElementById('packageSelect').value;
  const msg = document.getElementById('message').value;

  const summary = `Thank you ${name}! Your request for ${guests} guests (package ₹${pkg} per plate) has been received. We will contact you via email.`;
  document.getElementById('formMsg').textContent = summary;

  const subject = encodeURIComponent('New catering inquiry — Meet Catering');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nGuests: ${guests}\nPackage: ₹${pkg}\nMessage: ${msg}`);
  const mailto = `mailto:meetjoshi318@gmail.com?subject=${subject}&body=${body}`;
  setTimeout(()=>{
    const openMail = confirm('Open your email client to send this inquiry to the owner? This will open your email app.');
    if(openMail) window.location.href = mailto;
  },300);
}

function openMail(){
  window.location.href = `mailto:meetjoshi318@gmail.com`;
}

function openLightbox(img){
  const lb = document.getElementById('lightbox');
  const lbimg = document.getElementById('lightboxImg');
  lbimg.src = img.src;
  lb.style.display = 'flex';
}
function closeLightbox(){
  const lb = document.getElementById('lightbox');
  lb.style.display = 'none';
  document.getElementById('lightboxImg').src = '';
}

function downloadMenu(){
  alert('To provide a real PDF menu, upload your menu.pdf to the repository and update the Download Menu button link.');
}
