// header, footer를 위한 js 파일입니다! 여기말고 다른 js파일을 만들어서 작업해주세요~
$('body')
.prepend('<header></header>')
.append('<footer></footer>');

$('header').load('incom.html header >div');
$('footer').load('incom.html footer >div');