<template>
    <div class="about">
        <b-container>
            <b-row class="row">
                <b-col cols="12" md="6" class="col bg-white color-dark bg-">
                    <h1>IRUKA</h1>
                    <p>電子出席簿</p>
                </b-col>
                <b-col cols="12" md="6" class="col bg-prime">
                    <b-button class="button" variant="warning" @click="register">新規登録</b-button>
                    <button class="button bg-blue-light" @click="login">ログイン</button>
                </b-col>
                <b-col cols="12" md="12" class="col bg-blue-light">
                    <h2 class="color-white">出席するには？</h2>
                </b-col>
                <b-col cols="12" md="6" lg="3" class="col bg-white">
                    <div class="explain">
                        <h3>1. 授業を登録する</h3>
                        <p>ホーム画面の授業を登録するボタンを押す。登録したい授業のパスワードを出席簿のオーナーに聞いて入力しよう。</p>
                        <p>※この動作は初回のみ</p>
                    </div>
                    <img src="../assets/03.jpeg" width="270" height="500" />
                </b-col>
                <b-col cols="12" md="6" lg="3" class="col-n bg-white">
                    <div class="explain">
                        <h3>2. Home画面の登録している授業から出席する授業をクリック</h3>
                    </div>
                    <img src="../assets/pic01.png" alt width="270" height="500" />
                </b-col>
                <b-col cols="12" md="6" lg="3" class="col-n bg-white">
                    <div class="explain">
                        <h3>3. ワンタイムパスワード入力して出席</h3>
                        <p>オーナーからワンタイムパスワードを聞いて入力しよう！</p>
                    </div>
                    <img src="../assets/01.jpeg" alt width="270" height="500" />
                </b-col>
                <b-col cols="12" md="6" lg="3" class="col-n bg-white">
                    <p>次回からは出席する授業をクリックしてワンタイムパスワードを入力するだけ！</p>
                </b-col>
                <b-col cols="12" md="12" class="col bg-blue-dark">
                    <h2 class="color-white">出席簿を作成して出欠を取るには？</h2>
                </b-col>
                <b-col cols="12" md="6" lg="3" class="col-p bg-white">
                    <div class="explain">
                        <h3>1.出席簿を作成しよう</h3>
                        <p>
                            ホーム画面の出席簿を作成するボタンを押す。タイトルとパスワードを入力しよう。 入力したパスワードを生徒に伝えて出席簿に登録してもらいましょう。
                        </p>
                    </div>
                    <img src="../assets/06.jpeg" width="270" height="500" />
                </b-col>
                <b-col cols="12" md="6" lg="3" class="col-p bg-white">
                    <div class="explain">
                        <h3>2. Home画面のあなたの出席簿から出欠を取りたい授業をクリック</h3>
                    </div>
                    <img src="../assets/pic02.png" width="270" height="500" />
                </b-col>
                <b-col cols="12" md="6" lg="3" class="col-p bg-white">
                    <div class="explain">
                        <h3>3. ワンタイムパスワード入力して出欠を取ります。</h3>
                        <p>パスワードを出席簿に登録している生徒に伝えて出席してもらいましょう。出欠を取ったデータが出席簿に記録されます。</p>
                    </div>
                    <img src="../assets/04.jpeg" width="270" height="500" />
                </b-col>
                <b-col cols="12" md="6" lg="3" class="col bg-white">
                    <p>パスワードの有効時間は15分間です</p>
                    <p>それ以降は欠席扱いになります。</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "about",
    methods: {
        register() {
            this.$router.push('/signup')
        },
        login() {
            this.$router.push('/signin')
        },
    }
};
</script>

<style scoped>
.explain {
    height: 25vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.row {
    background-color: #60b4f4;
}

.col {
    text-align: center;
    justify-content: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    min-height: 30vh;
    width: 100vw;
    padding: 20px;
}

.col-n {
    text-align: center;
    justify-content: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    min-height: 30vh;
    width: 100vw;
    padding: 20px;
}

.col-p {
    text-align: center;
    justify-content: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    min-height: 35vh;
    width: 100vw;
    padding: 20px;
}

h1 {
    font-size: calc(65px + 1.75vw);
}

h2 {
    font-size: calc(42px + 1.55vw);
}

p {
    font-size: calc(10px + 1.15vw);
}

.color-dark {
    color: #1985c1;
}

.color-white {
    color: white;
}

.bg-blue-light {
    background-color: #97e6ff;
}

.bg-blue-dark {
    background-color: #1985c1;
}

.button {
    width: 25vw;
    height: 5vh;
    border: none;
    margin: 10px;
    max-width: 500px;
}
</style>
