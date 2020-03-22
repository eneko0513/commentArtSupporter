let ownerEditContainerHeader: Element = document.querySelector('.OwnerEditMenuContainer-heading') as HTMLInputElement;;
// 投コメ画面じゃなければ終わり
if (ownerEditContainerHeader == null) {
    alert('投コメ編集画面で起動してください')
} else {
    // イベントリスナー追加
    let gridElement: HTMLElement = document.getElementById('enquete-placeholder') as HTMLElement;
    gridElement.insertAdjacentHTML('afterend', '<div id="commentGrid"><div id="msg">LOADING</div></div>');
    document.addEventListener('click', function (e: any) {
        console.log(e.target);
    }, false);
}
