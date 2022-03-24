Vue.component('memo-component', {
    props :['id'],
    template :
    `<div id="memocontent">
        <h3>
            <slot name='title'></slot>
            <button @click="deletememo">X</button>
        </h3>
        <slot name='content'></slot>
        <hr>
        <p>{{year}}년 {{month+1}}월 {{day}}일</p>
    </div>
    `,
    data : function() {
        return  {
            year : new Date().getFullYear(),
            month : new Date().getMonth(),
            day : new Date().getDate()
        };
    },
    methods :{
        deletememo : function(){
            this.$emit("delete", this.id );
        }
    }
});