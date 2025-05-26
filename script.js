// HTMLドキュメントが完全に読み込まれて解析された後に実行されるイベントリスナー
document.addEventListener('DOMContentLoaded', function() {

    // HTMLから各ランプの要素を取得
    const redLight = document.getElementById('red-light');
    const yellowLight = document.getElementById('yellow-light');
    const blueLight = document.getElementById('blue-light');

    // すべてのランプ要素を配列にまとめておく（操作しやすくするため）
    const allLights = [redLight, yellowLight, blueLight];

    /**
     * 指定されたランプを点灯させ、他のランプを消灯（灰色に）する関数
     * @param {HTMLElement} activeLight - 点灯させるランプの要素
     * @param {string} activeColorClass - 点灯させるランプに適用する色のクラス名 (例: 'red', 'yellow', 'blue')
     */
    function switchLight(activeLight, activeColorClass) {
        // まず、すべてのランプをリセット（灰色にする）
        allLights.forEach(light => {
            // 現在の色クラス（red, yellow, blue）を削除
            light.classList.remove('red', 'yellow', 'blue');
            // grayクラスを追加して消灯状態にする
            light.classList.add('gray');
        });

        // クリックされたランプ（activeLight）を点灯させる
        activeLight.classList.remove('gray'); // まずgrayクラスを削除
        activeLight.classList.add(activeColorClass); // 指定された色のクラスを追加
    }

    // 赤信号のランプがクリックされたときの処理
    redLight.addEventListener('click', function() {
        // switchLight関数を呼び出し、赤信号を点灯させる
        switchLight(redLight, 'red');
    });

    // 黄信号のランプがクリックされたときの処理
    yellowLight.addEventListener('click', function() {
        // switchLight関数を呼び出し、黄信号を点灯させる
        switchLight(yellowLight, 'yellow');
    });

    // 青信号のランプがクリックされたときの処理
    blueLight.addEventListener('click', function() {
        // switchLight関数を呼び出し、青信号を点灯させる
        switchLight(blueLight, 'blue');
    });
});