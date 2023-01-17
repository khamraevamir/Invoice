if(document.querySelector('.data')){

    let invoice_data = JSON.parse(localStorage.getItem('invoice_data'))

    let receiver = document.querySelector('.receiver_name')
    let sender = document.querySelector('.sender_name')
    let address = document.querySelector('.address')
    let passport = document.querySelector('.passport')
    let number = document.querySelector('.number')
    receiver.innerText = invoice_data.receiver
    sender.innerText = invoice_data.sender
    address.innerText = invoice_data.address
    passport.innerText = invoice_data.passport
    number.innerText = invoice_data.number


    let invoice_products = JSON.parse(localStorage.getItem('invoice_products'))

    let product_table = document.querySelector('.product_table')

    let counter = 1
    for(let index=0; index < invoice_products.length; index++){
        let product_tr = document.createElement('tr')

        let product_counter_td = document.createElement('td')
        product_counter_td.className = 'py-1  text-center '
        product_counter_td.innerText = counter

        let product_name_td = document.createElement('td')
        product_name_td.className = 'product_name_pfd py-1 px-3'
        product_name_td.innerText = invoice_products[index].name

        let product_quantity_td = document.createElement('td')
        product_quantity_td.className = 'py-1 text-center'
        product_quantity_td.innerText = invoice_products[index].quantity

        /*  empty ceils */
        let product_netto_td = document.createElement('td')
        product_netto_td.className = 'py-1 '

        let product_brutto_td = document.createElement('td')
        product_brutto_td.className = 'py-1 '

        let product_price_td = document.createElement('td')
        product_price_td.className = 'py-1 text-center'
        product_price_td.innerText = invoice_products[index].price

        let product_last_td = document.createElement('td')
        product_last_td.className = 'py-1 '






        product_tr.appendChild(product_counter_td)
        product_tr.appendChild(product_name_td)
        product_tr.appendChild(product_quantity_td)
        product_tr.appendChild(product_netto_td)
        product_tr.appendChild(product_brutto_td)
        product_tr.appendChild(product_price_td)
        product_tr.appendChild(product_last_td)




        product_table.appendChild(product_tr)

        counter += 1

    }


    let last_tr = document.createElement('tr')

    let product_total_weight_th = document.createElement('th')
    product_total_weight_th.className = 'py-3 text-center'
    product_total_weight_th.setAttribute('colspan', '2 ')

    product_total_weight_th.innerText = `TOTAL WEIGHT/ИТОГО ВЕСА`

    let product_weight_th = document.createElement('th')
    product_weight_th.className = 'py-1 text-center'
    product_weight_th.setAttribute('colspan', '5 ')
    product_weight_th.innerText = `${JSON.parse(localStorage.getItem('total_weight'))} kg`


//    --------------

    let last_tr2 = document.createElement('tr')

    let product_total_price_th = document.createElement('th')
    product_total_price_th.className = 'py-3 text-center'
    product_total_price_th.setAttribute('colspan', '2 ')

    product_total_price_th.innerText = `TOTAL PRICE/ИТОГО СУММА`

    let product_sum_th = document.createElement('th')
    product_sum_th.className = 'py-1 text-right pr-5    '
    product_sum_th.setAttribute('colspan', '5 ')
    product_sum_th.innerText = `${JSON.parse(localStorage.getItem('total_sum'))} $`


    last_tr.appendChild(product_total_weight_th)
    last_tr.appendChild(product_weight_th)

    last_tr2.appendChild(product_total_price_th)
    last_tr2.appendChild(product_sum_th)

    product_table.appendChild(last_tr)
    product_table.appendChild(last_tr2)

    let local = JSON.parse(localStorage.getItem('invoice_data'))
    document.querySelector('.invoice_date').innerHTML = `Дата: ${local.date}`

    let invoice = JSON.parse(localStorage.getItem('invoice_number'))
    document.querySelector('.invoice_number_factura').innerHTML = `${invoice}`

}