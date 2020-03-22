"use strict";
var ownerEditContainerHeader = document.querySelector('.OwnerEditMenuContainer-heading');
;
// 投コメ画面じゃなければ終わり
if (ownerEditContainerHeader == null) {
    alert('投コメ編集画面で起動してください');
}
else {
    // イベントリスナー追加
    var gridElement = document.getElementById('enquete-placeholder');
    gridElement.insertAdjacentHTML('afterend', '<div id="commentGrid"><div id="msg">LOADING</div></div>');
    document.addEventListener('click', function (e) {
        console.log(e.target);
    }, false);
}
