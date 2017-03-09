var category = require('./catalog/models/catalog/category');
var auth = require('./catalog/models/auth/auth'); 
var ostauth = require('./ostauth'); 
var customer = require('./catalog/models/account/customer');
module.exports = {
  configure: function(app) {
	  app.get('/settoken/:id/',function(req,res){
		//console.log(req);
		auth.settoken(req,res);
		});
	  
	  
	  // home function
	  app.get('/',ostauth,function(req,res){
		res.send('Home');
		});
		
	// register function
	  app.post('/register/', ostauth ,function(req,res){
	        //console.log(res);
		customer.addCustomer(req.body,res);
	});
  
  // to get all categories
    app.get('/categories/:id/', function(req, res) {
      category.getCategories(req.params.id,res);
    });
    
   // to get specific category based on category id
   app.get('/category/:id/', function(req, res) {
      category.getCategory(req.params.id,res);
    });
  
  }
};
