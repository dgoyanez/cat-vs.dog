var animalImg = document.querySelector("#fav-animal"); 

function dog(element) {
    if (animalImg.src.indexOf("dog.jpeg")>=0){
        animalImg.src = "cat.jpeg";

    }
    else{
        animalImg.src = "dog.jpeg";

    }

}
