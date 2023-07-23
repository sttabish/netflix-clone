
//Consts
const apikey = "af09b2a271762068e311d5b1680bfce9";
const apiEndpoint = "https://api.themoviedb.org/3"

const apiPaths = {
    fetchAllCategories: '${apiEndpoint}/genre/movie/list?api_key=${apikey}'

}

// Boots up the app
function init() {
    fetchAndBuildAllSections();
}

function fetchAndBuildAllSections() {
    fetch(apiPaths.fetchAllCategories)
        .then(res => res.json())
        .then(res => {
            const categories = res.genres;
            if (Array.isArray(categories) && categories.length) {
                categories.forEach(category =>{
                fetchAndbuildMovieSections(category);
            });
        }
     console.table(Movies);
}) 
       .catch (err => console.error(err));
}

function fetchAndbuildMovieSections(category) {
    console.log(category);

}

window.addEventListener('load', function () {
    init();
    window.addEventListener('scroll',function(){
        const header= document.getElementById('header');
        if (window.scrollY > 5) header.classList.add('black-bg')
        else header.classList.remove('black-bg');
    })
})


