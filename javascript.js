async function getData() {
    const url = "https://example.org/products.json";
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      card(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  (async () => {
    await getData();
  })();
  
  function card(json) {
    let cards = document.getElementById("cards");
  
    for (let i = 0; i < json.length; i++) {
  
      cards.innerHTML += `<div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${json[i].id}</li>
        <li class="list-group-item">Name: ${json[i].name} </li>
        <li class="list-group-item">Username:  ${json[i].username}</li>
        <li class="list-group-item">Company: ${json[i].company.name}</li>
        <li class="list-group-item">Email: ${json[i].email}</li>
        <li class="list-group-item">Phone: ${json[i].phone}</li>
        <li class="list-group-item">Website: ${json[i].website}</li>
         <div class="card-footer"> Address:
         ${(json[i].address.street + " " + json[i].address.suite + " " +  json[i].address.city )}
       </div>
      </ul>
    </div>`;
    }
  }