/* this file is a keyboard map from Nabi
 * 아래아한글 옛한글 두벌식 자판 + 방점(M ., 콜론에 :)
 */
(function() {
var keyboard_table_2yet = {
	name: "2-yet",
	type: 2,
	desc: "옛한글 두벌",
	compose: "full",
	table: [
		0x0021,	/* exclam:	exclamation mark	*/
		0x0022,	/* quotedbl:	quotation mark 		*/
		0x0023,	/* numbersign:	number sign	 	*/
		0x0024,	/* dollar:	dollar sign		*/
		0x0025,	/* percent:	percent sign		*/
		0x0026,	/* ampersand:	ampersand		*/
		0x0027,	/* apostrophe:	apostrophe		*/
		0x0028,	/* parenleft:	left parenthesis	*/
		0x0029,	/* parenright:	right parenthesis	*/
		0x002a,	/* asterisk:	asterisk		*/
		0x002b,	/* plus:	plus sign		*/
		0x002c,	/* comma:	comma			*/
		0x002d,	/* minus:	minus sign		*/
		0x002e,	/* period:	period			*/
		0x002f,	/* slash:	slash			*/
		0x0030,	/* 0:		0			*/
		0x0031,	/* 1:		1			*/
		0x0032,	/* 2:		2			*/
		0x0033,	/* 3:		3			*/
		0x0034,	/* 4:		4			*/
		0x0035,	/* 5:		5			*/
		0x0036,	/* 6:		6			*/
		0x0037,	/* 7:		7			*/
		0x0038,	/* 8:		8			*/
		0x0039,	/* 9:		9			*/
		0x302F, /* colon:	방점 :			*/
		0x003b,	/* semicolon:	semicolon		*/
		0x003c,	/* less:	less-than sign		*/
		0x003d,	/* equal:	equals sign		*/
		0x003e,	/* greater:	greater-than sign	*/
		0x003f,	/* question:	question mark	 	*/
		0x0040,	/* at:		commercial at		*/
		0x1140, /* A:	ㅿ				*/
		0x1154, /* B:	ᅔ				*/
		0x114e, /* C:	ᅎ				*/
		0x114c, /* D:	ㆁ				*/
		0x1104, /* E:	choseong ssangtikeut		*/
		0x111a, /* F:	ㅀ				*/
		0x1159, /* G:	ㆆ				*/
		0x1183, /* H:	ㅗ+ㅜ				*/
		0x1163, /* I:	jungseong ya			*/
		0x1160, /* J:	중성 Fill			*/
		0x119E, /* K:	araea				*/
		0x1194, /* L:   ㆌ				*/
		0x302E, /* M:	방점				*/
		0x1155, /* N:	ᅕ				*/
		0x1164, /* O:	jungseong yae			*/
		0x1168, /* P:	jungseong ye			*/
		0x1108, /* Q:	choseong ssangpieup		*/
		0x1101, /* R:	choseong ssangkiyeok		*/
		0x115d, /* S:	ㄴㅎ				*/
		0x110A, /* T:	choseong ssangsios		*/
		0x1167, /* U:	jungseong yeo			*/
		0x1150, /* V:	ᅐ				*/
		0x110D, /* W:	choseong ssangcieuc		*/
		0x113e, /* X:	ᄾ				*/
		0x116D, /* Y:	jungseong yo			*/
		0x113c, /* Z:	ᄼ				*/
		0x005B, /* bracketleft:	left bracket		*/
		0x005C, /* backslash:	backslash		*/
		0x005D, /* bracketright:	right bracket	*/
		0x005E, /* asciicircum:	circumflex accent	*/
		0x005F, /* underscore:	underscore		*/
		0x0060, /* quoteleft:	grave accent		*/
		0x1106, /* a:	choseong mieum			*/
		0x1172, /* b:	jungseong yu			*/
		0x110E, /* c:	choseong chieuch		*/
		0x110B, /* d:	choseong ieung			*/
		0x1103, /* e:	choseong tikeut			*/
		0x1105, /* f:	choseong rieul			*/
		0x1112, /* g:	choseong hieuh			*/
		0x1169, /* h:	jungseong o			*/
		0x1163, /* i:	jungseong ya			*/
		0x1165, /* j:	jungseong eo			*/
		0x1161, /* k:	jungseong a			*/
		0x1175, /* l:	jungseong I			*/
		0x1173, /* m:	jungseong eu			*/
		0x116E, /* n:	jungseong u			*/
		0x1162, /* o:	jungseong ae			*/
		0x1166, /* p:	jungseong e			*/
		0x1107, /* q:	choseong pieup			*/
		0x1100, /* r:	choseong kiyeok			*/
		0x1102, /* s:	choseong nieun			*/
		0x1109, /* t:	choseong sios			*/
		0x1167, /* u:	jungseong yeo			*/
		0x1111, /* v:	choseong phieuph		*/
		0x110C, /* w:	choseong cieuc			*/
		0x1110, /* x:	choseong thieuth		*/
		0x116D, /* y:	jungseong yo			*/
		0x110F  /* z:	choseong khieukh		*/
	]
};

if (typeof Saenaru === 'function') {
	Saenaru.prototype.keyboards["2-yet"] = keyboard_table_2yet;
}

var init = function() {
	if (document.saenaru) {
		if (typeof document.saenaru.keyboards["2-yet"] === 'undefined')
			document.saenaru.keyboards["2-yet"] = keyboard_table_2yet;
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
