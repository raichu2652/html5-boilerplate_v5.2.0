var selectedFile = document.getElementById('file').addEventListener('change', fileRead, false);

function fileRead(event) {
    var file = event.target.files[0];

    if (file) {
        var r = new FileReader();
        r.onload = (function(f) {
            return function(e) {
                var content = e.target.result;
                paperParse(content, field, data);

                console.log(field);
                console.log(data);
            }
        })(file);

        r.readAsText(file);
    } else {
        alert("Failed to load files");
    }
}
