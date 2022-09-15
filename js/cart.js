const button = document.querySelector('.dropbtn')

button.addEventListener('click', function(){
    // alert('Hello')
    const list = document.querySelector('.dropdown-content1')
    if(list.style.display == 'none'){
        list.style.display = 'block'
    } else {list.style.display = 'none' }

})


