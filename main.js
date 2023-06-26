import { GetGeolocation } from "./GeoLocation.js";

const coords = {latitude:0, longitude:0, accuracy:0}
const sid = document.getElementById("sid");
const information = document.getElementById("information");

document.getElementById("get_coords")
.addEventListener("click",()=>{
    GetGeolocation()
    .then((_coords)=>{
        coords.latitude = _coords.latitude;
        coords.longitude = _coords.longitude;
        coords.accuracy = _coords.accuracy;
        
        information.innerHTML = `緯度：${coords.latitude}<br>経度：${coords.longitude}<br>精度：${coords.accuracy}`;
    })
    .catch((e)=>{
        alert(e);
    });
});


const form = document.createElement("form");
form.id = "form";
form.action = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5nWT_W0NpFLN23_r8PJ18fFvRaR9R2aPEMgVf9P6UUdIH0w/formResponse";
form.method="post";

const input1 = document.createElement("input");
input1.type = "text";
input1.name = "entry.1569490815";
const input2 = document.createElement("input");
input2.type = "text";
input2.name = "entry.1947783526";
const input3 = document.createElement("input");
input3.type = "text";
input3.name = "entry.1825285323";
const input4 = document.createElement("input");
input4.type = "text";
input4.name = "entry.1799262152";
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);
form.appendChild(input4);


document.getElementById("submit")
.addEventListener("click",()=>{
    if(sid.value == ""){
        alert("空欄");
        return;
    }
    
    input1.value = sid.value;
    input2.value = coords.latitude;
    input3.value = coords.longitude;
    input4.value = coords.accuracy;
    
    $.ajax({
        url: $(form).attr('action'),
        data: $(form).serialize(),
        type: 'POST',
        dataType: 'xml',
        statusCode: {
            0: function() {
                //成功した際の処理を書きます。
                alert("成功");
            },
            200: function() {
                //成功した際の処理を書きます。
                alert("成功");
            }
        }
    });
});


