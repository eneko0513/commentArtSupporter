"use strict";
var head = document.getElementsByTagName('head');
var script = document.createElement('script');
//ここで任意のjQueryを読み込ませる
script.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.min.js');
script.setAttribute('type', 'text/javascript');
var ownerEditContainerHeader = document.querySelector('.OwnerEditMenuContainer-heading');
var checkBoxArea = [];
var commentArea = document.querySelector('#js-app > div > div.WatchAppContainer-main > div.MainContainer.is-ownerEdit > div.MainContainer-playerPanel > div > div > div.OwnerEditPanelContent > div > div.DataGrid-DataGrid.CommentPanelDataGrid-DataGrid > div > div');
script.addEventListener('load', function () {
    // ここにjQueryの記述をする
    $(function () {
        // 投コメ画面じゃなければ終わり
        if (ownerEditContainerHeader == null) {
            alert('投コメ編集画面で起動してください');
        }
        else {
            // イベントリスナー追加
            var insertElementPosition = document.getElementsByClassName('Grid OwnerEditPanelHeader')[0];
            insertElementPosition.insertAdjacentHTML('afterend', '<div id="">設定時間：<input type="text" id="time" name="time" size="20" maxlength="20"><input onclick="submit();" type="submit" value="設定"></div>');
            document.addEventListener('change', function (e) {
                console.log(e.target);
                // チェックボックスが押された行のデータを表示する
                if (e.target.className == 'CheckboxInput') {
                    checkBoxArea.length = 0;
                    commentArea.childNodes.forEach(function (value) {
                        try {
                            // チェックボックス列のチェック状態の確認
                            if (value.children[0].children[0].children[0].checked) {
                                console.log(true);
                            }
                            else {
                                console.log(false);
                            }
                        }
                        catch (_a) {
                        }
                    });
                }
            }, false);
            // コメント欄の表示領域を調整
            $(".OwnerEditPanelContent").css({
                'top': '70px'
            });
        }
    });
});
document.head.appendChild(script);
function submit() {
    var timeElement = document.getElementById('time');
    commentArea.childNodes.forEach(function (value) {
        try {
            // チェックボックス列のチェック状態の確認
            console.log(value.children[0].children[0].children[0].checked);
            if (value.children[0].children[0].children[0].checked) {
                // 時間の変更
                var tempRow = value.children[1].children[0];
                $(tempRow).click();
                var vposCellElement = $(tempRow)[0].lastChild;
                Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value").set.call(vposCellElement, timeElement.value), vposCellElement.dispatchEvent(new Event("input", {
                    bubbles: !0
                }));
                sleep(50);
                $(vposCellElement)[0].blur();
            }
        }
        catch (e) {
            console.log(e);
        }
    });
    // ここで違う要素をクリックする
    $(timeElement)[0].click();
}
//引数にはミリ秒を指定します。（例：5秒の場合は5000）
function sleep(a) {
    var dt1 = new Date().getTime();
    var dt2 = new Date().getTime();
    while (dt2 < dt1 + a) {
        dt2 = new Date().getTime();
    }
    return;
}
