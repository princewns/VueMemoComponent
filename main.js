new Vue({
    el : '#app',
    data : {
        id: 0,
        memo :'',
        memocontent : '',
        memolist : []
    },
    methods : {
        addMemo : function(){
            this.memolist.push({id: this.id , memo: this.memo , memocontent : this.memocontent});
            this.id++;
            this.memo="";
            this.memocontent="";
        },
        deleteMemo : function(id) {
            let index=0;
            this.memolist.forEach((element, i)=>{
                if(element.id ==id){
                    index = i;
                }
            });
            this.memolist.splice(index,1);
        }
    }

})