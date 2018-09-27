var request = require('request');
var ZomatoAPI = require('node-zomato');
var express = require('express')
var app = express();
var ACCESS_TOKEN ='Your zomato api key';
var API_END_POINT = 'https://developers.zomato.com/api/v2.1';
var http=require('http');
var api = new ZomatoAPI('ACCESS_TOKEN');


// http://localhost:8080/categories


    app.get('/categories',function(req,res){




api.verify(function(hello) {
    if(hello)
    console.log(hello);
})
    api.categories = 
       
        cateAPI('/categories', {}, function(error,response){

        if (error) {
           
            return;
        }
        res.send(JSON.stringify(response));
       return;
        
    });
});



// http://localhost:8080/cities?q=delhi(you can change the value of q with the city name you want to search)

app.get('/cities',function(req,res){ 
    
    api.cities =     
        
        catAPI('/cities',{q:req.query.q},function(error,response){

        
            if(error){
                console.log(error)
            }
            res.send(JSON.stringify(response));
        })
    })
    


    app.get('/dailymenu',function(req,res){
        api.DailyMenu=
        resAPI('/dailymenu',{res_id:req.query.res_id},function(error,response){
            if(error){
                console.log(error)
            }
            res.send(JSON.stringify(response));
        }
    )})
    app.get('/Establishments',function(req,res){
        api.establishment=
        EstAPI('/establishments',{city_id:req.query.city_id},function(error,response){
            if(error){
                console.log(error)
            }
            res.send(JSON.stringify(response));
        }
    )})
    app.get('/Geocode',function(req,res){
        api.GeoCode=
        GeoAPI('/geocode',{lat:req.query.lat,lon:req.query.lon},function(error,response){
            if(error){
                console.log(error)
            }
            res.send(JSON.stringify(response));
        }
    )})
    app.get('/Collections',function(req,res){
        api.Collections=
        CollectionAPI('/collections',{city_id:req.query.city_id},function(error,response){
            if(error){
                console.log(error)
            }
            res.send(JSON.stringify(response));
        }
    )})
    app.get('/Cuisines',function(req,res){
        api.Cuisines=
        CuisinesAPI('/cuisines',{lat:req.query.lat,lon:req.query.lon},function(error,response){
            if(error){
                console.log(error)
            }
            res.send(JSON.stringify(response));
        }
    )})
    app.get('/locationdetails',function(req,res){
        api.location_details=
        LocationsdetailAPI('/location_details',{entity_id:req.query.entity_id,entity_type:req.query.entity_type},function(error,response){
            if(error){
                console.log(error)
            }
            res.send(JSON.stringify(response));
          
        }
    )})

    app.get('/locations',function(req,res){
        api.locations=
        LocationsAPI('/locations',{query:req.query.query,lat:req.query.lat,lon:req.query.lon},function(error,response){
            if(error){
                console.log(error)
            }
            res.send(JSON.stringify(response));
          
        }
    )})

    app.get('/reviews',function(req,res){
        api.reviews=
        ReviewsAPI('/reviews',{res_id:req.query.res_id},function(error,response){
            if(error){
                console.log(error)
            }
            res.send(JSON.stringify(response));
           
        }
    )})
    // http://localhost:8080/search?count=5&lat=40.742051&lon=-74.004821



    app.get('/search',function(req,res){
        api.search=
        SearchAPI('/search',{count:req.query.count,lat:req.query.lat,lon:req.query.lon},function(error,response){
            if(error){
                console.log(error)
            }
            res.send(JSON.stringify(response));
        
           
        }
    )})


    var SearchAPI = function(resource, qs, callback) {
        
        console.log(qs);
            var options = {  //'?q='//
                method: 'GET',
            url: API_END_POINT+resource+'?count='+qs.count+"&"+'lat='+qs.lat+"&"+qs.lon,
                headers: {
                    'user_key': ACCESS_TOKEN,
                    'content-type': 'application/json'
                }
             
            };
         
            console.log(options)
            request(options, function(error, response, body) {
                callback(error, response);
              
            });
        };


        var cateAPI = function(resource, qs, callback) {
            
           
                var options = {  
                    method: 'GET',
                url: API_END_POINT+resource,
                    headers: {
                        'user_key': ACCESS_TOKEN,
                        'content-type': 'application/json'
                    }
                 
                };
             
                console.log(options)
                request(options, function(error, response, body) {
                    callback(error, response);
                  
                });
            };
    
    






    var ReviewsAPI = function(resource, qs, callback) {
        
        console.log(qs);
            var options = {  //'?q='//
                method: 'GET',
            url: API_END_POINT+resource+'?res_id='+qs.res_is  ,
                headers: {
                    'user_key': ACCESS_TOKEN,
                    'content-type': 'application/json'
                }
             
            };
         
            console.log(options)
            request(options, function(error, response, body) {
                callback(error, response);
              
            });
        };


///////////////////////////////////////


    var LocationsAPI = function(resource, qs, callback) {
        
        console.log(qs);
            var options = {  //'?q='//
                method: 'GET',
            url: API_END_POINT+resource+'?query='+qs.query+'&'+'lat='+qs.lat+"&"+'lon='+qs.lon
    ,
                headers: {
                    'user_key': ACCESS_TOKEN,
                    'content-type': 'application/json'
                }
             
            };
         
            console.log(options)
            request(options, function(error, response, body) {
                callback(error, response);
              
            });
        };

       

////////////////////////////////

    var LocationsdetailAPI = function(resource, qs, callback) {
        
        console.log(qs);
            var options = {  //'?q='//
                method: 'GET',
            url: API_END_POINT+resource+'?entity_id='+qs.entity_id+"&"+'entity_type='+qs.entity_type
    ,
                headers: {
                    'user_key': ACCESS_TOKEN,
                    'content-type': 'application/json'
                }
             
            };
         
            console.log(options)
            request(options, function(error, response, body) {
                callback(error, response);
              
            });
        };
////////////////////////////////////////////////////
    var CuisinesAPI = function(resource, qs, callback) {
        
        console.log(qs);
            var options = {  //'?q='//
                method: 'GET',
            url: API_END_POINT+resource+'?lat='+qs.lat+"&"+'lon='+qs.lon
    ,
                headers: {
                    'user_key': ACCESS_TOKEN,
                    'content-type': 'application/json'
                }
            
                
            };
         
            console.log(options)
            request(options, function(error, response, body) {
                callback(error, response);
              
            });
        
       
            }      

///////////////////////////////////////////////////////


    var CollectionAPI = function(resource, qs, callback) {
        
        console.log(qs);
            var options = {  //'?q='//
                method: 'GET',
            url: API_END_POINT+resource+'?city_id='+qs.city_id
    ,
                headers: {
                    'user_key': ACCESS_TOKEN,
                    'content-type': 'application/json'
                }
            
                
            };
         
            console.log(options)
            request(options, function(error, response, body) {
                callback(error, response);
              
            });
        
       
            }      
/////////////////////////////////////////
var GeoAPI = function(resource, qs, callback) {
        
        console.log(qs);
            var options = {  //'?q='//
                method: 'GET',
            url: API_END_POINT+resource+'?lat='+qs.lat+"&"+'lon='+qs.lon
    ,
                headers: {
                    'user_key': ACCESS_TOKEN,
                    'content-type': 'application/json'
                }
            
                
            };
         
            console.log(options)
            request(options, function(error, response, body) {
                callback(error, response);
              
            });
        
       
            }      

////////////////////////////////////////////
    var EstAPI = function(resource, qs, callback) {
        
        console.log(qs);
            var options = {  //'?q='//
                method: 'GET',
            url: API_END_POINT+resource+'?city_id='+qs.city_id
    ,
                headers: {
                    'user_key': ACCESS_TOKEN,
                    'content-type': 'application/json'
                }
            
                
            };
         
            console.log(options)
            request(options, function(error, response, body) {
                callback(error, response);
              
            });
        
       
            }      

    

   //////////////////////////////////


var resAPI = function(resource, qs, callback) {
   
    console.log(qs);
        var options = {  //'?q='//
            method: 'GET',
        url: API_END_POINT+resource+'?res_id='+qs.res_id
,
            headers: {
                'user_key': ACCESS_TOKEN,
                'content-type': 'application/json'
            }
        
            
        };
      
        console.log(options)
        request(options, function(error, response, body) {
            callback(error, response);
           
        });
    
   
        }


        ///////////////////////////////////
        var catAPI = function(resource, qs, callback) {
           
            console.log(qs);
                var options = {  //'?q='//
                    method: 'GET',
                url: API_END_POINT+resource+'?q='+qs.q
        ,
                    headers: {
                        'user_key': ACCESS_TOKEN,
                        'content-type': 'application/json'
                    }
                
                    
                };
    
                console.log(options)
                request(options, function(error, response, body) {
                    callback(error, response);
                   
                });
            
           
                }
   
                app.listen(8080, function(){
                    console.log('Server is running on',8080);
                });
        

    