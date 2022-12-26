let products = JSON.parse(localStorage.getItem('invoice_products'))


/*  --------------------------- Getting invoice data -------------------------------- */

if(document.querySelector('.user_data_btn')){
    document.querySelector('.user_data_btn').addEventListener('click', (e)=> {
        url = window.location.href
        url = url.slice(0, url.indexOf('/', 7))
        e.preventDefault()
        data = document.querySelector('.user_data_form').elements
        sender = data['sender'].value
        receiver = data['receiver'].value
        address = data['address'].value
        passport = data['passport'].value
        number = data['number'].value
        date = data['date'].value
        obj = {sender, receiver, receiver, address, passport, number, date}
        redirect = true
        for(let key in obj){
            if (obj[key].trim() == ''){
                data[key].focus();
                redirect = false
                break
            }
        }
        if(redirect){
            json_obj = JSON.stringify(obj)
            if (sender && receiver && address && passport && number && date != ''){
                localStorage.setItem('invoice_data', json_obj)
                window.location.href = `${url}/product_questionnaire/`
            }
        }

    })
}

if(document.querySelector('.user_data_form')){
    data = document.querySelector('.user_data_form').elements
    local_data = JSON.parse(localStorage.getItem('invoice_data'))
     if(local_data.length != 0){
         data['sender'].value = local_data.sender
        data['receiver'].value = local_data.receiver
        data['address'].value = local_data.address
        data['passport'].value = local_data.passport
        data['number'].value = local_data.number
        data['date'].value  = local_data.date
    }

}


/*  --------------------------- Filter product from table -------------------------------- */
let checkProducts = () => {
    if(products.length  < 1){
        document.querySelector('.selected_products_container').classList.add('is-hidden')
    } else {
        document.querySelector('.selected_products_container').classList.remove('is-hidden')
    }


}

if(document.querySelector('.selected_products_container')){
    checkProducts()
}

if(document.querySelector('.find_product_input')){
    let tr = document.getElementById("myTable").getElementsByTagName("tr");
    tr_height = tr[1].scrollHeight * 6
    document.querySelector(".slice_container").style.height = tr_height - 10 + 'px'
    document.querySelector('.find_product_input').addEventListener('keyup', (e)=> {
        let filter = e.target.value.toUpperCase()
        let table = document.getElementById("myTable")

        for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[1];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }
        }
    })
}





/*  --------------------------- Add product to localstorage -------------------------------- */

if(document.querySelector('.add_product')){

    let addBtns = document.querySelectorAll('.add_product')

    for(let btn of addBtns){
        let parent = btn.parentElement.parentElement
        let id = parent.querySelector('#product_id').getAttribute('data-id')
        if(products.find(product => product.id == id)){
            btn.innerHTML = 'Добавлено'
            btn.setAttribute('disabled', '')
        }
        btn.addEventListener('click', (e)=> {
           let target = e.target
           target.innerHTML = 'Добавлено'
           target.setAttribute('disabled', '')
           let parent = target.parentElement.parentElement

           let id = parent.querySelector('#product_id').getAttribute('data-id')
           let name = parent.querySelector('#product_name').innerText

           if(!products.find(product => product.id == id)){
               products.push({id, name, 'price': 0, 'quantity': 1})
               refresh_products()
           }
           localStorage.setItem('invoice_products', JSON.stringify(products))
           checkProducts()
        })
    }



}


/*  --------------------------- Get all products from localstorage  -------------------------- */

let refresh_products = () => {
    let selected_products = document.querySelector('.selected_products_table')
    let tbody = selected_products.querySelector('tbody')
    tbody.innerHTML = ''

    products.forEach(product => {
        let tr = document.createElement('tr')
        tr.id = product.id

        let td_name = document.createElement('td')
        td_name.innerText = product.name

        let td_price = document.createElement('td')
        let input_price = document.createElement('input')
        input_price.className = 'input input_price'
        input_price.setAttribute('type', 'number')

        input_price.value = input_price.value = product.price
        td_price.appendChild(input_price)
        input_price.addEventListener('keyup', (e)=> {
            let target = e.target
            let parent = target.parentElement.parentElement

            let id = parent.id
            let price = Number(target.value)
            product_index = null
            products.forEach((product, index) => {
                if(product.id == id){
                    product_index = index
                }
            })
            products[product_index].price = price
            localStorage.setItem('invoice_products', JSON.stringify(products) )
            let sum = products.reduce((accumulator, object) => {
                return accumulator + (object.quantity * object.price);
            }, 0);

            document.querySelector('.total_price').innerHTML = sum
            localStorage.setItem('total_sum', JSON.stringify(Number(sum)))


        })

        let td_quantity = document.createElement('td')
        let input_quantity = document.createElement('input')
        input_quantity.className = 'input input_quantity'
        input_quantity.setAttribute('type', 'number')

        input_quantity.value = product.quantity
        td_quantity.appendChild(input_quantity)

        input_quantity.addEventListener('keyup', (e)=> {
            let target = e.target
            let parent = target.parentElement.parentElement

            let id = parent.id
            let quantity = Number(target.value)
            product_index = null
            products.forEach((product, index) => {
                if(product.id == id){
                    product_index = index
                }
            })
            products[product_index].quantity = quantity
            localStorage.setItem('invoice_products', JSON.stringify(products) )
            let total_sum = products.reduce((accumulator, object) => {
                return accumulator + (object.quantity * object.price);
            }, 0);

            document.querySelector('.total_price').innerHTML = total_sum


            let total_quantity = products.reduce((accumulator, object) => {
                return accumulator + object.quantity;
            }, 0);

            document.querySelector('.total_quantity').innerHTML = total_quantity

            })

        let td_btn = document.createElement('td')
        btn = document.querySelector('.hidden_btn')
        clone_btn = btn.cloneNode(true)
        clone_btn.classList.remove('is-hidden')
        clone_btn.setAttribute('data-id', product.id)
        td_btn.appendChild(clone_btn)

        tr.appendChild(td_name)
        tr.appendChild(td_price)
        tr.appendChild(td_quantity)
        tr.appendChild(td_btn)

        tbody.appendChild(tr)


    })

    let total_sum = products.reduce((accumulator, object) => {
        return accumulator + (object.quantity * object.price);
    }, 0);

    document.querySelector('.total_price').innerHTML = total_sum

    localStorage.setItem('total_sum', JSON.stringify(Number(total_sum)))

    let total_quantity = products.reduce((accumulator, object) => {
        return accumulator + object.quantity;
    }, 0);

    document.querySelector('.total_quantity').innerHTML = total_quantity
}

if(document.querySelector('.selected_products_table')){
    refresh_products()
}


/*  --------------------------- Remove product to localstorage -------------------------------- */

let removeProduct = (e)=> {

    id = e.getAttribute('data-id')
    products = products.filter(product => product.id !== id)
    localStorage.setItem('invoice_products', JSON.stringify(products))
    refresh_products()

    for(let btn of addBtns = document.querySelectorAll('.add_product')){
        if(id == btn.getAttribute('data-id')){

           btn.removeAttribute('disabled')
           btn.innerHTML = 'Добавить'
        }
    }
    checkProducts()
};


/*  --------------------------- Total sum and quantity of product -------------------------------- */

if(document.querySelector('.total_weight')){
    document.querySelector('.total_weight').addEventListener('keyup', (e)=> {
        let target = e.target
        let total_weight = target.value
        localStorage.setItem('total_weight', JSON.stringify(Number(total_weight)))
    })
    let weight = localStorage.getItem('total_weight')
    document.querySelector('.total_weight').value = JSON.parse(weight)

}


if(document.querySelector('.invoice_number')){
    document.querySelector('.invoice_number').addEventListener('keyup', (e)=> {
        let target = e.target
        let invoice_number = target.value
        localStorage.setItem('invoice_number', JSON.stringify(invoice_number))
    })
    let invoice_number = localStorage.getItem('invoice_number')
    document.querySelector('.invoice_number').value = JSON.parse(invoice_number)

}







