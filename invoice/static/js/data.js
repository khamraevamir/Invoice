if(document.querySelector('.data')){

    /*  --------------------------- localStorage => invoice data  -------------------------------- */
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

    /*  --------------------------- localStorage => products RU -------------------------------- */
    let invoice_products = JSON.parse(localStorage.getItem('invoice_products'))
    let product_table = document.querySelector('.product_table')
    let counter = 1

    for(let index=0; index < invoice_products.length; index++){
        let product_tr = document.createElement('tr')
        // ------ counter td ------ //
        let product_counter_td = document.createElement('td')
        product_counter_td.className = 'py-1  text-center '
        product_counter_td.innerText = counter
        // ------ product name td ------ //
        let product_name_td = document.createElement('td')
        product_name_td.className = 'product_name_pfd py-1 px-3'
         if (document.querySelector('.product_table_en')) product_name_td.innerText = invoice_products[index].name_en
         else product_name_td.innerText = invoice_products[index].name


        // ------ product quantity td ------ //
        let product_quantity_td = document.createElement('td')
        product_quantity_td.className = 'py-1 text-center'
        product_quantity_td.innerText = invoice_products[index].quantity

        // ------ product netto td -> empty ------ //
        let product_netto_td = document.createElement('td')
        product_netto_td.className = 'py-1 '
        // ------ product brutto td -> empty ------ //
        let product_brutto_td = document.createElement('td')
        product_brutto_td.className = 'py-1 '

        // ------ product price td ------ //
        let product_price_td = document.createElement('td')
        product_price_td.className = 'py-1 text-center'
        if(invoice_products[index].price == 0) product_price_td.innerText = ''
        else product_price_td.innerText =  invoice_products[index].price

        // ------ total price td ------ //
        let product_last_td = document.createElement('td')
        product_last_td.className = 'py-1 text-center'
        if(invoice_products[index].price * invoice_products[index].quantity == 0) product_last_td.innerText = ''
        else product_last_td.innerText =  invoice_products[index].price * invoice_products[index].quantity

        //  ------ total price td ------  //
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

    //  ------ total weight tr ------  //
    let total_weight_tr = document.createElement('tr')

    //  ------ total weight text th ------  //
    let product_total_weight_th = document.createElement('th')
    product_total_weight_th.className = 'py-3 text-center'
    product_total_weight_th.setAttribute('colspan', '2 ')
    product_total_weight_th.innerText = `TOTAL WEIGHT/ИТОГО ВЕСА`

    //  ------ total weight th ------  //
    let product_weight_th = document.createElement('th')
    product_weight_th.className = 'py-1 text-center'
    product_weight_th.setAttribute('colspan', '5 ')
    product_weight_th.innerText = `${JSON.parse(localStorage.getItem('total_weight'))} kg`


    total_weight_tr.appendChild(product_total_weight_th)
    total_weight_tr.appendChild(product_weight_th)

    //  ------ total sum tr ------  //
    let total_sum_tr = document.createElement('tr')

    //  ------ total sum text th ------  //
    let product_total_price_th = document.createElement('th')
    product_total_price_th.className = 'py-3 text-center'
    product_total_price_th.setAttribute('colspan', '2 ')
    product_total_price_th.innerText = `TOTAL PRICE/ИТОГО СУММА`

    //  ------ total sum th ------  //
    let product_sum_th = document.createElement('th')
    product_sum_th.className = 'py-1 text-right pr-5    '
    product_sum_th.setAttribute('colspan', '5 ')
    product_sum_th.innerText = `${JSON.parse(localStorage.getItem('total_sum'))} $`

    total_sum_tr.appendChild(product_total_price_th)
    total_sum_tr.appendChild(product_sum_th)

    //  ------ table ------  //
    product_table.appendChild(total_weight_tr)
    product_table.appendChild(total_sum_tr)

    /*  --------------------------- localStorage => date | invoice_no  -------------------------------- */
    let local = JSON.parse(localStorage.getItem('invoice_data'))
    document.querySelector('.invoice_date').innerHTML = `Дата: ${local.date}`

    let invoice = JSON.parse(localStorage.getItem('invoice_number'))
    document.querySelector('.invoice_number_factura').innerHTML = `${invoice}`

    document.querySelector('.data').innerHTML = `
        <input type="text" value=${invoice} name="number">
        <input type="text" value=${JSON.parse(localStorage.getItem('total_weight'))} name="weight">
        <input type="text" value=${local.date} name="date">
        <input type="text" value=${JSON.parse(localStorage.getItem('total_sum'))} name="total">
        <input type="text" value=${invoice_data.number} name="phone">
        <input type="text" value=${invoice_data.receiver} name="receiver">
        <input type="text" value=${invoice_data.sender} name="sender">
        <input type="text" value=${invoice_data.passport} name="passport_seria">
        <input type="text" value=${invoice_data.address} name="address">
    `
}


if(document.querySelector('.form')){
    /*  --------------------------- localStorage => products  -------------------------------- */
    let invoice_products = JSON.parse(localStorage.getItem('invoice_products'))

    // ------ products id ------ //
    let ids_code = ''
    for(let index=0; index < invoice_products.length; index++){
        ids_code += `<input type="number" value="${invoice_products[index].id}" name="products[]">`
    }


    // ------ products quantities ------ //
    let quantites_code = ''
    for(let index=0; index < invoice_products.length; index++){
        quantites_code += `<input type="number" value="${invoice_products[index].quantity}" name="quantities[]">`
    }

    // ------ products prices ------ //
    let prices_code = ''
    for(let index=0; index < invoice_products.length; index++){
        prices_code += `<input type="number" value="${invoice_products[index].price}" name="prices[]">`
    }
    document.querySelector('.form').innerHTML = ids_code + quantites_code + prices_code
}