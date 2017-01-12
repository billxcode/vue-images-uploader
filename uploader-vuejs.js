new Vue({
	el:"#app",
	data:{
		nama:"",
		images:"",
	},
	methods:{
	onFileChange:function(e) {
      var files = e.target.files || e.dataTransfer.files;
      this.images = files[0];
      if (!files.length)
        return;
    },
    removeImage: function (e) {
      	this.file_upload = '';
	},
	sendImage:function(){
		var form = new FormData();
		form.append('name',this.name);
		form.append('photo', this.images);
		this.$http.post('/fileupload.php', form).then((response)=>{
			console.log(response);
		});
	}
	}
});