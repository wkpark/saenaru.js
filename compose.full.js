/* 옛한글 확장 테이블 full from libhangul */
(function(){
var composemap_full = {
	name: 'full',
	desc: '옛한글 확장',
	compose: [
		"Name: full",
		"1100	1100	1101	# choseong kiyeok + kiyeok          = ssangkiyeokg",
		"1100	1103	115a	# choseong kiyeok + tikeut          = kiyeok-tikeutg",
		"1102	1100	1113	# choseong nieun + kiyeok           = nieun-kiyeokg",
		"1102	1102	1114	# choseong nieun + nieun            = ssangnieung",
		"1102	1103	1115	# choseong nieun + tikeut           = nieun-tikeutg",
		"1102	1107	1116	# choseong nieun + pieup            = nieun-pieupg",
		"1102	1109	115b	# choseong nieun + sios             = nieun-siosg",
		"1102	110c	115c	# choseong nieun + cieuc            = nieun-cieucg",
		"1102	1112	115d	# choseong nieun + hieuh            = nieun-hieuhg",
		"1103	1100	1117	# choseong tikeut + kiyeok          = tikeut-kiyeokg",
		"1103	1103	1104	# choseong tikeut + tikeut          = ssangtikeutg",
		"1103	1105	115e	# choseong tikeut + rieul           = tikeut-rieulg",
		"1103	1106	a960	# choseong tikeut + mieum           = tikeut-mieumg",
		"1103	1107	a961	# choseong tikeut + pieup           = tikeut-pieupg",
		"1103	1109	a962	# choseong tikeut + sios            = tikeut-siosg",
		"1103	110c	a963	# choseong tikeut + cieuc           = tikeut-cieucg",
		"1105	1100	a964	# choseong rieul + kiyeok           = rieul-kiyeokg",
		"1105	1101	a965	# choseong rieul + ssangkiyeok      = rieul-ssangkiyeokg",
		"1105	1102	1118	# choseong rieul + nieun            = rieul-nieung",
		"1105	1103	a966	# choseong rieul + tikeut           = rieul-tikeutg",
		"1105	1104	a967	# choseong rieul + ssangtikeut      = rieul-ssangtikeutg",
		"1105	1105	1119	# choseong rieul + rieul            = ssangrieulg",
		"1105	1106	a968	# choseong rieul + mieum            = rieul-mieumg",
		"1105	1107	a969	# choseong rieul + pieup            = rieul-pieupg",
		"1105	1108	a96a	# choseong rieul + ssangpieup       = rieul-ssangpieupg",
		"1105	1109	a96c	# choseong rieul + sios             = rieul-siosg",
		"1105	110b	111b	# choseong rieul + ieung            = kapyeounrieulg",
		"1105	110c	a96d	# choseong rieul + cieuc            = rieul-cieucg",
		"1105	110f	a96e	# choseong rieul + khieukh          = rieul-khieukhg",
		"1105	1112	111a	# choseong rieul + hieuh            = rieul-hieuhg",
		"1105	112b	a96b	# choseong rieul + kapyeounpieup    = rieul-kapyeounpieupg",
		"1106	1100	a96f	# choseong mieum + kiyeok           = mieum-kiyeokg",
		"1106	1103	a970	# choseong mieum + tikeut           = mieum-tikeutg",
		"1106	1107	111c	# choseong mieum + pieup            = mieum-pieupg",
		"1106	1109	a971	# choseong mieum + sios             = mieum-siosg",
		"1106	110b	111d	# choseong mieum + ieung            = kapyeounmieumg",
		"1107	1100	111e	# choseong pieup + kiyeok           = pieup-kiyeokg",
		"1107	1102	111f	# choseong pieup + nieun            = pieup-nieung",
		"1107	1103	1120	# choseong pieup + tikeut           = pieup-tikeutg",
		"1107	1107	1108	# choseong pieup + pieup            = ssangpieupg",
		"1107	1109	1121	# choseong pieup + sios             = pieup-siosg",
		"1107	110a	1125	# choseong pieup + ssangsios        = pieup-ssangsiosg",
		"1107	110b	112b	# choseong pieup + ieung            = kapyeounpieupg",
		"1107	110c	1127	# choseong pieup + cieuc            = pieup-cieucg",
		"1107	110e	1128	# choseong pieup + chieuch          = pieup-chieuchg",
		"1107	110f	a973	# choseong pieup + khieukh          = pieup-khieukhg",
		"1107	1110	1129	# choseong pieup + thieuth          = pieup-thieuthg",
		"1107	1111	112a	# choseong pieup + phieuph          = pieup-phieuphg",
		"1107	1112	a974	# choseong pieup + hieuh            = pieup-hieuhg",
		"1107	112b	112c	# choseong pieup + kapyeounpieup    = kapyeounssangpieupg",
		"1107	112d	1122	# choseong pieup + sios-kiyeok      = pieup-sios-kiyeokg",
		"1107	112f	1123	# choseong pieup + sios-tikeut      = pieup-sios-tikeutg",
		"1107	1132	1124	# choseong pieup + sios-pieup       = pieup-sios-pieupg",
		"1107	1136	1126	# choseong pieup + sios-cieuc       = pieup-sios-cieucg",
		"1107	1139	a972	# choseong pieup + sios-thieuth     = pieup-sios-thieuthg",
		"1108	110b	112c	# choseong ssangpieup + ieung       = kapyeounssangpieupg",
		"1109	1100	112d	# choseong sios + kiyeok            = sios-kiyeokg",
		"1109	1102	112e	# choseong sios + nieun             = sios-nieung",
		"1109	1103	112f	# choseong sios + tikeut            = sios-tikeutg",
		"1109	1105	1130	# choseong sios + rieul             = sios-rieulg",
		"1109	1106	1131	# choseong sios + mieum             = sios-mieumg",
		"1109	1107	1132	# choseong sios + pieup             = sios-pieupg",
		"1109	1109	110a	# choseong sios + sios              = ssangsiosg",
		"1109	110a	1134	# choseong sios + ssangsios         = sios-ssangsiosg",
		"1109	110b	1135	# choseong sios + ieung             = sios-ieungg",
		"1109	110c	1136	# choseong sios + cieuc             = sios-cieucg",
		"1109	110e	1137	# choseong sios + chieuch           = sios-chieuchg",
		"1109	110f	1138	# choseong sios + khieukh           = sios-khieukhg",
		"1109	1110	1139	# choseong sios + thieuth           = sios-thieuthg",
		"1109	1111	113a	# choseong sios + phieuph           = sios-phieuphg",
		"1109	1112	113b	# choseong sios + hieuh             = sios-hieuhg",
		"1109	111e	1133	# choseong sios + pieup-kiyeok      = sios-pieup-kiyeokg",
		"1109	1132	a975	# choseong sios + sios-pieup        = ssangsios-pieupg",
		"110a	1107	a975	# choseong ssangsios + pieup        = ssangsios-pieupg",
		"110a	1109	1134	# choseong ssangsios + sios         = sios-ssangsiosg",
		"110b	1100	1141	# choseong ieung + kiyeok           = ieung-kiyeokg",
		"110b	1103	1142	# choseong ieung + tikeut           = ieung-tikeutg",
		"110b	1105	a976	# choseong ieung + rieul            = ieung-rieulg",
		"110b	1106	1143	# choseong ieung + mieum            = ieung-mieumg",
		"110b	1107	1144	# choseong ieung + pieup            = ieung-pieupg",
		"110b	1109	1145	# choseong ieung + sios             = ieung-siosg",
		"110b	110b	1147	# choseong ieung + ieung            = ssangieungg",
		"110b	110c	1148	# choseong ieung + cieuc            = ieung-cieucg",
		"110b	110e	1149	# choseong ieung + chieuch          = ieung-chieuchg",
		"110b	1110	114a	# choseong ieung + thieuth          = ieung-thieuthg",
		"110b	1111	114b	# choseong ieung + phieuph          = ieung-phieuphg",
		"110b	1112	a977	# choseong ieung + hieuh            = ieung-hieuhg",
		"110b	1140	1146	# choseong ieung + pansios          = ieung-pansiosg",
		"110c	110b	114d	# choseong cieuc + ieung            = cieuc-ieungg",
		"110c	110c	110d	# choseong cieuc + cieuc            = ssangcieucg",
		"110d	1112	a978	# choseong ssangcieuc + hieuh       = ssangcieuc-hieuhg",
		"110e	110f	1152	# choseong chieuch + khieukh        = chieuch-khieukhg",
		"110e	1112	1153	# choseong chieuch + hieuh          = chieuch-hieuhg",
		"1110	1110	a979	# choseong thieuth + thieuth        = ssangthieuthg",
		"1111	1107	1156	# choseong phieuph + pieup          = phieuph-pieupg",
		"1111	110b	1157	# choseong phieuph + ieung          = kapyeounphieuphg",
		"1111	1112	a97a	# choseong phieuph + hieuh          = phieuph-hieuhg",
		"1112	1109	a97b	# choseong hieuh + sios             = hieuh-siosg",
		"1112	1112	1158	# choseong hieuh + hieuh            = ssanghieuhg",
		"1121	1100	1122	# choseong pieup-sios + kiyeok      = pieup-sios-kiyeokg",
		"1121	1103	1123	# choseong pieup-sios + tikeut      = pieup-sios-tikeutg",
		"1121	1107	1124	# choseong pieup-sios + pieup       = pieup-sios-pieupg",
		"1121	1109	1125	# choseong pieup-sios + sios        = pieup-ssangsiosg",
		"1121	110c	1126	# choseong pieup-sios + cieuc       = pieup-sios-cieucg",
		"1121	1110	a972	# choseong pieup-sios + thieuth     = pieup-sios-thieuthg",
		"1132	1100	1133	# choseong sios-pieup + kiyeok      = sios-pieup-kiyeokg",
		"113c	113c	113d	# choseong chitueumsios + chitueumsios = chitueumssangsiosg",
		"113e	113e	113f	# choseong ceongchieumsios + ceongchieumsios = ceongchieumssangsiosg",
		"114e	114e	114f	# choseong chitueumcieuc + chitueumcieuc = chitueumssangcieucg",
		"1150	1150	1151	# choseong ceongchieumcieuc + ceongchieumcieuc = ceongchieumssangcieucg",
		"1159	1159	a97c	# choseong yeorinhieuh + yeorinhieuh = ssangyeorinhieuhg",
		"1161	1161	119e	# jungseong a + a                   = arae-ag",
		"1161	1169	1176	# jungseong a + o                   = a-og",
		"1161	116e	1177	# jungseong a + u                   = a-ug",
		"1161	1173	11a3	# jungseong a + eu                  = a-eug",
		"1161	1175	1162	# jungseong a + i                   = aeg",
		"1163	1169	1178	# jungseong ya + o                  = ya-og",
		"1163	116d	1179	# jungseong ya + yo                 = ya-yog",
		"1163	116e	11a4	# jungseong ya + u                  = ya-ug",
		"1163	1175	1164	# jungseong ya + i                  = yaeg",
		"1165	1169	117a	# jungseong eo + o                  = eo-og",
		"1165	116e	117b	# jungseong eo + u                  = eo-ug",
		"1165	1173	117c	# jungseong eo + eu                 = eo-eug",
		"1165	1175	1166	# jungseong eo + i                  = eg",
		"1167	1163	11a5	# jungseong yeo + ya                = yeo-yag",
		"1167	1169	117d	# jungseong yeo + o                 = yeo-og",
		"1167	116e	117e	# jungseong yeo + u                 = yeo-ug",
		"1167	1175	1168	# jungseong yeo + i                 = yeg",
		"1169	1161	116a	# jungseong o + a                   = wag",
		"1169	1162	116b	# jungseong o + ae                  = waeg",
		"1169	1163	11a6	# jungseong o + ya                  = o-yag",
		"1169	1164	11a7	# jungseong o + yae                 = o-yaeg",
		"1169	1165	117f	# jungseong o + eo                  = o-eog",
		"1169	1166	1180	# jungseong o + e                   = o-eg",
		"1169	1167	d7b0	# jungseong o + yeo                 = o-yeog",
		"1169	1168	1181	# jungseong o + ye                  = o-yeg",
		"1169	1169	1182	# jungseong o + o                   = o-og",
		"1169	116e	1183	# jungseong o + u                   = o-ug",
		"1169	1175	116c	# jungseong o + i                   = oeg",
		"116a	1175	116b	# jungseong wa + i                  = waeg",
		"116d	1161	d7b2	# jungseong yo + a                  = yo-ag",
		"116d	1162	d7b3	# jungseong yo + ae                 = yo-aeg",
		"116d	1163	1184	# jungseong yo + ya                 = yo-yag",
		"116d	1164	1185	# jungseong yo + yae                = yo-yaeg",
		"116d	1165	d7b4	# jungseong yo + eo                 = yo-eog",
		"116d	1167	1186	# jungseong yo + yeo                = yo-yeog",
		"116d	1169	1187	# jungseong yo + o                  = yo-og",
		"116d	1175	1188	# jungseong yo + i                  = yo-ig",
		"116e	1161	1189	# jungseong u + a                   = u-ag",
		"116e	1162	118a	# jungseong u + ae                  = u-aeg",
		"116e	1165	116f	# jungseong u + eo                  = weog",
		"116e	1166	1170	# jungseong u + e                   = weg",
		"116e	1167	d7b5	# jungseong u + yeo                 = u-yeog",
		"116e	1168	118c	# jungseong u + ye                  = u-yeg",
		"116e	116e	118d	# jungseong u + u                   = u-ug",
		"116e	1175	1171	# jungseong u + i                   = wig",
		"116e	117c	118b	# jungseong u + eo-eu               = u-eo-eug",
		"116e	d7c4	d7b6	# jungseong u + i-i                 = u-i-ig",
		"116f	1173	118b	# jungseong weo + eu                = u-eo-eug",
		"116f	1175	1170	# jungseong weo + i                 = weg",
		"1171	1175	d7b6	# jungseong wi + i                  = u-i-ig",
		"1172	1161	118e	# jungseong yu + a                  = yu-ag",
		"1172	1162	d7b7	# jungseong yu + ae                 = yu-aeg",
		"1172	1165	118f	# jungseong yu + eo                 = yu-eog",
		"1172	1166	1190	# jungseong yu + e                  = yu-eg",
		"1172	1167	1191	# jungseong yu + yeo                = yu-yeog",
		"1172	1168	1192	# jungseong yu + ye                 = yu-yeg",
		"1172	1169	d7b8	# jungseong yu + o                  = yu-og",
		"1172	116e	1193	# jungseong yu + u                  = yu-ug",
		"1172	1175	1194	# jungseong yu + i                  = yu-ig",
		"1173	1161	d7b9	# jungseong eu + a                  = eu-ag",
		"1173	1165	d7ba	# jungseong eu + eo                 = eu-eog",
		"1173	1166	d7bb	# jungseong eu + e                  = eu-eg",
		"1173	1169	d7bc	# jungseong eu + o                  = eu-og",
		"1173	116e	1195	# jungseong eu + u                  = eu-ug",
		"1173	1173	1196	# jungseong eu + eu                 = eu-eug",
		"1173	1175	1174	# jungseong eu + i                  = yig",
		"1174	116e	1197	# jungseong yi + u                  = yi-ug",
		"1175	1161	1198	# jungseong i + a                   = i-ag",
		"1175	1163	1199	# jungseong i + ya                  = i-yag",
		"1175	1164	d7be	# jungseong i + yae                 = i-yaeg",
		"1175	1167	d7bf	# jungseong i + yeo                 = i-yeog",
		"1175	1168	d7c0	# jungseong i + ye                  = i-yeg",
		"1175	1169	119a	# jungseong i + o                   = i-og",
		"1175	116d	d7c2	# jungseong i + yo                  = i-yog",
		"1175	116e	119b	# jungseong i + u                   = i-ug",
		"1175	1172	d7c3	# jungseong i + yu                  = i-yug",
		"1175	1173	119c	# jungseong i + eu                  = i-eug",
		"1175	1175	d7c4	# jungseong i + i                   = i-ig",
		"1175	1178	d7bd	# jungseong i + ya-o                = i-ya-og",
		"1175	119e	119d	# jungseong i + araea               = i-araeag",
		"1182	1175	d7b1	# jungseong o-o + i                 = o-o-ig",
		"1199	1169	d7bd	# jungseong i-ya + o                = i-ya-og",
		"119a	1175	d7c1	# jungseong i-o + i                 = i-o-ig",
		"119e	1161	d7c5	# jungseong araea + a               = araea-ag",
		"119e	1165	119f	# jungseong araea + eo              = araea-eog",
		"119e	1166	d7c6	# jungseong araea + e               = araea-eg",
		"119e	116e	11a0	# jungseong araea + u               = araea-ug",
		"119e	1175	11a1	# jungseong araea + i               = araea-ig",
		"119e	119e	11a2	# jungseong araea + araea           = ssangaraeag",
		"11a8	11a8	11a9	# jongseong kiyeok + kiyeok         = ssangkiyeokg",
		"11a8	11ab	11fa	# jongseong kiyeok + nieun          = kiyeok-nieung",
		"11a8	11af	11c3	# jongseong kiyeok + rieul          = kiyeok-rieulg",
		"11a8	11b8	11fb	# jongseong kiyeok + pieup          = kiyeok-pieupg",
		"11a8	11ba	11aa	# jongseong kiyeok + sios           = kiyeok-siosg",
		"11a8	11be	11fc	# jongseong kiyeok + chieuch        = kiyeok-chieuchg",
		"11a8	11bf	11fd	# jongseong kiyeok + khieukh        = kiyeok-khieukhg",
		"11a8	11c2	11fe	# jongseong kiyeok + hieuh          = kiyeok-hieuhg",
		"11a8	11e7	11c4	# jongseong kiyeok + sios-kiyeok    = kiyeok-sios-kiyeokg",
		"11aa	11a8	11c4	# jongseong kiyeok-sios + kiyeok    = kiyeok-sios-kiyeokg",
		"11ab	11a8	11c5	# jongseong nieun + kiyeok          = nieun-kiyeokg",
		"11ab	11ab	11ff	# jongseong nieun + nieun           = ssangnieung",
		"11ab	11ae	11c6	# jongseong nieun + tikeut          = nieun-tikeutg",
		"11ab	11af	d7cb	# jongseong nieun + rieul           = nieun-rieulg",
		"11ab	11ba	11c7	# jongseong nieun + sios            = nieun-siosg",
		"11ab	11bd	11ac	# jongseong nieun + cieuc           = nieun-cieucg",
		"11ab	11be	d7cc	# jongseong nieun + chieuch         = nieun-chieuchg",
		"11ab	11c0	11c9	# jongseong nieun + thieuth         = nieun-thieuthg",
		"11ab	11c2	11ad	# jongseong nieun + hieuh           = nieun-hieuhg",
		"11ab	11eb	11c8	# jongseong nieun + pansios         = nieun-pansiosg",
		"11ae	11a8	11ca	# jongseong tikeut + kiyeok         = tikeut-kiyeokg",
		"11ae	11ae	d7cd	# jongseong tikeut + tikeut         = ssangtikeutg",
		"11ae	11af	11cb	# jongseong tikeut + rieul          = tikeut-rieulg",
		"11ae	11b8	d7cf	# jongseong tikeut + pieup          = tikeut-pieupg",
		"11ae	11ba	d7d0	# jongseong tikeut + sios           = tikeut-siosg",
		"11ae	11bd	d7d2	# jongseong tikeut + cieuc          = tikeut-cieucg",
		"11ae	11be	d7d3	# jongseong tikeut + chieuch        = tikeut-chieuchg",
		"11ae	11c0	d7d4	# jongseong tikeut + thieuth        = tikeut-thieuthg",
		"11ae	11e7	d7d1	# jongseong tikeut + sios-kiyeok    = tikeut-sios-kiyeokg",
		"11ae	d7cf	d7ce	# jongseong tikeut + tikeut-pieup   = ssangtikeut-pieupg",
		"11af	11a8	11b0	# jongseong rieul + kiyeok          = rieul-kiyeokg",
		"11af	11a9	d7d5	# jongseong rieul + ssangkiyeok     = rieul-ssangkiyeokg",
		"11af	11aa	11cc	# jongseong rieul + kiyeok-sios     = rieul-kiyeok-siosg",
		"11af	11ab	11cd	# jongseong rieul + nieun           = rieul-nieung",
		"11af	11ae	11ce	# jongseong rieul + tikeut          = rieul-tikeutg",
		"11af	11af	11d0	# jongseong rieul + rieul           = ssangrieulg",
		"11af	11b7	11b1	# jongseong rieul + mieum           = rieul-mieumg",
		"11af	11b8	11b2	# jongseong rieul + pieup           = rieul-pieupg",
		"11af	11b9	11d3	# jongseong rieul + pieup-sios      = rieul-pieup-siosg",
		"11af	11ba	11b3	# jongseong rieul + sios            = rieul-siosg",
		"11af	11bb	11d6	# jongseong rieul + ssangsios       = rieul-ssangsiosg",
		"11af	11bc	d7dd	# jongseong rieul + ieung           = kapyeounrieulg",
		"11af	11bf	11d8	# jongseong rieul + khieukh         = rieul-khieukhg",
		"11af	11c0	11b4	# jongseong rieul + thieuth         = rieul-thieuthg",
		"11af	11c1	11b5	# jongseong rieul + phieuph         = rieul-phieuphg",
		"11af	11c2	11b6	# jongseong rieul + hieuh           = rieul-hieuhg",
		"11af	11d8	d7d7	# jongseong rieul + rieul-khieukh   = ssangrieul-khieukhg",
		"11af	11da	11d1	# jongseong rieul + mieum-kiyeok    = rieul-mieum-kiyeokg",
		"11af	11dd	11d2	# jongseong rieul + mieum-sios      = rieul-mieum-siosg",
		"11af	11e1	d7d8	# jongseong rieul + mieum-hieuh     = rieul-mieum-hieuhg",
		"11af	11e4	d7da	# jongseong rieul + pieup-phieuph   = rieul-pieup-phieuphg",
		"11af	11e5	11d4	# jongseong rieul + pieup-hieuh     = rieul-pieup-hieuhg",
		"11af	11e6	11d5	# jongseong rieul + kapyeounpieup   = rieul-kapyeounpieupg",
		"11af	11eb	11d7	# jongseong rieul + pansios         = rieul-pansiosg",
		"11af	11f0	d7db	# jongseong rieul + yesieung        = rieul-yesieungg",
		"11af	11f9	11d9	# jongseong rieul + yeorinhieuh     = rieul-yeorinhieuhg",
		"11af	11fe	d7d6	# jongseong rieul + kiyeok-hieuh    = rieul-kiyeok-hieuhg",
		"11af	d7e3	d7d9	# jongseong rieul + pieup-tikeut    = rieul-pieup-tikeutg",
		"11b0	11a8	d7d5	# jongseong rieul-kiyeok + kiyeok   = rieul-ssangkiyeokg",
		"11b0	11ba	11cc	# jongseong rieul-kiyeok + sios     = rieul-kiyeok-siosg",
		"11b0	11c2	d7d6	# jongseong rieul-kiyeok + hieuh    = rieul-kiyeok-hieuhg",
		"11b1	11a8	11d1	# jongseong rieul-mieum + kiyeok    = rieul-mieum-kiyeokg",
		"11b1	11ba	11d2	# jongseong rieul-mieum + sios      = rieul-mieum-siosg",
		"11b1	11c2	d7d8	# jongseong rieul-mieum + hieuh     = rieul-mieum-hieuhg",
		"11b2	11ae	d7d9	# jongseong rieul-pieup + tikeut    = rieul-pieup-tikeutg",
		"11b2	11ba	11d3	# jongseong rieul-pieup + sios      = rieul-pieup-siosg",
		"11b2	11bc	11d5	# jongseong rieul-pieup + ieung     = rieul-kapyeounpieupg",
		"11b2	11c1	d7da	# jongseong rieul-pieup + phieuph   = rieul-pieup-phieuphg",
		"11b2	11c2	11d4	# jongseong rieul-pieup + hieuh     = rieul-pieup-hieuhg",
		"11b3	11ba	11d6	# jongseong rieul-sios + sios       = rieul-ssangsiosg",
		"11b7	11a8	11da	# jongseong mieum + kiyeok          = mieum-kiyeokg",
		"11b7	11ab	d7de	# jongseong mieum + nieun           = mieum-nieung",
		"11b7	11af	11db	# jongseong mieum + rieul           = mieum-rieulg",
		"11b7	11b7	d7e0	# jongseong mieum + mieum           = ssangmieumg",
		"11b7	11b8	11dc	# jongseong mieum + pieup           = mieum-pieupg",
		"11b7	11b9	d7e1	# jongseong mieum + pieup-sios      = mieum-pieup-siosg",
		"11b7	11ba	11dd	# jongseong mieum + sios            = mieum-siosg",
		"11b7	11bb	11de	# jongseong mieum + ssangsios       = mieum-ssangsiosg",
		"11b7	11bc	11e2	# jongseong mieum + ieung           = kapyeounmieumg",
		"11b7	11bd	d7e2	# jongseong mieum + cieuc           = mieum-cieucg",
		"11b7	11be	11e0	# jongseong mieum + chieuch         = mieum-chieuchg",
		"11b7	11c2	11e1	# jongseong mieum + hieuh           = mieum-hieuhg",
		"11b7	11eb	11df	# jongseong mieum + pansios         = mieum-pansiosg",
		"11b7	11ff	d7df	# jongseong mieum + ssangnieun      = mieum-ssangnieung",
		"11b8	11ae	d7e3	# jongseong pieup + tikeut          = pieup-tikeutg",
		"11b8	11af	11e3	# jongseong pieup + rieul           = pieup-rieulg",
		"11b8	11b5	d7e4	# jongseong pieup + rieul-phieuph   = pieup-rieul-phieuphg",
		"11b8	11b7	d7e5	# jongseong pieup + mieum           = pieup-mieumg",
		"11b8	11b8	d7e6	# jongseong pieup + pieup           = ssangpieupg",
		"11b8	11ba	11b9	# jongseong pieup + sios            = pieup-siosg",
		"11b8	11bc	11e6	# jongseong pieup + ieung           = kapyeounpieupg",
		"11b8	11bd	d7e8	# jongseong pieup + cieuc           = pieup-cieucg",
		"11b8	11be	d7e9	# jongseong pieup + chieuch         = pieup-chieuchg",
		"11b8	11c1	11e4	# jongseong pieup + phieuph         = pieup-phieuphg",
		"11b8	11c2	11e5	# jongseong pieup + hieuh           = pieup-hieuhg",
		"11b8	11e8	d7e7	# jongseong pieup + sios-tikeut     = pieup-sios-tikeutg",
		"11b9	11ae	d7e7	# jongseong pieup-sios + tikeut     = pieup-sios-tikeutg",
		"11ba	11a8	11e7	# jongseong sios + kiyeok           = sios-kiyeokg",
		"11ba	11ae	11e8	# jongseong sios + tikeut           = sios-tikeutg",
		"11ba	11af	11e9	# jongseong sios + rieul            = sios-rieulg",
		"11ba	11b7	d7ea	# jongseong sios + mieum            = sios-mieumg",
		"11ba	11b8	11ea	# jongseong sios + pieup            = sios-pieupg",
		"11ba	11ba	11bb	# jongseong sios + sios             = ssangsiosg",
		"11ba	11bd	d7ef	# jongseong sios + cieuc            = sios-cieucg",
		"11ba	11be	d7f0	# jongseong sios + chieuch          = sios-chieuchg",
		"11ba	11c0	d7f1	# jongseong sios + thieuth          = sios-thieuthg",
		"11ba	11c2	d7f2	# jongseong sios + hieuh            = sios-hieuhg",
		"11ba	11e6	d7eb	# jongseong sios + kapyeounpieup    = sios-kapyeounpieupg",
		"11ba	11e7	d7ec	# jongseong sios + sios-kiyeok      = ssangsios-kiyeokg",
		"11ba	11e8	d7ed	# jongseong sios + sios-tikeut      = ssangsios-tikeutg",
		"11ba	11eb	d7ee	# jongseong sios + pansios          = sios-pansiosg",
		"11bb	11a8	d7ec	# jongseong ssangsios + kiyeok      = ssangsios-kiyeokg",
		"11bb	11ae	d7ed	# jongseong ssangsios + tikeut      = ssangsios-tikeutg",
		"11bd	11b8	d7f7	# jongseong cieuc + pieup           = cieuc-pieupg",
		"11bd	11bd	d7f9	# jongseong cieuc + cieuc           = ssangcieucg",
		"11bd	d7e6	d7f8	# jongseong cieuc + ssangpieup      = cieuc-ssangpieupg",
		"11c1	11b8	11f3	# jongseong phieuph + pieup         = phieuph-pieupg",
		"11c1	11ba	d7fa	# jongseong phieuph + sios          = phieuph-siosg",
		"11c1	11bc	11f4	# jongseong phieuph + ieung         = kapyeounphieuphg",
		"11c1	11c0	d7fb	# jongseong phieuph + thieuth       = phieuph-thieuthg",
		"11c2	11ab	11f5	# jongseong hieuh + nieun           = hieuh-nieung",
		"11c2	11af	11f6	# jongseong hieuh + rieul           = hieuh-rieulg",
		"11c2	11b7	11f7	# jongseong hieuh + mieum           = hieuh-mieumg",
		"11c2	11b8	11f8	# jongseong hieuh + pieup           = hieuh-pieupg",
		"11ce	11c2	11cf	# jongseong rieul-tikeut + hieuh    = rieul-tikeut-hieuhg",
		"11d0	11bf	d7d7	# jongseong ssangrieul + khieukh    = ssangrieul-khieukhg",
		"11d9	11c2	d7dc	# jongseong rieul-yeorinhieuh + hieuh = rieul-yeorinhieuh-hieuhg",
		"11dc	11ba	d7e1	# jongseong mieum-pieup + sios      = mieum-pieup-siosg",
		"11dd	11ba	11de	# jongseong mieum-sios + sios       = mieum-ssangsiosg",
		"11e3	11c1	d7e4	# jongseong pieup-rieul + phieuph   = pieup-rieul-phieuphg",
		"11ea	11bc	d7eb	# jongseong sios-pieup + ieung      = sios-kapyeounpieupg",
		"11eb	11b8	d7f3	# jongseong pansios + pieup         = pansios-pieupg",
		"11eb	11e6	d7f4	# jongseong pansios + kapyeounpieup = pansios-kapyeounpieupg",
		"11ec	11a8	11ed	# jongseong ieung-kiyeok + kiyeok   = ieung-ssangkiyeokg",
		"11f0	11a8	11ec	# jongseong yesieung + kiyeok       = yesieung-kiyeokg",
		"11f0	11a9	11ed	# jongseong yesieung + ssangkiyeok  = yesieung-ssangkiyeokg",
		"11f0	11b7	d7f5	# jongseong yesieung + mieum        = yesieung-mieumg",
		"11f0	11ba	11f1	# jongseong yesieung + sios         = yesieung-siosg",
		"11f0	11bf	11ef	# jongseong yesieung + khieukh      = yesieung-khieukhg",
		"11f0	11c2	d7f6	# jongseong yesieung + hieuh        = yesieung-hieuhg",
		"11f0	11eb	11f2	# jongseong yesieung + pansios      = yesieung-pansiosg",
		"11f0	11f0	11ee	# jongseong yesieung + yesieung     = ssangyesieungg",
		"a964	1100	a965	# choseong rieul-kiyeok + kiyeok    = rieul-ssangkiyeokg",
		"a966	1103	a967	# choseong rieul-tikeut + tikeut    = rieul-ssangtikeutg",
		"a969	1107	a96a	# choseong rieul-pieup + pieup      = rieul-ssangpieupg",
		"a969	110b	a96b	# choseong rieul-pieup + ieung      = rieul-kapyeounpieupg",
		"d7c5	1161	11a2	# jungseong araea-a + a             = ssangaraeag",
		"d7cd	11b8	d7ce	# jongseong ssangtikeut + pieup     = ssangtikeut-pieupg",
		"d7d0	11a8	d7d1	# jongseong tikeut-sios + kiyeok    = tikeut-sios-kiyeokg",
		"d7de	11ab	d7df	# jongseong mieum-nieun + nieun     = mieum-ssangnieung",
		"d7f3	11bc	d7f4	# jongseong pansios-pieup + ieung   = pansios-kapyeounpieupg",
		"d7f7	11b8	d7f8	# jongseong cieuc-pieup + pieup     = cieuc-ssangpieupg"
	]
};

if (typeof Saenaru === 'function') {
	Saenaru.prototype.composemaps["full"] = composemap_full;
}

var init = function() {
	if (document.saenaru) {
		if (typeof document.saenaru.composemaps["full"] === 'undefined')
			document.saenaru.composemaps["full"] = composemap_full;
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
