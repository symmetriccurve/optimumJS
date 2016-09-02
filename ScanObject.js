var CheckNullType = {

   checkString : function(input){
      //console.log("checkString received", input);
      if(!input) {  // false:  for null, undefined, NaN,'',0,false

         if(typeof input === 'undefined'){
            return 'n/a'
         } else if(input === null) {
            return 'n/a'
         } else if(input === {}){
            return 'n/a'
         }

      }

      return input
   },

   checkNumber : function(input){
      if(!input) {  // false:  for null, undefined, NaN,'',0,false

         if(typeof input === 'undefined'){
            return 0
         } else if(input === null) {
            return 0
         } else if(input === {}){
            return 0
         }

      }

      return input
   },

   checkObject: function(object) {

      var validObject = {}
            for(var key in object){
               if(checkString(object[key]) != object[key] ){

                     validObject[key] = checkString(object[key])
               } else {
                  validObject[key] = object[key]
               }
            }
            return validObject
   }

  }


   function eachObject(object) {
     var validObject = {}
           for(var key in object){
             if(object[key] !={} && typeof object[key] == 'object' &&  object[key] != null){
             }else{
                      if(checkString(object[key]) != object[key] ){
                          validObject[key] = checkString(object[key])
                      } else {
                       validObject[key] = object[key]
                      }
               }
           }
           return validObject
  }

  function CheckBigObject(object) {
     var validObject = {}
      if(object != {}){
            for(var key in object){

               if(object[key] != {} && typeof object[key] == 'object' && object[key] != null){
                     validObject[key] = eachObject(object[key])
               }else{
                  if(checkString(object[key]) != object[key] ){
                      validObject[key] = checkString(object[key])
                  } else {
                   validObject[key] = object[key]
                  }
               }
            }
      }

      return validObject
 }


var Person = {
   name    : 'vikram',
   age     : 0,
   address : {
      street : 'Boston Road',
      Hno    : 8021
   },
   pNumber : null,
   bills  :{
      electric : 500,
      water    : null
   }
}

console.log("Replace all Null and undefined values ", CheckBigObject(Person));

  function checkString(string){

     if(!string) {  // false:  for null, undefined, NaN,'',0,false
       if(string == undefined){
          return 'n/a'
       } else if(string == null) {
          return 'null'
       } else if(string === {}){
          return 'n/a'
       }

     }

     return string
 }


module.exports = CheckNullType;
