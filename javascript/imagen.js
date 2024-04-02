const defaultImage = '/InstaPics_B/images/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png';
const file = document.getElementById('foto');
const img = document.getElementById('img');

// Cargar la imagen desde localStorage si existe
if(localStorage.getItem('imgSrc')) {
  img.src = localStorage.getItem('imgSrc');
} else {
  img.src = defaultImage;
}

file.addEventListener('change', (e) => {
  if(e.target.files[0] ){
    const reader = new FileReader();
    reader.onload = function(e){
      img.src = e.target.result;
      // Guardar la imagen en localStorage
      localStorage.setItem('imgSrc', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  } else {
    img.src = defaultImage;
    localStorage.setItem('imgSrc', defaultImage);
  }
});
