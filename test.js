// console.log("test");

let table =[
  {
    id :1 ,
    titre: "xxxxxxxxxxxx",
    destination: "Paris, France",
    date: "2024-07-15",
    note: 5,
    categorie: "Forest",
    image : "https://th.bing.com/th/id/OIP.2LzIzZDD8L9Ff8FQbZD1NwHaE8?w=282&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
     id :2 ,
    titre: "Vacances à Paris",
    destination: "Paris, France",
    date: "2024-07-15",
    note: 5,
    categorie: "Beach",
    image : "https://th.bing.com/th/id/OIP.2LzIzZDD8L9Ff8FQbZD1NwHaE8?w=282&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
   {
     id :3,
    titre: "Vacances à Paris",
    destination: "Paris, France",
    date: "2024-07-15",
    note: 5,
    categorie: "Beach",
    image : "https://th.bing.com/th/id/OIP.2LzIzZDD8L9Ff8FQbZD1NwHaE8?w=282&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
     {
    id :4 ,
    titre: "Vacances à Paris",
    destination: "Paris, France",
    date: "2024-07-15",
    note: 5,
    categorie: "Beach",
    image : "https://th.bing.com/th/id/OIP.2LzIzZDD8L9Ff8FQbZD1NwHaE8?w=282&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  }
];

const bt =document.getElementById('btt');

const titre = document.getElementById('titre');
const destination = document.getElementById('destination');
const note = document.getElementById('note')
const categorie = document.getElementById('categorie');
const  image = document.getElementById('image');
const  div =document.getElementById('id')


bt.addEventListener("click", (e) => {
  e.preventDefault();

  let newtable = {
    id : table.length+1,
    titre: titre.value,
    destination: destination.value,
    note: Number(note.value),
    categorie: categorie.value,
    image: image.value
  };

  table.push(newtable);
  console.log(table); 

  alert("L'élément a été ajouté ");

  titre.value = "";
  destination.value = "";
  note.value = "";
  categorie.value = "";
  image.value = "";
});

function CreeElement() {
  const container = document.getElementById('containerCard');
  container.innerHTML = '';
  for (let i = 0; i < table.length; i++) {
    const x = table[i];

    container.innerHTML += `       
      <div " class="flex flex-wrap justify-center items-center  w-[350px] rounded-[20px] shadow-lg m-7  bg-white mx card">
        <img src="${x.image}" class="w-full h-[250px]  rounded-t-[20px]">
        <div class="p-4 text-center">
          <h2 class="text-sm font-bold">${x.titre}</h2>
          <p>${x.destination}</p>
          <p class="text-sm ">${x.note}</p>
          <p>${x.categorie}</p>
         <button  onclick= "supprimer(${x.id})"  class="bg-blue-600 w-[120px] py-3
        rounded-[30px] text-white  text-center "> supprimer </button>
        </div>
      </div>
    `;
}}CreeElement()


function supprimer(id){
  table = table.filter(g=>g.id !== id)
 CreeElement(table);
}



























