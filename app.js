let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];

left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140
})
 
let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
    .then((data)=> {
        data.forEach(element => {
            let{name, imdb, date, sposter, genre, url } =ele;
            let card = document.createElement('a'); 
            card.classList.add('card');
            card.href = url;       
            card.innerHTML = 
            <img src="${sposter}" alt="${name}" class="poster">
            
            card.appchild(card); 
        });
        
        document.getElementById('title').innerText = data[0].name; 
        document.getElementById('gen').innerText = data[0].genre; 
        document.getElementById('date').innerText = data[0].date; 
        document.getElementById('rate').innerHTML= '<span>IMDB</span><i class="bi bi-star-fill"></i> $(data[0],imdb)';
        
        
        
        
       //search.data.load
       data.forEach(element => {
            let{name, imdb, date, sposter, genre, url } =ele;
            let card = document.createElement('a'); 
            card.classList.add('card');
            card.href = url;       
            card.innerHTML = 
            <img src="$(sposter)" alt="">
                <div class="cont">
                  <h3>$(name)</h3>
                  <p>$(genre), $(date), <span>IMDB</span><i class="bi bi-star-fill"></i>$(imdb)</p>
                </div>
            search.appchild(card); 
          });
          //searchfilter

          search_input.addEventListener('keyup', () => {
            let filter = search_input.value.toUpperCase();
            let a = search.getElementsByTagName('a');
            for (let index = 0; index <a.length; index++) {
                let b = a[index].getElementsByClassName('cont')[0];
                //console.Log(a.textContent)
                let TextValue = b.textContent || b.innerText;
                if (TextValue.toUpperCase().indexOf(filter) > -1) {
                    a[index].style.display = "flex";
                    search.style.visibility = "visible";
                    search.style.opacity= 1;
                } else {
                   a[index].style.display = "none";
                }
                if (search_input.value == 0) {   
                    search.style.visibility = "hidden";
                    search.style.opacity = 0;
            
                }
          })
          let series = document.getElementById('series');
          let movies = document.getElementById('movies');

          series.addEventListener('click', () => { cards.innerHTML = '';

            let series_array = data.filter(ele => {
              return ele.type === "series";

            });
            data.forEach(element => {

            let{name, imdb, date, sposter, genre, url } =ele;

            let card = document.createElement('a'); 
            card.classList.add('card');
            card.href = url;       
            card.innerHTML = 
            <img src="${sposter}" alt="${name}" class="poster">
            
            card.appchild(card); 
          });
          
          movies.addEventListener('click', () => { cards.innerHTML = '';



            let series_array = data.filter(ele => {
              return ele.type === "movies";

            });
            data.forEach(element => {

            let{name, imdb, date, sposter, genre, url } =ele;

            let card = document.createElement('a'); 
            card.classList.add('card');
            card.href = url;       
            card.innerHTML = 
            <img src="${sposter}" alt="${name}" class="poster">
            
            card.appchild(card); 
          });
})
    });














    





    
    
