document.getElementById('upload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageSrc = e.target.result;
            const newPost = document.createElement('div');
            newPost.innerHTML = `<img class="img-publicacion" src="${imageSrc}" alt="publicacion">`;
            const publicaciones = document.getElementById('publicaciones');
            publicaciones.insertBefore(newPost, publicaciones.firstChild);
        };
        reader.readAsDataURL(file);
    });
