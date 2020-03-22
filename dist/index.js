"use strict";
var ownerEditContainerHeader = document.querySelector('.OwnerEditMenuContainer-heading');
var checkBoxArea = [];
var commentArea = document.querySelector('#js-app > div > div.WatchAppContainer-main > div.MainContainer.is-ownerEdit > div.MainContainer-playerPanel > div > div > div.OwnerEditPanelContent > div > div.DataGrid-DataGrid.CommentPanelDataGrid-DataGrid > div > div');
// 投コメ画面じゃなければ終わり
if (ownerEditContainerHeader == null) {
    alert('投コメ編集画面で起動してください');
}
else {
    // イベントリスナー追加
    var gridElement = document.getElementById('enquete-placeholder');
    gridElement.insertAdjacentHTML('afterend', '<div id="">設定時間：<input type="text" id="time" name="time" size="20" maxlength="20"><input onclick="submit();" type="submit" value="設定"></div>');
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
}
function submit() {
    var timeElement = document.getElementById('time');
    // commentArea[5].text = timeElement.value;
    alert('TEST');
    var b = document.createElement("div");
    var e = document.getElementsByClassName('InlineEdit OwnerCommentEditContainer-inlineEdit')[0];
    commentArea.childNodes.forEach(function (value) {
        try {
            // チェックボックス列のチェック状態の確認
            if (value.children[0].children[0].children[0].checked) {
                // 時間の変更
                value.children[1].textContent = timeElement.value;
                Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(e, b), e.dispatchEvent(new Event('input', {
                    bubbles: !0
                }));
            }
        }
        catch (_a) {
        }
    });
}
