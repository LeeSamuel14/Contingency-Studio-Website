var _0x578b=['Rectangle','anchor','sprite','getItem','width','scaleSprite','add','stick','message','shipwreck-icon','credits','middleBoard','setTo','#000000','playText','shipwreckIcon','font','Audiowide','center','GameState','bottomBoard','world','playerLevel','game','about','state','scale','32px\x20Courier','textStyle','topBoard','height','upper-board','button','HomeState','lower-board','text','start','background','homeRect'];(function(_0x52a4cc,_0x29ea12){var _0x578b0d=function(_0x513ea2){while(--_0x513ea2){_0x52a4cc['push'](_0x52a4cc['shift']());}};_0x578b0d(++_0x29ea12);}(_0x578b,0x118));var _0x513e=function(_0x52a4cc,_0x29ea12){_0x52a4cc=_0x52a4cc-0x12d;var _0x578b0d=_0x578b[_0x52a4cc];return _0x578b0d;};var _0x2cecfc=_0x513e,ShipWreck=ShipWreck||{};ShipWreck[_0x2cecfc(0x147)]={'init':function(_0x3ca139){var _0x50eb7f=_0x2cecfc;this[_0x50eb7f(0x12e)]=_0x3ca139;},'preload':function(){},'create':function(){var _0x28345c=_0x2cecfc;this[_0x28345c(0x14c)]=new Phaser[(_0x28345c(0x14d))](this['game'][_0x28345c(0x151)],this[_0x28345c(0x13d)][_0x28345c(0x144)]),this['background']=this[_0x28345c(0x13d)][_0x28345c(0x153)][_0x28345c(0x14f)](0x0,0x0,'mainScreenBackground'),this[_0x28345c(0x135)]=this[_0x28345c(0x13d)]['add'][_0x28345c(0x14f)](this[_0x28345c(0x13d)]['world'][_0x28345c(0x151)]/0x2,this[_0x28345c(0x13d)][_0x28345c(0x13b)]['height']/0x4,_0x28345c(0x12f)),this[_0x28345c(0x135)][_0x28345c(0x14e)][_0x28345c(0x132)](0.5),this[_0x28345c(0x13d)][_0x28345c(0x140)][_0x28345c(0x152)](this['background'],this[_0x28345c(0x13d)]['world'][_0x28345c(0x151)],this['game'][_0x28345c(0x13b)][_0x28345c(0x144)],![]),this[_0x28345c(0x12d)]=this[_0x28345c(0x13d)]['add']['sprite'](this['game']['world'][_0x28345c(0x151)]/0x2,this[_0x28345c(0x13d)]['world'][_0x28345c(0x144)]/0x2,_0x28345c(0x12d)),this[_0x28345c(0x12d)][_0x28345c(0x140)][_0x28345c(0x132)](0.5),this[_0x28345c(0x12d)][_0x28345c(0x14e)][_0x28345c(0x132)](0.5,0x0),this[_0x28345c(0x143)]=this['game'][_0x28345c(0x153)]['button'](this[_0x28345c(0x13d)][_0x28345c(0x13b)][_0x28345c(0x151)]/0x2,this[_0x28345c(0x13d)][_0x28345c(0x13b)]['height']/0x2,_0x28345c(0x148),this['startGame'],this),this['topBoard']['scale'][_0x28345c(0x132)](0.5),this[_0x28345c(0x143)]['anchor'][_0x28345c(0x132)](0.5,0.5),this[_0x28345c(0x142)]={'font':_0x28345c(0x141),'fill':_0x28345c(0x133),'align':_0x28345c(0x138)},this[_0x28345c(0x134)]=this[_0x28345c(0x13d)]['add'][_0x28345c(0x149)](this[_0x28345c(0x13d)][_0x28345c(0x13b)]['width']/0x2,this[_0x28345c(0x13d)][_0x28345c(0x13b)][_0x28345c(0x144)]/0x2,'PLAY',this[_0x28345c(0x142)]),this[_0x28345c(0x134)][_0x28345c(0x136)]=_0x28345c(0x137),this[_0x28345c(0x134)][_0x28345c(0x14e)][_0x28345c(0x132)](0.5),this[_0x28345c(0x131)]=this[_0x28345c(0x13d)][_0x28345c(0x153)][_0x28345c(0x146)](this[_0x28345c(0x13d)][_0x28345c(0x13b)][_0x28345c(0x151)]/0x2,this[_0x28345c(0x13d)]['world'][_0x28345c(0x144)]/0x2+this[_0x28345c(0x13d)]['world'][_0x28345c(0x144)]/0x5,_0x28345c(0x145)),this[_0x28345c(0x131)][_0x28345c(0x140)][_0x28345c(0x132)](0.5),this[_0x28345c(0x131)][_0x28345c(0x14e)][_0x28345c(0x132)](0.5),this[_0x28345c(0x130)]=this['game'][_0x28345c(0x153)]['text'](this[_0x28345c(0x13d)][_0x28345c(0x13b)][_0x28345c(0x151)]/0x2,this[_0x28345c(0x13d)][_0x28345c(0x13b)][_0x28345c(0x144)]/0x2+this[_0x28345c(0x13d)][_0x28345c(0x13b)][_0x28345c(0x144)]/0x5,'CREDITS',this[_0x28345c(0x142)]),this[_0x28345c(0x130)][_0x28345c(0x136)]=_0x28345c(0x137),this['credits'][_0x28345c(0x14e)][_0x28345c(0x132)](0.5),this[_0x28345c(0x13a)]=this[_0x28345c(0x13d)][_0x28345c(0x153)]['button'](this[_0x28345c(0x13d)]['world'][_0x28345c(0x151)]/0x2,this[_0x28345c(0x13d)]['world']['height']/0x2+this[_0x28345c(0x13d)][_0x28345c(0x13b)][_0x28345c(0x144)]/2.5,_0x28345c(0x145)),this[_0x28345c(0x13a)]['scale'][_0x28345c(0x132)](0.5),this['bottomBoard'][_0x28345c(0x14e)][_0x28345c(0x132)](0.5),this[_0x28345c(0x13e)]=this[_0x28345c(0x13d)]['add'][_0x28345c(0x149)](this[_0x28345c(0x13d)]['world'][_0x28345c(0x151)]/0x2,this[_0x28345c(0x13d)]['world'][_0x28345c(0x144)]/0x2+this[_0x28345c(0x13d)]['world'][_0x28345c(0x144)]/2.5,'ABOUT',this[_0x28345c(0x142)]),this[_0x28345c(0x13e)][_0x28345c(0x136)]=_0x28345c(0x137),this[_0x28345c(0x13e)][_0x28345c(0x14e)][_0x28345c(0x132)](0.5);},'update':function(){},'startGame':function(){var _0x5634ee=_0x2cecfc;localStorage[_0x5634ee(0x150)](_0x5634ee(0x13c))?this['state'][_0x5634ee(0x14a)](_0x5634ee(0x139),!![],![],localStorage[_0x5634ee(0x150)](_0x5634ee(0x13c))):this[_0x5634ee(0x13f)][_0x5634ee(0x14a)]('GameState',!![],![],0x1);},'resize':function(_0x16b0cb,_0x365e54){var _0x4b89e9=_0x2cecfc;this['shipwreckIcon']['x']=_0x16b0cb/0x2,this[_0x4b89e9(0x135)]['y']=_0x365e54/0x4,this[_0x4b89e9(0x143)]['x']=_0x16b0cb/0x2,this['topBoard']['y']=_0x365e54/0x2,this[_0x4b89e9(0x134)]['x']=_0x16b0cb/0x2,this['playText']['y']=_0x365e54/0x2,this['stick']['x']=_0x16b0cb/0x2,this['stick']['y']=_0x365e54/0x2,this[_0x4b89e9(0x131)]['x']=_0x16b0cb/0x2,this['middleBoard']['y']=_0x365e54/0x2+_0x365e54/0x5,this[_0x4b89e9(0x130)]['x']=_0x16b0cb/0x2,this['credits']['y']=_0x365e54/0x2+_0x365e54/0x5,this[_0x4b89e9(0x13a)]['x']=_0x16b0cb/0x2,this[_0x4b89e9(0x13a)]['y']=_0x365e54/0x2+_0x365e54/2.5,this[_0x4b89e9(0x13e)]['x']=_0x16b0cb/0x2,this[_0x4b89e9(0x13e)]['y']=_0x365e54/0x2+_0x365e54/2.5,this[_0x4b89e9(0x13d)][_0x4b89e9(0x140)][_0x4b89e9(0x152)](this[_0x4b89e9(0x14b)],_0x16b0cb,_0x365e54,![]);}};