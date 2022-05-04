const OutObj = require('../models/outobj')
const fs = require('fs');

exports.getDocByDayOutObj = async(req, res) => {
    var start = new Date();
    start.setHours(0,0,0,0);
    

    var end = new Date();
    end.setHours(23,59,59,999);
  
    OutObj.aggregate([{
        $match: {
          createdAt: {
            $gte: start,
            $lt: end
            
          } 
        } 
      }, { 
        $group: {
          _id: { 
            "day":   { "$dayOfMonth": "$createdAt" },
            "month": { "$month": "$createdAt" },
            "year": { "$year": "$createdAt"}
          },
          count:{$sum: 1}
        }
      }]).exec(function(err,data){
        if (err) {
          console.log('Error Fetching model');
          console.log(err);
        } else {
            
          res.json(data)
        }
        
      });
    
}






exports.getDocByMonthOutObj = async(req, res) => {
    var start = new Date();
    
    start.setDate(0)+1
    start.setHours(0,0,0,0);
    
    var end = new Date();
    end.setDate(30)
    
    OutObj.aggregate([{
        $match: {
          createdAt: {
            $gte: start,
            $lt: end
            
          } 
        } 
      }, { 
        $group: {
          _id: { 
            "month": { "$month": "$createdAt" },
            "year": { "$year": "$createdAt"}
          },
          count:{$sum: 1}
        }
      }]).exec(function(err,data){
        if (err) {
          console.log('Error Fetching model');
          console.log(err);
        } else {
            
          res.json(data)
        }
        
      });
    
}

exports.getDocByYearOutObj = async(req, res) => {
    var start = new Date();
    start.setMonth(0)
    

    var end = new Date();
    end.setMonth(11)
   

    OutObj.aggregate([{
        $match: {
          createdAt: {
            $gte: start,
            $lt: end
          } 
        } 
      }, { 
        $group: {
          _id: { 
            "year":  { "$year": "$createdAt" },
          },
          count:{$sum: 1}
        }
      }]).exec(function(err,data){
        if (err) {
          console.log('Error Fetching model');
          console.log(err);
        } else {
            
          res.json(data)
        }
        
      });
    
}

exports.getDocByWeekOutObj = async(req, res) => {
  var start = new Date();
  var newstart = start.getDate();
  var newstart2 = 0;
  if ( newstart <= 7) {
      newstart2 = 0;
  } else {
     newstart2 = newstart - 7;
  }
  console.log(newstart2)
  start.setDate(newstart2)
  start.setHours(0,0,0,0);
  

  var end = new Date();
  var newend = end.getDate();
  var setweek = 0;
  console.log(newend)
  if ( newend <= 7 ) {
      setweek = 1;
  } else if ( newend >= 8 && newend <= 14 ) {
      setweek = 2;
  } else if ( newend >= 15 && newend <= 21 ) {
      setweek = 3;
  } else if ( newend >= 22 && newend <= 28) {
      setweek = 4;
  } else {
      setweek = 4;
  }
  end.setDate(newend)
 

  OutObj.aggregate([{
      $match: {
        createdAt: {
          $gte: start,
          $lt: end
        } 
      } 
    }, { 
      $group: {
        _id: { 
          "week":  { "$week": "$createdAt" },
        
        },
        count:{$sum: 1},
       
      }
    }]).exec(function(err,data){
      if (err) {
        console.log('Error Fetching model');
        console.log(err);
      } else {
          
        console.log(data);
        console.log(setweek);
        res.json(data)
      }
      
    });
  
}

exports.getDocByDayOutObjSpecial = async(req, res) => {
  var start = new Date();
  start.setHours(0,0,0,0);


  var end = new Date();
  end.setHours(23,59,59,999);

  OutObj.aggregate([{$match: {
    createdAt: {
      $gte: start,
      $lt: end
      
    } 
  } 
}, { 
  $group: {
    _id: { _id : "$_id" },
    name: { $first: "$name"},
    locate: { $first: "$locate"},
    date: { $first: "$createdAt"},
    category: { $first: "ด้านพัสดุ"}
    
   
  }
}]).exec(function(err, data){
    if(err) {
      console.log(err);
    }else {
      console.log(data)
      res.json(data)
    }
  })
  
}