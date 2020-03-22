const ownerEditContainerHeader: Element = document.querySelector('.OwnerEditMenuContainer-heading') as HTMLInputElement;
let checkBoxArea: HTMLElement[] = [];
// 投コメ画面じゃなければ終わり
if (ownerEditContainerHeader == null) {
    alert('投コメ編集画面で起動してください')
} else {
    // イベントリスナー追加
    let gridElement: HTMLElement = document.getElementById('enquete-placeholder') as HTMLElement;
    gridElement.insertAdjacentHTML('afterend', '<div id="">設定時間：<input type="text" name="time" size="20" maxlength="20"></div>');
    document.addEventListener('click', function (e: any) {
        console.log(e.target);
        // チェックボックスが押された行のデータを表示する
        if (e.target.className == 'Checkbox-check') {
            alert('TEST');
            checkBoxArea.push(e.target.parentNode.parentElement.parentElement.children[1]);
        }
    }, false);
}
