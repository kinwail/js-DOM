/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var nameGrab = document.getElementById('name1');

// console.log(nameGrab);

nameGrab.innerHTML = "Tay-Tay";



/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var positionGrab = document.getElementById('position2');

// console.log(positionGrab);

positionGrab.innerHTML ='Project Manager';


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var aliasGrab = document.getElementById('alias3');

aliasGrab.innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var verse = document.getElementsByClassName('profile');
var nameGrab = document.getElementsByClassName('name');
//console.log(verse)


for (var i =0; i<nameGrab.length;i++){
    // console.log(nameGrab[i])
    // console.log(verse[i])

    if (nameGrab[i].innerHTML === 'Prince'){
        verse[i].innerHTML = '"Purple Rain Something Something Something"'
    }
}


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

 for (i=0;i<nameGrab.length;i++){
    if (nameGrab[i].innerHTML === 'Bruce Lee'){
        verse[i].innerHTML = '"Having no limitation as limitation"'
    }
 }



/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliasFind = document.getElementsByClassName('alias')

// console.log(aliasFind[2]);

for (i=0;i<nameGrab.length;i++){
    if (nameGrab[i].innerHTML === 'Samuel L Jackson'){
    aliasFind[i].innerHTML = 'Ray Arnold (Jurassic Park)'
    }
}

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var name7 = document.createElement('div');
var nameAppend = document.getElementById('nameParent')

name7.innerHTML = 'Peter Griffin';
name7.style.textAlign ='center'
//console.log(name7);

nameAppend.appendChild(name7);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var alias8 = document.createElement('div');
var aliasAppend = document.getElementById('aliasParent');

alias8.innerHTML = 'Old Man Riverwalk';
alias8.style.textAlign ='center';

//console.log(alias8);

aliasAppend.appendChild(alias8);

//Final Boss
/*9. Create your own profile.*/

var name9 = document.createElement('div');
var name9Append = document.getElementsByClassName('block3 col-sm-4');

name9.innerHTML = 'Jasen Kaya';
name9.style.textAlign ='center';

//console.log(name9Append)

// name9Append.append(name9);