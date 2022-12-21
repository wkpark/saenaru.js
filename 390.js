(function() {
var keyboard_table_390 = {
    name: "3-390",
	desc: "세벌식 390",
	type: 3,
	table: [
		0x11bd,	/* exclam:	jongseong cieuc		*/
		0x0022,	/* quotedbl:	quotatioin mark		*/
		0x0023,	/* numbersign:	number sign		*/
		0x0024,	/* dollar:	dollar sign		*/
		0x0025,	/* percent:	percent sign		*/
		0x0026,	/* ampersand:	ampersand	 	*/
		0x1110,	/* apostrophe:	choseong thieuth	*/
		0x0028,	/* parenleft:	left parenthesis	*/
		0x0029,	/* parenright:	right parenthesis	*/
		0x002a,	/* asterisk:	asterisk		*/
		0x002b,	/* plus:	plus sign		*/
		0x002c,	/* comma:	comma			*/
		0x002d,	/* minus:	minus sign		*/
		0x002e,	/* period:	period			*/
		0x1169,	/* slash:	jungseong o		*/
		0x110f,	/* 0:		choseong  khieukh	*/
		0x11c2,	/* 1:		jongseong hieuh		*/
		0x11bb,	/* 2:		jongseong ssangsios	*/
		0x11b8,	/* 3:		jongseong pieup		*/
		0x116d,	/* 4:		jungseong yo		*/
		0x1172,	/* 5:		jungseong yu		*/
		0x1163,	/* 6:		jungseong ya		*/
		0x1168,	/* 7:		jungseong ye		*/
		0x1174,	/* 8:		jungseong yi		*/
		0x116e,	/* 9:		jungseong u		*/
		0x003a,	/* colon:	colon			*/
		0x1107,	/* semicolon:	choseong  pieup		*/
		0x0032,	/* less:	2			*/
		0x003d,	/* equal:	euals sign		*/
		0x0033,	/* greater:	3			*/
		0x003f,	/* question:	question mark	 	*/
		0x0040,	/* at:		commertial at		*/
		0x11ae,	/* A:		jongseong tikeut	*/
		0x0021,	/* B:		exclamation mark	*/
		0x11b1,	/* C:		jongseong rieul-mieum	*/
		0x11b0,	/* D:		jongseong rieul-kiyeok	*/
		0x11bf,	/* E:		jongseong khieukh	*/
		0x11a9,	/* F:		jongseong ssangkiyeok	*/
		0x002f,	/* G:		slash			*/
		0x0027,	/* H:		apostrophe		*/
		0x0038,	/* I:		8			*/
		0x0034,	/* J:		4			*/
		0x0035,	/* K:		5			*/
		0x0036,	/* L:		6			*/
		0x0031,	/* M:		1			*/
		0x0030,	/* N:		0			*/
		0x0039,	/* O:		9			*/
		0x003e,	/* P:		greater-than sign	*/
		0x11c1,	/* Q:		jongseong phieuph	*/
		0x1164,	/* R:		jungseong yae		*/
		0x11ad,	/* S:		jongseong nieun-hieuh	*/
		0x003b,	/* T:		semicolon		*/
		0x0037,	/* U:		7			*/
		0x11b6,	/* V:		jongseong rieul-hieuh	*/
		0x11c0,	/* W:		jongseong thikeuth	*/
		0x11b9,	/* X:		jongseong pieup-sios	*/
		0x003c,	/* Y:		less-than sign		*/
		0x11be,	/* Z:		jongseong chieuch	*/
		0x005b,	/* bracketleft:	left bracket		*/
		0x005c,	/* backslash:	backslash		*/
		0x005d,	/* bracketright:	right bracket	*/
		0x005e,	/* asciicircum:	circumflex accent	*/
		0x005f,	/* underscore:	underscore		*/
		0x0060,	/* quoteleft:	grave accent		*/
		0x11bc,	/* a:		jongseong ieung		*/
		0x116e,	/* b:		jungseong u		*/
		0x1166,	/* c:		jungseong e		*/
		0x1175,	/* d:		jungseong i		*/
		0x1167,	/* e:		jungseong yeo		*/
		0x1161,	/* f:		jungseong a		*/
		0x1173,	/* g:		jungseong eu		*/
		0x1102,	/* h:		choseong  nieun		*/
		0x1106,	/* i:		choseong  mieum		*/
		0x110b,	/* j:		choseong  ieung		*/
		0x1100,	/* k:		choseong  kiyeok	*/
		0x110c,	/* l:		choseong  cieuc		*/
		0x1112,	/* m:		choseong  hieuh		*/
		0x1109,	/* n:		choseong  sios		*/
		0x110e,	/* o:		choseong  chieuch	*/
		0x1111,	/* p:		choseong  phieuph	*/
		0x11ba,	/* q:		jongseong sios		*/
		0x1162,	/* r:		jungseong ae		*/
		0x11ab,	/* s:		jongseong nieun		*/
		0x1165,	/* t:		jungseong eo		*/
		0x1103,	/* u:		choseong  tikeut	*/
		0x1169,	/* v:		jungseong o		*/
		0x11af,	/* w:		jongseong rieul		*/
		0x11a8,	/* x:		jongseong kiyeok	*/
		0x1105,	/* y:		choseong  rieul		*/
		0x11b7,	/* z:		jongseong mieum		*/
		0x007b,	/* braceleft:	left brace		*/
		0x007c,	/* bar:		vertical line(bar)	*/
		0x007d,	/* braceright:	right brace		*/
		0x007e,	/* asciitilde:	tilde			*/
	]
};

if (typeof Saenaru === 'function') {
	Saenaru.prototype.keyboards["3-390"] = keyboard_table_390;
}

var init = function() {
	if (document.saenaru && typeof document.saenaru.keyboards["3-390"] === 'undefined') {
		document.saenaru.keyboards["3-390"] = keyboard_table_390;
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
