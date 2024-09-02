function mudarIcon(){
    const icon = document.getElementById('icon');
    const button = icon.parentElement;

    if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        button.classList.add('active');
        

} else {
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular'); // Altera de volta para o ícone de coração
    button.classList.remove('active');
}
}
