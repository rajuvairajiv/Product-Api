fetch('https://fakestoreapi.com/products')
    .then((data) => data.json())
    .then((completedata) => {
        let data1 = '';
        completedata.map((values, index) => {
            data1 += `
    <div class="card" id="card-${index}">
        <h1 class="title">${values.title}</h1>
        <img src="${values.image}" alt="img" class="images" />
       
          
            <p class="category">${values.category}</p>
            <p class="price">Price: $${values.price}</p>
       
    </div>`;
        });
        document.getElementById("cards").innerHTML = data1;



    })
    .catch((err) => {
        console.log(err);
    });