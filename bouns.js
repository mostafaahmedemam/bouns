function Function_click() {
    var title = document.getElementById("title").value;
    var subtitle = document.getElementById("subtitle").value;
    var author = document.getElementById("author").value;
    // var background_color = document.getElementById("background_color").value;
    var publisher = document.getElementById("publisher").value;
    var year = document.getElementById("year").value;
    document.getElementById("title_new").innerHTML = title;
    document.getElementById("subtitle_new").innerHTML =subtitle;
    document.getElementById("author_new").innerHTML =author;
    // document.getElementById("background_color_new").innerHTML =background_color;
    document.getElementById("publisher_new").innerHTML =publisher;
    document.getElementById("year_new").innerHTML =year;
    }


