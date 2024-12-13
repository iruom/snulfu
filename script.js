// Bad things

// 共通のスクロール処理関数
function addScrollEvent(container) {
    let flag = false;

    // マウスダウン時
    container.addEventListener("mousedown", () => (flag = true));

    // マウスアップ時
    container.addEventListener("mouseup", () => (flag = false));
    container.addEventListener("mouseleave", () => (flag = false));

    // マウス移動時
    container.addEventListener("mousemove", (event) => {
        if (flag) scrollByDelta(container, event.movementX * 10);
    });

    // ホイール操作時
    container.addEventListener("wheel", (event) => {
        event.preventDefault();
        scrollByDelta(container, (event.deltaX + event.deltaY) * 2);
    });
}

// スクロール量を加算
function scrollByDelta(container, delta) {
    container.scrollLeft += delta;
}

// sharp_table_box_1 と sharp_table_box_2 にスクロールイベントを追加
const containers = document.querySelectorAll('.sharp_table_box_1, .sharp_table_box_2');
containers.forEach(container => addScrollEvent(container));