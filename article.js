articles = [
    {
        "num":"1",
        "title":"【みんれぽ】PYTHONスクレイピングでスロットデータを取得する作業を自動化したときの話",
        "category":["プログラミング","パチンコ・スロット"],
        "date":"2026-10-13"
    },    {
        "num":"2",
        "title":"【作り方】スロットデータサイト、みんレポをスクレイピングするアプリの作り方",
        "category":["プログラミング","パチンコ・スロット"],
        "date":"2026-10-13"
    },
    {
        "num":"3",
        "title":"【使い方】みんレポをスクレイピングするアプリを作ってみたので、その使い方",
        "category":["プログラミング","パチンコ・スロット"],
        "date":"2026-10-13"
    }
]
function getTitle(num){
    str = ""
    for(j = 0;j < articles[num-1].category.length;j++){
    if(j!=0)str += "・"
        str += "<a href='../profile.html'>"+articles[num-1].category[j]+"</a>"
    }
    document.getElementById("title").innerHTML += ""+
    " <article class='post'>"+
    "  <h2 class='post-title link'>"+ articles[num-1].title +"</h2>"+
    "  <div class='post-meta'>投稿日: "+ articles[num-1].date +" ｜ カテゴリ: "+
        str+
    "  </div>"+
    " </article>"
}
