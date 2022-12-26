

if (localStorage.getItem("invoice_data") === null ) {
  localStorage.setItem('invoice_data', '');
}

if (localStorage.getItem("invoice_products") === null ) {
  localStorage.setItem('invoice_products', '[]');
}


if (localStorage.getItem("total_weight") === null ) {
  localStorage.setItem('total_weight', '[]');
}


if (localStorage.getItem("total_sum") === null ) {
  localStorage.setItem('total_sum', '[]');
}


if (localStorage.getItem("invoice_number") === null ) {
  localStorage.setItem('invoice_number', '[]');
}




if(document.querySelector('.clear_button')){
    document.querySelector('.clear_button').addEventListener('click', ()=> {
        let text = 'Вы уверены, что хотите стереть данные?'
        if(confirm(text)){
            localStorage.setItem('invoice_data', '[]')
            localStorage.setItem('invoice_products', '[]')
            localStorage.setItem('total_weight', '[]')
            localStorage.setItem('invoice_products', '[]'),

        }
    })
}


