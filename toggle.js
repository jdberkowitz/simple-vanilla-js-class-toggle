function toggleButton(target){  
    var toggleButton = document.getElementsByClassName(target);  
    toggleButton[0].classList.toggle('filter-visible');
    toggleButton[0].classList.toggle('filter-hidden');  
}