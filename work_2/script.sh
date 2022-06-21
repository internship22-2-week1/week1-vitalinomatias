#!/bin/bash
proyecto=$1
mensaje=$2
if [ -d "$proyecto" ]
then
    echo "Ya existe un directorio con ese nombre"
else
    mkdir $proyecto
    cd $proyecto
    mkdir assets
    cd assets
    mkdir css
    mkdir img
    mkdir js
    cd css
    css="style.css"
    echo "body{" >> $css
    echo "        background-color: #2b388f;" >> $css
    echo "        display: grid;" >> $css
    echo "        place-items: center;" >> $css
    echo "    }" >> $css
    echo "    h2{" >> $css
    echo "        color: #fff" >> $css
    echo "    }" >> $css
    cd ../..
    html="index.html"
    echo "<!DOCTYPE html>" >> $html
    echo '<html lang="en">' >> $html
    echo "<head>" >> $html
    echo '    <meta charset="UTF-8">' >> $html
    echo '    <meta http-equiv="X-UA-Compatible" content="IE=edge">' >> $html
    echo '    <meta name="viewport" content="width=device-width, initial-scale=1.0">' >> $html
    echo "    <title>Scripting</title>" >> $html
    echo '    <link rel="stylesheet" href="assets/css/style.css">' >> $html
    echo "</head>" >> $html
    echo "<body>" >> $html
    echo "    <h2>$mensaje</h2>" >> $html
    echo "</body>" >> $html
    echo "</html>" >> $html
    git init
    git add . 
    git commit -m "first commit"
    firefox index.html
fi
