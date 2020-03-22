const ownerEditContainerHeader: Element = document.querySelector('.OwnerEditMenuContainer-heading') as HTMLInputElement;
let checkBoxArea: HTMLElement[] = [];
const commentArea: HTMLElement = document.querySelector('#js-app > div > div.WatchAppContainer-main > div.MainContainer.is-ownerEdit > div.MainContainer-playerPanel > div > div > div.OwnerEditPanelContent > div > div.DataGrid-DataGrid.CommentPanelDataGrid-DataGrid > div > div') as HTMLElement;
// 投コメ画面じゃなければ終わり
if (ownerEditContainerHeader == null) {
    alert('投コメ編集画面で起動してください')
} else {
    // イベントリスナー追加
    let gridElement: HTMLElement = document.getElementById('enquete-placeholder') as HTMLElement;
    gridElement.insertAdjacentHTML('afterend', '<div id="">設定時間：<input type="text" name="time" onclick="submit();" size="20" maxlength="20"><input type="submit" value="設定"></div>');
    document.addEventListener('click', function (e: any) {
        console.log(e.target);
        // チェックボックスが押された行のデータを表示する
        if (e.target.className == 'Checkbox-check') {
            checkBoxArea.length = 0;
            commentArea.childNodes.forEach(function(value: any){
                console.log(value);
            });

            // checkBoxArea.push(e.target.parentNode.parentElement.parentElement.children[1]);
        }
    }, false);
}

function submit() {
    alert('TEST');
}
