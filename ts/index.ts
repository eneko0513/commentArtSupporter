var head: any = document.getElementsByTagName('head');
var script: any = document.createElement('script');
//ここで任意のjQueryを読み込ませる
script.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.min.js');
script.setAttribute('type', 'text/javascript');
const ownerEditContainerHeader: Element = document.querySelector('.OwnerEditMenuContainer-heading') as HTMLInputElement;
let checkBoxArea: HTMLElement[] = [];
const commentArea: HTMLElement = document.querySelector('#js-app > div > div.WatchAppContainer-main > div.MainContainer.is-ownerEdit > div.MainContainer-playerPanel > div > div > div.OwnerEditPanelContent > div > div.DataGrid-DataGrid.CommentPanelDataGrid-DataGrid > div > div') as HTMLElement;

script.addEventListener('load', function () {

    // ここにjQueryの記述をする
    $(function () {
        // 投コメ画面じゃなければ終わり
        if (ownerEditContainerHeader == null) {
            alert('投コメ編集画面で起動してください')
        } else {
            // イベントリスナー追加
            let insertElementPosition: HTMLElement = document.getElementsByClassName('Grid OwnerEditPanelHeader')[0] as HTMLElement;
            insertElementPosition.insertAdjacentHTML('afterend', '<div id="">設定時間：<input type="text" id="time" name="time" size="20" maxlength="20"><input onclick="submit();" type="submit" value="設定"></div>');

            document.addEventListener('change', function (e: any) {
                console.log(e.target);
                // チェックボックスが押された行のデータを表示する
                if (e.target.className == 'CheckboxInput') {
                    checkBoxArea.length = 0;
                    commentArea.childNodes.forEach(function (value: any) {
                        try {
                            // チェックボックス列のチェック状態の確認
                            if (value.children[0].children[0].children[0].checked) {
                                console.log(true);
                            } else {
                                console.log(false);
                            }
                        } catch {

                        }
                    });
                }
            }, false);
            // コメント欄の表示領域を調整
            $(".OwnerEditPanelContent").css({
                'top': '70px'
            });
        }
    })
})
document.head.appendChild(script);
function submit() {
    const timeElement: HTMLInputElement = document.getElementById('time') as HTMLInputElement;
    commentArea.childNodes.forEach(function (value: any) {
        try {
            // チェックボックス列のチェック状態の確認
            console.log(value.children[0].children[0].children[0].checked);
            if (value.children[0].children[0].children[0].checked) {
                // 時間の変更
                const tempRow: any = value.children[1].children[0];
                $(tempRow).click();
                const vposCellElement = $(tempRow)[0].lastChild;
                Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")!.set!.call(vposCellElement, timeElement.value), vposCellElement.dispatchEvent(new Event("input", {
                    bubbles: !0
                }));
                sleep(50);
                $(vposCellElement)[0].blur();
                //3秒スリープ
                sleep(50);
            }
        } catch (e) {
            console.log(e);
        }
    });
}

//引数にはミリ秒を指定します。（例：5秒の場合は5000）
function sleep(a: any) {
    var dt1 = new Date().getTime();
    var dt2 = new Date().getTime();
    while (dt2 < dt1 + a) {
        dt2 = new Date().getTime();
    }
    return;
}