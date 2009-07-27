$(function() {
  try {
    var categories = [
  		{title:'Restaurants',hasChild:true,category_name:"restaurants"},
  		{title:'Bars',hasChild:true,category_name:"bars"},
  		{title:'Coffee & Tea',hasChild:true,category_name:"coffee"},
  		{title:'Banks',hasChild:true,category_name:"banks"},
  		{title:'Gas & Service Stations',hasChild:true,category_name:"servicestations"},
  		{title:'Drug Stores',hasChild:true,category_name:"drugstores"}
  	];

  	Titanium.UI.createTableView({data:categories,title:"Nearby",isPrimary:true,barColor:"#ff0000"},function(eventObject) {
  	  try {
  	    // create a new window
    		var win = Titanium.UI.createWindow();
    		Titanium.App.Properties.setString('category',categories[eventObject.index].category_name);
        win.setURL('results.html');
    		win.setTitle('Results');
        win.setBarColor('#ff0000');

    		//Open the new window with a nice wipe animation
    		win.open({animated:true});
  	  } catch (e) {
  	    Titanium.API.debug(e.message);
  	  }
  	}).open({animated:false});
  } catch(e) {
    Titanium.API.debug(e.message);
  }
});