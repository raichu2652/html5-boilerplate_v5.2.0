var seperator = /[\t\n\r]+/;
var field = [];
var data = [];

/*
Parse raw data into two parts, field and data.
field is an array of fields described in raw data file.
data is an array of strings contains corresponding values of each field.
*/
function paperParse(_content, field, data) {
    var content = _content.split(seperator);

    for (var i = 0; i < content.length; i++) {
        if (content[i].length == 2) {
            field.push(content[i]);
        } else {
            data.push(content[i]);
        }
    }
}
