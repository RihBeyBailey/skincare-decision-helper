function recommend(skinType) {

    let answer = document.getElementById("answer");

    if (skinType === "oily") {
        answer.textContent = "Try a gentle gel cleanser.";
    }

    else if (skinType === "dry") {
        answer.textContent = "Try a hydrating cream cleanser.";
    }

    else if (skinType === "sensitive") {
        answer.textContent = "Try a fragrance-free cleanser.";
    }

}
