var seperator = /[\t\n\r]+/;
var field = [];
var data = [];

function paperParse(_content) {
    var content = _content.split(seperator);

    for (var i = 0; i < content.length; i++) {
    	if (content[i].length != 2) {
    		data = content.slice(i, content.length - 1);
    		break;
    	}
    	else {
    		field.push(content[i]);
    	}
    };

    console.log(field);
    console.log(data);
}