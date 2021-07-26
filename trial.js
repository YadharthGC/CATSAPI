function getcat() {
    fetch("https://cataas.com/api/cats")
        .then(data => data.json())
        .then(cats => load(cats));
}

function load(cats) {
    var catlist = document.createElement("div");
    catlist.className = "catlist";
    cats.forEach((cat) => {
        var a = document.createElement("div");
        a.className = "a";
        a.innerHTML = `
        <div class="imge"><img class="image" src="https://cataas.com/cat/${cat.id}"></img><div>
        <div>Created on:${new Date(cat.created_at).toDateString()}</div>
        <div>Tags:${cat.tags}</div>
        `
        catlist.append(a);
    })
    document.body.append(catlist);
}
getcat();

function filter() {
    document.querySelector(".catlist").remove();
    var tags = document.querySelector(".x").value;
    console.log("searching");

    fetch(`https://cataas.com/api/cats?tags=${tags}`, {
            method: "GET"
        })
        .then(data => data.json())
        .then(cats => load(cats));
}