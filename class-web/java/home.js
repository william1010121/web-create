function init() {
    var txt = document.getElementsByName('mytext')[0];
    var btn_of_txt = document.getElementById('input_end');
    txt.addEventListener("keyup", (event) =>{
         var st = txt.value;
        var article = document.getElementById('my_article');
        console.log(article);
        article.innerText = (txt.value);
    })

    var lst = document.getElementById("today_list");
    var lst_nd = lst.childNodes;
    var cnt = 0;
    for( var i = 0; i < lst_nd.length; ++i) 
        cnt += (lst_nd[i].nodeType == 1 ? 1 : 0);

}