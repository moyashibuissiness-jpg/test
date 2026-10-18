articles = [
    {
        "num":"1",
        "title":"【みんれぽ】PYTHONスクレイピングでスロットデータを取得する作業を自動化したときの話",
        "category":["プログラミング","パチンコ・スロット"],
        "date":"2026-10-13"
    },    
    {
        "num":"",
        "title":"【注意】スクレイピングで気を付けること、犯罪になってしまう場合",
        "category":["プログラミング","パチンコ・スロット"],
        "date":"2026-10-13"
    },
    {
        "num":"3",
        "title":"【使い方】みんレポをスクレイピングするアプリを作ってみたので、その使い方①(データ取得)",
        "category":["プログラミング","パチンコ・スロット"],
        "date":"2026-10-13"
    },
    {
        "num":"4",
        "title":"【使い方】みんレポをスクレイピングするアプリを作ってみたので、その使い方②(データ分析)",
        "category":["プログラミング","パチンコ・スロット"],
        "date":"2026-10-13"
    },
    {
        "num":"5",
        "title":"【AWS】参考書１冊だけでAWS Practitionerを１ヶ月で合格した時の話",
        "category":["プログラミング","資格","転職"],
        "date":"2026-10-13"
    },
    {
        "num":"6",
        "title":"1円でドメイン取ってウェブサイトを公開する方法【お名前ドットコム・GithubPages】",
        "category":["プログラミング","資格","転職"],
        "date":"2026-10-13"
    }
]
function getTitle(num){
    str = ""
    for(j = 0;j < articles[num-1].category.length;j++){
        if(j!=0)str += "・"
        str += "<a href='../home.html?category=" + articles[num-1].category[j] +"'>"+articles[num-1].category[j]+"</a>"
    }
    document.getElementById("title").innerHTML += ""+
    " <article class='post'>"+
    "  <h2 class='post-title link'>"+ articles[num-1].title +"</h2>"+
    "  <div class='post-meta'>投稿日: "+ articles[num-1].date +" ｜ カテゴリ: "+
        str+
    "  </div>"+
    " </article>"
}


function getAllTitle(category=""){
    for(i = 0; i < articles.length;i++){
      if(articles[i].num == "") continue 
      str = ""      
      if (category!="" && !articles[i].category.includes(category))continue

      for(j = 0;j < articles[i].category.length;j++){
        if(j!=0)str += "・"
        str += "<a href='home.html?category="+articles[i].category[j]+"'>"+articles[i].category[j]+"</a>"
      }
      document.getElementById("main").innerHTML += ""+
        " <article class='post'>"+
        "  <h2 class='post-title link' onclick=\"location.href='article/"+articles[i].num +".html' \">"+ articles[i].title +"</h2>"+
        "  <div class='post-meta'>投稿日: "+ articles[i].date +" ｜ カテゴリ: "+
          str+
        "  </div>"+
        " </article>"
    }
}
function getCategory(){
    const params = new URLSearchParams(location.search);
    if (params.has("category")) {
        document.getElementById("category").innerHTML=params.get("category");
        return  params.get("category");
    }
    else return ""
}
