import youtuber from "./foo";


youtuber.
youtuber.list.business.youtuber[0].techProgrammng();

youtuber.plan();

youtuber.list.entertainment.makeSmile();

function 高階関数(コールバック関数) {
    // 処理
    コールバック関数();
}

function unfollow() {
    console.log("フォローを外しました");
}

function cancelTweet() {
    console.log("ツイートをキャンセルしました");
}

unfollow();
cancelTweet();

function confirmed(fn) {
    if (window.confirm("実行しますか？")) {
        fn();
    }
}

confirmed(unfollow);