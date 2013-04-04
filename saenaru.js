/**
 * Saenaru Javascript Hangul Input Method by wkpark at gmail.com
 * 2013/03/25
 * License: GPLv2
 */

var Saenaru = function() {};

Saenaru.prototype = {
    _q: [],
	ic: { lcon:0, mvow:0, fcon:0 },
	mode: 'ko',
	timestamp: 0,
	ctiming: 500,
	wordmode: false, /* Word editing mode */

	compose_table: null,
	compstr: "",
	laststr: "",
	kbd: "2-set",
	composemap: "2-set",
	kbdtbl: null,
	keyboards: {},
	composemaps: {},

	setComposeMap: function(name) {
		this.compose_table = {}; // reset
		var map = this.composemaps[name];
		for (var i = 0; i < map.compose.length; i++) {
			if (map.compose[i][0] == "#") continue;
			var tmp = map.compose[i].split("\t", 4);
			if (tmp.length < 3) continue;
			var k1 = parseInt(tmp[0], 16), k2 = parseInt(tmp[1], 16), v = parseInt(tmp[2], 16);
			this.compose_table[k1 << 16 | k2] = v;
		}
		this.composemap = name;
	},

	setup: function(mode) {
		this.mode = mode;
	},

	lcon_to_cjamo: function(ch) {
		var table = [
			0x3131,		/* 0x1100 */
			0x3132,		/* 0x1101 */
			0x3134,		/* 0x1102 */
			0x3137,		/* 0x1103 */
			0x3138,		/* 0x1104 */
			0x3139,		/* 0x1105 */
			0x3141,		/* 0x1106 */
			0x3142,		/* 0x1107 */
			0x3143,		/* 0x1108 */
			0x3145,		/* 0x1109 */
			0x3146,		/* 0x110a */
			0x3147,		/* 0x110b */
			0x3148,		/* 0x110c */
			0x3149,		/* 0x110d */
			0x314a,		/* 0x110e */
			0x314b,		/* 0x110f */
			0x314c,		/* 0x1110 */
			0x314d,		/* 0x1111 */
			0x314e		/* 0x1112 */
		];
		if (ch < 0x1100 || ch > 0x1112) {
			if (ch == 0x1140)
				return 0x317f;
			else if (ch == 0x114C)
				return 0x3181;
			else if (ch == 0x1159)
				return 0x3186;
			return ch;
		}
		return table[ch - 0x1100];
	},
	mvow_to_cjamo: function(ch) {
		var table = [
			0x314f,		/* 0x1161 */
			0x3150,		/* 0x1162 */
			0x3151,		/* 0x1163 */
			0x3152,		/* 0x1164 */
			0x3153,		/* 0x1165 */
			0x3154,		/* 0x1166 */
			0x3155,		/* 0x1167 */
			0x3156,		/* 0x1168 */
			0x3157,		/* 0x1169 */
			0x3158,		/* 0x116a */
			0x3159,		/* 0x116b */
			0x315a,		/* 0x116c */
			0x315b,		/* 0x116d */
			0x315c,		/* 0x116e */
			0x315d,		/* 0x116f */
			0x315e,		/* 0x1170 */
			0x315f,		/* 0x1171 */
			0x3160,		/* 0x1172 */
			0x3161,		/* 0x1173 */
			0x3162,		/* 0x1174 */
			0x3163		/* 0x1175 */
		];
		if (ch < 0x1161 || ch > 0x1175) {
			if (ch == 0x119E)
				return 0x318D;
			return ch;
		}
		return table[ch - 0x1161];
	},

	fcon_to_cjamo: function(ch) {
		var table = [
			0x3131,		/* 0x11a8 */
			0x3132,		/* 0x11a9 */
			0x3133,		/* 0x11aa */
			0x3134,		/* 0x11ab */
			0x3135,		/* 0x11ac */
			0x3136,		/* 0x11ad */
			0x3137,		/* 0x11ae */
			0x3139,		/* 0x11af */
			0x313a,		/* 0x11b0 */
			0x313b,		/* 0x11b1 */
			0x313c,		/* 0x11b2 */
			0x313d,		/* 0x11b3 */
			0x313e,		/* 0x11b4 */
			0x313f,		/* 0x11b5 */
			0x3140,		/* 0x11b6 */
			0x3141,		/* 0x11b7 */
			0x3142,		/* 0x11b8 */
			0x3144,		/* 0x11b9 */
			0x3145,		/* 0x11ba */
			0x3146,		/* 0x11bb */
			0x3147,		/* 0x11bc */
			0x3148,		/* 0x11bd */
			0x314a,		/* 0x11be */
			0x314b,		/* 0x11bf */
			0x314c,		/* 0x11c0 */
			0x314d,		/* 0x11c1 */
			0x314e		/* 0x11c2 */
		];
		if (ch < 0x11a8 || ch > 0x11c2) {
			if (ch == 0x11EB)
				return 0x317f;
			else if (ch == 0x11F0)
				return 0x3181;
			else if (ch == 0x11F9)
				return 0x3186;
			return ch;
		}
		return table[ch - 0x11a8];
	},

	lcon_to_fcon: function(ch) {
		var table = [
			0x11a8,	/* choseong kiyeok	-> jongseong kiyeok	 */
			0x11a9,	/* choseong ssangkiyeok	-> jongseong ssangkiyeok */
			0x11ab,	/* choseong nieun	-> jongseong nieun	 */
			0x11ae,	/* choseong tikeut	-> jongseong tikeut	 */
			0x0,	/* choseong ssangtikeut	-> jongseong tikeut	 */
			0x11af,	/* choseong rieul	-> jongseong rieul	 */
			0x11b7,	/* choseong mieum	-> jongseong mieum	 */
			0x11b8,	/* choseong pieup	-> jongseong pieup	 */
			0x0,	/* choseong ssangpieup	-> jongseong pieup	 */
			0x11ba,	/* choseong sios	-> jongseong sios	 */
			0x11bb,	/* choseong ssangsios	-> jongseong ssangsios	 */
			0x11bc,	/* choseong ieung	-> jongseong ieung	 */
			0x11bd,	/* choseong cieuc	-> jongseong cieuc	 */
			0x0,	/* choseong ssangcieuc	-> jongseong cieuc	 */
			0x11be,	/* choseong chieuch	-> jongseong chieuch	 */
			0x11bf,	/* choseong khieukh	-> jongseong khieukh	 */
			0x11c0,	/* choseong thieuth	-> jongseong thieuth	 */
			0x11c1,	/* choseong phieuph	-> jongseong phieuph	 */
			0x11c2	/* choseong hieuh	-> jongseong hieuh	 */
		];
		if (ch < 0x1100 || ch > 0x1112)
			return 0;
		return table[ch - 0x1100];
	},
	fcon_to_lcon: function(ch) {
		var table = [
			0x1100,	/* jongseong kiyeok		-> choseong kiyeok	 */
			0x1101,	/* jongseong ssangkiyeok	-> choseong ssangkiyeok	 */
			0x1109,	/* jongseong kiyeok-sios	-> choseong sios	 */
			0x1102,	/* jongseong nieun		-> choseong nieun	 */
			0x110c,	/* jongseong nieun-cieuc	-> choseong cieuc	 */
			0x1112,	/* jongseong nieun-hieuh	-> choseong hieuh	 */
			0x1103,	/* jongseong tikeut		-> choseong tikeut	 */
			0x1105,	/* jongseong rieul		-> choseong rieul	 */
			0x1100,	/* jongseong rieul-kiyeok	-> choseong kiyeok	 */
			0x1106,	/* jongseong rieul-mieum	-> choseong mieum	 */
			0x1107,	/* jongseong rieul-pieup	-> choseong pieup	 */
			0x1109,	/* jongseong rieul-sios		-> choseong sios	 */
			0x1110,	/* jongseong rieul-thieuth	-> choseong thieuth	 */
			0x1111,	/* jongseong rieul-phieuph	-> choseong phieuph	 */
			0x1112,	/* jongseong rieul-hieuh	-> choseong hieuh	 */
			0x1106,	/* jongseong mieum		-> choseong mieum	 */
			0x1107,	/* jongseong pieup		-> choseong pieup	 */
			0x1109,	/* jongseong pieup-sios		-> choseong sios	 */
			0x1109,	/* jongseong sios		-> choseong sios	 */
			0x110a,	/* jongseong ssangsios		-> choseong ssangsios	 */
			0x110b,	/* jongseong ieung		-> choseong ieung	 */
			0x110c,	/* jongseong cieuc		-> choseong cieuc	 */
			0x110e,	/* jongseong chieuch		-> choseong chieuch	 */
			0x110f,	/* jongseong khieukh		-> choseong khieukh	 */
			0x1110,	/* jongseong thieuth		-> choseong thieuth	 */
			0x1111,	/* jongseong phieuph		-> choseong phieuph	 */
			0x1112	/* jongseong hieuh		-> choseong hieuh	 */
		];
		if (ch < 0x11a8 || ch > 0x11c2)
			return 0;
		return table[ch - 0x11a8];
	},

	fcon_dicompose: function(ch) {
		var table = [
			[ 0,	  0x1100 ], /* jong kiyeok	  = cho  kiyeok			*/
			[ 0x11a8, 0x1100 ], /* jong ssangkiyeok	  = jong kiyeok + cho kiyeok	*/
			[ 0x11a8, 0x1109 ], /* jong kiyeok-sios	  = jong kiyeok + cho sios	*/
			[ 0,	  0x1102 ], /* jong nieun	  = cho  nieun			*/
			[ 0x11ab, 0x110c ], /* jong nieun-cieuc	  = jong nieun	+ cho cieuc	*/
			[ 0x11ab, 0x1112 ], /* jong nieun-hieuh	  = jong nieun	+ cho hieuh	*/
			[ 0,	  0x1103 ], /* jong tikeut	  = cho  tikeut			*/
			[ 0,	  0x1105 ], /* jong rieul	  = cho  rieul			*/
			[ 0x11af, 0x1100 ], /* jong rieul-kiyeok  = jong rieul	+ cho kiyeok	*/
			[ 0x11af, 0x1106 ], /* jong rieul-mieum	  = jong rieul	+ cho mieum	*/
			[ 0x11af, 0x1107 ], /* jong rieul-pieup	  = jong rieul	+ cho pieup	*/
			[ 0x11af, 0x1109 ], /* jong rieul-sios	  = jong rieul	+ cho sios	*/
			[ 0x11af, 0x1110 ], /* jong rieul-thieuth = jong rieul	+ cho thieuth	*/
			[ 0x11af, 0x1111 ], /* jong rieul-phieuph = jong rieul	+ cho phieuph	*/
			[ 0x11af, 0x1112 ], /* jong rieul-hieuh	  = jong rieul	+ cho hieuh	*/
			[ 0,	  0x1106 ], /* jong mieum	  = cho  mieum			*/
			[ 0,	  0x1107 ], /* jong pieup	  = cho  pieup			*/
			[ 0x11b8, 0x1109 ], /* jong pieup-sios	  = jong pieup	+ cho sios	*/
			[ 0,	  0x1109 ], /* jong sios	  = cho  sios			*/
			[ 0x11ba, 0x1109 ], /* jong ssangsios	  = jong sios	+ cho sios	*/
			[ 0,	  0x110b ], /* jong ieung	  = cho  ieung			*/
			[ 0,	  0x110c ], /* jong cieuc	  = cho  cieuc			*/
			[ 0,	  0x110e ], /* jong chieuch	  = cho  chieuch		*/
			[ 0,	  0x110f ], /* jong khieukh	  = cho  khieukh		*/
			[ 0,	  0x1110 ], /* jong thieuth	  = cho  thieuth		*/
			[ 0,	  0x1111 ], /* jong phieuph	  = cho  phieuph		*/
			[ 0,	  0x1112 ], /* jong hieuh	  = cho  hieuh			*/
		];

		var fcon = table[ch - 0x11a8][0];
		var lcon = table[ch - 0x11a8][1];
		return [ fcon, lcon ];
	},

	mvow_dicompose: function(ch) {
		var table = [
			[ 0x1163, 0x1175 ], /* ya	  + i	= yae		*/
			[ 0x1165, 0x0000 ], /* */
			[ 0x1166, 0x0000 ], /* */
			[ 0x1167, 0x0000 ], /* */
			[ 0x1167, 0x1175 ], /* yeo	  + i	= ye		*/
			[ 0x1169, 0x0000 ], /* */
			[ 0x1169, 0x1161 ], /* o	  + a	= wa		*/
			[ 0x1169, 0x1162 ], /* o	  + ae	= wae		*/
			[ 0x1169, 0x1175 ], /* o	  + i	= oe		*/
			[ 0x116d, 0x0000 ], /* */
			[ 0x116e, 0x0000 ], /* */
			[ 0x116e, 0x1165 ], /* u	  + eo	= weo		*/

			[ 0x116e, 0x1166 ], /* u	  + e	= we		*/
			[ 0x116e, 0x1175 ], /* u	  + i	= wi		*/
			[ 0x1172, 0x0000 ], /* */
			[ 0x1173, 0x0000 ], /* */
			[ 0x1173, 0x1175 ], /* eu	  + i	= yi		*/
			[ 0x1175, 0x0000 ], /* i */
			[ 0x1161, 0x1169 ], /* a	  + o	= a-o		*/
			[ 0x1161, 0x116e ], /* a	  + u	= a-u		*/
			[ 0x1163, 0x1169 ], /* ya	  + o	= ya-o		*/
			[ 0x1163, 0x116e ], /* ya	  + yo	= ya-yo		*/
			[ 0x1165, 0x1169 ], /* eo	  + o	= eo-o		*/
			[ 0x1165, 0x116e ], /* eo	  + u	= eo-u		*/
			[ 0x1165, 0x1173 ], /* eo	  + eu	= eo-eu		*/
			[ 0x1167, 0x1169 ], /* yeo	  + o	= yeo-o		*/
			[ 0x1167, 0x116e ], /* yeo	  + u	= yeo-u		*/
			[ 0x1169, 0x1165 ], /* o	  + eo	= o-eo		*/

			[ 0x1169, 0x1166 ], /* o	  + e	= o-e		*/
			[ 0x1169, 0x1168 ], /* o	  + ye	= o-ye		*/
			[ 0x1169, 0x1169 ], /* o	  + o	= o-o		*/
			[ 0x1169, 0x116e ], /* o	  + u	= o-u		*/
			[ 0x116d, 0x1163 ], /* yo	  + ya	= yo-ya		*/
			[ 0x116d, 0x1164 ], /* yo	  + yae	= yo-yae	*/
			[ 0x116d, 0x1167 ], /* yo	  + yo	= yo-yeo	*/
			[ 0x116d, 0x1169 ], /* yo	  + o	= yo-o		*/
			[ 0x116d, 0x1175 ], /* yo	+ i	= yo-i		*/
			[ 0x116e, 0x1161 ], /* u	+ a	= u-a		*/
			[ 0x116e, 0x1162 ], /* u	+ ae	= u-ae		*/
			[ 0x116f, 0x1173 ], /* weo	+ eu	= weo-eu	*/
			[ 0x116e, 0x1168 ], /* u	+ ye	= u-ye		*/
			[ 0x116e, 0x116e ], /* u	+ u	= u-u		*/
			[ 0x1172, 0x1161 ], /* yu	+ a	= yu-a		*/
			[ 0x1172, 0x1165 ], /* yu	+ eo	= yu-eo		*/

			[ 0x1172, 0x1166 ], /* yu	+ e	= yu-e		*/
			[ 0x1172, 0x1167 ], /* yu	+ yeo	= yu-yeo	*/
			[ 0x1172, 0x1168 ], /* yu	+ ye	= yu-ye		*/
			[ 0x1172, 0x116e ], /* yu	+ u	= yu-u		*/
			[ 0x1172, 0x1175 ], /* yu	+ i	= yu-i		*/
			[ 0x1173, 0x116e ], /* eu	+ u	= eu-u		*/
			[ 0x1173, 0x1173 ], /* eu	+ eu	= eu-eu		*/
			[ 0x1174, 0x116e ], /* yi	+ u	= yi-u		*/
			[ 0x1175, 0x1161 ], /* i	+ a	= i-a		*/
			[ 0x1175, 0x1163 ], /* i	+ ya	= i-ya		*/
			[ 0x1175, 0x1169 ], /* i	+ o	= i-o		*/
			[ 0x1175, 0x116e ], /* i	+ u	= i-u		*/
			[ 0x1175, 0x1173 ], /* i	+ eu	= i-eu		*/
			[ 0x1175, 0x119e ], /* i	+ araea	= i-araea	*/
			[ 0x119e, 0x0000 ], /* araea */
			[ 0x119e, 0x1165 ]	/* araea	+ eo	= araea-eo	*/
		];
		if ( ch >= 0x1164 && ch <= 0x11a7 ) {
			var ret = [ 0, 0];
			ret[0] = table[ch - 0x1164][0];
			ret[1] = table[ch - 0x1164][1];
			return ret;
		}
		return [ 0, 0];
	},

	jamo_to_syllable: function(lcon, mvow, fcon) {
		var lcon_base = 0x1100;
		var mvow_base = 0x1161;
		var fcon_base = 0x11a7;

		if (fcon == 0) fcon = 0x11a7;

		if (!(lcon >= 0x1100 && lcon <= 0x1112)) return 0;
		if (!(mvow >= 0x1161 && mvow <= 0x1175)) return 0;
		if (!(fcon >= 0x11a7 && fcon <= 0x11c2)) return 0;

		lcon-= lcon_base;
		mvow-= mvow_base;
		fcon-= fcon_base;

		return 0xac00 + lcon * 588 + mvow * 28 + fcon;
	},

	is_syllable: function(c) {
		return c >= 0xac00 && c <= 0xd7a3;
	},

	syllable_to_jamo: function(syllable) {
		var lcon, mvow, fcon = 0;

		if (!this.is_syllable(syllable))
			return null;

		syllable -= 0xac00;
		if (syllable % 28 != 0)
			fcon = 0x11a7 + syllable % 28;
		syllable /= 28;
		syllable >>= 0;

		mvow = 0x1161 + syllable % 21;
		syllable /= 21;
		syllable >>= 0;

		lcon = 0x1100 + syllable;
		return [ lcon, mvow, fcon ];
	},

	kind: function(jamo) {
		if (jamo >= 0x1100 && jamo <= 0x115e) return 1;
		else if (jamo >= 0x1161 && jamo <= 0x11a7) return 2;
		else if (jamo >= 0x11a8 && jamo <= 0x11ff) return 3;
		else return 0;
	},

	is_lcon: function(jamo) {
		return jamo >= 0x1100 && jamo <= 0x115e;
	},

	is_fcon: function(jamo) {
		return jamo >= 0x11a8 && jamo <= 0x11ff;
	},

	is_mvow: function(jamo) {
		return jamo >= 0x1161 && jamo <= 0x11a7;
	},

	//
	compose: function(first, last) {
		var key, val;

		/* make key */
		key = first << 16 | last;
		if (typeof this.compose_table[key] !== 'undefined') {
			return this.compose_table[key];
		}
		return 0;
	},

	ic_get: function() {
		var ch = 0;
		var ic = this.ic;
		if (ic.lcon && ic.mvow) {
			ch = this.jamo_to_syllable(ic.lcon, ic.mvow, ic.fcon);
		} else {
			if (ic.lcon)
				ch = this.lcon_to_cjamo(this.ic.lcon);
			else if (ic.mvow)
				ch = this.mvow_to_cjamo(this.ic.mvow);
			else
				ch = this.fcon_to_cjamo(this.ic.fcon);
		}
		//this.log("==========" + ch + "==========\nl=" + this.ic.lcon + "\nm=" + this.ic.mvow + "\nf=" + this.ic.fcon + "\n");
		if (ch > 0)
			ch = String.fromCharCode(ch);
		else
			ch = "";

		if (this.compstr)
			return this.compstr + ch;
		return ch;
	},

	ic_get_flush: function() {
		var str = this.ic_get();
		str = this.compstr + str;
		this.compstr = "";
		//this.log(str + "\n");
		return str;
	},

	ic_clear: function() {
		this._q = [];
		this.ic.lcon = 0;
		this.ic.mvow = 0;
		this.ic.fcon = 0;
	},

	ic_clear_all: function() {
		this.ic_clear();
		this.compstr = "";
	},

	ic_init: function(ch) {
		if (this.is_syllable(ch)) {
			this.ic_clear();
			var ic = this.ic;
			var tmp = this.syllable_to_jamo(ch);

			ic.lcon = tmp[0];
			ic.mvow = tmp[1];
			this.ic_push(tmp[0]);
			this.ic_push(tmp[1]);
			if (tmp[2]) {
				this.ic_push(tmp[2]);
				ic.fcon = tmp[2];
			}
		}
	},

	ic_push: function(ch) {
		return this._q.push(ch);
	},

	ic_pop: function() {
		var l = [ this._q.pop() ];
		var k = this.kind(l[0]);
		while (this._q.length > 0) {
			var m = this._q.pop();
			if (this.kind(m) != k) {
				this._q.push(m);
				break;
			} else {
				l.push(m);
			}
		}
		return l.reverse();
	},

	ic_peek: function() {
		return this._q[this._q.length - 1];
	},

	ic_size: function() {
		return this._q.length;
	},

	ic_commit: function() {
		this.compstr = this.ic_get();
		//this.log("commit = " + this.compstr + "\n");
		this.ic_clear();
	},

	ic_backspace: function(fullMode) {
		if (this.ic_size() == 0) return false;

		if (typeof fullMode === 'undefined')
			fullMode = false;

		var ic = this.ic;
		var last = this.ic_pop();

		if (last.length > 1 && fullMode) {
			last.pop();
			this.ic_push(last);
		}
		if (this.ic_size() == 0) {
			this.ic_clear();
			return true;
		}

		last = this.ic_peek();
		var kind = this.kind(last);
		if (kind == 3) {
			if (fullMode)
				ic.fcon = last;
		} else if (kind == 2) {
			if (fullMode && ic.fcon == 0)
				ic.mvow = last;
			ic.fcon = 0;
		} else if (kind == 1) {
			if (fullMode && ic.mvow == 0)
				ic.lcon = last;
			ic.mvow = 0;
			ic.fcon = 0;
		}
		return true;
	},
	COMP_END: 0,
	COMP_STR: 1,

	preedit: function(f, c, mode) {
		if (typeof mode === 'undefined') mode = this.COMP_STR;
		if (document.selection) { // IE
			var s = document.selection.createRange(), t = s.text;
			if (t && document.selection.clear) document.selection.clear();
			s.text = (mode == this.COMP_STR || c && t.length > 1 ? '' : t) + c;
			var sz = c.length;
			if (!c || mode == this.COMP_END || s.moveStart('character', -sz)) s.select();
		}
		else if (f.selectionEnd+1) {
			if (mode == this.COMP_END) f.selectionStart = f.selectionEnd + 0;
			var sz = c.length;
			var scrollTop = f.scrollTop, scrollLeft = f.scrollLeft;
			var selectionStart = f.selectionStart;
			var endText = f.value.substr(f.selectionEnd);

			var e = document.createEvent('TextEvent');
			if (e.initTextEvent) { // Chrome/safari
				// Chrome undo/redo support
				// from http://stackoverflow.com/a/7554295/1696120
				if (c) {
					e.initTextEvent('textInput', false, false, null, c);
					f.dispatchEvent(e); // fire the event on the the textarea
				} else {
					document.execCommand("insertText", false, c);
					// fixup chrom bug.
					(scrollTop > f.scrollTop) ? f.scrollTop = scrollTop : true;
				}
			} else { // firefox
				f.value = f.value.substr(0, selectionStart) + c;
				var scrollHeight = f.scrollHeight, scrollWidth = f.scrollWidth;
				f.value+= endText;
				f.scrollTop = (scrollTop > scrollHeight - f.clientHeight) ? scrollTop : scrollHeight - f.clientHeight;
				f.scrollLeft = (scrollLeft > scrollWidth - f.clientWidth) ? scrollLeft : scrollWidth - f.clientWidth;
			}
			f.setSelectionRange(mode == this.COMP_STR ? selectionStart : selectionStart + sz, selectionStart + sz);
		}
	},

	_hangulKeyboard: function(c) {
		if (this.kbdtbl == null)
			this.setKeyboard(this.kbd);
		if (this.kbdtbl && this.kbdtbl.table) {
			return this.kbdtbl.table[c - '!'.charCodeAt()];
		}
		return null;
	},

	setKeyboard: function(name) {
		this.kbdtbl = this.keyboards[name];
		if (typeof this.kbdtbl === "undefined") {
			this.log("keyboard not found!\n");
		} else {
			this.kbd = name;
		}
		var mapname = this.composemap;
		if (typeof this.kbdtbl.compose !== 'undefined')
			mapname = this.kbdtbl.compose;
		else if (this.kbdtbl.type == 2 && mapname != '2-set')
			mapname = '2-set';
		else if (this.kbdtbl.type == 3 && mapname != 'default')
			mapname = 'default';

		if (this.composemap != mapname || this.compose_table == null)
			this.setComposeMap(mapname);
	},

	engToHan: function(f, str) {
		var save = this.compstr;
		this.ic_clear_all();

		if (typeof str === 'undefined') {
			if (document.selection) { // IE
				var r = document.selection.createRange();
				str = r.text;
				if (str.length == 0) {
					var a = r.duplicate();
					a.moveToElementText(f);
					a.setEndPoint('EndToEnd', r);
					var i = a.text.length;
					while (i > 0) {
						r.moveStart('character', -1);
						var c = r.text.substr(0, 1);
						if (c.match(/[a-zA-Z0-9 \.,;]/)) {
							i--;
						} else {
							r.moveStart('character', 1);
							break;
						}
					}
					r.select();
					str = r.text;
				}
			} else if (f && f.selectionEnd+1) {
				if (f.selectionStart == f.selectionEnd) {
					var i = f.selectionEnd;
					str = "";
					while (i > 0) {
						var c = f.value.substr(i - 1, 1);
						if (c.match(/[a-zA-Z0-9 \.,;]/)) {
							i--;
							str = c + str;
						} else {
							break;
						}
					}
					f.setSelectionRange(i, f.selectionEnd);
				} else {
					str = f.value.substring(f.selectionStart, f.selectionEnd);
				}
			}
			if (str.length == 0) return null;
		}

		if (save == str && this.laststr && this.laststr.length > 0) {
			var ret = this.laststr;
			this.laststr = null;
			return ret;
		}
		// save string to revert
		this.laststr = str;

		for (var i = 0; i < str.length; i++) {
			var c = str.charCodeAt(i);
			var h = c;
			if (c >= '!'.charCodeAt() && c < '~'.charCodeAt())
				h = this._hangulKeyboard(c);

			// process automata
			if (h != null && this.processHangul2(h) == false) {
				this.compstr = this.ic_get();
				this.ic_clear();
				this.compstr+= str[i];
			}
		}
		str = this.ic_get();
		this.ic_clear_all();
		return str;
	},

	load: function() {
		for (var src in arguments) {
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.src = arguments[src];
			document.body.appendChild(s);
		}
	},

	log: function(str) {
		var log = document.getElementById('log');
		if (log) {
			log.innerHTML+= str;
		} else {
			alert(str);
		}
	}
}

Saenaru.prototype.processHangul2 = function(jamo, notimer) {
	var LCON = 1, MVOW = 2, FCON =3;
	var ctyping = false;
	if (typeof notimer === 'undefined' || notimer == false) {
		var timestamp = new Date().getTime();
		ctyping = timestamp - this.timestamp < this.ctiming;
		this.timestamp = timestamp;
	}

	var kind = this.kind(jamo);
	if (kind == 0) return false;

	var lcon = 0, mvow = 0, fcon = 0, last = 0;
	var ic = this.ic;

	if (this.ic_size() == 0) {
		if (kind == 1) ic.lcon = jamo;
		else if (kind == 2) ic.mvow = jamo;
		else if (kind == 3) ic.fcon = jamo;
		this.ic_push(jamo);
		return;
	}
	var laststate = this.kind(this.ic_peek());
	last = this.ic_peek();
	switch (laststate) {
	case (LCON):
		switch (kind) {
		case (LCON): // lcon + lcon
			var comb = this.compose(ic.lcon, jamo);
			if (comb) {
				if (this.is_lcon(comb)) {
					ic.lcon = comb;
					this.ic_push(jamo);
					return;
				} else {
					ic.fcon = comb;
					ic.lcon = 0;
					fcon = this.lcon_to_fcon(jamo);
					this.ic_push(fcon);
					return;
				}
			} else {
				this.ic_commit();

				ic.lcon = jamo;
				this.ic_push(jamo);
			}
			break;
		case (MVOW): // lcon + mvow
			ic.mvow = jamo;
			this.ic_push(jamo);
			break;
		default:
			this.ic_commit();
			ic.fcon = jamo;
			this.ic_push(jamo);
			// 2벌식 오토마타로 세벌식을 지원하기 위함.
			// FIXME
			break;
		}
		break;
	case (MVOW):
		switch (kind) {
		case (LCON): // mvow + lcon
			if (ic.lcon) {
				var fcon = this.lcon_to_fcon(jamo);
				if (fcon) {
					ic.fcon = fcon;
					this.ic_push(fcon);
				} else {
					this.ic_commit();

					ic.lcon = jamo;
					this.ic_push(jamo);
				}
			} else if (ctyping) {
				// 중성+초성 교정
				ic.lcon = jamo;

				// fix order
				var tmp = this.ic_pop();
				this.ic_push(ic.lcon);
				this.ic_push(tmp);
			} else {
				this.ic_commit();

				ic.lcon = jamo;
				this.ic_push(jamo);
			}
			break;
		case (MVOW): // mvow + mvow
			var comb = this.compose(ic.mvow, jamo);
			if (!comb && ctyping) // concurrent typing
				comb = this.compose(jamo, ic.mvow);
			if (comb) {
				ic.mvow = comb;
				this.ic_push(jamo);
			} else {
				this.ic_commit();

				ic.mvow = jamo;
				this.ic_push(jamo);
			}
			break;
		default: // mvow + fcon
			// 2벌식 오토마타로 세벌식을 지원하기 위함.
			if (this.jamo_to_syllable(ic.lcon, ic.mvow, jamo)) {
				ic.fcon = jamo;
				this.ic_push(jamo);
			} else {
				this.ic_commit();

				ic.fcon = jamo;
				this.ic_push(jamo);
			}
			break;
		}
		break;
	case (FCON):
		switch (kind) {
		case (LCON): // fcon + lcon
			lcon = jamo;
			fcon = this.lcon_to_fcon(jamo);
			var comb = this.compose(ic.fcon, fcon);
			if (!comb && ctyping) {
				comb = this.compose(fcon, ic.fcon);
			}
			if (comb && this.is_fcon(comb)) {
				ic.fcon = comb;
				this.ic_push(fcon);
				return;
			}

			var tmp = this.fcon_dicompose(ic.fcon);
			if (tmp[0] && tmp[1]) {
				fcon = tmp[0];
				if (this.is_fcon(last))
					last = this.fcon_to_lcon(last);
				if (fcon != 0x11af && last == jamo &&
						(jamo == 0x1100 || jamo == 0x1103 || jamo == 0x1107)) // ㄲ, ㄸ, ㅃ
				{
					ic.fcon = fcon;
					lcon = this.compose(last, last); // make ssang cho
				}
			} else {
				// FIXME

			}

			this.ic_commit();

			ic.lcon = lcon;
			this.ic_push(lcon);
			break;
		case (MVOW):
			var tmp;
			if (ic.fcon != last) {
				tmp = this.fcon_dicompose(ic.fcon);
				fcon = tmp[0];
				lcon = tmp[1];
			}
			if (this.is_fcon(last))
				last = this.fcon_to_lcon(last);

			// dicomposed
			if (fcon && lcon) {
				if (last != lcon) {
					var tmp = lcon;
					lcon = last;
					ic.fcon = this.lcon_to_fcon(tmp);
				} else {
					ic.fcon = fcon;
				}
				this.ic_pop();
				this.ic_push(ic.fcon);
			} else {
				// single fcon
				// 단종성을 다시 초성으로
				lcon = this.fcon_to_lcon(ic.fcon);
				if (lcon) {
					ic.fcon = 0; // remove fcon
					this.ic_pop();
				}
			}

			this.ic_commit();

			ic.lcon = lcon;
			ic.mvow = jamo;
			this.ic_push(lcon);
			this.ic_push(jamo);
			break;
		default: // fcon + fcon
			// 2벌식 오토마타로 세벌식을 지원하기 위함.
			var comb = this.compose(ic.fcon, jamo);
			if (!comb && ctyping)
				comb = this.compose(jamo, ic.fcon);

			if (comb) {
				if (this.jamo_to_syllable(ic.lcon, ic.mvow, comb)) {
					ic.fcon = comb;
					this.ic_push(jamo);
					return;
				}
				ic.fcon = comb;
				this.ic_push(jamo);
				return;
			}
			this.ic_commit();

			ic.fcon = jamo;
			this.ic_push(jamo);
			break;
		}
	}
}

Saenaru.prototype.toggleMode = function(t, m) {
	if (typeof m === 'string') {
		this.mode = ( m == 'en') ? 'ko' : m.substr(0, 2);
	} else {
		this.mode = this.mode == 'en' ? 'ko' : 'en';
	}

	if (this.mode == 'ko' && this.keyboards[this.kbd].type == 3) this.mode = 'k3';
	if (this.status && this.status.setMode) {
		this.status.setMode(this.mode, t);
	}
}

Saenaru.prototype.changeKeyboard = function(name) {
	var list = [];
	for (var l in this.keyboards)
		list.push(l);

	var i;
	if (typeof name === 'string') {
		i = list.indexOf(name);
		if (i < 0) i = 0;
	} else {
		i = (list.indexOf(this.kbd) + 1) % list.length; // next keyboard
	}
	var kbd = list[i];
	this.setKeyboard(kbd);
}

Saenaru.prototype.keyboardList = function() {
	var list = [];
	for (var l in this.keyboards) {
		list.push({ name: l, type: this.keyboards[l].type, desc: this.keyboards[l].desc });
	}
	return list;
}

Saenaru.prototype.composeList = function() {
	var list = [];
	for (var l in this.composemaps) {
		list.push({ name: l, desc: this.composemaps[l].desc });
	}
	return list;
}

Saenaru.prototype.keyPress = function(e) {
	var e = e || window.event, f = e.target || e.srcElement, n = f.nodeName || f.tagName;
	if ((f.type != 'text' || n != 'INPUT') && n != 'TEXTAREA') return true;

	var c = e.which || e.which == 0 ? e.which : e.keyCode;

	if ((c==10 || c==13 || c==32) && (e.ctrlKey || e.shiftKey)) { // Toggle
		this.toggleMode(f);
		if (e.preventDefault) e.preventDefault();
		return false;
	}

	if (this.mode != 'en' && !e.altKey && !e.ctrlKey && e.keyCode < 127 && c > 32 && c < 127) {
		// no selection area. just clear ic
		if (f.selectionEnd+1 && f.selectionEnd == f.selectionStart)
			this.ic_clear();
		else if (document.selection && document.selection.createRange().text.length == 0)
			this.ic_clear();

		// get hangul keyboard
		var h = c;
		if (c >= '!'.charCodeAt() && c < '~'.charCodeAt()) {
			h = this._hangulKeyboard(c);
		}

		// process automata
		if (h != null && this.processHangul2(h) != false) {
			if (this.compstr) {
				if (!this.wordmode) {
					// overwrite last compstr
					this.preedit(f, this.compstr);
					// advance cursor
					this.preedit(f, "", this.COMP_END);
					// clear compstr
					this.compstr = "";
				}
				var s = this.ic_get();
				this.preedit(f, s);
			} else {
				var s = this.ic_get_flush();
				this.preedit(f, s);
			}
		} else {
			if (this.ic_size() == 0)
				return;

			// for IE
			if (this.ic_size() > 0 || this.compstr.length > 0) {
				this.preedit(f, "", this.COMP_END);
				this.compstr = "";
			}
			this.preedit(f, String.fromCharCode(c), this.COMP_END);
			this.ic_clear();
		}
		if (e.preventDefault) e.preventDefault();
		return false;
	}
}

Saenaru.prototype.keyDown = function(e) {
	var BACKSPACE = 8;
	var e = e || window.event, f = e.target || e.srcElement, n = f.nodeName || f.tagName;
	if ((f.type != 'text' || n != 'INPUT') && n != 'TEXTAREA') return true;

	if (f.onmousedown == null) {
		// FIXME
		var self = this;
	      	f.onmousedown = function(e) {
			self.ic_clear();
		};
	}

	if (e.keyCode == BACKSPACE) {
		// clear ic
		if (f.selectionEnd+1 && f.selectionEnd == f.selectionStart)
			this.ic_clear();
		else if (document.selection && document.selection.createRange().text.length == 0)
			this.ic_clear();

		if (this.ic_size() > 0) {
			// edit compstr
			this.ic_backspace(!e.shiftKey);
			var s = this.ic_get();
			this.preedit(f, s);
			if (e.preventDefault) e.preventDefault();
			return false;
		} else if (!e.shiftKey && this.compstr.length > 0) {
			// word mode
			this.compstr = this.compstr.substr(0, this.compstr.length - 1);
			var s = this.ic_get();
			this.preedit(f, s);
			if (e.preventDefault) e.preventDefault();
			return false;
		} else if (e.shiftKey) {
			var pre = '', ch;
			// select one char at the cursor pos.
			{
				if (f.selectionEnd > 0) {
					if (f.selectionStart == f.selectionEnd)
						f.selectionStart = f.selectionEnd - 1;
					ch = f.value.substr(f.selectionEnd - 1, 1);
					pre = f.value.substring(f.selectionStart, f.selectionEnd - 1);
				} else if (document.selection) { // IE
					var r = document.selection.createRange();
					var a = r.duplicate();
					a.moveToElementText(f);
					a.setEndPoint('EndToEnd', r);
					if (r.text.length > 0)
						pre = r.text.substring(0, r.text.length - 1);
					else if (a.text.length > 0)
						r.moveStart('character', -1);
					ch = r.text.substr(r.text.length - 1, 1);
					r.select();
				}
			}

			// edit already composed syllable
			ch = ch.charCodeAt();
			if (this.is_syllable(ch)) {
				this.compstr = pre;
				this.ic_init(ch);
				this.ic_backspace(!e.shiftKey);
				var s = this.ic_get();
				this.log('str=' + s + "\n");
				this.preedit(f, s);
			} else {
				// no hangul found. just delete last ch and set the compstr.
				this.compstr = pre;
				this.preedit(f, pre);
			}
			if (e.preventDefault) e.preventDefault();
			return false;
		}
	}

	if (e.keyCode == 113) {
		var ret = this.engToHan(f);
		if (ret != null) {
			this.preedit(f, ret);
			this.compstr = ret;
		}
	}

	if (e.keyCode == 27) f.blur(); // ESC like as vim
	if (this.wordmode && this.compstr.length > 0 && e.ctrlKey) {
		if (e.keyCode == 'X'.charCodeAt()) {
			// copy
			this.ic_clear_all();
		}
		if (e.keyCode == 'V'.charCodeAt()) {
			// paste
			this.preedit(f, "", this.COMP_END);
			this.ic_clear_all();
		}
		return true;
	}
	if (e.keyCode != 16 && e.keyCode < 47) {
		if (this.ic_size() == 0 && this.compstr.length == 0)
			return true;

		if (this.ic_size() > 0 || this.compstr.length > 0)
			this.preedit(f, "", this.COMP_END);
		this.ic_clear_all();
	}
}

Saenaru.prototype.attach = function(el) {
	var self = this;
	if (typeof el === 'undefined')
		el = document;
	if (el.addEventListener) {
		el.addEventListener('keydown', function(e) { return self.keyDown(e); }, true);
		el.addEventListener('keypress', function(e) { return self.keyPress(e); }, true);
		el.addEventListener('mousedown', function(e) {
			var e = e || window.event, f = e.target || e.srcElement, n = f.nodeName || f.tagName;
			if ((f.type != 'text' || f.nodeName != 'INPUT') && f.nodeName != 'TEXTAREA') return true;
			if (self.status && self.status.showMode) self.status.showMode(f);
		}, true);
	} else {
		el.onkeydown = function(e) { return self.keyDown(e); };
		el.onkeypress = function(e) { return self.keyPress(e); };
		el.onmousedown = function(e) {
			var e = e || window.event, f = e.target || e.srcElement, n = f.nodeName || f.tagName;
			if ((f.type != 'text' || f.nodeName != 'INPUT') && f.nodeName != 'TEXTAREA') return true;
			if (self.status && self.status.showMode) self.status.showMode(f);
		};
	}
}

Saenaru.prototype.setStatus = function(status, el) {
	this.status = status;
	status.init(this);
	status.setMode(this.mode);
}

Saenaru.prototype.keyboards["2-set"] = {
	name: "2-set",
	type: 2,
	desc: "두벌식",
	table: [ /* Default 2-set Hangul Keyboard */
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
		0x003a,	/* colon:	colon			*/
		0x003b,	/* semicolon:	semicolon		*/
		0x003c,	/* less:	less-than sign		*/
		0x003d,	/* equal:	equals sign		*/
		0x003e,	/* greater:	greater-than sign	*/
		0x003f,	/* question:	question mark	 	*/
		0x0040,	/* at:		commercial at		*/
		0x1106,	/* A:		choseong mieum		*/
		0x1172,	/* B:		jungseong yu		*/
		0x110e,	/* C:		choseong chieuch	*/
		0x110b,	/* D:		choseong ieung		*/
		0x1104,	/* E:		choseong ssangtikeut	*/
		0x1105,	/* F:		choseong rieul		*/
		0x1112,	/* G:		choseong hieuh		*/
		0x1169,	/* H:		jungseong o		*/
		0x1163,	/* I:		jungseong ya		*/
		0x1165,	/* J:		jungseong eo		*/
		0x1161,	/* K:		jungseong a		*/
		0x1175,	/* L:		jungseong i		*/
		0x1173,	/* M:		jungseong eu		*/
		0x116e,	/* N:		jungseong u		*/
		0x1164,	/* O:		jungseong yae		*/
		0x1168,	/* P:		jungseong ye		*/
		0x1108,	/* Q:		choseong ssangpieup	*/
		0x1101,	/* R:		choseong ssangkiyeok	*/
		0x1102,	/* S:		choseong nieun		*/
		0x110a,	/* T:		choseong ssangsios	*/
		0x1167,	/* U:		jungseong yeo		*/
		0x1111,	/* V:		choseong phieuph	*/
		0x110d,	/* W:		choseong ssangcieuc	*/
		0x1110,	/* X:		choseong thieuth	*/
		0x116d,	/* Y:		jungseong yo		*/
		0x110f,	/* Z:		choseong khieukh	*/
		0x005b,	/* bracketleft:	left bracket		*/
		0x005c,	/* backslash:	backslash		*/
		0x005d,	/* bracketright:	right bracket	*/
		0x005e,	/* asciicircum:	circumflex accent	*/
		0x005f,	/* underscore:	underscore		*/
		0x0060,	/* quoteleft:	grave accent		*/
		0x1106,	/* a:		choseong  mieum		*/
		0x1172,	/* b:		jungseong yu		*/
		0x110e,	/* c:		choseong  chieuch	*/
		0x110b,	/* d:		choseong  ieung		*/
		0x1103,	/* e:		choseong  tikeut	*/
		0x1105,	/* f:		choseong  rieul		*/
		0x1112,	/* g:		choseong  hieuh		*/
		0x1169,	/* h:		jungseong o		*/
		0x1163,	/* i:		jungseong ya		*/
		0x1165,	/* j:		jungseong eo		*/
		0x1161,	/* k:		jungseong a		*/
		0x1175,	/* l:		jungseong i		*/
		0x1173,	/* m:		jungseong eu		*/
		0x116e,	/* n:		jungseong u		*/
		0x1162,	/* o:		jungseong ae		*/
		0x1166,	/* p:		jungseong e		*/
		0x1107,	/* q:		choseong  pieup		*/
		0x1100,	/* r:		choseong  kiyeok	*/
		0x1102,	/* s:		choseong  nieun		*/
		0x1109,	/* t:		choseong  sios		*/
		0x1167,	/* u:		jungseong yeo		*/
		0x1111,	/* v:		choseong  phieuph	*/
		0x110c,	/* w:		choseong  cieuc		*/
		0x1110,	/* x:		choseong  thieuth	*/
		0x116d,	/* y:		jungseong yo		*/
		0x110f,	/* z:		choseong  khieukh	*/
		0x007b,	/* braceleft:	left brace		*/
		0x007c,	/* bar:		vertical bar		*/
		0x007d,	/* braceright:	right brace		*/
		0x007e	/* asciitilde:	tilde			*/
	]
};

Saenaru.prototype.composemaps['default'] = {
	name: 'default',
	desc: '기본값',
	compose: [
		"# compose map file for Nabi",
		"Name: default",
		"1100	1100	1101	# choseong  kiyeok + kiyeok	= ssangkiyeok",
		"1103	1103	1104	# choseong  tikeut + tikeut	= ssangtikeut",
		"1107	1107	1108	# choseong  pieup  + pieup	= ssangpieup",
		"1109	1109	110a	# choseong  sios   + sios	= ssangsios",
		"110c	110c	110d	# choseong  cieuc  + cieuc	= ssangcieuc",
		"1169	1161	116a	# jungseong o      + a		= wa",
		"1169	1162	116b	# jungseong o      + ae		= wae",
		"1169	1175	116c	# jungseong o      + i		= oe",
		"116e	1165	116f	# jungseong u      + eo		= weo",
		"116e	1166	1170	# jungseong u      + e		= we",
		"116e	1175	1171	# jungseong u      + i		= wi",
		"1173	1175	1174	# jungseong eu     + i		= yi",
		"11a8	11a8	11a9	# jongseong kiyeok + kiyeok	= ssangekiyeok",
		"11a8	11ba	11aa	# jongseong kiyeok + sios	= kiyeok-sois",
		"11ab	11bd	11ac	# jongseong nieun  + cieuc	= nieun-cieuc",
		"11ab	11c2	11ad	# jongseong nieun  + hieuh	= nieun-hieuh",
		"11af	11a8	11b0	# jongseong rieul  + kiyeok	= rieul-kiyeok",
		"11af	11b7	11b1	# jongseong rieul  + mieum	= rieul-mieum",
		"11af	11b8	11b2	# jongseong rieul  + pieup	= rieul-pieup",
		"11af	11ba	11b3	# jongseong rieul  + sios	= rieul-sios",
		"11af	11c0	11b4	# jongseong rieul  + thieuth	= rieul-thieuth",
		"11af	11c1	11b5	# jongseong rieul  + phieuph	= rieul-phieuph",
		"11af	11c2	11b6	# jongseong rieul  + hieuh	= rieul-hieuh",
		"11b8	11ba	11b9	# jongseong pieup  + sios	= pieup-sios",
		"11ba	11ba	11bb	# jongseong sios   + sios	= ssangsios"
	]
};

Saenaru.prototype.composemaps['2-set'] = {
	name: '2-set',
	desc: '기본값(두벌식용)',
	compose: [
		"# compose map for 2-set default",
		"Name: 2-set",
		"1100	1100	1101	# choseong  kiyeok + kiyeok	= ssangkiyeok",
		"1100	1109	11aa	# jongseong kiyeok + sios	= kiyeok-sios",
		"1102	110c	11ac	# jongseong nieun  + cieuc	= nieun-cieuc",
		"1102	1112	11ad	# jongseong nieun  + hieuh	= nieun-hieuh",
		"1103	1103	1104	# choseong  tikeut + tikeut	= ssangtikeut",
		"1105	1100	11b0	# jongseong rieul  + kiyeok	= rieul-kiyeok",
		"1105	1106	11b1	# jongseong rieul  + mieum	= rieul-mieum",
		"1105	1107	11b2	# jongseong rieul  + pieup	= rieul-pieup",
		"1105	1109	11b3	# jongseong rieul  + sios	= rieul-sios",
		"1105	1110	11b4	# jongseong rieul  + thieuth	= rieul-thieuth",
		"1105	1111	11b5	# jongseong rieul  + phieuph	= rieul-phieuph",
		"1105	1112	11b6	# jongseong rieul  + hieuh	= rieul-hieuh",
		"1107	1107	1108	# choseong  pieup  + pieup	= ssangpieup",
		"1107	1109	11b9	# jongseong pieup  + sios	= pieup-sios",
		"1109	1109	110a	# choseong  sios   + sios	= ssangsios",
		"110c	110c	110d	# choseong  cieuc  + cieuc	= ssangcieuc",

		"1162	1162	1164	# jungseong ae     + ae		= yae",
		"1163	1175	1164	# jungseong ya     + i		= yae",
		"1166	1166	1168	# jungseong e      + e		= ye",
		"1167	1175	1168	# jungseong yeo    + i		= ye",
		"1169	1161	116a	# jungseong o      + a		= wa",
		"1169	1162	116b	# jungseong o      + ae		= wae",
		"1169	1175	116c	# jungseong o      + i		= oe",
		"116e	1165	116f	# jungseong u      + eo		= weo",
		"116e	1166	1170	# jungseong u      + e		= we",
		"116e	116e	1172	# jungseong u      + u		= yu",
		"116e	1175	1171	# jungseong u      + i		= wi",
		"1173	1173	1174	# jungseong eu     + eu		= yi",
		"1173	1175	1174	# jungseong eu     + i		= yi",
		"1175	1162	1164	# jungseong i      + ae		= yae",
		"1175	1166	1168	# jungseong i      + e		= ye",
		"1175	1175	1174	# jungseong i      + i		= yi",

		"11a8	11a8	11a9	# jongseong kiyeok + kiyeok	= ssangekiyeok",
		"11a8	11ba	11aa	# jongseong kiyeok + sios	= kiyeok-sois",
		"11ab	11bd	11ac	# jongseong nieun  + cieuc	= nieun-cieuc",
		"11ab	11c2	11ad	# jongseong nieun  + hieuh	= nieun-hieuh",
		"11af	11a8	11b0	# jongseong rieul  + kiyeok	= rieul-kiyeok",
		"11af	11b7	11b1	# jongseong rieul  + mieum	= rieul-mieum",
		"11af	11b8	11b2	# jongseong rieul  + pieup	= rieul-pieup",
		"11af	11ba	11b3	# jongseong rieul  + sios	= rieul-sios",
		"11af	11c0	11b4	# jongseong rieul  + thieuth	= rieul-thieuth",
		"11af	11c1	11b5	# jongseong rieul  + phieuph	= rieul-phieuph",
		"11af	11c2	11b6	# jongseong rieul  + hieuh	= rieul-hieuh",
		"11b8	11ba	11b9	# jongseong pieup  + sios	= pieup-sios",
		"11ba	11ba	11bb	# jongseong sios   + sios	= ssangsios"
	]
};

var mystatus = {
	k3Img: "data:image/gif;base64,R0lGODlhEAAQAIgAAP///wAAACH5BAEAAAEALAAAAAAQABAAAAIijI+py70AwYEOURtzuEkb/0mbyE3k+URmtSql88KZytZNAQA7",
	koImg: "data:image/gif;base64,R0lGODlhEAAQAIgAAP////8AACH5BAEAAAEALAAAAAAQABAAAAIgjI+py60Ao4EuUOouqJpvzGDRtohkeYKJqk5t28DVrBQAOw==",
	enImg: "data:image/gif;base64,R0lGODlhEAAQAIgAAP///wAAACH5BAEAAAEALAAAAAAQABAAAAIgjI+py+0AHILSQCpvfBsz7ClhOGnXch5pKW7qGmjV3BQAOw==",
	checkImg: "data:image/gif;base64,R0lGODlhDQANAIgAAAAAAPLy8iH5BAEAAAEALAAAAAANAA0AAAIWjI+py33gAoCJyqnwtGhjtkVcRJZKAQA7",
	init: function(ime) {
		var div = document.createElement('div');
		div.innerHTML = "<span>Ko</span>";
		div.style.fontFamily = 'GulimChe,monospace';
		div.style.fontWeight = 'normal';
		div.style.color = 'white';
		div.style.backgroundColor = 'royalblue';
		div.style.height = '16px';
		div.style.width = '16px';
		div.style.fontSize = '10pt';
		div.style.zIndex = '255';


		if (document.all) {
			div.style.position = 'absolute';
			div.style.right = -(document.body.scrollLeft||document.documentElement.scrollLeft) + 'px';
			div.style.bottom = -(document.body.scrollTop||document.documentElement.scrollTop) + 'px';
		} else {
			div.style.position = 'fixed';
			div.style.right = '0';
			div.style.bottom = '0';
		}
		div.firstChild.style.display = 'none';
		this.status = div;
		document.body.appendChild(div);
		this.ime = ime;

		var menu = document.getElementById('kbd_menu');
		if (menu == null) {
			menu = document.createElement('div');
			menu.id = 'kbd_menu';
			menu.style.display = 'none';
			document.body.appendChild(menu);
		}
		var self = this;
		div.onclick = function() {
			if (menu.style.display == 'none') {
				self.showMenu();
				menu.style.display = 'block';
				menu.style.position = 'fixed';
				var width = menu.firstChild.clientWidth + 2;
				if (this.offsetLeft > width)
					menu.style.left = this.offsetLeft - width - 10 + 'px';
				else
					menu.style.left = this.offsetLeft + 2 + 'px';
				var height = menu.firstChild.clientHeight + 5;
				if (this.offsetTop > height)
					menu.style.top = this.offsetTop - height + 'px';
				else
					menu.style.top = this.offsetTop + 20 + 'px';
			} else menu.style.display = 'none';
		};
	},

	showMenu: function() {
		var list = this.ime.keyboardList();
		var comp = this.ime.composeList();
		var self = this;
		var li = [];

		var div = document.getElementById('kbd_menu');
		var ul = document.createElement("ul");
		ul.style.cssText = 'font-size:12px; position:fixed; margin:0; padding:0;' +
				'z-index:100; color: black;' +
				'border: 1px solid gray;' +
				'background: #f6f6f6; list-style: none;' +
				'-webkit-box-shadow: 2px 2px 4px #999999; box-shadow: 2px 2px 4px #999999;';
		var li;
		li = document.createElement("li");
		var txt = document.createTextNode("자판선택");
		li.style.cssText = 'padding:2px; padding-left:5px; font-weight:bold';
		li.appendChild(txt);
		ul.appendChild(li);
		for (var a in list) {
			li = document.createElement("li");
			var icon = document.createElement("span");
			var txt = document.createTextNode(list[a].desc);
			var name = list[a].name;
			var mode = 'en';
			if (this.ime.mode[0] == 'k') {
				if (list[a].type == 2) mode = 'ko';
				else mode = 'k3';
			}
			icon.style.cssText = 'width:13px; height:13px; display: inline-block;';
			if (name == this.ime.kbd)
				icon.style.background = 'url("' + this.checkImg + '") no-repeat 0 2px';
			li.appendChild(icon);
			li.appendChild(txt);
			li.style.cssText = 'padding:2px; margin:0;';
			li.onclick = (function(val, m) {
				return function() { div.style.display = 'none'; self.ime.setKeyboard(val); self.setMode(m); };
			})(name, mode);
			ul.appendChild(li);
		}
		li.style.cssText = 'padding:2px; margin:0; border-bottom: 1px solid gray;';

		li = document.createElement("li");
		var txt = document.createTextNode("글자조합 선택");
		li.style.cssText = 'padding:2px; padding-left:5px; font-weight:bold';
		li.appendChild(txt);
		ul.appendChild(li);
		for (var a in comp) {
			li = document.createElement("li");
			var icon = document.createElement("span");
			var txt = document.createTextNode(comp[a].desc);
			var name = comp[a].name;
			icon.style.cssText = 'width:13px; height:13px; display: inline-block;';
			if (name == this.ime.composemap)
				icon.style.background = 'url("' + this.checkImg + '") no-repeat 0 2px';
			li.appendChild(icon);
			li.appendChild(txt);
			li.style.cssText = 'padding:2px; margin:0;';
			li.onclick = (function(val, m) {
				return function() { div.style.display = 'none'; self.ime.setComposeMap(val); };
			})(name, mode);
			ul.appendChild(li);
		}
		li.style.cssText = 'padding:2px; margin:0; border-bottom: 1px solid gray;';

		li = document.createElement("li");
		var icon = document.createElement("span");
		var txt = document.createTextNode("단어단위 편집");
		icon.style.cssText = 'width:13px; height:13px; display: inline-block;';
		if (this.ime.wordmode)
			icon.style.background = 'url("' + this.checkImg + '") no-repeat 0 2px';
		li.appendChild(icon);
		li.appendChild(txt);
		li.onclick = function() { self.ime.wordmode = !self.ime.wordmode; div.style.display = 'none'; };
		ul.appendChild(li);

		if (div.firstChild) div.removeChild(div.firstChild);
		div.appendChild(ul);
	},

	_get_offset: function(el) {
		var x = 0;
		var y = 0;
		while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop) ) {
			x += el.offsetLeft;// - el.scrollLeft;
			y += el.offsetTop;//- el.scrollTop;
			el = el.offsetParent;
		}
		return { top: y, left: x };
	},

	showMode: function(el) {
		var offset = this._get_offset(el);
		this.status.style.left = offset.left + 'px';
		this.status.style.top = offset.top + (el.offsetHeight) + 'px';
	},
	
	setMode: function(mode, f) {
		if (mode == 'ko' && this.ime.keyboards[this.ime.kbd].type == 3) mode = 'k3';
		if (mode == 'ko')
			this.status.style.background = 'royalblue url("' + this.koImg + '") no-repeat';
		else if (mode == 'k3')
			this.status.style.background = 'royalblue url("' + this.k3Img + '") no-repeat';
		else
			this.status.style.background = 'royalblue url("' + this.enImg + '") no-repeat';
		this.status.firstChild.innerHTML = mode.charAt(0).toUpperCase() + mode.slice(1);

		if (typeof f === 'undefined') {
			try {
				f = document.activeElement;
				if ((f.type != 'text' || f.nodeName != 'INPUT') && f.nodeName != 'TEXTAREA') return;
			} catch (e) { return; }
		}
		this.showMode(f);
	}
};

(function() {
var load = function() {
	for (var src in arguments) {
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = arguments[src];
		document.body.appendChild(s);
	}
}

var init = function() {
	if (typeof document.saenaru === 'object') return;
	// load keyboard files
	//load("3final.js", "3soon.js");

	var saenaru = new Saenaru();
	document.saenaru = saenaru;

	saenaru.setup('ko');

	saenaru.attach();
	// set default keyboard
	//saenaru.kbd = "3-final";
	//saenaru.kbd = "3soon";
	//saenaru.kbd = "390";
	saenaru.setStatus(mystatus);
};

if (window.addEventListener) {
	window.addEventListener('load', init, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', init);
}
})();
