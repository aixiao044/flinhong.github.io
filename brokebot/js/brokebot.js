function iniBrokebot(){isHeadless||(eyesY=0,bodyTO=_0x7f06[24]),determineErrorTxt(),animateBrokebot()}function determineErrorTxt(){if(errorCode=GetUrlValue(_0x7f06[25])){var _0xf052x22=eval(_0x7f06[26]+errorCode);document[_0x7f06[29]](_0x7f06[28])[_0x7f06[27]]=_0xf052x22}}function animateBrokebot(){var e=Snap(_0x7f06[30]),t=e[_0x7f06[32]](_0x7f06[31]),x=e[_0x7f06[32]](_0x7f06[33]),a=e[_0x7f06[32]](_0x7f06[34]),o=e[_0x7f06[32]](_0x7f06[35]),r=e[_0x7f06[32]](_0x7f06[36]),f=e[_0x7f06[32]](_0x7f06[37]),n=e[_0x7f06[32]](_0x7f06[38]),i=e[_0x7f06[32]](_0x7f06[39]),_=e[_0x7f06[32]](_0x7f06[40]),l=e[_0x7f06[32]](_0x7f06[41]),y=e[_0x7f06[32]](_0x7f06[42]);errorCode&&(y[_0x7f06[44]][_0x7f06[43]]=errorCode.toString()),setTimeout(function(){TweenMax[_0x7f06[46]](t[_0x7f06[44]],clawTweenTime,{rotation:45,transformOrigin:_0x7f06[45],repeat:-1,repeatDelay:rightClawRepeatDelay}),TweenMax[_0x7f06[46]](x[_0x7f06[44]],clawTweenTime,{rotation:-45,transformOrigin:_0x7f06[47],repeat:-1,repeatDelay:rightClawRepeatDelay})},1e3*rightClawRepeatDelay),setTimeout(function(){TweenMax[_0x7f06[46]](a[_0x7f06[44]],clawTweenTime,{rotation:-45,transformOrigin:_0x7f06[47],repeat:-1,repeatDelay:leftClawRepeatDelay}),TweenMax[_0x7f06[46]](o[_0x7f06[44]],clawTweenTime,{rotation:45,transformOrigin:_0x7f06[45],repeat:-1,repeatDelay:leftClawRepeatDelay})},1e3*leftClawRepeatDelay),TweenMax[_0x7f06[46]](y[_0x7f06[44]],2,{opacity:0}),TweenMax[_0x7f06[49]](r[_0x7f06[44]],bodySwayTime,{rotationZ:-bodySwayAmount,transformOrigin:bodyTO,yoyo:!0,repeat:-1,ease:Quad[_0x7f06[48]]}),TweenMax[_0x7f06[49]](i[_0x7f06[44]],bodySwayTime,{delay:.3,rotationZ:bodySwayAmount,transformOrigin:_0x7f06[50],yoyo:!0,repeat:-1,ease:Quad[_0x7f06[48]]}),TweenMax[_0x7f06[49]](_[_0x7f06[44]],bodySwayTime,{delay:.5,rotationZ:bodySwayAmount,transformOrigin:_0x7f06[51],yoyo:!0,repeat:-1,ease:Quad[_0x7f06[48]]}),TweenMax[_0x7f06[49]](f[_0x7f06[44]],.05,{delay:eyesMoveRepeatTime,x:-2,y:eyesY,repeatDelay:eyesMoveRepeatTime,repeat:-1,yoyo:!0}),TweenMax[_0x7f06[46]](n[_0x7f06[44]],.3,{scaleY:.2,repeatDelay:blinkRepeatTime,repeat:-1,transformOrigin:_0x7f06[52]}),isHeadless||TweenMax[_0x7f06[46]](l[_0x7f06[44]],bodySwayTime,{delay:bodySwayTime,rotationZ:1.5*bodySwayAmount,transformOrigin:_0x7f06[53],yoyo:!0,repeat:-1,ease:Quad[_0x7f06[48]]})}function GetUrlValue(e){for(var t=window[_0x7f06[56]][_0x7f06[55]][_0x7f06[54]](1),x=t[_0x7f06[58]](_0x7f06[57]),a=0;a<x[_0x7f06[59]];a++){var o=x[a][_0x7f06[58]](_0x7f06[60]);if(o[0]==e)return o[1]}}function searchClicked(e){var t=document[_0x7f06[29]](_0x7f06[62])[_0x7f06[61]],x=encodeURIComponent(t);return x!=_0x7f06[63]&&(window[_0x7f06[56]][_0x7f06[64]]=_0x7f06[65]+x+_0x7f06[66]),!1}var _0x7f06=["Bad Request","Authorization required","Forbidden","Page Not Found","Method not allowed","Not acceptable (encoding)","Proxy authentication required","Request timed out","Conflicting request","Gone","Content length required","Precognition failed","Request entity too long","Request URI too long","Unsupported media type","Internal server error","Not implemented","Bad gateway","Service unavailable","Gateway timeout","HTTP version not supported","50px 92px","load","addEventListener","43px 160px","errorcode","text","innerText","robot-text","getElementById","#brokebotSVG","#rightInnerClaw","select","#rightOuterClaw","#leftInnerClaw","#leftOuterClaw","#upperBody","#eyesMove","#eyesBlink","#leftArm","#rightLowerArm","#robotHead","#errorCodeTxt","textContent","node","11px 15px","from","15px 15px","easeInOut","to","15px -11px","15px 0px","0px 6px","65px 77px","substring","search","location","&","split","length","=","value","robot-search-input","","href","http://codecanyon.net/search?term=","&ref=dxc"],text400=_0x7f06[0],text401=_0x7f06[1],text403=_0x7f06[2],text404=_0x7f06[3],text405=_0x7f06[4],text406=_0x7f06[5],text407=_0x7f06[6],text408=_0x7f06[7],text409=_0x7f06[8],text410=_0x7f06[9],text411=_0x7f06[10],text412=_0x7f06[11],text413=_0x7f06[12],text414=_0x7f06[13],text415=_0x7f06[14],text500=_0x7f06[15],text501=_0x7f06[16],text502=_0x7f06[17],text503=_0x7f06[18],text504=_0x7f06[19],text505=_0x7f06[20],clawTweenTime=1,rightClawRepeatDelay=1,leftClawRepeatDelay=1.7,bodySwayTime=1,bodySwayAmount=5,blinkRepeatTime=2.2,eyesMoveRepeatTime=.9,bodyTO=_0x7f06[21],eyesY=-2;window[_0x7f06[23]](_0x7f06[22],function(){iniBrokebot()},!1);var errorCode;