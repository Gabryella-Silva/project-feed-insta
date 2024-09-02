let _isLiked = false;

function like(){

    const button = document.getElementById('btn-like')
    const icon = button?.children[0]
    
    if(!icon) return;
    
    //remove o coração vazio e coloca o coração preenchido 
    if (_isLiked) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        button.classList.add('active');
        

        //remove o coração preenchido e coloca o vazio
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular'); 
        button.classList.remove('active');
    }

    _isLiked = !_isLiked //inverte o valor de "isLiked"
}
