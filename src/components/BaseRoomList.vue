
  <template lang="html">
  <div class="container" fluid>
    <div v-if="show">
      <h3>登録中の出席簿</h3>
    <div v-for="list in lists" v-bind:key="`second-${list.id}`">
      <router-link :to="{name: 'Attendance', params:{id: list.id}}">
        <b-card class="card">
          {{list.title}}
        </b-card>
      </router-link>   
    </div> 
    <h3>あなたの出席簿</h3>
    <div v-for="item in items" v-bind:key="`first-${item.id}`">
      <router-link :to="{ name: 'list', params: {id: item.id, title: item.title} }">
        <b-card class="card">
          {{item.title}}
        </b-card>
      </router-link>
    </div>
    </div> 
    <Spinner v-else/>
  </div>
  </template>

  <script>
import axios from "axios";
import firebase from "firebase";
import Spinner from "@/components/Spinner.vue";
export default {
  name: "BaseRoomList",
  components: {
    Spinner
  },
  data: function() {
    var user = firebase.auth().currentUser;
    return {
      items: [],
      user_id: user.uid,
      lists: [],
      show: false
    };
  },
  mounted: async function() {
    let res = await axios.get(
      process.env.VUE_APP_HOST + "/get_owner_room/:" + this.user_id,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
      }
    );
    this.items = res.data;
    let res_register = await axios.get(
      process.env.VUE_APP_HOST + "/get_member_room/:" + this.user_id,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
      }
    );
    this.lists = res_register.data;
    this.show = true;
  }
};
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  background-color: #97e6ff;
}
.card {
  width: 90vw;
  max-width: 600px;
  font-size: 24px;
}
h3 {
  margin-top: 40px;
  font-size: 24px;
}
</style>
