const defaultImage = '/InstaPics_B/images/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png';
const file = document.getElementById('foto');
const img = document.getElementById('img');
file.addEventListener('change', (e) => {
    if(e.target.files[0] ){
      img.src = 'https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=2000&h=1126&crop=1';  
    }else{
        img.src = defaultImage;
    }
});
// Path: InstaPics_B/javascript/imagen.js