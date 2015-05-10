var selectedFile = document.getElementById('file').addEventListener('change', fileRead, false);
var text = document.getElementById('text');

function fileRead(evt) {
    var files = evt.target.files;

    if (files) {
        for (var i = 0, f; f = files[i]; i++) {
            var r = new FileReader();
            r.onload = (function(f) {
                return function(e) {
                    var contents = e.target.result;
                    console.log(contents);
                };
            })(f);

            r.readAsText(f);
        }
    } else {
        alert("Failed to load files");
    }
}
