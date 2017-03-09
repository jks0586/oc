var path =require('path'); 
module.exports = {
  configure: function(app) {  
	// home function
	 app.get('/',function(req,res){
		//res.send('Home');
		res.sendFile(path.join(__dirname, 'catalog/','views/','common/', 'header.html'));
	});
		
  }
};
