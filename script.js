findMonth(){
    var month = document.getElementById('selectMonth').value;
    var getDay = document.getElementById('selectDay').value;
    if(month == January){
        var Capricorn = "hello";
        var Aquarius = "hello";
        for(var i = 1; i <= 19; i++);
            if(i == getDay){
                return Capricorn; //not a thing yet
            }
        for(var h = 20; h < 31; h++){
                if(i == getDay){
                    return Aquarius;
                }
        }
    }
    if(month == February){
        var Aquarius = "hello";
        var Pisces = "hello";
        for(var i = 1; i <= 18; i++);
        if(i == getDay){
            return Aquarius; //not a thing yet
        }
        for(var h = 19; h < 28; h++){
            if(i == getDay){
                return Pisces;
            }
        }
    }
    if(month == March){
        var Pisces = "hello";
        var Aries = "hello";
        for(var i = 1; i <= 20; i++);
        if(i == getDay){
            return Pisces; //not a thing yet
        }
        for(var h = 21; h < 31; h++){
            if(i == getDay){
                return Aries;
            }
        }
    }
    if(month == April){
        var Aries = "hello";
        var Taurus = "hello";
        for(var i = 1; i <= 19; i++);
        if(i == getDay){
            return Aries; //not a thing yet
        }
        for(var h = 20; h < 30; h++){
            if(i == getDay){
                return Taurus;
            }
        }
    }
    if(month == May){
        var Capricorn = "hello";
        var Gemini = "hello";
        for(var i = 1; i <= 20; i++);
        if(i == getDay){
            return Capricorn; //not a thing yet
        }
        for(var h = 21; h < 31; h++){
            if(i == getDay){
                return Gemini;
            }
        }
    }
    if(month == June){
        var Gemini = "hello";
        var Cancer = "hello";
        for(var i = 1; i <= 20; i++);
        if(i == getDay){
            return Gemini; //not a thing yet
        }
        for(var h = 21; h < 30; h++){
            if(i == getDay){
                return Cancer;
            }
        }
    }
    if(month == July){
        var Cancer = "hello";
        var Leo = "hello";
        for(var i = 1; i <= 22; i++);
        if(i == getDay){
            return Cancer; //not a thing yet
        }
        for(var h = 23; h < 31; h++){
            if(i == getDay){
                return Leo;
            }
        }
    }
    if(month == August){
        var Leo = "hello";
        var Virgo = "hello";
        for(var i = 1; i <= 22; i++);
        if(i == getDay){
            return Leo; //not a thing yet
        }
        for(var h = 23; h < 31; h++){
            if(i == getDay){
                return Virgo;
            }
        }
    }
    if(month == September){
        var Virgo = "hello";
        var Libra = "hello";
        for(var i = 1; i <= 22; i++);
        if(i == getDay){
            return Virgo; //not a thing yet
        }
        for(var h = 23; h < 30; h++){
            if(i == getDay){
                return Libra;
            }
        }
    }
    if(month == October){
        var Libra = "hello";
        var Scorpio = "hello";
        for(var i = 1; i <= 22; i++);
        if(i == getDay){
            return Libra; //not a thing yet
        }
        for(var h = 23; h < 31; h++){
            if(i == getDay){
                return Scorpio;
            }
        }
    }
    if(month == November){
        var Scorpio = "hello";
        var Sagittarius = "hello";
        for(var i = 1; i <= 21; i++);
        if(i == getDay){
            return Scorpio; //not a thing yet
        }
        for(var h = 22; h < 30; h++){
            if(i == getDay){
                return Sagittarius;
            }
        }
    }
    if(month == December){
        var Sagittarius = "hello";
        var Capricorn = "hello";
        for(var i = 1; i <= 21; i++);
        if(i == getDay){
            return Sagittarius; //not a thing yet
        }
        for(var h = 22; h < 31; h++){
            if(i == getDay){
                return Capricorn;
            }
        }
    }
}

function findHoroscope(){
    findMonth();
}

// if(selectMonth.value == January){
//     return "What day of January were you born in?";
// }
// if(selectMonth.value == March){
//     return "What day of March were you born in?";
// }
// if(selectMonth.value == May){
//     return "What day of May were you born in?";
// }
// if(selectMonth.value == August){
//     return "What day of August were you born in?";
// }
// if(selectMonth.value == October){
//     return "What day of Octoberwere you born in?";
// }
// if(selectMonth.value == December){
//     return "What day of Decemberwere you born in?";
// }