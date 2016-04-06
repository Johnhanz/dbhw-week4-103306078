var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=6e6d3151-70cd-4175-a97b-c1998368f792";
function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}

$(document).ready(function() {
      getData(function(err, data) {
        if(err) {
          console.log(err);
        } else {
          var policeList = data.result.results;
          var HTMLpoliceList = policeList.map(function(police) {
            var start = "<div class='col-md-4'>";
            var policeID = "<h2>"+police._id+"</h2>"+"<p>名稱："+police.name+"</p><p>隸屬於: "+police.content+"</p><p>地址："+police.display_addr+"</p>";
            var end = "<h3></h3>";
            var ContentString = start + policeID + end;
            return ContentString;
          });
          HTMLpoliceList.forEach(function(html) {
            $(html).appendTo("#content");
          });
        }
      });
    });
