const editor = ace.edit('editor');
const preview = $('#preview');
var isExternalDSL = true;

$(() => {
	editor.session.setMode("ace/mode/jade");
	editor.setTheme("ace/theme/chrome");	
});

$(window).load(() => {
	setCurrentMode("Text");	
});

editor.getSession().on('change', () => {
	var html = isExternalDSL ? jade.compile(editor.getSession().getValue()) 
							 : editor.getSession().getValue();
	console.log(html());
	preview.html(html);
});

$("#internalDSL").click(function() {
	htmlMode();
	isExternalDSL = false;
});

$("#externalDSL").click(function() {
	jadeMode();
	isExternalDSL = true;
});

const jadeMode = () => {
	editor.session.setMode("ace/mode/jade");
	editor.setTheme("ace/theme/chrome");
	emptyEditorText();	
	setCurrentMode("Text");
}
const htmlMode = () => {
	editor.session.setMode("ace/mode/html");
	editor.setTheme("ace/theme/monokai");	
	emptyEditorText();
	setCurrentMode("HTML");
}
const emptyEditorText = () => editor.setValue("");
const setCurrentMode = (mode) => $("#mode").html("Editor mode: <b>" + mode + "</b>");