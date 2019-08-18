document.getElementById('button').addEventListener('click', loadQuotes);

    // Load Quotes
    function loadQuotes() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://thatsthespir.it/api', true);

      xhr.onreadystatechange  = function () {
        if (this.readyState === 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          if (response.photo == ""){
          var output =
            '<div class="quote">' +
            '<H1> ' + response.quote + '</H1>' +
            '<H3> ' + "-" + response.author + '</H3>' ;
          '</div>';}
          else {
            var output =
            '<div class="quote">' +
            '<H1> ' + response.quote + '</H1>' +
            '<H3> ' + "-" + response.author + '</H3>' +
            '<img src="' + response.photo + '"width="150" height="150" >';
          '</div>';
          }


          function random_bg_color() {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            console.log(bgColor);

            document.body.style.background = bgColor;
          }

          random_bg_color();

          document.getElementById('quote').innerHTML = output;
        }
      }


      xhr.send();

    }