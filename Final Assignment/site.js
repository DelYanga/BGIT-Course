let previewContainer = document.querySelector('.preview-wrap');
let previewBox = previewContainer.querySelectorAll('.product-preview');


document.querySelectorAll('.card').forEach(card =>{
    card.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = card.getAttribute('data-name');
        previewBox.forEach(preview =>{
           let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        })
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times-circle').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'flex';
    };
});