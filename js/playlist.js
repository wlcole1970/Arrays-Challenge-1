var playList = [
	[ 'Habits', 'Mr. Kitty' ],
	[ 'Gegen Alles Bereit', ' Couch' ],
	[ 'Hearts and Minds', 'Nitzer Ebb' ],
	[ 'Smothered Hope', 'Skinny Puppy' ]
];

function print(message) {
	document.write(message);
}

function print(message) {
	document.write(message);
}

function printSongs(songs) {
	var listHTML = '<ol>';
	for (var i = 0; i < songs.length; i += 1) {
		// prints song and performer
		listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}

printSongs(playList);
