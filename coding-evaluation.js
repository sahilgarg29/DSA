//-------- Problem 1 -----------

var circle = {

    radius: 10,

    perimeter: function(){
        return (2 * Math.PI * this.radius);
    },

    area: function(){
        return Math.PI * (this.radius * this.radius);
    }
}

console.log(circle.area());
console.log(circle.perimeter());

//------------ End Problem 1 --------------



//------------ Start Problem 2 --------------

var UserGender = {
    data: [],

    addUser: function(name, gender){
        var user = {}
        user.name = name;
        user.gender = gender

        this.data.push(user);
    },

    totalUsersOfGender: function(gender){
        var count = 0;
        for(var i = 0; i < this.data.length; i++){
            var user = this.data[i];
            if(user["gender"] === gender){
                count++;
            }
        }

        return count;
    },

    genderOf: function(name){
        for(var i = 0; i < this.data.length; i++){
            var user = this.data[i];
            if(user["name"] === name){
                return user["gender"];
            }
        }

        return "NA";
    }
    
}

UserGender.addUser("Sahil", "M");
UserGender.addUser("ashish", "M");
UserGender.addUser("neha", "F");

console.log("Total users - " + UserGender.totalUsersOfGender('M'));
console.log("Gender of User - "  + UserGender.genderOf("neha"));

//------------ End Problem 2 --------------

//------------ Start Problem 3 --------------
function toLowerCase(str){
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var newStr = ""

    for(var i =0; i < str.length; i++){
        var isInUpperCase = false;
        for(var j = 0; j < upper.length; j++){
            if(str[i] === upper[j]){
                newStr += lower[j]
                isInUpperCase = true;
                break; 
            }
        }
        if(!isInUpperCase){
            newStr += str[i];
        }
    }

    return newStr;
}


function includes(str, searchStr){
    str = toLowerCase(str);
    searchStr = toLowerCase(searchStr);

    for(var i = 0; i <= str.length - searchStr.length; i++){
        if(str[i] === searchStr[0]){
            var flag = true;
            for(var j = 0; j < searchStr.length; j++){
                if(str[i+j] !== searchStr[j]){
                    flag = false;
                    break;
                }
            }
        }

        if(flag){
            return true;
        }
    }

    return false;
}


console.log(includes("MASAI SCHOOL", "hoo"));
console.log(includes("MASAI SCHOOL", "aas"));

//------------ End Problem 3 --------------
