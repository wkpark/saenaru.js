/* from Nabi keyboard
 * 옛한글 세벌식 자판
 */
(function() {
var keyboard_table_3yet = {
	name: "3-yet",
	type: 3,
	desc: "옛한글 세벌",
	table: [
		0x11bd, /* exclam:	jongseong cieuc		*/
		0x0022, /* quotedbl:	quotatioin mark		*/
		0x0023, /* numbersign:	number sig		*/
		0x0024, /* dollar:	dollar sign		*/
		0x0025, /* percent:	percent sign		*/
		0x0026, /* ampersand:	ampersand		*/
		0x1110, /* apostrophe:	choseong thieuth	*/
		0x0028, /* parenleft:	left parenthesis	*/
		0x0029, /* parenright:	right parenthesis	*/
		0x002a, /* asterisk:	asterisk		*/
		0x002b, /* plus:	plus sign		*/
		0x002c, /* comma:	comma			*/
		0x002d, /* minus:	minus sign		*/
		0x002e, /* period:	period			*/
		0x1169, /* slash:	jungseong o		*/
		0x110f, /* 0:		choseong  khieukh	*/
		0x11c2, /* 1:		jongseong hieuh		*/
		0x11bb, /* 2:		jongseong ssangsios	*/
		0x11b8, /* 3:		jongseong pieup		*/
		0x116d, /* 4:		jungseong yo		*/
		0x1172, /* 5:		jungseong yu		*/
		0x1163, /* 6:		jungseong ya		*/
		0x1168, /* 7:		jungseong ye		*/
		0x1174, /* 8:		jungseong yi		*/
		0x116e, /* 9:		jungseong u		*/
		0x003a, /* colon:	colon			*/
		0x1107, /* semicolon:	choseong  pieup		*/
		0x113c, /* less:	choseong chitueumsios	*/
		0x003d, /* equal:	euals sign		*/
		0x113e, /* greater:	choseong ceongchieumsios */
		0x003f, /* question:	question mark		*/
		0x11eb, /* at:		jongseong pansios	*/
		0x11ae, /* A:		jongseong tikeut	*/
		0x116e, /* B:		jungseong u		*/
		0x11b1, /* C:		jongseong rieul-mieum	*/
		0x11b0, /* D:		jongseong rieul-kiyeok	*/
		0x11bf, /* E:		jongseong khieukh	*/
		0x11a9, /* F:		jongseong ssangkiyeok	*/
		0x119e, /* G:		jungseong araea		*/
		0x1102, /* H:		choseong nieun		*/
		0x1154, /* I:		choseong chitueumchieuch */
		0x114c, /* J:		choseong yesieung	*/
		0x114e, /* K:		choseong chitueumcieuc	*/
		0x1150, /* L:		choseong ceongchieumcieuc */
		0x1159, /* M:		choseong yeorinhieuh	*/
		0x1140, /* N:		choseong pansios	*/
		0x1155, /* O:		choseong ceongchieumchieuch */
		0x1111, /* P:		choseong phieuph	*/
		0x11c1, /* Q:		jongseong phieuph	*/
		0x1164, /* R:		jungseong yae		*/
		0x11ad, /* S:		jongseong nieun-hieuh	*/
		0x1165, /* T:		jungseong eo		*/
		0x302e, /* U:		single dot tone mark	*/
		0x11b6, /* V:		jongseong rieul-hieuh	*/
		0x11c0, /* W:		jongseong thikeuth	*/
		0x11b9, /* X:		jongseong pieup-sios	*/
		0x302f, /* Y:		double dot tone mark	*/
		0x11be, /* Z:		jongseong chieuch	*/
		0x005b, /* bracketleft:	left bracket		*/
		0x005c, /* backslash:	backslash		*/
		0x005d, /* bracketright:	right bracket	*/
		0x005e, /* asciicircum:	circumflex accent	*/
		0x005f, /* underscore:	underscore		*/
		0x11f9, /* quoteleft:	jongseong yeorinhieuh	*/
		0x11bc, /* a:		jongseong ieung		*/
		0x116e, /* b:		jungseong u		*/
		0x1166, /* c:		jungseong e		*/
		0x1175, /* d:		jungseong i		*/
		0x1167, /* e:		jungseong yeo		*/
		0x1161, /* f:		jungseong a		*/
		0x1173, /* g:		jungseong eu		*/
		0x1102, /* h:		choseong  nieun		*/
		0x1106, /* i:		choseong  mieum		*/
		0x110b, /* j:		choseong  ieung		*/
		0x1100, /* k:		choseong  kiyeok	*/
		0x110c, /* l:		choseong  cieuc		*/
		0x1112, /* m:		choseong  hieuh		*/
		0x1109, /* n:		choseong  sios		*/
		0x110e, /* o:		choseong  chieuch	*/
		0x1111, /* p:		choseong  phieuph	*/
		0x11ba, /* q:		jongseong sios		*/
		0x1162, /* r:		jungseong ae		*/
		0x11ab, /* s:		jongseong nieun		*/
		0x1165, /* t:		jungseong eo		*/
		0x1103, /* u:		choseong  tikeut	*/
		0x1169, /* v:		jungseong o		*/
		0x11af, /* w:		jongseong rieul		*/
		0x11a8, /* x:		jongseong kiyeok	*/
		0x1105, /* y:		choseong  rieul		*/
		0x11b7, /* z:		jongseong mieum		*/
		0x007b, /* braceleft:	left brace		*/
		0x007c, /* bar:		vertical line(bar)	*/
		0x007d, /* braceright:	right brace		*/
		0x11f0  /* asciitilde:	jongseong yesieung	*/
	]
};

if (typeof Saenaru === 'function') {
	Saenaru.prototype.keyboards["3-yet"] = keyboard_table_3yet;
}

var init = function() {
	if (document.saenaru) {
		if (typeof document.saenaru.keyboards["3-yet"] === 'undefined')
			document.saenaru.keyboards["3-yet"] = keyboard_table_3yet;
		document.saenaru.setKeyboard();
		document.saenaru.setStatus();
	}
}

if (document.readyState == 'complete') {
	init();
} else if (window.addEventListener) {
	window.addEventListener('load', init, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', init);
}

})();
