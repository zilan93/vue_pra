window.onload = function(){
            new Vue({
                el: "#todo",
                data:{
                	myData:[],
                	username: "",
                	age:"",
                	nowindex:1,
                	m:false
                },
                methods:{
                	addData:function() {
                		if(this.$refs.sele.value=="") {
                			alert("请填满资料");
                		} else {
	                			this.myData.push({
	                			username:this.username,
	                			age:this.age
                			});
	                		this.username="",
	                		this.age=""
                		}
                		
                	},
                	noindex:function(nowindex) {
                	if(nowindex == -1) {
                		//全部删除
                		this.myData = [];
                	} else {
                		this.myData.splice(nowindex,1);
                	}
                }
                }
            });
        }