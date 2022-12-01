// Initial References
let result = document.getElementById('result');
let searchBtn =  document.getElementById('search-btn');
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let userInp = document.getElementById('user-inp').value;

searchBtn.addEventListener('click',()=>{
    let userInp = document.getElementById("user-inp").value;
    if(userInp.length==0){
        result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`
    }else{
        fetch(url+userInp)
        .then(response =>response.json())
        .then(data=> {
            let myMeal=data.meals[0];
            // console.log(myMeal);
            console.log(myMeal.strMeal);
            console.log(myMeal.strArea);
            console.log(myMeal.strMealThumb);
            console.log(myMeal.strInstructions);
            let count = 1;
            let ingrediants = [];
            for(let  i in myMeal){
                let ingrediant = "";
                let measure = "";
                if(i.startsWith("strIngredient") && myMeal[i]){
                    ingrediant = myMeal[i];
                    measure = myMeal[`strMeasure`+count];
                    count+=1;
                    ingrediants.push(`${measure} ${ingrediant}`)
                }
            }
            console.log(ingrediants);

            result.innerHTML = `
            <img src=${myMeal.strMealThumb}>
            <div class="details">
                <h2>${myMeal.strMeal}</h2>
                <h4>${myMeal.strArea}</h4>
            </div>
            <div id="ingrediant-con"></div>
            <div id="recipie">
                <button id="hide-recipie">X</button>
                <pre id="instructions">${myMeal.strInstructions}</pre>
            </div>
            <button id="show-recipie">View Recipie</button>
            `;

            let ingrediantCon = document.getElementById("ingrediant-con");
            let parent = document.createElement("ul");
            let recipie = document.getElementById("recipie");
            let hideRecipie = document.getElementById("hide-recipie");
            let showRecipie = document.getElementById("show-recipie");
            
            ingrediants.forEach((i) => {
                let child = document.createElement("li");
                child.innerText = i;
                parent.appendChild(child);
                ingrediantCon.appendChild(parent);
            });

            hideRecipie.addEventListener("click",()=>{
                recipie.style.display = "none";
            });
            showRecipie.addEventListener("click",()=>{
                recipie.style.display = "block";
            })
        }).catch(()=>{
            result.innerHTML = `<h3>Invalid Input</h3>`
        })
    }
});

