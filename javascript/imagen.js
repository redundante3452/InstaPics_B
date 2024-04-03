const defaultImage = 'images/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png';
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

file.addEventListener('change', (e) => {
    if(e.target.files[0] ){
      img.src = 'https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=2000&h=1126&crop=1';  
    }else{
        img.src = defaultImage;
    }
});
// Path: InstaPics_B/javascript/imagen.js
