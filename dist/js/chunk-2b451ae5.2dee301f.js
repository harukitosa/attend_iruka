(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b451ae5"],{"063f":function(t,e,s){},"386f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.show?s("div",{staticClass:"make_attendance"},[s("h1",[t._v("出席簿を作成する")]),s("p",[t._v("タイトル")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"name",placeholder:"出席簿名",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("p",[t._v("パスワード")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"パスワード",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("p",[t._v("概要欄")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{placeholder:"例: 朝礼の名簿だよ!",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),s("b-button",{staticClass:"button",attrs:{variant:"warning"},on:{click:t.send}},[t._v("作成")]),s("BaseSlide")],1):s("div",{staticClass:"make_attendance"},[t.check?s("div",[s("h1",[t._v("完了しました")]),s("b-button",{staticClass:"button blue",on:{click:t.back}},[t._v("Homeに戻る")])],1):s("div",[s("h2",[t._v("同一のパスワードが存在しています、パスワードの変更をお願いします")]),s("b-button",{staticClass:"button blue",on:{click:t.retu}},[t._v("戻る")])],1),s("BaseSlide")],1)])},a=[],n=s("b499"),o=s("bc3a"),r=s.n(o),c=s("8aa5"),d=s.n(c),u={name:"MakeAttendance",components:{BaseSlide:n["a"]},data:function(){var t=d.a.auth().currentUser;return{title:"",description:"",password:"",user_id:t.uid,show:!0,check:[]}},methods:{send:function(){this.dismissCountDown=this.dismissSecs;var t=this;r.a.post("https://attend-iruka.herokuapp.com/insert_room/:"+this.user_id,{owner_id:this.user_id,title:this.title,description:this.description,password:this.password},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then(function(e){t.check=e.data}),this.show=!this.show},back:function(){this.$router.go(-1)},retu:function(){this.title="",this.description="",this.password="",this.show=!this.show}}},l=u,p=(s("d80d"),s("2877")),h=Object(p["a"])(l,i,a,!1,null,"52d3c301",null);e["default"]=h.exports},d80d:function(t,e,s){"use strict";var i=s("063f"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-2b451ae5.2dee301f.js.map