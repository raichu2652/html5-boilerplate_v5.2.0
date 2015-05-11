var selectedFile = document.getElementById('file').addEventListener('change', fileRead, false);

function fileRead(event) {
    var file = event.target.files[0];

    if (file) {
        var r = new FileReader();
        r.onload = (function(f) {
            return function(e) {
                var contents = e.target.result;
                paperParse(contents);
            }
        })(file);

        r.readAsText(file);
    } else {
        alert("Failed to load files");
    }
}
