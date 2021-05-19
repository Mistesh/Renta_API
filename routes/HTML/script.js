const connect = "http://localhost:2517/search/";

    function getajax()
    {
      console.log("GET");
      $.ajax({
        type: "GET",
        url: connect + document.getElementById('idGET').value,
        success: function(msg){
          if(msg.data.length == 0)
          {
            document.getElementById("mainImage").src = "https://pbs.twimg.com/profile_images/869582254024134656/kIxp_dGr_400x400.jpg";
            document.getElementById("description").style.display = "none";
            document.getElementById("type").style.display = "none";
            document.getElementById("name").style.display = "none";
            document.getElementById("name").innerHTML = "Лот не найден";
          }
          else
          {
          document.getElementById("mainImage").src = msg.data[0].image;
          document.getElementById("name").innerHTML = msg.data[0].name;
          document.getElementById("name").style.display = "inline";
          document.getElementById("description").innerHTML = "Описание товара: " + msg.data[0].description;
          document.getElementById("description").style.display = "inline";
          document.getElementById("type").innerHTML = "Тип товара: " + msg.data[0].type;
          document.getElementById("type").style.display = "inline";
          }
        }
      });
    }

    function postajax()
    {
      if(document.getElementById('idPOST').imageue == "")
      {
        document.getElementById('idPOST').classList.add("is-invalid");
        return;
      }
      else
      {
        document.getElementById('idPOST').classList.remove("is-invalid");
      }
      document.getElementById('idGET').value = document.getElementById('idPOST').value;
      var id = parseInt(document.getElementById('idPOST').value);
      $.ajax({
        type: "POST",
        url: connect,

        data: "id="+ id +"&name=" + document.getElementById('namePOST').value + "&description=" + document.getElementById('descriptionPOST').value + "&type="+ document.getElementById('typePOST').value + "&image=" + document.getElementById('imagePOST').value,
        success: function(msg){
          console.log(msg);
          if(msg == "id already exists")
          {
            document.getElementById("mainImage").src = "https://pbs.twimg.com/profile_images/869582254024134656/kIxp_dGr_400x400.jpg";
            document.getElementById("description").style.display = "none";
            document.getElementById("type").style.display = "none";
            document.getElementById("name").style.display = "inline";
            document.getElementById("name").innerHTML = "id уже существует";
          }
          else
          {
          getajax();
        }
        }
      });
    }

    function putajax()
    {
      console.log("PUT");
      if(document.getElementById('idPUT').value == "")
      {
        document.getElementById('idPUT').classList.add("is-invalid");
        return;
      }
      else
      {
        document.getElementById('idPUT').classList.remove("is-invalid");
      }
      document.getElementById('idGET').value = document.getElementById('idPUT').value;
      var id = parseInt(document.getElementById('idPUT').value);
      $.ajax({
        type: "PUT",
        url: connect + id,

        data: "id="+ id +"&name=" + document.getElementById('namePUT').value + "&description=" + document.getElementById('descriptionPUT').value + "&type="+ document.getElementById('typePUT').value + "&image=" + document.getElementById('imagePUT').value,
        success: function(msg){
          console.log(msg);
          if(msg == "id not founded")
          {
            document.getElementById("mainImage").src = "https://pbs.twimg.com/profile_images/869582254024134656/kIxp_dGr_400x400.jpg";
            document.getElementById("description").style.display = "none";
            document.getElementById("type").style.display = "none";
            document.getElementById("name").style.display = "inline";
            document.getElementById("name").innerHTML = "id не найден";
          }
          else
          {
          getajax();
        }
        }
      });
    }

    function deleteajax()
    {
      $.ajax({
        type: "DELETE",
        url: connect + document.getElementById('idDELETE').value,
        success: function(msg){
          console.log(msg);
          if(msg == "id not founded")
          {
        document.getElementById("mainImage").src = "https://pbs.twimg.com/profile_images/869582254024134656/kIxp_dGr_400x400.jpg";
        document.getElementById("description").style.display = "none";
        document.getElementById("type").style.display = "none";
        document.getElementById("name").style.display = "inline";
        document.getElementById("name").innerHTML = "id не найден";
          }
           if(msg == "DELETE ok")
          {
            document.getElementById("mainImage").src = "https://www.1c-kpd.ru/upload/iblock/18e/18eb559722eece1cd9fd2bbe6368c39d.png";
            document.getElementById("description").style.display = "none";
            document.getElementById("type").style.display = "none";
            document.getElementById("name").style.display = "inline";
            document.getElementById("name").innerHTML = "Удаление прошло успешно";
          }
        }
      });
    }


    $( ".target" ).change(function () {
      var str = "";
      $( "select option:selected" ).each(function() {
        if ($( this ).val()=="getP"){
          document.getElementById('formGet').style.display = "inline";
          document.getElementById('formPost').style.display = "none";
          document.getElementById('formPut').style.display = "none";
          document.getElementById('formDelete').style.display = "none";
        }
        else if ($( this ).val()=="postP"){
          document.getElementById('formGet').style.display = "none";
          document.getElementById('formPost').style.display = "inline";
          document.getElementById('formPut').style.display = "none";
          document.getElementById('formDelete').style.display = "none";
        }
        else if ($( this ).val()=="putP"){
          document.getElementById('formGet').style.display = "none";
          document.getElementById('formPost').style.display = "none";
          document.getElementById('formPut').style.display = "inline";
          document.getElementById('formDelete').style.display = "none";
        }
        else {
          document.getElementById('formGet').style.display = "none";
          document.getElementById('formPost').style.display = "none";
          document.getElementById('formPut').style.display = "none";
          document.getElementById('formDelete').style.display = "inline";
        }
      });
    });
