
module.exports = {
  configure: function(app) {  
	// home function
	 app.get('/',function(req,res){
		res.send('Home');
	});
		
  }
};
