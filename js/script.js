var html = '';
var red;
var green;
var blue;
var rgbColor;

//starts a for loop to autopopulate the dots
for(x = 0; x < 2500; x++) {
red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';
}
document.write(html);