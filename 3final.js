(function() {
var keyboard_table_3final = {
    name: "3-final",
	desc: "세벌식",
	type: 3,
	table: [
		0x11a9,	/* exclam:	jongseong ssangkiyeok		*/
		0x00b7,	/* quotedbl:	middle dot 			*/
		0x11bd,	/* numbersign:	jognseong cieuc 		*/
		0x11b5,	/* dollar:	jongseong rieul-phieuph		*/
		0x11b4,	/* percent:	jongseong rieul-thieuth		*/
		0x201c,	/* ampersand:	left double quotation mark 	*/
		0x1110,	/* apostrophe:	choseong  thieuth		*/
		0x0027,	/* parenleft:	apostrophe			*/
		0x007e,	/* parenright:	Tilde				*/
		0x201d,	/* asterisk:	right double quotation mark	*/
		0x002b,	/* plus:	plus sign			*/
		0x002c,	/* comma:	comma				*/
		0x0029,	/* minus:	right parenthesis		*/
		0x002e,	/* period:	period				*/
		0x1169,	/* slash:	jungseong o			*/
		0x110f,	/* 0:		choseong  khieukh		*/
		0x11c2,	/* 1:		jongseong hieuh			*/
		0x11bb,	/* 2:		jongseong ssangsios		*/
		0x11b8,	/* 3:		jongseong pieup			*/
		0x116d,	/* 4:		jungseong yo			*/
		0x1172,	/* 5:		jungseong yu			*/
		0x1163,	/* 6:		jungseong ya			*/
		0x1168,	/* 7:		jungseong ye			*/
		0x1174,	/* 8:		jungseong yi			*/
		0x116e,	/* 9:		jungseong u			*/
		0x0034,	/* colon:	4				*/
		0x1107,	/* semicolon:	choseong  pieup			*/
		0x002c,	/* less:	comma				*/
		0x003e,	/* equal:	greater-than sign		*/
		0x002e,	/* greater:	period				*/
		0x0021,	/* question:	exclamation mark 		*/
		0x11b0,	/* at:		jongseong rieul-kiyeok		*/
		0x11ae,	/* A:		jongseong tikeut		*/
		0x003f,	/* B:		question mark			*/
		0x11bf,	/* C:		jongseong khieukh		*/
		0x11b2,	/* D:		jongseong rieul-pieup		*/
		0x11ac,	/* E:		jongseong nieun-cieuc		*/
		0x11b1,	/* F:		jongseong rieul-mieum		*/
		0x1164,	/* G:		jungseong yae			*/
		0x0030,	/* H:		0				*/
		0x0037,	/* I:		7				*/
		0x0031,	/* J:		1				*/
		0x0032,	/* K:		2				*/
		0x0033,	/* L:		3				*/
		0x0022,	/* M:		double quotation mark		*/
		0x002d,	/* N:		minus sign			*/
		0x0038,	/* O:		8				*/
		0x0039,	/* P:		9				*/
		0x11c1,	/* Q:		jongseong phieuph		*/
		0x11b6,	/* R:		jongseong rieul-hieuh		*/
		0x11ad,	/* S:		jongseong nieun-hieuh		*/
		0x11b3,	/* T:		jongseong rieul-sios		*/
		0x0036,	/* U:		6				*/
		0x11aa,	/* V:		jongseong kiyeok-sios		*/
		0x11c0,	/* W:		jongseong thikeuth		*/
		0x11b9,	/* X:		jongseong pieup-sios		*/
		0x0035,	/* Y:		5				*/
		0x11be,	/* Z:		jongseong chieuch		*/
		0x0028,	/* bracketleft:	left parenthesis		*/
		0x003a,	/* backslash:	colon				*/
		0x003c,	/* bracketright:	less-than sign		*/
		0x003d,	/* asciicircum:	equals sign			*/
		0x003b,	/* underscore:	semicolon			*/
		0x002a,	/* quoteleft:	asterisk			*/
		0x11bc,	/* a:		jongseong ieung			*/
		0x116e,	/* b:		jungseong u			*/
		0x1166,	/* c:		jungseong e			*/
		0x1175,	/* d:		jungseong i			*/
		0x1167,	/* e:		jungseong yeo			*/
		0x1161,	/* f:		jungseong a			*/
		0x1173,	/* g:		jungseong eu			*/
		0x1102,	/* h:		choseong  nieun			*/
		0x1106,	/* i:		choseong  mieum			*/
		0x110b,	/* j:		choseong  ieung			*/
		0x1100,	/* k:		choseong  kiyeok		*/
		0x110c,	/* l:		choseong  cieuc			*/
		0x1112,	/* m:		choseong  hieuh			*/
		0x1109,	/* n:		choseong  sios			*/
		0x110e,	/* o:		choseong  chieuch		*/
		0x1111,	/* p:		choseong  phieuph		*/
		0x11ba,	/* q:		jongseong sios			*/
		0x1162,	/* r:		jungseong ae			*/
		0x11ab,	/* s:		jongseong nieun			*/
		0x1165,	/* t:		jungseong eo			*/
		0x1103,	/* u:		choseong  tikeut		*/
		0x1169,	/* v:		jungseong o			*/
		0x11af,	/* w:		jongseong rieul			*/
		0x11a8,	/* x:		jongseong kiyeok		*/
		0x1105,	/* y:		choseong  rieul			*/
		0x11b7,	/* z:		jongseong mieum			*/
		0x0025,	/* braceleft:	percent sign			*/
		0x005c,	/* bar:		backslash			*/
		0x002f,	/* braceright:	slash				*/
		0x203b	/* asciitilde:	reference mark			*/
	]
};

if (typeof Saenaru === 'function') {
	Saenaru.prototype.keyboards["3-final"] = keyboard_table_3final;
}

var init = function() {
	if (document.saenaru && typeof document.saenaru.keyboards["3-final"] === 'undefined') {
		document.saenaru.keyboards["3-final"] = keyboard_table_3final;
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
