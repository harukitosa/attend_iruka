<template>
    <div>
        <RollCallHeader />
        <div class="head"></div>
        <div v-if="show">
            <h1 v-if="this.check">出欠を取りました。</h1>
            <h1 v-else>本日の出席はすでに保存されています。</h1>
        </div>
        <div v-else>
            <vue-good-table v-if="wait" :columns="columns" :rows="items" @on-row-click="onRowClick" :row-style-class="rowStyleClassFn" ontouchstart />
        </div>
        <div class="foot"></div>
        <div class="footer fixed-bottom">
            <button class="button" @click="roll_call">保存</button>
        </div>
    </div>
</template>

<script>
import RollCallHeader from "@/components/RollCallHeader.vue";
import firebase from "firebase";
import axios from "axios";

export default {
    name: "RollCall",
    components: {
        RollCallHeader
    },
    data() {
        var user = firebase.auth().currentUser;
        return {
            columns: [{
                    label: "年",
                    field: "grade",
                    filterable: true
                },
                {
                    label: "組",
                    field: "class",
                    filterable: true
                },
                {
                    label: "番号",
                    field: "number",
                    filterable: true
                },
                {
                    label: "status",
                    field: "status"
                }
            ],
            items: [],
            check: true,
            show: false,
            ownerid: user.uid,
            wait: false
        };
    },
    created: async function() {
        let res = await axios.get(
            process.env.VUE_APP_HOST + "/get_students/:" + this.ownerid, {
                headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
            }
        );
        this.items = res.data;
        this.wait = !this.wait;
    },
    methods: {
        roll_call() {
            var self = this;
            this.wait = false;
            for (var i = 0; i < Object.keys(this.items).length; i++) {
                axios
                    .post(
                        process.env.VUE_APP_HOST +
                        "/roll_call/:" +
                        this.$route.params.year +
                        "/:" +
                        this.$route.params.month +
                        "/:" +
                        this.$route.params.day, {
                            id: this.items[i].id,
                            grade: this.items[i].grade,
                            class: this.items[i].class,
                            number: this.items[i].number,
                            name: this.items[i].name,
                            ownerID: this.items[i].ownerID,
                            status: this.items[i].status
                        }, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                                "Content-Type": "application/json"
                            }
                        }
                    )
                    .then(function(response) {
                        self.check = response.data;
                        //why動作する
                        self.show = true;
                    });
            }
        },
        rowStyleClassFn(row) {
            return row.status == "attend" ? "white" : "yellow";
        },
        onRowClick(params) {
            //nameの比較をuseridに変更する
            if (params.row.status === "attend") {
                // params.row.status = "absent";
                for (var i = 0; i < Object.keys(this.items).length; i++) {
                    if (this.items[i].id === params.row.id) {
                        this.items[i].status = "absent";
                    }
                }
            } else {
                // params.row.status = "attend";
                for (var j = 0; j < Object.keys(this.items).length; j++) {
                    if (this.items[j].id === params.row.id) {
                        this.items[j].status = "attend";
                    }
                }
            }
            this.rowStyleClassFn(params.row);
        }
    }
};
</script>

<style src="../assets/rollcall.css">

</style>