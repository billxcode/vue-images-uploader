new Vue({
	el:"#app",
	data:{
		photo:"",
	},
	methods:{
		sendData:function(){
			var data = {'photo':this.photo};
			this.$http.post('fileupload.php', data).then((response)=>{
				console.log(response.json());
			});
		}
	}

});