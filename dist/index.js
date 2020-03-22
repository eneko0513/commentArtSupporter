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
    gridElement.insertAdjacentHTML('afterend', '<div id="">設定時間：<input type="text" name="time" size="20" maxlength="20"></div>');
    document.addEventListener('click', function (e) {
        console.log(e.target);
        // チェックボックスが押された行のデータを表示する
        if (e.target.className == 'Checkbox-check') {
            checkBoxArea.length = 0;
            commentArea.childNodes.forEach(function (value) {
                console.log(value);
            });
            // checkBoxArea.push(e.target.parentNode.parentElement.parentElement.children[1]);
        }
    }, false);
}
