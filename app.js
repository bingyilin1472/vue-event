new Vue({
    el:'#app',
    data:{
        title: 'Hello',
        name: 'Dante',
        wage: 10,
        coords: {
            x: 0,
            y: 0
        }
    },
    methods:{
        changeWage(amount){
            // Vue style是不採用semi-colon分號，這樣會比較簡潔
            // Vue developers一般不採用semi-colon，to make it clean
            this.wage += amount
        },
        // event為event obj，裡面會有一些event細節
        // 若希望收到這個event obj參數，必須不輸入任何參數的方式來呼叫
        // 我猜若你要輸入參數，就得去找一下documentation裡面是否有講到此default參數的名稱為何
        showLogEvent(event){
            // 可以獲得event info
            // 像是，ctrlkey是否按著ctrl key(鍵盤的)、type(event類型ex: click)
            // clientX、clientY(browser可視區位置)，screen則是螢幕的
            console.log(event)
        },

        // event.offsetX與event.offsetY可以得到滑鼠指標位置相對觸發物件的x、y座標
        // 都是從左上角開始，網頁的座標左上角是0，因此往右下角移動x, y就會增加
        logCoords(event){
            // event裡面的屬性(event細節資訊)可以跟你user去做相對應互動
            this.coords.x = event.offsetX
            this.coords.y = event.offsetY
        },

        updateName(event){
            // event.target可以獲得觸發事件的元素(他綁定的是keyup)
            // 這邊是對應到文字輸入框，因此只要他打字就會觸發到他，取得他後再取得value
            // console.log(event.target.value)
            this.name = event.target.value
        }
    }
})