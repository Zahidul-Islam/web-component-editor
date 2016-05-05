var editor = ace.edit('editor');
editor.session.setMode("ace/mode/html");
editor.setTheme("ace/theme/monokai");


var preview = $('#preview');

editor.getSession().on('change', function(){
	preview.html(editor.getSession().getValue());
});