import{D as e}from"./vendor-CreOc2dO.js";import{$i as t,$n as n,$o as r,Ai as i,Bi as a,Bn as o,Bs as s,Co as c,Fi as l,Fn as u,Gr as d,Hi as f,Hs as p,Ii as m,In as h,Is as g,Jo as _,Js as v,Kr as y,Ks as b,Ln as x,Mn as S,Mo as C,Nn as w,Ns as T,Pn as E,Pt as D,Qn as O,Rn as k,Rs as A,To as ee,Ua as te,Ur as ne,Vi as re,Vn as ie,Vo as ae,Vs as oe,Ws as j,Xa as se,Xo as ce,Zn as le,Zs as M,_i as N,_n as ue,ci as de,dc as fe,di as pe,ec as me,eo as he,er as ge,fi as _e,gn as ve,hn as ye,i as be,ki as xe,kn as Se,ks as Ce,li as P,lr as we,mi as Te,mn as Ee,nc as F,ns as De,oi as Oe,os as ke,pi as Ae,qi as je,si as I,so as Me,to as Ne,tr as Pe,ui as L,us as R,wo as z,wt as Fe,yi as Ie,zi as Le,zn as Re}from"./index-BHQpe8wU.js";import{n as ze,t as B}from"./Format-Dhp90E0J.js";import{$ as Be,B as V,C as Ve,D as He,E as Ue,F as H,G as We,I as U,J as Ge,K as Ke,L as qe,M as Je,N as W,O as Ye,P as Xe,Q as Ze,R as Qe,S as $e,T as et,X as tt,Z as nt,_ as rt,_t as it,at,b as ot,ct as st,dt as ct,et as lt,f as ut,g as dt,h as ft,it as pt,j as mt,lt as ht,m as gt,mt as _t,nt as vt,p as yt,pt as bt,q as xt,rt as St,tt as Ct,ut as wt,v as Tt,vt as Et,w as Dt,y as Ot,z as kt}from"./PlayerPalette-CEMmRTIP.js";import{r as At}from"./MapLayerSettings-DErVXFKn.js";import{t as jt}from"./Sounds-ChvRra0v.js";import{n as Mt}from"./ThemeProvider-x4VgipRu.js";import{t as Nt}from"./purify.es-CQxK7osl.js";import{t as Pt}from"./repeat-DuAfc1u0.js";import{o as Ft}from"./SavedGamesApi-CCagIzTz.js";var It=50,Lt={enabled:!1,speed:`normal`,warnSeconds:30,drainStartPercent:2,drainMaxPercent:5,drainRampSeconds:90,drainFloorPercent:5,floorStartPercent:40,floorDecaySeconds:90,rotDeathSeconds:150,rotGrainSeconds:10,rotSpecklePercent:15,warshipDrainStartPercent:1,warshipDrainMaxPercent:50,warshipDrainCurveExponent:8},Rt=80,zt={enabled:!1,startMinutes:30,dropPercentPerMinute:2},Bt=class{constructor(e,t,n=!1,r=!1){this._gameConfig=e,this._isReplay=t,this.listed=n,this._spectator=r,this.unitInfoCache=new Map}isReplay(){return this._isReplay}isIntentionalSpectator(){return this._spectator}traitorDefenseDebuff(){return .5}traitorDuration(){return 300}doomsdayClockConfig(){let e=this._gameConfig.doomsdayClock,t=Lt;return{enabled:e?.enabled??t.enabled,speed:e?.speed??t.speed,warnSeconds:t.warnSeconds,drainStartPercent:t.drainStartPercent,drainMaxPercent:t.drainMaxPercent,drainRampSeconds:t.drainRampSeconds,drainFloorPercent:t.drainFloorPercent,floorStartPercent:t.floorStartPercent,floorDecaySeconds:t.floorDecaySeconds,rotDeathSeconds:t.rotDeathSeconds,rotGrainSeconds:t.rotGrainSeconds,rotSpecklePercent:t.rotSpecklePercent,warshipDrainStartPercent:t.warshipDrainStartPercent,warshipDrainMaxPercent:t.warshipDrainMaxPercent,warshipDrainCurveExponent:t.warshipDrainCurveExponent}}overtimeConfig(){let e=this._gameConfig.overtime,t=zt;return{enabled:e?.enabled??t.enabled,startMinutes:e?.startMinutes??t.startMinutes,dropPercentPerMinute:t.dropPercentPerMinute}}spawnImmunityDuration(){return this._gameConfig.spawnImmunityDuration??It}nationSpawnImmunityDuration(){return It}hasExtendedSpawnImmunity(){return this.spawnImmunityDuration()>It}gameConfig(){return this._gameConfig}cityTroopIncrease(){return 25e4}msPerTick(){return 100}SAMCooldown(){return 90}SiloCooldown(){return 90}defensePostRange(){return 30}isUnitDisabled(e){return this._gameConfig.disabledUnits?.includes(e)??!1}instantBuild(){return this._gameConfig.instantBuild}disableAlliances(){return this._gameConfig.customAllianceDuration===0||(this._gameConfig.disableAlliances??!1)}isRandomSpawn(){return this._gameConfig.randomSpawn}infiniteTroops(){return this._gameConfig.infiniteTroops}donateTroops(){return this._gameConfig.donateTroops}trainStationMaxRange(){return 110}unitInfo(e){let t=this.unitInfoCache.get(e);if(t!==void 0)return t;let n;switch(e){case F.Warship:n={maxHealth:1e3};break;case F.Shell:n={damage:250};break;case F.Port:n={constructionDuration:this.instantBuild()?0:50,upgradable:!0};break;case F.MissileSilo:n={constructionDuration:this.instantBuild()?0:100,upgradable:!0};break;case F.DefensePost:n={constructionDuration:this.instantBuild()?0:50};break;case F.SAMLauncher:n={constructionDuration:this.instantBuild()?0:300,upgradable:!0};break;case F.City:case F.Factory:n={constructionDuration:this.instantBuild()?0:20,upgradable:!0};break;case F.TransportShip:case F.SAMMissile:case F.AtomBomb:case F.HydrogenBomb:case F.MIRV:case F.MIRVWarhead:case F.TradeShip:case F.Train:n={};break;default:De(e)}return this.unitInfoCache.set(e,n),n}hasInfiniteTroopsFor(e){return this.infiniteTroops()?!0:(this._gameConfig.hostCheats?.infiniteTroops??!1)&&e.isLobbyCreator()}deletionMarkDuration(){return 300}deleteUnitCooldown(){return 300}allianceRequestDuration(){return 200}allianceDuration(){let e=this._gameConfig.customAllianceDuration;return typeof e==`number`&&e>0?e*60*10:300*10}percentageTilesOwnedToWinTenths(e){let t=this._gameConfig.winThresholdTenths??Rt*10,n=this.overtimeConfig();if(!n.enabled)return t;let r=Math.floor(e)-n.startMinutes*60;return r<=0?t:Math.max(0,t-Math.floor(r*n.dropPercentPerMinute/60)*10)}percentageTilesOwnedToWin(e){return this.percentageTilesOwnedToWinTenths(e)/10}armyLimitWarningThreshold(){return .8}numSpawnPhaseTurns(){return this._gameConfig.gameType===p.Singleplayer?100:this.isRandomSpawn()?150:200}maxTroops(e){return this.troopCap(e,!0)}maxTroopsWithoutCities(e){return this.troopCap(e,!1)}troopCap(e,t){let n=t?e.units(F.City).filter(e=>!e.isUnderConstruction()).map(e=>e.level()).reduce((e,t)=>e+t,0)*this.cityTroopIncrease():0,r=e.type()===v.Human&&this.hasInfiniteTroopsFor(e)?1e9:2*(ke(e.numTilesOwned(),.6)*1e3+5e4)+n;if(this._gameConfig.tutorial&&e.type()!==v.Human)return r*.1;if(e.type()===v.Bot)return r/3;if(e.type()===v.Human)return r;switch(this._gameConfig.difficulty){case A.Easy:return r*.5;case A.Medium:return r*.75;case A.Hard:return r*1;case A.Impossible:return r*1.25;default:De(this._gameConfig.difficulty)}}troopIncreaseRate(e){let t=this.maxTroops(e),n=10+ke(e.troops(),.73)/4,r=1-e.troops()/t;if(n*=r,e.type()===v.Bot&&(n*=.5),e.type()===v.Nation)switch(this._gameConfig.difficulty){case A.Easy:n*=.9;break;case A.Medium:n*=.95;break;case A.Hard:n*=1;break;case A.Impossible:n*=1.05;break;default:De(this._gameConfig.difficulty)}return Math.min(e.troops()+n,t)-e.troops()}nukeMagnitudes(e){switch(e){case F.MIRVWarhead:return{inner:12,outer:18};case F.AtomBomb:return this._gameConfig.tutorial?{inner:8,outer:16}:{inner:12,outer:30};case F.HydrogenBomb:return{inner:80,outer:100}}throw Error(`Unknown nuke type: ${e}`)}nukeAllianceBreakThreshold(){return 100}samRange(e){return this.maxSamRange()-480/(e+5)}maxSamRange(){return 150}structureMinDist(){return 15}warshipVeterancyHealthBonus(){return 20}allianceExtensionPromptOffset(){return 300}},Vt=class{constructor(e,t,n,r,i,a,o){this.view=e,this.gameMap=t,this.userSettings=n,this.gameMapType=r,this.gameMapSize=i,this.mapLoader=a,this.abortSignal=o}init(){this.gameMap.layers?.length&&Ht(this.gameMapType,this.gameMapSize,this.mapLoader,this.gameMap.layers).then(e=>{this.abortSignal.aborted||(this.view.setMapLayers(this.gameMap.layers,e),At(this.userSettings,this.gameMap.layers,(e,t)=>this.view.setLayerVisible(e,t),(e,t)=>this.view.setLayerAlpha(e,t)))}).catch(e=>console.warn(`[MapLayerController] Failed to load layer images:`,e))}};async function Ht(e,t,n,r){let i=n.getMapData(e),a=t===s.Compact,o=new Map;return await Promise.all(r.map(async t=>{try{o.set(t.id,await i.layerImage(t.id,a))}catch(n){console.warn(`[MapLoader] Failed to load layer "${t.id}" for map ${e}: ${n}`)}})),o}var Ut=[{title:`emoji_table.faces`,emojis:[`😀`,`😊`,`🥰`,`😇`,`😎`,`😞`,`🥺`,`😭`,`😱`,`😡`,`😈`,`🤡`,`🥱`,`🫡`,`🤦‍♂️`]},{title:`emoji_table.gestures`,emojis:[`👍`,`👎`,`👋`,`👏`,`✋`,`🙏`,`💪`,`🫴`,`🤌`,`🖕`]},{title:`emoji_table.diplomacy`,emojis:[`🤝`,`🆘`,`🕊️`,`🏳️`,`⏳`,`⚠️`,`❓`,`❤️`,`💔`]},{title:`emoji_table.things`,emojis:[`🔥`,`💥`,`💀`,`☢️`,`🛡️`,`⚓`,`⛵`,`💰`,`🏡`,`🏭`,`🚂`,`🐔`,`🐀`]},{title:`emoji_table.directions`,emojis:[`↖️`,`⬆️`,`↗️`,`⬅️`,`🎯`,`➡️`,`↙️`,`⬇️`,`↘️`],columns:3},{title:`emoji_table.ranks`,emojis:[`👑`,`🥇`,`🥈`,`🥉`],columns:2}],Wt=`qweasd`;function Gt(e){return Wt[e]}function Kt(e){if(e.shiftKey||e.ctrlKey||e.metaKey||e.altKey||!/^Key[A-Z]$/.test(e.code))return null;let t=Wt.indexOf(e.code[3].toLowerCase());return t===-1?null:t}function qt(e,t,n){let r=[...e],i=r.indexOf(t);return i!==-1&&(r[i]=r[n]??null),r[n]=t,r}var Jt=class{constructor(e,t){this.x=e,this.y=t}},Yt=class{constructor(e,t){this.x=e,this.y=t}},Xt=class{constructor(e,t){this.x=e,this.y=t}},Zt=class{constructor(e,t,n=[]){this.unit=e,this.isSelected=t,this.units=n}},Qt=class{constructor(e,t){this.x=e,this.y=t}},$t=class{constructor(e,t){this.x=e,this.y=t}},en=class{constructor(e,t){this.x=e,this.y=t}},tn=class{constructor(e,t,n){this.x=e,this.y=t,this.delta=n}},nn=class{constructor(e,t){this.deltaX=e,this.deltaY=t}},rn=class{constructor(e){this.alternateView=e}},an=class{},on=`forwardedFromRadialOverlay`,sn=`forwardedTouchFromRadialOverlay`;function cn(e){return e[on]===!0}function ln(e){return e[sn]===!0}var un=class{},dn=class{},fn=class{},pn=class{constructor(e){this.structureTypes=e}};function mn(e){switch(e){case F.AtomBomb:case F.HydrogenBomb:return[F.MissileSilo,F.SAMLauncher];case F.Warship:return[F.Port];case F.MIRV:return[F.MissileSilo];default:return[e]}}var hn=class{},gn=class{constructor(e,t){this.x=e,this.y=t}},_n=class{},vn=class{constructor(e,t){this.x=e,this.y=t}},yn=class{constructor(e,t){this.x=e,this.y=t,this.handled=!1}},bn=class{constructor(e){this.rocketDirectionUp=e}},xn=class{constructor(e,t,n,r){this.startX=e,this.startY=t,this.endX=n,this.endY=r}},Sn=class{constructor(e,t,n,r){this.startX=e,this.startY=t,this.endX=n,this.endY=r}},Cn=class{},wn=class{},Tn=class{constructor(e,t){this.x=e,this.y=t}},En=class{constructor(e,t){this.x=e,this.y=t}},Dn=class{constructor(e,t){this.x=e,this.y=t}},On=class{constructor(e,t){this.x=e,this.y=t}},kn=class{constructor(e,t){this.x=e,this.y=t}},An=class{constructor(e,t){this.x=e,this.y=t}},jn=class{constructor(e,t){this.x=e,this.y=t}},Mn=class{constructor(e){this.visible=e}},Nn=class{constructor(e){this.slot=e}},Pn=class{constructor(e){this.tile=e}},Fn=class{},In=class{},Ln=class{constructor(e,t){this.tile=e,this.playerID=t}},Rn=class{constructor(e,t){this.tile=e,this.playerID=t}},zn=class{constructor(e,t){this.tile=e,this.playerID=t}},Bn=class{constructor(e){this.attackRatio=e}},Vn=class{constructor(e){this.replaySpeedMultiplier=e}},Hn=class{},Un=class{},Wn=class{},Gn=class{constructor(){}},Kn=class{constructor(e,t){this.x=e,this.y=t}},qn=class{constructor(e){this.enabled=e}},Jn=class{constructor(e,t){this.tickExecutionDuration=e,this.tickDelay=t}},Yn=class{constructor(e,t,n,r){this.gameView=e,this.uiState=t,this.canvas=n,this.eventBus=r,this.lastPointerX=0,this.lastPointerY=0,this.lastMouseX=null,this.lastMouseY=null,this.emojiTableOpen=!1,this.emojiKeysDown=new Set,this.lastPointerDownX=0,this.lastPointerDownY=0,this.pointers=new Map,this.passThroughPointers=new Map,this.lastPinchDistance=0,this.lastGestureScale=null,this.pointerDown=!1,this.lastPointerType=null,this.alternateView=!1,this.selectionBoxActive=!1,this.multiSelectionActive=!1,this.unitSelectionActive=!1,this.longPressTimer=null,this.longPressActive=!1,this.suppressNextTap=!1,this.touchPlacementDragState=`idle`,this.LONG_PRESS_MS=800,this.moveInterval=null,this.listenerAbort=null,this.activeKeys=new Set,this.zoomKeysHeldBeforeControl=new Set,this.shiftHeld=!1,this.keybinds={},this.keybindAndEvent=[],this.coordinateGridEnabled=!1,this.PAN_SPEED=5,this.ZOOM_SPEED=10,this.DRAG_THRESHOLD_PX=10,this.userSettings=new Ne,this.onEmojiTableVisible=e=>{if(this.emojiTableOpen=e.visible,this.emojiKeysDown.clear(),e.visible)for(let e of this.activeKeys)Kt(this.unmodifiedKey(e))!==null&&this.activeKeys.delete(e)},this.onUnitSelection=e=>{this.unitSelectionActive=e.isSelected&&(e.unit!==null||(e.units??[]).length>0),e.isSelected&&(e.units??[]).length>0?(this.multiSelectionActive=!0,this.canvas.style.cursor=`crosshair`):e.isSelected?(this.multiSelectionActive=!1,this.canvas.style.cursor=`crosshair`):(this.multiSelectionActive=!1,this.selectionBoxActive||(this.canvas.style.cursor=``))},this.onKeybindsChanged=()=>{this.buildKeybindTable()},this.onPassThroughPointerDown=e=>{this.isGameInputPassThrough(e)&&(e.button===0&&this.passThroughPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.onPointerDown(e))},this.onPointerCancel=e=>{if(this.passThroughPointers.has(e.pointerId)){this.cancelPassThroughDrag(e.pointerId);return}this.onPointerUp(e)}}initialize(){this.buildKeybindTable(),globalThis.addEventListener(`${he}:${se}`,this.onKeybindsChanged),this.eventBus.off(Zt,this.onUnitSelection),this.eventBus.on(Zt,this.onUnitSelection),this.eventBus.off(Mn,this.onEmojiTableVisible),this.eventBus.on(Mn,this.onEmojiTableVisible),this.initializePointerAndKeyboardEvents()}unmodifiedKey(e){return{code:e,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1}}resetPointerState(){this.pointerDown=!1,this.pointers.clear(),this.passThroughPointers.clear(),this.lastGestureScale=null,this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressActive=!1,this.suppressNextTap=!1,this.touchPlacementDragState=`idle`,this.selectionBoxActive=!1,this.multiSelectionActive=!1}buildKeybindTable(){this.uiState.preventStacking=!1,this.keybinds=this.userSettings.keybinds(we.isMac),this.keybindAndEvent=[],this.addKeybindAndEvent(this.keybinds.boatAttack,()=>{this.eventBus.emit(new Pn)}),this.addKeybindAndEvent(this.keybinds.groundAttack,()=>{this.eventBus.emit(new Fn)}),this.addKeybindAndEvent(this.keybinds.retaliateAttack,()=>{this.eventBus.emit(new In)}),this.addKeybindAndEvent(this.keybinds.centerCamera,()=>{this.eventBus.emit(new Gn)}),this.addKeybindAndEvent(this.keybinds.selectAllWarships,()=>{this.eventBus.emit(new wn)}),this.addKeybindAndEvent(this.keybinds.requestAlliance,()=>{this.eventBus.emit(new Ln)}),this.addKeybindAndEvent(this.keybinds.breakAlliance,()=>{this.eventBus.emit(new Rn)}),this.addKeybindAndEvent(this.keybinds.targetPlayer,()=>{this.eventBus.emit(new zn)}),this.addKeybindAndEvent(this.keybinds.donateTroops,()=>{this.lastMouseX===null||this.lastMouseY===null||this.eventBus.emit(new An(this.lastMouseX,this.lastMouseY))}),this.addKeybindAndEvent(this.keybinds.donateGold,()=>{this.lastMouseX===null||this.lastMouseY===null||this.eventBus.emit(new jn(this.lastMouseX,this.lastMouseY))}),this.addKeybindAndEvent(this.keybinds.quickChat,()=>{this.eventBus.emit(new On(this.lastMouseX??0,this.lastMouseY??0))},e=>!e.altKey&&!e.ctrlKey&&!e.metaKey&&!this.resetGfxModifierHeld(e)),this.addKeybindAndEvent(this.keybinds.playerPanel,()=>{this.eventBus.emit(new kn(this.lastMouseX,this.lastMouseY))},e=>!e.altKey&&!e.ctrlKey&&!e.metaKey),this.addKeybindAndEvent(this.keybinds.pauseGame,()=>{this.eventBus.emit(new Hn)},e=>!e.repeat),this.addKeybindAndEvent(this.keybinds.gameSpeedUp,()=>{this.eventBus.emit(new Un)},e=>!e.repeat),this.addKeybindAndEvent(this.keybinds.gameSpeedDown,()=>{this.eventBus.emit(new Wn)},e=>!e.repeat),this.addKeybindAndEvent(this.keybinds.attackRatioDown,()=>{let e=this.userSettings.attackRatioIncrement();this.eventBus.emit(new Bn(-e))}),this.addKeybindAndEvent(this.keybinds.attackRatioUp,()=>{let e=this.userSettings.attackRatioIncrement();this.eventBus.emit(new Bn(e))}),this.addKeybindAndEvent(this.keybinds.swapDirection,()=>{let e=!this.uiState.rocketDirectionUp;this.eventBus.emit(new bn(e))}),this.addKeybindAndEvent(this.keybinds.performanceOverlay,()=>{this.eventBus.emit(new fn)}),this.addKeybindAndEvent(this.keybinds.toggleView,()=>{this.alternateView=!1,this.eventBus.emit(new rn(!1))});let e=this.keybinds.resetGfx??`KeyR`,t=this.keybinds.altKey===`ShiftLeft`||this.keybinds.altKey===`ShiftRight`;this.addKeybindAndEvent(e,()=>{this.eventBus.emit(new un)},e=>this.resetGfxModifierHeld(e),{ignoreShift:t});let n=[`buildCity`,`buildFactory`,`buildPort`,`buildDefensePost`,`buildMissileSilo`,`buildSamLauncher`,`buildAtomBomb`,`buildHydrogenBomb`,`buildWarship`,`buildMIRV`];n=n.map(e=>this.keybinds[e]),n.push(`Numpad0`,`Numpad1`,`Numpad2`,`Numpad3`,`Numpad4`,`Numpad5`,`Numpad6`,`Numpad7`,`Numpad8`,`Numpad9`,`Digit0`,`Digit1`,`Digit2`,`Digit3`,`Digit4`,`Digit5`,`Digit6`,`Digit7`,`Digit8`,`Digit9`),n.push(...n.map(e=>`Shift+`+e)),n=[...new Set(n)].filter(e=>!!e);for(let e of n)this.addKeybindAndEvent(e,e=>{let t=this.resolveBuildKeybind(e.code,e.shiftKey);t!==null&&this.setGhostStructure(t)},()=>this.canUseBuildKeybinds(),e=>this.resolveBuildKeybind(e.code,e.shiftKey)!==null)}initializePointerAndKeyboardEvents(){this.listenerAbort?.abort(),this.moveInterval!==null&&(clearInterval(this.moveInterval),this.moveInterval=null),this.resetPointerState(),this.listenerAbort=new AbortController;let{signal:e}=this.listenerAbort;this.canvas.addEventListener(`pointerdown`,e=>this.onPointerDown(e),{signal:e}),window.addEventListener(`pointerdown`,this.onPassThroughPointerDown,{signal:e}),window.addEventListener(`pointerup`,e=>this.onPointerUp(e),{signal:e}),window.addEventListener(`pointercancel`,this.onPointerCancel,{signal:e}),this.canvas.addEventListener(`wheel`,e=>{this.onScroll(e),e.preventDefault()},{passive:!1,signal:e}),this.canvas.addEventListener(`gesturestart`,e=>{e.preventDefault(),this.lastGestureScale=e.scale},{passive:!1,signal:e}),this.canvas.addEventListener(`gesturechange`,e=>{e.preventDefault(),this.onGestureChange(e)},{passive:!1,signal:e}),this.canvas.addEventListener(`gestureend`,e=>{e.preventDefault(),this.lastGestureScale=null},{passive:!1,signal:e}),window.addEventListener(`pointermove`,this.onPointerMove.bind(this),{signal:e}),this.canvas.addEventListener(`contextmenu`,e=>this.onContextMenu(e),{signal:e}),window.addEventListener(`mousemove`,e=>{this.lastMouseX=e.clientX,this.lastMouseY=e.clientY},{signal:e}),window.addEventListener(`blur`,()=>{this.activeKeys.clear(),this.uiState.preventStacking=!1,this.zoomKeysHeldBeforeControl.clear(),this.shiftHeld=!1,this.alternateView&&(this.alternateView=!1,this.eventBus.emit(new rn(!1)));let e=this.selectionBoxActive||this.multiSelectionActive;this.resetPointerState(),e&&this.eventBus.emit(new Cn),this.canvas.style.cursor=``},{signal:e}),this.pointers.clear(),this.moveInterval=setInterval(()=>{let e=0,t=0;if(this.selectionBoxActive||this.keybinds.boxSelectWarships!==`ShiftLeft`&&this.keybinds.boxSelectWarships!==`ShiftRight`&&this.activeKeys.has(this.keybinds.boxSelectWarships))return;(this.isContinuousActionActive(this.keybinds.moveUp)||this.isContinuousActionActive(this.keybinds.moveUpArrow))&&(t+=this.PAN_SPEED),(this.isContinuousActionActive(this.keybinds.moveDown)||this.isContinuousActionActive(this.keybinds.moveDownArrow))&&(t-=this.PAN_SPEED),(this.isContinuousActionActive(this.keybinds.moveLeft)||this.isContinuousActionActive(this.keybinds.moveLeftArrow))&&(e+=this.PAN_SPEED),(this.isContinuousActionActive(this.keybinds.moveRight)||this.isContinuousActionActive(this.keybinds.moveRightArrow))&&(e-=this.PAN_SPEED),(e||t)&&this.eventBus.emit(new nn(e,t));let n=window.innerWidth/2,r=window.innerHeight/2;(this.isContinuousActionActive(this.keybinds.zoomOut)||this.isContinuousActionActive(this.keybinds.zoomOutMinus)||this.isContinuousActionActive(this.keybinds.zoomOutNumpad))&&this.eventBus.emit(new tn(n,r,this.ZOOM_SPEED)),(this.isContinuousActionActive(this.keybinds.zoomIn)||this.isContinuousActionActive(this.keybinds.zoomInEqual)||this.isContinuousActionActive(this.keybinds.zoomInNumpad))&&this.eventBus.emit(new tn(n,r,-this.ZOOM_SPEED))},1),window.addEventListener(`keydown`,e=>{if(this.isTextInputTarget(e.target)&&e.code!==`Escape`)return;if(this.keybindMatchesEvent(e,this.keybinds.emojiMenu)&&!e.repeat){e.preventDefault(),this.emojiTableOpen?this.eventBus.emit(new an):this.eventBus.emit(new Dn(this.lastMouseX??0,this.lastMouseY??0));return}if(this.emojiTableOpen&&Kt(e)!==null){e.preventDefault(),this.emojiKeysDown.add(e.code);return}if(e.code===`AltLeft`&&e.preventDefault(),this.keybindMatchesEvent(e,this.keybinds.preventStacking)&&(this.uiState.preventStacking=!0),this.keybindMatchesEvent(e,this.keybinds.toggleView)&&(e.preventDefault(),this.alternateView||(this.alternateView=!0,this.eventBus.emit(new rn(!0)))),this.keybindMatchesEvent(e,this.keybinds.coordinateGrid)&&!e.repeat&&(e.preventDefault(),this.coordinateGridEnabled=!this.coordinateGridEnabled,this.eventBus.emit(new qn(this.coordinateGridEnabled))),e.code===`Escape`){e.preventDefault();let t=!1;this.uiState.ghostStructure!==null&&(this.setGhostStructure(null),t=!0),this.selectionBoxActive&&(this.selectionBoxActive=!1,this.eventBus.emit(new Cn),t=!0),this.eventBus.emit(new an),!t&&(this.unitSelectionActive||this.multiSelectionActive)&&this.eventBus.emit(new Zt(null,!1))}(e.code===`Enter`||e.code===`NumpadEnter`)&&this.uiState.ghostStructure!==null&&(e.preventDefault(),this.eventBus.emit(new hn));let t=(e.metaKey||e.ctrlKey)&&(e.code===`Minus`||e.code===`Equal`||e.code===`NumpadAdd`||e.code===`NumpadSubtract`);if((e.code===`ControlLeft`||e.code===`ControlRight`)&&!this.activeKeys.has(`ControlLeft`)&&!this.activeKeys.has(`ControlRight`)){let e=this.getZoomPhysicalCodes();this.zoomKeysHeldBeforeControl=new Set(e.filter(e=>this.activeKeys.has(e)))}let n=this.getContinuousBindings(),r=Object.values(this.keybinds).some(t=>this.keybindMatchesEvent(e,t))||this.keybindAndEvent.some(([t,n])=>this.keybindMatchesEvent(e,t,n.ignoreShift))||n.some(t=>this.keybindMatchesEvent(e,t)),i=(e.metaKey||e.ctrlKey)&&e.altKey&&e.code===`KeyI`;r&&!t&&!i&&e.preventDefault(),this.shiftHeld=e.shiftKey;let a=n.map(e=>this.parseKeybind(e).code);!t&&(a.includes(e.code)||[`ShiftLeft`,`ShiftRight`,`ControlLeft`,`ControlRight`,`AltLeft`,`AltRight`,`MetaLeft`,`MetaRight`,this.keybinds.boxSelectWarships,this.keybinds.emojiMenuModifier,this.keybinds.buildMenuModifier,this.keybinds.buildScrollModifier,this.keybinds.altKey].includes(e.code))&&this.activeKeys.add(e.code),e.code===this.keybinds.boxSelectWarships&&(this.uiState.ghostStructure!==null&&this.setGhostStructure(null),this.canvas.style.cursor=`crosshair`)},{signal:e}),window.addEventListener(`keyup`,e=>{let t=this.parseKeybind(this.keybinds.preventStacking);if((e.code===t.code||t.shift&&!e.shiftKey||e.code===`MetaLeft`||e.code===`MetaRight`)&&(this.uiState.preventStacking=!1),!(this.isTextInputTarget(e.target)&&!this.activeKeys.has(e.code))){if(e.code===`AltLeft`&&e.preventDefault(),this.shiftHeld=e.shiftKey,(e.code===`MetaLeft`||e.code===`MetaRight`)&&!(e.code===`MetaLeft`&&this.activeKeys.has(`MetaRight`)||e.code===`MetaRight`&&this.activeKeys.has(`MetaLeft`)))for(let e of this.getZoomPhysicalCodes())this.activeKeys.delete(e);if((e.code===`ControlLeft`||e.code===`ControlRight`)&&!(e.code===`ControlLeft`&&this.activeKeys.has(`ControlRight`)||e.code===`ControlRight`&&this.activeKeys.has(`ControlLeft`))){for(let e of this.getZoomPhysicalCodes())this.zoomKeysHeldBeforeControl.has(e)||this.activeKeys.delete(e);this.zoomKeysHeldBeforeControl.clear()}if(this.emojiTableOpen){let t=Kt(e);if(t!==null){e.preventDefault(),this.zoomKeysHeldBeforeControl.delete(e.code),this.activeKeys.delete(e.code),this.emojiKeysDown.delete(e.code)&&this.eventBus.emit(new Nn(t));return}}outerLoop:for(let t of this.keybindAndEvent)if(this.keybindMatchesEvent(e,t[0],t[1].ignoreShift)){for(let n of t[1].conditions)if(!n(e))continue outerLoop;e.preventDefault(),t[1].handler(e)}this.zoomKeysHeldBeforeControl.delete(e.code),this.activeKeys.delete(e.code),e.code===this.keybinds.boxSelectWarships&&!this.selectionBoxActive&&!this.multiSelectionActive&&(this.canvas.style.cursor=``)}},{signal:e})}onPointerDown(e){if(this.lastPointerType=e.pointerType,e.button===1){e.preventDefault(),this.eventBus.emit(new Kn(e.clientX,e.clientY));return}if(!(e.button>0))if(this.pointerDown=!0,this.pointers.set(e.pointerId,e),this.pointers.size===1){if(this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.lastPointerDownX=e.clientX,this.lastPointerDownY=e.clientY,this.suppressNextTap=!1,this.eventBus.emit(new Qt(e.clientX,e.clientY)),this.touchPlacementDragState=`idle`,e.pointerType===`touch`&&this.uiState.ghostStructure!==null){let t=new yn(e.clientX,e.clientY);this.eventBus.emit(t),t.handled&&(this.touchPlacementDragState=`candidate`)}e.pointerType===`touch`&&this.uiState.ghostStructure===null&&(this.longPressActive=!1,this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressTimer=setTimeout(()=>{this.longPressTimer=null,this.longPressActive=!0,this.canvas.style.cursor=`crosshair`,this.eventBus.emit(new Tn(this.lastPointerDownX,this.lastPointerDownY))},this.LONG_PRESS_MS))}else this.pointers.size===2&&(this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressActive&&(this.longPressActive=!1,this.canvas.style.cursor=``),this.touchPlacementDragState=`idle`,this.suppressNextTap=!0,this.lastPinchDistance=this.getPinchDistance())}isGameInputPassThrough(e){return e.composedPath?.().some(e=>e instanceof HTMLElement&&e.hasAttribute(`data-game-input-pass-through`))??!1}cancelPassThroughDrag(e){this.passThroughPointers.delete(e);let t=this.pointers.keys().next().value===e;if(this.pointers.delete(e)){if(this.pointerDown=this.pointers.size>0,this.pointerDown){if(t){let e=this.pointers.values().next().value;e&&(this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.lastPointerDownX=e.clientX,this.lastPointerDownY=e.clientY)}this.lastPinchDistance=this.pointers.size>=2?this.getPinchDistance():0;return}this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressActive&&(this.canvas.style.cursor=``),this.longPressActive=!1,this.suppressNextTap=!1}}onPointerUp(e){if(e.button===1){e.preventDefault();return}if(e.button>0)return;if(this.passThroughPointers.has(e.pointerId)&&this.pointers.size>1){this.cancelPassThroughDrag(e.pointerId);return}if(this.passThroughPointers.delete(e.pointerId),!this.pointerDown||!this.pointers.has(e.pointerId))return;this.pointerDown=!1,this.pointers.clear(),this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null);let t=this.longPressActive;this.longPressActive=!1;let n=this.touchPlacementDragState===`active`;if(this.touchPlacementDragState=`idle`,n){e.type===`pointerup`?this.eventBus.emit(new vn(e.clientX,e.clientY)):this.suppressNextTap=!1,e.preventDefault();return}if(e.type===`pointercancel`){this.suppressNextTap=!1,this.canvas.style.cursor=``,this.selectionBoxActive&&(this.selectionBoxActive=!1,this.eventBus.emit(new Cn)),e.preventDefault();return}if(t&&(this.canvas.style.cursor=``,this.selectionBoxActive||(this.suppressNextTap=!0)),this.selectionBoxActive)if(this.selectionBoxActive=!1,Math.abs(e.clientX-this.lastPointerDownX)+Math.abs(e.clientY-this.lastPointerDownY)>=this.DRAG_THRESHOLD_PX){this.eventBus.emit(new Sn(this.lastPointerDownX,this.lastPointerDownY,e.clientX,e.clientY));return}else this.eventBus.emit(new Cn);if(we.isMac&&e.ctrlKey&&!this.gameView.inSpawnPhase()){this.suppressNextTap=!1;return}if(this.activeKeys.has(this.keybinds.buildMenuModifier)){this.suppressNextTap=!1,this.eventBus.emit(new En(e.clientX,e.clientY));return}if(this.activeKeys.has(this.keybinds.emojiMenuModifier)){this.suppressNextTap=!1,this.eventBus.emit(new Dn(e.clientX,e.clientY));return}if(Math.abs(e.x-this.lastPointerDownX)+Math.abs(e.y-this.lastPointerDownY)<this.DRAG_THRESHOLD_PX){if(e.pointerType===`touch`){if(this.suppressNextTap){this.suppressNextTap=!1,e.preventDefault();return}this.uiState.ghostStructure===null?this.eventBus.emit(new Xt(e.x,e.y)):this.eventBus.emit(new gn(e.x,e.y)),e.preventDefault();return}!this.userSettings.leftClickOpensMenu()||e.shiftKey||this.gameView.inSpawnPhase()||this.uiState.ghostStructure!==null||this.gameView.config().gameConfig().tutorial===!0?this.eventBus.emit(new Jt(e.x,e.y)):this.eventBus.emit(new en(e.clientX,e.clientY));return}this.suppressNextTap=!1}onScroll(e){let t=e.deltaY===0?e.deltaX:e.deltaY;if(e.shiftKey){let e=this.userSettings.attackRatioIncrement(),n=t>0?-e:e;this.eventBus.emit(new Bn(n));return}if(this.activeKeys.has(this.keybinds.buildScrollModifier)){Math.abs(t)>2&&this.setGhostStructure(this.uiState.ghostStructure,t>0?`decrease`:`increase`);return}if(e.altKey)return;let n=this.activeKeys.has(`ControlLeft`)||this.activeKeys.has(`ControlRight`);if(e.ctrlKey){n||Math.abs(e.deltaY)<=10&&this.eventBus.emit(new tn(e.x,e.y,e.deltaY*10));return}Math.abs(e.deltaY)<2||this.eventBus.emit(new tn(e.x,e.y,e.deltaY))}onGestureChange(e){if(this.lastGestureScale===null)return;let t=e.scale/this.lastGestureScale;if(!Number.isFinite(t)||t<=0||(this.lastGestureScale=e.scale,this.pointers.size>=2))return;let n=600*(1/t-1);n!==0&&this.eventBus.emit(new tn(e.clientX,e.clientY,n))}onPointerMove(e){if(e.pointerType!==`touch`&&(this.lastMouseX=e.clientX,this.lastMouseY=e.clientY,(e.movementX||e.movementY)&&this.eventBus.emit(new $t(e.clientX,e.clientY))),e.button===1){e.preventDefault();return}if(e.button>0)return;if(!this.pointerDown){this.eventBus.emit(new Yt(e.clientX,e.clientY));return}if(!this.pointers.has(e.pointerId))return;let t=this.passThroughPointers.get(e.pointerId);if(t){Math.abs(e.clientX-t.x)+Math.abs(e.clientY-t.y)>=this.DRAG_THRESHOLD_PX&&this.cancelPassThroughDrag(e.pointerId);return}if(this.pointers.set(e.pointerId,e),this.pointers.size===1){let t=e.clientX-this.lastPointerX,n=e.clientY-this.lastPointerY,r=Math.abs(e.clientX-this.lastPointerDownX)+Math.abs(e.clientY-this.lastPointerDownY);this.touchPlacementDragState===`candidate`&&r>=this.DRAG_THRESHOLD_PX&&(this.touchPlacementDragState=`active`),this.longPressTimer!==null&&r>=this.DRAG_THRESHOLD_PX&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.touchPlacementDragState===`active`?this.eventBus.emit(new vn(e.clientX,e.clientY)):this.touchPlacementDragState===`candidate`||(this.selectionBoxActive||this.activeKeys.has(this.keybinds.boxSelectWarships)||this.longPressActive?(this.selectionBoxActive=!0,this.eventBus.emit(new xn(this.lastPointerDownX,this.lastPointerDownY,e.clientX,e.clientY))):this.eventBus.emit(new nn(t,n))),this.lastPointerX=e.clientX,this.lastPointerY=e.clientY}else if(this.pointers.size===2){let e=this.getPinchDistance(),t=e-this.lastPinchDistance;if(Math.abs(t)>1){let n=this.getPinchCenter();this.eventBus.emit(new tn(n.x,n.y,-t*2)),this.lastPinchDistance=e}}}onContextMenu(e){if(e.preventDefault(),!(this.lastPointerType===`touch`&&this.uiState.ghostStructure!==null)&&!this.gameView.inSpawnPhase()){if(this.uiState.ghostStructure!==null){this.setGhostStructure(null);return}if(this.unitSelectionActive){this.eventBus.emit(new Zt(null,!1));return}this.eventBus.emit(new en(e.clientX,e.clientY))}}setGhostStructure(e,t=`hotkey`){let n=this.uiState.ghostStructure;if(t===`GUIclick`&&n!==e&&this.eventBus.emit(new an),n!==null&&e===null&&this.eventBus.emit(new pn(null)),t===`hotkey`&&e!==null&&n!==e&&this.eventBus.emit(new pn(mn(e))),this.uiState.ghostStructure===e&&e!==null){if(t===`hotkey`&&(this.gameView.updatesSinceLastTick?.()===null||this.gameView.isCatchingUp?.()||this.gameView.isPaused?.()))return;let e=this.uiState.upgradeMultiplier??1;switch(t){case`GUIclick`:case`hotkey`:if(!this.userSettings.buildMultiplierCycle())return;this.uiState.upgradeMultiplier=e===1?5:e+5,this.uiState.upgradeMultiplier>50&&(this.uiState.upgradeMultiplier=1);break;case`increase`:this.uiState.upgradeMultiplier=e+1,this.uiState.upgradeMultiplier>50&&(this.uiState.upgradeMultiplier=50);break;case`decrease`:this.uiState.upgradeMultiplier=e>1?e-1:1;break}}else this.uiState.upgradeMultiplier=1,this.uiState.ghostStructure=e}parseKeybind(e){return e?.startsWith(`Shift+`)?{shift:!0,code:e.slice(6)}:{shift:!1,code:e}}keybindMatchesEvent(e,t,n=!1){let r=this.parseKeybind(t);return e.code===r.code&&(n||e.shiftKey===r.shift)}isShiftHeld(){return this.shiftHeld}isContinuousActionActive(e){if(!e||e===`Null`)return!1;let{shift:t,code:n}=this.parseKeybind(e);if(!this.activeKeys.has(n))return!1;let r=this.isShiftHeld();return t?r:!r}getContinuousBindings(){return[this.keybinds.moveUp,this.keybinds.moveUpArrow,this.keybinds.moveDown,this.keybinds.moveDownArrow,this.keybinds.moveLeft,this.keybinds.moveLeftArrow,this.keybinds.moveRight,this.keybinds.moveRightArrow,this.keybinds.zoomOut,this.keybinds.zoomOutMinus,this.keybinds.zoomOutNumpad,this.keybinds.zoomIn,this.keybinds.zoomInEqual,this.keybinds.zoomInNumpad,this.keybinds.attackRatioDown,this.keybinds.attackRatioUp,this.keybinds.centerCamera].filter(e=>typeof e==`string`&&e!==``&&e!==`Null`)}getZoomPhysicalCodes(){return[`Minus`,`Equal`,`NumpadAdd`,`NumpadSubtract`,...[this.keybinds.zoomIn,this.keybinds.zoomOut].filter(e=>!!e&&e!==`Null`).map(e=>this.parseKeybind(e).code)]}digitFromKeyCode(e){return e?.length===6&&e.startsWith(`Digit`)&&/^[0-9]$/.test(e[5])?e[5]:e?.length===7&&e.startsWith(`Numpad`)&&/^[0-9]$/.test(e[6])?e[6]:null}buildKeybindMatchesDigit(e,t,n){let r=this.parseKeybind(n);if(t!==r.shift)return!1;let i=this.digitFromKeyCode(e),a=this.digitFromKeyCode(r.code);return i!==null&&a!==null&&i===a}resetGfxModifierHeld(e){return this.keybinds.altKey===`AltLeft`||this.keybinds.altKey===`AltRight`?e.altKey&&!e.ctrlKey:this.keybinds.altKey===`ControlLeft`||this.keybinds.altKey===`ControlRight`?e.ctrlKey:this.keybinds.altKey===`ShiftLeft`||this.keybinds.altKey===`ShiftRight`?e.shiftKey:this.keybinds.altKey===`MetaLeft`||this.keybinds.altKey===`MetaRight`?e.metaKey:this.activeKeys.has(this.keybinds.altKey)}addKeybindAndEvent(e,t,...n){let r,i=[];for(let e of n)typeof e==`function`?i.push(e):e&&typeof e==`object`&&(r=e.ignoreShift);let a={handler:t,conditions:i,ignoreShift:r};this.keybindAndEvent.push([e,a])}resolveBuildKeybind(e,t){let n=[{key:`buildCity`,type:F.City},{key:`buildFactory`,type:F.Factory},{key:`buildPort`,type:F.Port},{key:`buildDefensePost`,type:F.DefensePost},{key:`buildMissileSilo`,type:F.MissileSilo},{key:`buildSamLauncher`,type:F.SAMLauncher},{key:`buildAtomBomb`,type:F.AtomBomb},{key:`buildHydrogenBomb`,type:F.HydrogenBomb},{key:`buildWarship`,type:F.Warship},{key:`buildMIRV`,type:F.MIRV}];for(let{key:r,type:i}of n)if(this.keybindMatchesEvent({code:e,shiftKey:t},this.keybinds[r]))return i;for(let{key:r,type:i}of n)if(this.buildKeybindMatchesDigit(e,t,this.keybinds[r]))return i;return null}canUseBuildKeybinds(){let e=this.gameView.myPlayer?.();return!this.gameView.inSpawnPhase()&&e?.isAlive()===!0}getPinchDistance(){let e=Array.from(this.pointers.values()),t=e[0].clientX-e[1].clientX,n=e[0].clientY-e[1].clientY;return Math.sqrt(t*t+n*n)}getPinchCenter(){let e=Array.from(this.pointers.values());return{x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}}isTextInputTarget(e){let t=e;return t?typeof t.closest==`function`&&t.closest(`setting-keybind`)!==null||t.tagName===`TEXTAREA`||t.isContentEditable?!0:t.tagName===`INPUT`?t.type!==`range`:!1:!1}destroy(){this.moveInterval!==null&&(clearInterval(this.moveInterval),this.moveInterval=null),globalThis.removeEventListener(`${he}:${se}`,this.onKeybindsChanged),this.listenerAbort?.abort(),this.listenerAbort=null,this.eventBus.off(Mn,this.onEmojiTableVisible),this.eventBus.off(Zt,this.onUnitSelection),this.resetPointerState(),this.activeKeys.clear(),this.uiState.preventStacking=!1,this.zoomKeysHeldBeforeControl.clear(),this.shiftHeld=!1,this.emojiTableOpen=!1,this.emojiKeysDown.clear(),this.keybindAndEvent=[],this.keybinds={}}},Xn=50,Zn=150,Qn=Zn*Zn,$n=32,er=150,tr=480,nr=5,rr=.75;function ir(e){return er-tr/(e+nr)}function ar(e,t,n){return e<t?t:e>n?n:e}function or(e,t,n,r,i,a){let o=n-e,s=r-t,c=Math.sqrt(o*o+s*s),l=Math.max(c/3,Xn),u=a?-1:1;return{p0x:e,p0y:t,p1x:e+o/4,p1y:ar(t+s/4+u*l,0,i-1),p2x:e+o*3/4,p2y:ar(t+s*3/4+u*l,0,i-1),p3x:n,p3y:r}}function sr(e,t,n,r,i,a,o,s,c,l,u,d,f,p){let m=!1;for(let h=0;h<10;h++){let h=(d+f)*.5,g=((e*h+t)*h+n)*h+r+.5|0,_=((i*h+a)*h+o)*h+s+.5|0,v=g-c,y=_-l,b=v*v+y*y<=u;b&&(m=!0),(p?b:!b)?d=h:f=h}if(!p&&!m){let d=((e*f+t)*f+n)*f+r+.5|0,p=((i*f+a)*f+o)*f+s+.5|0,m=d-c,h=p-l;if(m*m+h*h>u)return 1}return(d+f)*.5}function cr(e,t,n,r,i,a){let o=-1,s=-1,c=1,l=1/$n,u=3*(e.p1x-e.p0x),d=3*(e.p2x-2*e.p1x+e.p0x),f=r-3*e.p2x+3*e.p1x-e.p0x,p=e.p0x,m=3*(e.p1y-e.p0y),h=3*(e.p2y-2*e.p1y+e.p0y),g=i-3*e.p2y+3*e.p1y-e.p0y,_=e.p0y,v=r-t,y=i-n,b=v*v+y*y>4*Qn,x=a.length,S=e.p0x+.5|0,C=e.p0y+.5|0;for(let e=1;e<=$n;e++){let v=e*l,y=v-l,w=((f*v+d)*v+u)*v+p+.5|0,T=((g*v+h)*v+m)*v+_+.5|0,E=!1;if(b){if(o<0){let e=w-t,a=T-n;if(e*e+a*a>Qn){let e=w-r,a=T-i;e*e+a*a>=Qn&&(o=sr(f,d,u,p,g,h,m,_,t,n,Qn,y,v,!0),E=!0)}}else if(s<0){let e=w-r,t=T-i;e*e+t*t<Qn?s=sr(f,d,u,p,g,h,m,_,r,i,Qn,y,v,!1):E=!0}}if(s>=0&&y<s&&v>=s&&x>0){let e=((f*s+d)*s+u)*s+p+.5|0,t=((g*s+h)*s+m)*s+_+.5|0;for(let n=0;n<x;n++){let r=a[n],i=e-r.x,o=t-r.y;if(i*i+o*o<=r.r*r.r){c=s;break}}if(c<1)break}if(!E&&x>0){let e=w-S,t=T-C,n=e*e+t*t,r=n===0?0:1/n,i=Math.sqrt(n)+er+rr,o=i*i;for(let i=0;i<x;i++){let l=a[i],b=l.x-S,x=l.y-C,w=b*b+x*x;if(w>o)continue;let T,E=b*e+x*t;T=E<=0?w:E>=n?w+n-2*E:w-E*E*r;let D=l.r*l.r,O=(l.r+rr)*(l.r+rr);if(T<=O){let e=s>=0&&y<s?s:y,t=sr(f,d,u,p,g,h,m,_,l.x,l.y,D,e,v,!1);if(t<1){c=t;break}}}if(c<1)break}S=w,C=T}return{tUntargetableStart:o,tUntargetableEnd:s,tSamIntercept:c}}function lr(e,t,n,r,i,a,o){let s=or(e,t,n,r,i,a),c=cr(s,e,t,Math.round(n),Math.round(r),o);return{...s,...c}}var ur=6e4;function dr(e){let t=()=>{try{let t=`${z.gameHttpBase(e)}/${z.gameWorkerPath(e)}/api/singleplayer/${e}/heartbeat`;fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({platform:E()})}).catch(()=>{})}catch{}};t();let n=setInterval(t,ur);return()=>clearInterval(n)}var fr=function(e){return e[e.slow=2]=`slow`,e[e.normal=1]=`normal`,e[e.fast=.5]=`fast`,e[e.fastest=0]=`fastest`,e}({}),pr=[fr.slow,fr.normal,fr.fast,fr.fastest],mr=60,hr=class{constructor(e,t,n){this.lobbyConfig=e,this.isReplay=t,this.eventBus=n,this.replayTurns=[],this.turns=[],this.intents=[],this.paused=!1,this.replaySpeedMultiplier=1,this.winner=null,this.allPlayersStats={},this.archived=!1,this.archiveInFlight=!1,this.turnsExecuted=0,this.turnStartTime=0,this.stopHeartbeat=null}updateCallback(e,t){this.clientConnect=e,this.clientMessage=t}start(){if(console.log(`local server starting`),this.turnCheckInterval=setInterval(()=>{let e=z.turnIntervalMs()*this.replaySpeedMultiplier,t=Math.max(0,this.turns.length-this.turnsExecuted),n=this.replaySpeedMultiplier===fr.fastest&&this.lobbyConfig.gameRecord!==void 0?mr:0;(t===0||n>0&&t<n)&&Date.now()>this.turnStartTime+e&&(this.turnStartTime=Date.now(),this.endTurn())},5),this.eventBus.on(Vn,e=>{this.replaySpeedMultiplier=e.replaySpeedMultiplier}),this.isReplay||(this.eventBus.on(Un,()=>{let e=pr.indexOf(this.replaySpeedMultiplier);e<0||e>=pr.length-1||(this.replaySpeedMultiplier=pr[e+1],this.eventBus.emit(new Vn(this.replaySpeedMultiplier)))}),this.eventBus.on(Wn,()=>{let e=pr.indexOf(this.replaySpeedMultiplier);e<=0||(this.replaySpeedMultiplier=pr[e-1],this.eventBus.emit(new Vn(this.replaySpeedMultiplier)))})),this.startedAt=Date.now(),this.clientConnect(),this.lobbyConfig.gameRecord&&(this.replayTurns=ce(this.lobbyConfig.gameRecord).turns),this.lobbyConfig.gameStartInfo===void 0)throw Error(`missing gameStartInfo`);if(this.clientID=this.lobbyConfig.gameStartInfo.players[0]?.clientID,!this.clientID)throw Error(`missing clientID`);this.clientMessage({type:`start`,gameStartInfo:this.lobbyConfig.gameStartInfo,turns:[],lobbyCreatedAt:this.lobbyConfig.gameStartInfo.lobbyCreatedAt,myClientID:this.lobbyConfig.gameRecord?void 0:this.clientID}),this.lobbyConfig.snapshot!==void 0&&this.onMessage({type:`intent`,intent:{type:`toggle_pause`,paused:!0}}),this.isReplay||(this.stopHeartbeat=dr(this.lobbyConfig.gameStartInfo.gameID))}onMessage(e){if(e.type===`rejoin`){if(!this.clientID)throw Error(`missing clientID`);this.clientMessage({type:`start`,gameStartInfo:this.lobbyConfig.gameStartInfo,turns:this.turns,lobbyCreatedAt:this.lobbyConfig.gameStartInfo.lobbyCreatedAt,myClientID:this.lobbyConfig.gameRecord?void 0:this.clientID})}if(e.type===`intent`){let t={...e.intent,clientID:this.clientID};if(t.type===`toggle_pause`){t.paused?(this.intents.push(t),this.endTurn(),this.paused=!0):(this.paused=!1,this.intents.push(t),this.endTurn());return}if(this.lobbyConfig.gameRecord||this.paused)return;this.intents.push(t)}if(e.type===`hash`){if(!this.lobbyConfig.gameRecord){if(e.turnNumber%100==0){let t=this.turns[e.turnNumber];t&&(t.hash=e.hash)}return}let t=this.replayTurns[e.turnNumber].hash;if(!t){console.warn(`no archived hash found for turn ${e.turnNumber}, client hash: ${e.hash}`);return}t===e.hash?console.log(`hash verified on turn ${e.turnNumber}, client hash: ${e.hash}, server hash: ${t}`):(console.error(`desync detected on turn ${e.turnNumber}, client hash: ${e.hash}, server hash: ${t}`),this.clientMessage({type:`desync`,turn:e.turnNumber,correctHash:t,clientsWithCorrectHash:0,totalActiveClients:1,yourHash:e.hash}))}e.type===`winner`&&(this.winner=e,this.allPlayersStats=e.allPlayersStats,this.isReplay||this.archiveGameRecord(!1))}turnComplete(){this.turnsExecuted++}endTurn(){if(this.paused)return;if(this.replayTurns.length>0){if(this.turns.length>=this.replayTurns.length){this.endGame();return}this.intents=this.replayTurns[this.turns.length].intents}let e={turnNumber:this.turns.length,intents:this.intents};this.turns.push(e),this.intents=[],this.clientMessage({type:`turn`,turn:e})}endGame(){console.log(`local server ending game`),clearInterval(this.turnCheckInterval),this.stopHeartbeat?.(),this.stopHeartbeat=null,!this.isReplay&&this.archiveGameRecord(!0)}archiveGameRecord(t){if(this.archived||this.archiveInFlight||this.lobbyConfig.snapshot!==void 0)return;let n=[{persistentID:d(),username:this.lobbyConfig.playerName,clanTag:this.lobbyConfig.playerClanTag??null,clientID:this.clientID,stats:this.allPlayersStats[this.clientID],cosmetics:this.lobbyConfig.gameStartInfo?.players[0].cosmetics}];if(this.lobbyConfig.gameStartInfo===void 0)throw Error(`missing gameStartInfo`);let r=_(this.lobbyConfig.gameStartInfo.gameID,this.lobbyConfig.gameStartInfo.config,n,this.turns,this.startedAt,Date.now(),this.winner?.winner),i=C.safeParse(r);if(!i.success){let t=e(i.error);console.error(`Error parsing game record`,t);return}this.archiveGame(i.data,t)}async archiveGame(e,t){this.archiveInFlight=!0;try{let n=await ne();if(n===``)return;let i=await gr(JSON.stringify({...e,gitCommit:z.gitCommit()},r)),a=await fetch(`${te()}/archive_singleplayer_game`,{method:`POST`,headers:{"Content-Type":`application/json`,"Content-Encoding":`gzip`,Authorization:n},body:i,keepalive:t});a.ok?this.archived=!0:console.error(`Failed to archive singleplayer game: ${a.status}`)}catch(e){console.warn(`Failed to archive singleplayer game:`,e)}finally{this.archiveInFlight=!1}}};async function gr(e){let t=new CompressionStream(`gzip`),n=t.writable.getWriter(),r=t.readable.getReader();n.write(new TextEncoder().encode(e)),n.close();let i=[],a=!1;for(;!a;){let{value:e,done:t}=await r.read();a=t,e&&i.push(e)}let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(o),c=0;for(let e of i)s.set(e,c),c+=e.length;return s.buffer}var _r=class{constructor(e){this.paused=e}},vr=class{constructor(e,t){this.requestor=e,this.recipient=t}},yr=class{constructor(e,t){this.requestor=e,this.recipient=t}},br=class{constructor(e,t,n=1){this.unitId=e,this.unitType=t,this.amount=n}},xr=class{constructor(e){this.requestor=e}},Sr=class{constructor(e){this.recipient=e}},Cr=class{constructor(e){this.gate=e}},wr=class{constructor(e){this.tile=e}},Tr=class{constructor(e,t){this.targetID=e,this.troops=t}};function Er(e,t){return Number.isFinite(e)?Math.min(e,t):t}var Dr=class{constructor(e,t){this.dst=e,this.troops=t}},Or=class{constructor(e,t,n,r){this.unit=e,this.tile=t,this.rocketDirectionUp=n,this.amount=r}},kr=class{constructor(e){this.targetID=e}},Ar=class{constructor(e,t){this.recipient=e,this.emoji=t}},jr=class{constructor(e,t){this.recipient=e,this.gold=t}},Mr=class{constructor(e,t){this.recipient=e,this.troops=t}},Nr=class{constructor(e,t,n){this.recipient=e,this.quickChatKey=t,this.target=n}},Pr=class{constructor(e,t){this.target=e,this.action=t}},Fr=class{constructor(e){this.action=e}},Ir=class{constructor(e){this.unitId=e}},Lr=class{constructor(e){this.attackID=e}},Rr=class{constructor(e){this.unitID=e}},zr=class{constructor(e,t){this.winner=e,this.allPlayersStats=t}},Br=class{constructor(e){this.stats=e}},Vr=class{constructor(e,t){this.reported=e,this.reason=t}},Hr=class{constructor(e){this.reported=e}},Ur=class{constructor(e,t){this.tick=e,this.hash=t}},Wr=class{constructor(e){this.gameID=e}},Gr=class{constructor(e,t){this.unitIds=e,this.tile=t}},Kr=e=>`pool-redirect:${e}`,qr=`pool-redirect-from`,Jr=class e{static{this.RECONNECT_MAX_ATTEMPTS=10}static{this.RECONNECT_BASE_DELAY_MS=1e3}static{this.RECONNECT_MAX_DELAY_MS=15e3}constructor(e,t){this.lobbyConfig=e,this.eventBus=t,this.socket=null,this.buffer=[],this.pingInterval=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.connectionRefused=!1,this.retriedWithTurnstile=!1,this.isRetryingTurnstile=!1,this.hasBeenAdmitted=!1,this.fallbackCreatorToken=void 0,this.turnstileRetryAbort=null,this.isSessionReady=!1,this.zbinCtx=null,this.intentGate=null,this.unsubscribers=[],this.isLocal=this.lobbyConfig.gameRecord!==void 0||this.lobbyConfig.gameStartInfo?.config.gameType===p.Singleplayer,this.subscribe(vr,e=>this.onSendAllianceRequest(e)),this.subscribe(xr,e=>this.onAllianceRejectUIEvent(e)),this.subscribe(Sr,e=>this.onSendAllianceExtensionIntent(e)),this.subscribe(yr,e=>this.onBreakAllianceRequestUIEvent(e)),this.subscribe(Cr,e=>this.intentGate=e.gate),this.subscribe(wr,e=>this.onSendSpawnIntentEvent(e)),this.subscribe(Tr,e=>this.onSendAttackIntent(e)),this.subscribe(br,e=>this.onSendUpgradeStructureIntent(e)),this.subscribe(Dr,e=>this.onSendBoatAttackIntent(e)),this.subscribe(kr,e=>this.onSendTargetPlayerIntent(e)),this.subscribe(Ar,e=>this.onSendEmojiIntent(e)),this.subscribe(jr,e=>this.onSendDonateGoldIntent(e)),this.subscribe(Mr,e=>this.onSendDonateTroopIntent(e)),this.subscribe(Nr,e=>this.onSendQuickChatIntent(e)),this.subscribe(Pr,e=>this.onSendEmbargoIntent(e)),this.subscribe(Fr,e=>this.onSendEmbargoAllIntent(e)),this.subscribe(Or,e=>this.onBuildUnitIntent(e)),this.subscribe(_r,e=>this.onPauseGameIntent(e)),this.subscribe(zr,e=>this.onSendWinnerEvent(e)),this.subscribe(Br,e=>this.onSendLiveStatsEvent(e)),this.subscribe(Vr,e=>this.onSendPlayerReportEvent(e)),this.subscribe(Ur,e=>this.onSendHashEvent(e)),this.subscribe(Lr,e=>this.onCancelAttackIntentEvent(e)),this.subscribe(Rr,e=>this.onCancelBoatIntentEvent(e)),this.subscribe(Gr,e=>{this.onMoveWarshipEvent(e)}),this.subscribe(Ir,e=>this.onSendDeleteUnitIntent(e)),this.subscribe(Ee,e=>this.onSendKickPlayerIntent(e)),this.subscribe(ue,e=>this.onSendUpdateGameConfigIntent(e)),this.subscribe(ve,e=>this.onSendToggleGameStartTimer(e)),this.subscribe(ye,e=>{this.lobbyConfig.spectator=e.spectator,this.sendMsg({type:`spectate`,spectator:e.spectator})})}subscribe(e,t){this.eventBus.on(e,t),this.unsubscribers.push(()=>this.eventBus.off(e,t))}startPing(){this.isLocal||(this.pingInterval??=window.setInterval(()=>{this.socket!==null&&this.socket.readyState===WebSocket.OPEN&&this.sendMsg({type:`ping`,sentAt:Math.floor(performance.now())})},5*1e3))}stopPing(){this.pingInterval&&=(window.clearInterval(this.pingInterval),null)}connect(e,t){this.isLocal?this.connectLocal(e,t):this.connectRemote(e,t)}updateCallback(e,t){this.isLocal?this.localServer.updateCallback(e,t):(this.onconnect=e,this.onmessage=t)}connectLocal(e,t){this.localServer=new hr(this.lobbyConfig,this.lobbyConfig.gameRecord!==void 0,this.eventBus),this.localServer.updateCallback(e,t),this.localServer.start()}connectRemote(e,t){if(this.connectionRefused)return;this.isSessionReady=!1,this.startPing(),this.killExistingSocket();let n;try{n=z.gameWorkerPath(this.lobbyConfig.gameID)}catch(e){if(!(e instanceof ee))throw e;console.warn(`No server for game`,this.lobbyConfig.gameID,e),this.handleConnectionRefused(Re.Unknown);return}let r=new WebSocket(`${z.gameWsBase(this.lobbyConfig.gameID)}/${n}`);this.socket=r;let i=null;this.socket.binaryType=`arraybuffer`,this.onconnect=e,this.onmessage=t,this.socket.onopen=()=>{if(i=Date.now(),console.log(`Connected to game server!`),this.socket===null){console.error(`socket is null`);return}e()},this.socket.onmessage=e=>{this.reconnectAttempts=0,this.cancelReconnect();try{let t=h(new Uint8Array(e.data),this.zbinCtx??void 0);if(t.type===`redirect`){this.handlePoolRedirect(t.gameID);return}if(t.type===`start`&&(this.zbinCtx=u(t.gameStartInfo.players)),t.type===`lobby_info`||t.type===`start`){this.hasBeenAdmitted=!0,this.fallbackCreatorToken=void 0,delete this.lobbyConfig.creatorToken;let e=sessionStorage.getItem(qr);e!==null&&(sessionStorage.removeItem(Kr(e)),sessionStorage.removeItem(qr))}this.isSessionReady=!0,this.flushBuffer(),this.onmessage(t)}catch(t){let n=e.data instanceof ArrayBuffer?`${e.data.byteLength} bytes`:typeof e.data;console.error(`Error in onmessage handler:`,t,`frame:`,n);return}},this.socket.onerror=()=>{this.socket!==null&&this.socket.close()},this.socket.onclose=e=>{this.isSessionReady=!1;let t=S(r.url,e,i);if(e.code===k.Normal)console.log(`Game socket ${t}`);else{let n=ie(e.code)?`not retrying`:`reconnecting`;console.warn(`Game socket ${t}; ${n}`)}if(ie(e.code)){e.code===k.Normal?(this.fallbackCreatorToken=void 0,this.connectionRefused=!0,this.stopPing()):this.shouldAttemptTurnstileFallback(e)?this.retryWithFreshTurnstileToken(e.reason):(this.fallbackCreatorToken=void 0,this.handleConnectionRefused(e.reason));return}this.fallbackCreatorToken=void 0,this.scheduleReconnect()}}shouldAttemptTurnstileFallback(e){return e.code===k.Unauthorized&&(e.reason===Re.TurnstilePassRequired||e.reason===Re.TurnstileFailed)&&!this.hasBeenAdmitted&&!this.connectionRefused&&this.lobbyConfig.turnstileToken===null&&!this.retriedWithTurnstile&&this.lobbyConfig.refreshTurnstileToken!==void 0}async retryWithFreshTurnstileToken(e){this.retriedWithTurnstile=!0,this.isRetryingTurnstile=!0,this.stopPing(),this.cancelReconnect(),this.killExistingSocket();let t=this.lobbyConfig.refreshTurnstileToken;if(!t){this.isRetryingTurnstile=!1,this.handleConnectionRefused(e);return}let n=new AbortController;this.turnstileRetryAbort=n;try{let r=await t(n.signal);if(this.turnstileRetryAbort===n&&(this.turnstileRetryAbort=null),this.isRetryingTurnstile=!1,this.connectionRefused||n.signal.aborted)return;if(!r){this.fallbackCreatorToken=void 0,this.handleConnectionRefused(e);return}this.lobbyConfig.turnstileToken=r,this.fallbackCreatorToken!==void 0&&(this.lobbyConfig.creatorToken=this.fallbackCreatorToken,this.fallbackCreatorToken=void 0),this.reconnectAttempts=0,this.onconnect&&this.onmessage?this.connectRemote(this.onconnect,this.onmessage):this.handleConnectionRefused(e)}catch(t){if(this.turnstileRetryAbort===n&&(this.turnstileRetryAbort=null),this.isRetryingTurnstile=!1,this.connectionRefused||n.signal.aborted||t instanceof D&&t.code===`cancelled`){this.fallbackCreatorToken=void 0,this.connectionRefused=!0;return}this.handleConnectionRefused(e)}}handlePoolRedirect(e){let t=this.lobbyConfig.gameID,n=Kr(t);if(sessionStorage.getItem(n)!==null){this.handleConnectionRefused(Re.PoolRedirect);return}sessionStorage.setItem(n,`1`),sessionStorage.setItem(qr,t),window.location.href=z.gamePath(e)}handleConnectionRefused(e){if(this.connectionRefused)return;if(this.connectionRefused=!0,this.stopPing(),e===Re.WrongWorker&&!Me()){let e=this.lobbyConfig.gameID,t=`wrong-worker-redirect:${e}`;if(sessionStorage.getItem(t)===null){sessionStorage.setItem(t,`1`),window.location.href=`${z.gameNavigateBase(e)}/game/${e}${window.location.search}`;return}}let n=o(e)?e:Re.Unknown;this.showTerminalDialog(t(`error_modal.connection_refused`,{reason:t(n)}))}showTerminalDialog(e){Oe(e,{variant:`warning`,confirmText:t(`win_modal.exit`),cancelText:t(`common.close`)}).then(e=>{e&&(window.location.href=f())})}reconnect(){if(this.isLocal){this.connect(this.onconnect,this.onmessage);return}this.scheduleReconnect()}scheduleReconnect(){if(this.connectionRefused||this.isRetryingTurnstile||this.reconnectTimeout!==null||this.socket?.readyState===WebSocket.CONNECTING)return;if(this.reconnectAttempts>=e.RECONNECT_MAX_ATTEMPTS){console.warn(`giving up after ${this.reconnectAttempts} reconnect attempts`),this.connectionRefused=!0,this.stopPing(),this.showTerminalDialog(t(`error_modal.connection_lost`));return}this.reconnectAttempts++;let n=e.reconnectDelay(this.reconnectAttempts);console.log(`reconnect attempt ${this.reconnectAttempts}/${e.RECONNECT_MAX_ATTEMPTS} in ${n} ms`),this.reconnectTimeout=window.setTimeout(()=>{this.reconnectTimeout=null,this.connectRemote(this.onconnect,this.onmessage)},n)}static reconnectDelay(t){if(t<=1)return 0;let n=Math.min(e.RECONNECT_MAX_DELAY_MS,e.RECONNECT_BASE_DELAY_MS*2**(t-2));return Math.round(n*(.75+Math.random()*.5))}cancelReconnect(){this.reconnectTimeout!==null&&(window.clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null)}turnComplete(){this.isLocal&&this.localServer.turnComplete()}async joinGame(){let e=this.lobbyConfig.creatorToken;delete this.lobbyConfig.creatorToken,this.fallbackCreatorToken=e;let t=e??await y();this.sendMsg({type:`join`,gameID:this.lobbyConfig.gameID,username:this.lobbyConfig.playerName,clanTag:this.lobbyConfig.playerClanTag??null,cosmetics:this.lobbyConfig.cosmetics,turnstileToken:this.lobbyConfig.turnstileToken,token:t,spectator:this.lobbyConfig.spectator,gitCommit:z.gitCommit(),platform:E(),device:w()})}async rejoinGame(e){this.sendMsg({type:`rejoin`,gameID:this.lobbyConfig.gameID,lastTurn:e,token:await y(),gitCommit:z.gitCommit()})}leaveGame(){for(let e of this.unsubscribers.splice(0))e();if(this.isLocal){this.localServer.endGame();return}this.connectionRefused=!0,this.fallbackCreatorToken=void 0,this.turnstileRetryAbort?.abort(),this.turnstileRetryAbort=null,this.isRetryingTurnstile=!1,this.stopPing(),this.cancelReconnect(),this.socket!==null&&(this.socket.readyState===WebSocket.OPEN?console.log(`on stop: leaving game`):console.log(`WebSocket is not open. Current state:`,this.socket.readyState),this.killExistingSocket())}onSendAllianceRequest(e){this.sendIntent({type:`allianceRequest`,recipient:e.recipient.id()})}onAllianceRejectUIEvent(e){this.sendIntent({type:`allianceReject`,requestor:e.requestor.id()})}onBreakAllianceRequestUIEvent(e){this.sendIntent({type:`breakAlliance`,recipient:e.recipient.id()})}onSendAllianceExtensionIntent(e){this.sendIntent({type:`allianceExtension`,recipient:e.recipient.id()})}onSendSpawnIntentEvent(e){this.sendIntent({type:`spawn`,tile:e.tile})}onSendAttackIntent(e){this.isSendableTroops(`attack`,e.troops)&&this.sendIntent({type:`attack`,targetID:e.targetID,troops:e.troops})}onSendBoatAttackIntent(e){this.isSendableTroops(`boat`,e.troops)&&this.sendIntent({type:`boat`,troops:e.troops,dst:e.dst})}onSendUpgradeStructureIntent(e){this.sendIntent({type:`upgrade_structure`,unit:e.unitType,unitId:e.unitId,amount:e.amount})}onSendTargetPlayerIntent(e){this.sendIntent({type:`targetPlayer`,target:e.targetID})}onSendEmojiIntent(e){this.sendIntent({type:`emoji`,recipient:e.recipient===`AllPlayers`?T:e.recipient.id(),emoji:e.emoji})}onSendDonateGoldIntent(e){this.sendIntent({type:`donate_gold`,recipient:e.recipient.id(),gold:e.gold?Number(e.gold):null})}onSendDonateTroopIntent(e){this.sendIntent({type:`donate_troops`,recipient:e.recipient.id(),troops:e.troops})}onSendQuickChatIntent(e){this.sendIntent({type:`quick_chat`,recipient:e.recipient.id(),quickChatKey:e.quickChatKey,target:e.target})}onSendEmbargoIntent(e){this.sendIntent({type:`embargo`,targetID:e.target.id(),action:e.action})}onSendEmbargoAllIntent(e){this.sendIntent({type:`embargo_all`,action:e.action})}onBuildUnitIntent(e){this.sendIntent({type:`build_unit`,unit:e.unit,tile:e.tile,rocketDirectionUp:e.rocketDirectionUp,amount:e.amount})}onPauseGameIntent(e){this.sendIntent({type:`toggle_pause`,paused:e.paused})}onSendWinnerEvent(e){this.isLocal||this.socket?.readyState===WebSocket.OPEN?this.sendMsg({type:`winner`,winner:e.winner,allPlayersStats:e.allPlayersStats}):console.log(`WebSocket is not open. Current state:`,this.socket?.readyState)}onSendLiveStatsEvent(e){(this.isLocal||this.socket?.readyState===WebSocket.OPEN)&&this.sendMsg({type:`live_stats`,stats:e.stats})}onSendPlayerReportEvent(e){if(!this.isLocal){if(this.socket?.readyState!==WebSocket.OPEN){console.log(`WebSocket is not open, dropping report. Current state:`,this.socket?.readyState);return}this.sendMsg({type:`report`,reported:e.reported,reason:e.reason}),this.eventBus.emit(new Hr(e.reported))}}onSendHashEvent(e){this.isLocal||this.socket?.readyState===WebSocket.OPEN?this.sendMsg({type:`hash`,turnNumber:e.tick,hash:e.hash}):console.log(`WebSocket is not open. Current state:`,this.socket?.readyState)}onCancelAttackIntentEvent(e){this.sendIntent({type:`cancel_attack`,attackID:e.attackID})}onCancelBoatIntentEvent(e){this.sendIntent({type:`cancel_boat`,unitID:e.unitID})}onMoveWarshipEvent(e){this.sendIntent({type:`move_warship`,unitIds:e.unitIds,tile:e.tile})}onSendDeleteUnitIntent(e){this.sendIntent({type:`delete_unit`,unitId:e.unitId})}onSendKickPlayerIntent(e){this.sendIntent({type:`kick_player`,targetClientID:e.target})}onSendUpdateGameConfigIntent(e){this.sendIntent({type:`update_game_config`,config:e.config})}onSendToggleGameStartTimer(e){this.sendIntent({type:`toggle_game_start_timer`})}isSendableTroops(e,t){return Number.isFinite(t)&&t>=0?!0:(console.error(Error(`Dropped ${e} intent with invalid troops: ${t}`)),!1)}sendIntent(e){if(this.intentGate!==null&&!this.intentGate(e))return;let t={type:`intent`,intent:e};this.sendMsg(t)}flushBuffer(){if(!(this.socket===null||this.socket.readyState!==WebSocket.OPEN))for(;this.buffer.length>0;){console.log(`sending dropped message`);let e=this.buffer.shift();if(e===void 0){console.warn(`msg is undefined`);continue}this.socket.send(x(e,this.zbinCtx??void 0))}}sendMsg(e){if(this.connectionRefused)return;if(this.isLocal){this.localServer.onMessage(e);return}else if(this.socket===null)return;let t=e.type===`join`||e.type===`rejoin`||e.type===`ping`;this.socket.readyState===WebSocket.OPEN?!t&&(!this.isSessionReady||this.buffer.length>0)?this.buffer.push(e):this.socket.send(x(e,this.zbinCtx??void 0)):(console.warn(`socket not ready, buffering and reconnecting`),this.buffer.push(e),this.scheduleReconnect())}killExistingSocket(){if(this.isSessionReady=!1,this.socket!==null){this.socket.onmessage=null,this.socket.onopen=null,this.socket.onclose=null,this.socket.onerror=null;try{(this.socket.readyState===WebSocket.OPEN||this.socket.readyState===WebSocket.CONNECTING)&&this.socket.close()}catch(e){console.warn(`Error while closing WebSocket:`,e)}this.socket=null}}},Yr=class{constructor(e,t){this.eventBus=e,this.view=t}init(){this.eventBus.on(rn,e=>this.view.setAltView(e.alternateView)),this.eventBus.on(qn,e=>this.view.setGridView(e.enabled))}},Xr=class{constructor(e,t){this.player=e,this.zoom=t}},Zr=class{constructor(e,t){this.x=e,this.y=t}},Qr=class{constructor(e){this.unit=e}},$r=.03,ei=class{constructor(e,t,n){this.game=e,this.eventBus=t,this.canvas=n,this.scale=1.8,this.offsetX=-350,this.offsetY=-200,this.lastGoToCallTime=null,this.targetScale=null,this.intervalID=null,this.changed=!1,this._boundingRect=this.canvas.getBoundingClientRect(),this.eventBus.on(tn,e=>this.onZoom(e)),this.eventBus.on(nn,e=>this.onMove(e)),this.eventBus.on(Xr,e=>this.onGoToPlayer(e)),this.eventBus.on(Zr,e=>this.onGoToPosition(e)),this.eventBus.on(Qr,e=>this.onGoToUnit(e)),this.eventBus.on(Gn,()=>this.centerCamera())}updateCanvasBoundingRect(){this._boundingRect=this.canvas.getBoundingClientRect()}boundingRect(){return this._boundingRect}width(){return this.boundingRect().width}hasChanged(){return this.changed}resetChanged(){this.changed=!1}handleTransform(e){e.imageSmoothingEnabled=!1,e.setTransform(this.scale,0,0,this.scale,this.game.width()/2-this.offsetX*this.scale,this.game.height()/2-this.offsetY*this.scale)}worldToCanvasCoordinates(e){let t=e.x,n=e.y,r=t-this.game.width()/2,i=n-this.game.height()/2;return{x:(r-this.offsetX)*this.scale+this.game.width()/2,y:(i-this.offsetY)*this.scale+this.game.height()/2}}worldToScreenCoordinates(e){let t=this.worldToCanvasCoordinates(e);return this.canvasToScreenCoordinates(t.x,t.y)}screenToWorldCoordinates(e,t){let n=this.screenToWorldCoordinatesFloat(e,t);return new g(Math.floor(n.x),Math.floor(n.y))}screenToWorldCoordinatesFloat(e,t){let n=this.screenToCanvasCoordinates(e,t);return{x:(n.x-this.game.width()/2)/this.scale+this.offsetX+this.game.width()/2,y:(n.y-this.game.height()/2)/this.scale+this.offsetY+this.game.height()/2}}canvasToScreenCoordinates(e,t){let n=this.boundingRect();return{x:e+n.left,y:t+n.top}}screenToCanvasCoordinates(e,t){let n=this.boundingRect();return{x:e-n.left,y:t-n.top}}screenBoundingRect(){let e=this.boundingRect(),t=e.width,n=e.height,r=-this.game.width()/2/this.scale+this.offsetX,i=-this.game.height()/2/this.scale+this.offsetY,a=r+this.game.width()/2,o=i+this.game.height()/2,s=(t-this.game.width()/2)/this.scale+this.offsetX,c=(n-this.game.height()/2)/this.scale+this.offsetY,l=s+this.game.width()/2,u=c+this.game.height()/2;return[new g(Math.floor(a),Math.floor(o)),new g(Math.floor(l),Math.floor(u))]}isOnScreen(e){let[t,n]=this.screenBoundingRect();return e.x>t.x&&e.x<n.x&&e.y>t.y&&e.y<n.y}screenCenter(){let[e,t]=this.screenBoundingRect();return{screenX:e.x+Math.floor((t.x-e.x)/2),screenY:e.y+Math.floor((t.y-e.y)/2)}}onGoToPlayer(e){this.clearTarget();let t=e.player.nameLocation();t&&(this.target=new g(t.x,t.y),this.targetScale=e.zoom??null,this.intervalID=setInterval(()=>this.goTo(),16))}onGoToPosition(e){this.clearTarget(),this.target=new g(e.x,e.y),this.intervalID=setInterval(()=>this.goTo(),16)}onGoToUnit(e){this.clearTarget(),this.target=new g(this.game.x(e.unit.lastTile()),this.game.y(e.unit.lastTile())),this.intervalID=setInterval(()=>this.goTo(),16)}centerCamera(){this.clearTarget();let e=this.game.myPlayer()?.nameLocation();e&&(this.target=new g(e.x,e.y),this.intervalID=setInterval(()=>this.goTo(),16))}goTo(){let{screenX:e,screenY:t}=this.screenCenter();if(this.target===null)throw Error(`null target`);let n=Math.abs(this.target.x-e)+Math.abs(this.target.y-t)<2,r=this.targetScale===null||Math.abs(this.scale-this.targetScale)<.01;if(n&&r){this.clearTarget();return}let i,a=window.performance.now();i=this.lastGoToCallTime===null?16:a-this.lastGoToCallTime,this.lastGoToCallTime=a;let o=1-$r**(i/1e3);if(this.offsetX+=Math.max(Math.min((this.target.x-e)*o,15),-15),this.offsetY+=Math.max(Math.min((this.target.y-t)*o,15),-15),this.targetScale!==null){let e=this.scale,t=1-.7**(i/1e3),n=this.targetScale-this.scale,r=n*t,a=Math.sign(n)*Math.min(Math.abs(n),6*i/1e3);this.scale+=Math.abs(r)>=Math.abs(a)?r:a;let{width:o,height:s}=this.boundingRect();this.offsetX+=(o-this.game.width())*(1/(2*e)-1/(2*this.scale)),this.offsetY+=(s-this.game.height())*(1/(2*e)-1/(2*this.scale))}this.changed=!0}onZoom(e){this.clearTarget();let t=this.scale,n=1+e.delta/600;this.scale/=n,this.scale=Math.max(.2,Math.min(20,this.scale));let r=this.screenToCanvasCoordinates(e.x,e.y),i=(r.x-this.game.width()/2)/t+this.offsetX,a=(r.y-this.game.height()/2)/t+this.offsetY;this.offsetX=i-(r.x-this.game.width()/2)/this.scale,this.offsetY=a-(r.y-this.game.height()/2)/this.scale,this.clampOffsets(),this.changed=!0}clampOffsets(){let e=this.boundingRect(),t=e.width,n=e.height,r=this.game.width(),i=this.game.height(),a=this.scale,o=-r/2+(r-t)/(2*a),s=r/2+(r-t)/(2*a),c=-i/2+(i-n)/(2*a),l=i/2+(i-n)/(2*a);this.offsetX<o?this.offsetX=o:this.offsetX>s&&(this.offsetX=s),this.offsetY<c?this.offsetY=c:this.offsetY>l&&(this.offsetY=l)}onMove(e){this.clearTarget(),this.offsetX-=e.deltaX/this.scale,this.offsetY-=e.deltaY/this.scale,this.clampOffsets(),this.changed=!0}clearTarget(){this.intervalID!==null&&(clearInterval(this.intervalID),this.intervalID=null),this.target=null,this.targetScale=null}override(e=0,t=0,n=1){this.clearTarget(),this.offsetX=e,this.offsetY=t,this.scale=n,this.changed=!0}centerAll(e=1){let t=this.boundingRect().width,n=this.boundingRect().height,r=this.game.width(),i=this.game.height(),a=t/r*e,o=n/i*e,s=Math.min(a,o),c=(r-t)/2/s,l=(i-n)/2/s;this.override(c,l,s)}};function ti(e){if(e.length<1)return[];let t=e[0]>>>0,n=[],r=1;for(let i=0;i<t&&r+1<e.length;i++){let t=e[r]>>>0,i=e[r+1]>>>0;if(i<2||r+i>e.length)break;switch(t){case 1:{if(i<7)break;let t=e[r+2]>>>0,a=e[r+3]>>>0,o=e[r+4]>>>0,s=e[r+5]>>>0,c=e[r+6]>>>0;if(7+c!==i)break;let l=r+7,u=l+c,d=e.slice(l,u);n.push({kind:`grid`,unitId:t,planId:a,startTick:o,ticksPerStep:s,path:d});break}case 2:{if(i<9)break;let t=e[r+2]>>>0,a=e[r+3]>>>0,o=e[r+4]>>>0,s=e[r+5]>>>0,c=e[r+6]>>>0,l=e[r+7]>>>0,u=e[r+8]>>>0;if(9+l+u!==i)break;let d=r+9,f=d+l,p=f,m=p+u,h=e.slice(d,f),g=e.slice(p,m);n.push({kind:`train`,engineUnitId:t,carUnitIds:h,planId:a,startTick:o,speed:s,spacing:c,path:g});break}default:break}r+=i}return n}var ni=[F.TransportShip,F.Warship,F.Shell,F.SAMMissile,F.Port,F.AtomBomb,F.HydrogenBomb,F.TradeShip,F.MissileSilo,F.DefensePost,F.SAMLauncher,F.City,F.MIRV,F.MIRVWarhead,F.Train,F.Factory];new Map(ni.map((e,t)=>[e,t+1]));var ri=e=>{let t=ni[e-1];if(!t)throw Error(`Unknown packed unit type int: ${e}`);return t},ii=e=>{switch(e){case 1:return me.Engine;case 2:return me.TailEngine;case 3:return me.Carriage;default:return}},ai=e=>e&4095,oi=e=>{let t=e>>12&4095;return t===4095?void 0:t},si=e=>ri(e>>24&31),ci=e=>(e&256)!=0,li=e=>(e&512)!=0,ui=e=>(e&1024)!=0,di=e=>(e&2048)!=0,fi=e=>(e&4096)!=0,pi=e=>{let t=e>>13&3;if(t!==0)return t===2},mi=e=>ii(e>>15&3),hi=e=>(e&1<<17)!=0,gi=e=>{let t=e>>18&3;return t===0?`patrolling`:t===1?`retreating`:`docked`},_i=e=>(e&1<<20)!=0,vi=e=>e>>21&63,yi=e=>(e&1<<27)!=0,bi=e=>(e&1<<28)!=0,xi=e=>(e&1<<29)!=0,Si=e=>(e&1<<30)!=0,Ci=e=>(e&1<<31)!=0,wi=class{constructor(e,t){this.buffer=e,this.offset=t}get id(){return this.buffer[this.offset+0]}get pos(){return this.buffer[this.offset+1]}get lastPos(){return this.buffer[this.offset+2]}get troops(){return this.buffer[this.offset+3]}get health(){let e=this.buffer[this.offset+4];return Number.isNaN(e)?void 0:e}get targetTile(){let e=this.buffer[this.offset+5];return Number.isNaN(e)?void 0:e}get targetUnitId(){let e=this.buffer[this.offset+6];return Number.isNaN(e)?void 0:e}get markedForDeletion(){let e=this.buffer[this.offset+7];return Number.isNaN(e)?!1:e}get ownerID(){return ai(this.buffer[this.offset+18])}get lastOwnerID(){return oi(this.buffer[this.offset+18])}get unitType(){return si(this.buffer[this.offset+18])}get level(){return this.buffer[this.offset+20]}get isActive(){return ci(this.buffer[this.offset+19])}get reachedTarget(){return li(this.buffer[this.offset+19])}get targetable(){return ui(this.buffer[this.offset+19])}get underConstruction(){return di(this.buffer[this.offset+19])}get hasTrainStation(){return fi(this.buffer[this.offset+19])}get loaded(){return pi(this.buffer[this.offset+19])}get trainType(){return mi(this.buffer[this.offset+19])}get hasWarshipState(){return hi(this.buffer[this.offset+19])}get warshipStateState(){return gi(this.buffer[this.offset+19])}get warshipIsInCombat(){return _i(this.buffer[this.offset+19])}get warshipVeterancy(){return vi(this.buffer[this.offset+19])}get warshipVeterancyProgress(){return this.buffer[this.offset+11]}get warshipLastCombatTick(){return this.buffer[this.offset+8]}get warshipPatrolTile(){let e=this.buffer[this.offset+9];return Number.isNaN(e)?void 0:e}get warshipRetreatPort(){let e=this.buffer[this.offset+10];return Number.isNaN(e)?void 0:e}get hasTransportShipState(){return yi(this.buffer[this.offset+19])}get transportIsRetreating(){return bi(this.buffer[this.offset+19])}get transportTroops(){return this.buffer[this.offset+16]}get hasNukeState(){return xi(this.buffer[this.offset+19])}get nukeTargetedBySam(){return Si(this.buffer[this.offset+19])}get nukeWaitTicks(){return this.buffer[this.offset+17]}get hasSamUpgrade(){return Ci(this.buffer[this.offset+19])}get samUpgradeStartTick(){let e=this.buffer[this.offset+12];return Number.isNaN(e)?void 0:e}get samUpgradeDuration(){return this.buffer[this.offset+13]}get samUpgradeStartRange(){return this.buffer[this.offset+14]}get samUpgradeTargetLevel(){return this.buffer[this.offset+15]}toUnitUpdate(){let e;this.hasWarshipState&&(e={state:this.warshipStateState,patrolTile:this.warshipPatrolTile,retreatPort:this.warshipRetreatPort,isInCombat:this.warshipIsInCombat,lastCombatTick:this.warshipLastCombatTick,veterancy:this.warshipVeterancy,veterancyProgress:this.warshipVeterancyProgress});let t;this.hasTransportShipState&&(t={isRetreating:this.transportIsRetreating,troops:this.transportTroops});let n;this.hasNukeState&&(n={targetedBySam:this.nukeTargetedBySam,waitTicks:this.nukeWaitTicks});let r;return this.hasSamUpgrade&&(r={upgradeStartTick:this.samUpgradeStartTick,startRange:this.samUpgradeStartRange,targetLevel:this.samUpgradeTargetLevel,duration:this.samUpgradeDuration}),{type:Et.Unit,unitType:this.unitType,troops:this.troops,id:this.id,ownerID:this.ownerID,lastOwnerID:this.lastOwnerID,pos:this.pos,lastPos:this.lastPos,isActive:this.isActive,reachedTarget:this.reachedTarget,warshipState:e,transportShipState:t,nukeState:n,targetable:this.targetable,markedForDeletion:this.markedForDeletion,targetUnitId:this.targetUnitId,targetTile:this.targetTile,health:this.health,underConstruction:this.underConstruction,level:this.level,hasTrainStation:this.hasTrainStation,trainType:this.trainType,loaded:this.loaded,samUpgrade:r,missileTimerQueue:[]}}};function Ti(e,t){if(!e||e.length===0)return[];let n=new Map;if(t){let e=0;for(;e<t.length;){let r=t[e++],i=t[e++],a=[];for(let n=0;n<i;n++)a.push(t[e++]);n.set(r,a)}}let r=[];for(let t=0;t<e.length;t+=21){let i=new wi(e,t).toUnitUpdate();i.missileTimerQueue=n.get(i.id)??[],r.push(i)}return r}var Ei=class{constructor(){}smallID(){return 0}clientID(){return`TERRA_NULLIUS_CLIENT_ID`}id(){return null}isPlayer(){return!1}};function Di(e){let t=new Map;function n(e){for(;t.get(e)!==e;){let n=t.get(e);t.set(e,t.get(n)),e=n}return e}function r(e,r){let i=n(e),a=n(r);i!==a&&t.set(a,i)}for(let n of e.values())n.smallID>0&&t.set(n.smallID,n.smallID);for(let n of e.values())if(!(!n.allies||n.smallID<=0))for(let e of n.allies)t.has(e)&&r(n.smallID,e);let i=new Map;for(let e of t.keys())i.set(e,n(e));return i}var Oi=1;function ki(e,t,n,r){return t<=0?2:e===t?0:n&&e>0&&e<r&&t<r&&n[t*r+e]===Oi?1:2}function Ai(e,t,n=0,r,i=0,a,o=0){let s=[];for(let c of e.values()){if(c.targetTile===null||!c.isActive||c.waitTicks>0)continue;let e=a?.get(c.id);if(e&&e.startTick>o)continue;let l=We[c.unitType];l&&s.push({x:c.targetTile%t,y:(c.targetTile-c.targetTile%t)/t,innerRadius:l.inner,outerRadius:l.outer,relation:ki(c.ownerID,n,r,i)})}return s}var ji=new Set([...Ke,vt]),Mi=4095;function Ni(e,t,n={}){let r=new Map,i=n.localPlayerSmallID??0,a=n.localPlayerID??``,o=i>0?e.get(i):void 0,s=n.tileState,c=-1,l=0;for(let t of e.values())t.isAlive&&t.tilesOwned>l&&(l=t.tilesOwned,c=t.smallID);let u=new Set,d=new Set;for(let e of t.values())!e.isActive||!ji.has(e.unitType)||(u.add(e.ownerID),i>0&&s!==void 0&&e.targetTile!==null&&(s[e.targetTile]&Mi)===i&&d.add(e.ownerID));for(let t of e.values()){if(!t.isAlive)continue;let e=t.smallID,s=e===c,l=t.isTraitor,f=t.isDisconnected,p=t.inDoomsdayClock,m=(n.tick??0)-t.markedDoomsdayClockTick,h=n.doomsdayClockWarnTicks??0,g=p&&m>=h,_=p&&t.isDecaying,v=p&&h>0?Math.max(0,Math.min(1,m/h)):0,y=t.traitorRemainingTicks,b=u.has(e),x=d.has(e),S=!1,C=!1,w=!1,T=!1,E=0,D=0;if(o!==void 0&&e!==i&&(S=o.allies.includes(e),T=t.outgoingAllianceRequests.includes(a),C=n.isTransitiveTarget?n.isTransitiveTarget(e):o.targets.includes(e),w=o.embargoes.includes(e)||t.embargoes.includes(i),S&&n.tick!==void 0&&n.allianceDuration!==void 0&&n.localPlayerID)){let e=t.alliances.find(e=>e.other===n.localPlayerID);if(e){let t=Math.max(0,e.expiresAt-n.tick);E=Math.max(0,Math.min(1,t/Math.max(1,n.allianceDuration))),D=t}}(s||l||f||p||y>0||b||S||T||C||w||x)&&r.set(e,{crown:s,traitor:l,disconnected:f,inDoomsdayClock:p,doomsdayClockDraining:g,doomsdayClockDecaying:_,doomsdayClockWarnProgress:v,alliance:S,allianceReq:T,target:C,embargo:w,nukeActive:b,nukeTargetsMe:x,traitorRemainingTicks:y,allianceFraction:E,allianceRemainingTicks:D})}return r}var G=1024,Pi=0,Fi=1,Ii=2,Li=new Uint8Array(G*G);function Ri(e,t){if(Li.fill(Pi),t&&t.size>0){let e=new Map;for(let[n,r]of t){if(n<=0||n>=G)continue;let t=e.get(r);t||(t=[],e.set(r,t)),t.push(n)}for(let t of e.values())for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let r=t[e],i=t[n];Li[r*G+i]=Fi,Li[i*G+r]=Fi}}for(let t of e.values()){let e=t.smallID;if(!(e<=0||e>=G)){if(t.allies){for(let n of t.allies)if(n>0&&n<G){let t=e*G+n,r=n*G+e;Li[t]<Fi&&(Li[t]=Fi),Li[r]<Fi&&(Li[r]=Fi)}}if(t.embargoes)for(let n of t.embargoes)n>0&&n<G&&(Li[e*G+n]=Ii,Li[n*G+e]=Ii)}}return{matrix:Li,size:G}}var zi=4096,Bi=class{constructor(e,t){this.unitTrails=new Map,this._dirtyRowMin=1/0,this._dirtyRowMax=-1,this._changedTiles=[],this.mapW=e,this.trailState=new Uint16Array(e*t),this.trailCounts=new Uint16Array(e*t)}getTrailState(){return this.trailState}get dirtyRowMin(){return this._dirtyRowMin}get dirtyRowMax(){return this._dirtyRowMax}get changedTiles(){return this._changedTiles}clearDirtyRows(){this._dirtyRowMin=1/0,this._dirtyRowMax=-1,this._changedTiles.length=0}reset(){this.unitTrails.clear(),this.trailState.fill(0),this.trailCounts.fill(0),this._dirtyRowMin=1/0,this._dirtyRowMax=-1,this._changedTiles.length=0}update(e,t){this.clearDeadUnits(e);for(let n of t){let t=e.get(n);if(!t)continue;let r=xt.has(t.unitType),i=this.unitTrails.get(n);i||(i={value:t.ownerID|(r?zi:0),tiles:new Set,lastPosStamped:-1},this.unitTrails.set(n,i));let a=r?t.lastPos:t.pos;i.lastPosStamped===-1?(this.claim(a,i),i.lastPosStamped=a):i.lastPosStamped!==a&&(this.bresenham(i.lastPosStamped,a,i),i.lastPosStamped=a)}}clearDeadUnits(e){for(let[t,n]of this.unitTrails)if(!e.has(t)){this.unitTrails.delete(t);for(let e of n.tiles)--this.trailCounts[e]===0&&this.stamp(e,0)}}claim(e,t){t.tiles.has(e)||(t.tiles.add(e),this.trailCounts[e]++),this.stamp(e,t.value)}stamp(e,t){if(this.trailState[e]===t)return;this.trailState[e]=t,this._changedTiles.push(e);let n=e/this.mapW|0;n<this._dirtyRowMin&&(this._dirtyRowMin=n),n>this._dirtyRowMax&&(this._dirtyRowMax=n)}bresenham(e,t,n){let r=this.mapW,i=e%r,a=(e-i)/r,o=t%r,s=(t-o)/r,c=Math.abs(o-i),l=-Math.abs(s-a),u=i<o?1:-1,d=a<s?1:-1,f=c+l;for(;;){let e=a*r+i;if(this.claim(e,n),i===o&&a===s)break;let t=2*f;t>=l&&(f+=l,i+=u),t<=c&&(f+=c,a+=d)}}};function Vi(e){switch(e){case me.Engine:return _t.Engine;case me.TailEngine:return _t.TailEngine;case me.Carriage:return _t.Carriage;default:return null}}function Hi(e){return{id:e.id,unitType:e.unitType,ownerID:e.ownerID,lastOwnerID:e.lastOwnerID??null,pos:e.pos,lastPos:e.lastPos,isActive:e.isActive,reachedTarget:e.reachedTarget,retreating:(e.transportShipState?.isRetreating??!1)||e.warshipState?.state===`retreating`,targetable:e.targetable,waitTicks:e.nukeState?.waitTicks??0,markedForDeletion:e.markedForDeletion,health:e.health??null,underConstruction:e.underConstruction??!1,targetUnitId:e.targetUnitId??null,targetTile:e.targetTile??null,troops:e.troops,missileTimerQueue:e.missileTimerQueue,level:e.level,veterancy:e.warshipState?.veterancy??0,hasTrainStation:e.hasTrainStation,trainType:Vi(e.trainType),loaded:e.loaded??null,constructionStartTick:null,samUpgradeStartTick:e.samUpgrade?.upgradeStartTick??null,samUpgradeStartRange:e.samUpgrade?.startRange??null,samUpgradeTargetLevel:e.samUpgrade?.targetLevel??null,samUpgradeDuration:e.samUpgrade?.duration??null}}function Ui(e,t){e.ownerID=t.ownerID,e.unitType=t.unitType,e.lastOwnerID=t.lastOwnerID??null,e.pos=t.pos,e.lastPos=t.lastPos,e.isActive=t.isActive,e.reachedTarget=t.reachedTarget,e.retreating=(t.transportShipState?.isRetreating??!1)||t.warshipState?.state===`retreating`,e.targetable=t.targetable,e.waitTicks=t.nukeState?.waitTicks??0,e.markedForDeletion=t.markedForDeletion,e.health=t.health??null,e.underConstruction=t.underConstruction??!1,e.targetUnitId=t.targetUnitId??null,e.targetTile=t.targetTile??null,e.troops=t.troops,e.missileTimerQueue=t.missileTimerQueue,e.level=t.level,e.veterancy=t.warshipState?.veterancy??0,e.hasTrainStation=t.hasTrainStation,e.trainType=Vi(t.trainType),e.loaded=t.loaded??null,e.samUpgradeStartTick=t.samUpgrade?.upgradeStartTick??null,e.samUpgradeStartRange=t.samUpgrade?.startRange??null,e.samUpgradeTargetLevel=t.samUpgrade?.targetLevel??null,e.samUpgradeDuration=t.samUpgrade?.duration??null}function Wi(e){switch(e){case v.Human:return bt.Human;case v.Bot:return bt.Bot;case v.Nation:return bt.Nation;default:return bt.Bot}}function Gi(e){switch(e){case bt.Human:return v.Human;case bt.Nation:return v.Nation;default:return v.Bot}}function Ki(e){return{smallID:e.smallID,id:e.id,name:e.name,displayName:e.displayName,clanTag:e.clanTag??null,clientID:e.clientID??null,playerType:Wi(e.playerType),team:e.team??null,isLobbyCreator:e.isLobbyCreator}}function qi(e){return{smallID:e.smallID,isAlive:e.isAlive,isDisconnected:e.isDisconnected,killedBy:e.killedBy??null,deathPosition:e.deathPosition??null,tilesOwned:e.tilesOwned,gold:Number(e.gold),tradeGold:Number(e.tradeGold??0n),trainGold:Number(e.trainGold??0n),piracyGold:Number(e.piracyGold??0n),goldEarned:Number(e.goldEarned??0n),troops:e.troops,isTraitor:e.isTraitor,traitorRemainingTicks:Math.max(0,e.traitorRemainingTicks??0),inDoomsdayClock:e.inDoomsdayClock??!1,isDecaying:e.isDecaying??!1,markedDoomsdayClockTick:e.markedDoomsdayClockTick??-1,betrayals:e.betrayals,hasSpawned:e.hasSpawned,spawnTile:e.spawnTile,lastDeleteUnitTick:e.lastDeleteUnitTick,allies:e.allies.slice(),embargoes:[],targets:e.targets.slice(),outgoingAttacks:e.outgoingAttacks,incomingAttacks:e.incomingAttacks,outgoingAllianceRequests:e.outgoingAllianceRequests.slice(),alliances:e.alliances,outgoingEmojis:e.outgoingEmojis}}function Ji(e,t){let n=[];for(let r of e){let e=t(r);e!==void 0&&n.push(e)}return n}function Yi(e,t,n){if(e!==void 0)for(let r=0;r+4<e.length;r+=5){let i=t(e[r]);i!==void 0&&(i.tilesOwned=e[r+1],i.gold=e[r+2],i.troops=e[r+3],i.goldEarned=e[r+4],n?.(e[r]))}}function Xi(e,t,n={}){if(e!==void 0)for(let r=0;r+3<e.length;r+=4){let i=t(e[r]);if(i===void 0)continue;let a=e[r+1]===0?i.outgoingAttacks:i.incomingAttacks,o=e[r+2],s=a[o];s!==void 0&&(n.copy?a[o]={...s,troops:e[r+3]}:s.troops=e[r+3]),n.applied?.(e[r])}}var Zi=e=>e instanceof Uint32Array?e:Uint32Array.from(e),Qi=class{constructor(){this.grid=new Map,this.trains=new Map,this.trainUnitToEngine=new Map,this.idsCache=[],this.idsDirty=!0}gridPlans(){return this.grid}hasGridPlan(e){return this.grid.has(e)}plannedUnitIds(){if(this.idsDirty){this.idsDirty=!1;let e=this.idsCache;e.length=0;for(let t of this.grid.keys())e.push(t);for(let[t,n]of this.trains){e.push(t);for(let t of n.carUnitIds)t!==0&&e.push(t)}}return this.idsCache}applyRecords(e){for(let t of e){if(t.kind===`grid`){if(t.ticksPerStep<1||t.path.length<1)continue;let e=this.grid.get(t.unitId);if(e&&t.planId<=e.planId)continue;this.grid.set(t.unitId,{planId:t.planId,startTick:t.startTick,ticksPerStep:t.ticksPerStep,path:Zi(t.path)})}else{if(t.speed<1||t.path.length<1)continue;let e=this.trains.get(t.engineUnitId);if(e&&t.planId<=e.planId)continue;e&&this.clearTrainPlan(t.engineUnitId);let n=Zi(t.carUnitIds);this.trains.set(t.engineUnitId,{planId:t.planId,speed:t.speed,spacing:t.spacing,carUnitIds:n,path:Zi(t.path),cursor:0,usedTilesBuf:new Uint32Array(Math.max(0,n.length*t.spacing+3)),usedHead:0,usedLen:0,lastAdvancedTick:t.startTick}),this.trainUnitToEngine.set(t.engineUnitId,t.engineUnitId);for(let e of n)e!==0&&this.trainUnitToEngine.set(e,t.engineUnitId)}this.idsDirty=!0}}unitRemoved(e){this.grid.delete(e)&&(this.idsDirty=!0),this.clearTrainPlan(e)}clearTrainPlan(e){let t=this.trainUnitToEngine.get(e)??(this.trains.has(e)?e:null);if(t===null)return;this.trainUnitToEngine.delete(e);let n=this.trains.get(t);if(n!==void 0){this.trains.delete(t),this.idsDirty=!0,this.trainUnitToEngine.delete(t);for(let e of n.carUnitIds)e!==0&&this.trainUnitToEngine.delete(e)}}advance(e,t){this.advanceGrid(e,t),this.advanceTrains(e,t)}advanceGrid(e,t){for(let[n,r]of this.grid){let i=t.tileOf(n);if(i===void 0){this.grid.delete(n),this.idsDirty=!0;continue}let a=e-r.startTick,o=a<=0?0:Math.floor(a/Math.max(1,r.ticksPerStep)),s=r.path.length-1,c=r.path[Math.max(0,Math.min(s,o))];if(c!==i){t.move(n,c);continue}t.rest(n),a>0&&o>=s&&(this.grid.delete(n),this.idsDirty=!0)}}advanceTrains(e,t){let n=[];for(let[r,i]of this.trains){if(t.tileOf(r)===void 0){n.push(r);continue}let a=e-i.lastAdvancedTick;if(a<=0)continue;let{path:o}=i,s=o.length-1,c=i.usedTilesBuf.length,l=e=>{c!==0&&(i.usedLen<c?(i.usedTilesBuf[(i.usedHead+i.usedLen)%c]=e,i.usedLen++):(i.usedTilesBuf[i.usedHead]=e,i.usedHead=(i.usedHead+1)%c))},u=e=>e<0||e>=i.usedLen||c===0?null:i.usedTilesBuf[(i.usedHead+e)%c],d=!1;for(let e=0;e<a;e++){let e=i.cursor;if(e>=s)break;for(let t=0;t<i.speed&&e+t<o.length;t++)l(o[e+t]);i.cursor=Math.min(s,e+i.speed);for(let e=i.carUnitIds.length-1;e>=0;--e){let n=i.carUnitIds[e];if(n===0)continue;let r=t.tileOf(n);if(r===void 0)continue;let a=u((e+1)*i.spacing+2);a!==null&&a!==r&&(t.move(n,a),d=!0)}let n=o[i.cursor];n!==t.tileOf(r)&&(t.move(r,n),d=!0)}i.lastAdvancedTick=e,!d&&i.cursor>=s&&n.push(r)}for(let e of n)this.clearTrainPlan(e)}};function $i(e,t,n){let r=t.showFrom??`everyone`;if(r===`none`)return{verified:e.verified};if(n===`self`)return e;if(r===`self`||r===`teammates`&&n!==`teammate`)return{verified:e.verified};let i={...e};return t.territorySkins===!1&&(delete i.pattern,delete i.skin),t.flags===!1&&delete i.flag,t.crowns===!1&&delete i.crown,e.effects!==void 0&&(i.effects=Object.fromEntries(Object.entries(e.effects).filter(([e])=>{let n=ae(e);return n===void 0||t[n]!==!1}))),i}function ea(e,t,n,r,i){let a=e.borderColor(t),o=n.pattern?n.pattern.colorPalette??{primaryColor:t.toHex(),secondaryColor:a.toHex()}:void 0;return{territory:r===null?be(n.color?.color??o?.primaryColor??t.toHex()):t,border:be(o?.secondaryColor??n.color?.color??(i?e.focusedBorderColor():a).toHex())}}function ta(e,t){t.isAlive!==void 0&&(e.isAlive=t.isAlive),t.isDisconnected!==void 0&&(e.isDisconnected=t.isDisconnected),t.killedBy!==void 0&&(e.killedBy=t.killedBy),t.deathPosition!==void 0&&(e.deathPosition=t.deathPosition),t.tilesOwned!==void 0&&(e.tilesOwned=t.tilesOwned),t.gold!==void 0&&(e.gold=Number(t.gold)),t.tradeGold!==void 0&&(e.tradeGold=Number(t.tradeGold)),t.trainGold!==void 0&&(e.trainGold=Number(t.trainGold)),t.piracyGold!==void 0&&(e.piracyGold=Number(t.piracyGold)),t.goldEarned!==void 0&&(e.goldEarned=Number(t.goldEarned)),t.troops!==void 0&&(e.troops=t.troops),t.isTraitor!==void 0&&(e.isTraitor=t.isTraitor),t.traitorRemainingTicks!==void 0&&(e.traitorRemainingTicks=Math.max(0,t.traitorRemainingTicks)),t.inDoomsdayClock!==void 0&&(e.inDoomsdayClock=t.inDoomsdayClock),t.markedDoomsdayClockTick!==void 0&&(e.markedDoomsdayClockTick=t.markedDoomsdayClockTick),t.isDecaying!==void 0&&(e.isDecaying=t.isDecaying),t.betrayals!==void 0&&(e.betrayals=t.betrayals),t.hasSpawned!==void 0&&(e.hasSpawned=t.hasSpawned),t.spawnTile!==void 0&&(e.spawnTile=t.spawnTile),t.lastDeleteUnitTick!==void 0&&(e.lastDeleteUnitTick=t.lastDeleteUnitTick),t.allies!==void 0&&(e.allies=t.allies.slice()),t.targets!==void 0&&(e.targets=t.targets.slice()),t.outgoingAllianceRequests!==void 0&&(e.outgoingAllianceRequests=t.outgoingAllianceRequests.slice()),t.outgoingAttacks!==void 0&&(e.outgoingAttacks=t.outgoingAttacks),t.incomingAttacks!==void 0&&(e.incomingAttacks=t.incomingAttacks),t.alliances!==void 0&&(e.alliances=t.alliances),t.outgoingEmojis!==void 0&&(e.outgoingEmojis=t.outgoingEmojis)}function na(e){return Nt.sanitize(e,{ALLOWED_TAGS:[`span`,`img`],ALLOWED_ATTR:[`src`,`alt`,`class`,`style`],ALLOWED_URI_REGEXP:/^https:\/\/cdn\.jsdelivr\.net\/gh\/twitter\/twemoji/,ADD_ATTR:[`style`]})}var ra=fe,ia=class{constructor(e){this.player=e}},aa=`[P1]`,oa=new Set([`help.troops`,`help.gold`,`help.alliance`,`help.no_attack`,`help.sorry_attack`,`help.help_defend`,`attack.attack`,`attack.mirv`,`attack.crown`,`defend.defend`,`defend.dont_attack`,`greet.hello`,`greet.good_luck`,`greet.gg`,`greet.thanks`,`greet.oops`,`misc.go`,`misc.team_up`,`warnings.betrayed`,`warnings.mirv_ready`,`warnings.renew_or_nuke`]),sa={"greet.oops":`misc`,"misc.team_up":`attack`},ca=Object.entries(ra).flatMap(([e,t])=>t.map(t=>({category:e,phrase:t}))),la=(e,t)=>`${e}.${t.key}`,ua=new Map(ca.map(e=>[la(e.category,e.phrase),e])),da=`quick-chat-recent`,fa=10;function pa(){try{let e=JSON.parse(localStorage.getItem(da)??`[]`);return Array.isArray(e)?e.filter(e=>typeof e==`string`&&ua.has(e)).slice(0,fa):[]}catch(e){return console.warn(`Failed to read recent quick chats from localStorage:`,e),[]}}var ma=class extends _e{constructor(...e){super(...e),this.isOpen=!1,this.pending=null,this.search=``,this.phraseSearch=``,this.showAll=!1,this.recent=pa(),this.categories=[{id:`help`},{id:`attack`},{id:`defend`},{id:`greet`},{id:`misc`},{id:`warnings`}]}createRenderRoot(){return this}render(){return this.isOpen?N`
      <div
        class="fixed inset-0 bg-black/15 flex items-start sm:items-center justify-center z-10002 pt-4 sm:pt-0"
        @click=${e=>e.target===e.currentTarget&&this.close()}
      >
        <div class="relative">
          <button
            class="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center
                    bg-zinc-700 hover:bg-red-500 text-white rounded-full shadow-sm transition-colors z-10004"
            aria-label=${t(`common.close`)}
            @click=${()=>this.close()}
          >
            ✕
          </button>
          <div
            class="bg-zinc-900/95 p-3 rounded-xl shadow-2xl shadow-black/50 ring-1 ring-white/10 text-white
                   w-[min(44rem,calc(100vw-32px))] max-h-[calc(100vh-60px)] overflow-y-auto
                   flex flex-col gap-3"
            @contextmenu=${e=>e.preventDefault()}
            @wheel=${e=>e.stopPropagation()}
          >
            <div class="flex items-baseline gap-2 pe-4">
              <h2 class="font-semibold">${t(`chat.title`)}</h2>
              <span class="truncate text-sm text-zinc-400"
                >${this.recipient?.displayName()}</span
              >
              ${this.pending?null:this.renderAllPhrasesSwitch()}
            </div>
            ${this.pending?this.renderPlayerPicker():this.renderPhrases()}
          </div>
        </div>
      </div>
    `:null}renderAllPhrasesSwitch(){return N`
      <button
        class="ms-auto shrink-0 flex items-center gap-2 text-sm text-zinc-300 hover:text-white cursor-pointer"
        role="switch"
        aria-checked=${this.showAll}
        @click=${()=>this.showAll=!this.showAll}
      >
        ${t(`chat.all_phrases`)}
        <span
          class="relative inline-block w-8 h-4.5 rounded-full transition-colors ${this.showAll?`bg-blue-500`:`bg-zinc-600`}"
        >
          <span
            class="absolute top-0.5 left-0.5 size-3.5 rounded-full bg-white transition-transform ${this.showAll?`translate-x-3.5`:``}"
          ></span>
        </span>
      </button>
    `}renderPhrases(){let e=this.sections(),n=this.phraseQuery();return N`
      ${this.showAll?N`<input
              class="px-2 py-1.5 rounded-md bg-zinc-800 ring-1 ring-white/10 text-sm outline-none focus:ring-white/30"
              type="text"
              placeholder=${t(`chat.search_phrases`)}
              .value=${this.phraseSearch}
              @input=${e=>this.phraseSearch=e.target.value}
              @keydown=${t=>{let r=e[0]?.phrases[0];t.key===`Enter`&&!t.isComposing&&n&&r&&this.pickPhrase(r.category,r.phrase)}}
            />`:null}
      ${e.length===0?N`<p class="text-sm text-zinc-400">
              ${t(`chat.no_phrases`)}
            </p>`:e.map(({id:e,phrases:n})=>N`
                <section>
                  <h3
                    class="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
                  >
                    ${t(`chat.cat.${e}`)}
                  </h3>
                  <div class="flex flex-wrap gap-1">
                    ${n.map(e=>this.renderChip(e))}
                  </div>
                </section>
              `)}
    `}phraseQuery(){return this.showAll?this.phraseSearch.trim().toLowerCase():``}sections(){let e=this.phraseQuery(),t=this.categories.map(({id:t})=>({id:t,phrases:ca.filter(n=>{let r=la(n.category,n.phrase);return(sa[r]??n.category)===t&&(this.showAll||oa.has(r))&&(!e||this.matchesQuery(n,e))}).sort((e,n)=>Number(!oa.has(la(e.category,e.phrase)))-Number(!oa.has(la(n.category,n.phrase)))||Number(e.category!==t)-Number(n.category!==t))}));return e||t.unshift({id:`recent`,phrases:this.recent.flatMap(e=>ua.get(e)??[])}),t.filter(({phrases:e})=>e.length>0)}matchesQuery({category:e,phrase:n},r){let i=t(`chat.${e}.${n.key}`);return[i,this.chipLabel(e,n.key,i)].some(e=>e.replace(aa,``).toLowerCase().includes(r))}renderChip({category:e,phrase:n}){let r=t(`chat.${e}.${n.key}`);return N`
      <button
        class="max-w-[15rem] truncate px-2.5 py-1 rounded-md text-sm text-left
               bg-white/5 hover:bg-white/15 active:bg-white/25 transition-colors cursor-pointer"
        title=${r.replace(aa,`___`)}
        @click=${()=>this.pickPhrase(e,n)}
      >
        ${this.renderWithBlank(this.chipLabel(e,n.key,r))}
      </button>
    `}chipLabel(e,n,r){let i=`chat.short.${e}.${n}`;return re(i)?t(i):r}renderWithBlank(e){let[t,...n]=e.split(aa);return n.length===0?e:N`${t}<span
        class="inline-block w-6 mx-0.5 border-b border-zinc-400 align-baseline"
      ></span
      >${n.join(aa)}`}renderPlayerPicker(){let{category:e,phrase:n}=this.pending,r=this.targetChoices();return N`
      <div class="flex items-center gap-2">
        <button
          class="px-2 py-1 rounded-md bg-white/5 hover:bg-white/15 cursor-pointer"
          aria-label=${t(`common.back`)}
          @click=${()=>this.pending=null}
        >
          ←
        </button>
        <span class="font-medium">
          ${this.renderWithBlank(t(`chat.${e}.${n.key}`))}
        </span>
      </div>
      <input
        class="px-2 py-1.5 rounded-md bg-zinc-800 ring-1 ring-white/10 text-sm outline-none focus:ring-white/30"
        type="text"
        placeholder=${t(`chat.search`)}
        .value=${this.search}
        @input=${e=>this.search=e.target.value}
        @keydown=${e=>{e.key===`Enter`&&!e.isComposing&&r.length>0&&this.sendPending(r[0])}}
      />
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-1">
        ${r.map(e=>N`
            <button
              class="truncate px-2.5 py-1.5 rounded-md text-sm text-left border-l-4
                     bg-white/5 hover:bg-white/15 active:bg-white/25 transition-colors cursor-pointer"
              style="border-left-color: ${e.territoryColor().toHex()}"
              @click=${()=>this.sendPending(e)}
            >
              ${e.displayName()}
            </button>
          `)}
      </div>
    `}targetChoices(){let e=new Set;for(let t of[this.sender,this.recipient])for(let n of[...t.incomingAttacks(),...t.outgoingAttacks()])e.add(n.attackerID),e.add(n.targetID);e.delete(this.sender.smallID()),e.delete(this.recipient.smallID());let t=this.search.trim().toLowerCase();return this.g.players().filter(e=>e.isAlive()&&e.type()!==v.Bot&&e.displayName().toLowerCase().includes(t)).sort((t,n)=>Number(e.has(n.smallID()))-Number(e.has(t.smallID()))||n.numTilesOwned()-t.numTilesOwned())}updated(){if(this.pending){let e=this.querySelector(`input`);e&&document.activeElement!==e&&e.focus()}}initEventBus(e){this.eventBus=e,e.on(an,()=>{this.isOpen&&this.close()}),e.on(On,e=>{if(this.isOpen){this.close();return}let t=this.g.myPlayer();if(!t?.isAlive())return;let n=this.transformHandler.screenToWorldCoordinates(e.x,e.y);if(!this.g.isValidCoord(n.x,n.y))return;let r=this.g.owner(this.g.ref(n.x,n.y));!r.isPlayer()||r===t||this.open(t,r)}),e.on(ia,e=>{let t=this.g.myPlayer();t?.isAlive()&&this.open(t,e.player)})}remember(e){this.recent=[e,...this.recent.filter(t=>t!==e)].slice(0,fa);try{localStorage.setItem(da,JSON.stringify(this.recent))}catch(e){console.warn(`Failed to save recent quick chats to localStorage:`,e)}}pickPhrase(e,t){if(t.requiresPlayer){this.search=``,this.pending={category:e,phrase:t};return}this.send(`${e}.${t.key}`)}sendPending(e){let{category:t,phrase:n}=this.pending;this.send(`${t}.${n.key}`,e)}send(e,t){this.sender&&this.recipient&&(this.eventBus.emit(new Nr(this.recipient,e,t?.id())),this.remember(e)),this.close()}open(e,t){e&&t&&(this.recipient=t,this.sender=e),this.pending=null,this.search=``,this.phraseSearch=``,this.isOpen=!0}close(){this.isOpen=!1,this.pending=null,this.search=``,this.phraseSearch=``}setRecipient(e){this.recipient=e}setSender(e){this.sender=e}openWithSelection(e,t,n,r){this.open(n,r);let i=ra[e]?.find(e=>e.key===t);i&&this.pickPhrase(e,i)}};I([P()],ma.prototype,`isOpen`,void 0),I([P()],ma.prototype,`pending`,void 0),I([P()],ma.prototype,`search`,void 0),I([P()],ma.prototype,`phraseSearch`,void 0),I([P()],ma.prototype,`showAll`,void 0),I([P()],ma.prototype,`recent`,void 0),ma=I([pe(`chat-modal`)],ma);var ha=R(`images/BattleshipIconWhite.svg`),ga=R(`images/CityIconWhite.svg`),_a=R(`images/FactoryIconWhite.svg`),va=R(`images/GoldCoinIcon.svg`),ya=R(`images/MIRVIcon.svg`),ba=R(`images/MissileSiloIconWhite.svg`),xa=R(`images/MushroomCloudIconWhite.svg`),Sa=R(`images/NukeIconWhite.svg`),Ca=R(`images/PortIcon.svg`),wa=R(`images/SamLauncherIconWhite.svg`),Ta=R(`images/ShieldIconWhite.svg`),Ea=R(`images/SoldierIcon.svg`),Da=R(`images/ClaimIcon.svg`),Oa=R(`images/ProfileIcon.svg`),ka=R(`images/GuildIconWhite.svg`),Aa=R(`images/TeamIconSolidWhite.svg`),ja=R(`images/UpperLimitIcon.svg`),Ma=R(`images/AllianceIcon.svg`),Na=R(`images/TraitorIcon.svg`),Pa=class{constructor(e){this.player=e}},Fa=class extends _e{constructor(...e){super(...e),this.isVisible=!1,this.eventBus=null,this.userSettings=new Ne,this.favorites=[],this.dragOverSlot=null,this.dragged=null,this.onEmojiClicked=()=>{},this.handleBackdropClick=e=>{let t=this.querySelector(`div[class*="bg-zinc-900"]`);t&&!t.contains(e.target)&&this.hideTable()},this.dragOverElsewhere=e=>{this.dragged&&this.dragged.fromSlot!==null&&e.preventDefault()},this.dropElsewhere=e=>{if(!this.dragged||this.dragged.fromSlot===null)return;e.preventDefault();let t=[...this.favorites];t[this.dragged.fromSlot]=null,this.saveFavorites(t),this.dragged=null,this.dragOverSlot=null},this.endDrag=()=>{this.dragged=null,this.dragOverSlot=null}}initEventBus(e){this.eventBus=e,e.on(Dn,t=>{let n=this.transformHandler.screenToWorldCoordinates(t.x,t.y);if(!this.game.isValidCoord(n.x,n.y))return;let r=this.game.ref(n.x,n.y);if(!this.game.hasOwner(r))return;let i=this.game.owner(r);i instanceof Ei||this.showForPlayer(e,i)}),e.on(Pa,t=>this.showForPlayer(e,t.player)),e.on(Nn,e=>{let t=this.favorites[e.slot];this.isVisible&&t&&this.onEmojiClicked(t)}),e.on(an,()=>{this.hidden||this.hideTable()})}showForPlayer(e,t){this.isVisible||this.showTable(n=>{let r=t===this.game.myPlayer()?T:t;e.emit(new Ar(r,Ce.indexOf(n))),this.hideTable()})}render(){return this.isVisible?N`
      <div
        class="fixed inset-0 bg-black/15 backdrop-brightness-110 flex items-start sm:items-center justify-center z-10002 pt-4 sm:pt-0"
        @click=${this.handleBackdropClick}
        @dragover=${this.dragOverElsewhere}
        @drop=${this.dropElsewhere}
      >
        <div class="relative">
          <!-- Close button -->
          <button
            class="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center
                    bg-zinc-700 hover:bg-red-500 text-white rounded-full shadow-sm transition-colors z-10004"
            @click=${this.hideTable}
          >
            ✕
          </button>

          <div
            class="bg-zinc-900/95 p-3 rounded-xl z-10003 shadow-2xl shadow-black/50 ring-1 ring-white/10
                   max-w-[calc(100vw-32px)] max-h-[calc(100vh-60px)] overflow-y-auto
                   flex flex-col gap-3"
            @contextmenu=${e=>e.preventDefault()}
            @wheel=${e=>e.stopPropagation()}
            @click=${e=>e.stopPropagation()}
          >
            ${this.renderFavorites()}
            ${Ut.filter(e=>!e.columns).map(e=>this.renderSection(e))}
            <!-- Fixed-column sections are small, so they share a row. -->
            <div class="flex gap-6">
              ${Ut.filter(e=>e.columns).map(e=>this.renderSection(e))}
            </div>
          </div>
        </div>
      </div>
    `:null}renderFavorites(){let e=this.favorites.every(e=>e===null),n=!we.isTouch;return N`
      <section class="hidden sm:block">
        <h3
          class="mb-1 text-center text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
        >
          ${t(`emoji_table.favorites`)}
        </h3>
        <div class="flex justify-center gap-1">
          ${this.favorites.map((e,r)=>{let i=`border border-dashed border-zinc-600`;return e&&(i=`cursor-pointer bg-white/5 hover:bg-white/10`),this.dragOverSlot===r&&(i+=` bg-white/20`),N`
              <button
                class="relative flex items-center justify-center size-16 rounded-lg text-5xl transition-colors ${i}"
                draggable=${e?`true`:`false`}
                title=${e?t(`emoji_table.favorite_remove_hint`):``}
                @click=${()=>e&&this.onEmojiClicked(e)}
                @dragstart=${t=>e&&this.startDrag(t,e,r)}
                @dragend=${this.endDrag}
                @dragover=${e=>this.dragOver(e,r)}
                @dragleave=${()=>this.dragOverSlot=null}
                @drop=${e=>this.drop(e,r)}
              >
                ${e??``}
                ${n?N`<span
                        class="pointer-events-none absolute top-0.5 left-1.5 text-xs leading-tight font-mono text-zinc-400"
                        translate="no"
                        >${Gt(r)}</span
                      >`:null}
              </button>
            `})}
        </div>
        ${e?N`<p class="mt-1 text-center text-xs text-zinc-500">
                ${t(n?`emoji_table.favorites_hint`:`emoji_table.favorites_hint_touch`)}
              </p>`:null}
      </section>
    `}startDrag(e,t,n){this.dragged={emoji:t,fromSlot:n},e.dataTransfer?.setData(`text/plain`,t)}dragOver(e,t){this.dragged&&(e.preventDefault(),this.dragOverSlot=t)}drop(e,t){e.preventDefault(),this.dragged&&this.saveFavorites(qt(this.favorites,this.dragged.emoji,t)),this.dragged=null,this.dragOverSlot=null}saveFavorites(e){this.favorites=e,this.userSettings.setFavoriteEmojis(e)}renderSection(e){let n=`grid-cols-[repeat(5,auto)] sm:grid-cols-[repeat(8,auto)] lg:grid-cols-[repeat(10,auto)]`;return e.columns===2&&(n=`grid-cols-[repeat(2,auto)]`),e.columns===3&&(n=`grid-cols-[repeat(3,auto)]`),N`
      <section>
        <h3
          class="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
        >
          ${t(e.title)}
        </h3>
        <div class="grid ${n} gap-1">
          ${e.emojis.map(e=>N`
              <button
                class="flex items-center justify-center cursor-pointer size-12 sm:size-14 rounded-lg
                       text-3xl sm:text-4xl hover:bg-white/10 active:bg-white/20 transition-colors"
                draggable="true"
                @click=${()=>this.onEmojiClicked(e)}
                @dragstart=${t=>this.startDrag(t,e,null)}
                @dragend=${this.endDrag}
              >
                ${e}
              </button>
            `)}
        </div>
      </section>
    `}hideTable(){this.isVisible=!1,this.eventBus?.emit(new Mn(!1)),this.requestUpdate()}showTable(e){this.onEmojiClicked=e;let t=this.userSettings.favoriteEmojis();this.favorites=Array.from({length:6},(e,n)=>t[n]??null),this.isVisible=!0,this.eventBus?.emit(new Mn(!0)),this.requestUpdate()}createRenderRoot(){return this}};I([P()],Fa.prototype,`isVisible`,void 0),I([P()],Fa.prototype,`favorites`,void 0),I([P()],Fa.prototype,`dragOverSlot`,void 0),Fa=I([pe(`emoji-table`)],Fa);var Ia=new Set([j.NUKE_INBOUND,j.HYDROGEN_BOMB_INBOUND,j.MIRV_INBOUND,j.NUKE_DETONATED,j.NAVAL_INVASION_INBOUND,j.ATTACK_REQUEST,j.ALLIANCE_ACCEPTED,j.ALLIANCE_REJECTED,j.ALLIANCE_BROKEN,j.RENEW_ALLIANCE,j.CONQUERED_PLAYER,j.CHAT,j.DONATION_RECEIVED]),La=e=>Ia.has(e),Ra=class extends _e{updated(e){super.updated(e),this._eventsContainer&&this._shouldScrollToBottom&&(this._eventsContainer.scrollTop=this._eventsContainer.scrollHeight),this._importantEventsContainer&&this._shouldScrollImportantToBottom&&(this._importantEventsContainer.scrollTop=this._importantEventsContainer.scrollHeight)}renderButton(e){let{content:t,onClick:n,className:r=``,disabled:i=!1,translate:a=!0,hidden:o=!1}=e;return o?N``:N`
      <button
        class="${r}"
        @click=${n}
        ?disabled=${i}
        ?translate=${a}
      >
        ${t}
      </button>
    `}constructor(){super(),this.active=!1,this.events=[],this.userSettings=new Ne,this._isVisible=!1,this._shouldScrollToBottom=!0,this._shouldScrollImportantToBottom=!0,this.updateMap=[[Et.DisplayEvent,this.onDisplayMessageEvent.bind(this)],[Et.DisplayChatEvent,this.onDisplayChatEvent.bind(this)],[Et.AllianceRequestReply,this.onAllianceRequestReplyEvent.bind(this)],[Et.BrokeAlliance,this.onBrokeAllianceEvent.bind(this)],[Et.TargetPlayer,this.onTargetPlayerEvent.bind(this)],[Et.Emoji,this.onEmojiMessageEvent.bind(this)],[Et.UnitIncoming,this.onUnitIncomingEvent.bind(this)],[Et.AllianceExpired,this.onAllianceExpiredEvent.bind(this)],[Et.DonateEvent,this.onDonateEvent.bind(this)]],this.initGeneration=0,this.allianceConfirmationUnsub=null,this.onAllianceRequestSentConfirmationBound=this.onAllianceRequestSentConfirmation.bind(this),this.events=[]}unsubscribeBus(){this.allianceConfirmationUnsub?.(),this.allianceConfirmationUnsub=null}init(){this.unsubscribeBus();let e=++this.initGeneration,t=this.eventBus;return t&&(t.on(vr,this.onAllianceRequestSentConfirmationBound),this.allianceConfirmationUnsub=()=>t.off?.(vr,this.onAllianceRequestSentConfirmationBound)),()=>{e===this.initGeneration&&this.dispose()}}dispose(){this.initGeneration++,this.unsubscribeBus(),this.events=[],this.active=!1,this._isVisible=!1,this.requestUpdate()}onAllianceRequestSentConfirmation(e){let n=this.game.myPlayer();!n||e.requestor.id()!==n.id()||e.recipient.isRequestingAllianceWith(e.requestor)||this.addEvent({description:t(`events_display.alliance_request_sent`,{name:e.recipient.displayName()}),type:j.ALLIANCE_REQUEST,createdAt:this.game.ticks()})}tick(){if(this.active=!0,this._eventsContainer){let e=this._eventsContainer;this._shouldScrollToBottom=e.scrollHeight-e.scrollTop-e.clientHeight<5}else this._shouldScrollToBottom=!0;if(this._importantEventsContainer){let e=this._importantEventsContainer;this._shouldScrollImportantToBottom=e.scrollHeight-e.scrollTop-e.clientHeight<5}else this._shouldScrollImportantToBottom=!0;!this._isVisible&&!this.game.inSpawnPhase()&&(this._isVisible=!0,this.requestUpdate());let e=this.game.myPlayer();if(!e||!e.isAlive()){this._isVisible&&(this._isVisible=!1,this.requestUpdate());return}let t=this.game.updatesSinceLastTick();if(t)for(let[e,n]of this.updateMap)t[e]?.forEach(n);let n=this.events.filter(e=>{let t=this.game.ticks()-e.createdAt,n=t>=80||t<0,r=(e.type===j.NUKE_INBOUND||e.type===j.HYDROGEN_BOMB_INBOUND||e.type===j.MIRV_INBOUND||e.type===j.NAVAL_INVASION_INBOUND)&&e.unitView!==void 0&&!e.unitView.isActive(),i=!n&&!r;return!i&&e.onDelete&&e.onDelete(),i});n.length>30&&(n=n.slice(-30)),this.events.length!==n.length&&(this.events=n,this.requestUpdate()),this.requestUpdate()}addEvent(e){this.events=[...this.events,e],this.requestUpdate()}resolveParams(e){let n=e.params??{};if((e.message===`events_display.missile_intercepted`||e.message===`events_display.unit_destroyed`)&&typeof n.unit==`string`&&n.unit.startsWith(`unit_type.`)&&(n={...n,unit:t(n.unit)}),n.name===void 0||e.focusPlayerID===void 0)return n;let r=this.game.playerBySmallID(e.focusPlayerID);return r.isPlayer()?{...n,name:r.displayName()}:n}onDisplayMessageEvent(e){let n=this.game.myPlayer();if(e.playerID!==null&&(!n||n.smallID()!==e.playerID)||e.message===`events_display.received_gold_from_captured_ship`)return;let r=e.message;e.message.startsWith(`events_display.`)&&(r=t(e.message,this.resolveParams(e)));let i=e.unitID===void 0?void 0:this.game.unit(e.unitID);this.addEvent({description:r,createdAt:this.game.ticks(),highlight:!0,type:e.messageType,unsafeDescription:!0,unitView:i,focusID:e.focusPlayerID})}onDisplayChatEvent(e){let n=this.game.myPlayer();if(e.playerID===null||!n||n.smallID()!==e.playerID)return;let r=t(`chat.${e.category}.${e.key}`),i=r;if(e.target)try{let t=this.game.player(e.target)?.displayName()??e.target;i=r.replace(`[P1]`,t)}catch(t){console.warn(`Failed to resolve player for target ID '${e.target}'`,t);return}let a=``,o;if(e.recipient!==null){let t=this.game.player(e.recipient);a=t?t.displayName():``,o=t?.smallID()}let s=!e.isFrom;this.addEvent({description:t(s?`chat.to`:`chat.from`,{user:a,msg:i}),createdAt:this.game.ticks(),highlight:!s,minor:s,type:j.CHAT,unsafeDescription:!1,focusID:o}),s||this.eventBus.emit(new jt(`message`))}onAllianceRequestReplyEvent(e){let n=this.game.myPlayer();if(!n||e.request.requestorID!==n.smallID())return;let r=this.game.playerBySmallID(e.request.recipientID);this.addEvent({description:t(`events_display.alliance_request_status`,{name:r.displayName(),status:e.accepted?t(`events_display.alliance_accepted`):t(`events_display.alliance_rejected`)}),type:e.accepted?j.ALLIANCE_ACCEPTED:j.ALLIANCE_REJECTED,highlight:!0,createdAt:this.game.ticks(),focusID:e.request.recipientID}),this.eventBus.emit(new jt(e.accepted?`alliance-accepted`:`alliance-declined`))}onBrokeAllianceEvent(e){let n=this.game.myPlayer();if(!n)return;let r=this.game.playerBySmallID(e.betrayedID),i=this.game.playerBySmallID(e.traitorID);if(!r.isDisconnected())if(!r.isTraitor()&&i===n){this.eventBus.emit(new jt(`alliance-broken`));let n=Math.round((1-this.game.config().traitorDefenseDebuff())*100),i=Math.floor(this.game.config().traitorDuration()*.1),a=i===1?t(`events_display.duration_second`):t(`events_display.duration_seconds_plural`,{seconds:i});this.addEvent({description:t(`events_display.betrayal_description`,{name:r.displayName(),malusPercent:n,durationText:a}),type:j.ALLIANCE_BROKEN,highlight:!0,createdAt:this.game.ticks(),focusID:e.betrayedID})}else r===n&&(this.eventBus.emit(new jt(`alliance-broken`)),this.addEvent({description:t(`events_display.betrayed_you`,{name:i.displayName()}),type:j.ALLIANCE_BROKEN,highlight:!0,createdAt:this.game.ticks(),focusID:e.traitorID}))}onAllianceExpiredEvent(e){let n=this.game.myPlayer();if(!n)return;let r=e.player1ID===n.smallID()?e.player2ID:e.player2ID===n.smallID()?e.player1ID:null;if(r===null)return;let i=this.game.playerBySmallID(r);!i||!n.isAlive()||!i.isAlive()||this.addEvent({description:t(`events_display.alliance_expired`,{name:i.displayName()}),type:j.ALLIANCE_EXPIRED,highlight:!0,createdAt:this.game.ticks(),focusID:r})}onDonateEvent(e){let n=this.game.myPlayer();if(!n)return;let r=e.recipientId===n.id(),i=e.senderId===n.id();if(!r&&!i)return;let a=r?this.game.player(e.senderId):this.game.player(e.recipientId),o=e.donationType===`gold`,s=r?o?`events_display.received_gold_from_player`:`events_display.received_troops_from_player`:o?`events_display.sent_gold_to_player`:`events_display.sent_troops_to_player`,c={name:a.displayName(),[o?`gold`:`troops`]:o?B(e.amount):ze(Number(e.amount))};this.addEvent({description:t(s,c),type:r?j.DONATION_RECEIVED:j.DONATION_SENT,highlight:!0,createdAt:this.game.ticks(),focusID:a.smallID()})}onTargetPlayerEvent(e){let n=this.game.playerBySmallID(e.playerID),r=this.game.myPlayer();if(!r||!r.isFriendly(n))return;let i=this.game.playerBySmallID(e.targetID);this.addEvent({description:t(`events_display.attack_request`,{name:n.displayName(),target:i.displayName()}),type:j.ATTACK_REQUEST,highlight:!0,createdAt:this.game.ticks(),focusID:e.targetID})}emitGoToPlayerEvent(e){let t=this.game.playerBySmallID(e);t&&this.eventBus.emit(new Xr(t))}emitGoToUnitEvent(e){this.eventBus.emit(new Qr(e))}onEmojiMessageEvent(e){let n=this.game.myPlayer();if(!n)return;let r=e.emoji.recipientID===`AllPlayers`?T:this.game.playerBySmallID(e.emoji.recipientID),i=this.game.playerBySmallID(e.emoji.senderID);if(r===n){if(!this.userSettings.emojis())return;this.addEvent({description:`${i.displayName()}: ${e.emoji.message}`,unsafeDescription:!0,type:j.CHAT,highlight:!0,createdAt:this.game.ticks(),focusID:e.emoji.senderID})}else i===n&&r!==`AllPlayers`?this.addEvent({description:t(`events_display.sent_emoji`,{name:r.displayName(),emoji:e.emoji.message}),unsafeDescription:!0,type:j.CHAT,minor:!0,createdAt:this.game.ticks(),focusID:r.smallID()}):i===n&&this.addEvent({description:t(`events_display.sent_emoji_all`,{emoji:e.emoji.message}),unsafeDescription:!0,type:j.CHAT,minor:!0,createdAt:this.game.ticks()})}onUnitIncomingEvent(e){let n=this.game.myPlayer();if(!n||n.smallID()!==e.playerID)return;let r=this.game.unit(e.unitID),i=e.message;if(e.message.startsWith(`events_display.`)&&r){let n={name:r.owner().displayName()};e.messageType===j.NAVAL_INVASION_INBOUND&&(n.troops=ze(r.troops())),i=t(e.message,n)}this.addEvent({description:i,type:e.messageType,unsafeDescription:!1,highlight:!0,createdAt:this.game.ticks(),unitView:r})}getEventDescription(e){return e.unsafeDescription?Fe(na(e.description)):e.description}renderBetrayalDebuffTimer(){let e=this.game.myPlayer();if(!e||!e.isTraitor())return N``;let n=e.getTraitorRemainingTicks(),r=Math.ceil(n/10);return r<=0?N``:N`
      ${this.renderButton({content:N`${t(`events_display.betrayal_debuff_ends`,{time:r})}`,className:`text-left text-yellow-400`,translate:!1})}
    `}renderEventRow(e){return N`
      <tr>
        <td
          class="lg:px-2 lg:py-1 p-1 text-left ${m(e.type)}"
        >
          ${e.focusID?this.renderButton({content:this.getEventDescription(e),onClick:()=>{e.focusID&&this.emitGoToPlayerEvent(e.focusID)},className:`text-left`}):e.unitView?this.renderButton({content:this.getEventDescription(e),onClick:()=>{e.unitView&&this.emitGoToUnitEvent(e.unitView)},className:`text-left`}):this.getEventDescription(e)}
        </td>
      </tr>
    `}render(){if(!this.active||!this._isVisible)return N``;let e=this.game.myPlayer(),t=!!(e&&e.isTraitor()&&e.getTraitorRemainingTicks()>0),n=[],r=[];for(let e of this.events)(La(e.type)&&!e.minor?n:r).push(e);return n.sort((e,t)=>e.createdAt-t.createdAt),r.sort((e,t)=>e.createdAt-t.createdAt),r=r.slice(-4),n.length===0&&r.length===0&&!t?N``:N`
      <div class="flex flex-col gap-1 w-full min-[1200px]:w-96">
        ${r.length>0?N`
                <div
                  class="bg-gray-800/92 backdrop-blur-sm max-h-[12vh] lg:max-h-[22vh] overflow-y-auto rounded-lg opacity-90 events-container"
                >
                  <table
                    class="w-full border-collapse text-white text-xs lg:text-sm pointer-events-auto"
                  >
                    <tbody>
                      ${r.map(e=>this.renderEventRow(e))}
                    </tbody>
                  </table>
                </div>
              `:``}
        ${n.length>0||t?N`
                <div
                  class="bg-gray-800 backdrop-blur-sm max-h-[30vh] lg:max-h-[40vh] overflow-y-auto rounded-lg shadow-lg border-l-4 border-red-500 important-events-container"
                >
                  <table
                    class="w-full border-collapse text-white text-base lg:text-lg font-medium pointer-events-auto"
                  >
                    <tbody>
                      ${n.map(e=>this.renderEventRow(e))}
                      ${t?N`
                              <tr>
                                <td class="lg:px-2 lg:py-1 p-1 text-left">
                                  ${this.renderBetrayalDebuffTimer()}
                                </td>
                              </tr>
                            `:``}
                    </tbody>
                  </table>
                </div>
              `:``}
      </div>
    `}createRenderRoot(){return this}};I([P()],Ra.prototype,`_isVisible`,void 0),I([de(`.events-container`)],Ra.prototype,`_eventsContainer`,void 0),I([de(`.important-events-container`)],Ra.prototype,`_importantEventsContainer`,void 0),Ra=I([pe(`events-display`)],Ra);var za=class{constructor(e){this.visible=e}},Ba=class extends _e{constructor(...e){super(...e),this.isVisible=!1,this._barVisible=null,this.isActive=!1,this.progressRatio=0,this.initGeneration=0}createRenderRoot(){return this.style.position=`fixed`,this.style.top=`0`,this.style.left=`0`,this.style.width=`100%`,this.style.height=`7px`,this.style.zIndex=`1000`,this.style.pointerEvents=`none`,this}init(){let e=++this.initGeneration;return this.isVisible=!0,this._barVisible=null,this.isActive=!1,this.progressRatio=0,this.style.top=`0px`,this.requestUpdate(),()=>{e===this.initGeneration&&this.dispose()}}dispose(){this.initGeneration++,this.isVisible=!1,this._barVisible=null,this.isActive=!1,this.progressRatio=0,this.style.top=`0px`,this.requestUpdate()}tick(){if(!this.game||!this.isVisible)return;let e=this.game.config().gameConfig().gameMode===oe.Team&&!this.game.inSpawnPhase();this.style.top=e?`7px`:`0px`;let t=this.game.config().spawnImmunityDuration(),n=this.game.config().numSpawnPhaseTurns();if(!this.game.config().hasExtendedSpawnImmunity()||this.game.inSpawnPhase())this.setInactive();else{let e=n+t,r=this.game.ticks();if(r>=e||r<n)this.setInactive();else{let e=Math.max(0,r-n);this.progressRatio=Math.min(1,Math.max(0,e/t)),this.isActive=!0,this.requestUpdate()}}this.emitBarVisibility()}setInactive(){this.isActive&&(this.isActive=!1,this.requestUpdate())}emitBarVisibility(){let e=this.isVisible&&this.isActive;e!==this._barVisible&&(this._barVisible=e,this.eventBus?.emit(new za(this._barVisible)))}render(){return!this.isVisible||!this.isActive?N``:N`
      <div class="w-full h-full flex z-999">
        <div
          class="h-full transition-all duration-100 ease-in-out"
          style="width: ${this.progressRatio*100}%; background-color: rgba(255, 165, 0, 0.9);"
        ></div>
      </div>
    `}};Ba=I([pe(`immunity-timer`)],Ba);var Va=class extends _e{constructor(...e){super(...e),this.columns=[],this.selected=[],this.open=!1,this.portal=null,this.onDocumentClick=e=>{let t=e.target;this.open&&!this.contains(t)&&!this.portal?.contains(t)&&(this.open=!1)},this.onViewportChange=e=>{let t=e.target;this.open&&!(t instanceof Node&&this.portal?.contains(t))&&this.renderPortal()}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this.onDocumentClick),window.addEventListener(`resize`,this.onViewportChange),window.addEventListener(`scroll`,this.onViewportChange,!0)}disconnectedCallback(){document.removeEventListener(`click`,this.onDocumentClick),window.removeEventListener(`resize`,this.onViewportChange),window.removeEventListener(`scroll`,this.onViewportChange,!0),this.removePortal(),super.disconnectedCallback()}updated(){this.renderPortal()}toggle(e){let t=this.selected.includes(e);if(t&&this.selected.length===1)return;let n=this.columns.map(e=>e.id).filter(n=>n===e?!t:this.selected.includes(n));this.dispatchEvent(new CustomEvent(`columns-changed`,{detail:n,bubbles:!0,composed:!0}))}renderPortal(){if(!this.open||!this.isConnected){this.removePortal();return}let e=this.querySelector(`button`);if(e===null)return;this.portal===null&&(this.portal=document.createElement(`div`),this.portal.className=`column-picker-portal`,document.body.appendChild(this.portal));let n=e.getBoundingClientRect(),r=Math.max(8,window.innerWidth-n.right),i=n.bottom+4;Ae(N`
        <div
          class="column-picker-popover fixed z-2000 bg-gray-800/95 border border-slate-500 rounded-md p-2 flex flex-col gap-1 overflow-y-auto whitespace-nowrap"
          style="top: ${i}px; right: ${r}px; max-height: ${Math.max(80,Math.min(window.innerHeight*.4,window.innerHeight-i-8))}px;"
        >
          ${this.columns.map(e=>{let n=this.selected.includes(e.id);return N`
              <label
                class="flex items-center gap-2 text-xs lg:text-sm text-white cursor-pointer"
              >
                <input
                  type="checkbox"
                  .checked=${n}
                  ?disabled=${n&&this.selected.length===1}
                  @change=${()=>this.toggle(e.id)}
                />
                ${t(e.labelKey)}
              </label>
            `})}
        </div>
      `,this.portal)}removePortal(){this.portal?.remove(),this.portal=null}render(){return N`
      <button
        class="px-0.5 leading-none text-xs lg:text-sm border rounded-md border-slate-500 transition-colors text-white hover:bg-white/10 bg-gray-700/50"
        title=${t(`leaderboard.configure_columns`)}
        aria-expanded=${this.open}
        aria-haspopup="menu"
        @click=${()=>this.open=!this.open}
      >
        ⚙️
      </button>
    `}};I([L({attribute:!1})],Va.prototype,`columns`,void 0),I([L({attribute:!1})],Va.prototype,`selected`,void 0),I([P()],Va.prototype,`open`,void 0),Va=I([pe(`column-picker`)],Va);var Ha=600,Ua=2*Ha,Wa=240,Ga=new class{constructor(){this.history=new Map}record(e,t,n){let r=this.history.get(e);(!r||r.length>0&&r[r.length-1].tick>n)&&(r=[],this.history.set(e,r)),r.push({...t,tick:n});let i=n-Ua;for(;r.length>0&&r[0].tick<i;)r.shift();r.length>Wa&&r.splice(0,r.length-Wa)}forget(e){this.history.delete(e)}resetAll(){this.history.clear()}goldIncomePerMin(e){return this.rate(e,e=>e.income)}shipTradeGoldPerMin(e){return this.rate(e,e=>e.trade)}trainTradeGoldPerMin(e){return this.rate(e,e=>e.train)}piracyGoldPerMin(e){return this.rate(e,e=>e.piracy)}rate(e,t){let n=this.history.get(e);if(!n||n.length<2)return 0;let r=n[0],i=n[n.length-1],a=(i.tick-r.tick)/Ha;return a<=0?0:(t(i)-t(r))/a}};function K(e){return{width:`auto`,align:`end`,kinds:[`player`,`team`],isHideable:!0,...e,isOrderable:e.value!==void 0}}function Ka(e,t,n,r){return K({id:e,labelKey:t,headerVisual:{kind:`icon`,src:r},align:`center`,value:e=>e.totalUnitLevels(n),cell:e=>B(e.value)})}var qa={kind:`icon`,src:Ea,white:!0},Ja=[K({id:`rank`,labelKey:`leaderboard.rank`,headerVisual:{kind:`text`,text:`#`},width:`34px`,align:`center`,isHideable:!1,cell:e=>String(e.position)}),K({id:`clan`,labelKey:`leaderboard.clan`,headerVisual:{kind:`icon`,src:ka},width:`80px`,align:`center`,kinds:[`player`],cell:e=>e.clanTag??``}),K({id:`player`,labelKey:`leaderboard.player`,headerVisual:{kind:`icon`,src:Oa},width:`100px`,align:`start`,kinds:[`player`],isHideable:!1,cell:e=>e.name}),K({id:`playerType`,labelKey:`leaderboard.playerType`,headerVisual:{kind:`text`,text:`leaderboard.type`},kinds:[`player`],align:`center`,value:e=>{switch(e.type()){case v.Human:return 0;case v.Nation:return 1;case v.Bot:return 2;default:return 3}},cell:e=>{switch(e.value){case 0:return t(`player_type.player`);case 1:return t(`player_type.nation`);case 2:return t(`player_type.bot`);default:return`?`}}}),K({id:`team`,labelKey:`leaderboard.team`,headerVisual:{kind:`icon`,src:Aa},width:`100px`,align:`start`,kinds:[`team`],isHideable:!1,cell:e=>e.name}),K({id:`tiles`,labelKey:`leaderboard.owned`,headerVisual:{kind:`icon`,src:Da,white:!0},value:e=>e.numTilesOwned(),cell:(e,t)=>{let n=t.numLandTiles()-t.numTilesWithFallout();return i(n>0?e.value/n:0)}}),K({id:`gold`,labelKey:`leaderboard.gold`,headerVisual:{kind:`icon`,src:va},value:e=>Number(e.gold()),cell:e=>B(e.value)}),K({id:`goldIncomePerMin`,labelKey:`leaderboard.goldIncomePerMin`,headerVisual:{kind:`icon`,src:va,superscript:{text:`/m`}},value:e=>Ga.goldIncomePerMin(e.smallID()),cell:e=>B(e.value)}),K({id:`shipTradeGoldPerMin`,labelKey:`leaderboard.shipTradeGoldPerMin`,headerVisual:{kind:`icon`,src:Ca,superscript:{text:`/m`}},value:e=>Ga.shipTradeGoldPerMin(e.smallID()),cell:e=>B(e.value)}),K({id:`piracyGoldPerMin`,labelKey:`leaderboard.piracyGoldPerMin`,headerVisual:{kind:`icon`,src:ha,superscript:{text:`/m`}},value:e=>Ga.piracyGoldPerMin(e.smallID()),cell:e=>B(e.value)}),K({id:`trainTradeGoldPerMin`,labelKey:`leaderboard.trainTradeGoldPerMin`,headerVisual:{kind:`icon`,src:_a,superscript:{text:`/m`}},value:e=>Ga.trainTradeGoldPerMin(e.smallID()),cell:e=>B(e.value)}),K({id:`troops`,labelKey:`leaderboard.troops`,headerVisual:qa,value:e=>e.troops(),cell:e=>ze(e.value)}),K({id:`maxtroops`,labelKey:`leaderboard.maxtroops`,headerVisual:{...qa,superscript:{src:ja,white:!0}},value:(e,t)=>t.config().maxTroops(e),cell:e=>ze(e.value)}),Ka(`cities`,`leaderboard.cities`,F.City,ga),Ka(`ports`,`leaderboard.ports`,F.Port,Ca),Ka(`factories`,`leaderboard.factories`,F.Factory,_a),Ka(`silos`,`leaderboard.launchers`,F.MissileSilo,ba),Ka(`sams`,`leaderboard.sams`,F.SAMLauncher,wa),Ka(`warships`,`leaderboard.warships`,F.Warship,ha),K({id:`allies`,labelKey:`leaderboard.allies`,headerVisual:{kind:`icon`,src:Ma},align:`center`,value:e=>e.allies().length,cell:e=>B(e.value)}),K({id:`betrayals`,labelKey:`leaderboard.betrayals`,headerVisual:{kind:`icon`,src:Na},align:`center`,value:e=>e.betrayals(),cell:e=>B(e.value)})];function Ya(e){return Ja.filter(t=>t.kinds.includes(e))}function Xa(e,t){Ga.record(e.smallID(),{income:e.goldEarned(),trade:e.tradeGold(),train:e.trainGold(),piracy:e.piracyGold()},t.ticks())}function Za(e,t,n){Xa(e,t);let r=new Map;for(let i of n)i.value!==void 0&&r.set(i.id,i.value(e,t));return r}new Map(Ja.map(e=>[e.id,e]));var Qa=24,$a=180,eo=4,to=4,no=`32px`,ro={start:`justify-start text-left`,center:`justify-center text-center`,end:`justify-end text-right`},io=`h-6 md:h-8 lg:h-9 min-w-0 px-1 flex items-center`,ao=`border-l border-l-slate-600/40`,oo=`border-l border-l-slate-500`,so=class extends _e{constructor(...e){super(...e),this.game=null,this.visible=!1,this.userSettings=new Ne,this.rows=[],this.sortKey=null,this.sortOrder=`desc`,this.scrollOffsetPx=0,this.rowHeightPx=Qa,this.viewportHeightPx=$a}createRenderRoot(){return this}willUpdate(e){e.has(`visible`)&&this.visible&&(this.scrollOffsetPx=0,this.updateStats())}updated(){let e=this.querySelector(`.stats-table-scroll`);if(!(e instanceof HTMLElement))return;let t=e.querySelector(`.stats-table-row`),n=t instanceof HTMLElement?t.offsetHeight:0,r=e.clientHeight,i=!1;n>0&&n!==this.rowHeightPx&&(this.rowHeightPx=n,i=!0),r>0&&r!==this.viewportHeightPx&&(this.viewportHeightPx=r,i=!0),i&&this.requestUpdate()}onScroll(e){this.scrollOffsetPx=e.target.scrollTop}refresh(){this.visible&&this.updateStats()}visibleColumns(){let e=this.userSettings.statsColumns(this.tableKind);return Ya(this.tableKind).filter(t=>!t.isHideable||e.includes(t.id))}setSort(e){this.sortKey===e?this.sortOrder=this.sortOrder===`asc`?`desc`:`asc`:(this.sortKey=e,this.sortOrder=`desc`),this.updateStats()}onColumnsChanged(e){this.userSettings.setStatsColumns(this.tableKind,e.detail),this.updateStats()}updateStats(){if(this.game===null)return;let e=this.visibleColumns(),t=e.filter(e=>e.isOrderable);t.length>0&&!t.some(e=>e.id===this.sortKey)&&(this.sortKey=t[0].id,this.sortOrder=`desc`);let n=this.sortKey,r=this.buildRows(this.game,e),i=this.sortOrder===`asc`?1:-1;this.rows=t.length===0||n===null?r:r.sort((e,t)=>i*((e.values.get(n)??0)-(t.values.get(n)??0))),this.requestUpdate()}renderHeaderVisual(e,n){let r=e.headerVisual;return r===void 0?N`<span>${n}</span>`:r.kind===`text`?N`<span>${t(r.text)}</span>`:N`<span class="inline-flex items-start">
      <img
        class="size-[1.1rem] object-contain ${r.white===!0?`brightness-0 invert`:``}"
        src=${r.src}
        alt=""
        aria-hidden="true"
      />${r.superscript?`src`in r.superscript?N`<img
                class="size-[0.825rem] object-contain -ml-0.5 ${r.superscript.white===!0?`brightness-0 invert`:``}"
                src=${r.superscript.src}
                alt=""
                aria-hidden="true"
              />`:N`<span class="text-[0.6rem] ml-0.5 self-center leading-none"
                >${t(r.superscript.text)}</span
              >`:Te}
    </span>`}renderHeaderCell(e,n){let r=t(e.labelKey),i=this.renderHeaderVisual(e,r),a=this.sortKey===e.id;return N`
      <div
        class="stats-table-header-cell ${io} justify-center text-center whitespace-nowrap border-b border-b-slate-500 ${n>0?oo:``}"
        role="columnheader"
        title=${r}
        aria-sort=${e.isOrderable?a?this.sortOrder===`asc`?`ascending`:`descending`:`none`:Te}
      >
        ${e.isOrderable?N`<button
                class="inline-flex items-center justify-center gap-1 hover:text-sky-200 transition-colors"
                aria-label=${r}
                @click=${()=>this.setSort(e.id)}
              >
                ${i}
                ${a?N`<span class="text-sky-300" aria-hidden="true"
                        >${this.sortOrder===`asc`?`↑`:`↓`}</span
                      >`:Te}
              </button>`:i}
      </div>
    `}renderCell(e,t,n,r){return N`
      <div
        class="stats-table-cell ${io} ${ro[e.align]} tabular-nums ${t>0?ao:``} ${r}"
        role="cell"
      >
        <span class="block w-full truncate">${n}</span>
      </div>
    `}renderRow(e,t,{row:n,position:r},i,a=!1){return N`
      <div
        class="stats-table-row grid col-span-full hover:bg-slate-600/60 ${a?`stats-table-pinned-row bg-gray-700/95`:``} ${n.emphasized?`font-bold`:``} ${n.onClick?`cursor-pointer`:``}"
        style="grid-template-columns: subgrid; grid-column: 1 / -1;"
        role="row"
        @click=${n.onClick??Te}
      >
        ${Pt(t,e=>e.id,(t,a)=>this.renderCell(t,a,t.cell({...n,position:r,value:n.values.get(t.id)??0},e),i))}
        <div
          class="h-6 md:h-8 lg:h-9 ${ao} ${i}"
          aria-hidden="true"
        ></div>
      </div>
    `}render(){let e=this.game;if(!this.visible||e===null)return N``;let t=this.visibleColumns(),n=this.rows.findIndex(e=>e.pinned),r=n>to?{row:this.rows[n],position:n+1}:null,i=r===null?this.rows:this.rows.filter((e,t)=>t!==n),a=Math.max(0,Math.floor(this.scrollOffsetPx/this.rowHeightPx)-eo),o=Math.min(i.length,Math.ceil((this.scrollOffsetPx+this.viewportHeightPx)/this.rowHeightPx)+eo),s=i.slice(a,o).map((e,t)=>{let i=a+t;return{row:e,position:r!==null&&i>=n?i+2:i+1}}),c=a*this.rowHeightPx,l=(i.length-o)*this.rowHeightPx,u=`${t.map(e=>e.width).join(` `)} ${no}`,d=r===null?`max-h-[7.5rem] md:max-h-[10rem] lg:max-h-[11.25rem]`:`max-h-[6rem] md:max-h-[8rem] lg:max-h-[9rem]`;return N`
      <div class="stats-table relative mt-1 text-white text-xs lg:text-sm">
        <div
          class="overflow-x-auto rounded-lg bg-gray-800/85"
          @contextmenu=${e=>e.preventDefault()}
        >
          <div
            class="stats-table-content grid w-max min-w-full"
            style="grid-template-columns: ${u};"
            role="table"
          >
            <div
              class="stats-table-header grid col-span-full font-bold bg-gray-700/95"
              style="grid-template-columns: subgrid; grid-column: 1 / -1;"
              role="row"
            >
              ${Pt(t,e=>e.id,(e,t)=>this.renderHeaderCell(e,t))}
              <div
                class="${io} justify-center border-b border-b-slate-500 ${oo}"
                role="columnheader"
              >
                <column-picker
                  class="inline-flex"
                  .columns=${Ya(this.tableKind).filter(e=>e.isHideable)}
                  .selected=${this.userSettings.statsColumns(this.tableKind)}
                  @columns-changed=${this.onColumnsChanged}
                ></column-picker>
              </div>
            </div>

            <div
              class="stats-table-scroll ${d} grid col-span-full overflow-y-scroll overflow-x-hidden"
              style="grid-template-columns: subgrid; grid-column: 1 / -1;"
              role="rowgroup"
              @scroll=${this.onScroll}
            >
              ${c>0?N`<div
                      class="stats-table-spacer col-span-full"
                      style="height: ${c}px"
                      aria-hidden="true"
                    ></div>`:Te}
              ${Pt(s,e=>e.row.key,(n,i)=>this.renderRow(e,t,n,i<s.length-1||r!==null||l>0?`border-b border-b-slate-500`:``))}
              ${l>0?N`<div
                      class="stats-table-spacer col-span-full"
                      style="height: ${l}px"
                      aria-hidden="true"
                    ></div>`:Te}
            </div>

            ${r===null?Te:this.renderRow(e,t,r,``,!0)}
          </div>
        </div>
      </div>
    `}};I([L({type:Boolean})],so.prototype,`visible`,void 0),I([P()],so.prototype,`sortKey`,void 0),I([P()],so.prototype,`sortOrder`,void 0),I([P()],so.prototype,`scrollOffsetPx`,void 0);var co=class extends so{constructor(...e){super(...e),this.eventBus=null,this.tableKind=`player`}buildRows(e,t){let n=e.myPlayer();return e.playerViews().filter(e=>e.isAlive()).map(r=>({key:r.id(),name:r.name(),clanTag:r.clanTag(),values:Za(r,e,t),emphasized:n!==null&&(r===n||r.isOnSameTeam(n)),pinned:r===n,onClick:()=>{this.eventBus!==null&&this.eventBus.emit(new Xr(r))}}))}};co=I([pe(`player-stats`)],co);var lo=class{constructor(e){this.visible=e}},uo=class extends _e{constructor(...e){super(...e),this.ratios=[0],this._barVisible=null,this.teams=[],this.colors=[`rgb(from var(--color-bright-blue) r g b / 0.85)`,`rgba(0, 0, 0, 0.5)`],this.isVisible=!1,this.initGeneration=0,this.hoveredIndex=null}createRenderRoot(){return this.style.position=`fixed`,this.style.top=`0`,this.style.left=`0`,this.style.width=`100%`,this.style.height=`9px`,this.style.zIndex=`1000`,this.style.pointerEvents=`none`,this}init(){let e=++this.initGeneration;return this.isVisible=!0,this._barVisible=null,this.ratios=[],this.teams=[],this.colors=[],this.hoveredIndex=null,()=>{e===this.initGeneration&&this.dispose()}}dispose(){this.initGeneration++,this.isVisible=!1,this._barVisible=null,this.ratios=[],this.teams=[],this.colors=[],this.hoveredIndex=null,this.requestUpdate()}tick(){if(!(!this.game||!this.isVisible)){if(this.game.config().gameConfig().gameType===p.Singleplayer&&this.game.inSpawnPhase()){this.ratios=[],this.teams=[],this.colors=[],this.requestUpdate(),this.emitBarVisibility();return}if(this.game.inSpawnPhase())this.ratios=[this.game.ticks()/this.game.config().numSpawnPhaseTurns()],this.teams=[],this.colors=[`rgb(from var(--color-bright-blue) r g b / 0.85)`];else if(this.ratios=[],this.teams=[],this.colors=[],this.game.config().gameConfig().gameMode===oe.Team){let e=new Map;for(let t of this.game.players()){let n=t.team();if(n===null)continue;let r=e.get(n)??0;e.set(n,r+t.numTilesOwned())}let t=Mt.current(),n=fo(e.values());if(n>0)for(let[r,i]of e){let e=i/n;this.ratios.push(e),this.teams.push(r),this.colors.push(t.teamColor(r).toRgbString())}}this.requestUpdate(),this.emitBarVisibility()}}emitBarVisibility(){let e=this.isVisible&&this.ratios.length>0;e!==this._barVisible&&(this._barVisible=e,this.eventBus?.emit(new lo(this._barVisible)))}render(){return!this.isVisible||this.ratios.length===0||this.colors.length===0||!this.game.inSpawnPhase()&&this.game.config().gameConfig().gameMode!==oe.Team?N``:N`
      <div class="relative w-full h-full flex z-999">
        ${this.ratios.map((e,t)=>{let n=this.colors[t]||`rgba(0, 0, 0, 0.5)`;return N`
            <div
              class="h-full pointer-events-auto transition-all duration-100 ease-in-out w-(--width) bg-(--bg) border-b-3 border-r-2 border-black"
              style="--width: ${e*100}%; --bg: ${n};"
              @mouseenter=${()=>this.hoveredIndex=t}
              @mouseleave=${()=>this.hoveredIndex=null}
            ></div>
          `})}
        ${this.renderTooltip()}
      </div>
    `}renderTooltip(){let e=this.hoveredIndex,n=e===null?void 0:this.teams[e];if(e===null||n===void 0)return Te;let r=0,a=0;for(let t=0;t<=e;t++)a=(r+this.ratios[t]/2)*100,r+=this.ratios[t];let o=`clamp(64px, ${a}%, calc(100% - 64px))`,s=`team_colors.${n.toLowerCase()}`,c=t(s);return N`
      <div
        class="absolute top-3.5 -translate-x-1/2 z-999 px-2 py-1 rounded bg-black/85 text-white text-xs text-center break-words pointer-events-none"
        style="left: ${o}; max-width: 128px"
      >
        ${t(`spawn_timer.team_percent_tooltip`,{team:c===s?n:c,percent:i(this.ratios[e])})}
      </div>
    `}};I([P()],uo.prototype,`hoveredIndex`,void 0),uo=I([pe(`spawn-timer`)],uo);function fo(e){let t=0;for(let n of e)t+=n;return t}var po=R(`images/ExitIconWhite.svg`),mo=R(`images/SettingIconWhite.svg`),ho=R(`images/TreeIconWhite.svg`),go=class{constructor(e=!0,t=!1,n=!1){this.isVisible=e,this.shouldPause=t,this.isPaused=n}},q=class extends _e{constructor(...e){super(...e),this.isVisible=!1,this.alternateView=!1,this.shouldPause=!1,this.wasPausedWhenOpened=!1,this.gameConfig=null,this.mapNationCount=null,this.game=null,this.saveStatus=null,this.handleOutsideClick=e=>{this.isVisible&&this.modalOverlay&&e.target===this.modalOverlay&&this.closeModal()},this.handleKeyDown=e=>{this.isVisible&&e.key===`Escape`&&this.closeModal()}}init(){this.eventBus.on(go,e=>{this.isVisible=e.isVisible,this.shouldPause=e.shouldPause,this.wasPausedWhenOpened=e.isPaused,this.saveStatus!==`saving`&&(this.saveStatus=null),this.pauseGame(!0)})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener(`click`,this.handleOutsideClick,!0),window.addEventListener(`keydown`,this.handleKeyDown)}disconnectedCallback(){window.removeEventListener(`click`,this.handleOutsideClick,!0),window.removeEventListener(`keydown`,this.handleKeyDown),super.disconnectedCallback()}get open(){return this.isVisible}openModal(){this.isVisible=!0,this.requestUpdate()}closeModal({keepPause:e=!1}={}){this.isVisible=!1,this.requestUpdate(),e||this.pauseGame(!1)}pauseGame(e){e?Ie.gameplayStop():this.wasPausedWhenOpened||Ie.gameplayStart(),this.shouldPause&&!this.wasPausedWhenOpened&&this.eventBus.emit(new _r(e))}onTerrainButtonClick(){this.alternateView=!this.alternateView,this.eventBus.emit(new rn(this.alternateView)),this.requestUpdate()}onOpenSettingsButtonClick(){let e=document.getElementById(`game-settings`);if(e===null||typeof e.open!=`function`){console.warn(`In-game settings modal (#game-settings) not found`);return}this.closeModal({keepPause:!0}),e.open({tab:`gameplay`,onReturn:()=>this.openModal()})}onRenderDebugGuiButtonClick(){this.eventBus.emit(new dn),this.closeModal()}onOpenGraphicsButtonClick(){document.getElementById(`game-settings`)?.openGraphicsPanel(()=>this.openModal())&&this.closeModal({keepPause:!0})}canSave(){let e=this.game;return e!==null&&e.config().gameConfig().gameType===p.Singleplayer&&e.config().gameConfig().tutorial!==!0&&!e.config().isReplay()&&c(Se()?.response??!1)}async onSaveButtonClick(){let e=this.game;if(!(e===null||this.saveStatus===`saving`)){this.saveStatus=`saving`;try{let t=await e.worker.snapshot(z.gitCommit()),n=e.config().gameConfig().gameMap,r=await Ft(t,{name:_o(l(n)??n,new Date),map:n,tick:e.ticks()});this.saveStatus=typeof r==`string`?r:`saved`}catch(e){console.warn(`Failed to save the game`,e),this.saveStatus=`request_failed`}}}renderSaveRow(){if(!this.canSave())return null;let e=this.saveStatus,n=t(e===null?`saved_games.save_desc`:`saved_games.save_status.${e}`);return N`
      <button
        class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors disabled:opacity-60"
        data-save-game
        ?disabled=${e===`saving`}
        @click="${this.onSaveButtonClick}"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path
            d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
          />
          <path d="M17 21v-8H7v8M7 3v5h8" />
        </svg>
        <div class="flex-1">
          <div class="font-medium">
            ${t(`saved_games.save_label`)}
          </div>
          <div class="text-sm text-slate-400" data-save-status>${n}</div>
        </div>
      </button>
    `}onExitButtonClick(){window.location.href=f()}renderModifiers(){let e=this.gameConfig;if(e===null)return null;let r=Pe(e,this.mapNationCount),i=O(e,`mx-3 mt-2`),a=n(e,`mx-3 mt-2`);return r.length===0&&i===null&&a===null?null:N`
      <div class="border-t border-slate-600 pt-3 mt-4" data-game-modifiers>
        <div
          class="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider"
        >
          ${t(`user_setting.modifiers`)}
        </div>
        ${r.length>0?N`<div
                class="flex flex-wrap gap-1 px-3 pt-1 uppercase"
                data-modifier-tags
              >
                ${r.map(e=>N`<span class=${le}
                      >${ge(e)}</span
                    >`)}
              </div>`:null}
        ${i} ${a}
      </div>
    `}render(){return this.isVisible?N`
      <div
        class="modal-overlay fixed inset-0 bg-black/60 backdrop-blur-xs z-2000 flex items-center justify-center p-4"
        @contextmenu=${e=>e.preventDefault()}
      >
        <div
          class="bg-slate-800 border border-slate-600 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto"
        >
          <div
            class="flex items-center justify-between p-4 border-b border-slate-600"
          >
            <div class="flex items-center gap-2">
              <img
                src=${mo}
                alt=""
                width="24"
                height="24"
                class="align-middle"
              />
              <h2 class="text-xl font-semibold text-white">
                ${t(`user_setting.game_menu_title`)}
              </h2>
            </div>
            <button
              class="text-slate-400 hover:text-white text-2xl font-bold leading-none"
              @click=${this.closeModal}
            >
              ×
            </button>
          </div>

          <div class="p-4 flex flex-col gap-3">
            ${this.renderSaveRow()}

            <button
              type="button"
              data-open-graphics
              class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors"
              @click=${this.onOpenGraphicsButtonClick}
            >
              <img src=${mo} alt="" width="20" height="20" />
              <span class="font-medium">
                ${t(`user_setting.tab_graphics`)}
              </span>
            </button>

            <button
              class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors"
              data-open-settings
              @click="${this.onOpenSettingsButtonClick}"
            >
              <img src=${mo} alt="" width="20" height="20" />
              <div class="flex-1">
                <div class="font-medium">
                  ${t(`user_setting.open_settings_label`)}
                </div>
                <div class="text-sm text-slate-400">
                  ${t(`user_setting.open_settings_desc`)}
                </div>
              </div>
            </button>

            <button
              class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors"
              @click="${this.onTerrainButtonClick}"
            >
              <img src=${ho} alt="" width="20" height="20" />
              <div class="flex-1">
                <div class="font-medium">
                  ${t(`user_setting.toggle_terrain`)}
                </div>
                <div class="text-sm text-slate-400">
                  ${t(`user_setting.toggle_view_desc`)}
                </div>
              </div>
              <div class="text-sm text-slate-400">
                ${this.alternateView?t(`user_setting.on`):t(`user_setting.off`)}
              </div>
            </button>

            ${this.renderModifiers()}

            <div class="border-t border-slate-600 pt-3 mt-4">
              <div
                class="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider"
              >
                ${t(`user_setting.development_only`)}
              </div>

              <button
                class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors"
                @click="${this.onRenderDebugGuiButtonClick}"
              >
                <img src=${mo} alt="" width="20" height="20" />
                <div class="flex-1">
                  <div class="font-medium">
                    ${t(`user_setting.render_debug_gui`)}
                  </div>
                  <div class="text-sm text-slate-400">
                    ${t(`user_setting.render_debug_gui_desc`)}
                  </div>
                </div>
              </button>
            </div>

            <div class="border-t border-slate-600 pt-3 mt-4">
              <button
                class="flex gap-3 items-center w-full text-left p-3 hover:bg-red-600/20 rounded-sm text-red-400 transition-colors"
                @click="${this.onExitButtonClick}"
              >
                <img src=${po} alt="" width="20" height="20" />
                <div class="flex-1">
                  <div class="font-medium">
                    ${t(`user_setting.exit_game_label`)}
                  </div>
                  <div class="text-sm text-slate-400">
                    ${t(`user_setting.exit_game_info`)}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    `:null}};I([P()],q.prototype,`isVisible`,void 0),I([P()],q.prototype,`alternateView`,void 0),I([de(`.modal-overlay`)],q.prototype,`modalOverlay`,void 0),I([L({type:Boolean})],q.prototype,`shouldPause`,void 0),I([L({type:Boolean})],q.prototype,`wasPausedWhenOpened`,void 0),I([L({attribute:!1})],q.prototype,`gameConfig`,void 0),I([L({attribute:!1})],q.prototype,`mapNationCount`,void 0),I([L({attribute:!1})],q.prototype,`game`,void 0),I([P()],q.prototype,`saveStatus`,void 0),q=I([pe(`settings-modal`)],q);function _o(e,t){let n=e=>String(e).padStart(2,`0`),r=`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}`,i=`${n(t.getHours())}:${n(t.getMinutes())}`;return`${e.slice(0,47)} ${r} ${i}`}var vo={value:()=>{}};function yo(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+``)||r in n||/[\s.]/.test(r))throw Error(`illegal type: `+r);n[r]=[]}return new bo(n)}function bo(e){this._=e}function xo(e,t){return e.trim().split(/^|\s+/).map(function(e){var n=``,r=e.indexOf(`.`);if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw Error(`unknown type: `+e);return{type:e,name:n}})}bo.prototype=yo.prototype={constructor:bo,on:function(e,t){var n=this._,r=xo(e+``,n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=So(n[i],e.name)))return i;return}if(t!=null&&typeof t!=`function`)throw Error(`invalid callback: `+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=Co(n[i],e.name,t);else if(t==null)for(i in n)n[i]=Co(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new bo(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function So(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function Co(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=vo,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var wo={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function To(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),wo.hasOwnProperty(t)?{space:wo[t],local:e}:e}function Eo(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===`http://www.w3.org/1999/xhtml`&&t.documentElement.namespaceURI===`http://www.w3.org/1999/xhtml`?t.createElement(e):t.createElementNS(n,e)}}function Do(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Oo(e){var t=To(e);return(t.local?Do:Eo)(t)}function ko(){}function Ao(e){return e==null?ko:function(){return this.querySelector(e)}}function jo(e){typeof e!=`function`&&(e=Ao(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=Array(o),c,l,u=0;u<o;++u)(c=a[u])&&(l=e.call(c,c.__data__,u,a))&&(`__data__`in c&&(l.__data__=c.__data__),s[u]=l);return new J(r,this._parents)}function Mo(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function No(){return[]}function Po(e){return e==null?No:function(){return this.querySelectorAll(e)}}function Fo(e){return function(){return Mo(e.apply(this,arguments))}}function Io(e){e=typeof e==`function`?Fo(e):Po(e);for(var t=this._groups,n=t.length,r=[],i=[],a=0;a<n;++a)for(var o=t[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&(r.push(e.call(c,c.__data__,l,o)),i.push(c));return new J(r,i)}function Lo(e){return function(){return this.matches(e)}}function Ro(e){return function(t){return t.matches(e)}}var zo=Array.prototype.find;function Bo(e){return function(){return zo.call(this.children,e)}}function Vo(){return this.firstElementChild}function Ho(e){return this.select(e==null?Vo:Bo(typeof e==`function`?e:Ro(e)))}var Uo=Array.prototype.filter;function Wo(){return Array.from(this.children)}function Go(e){return function(){return Uo.call(this.children,e)}}function Ko(e){return this.selectAll(e==null?Wo:Go(typeof e==`function`?e:Ro(e)))}function qo(e){typeof e!=`function`&&(e=Lo(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new J(r,this._parents)}function Jo(e){return Array(e.length)}function Yo(){return new J(this._enter||this._groups.map(Jo),this._parents)}function Xo(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Xo.prototype={constructor:Xo,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Zo(e){return function(){return e}}function Qo(e,t,n,r,i,a){for(var o=0,s,c=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],r[o]=s):n[o]=new Xo(e,a[o]);for(;o<c;++o)(s=t[o])&&(i[o]=s)}function $o(e,t,n,r,i,a,o){var s,c,l=new Map,u=t.length,d=a.length,f=Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=o.call(c,c.__data__,s,t)+``,l.has(p)?i[s]=c:l.set(p,c));for(s=0;s<d;++s)p=o.call(e,a[s],s,a)+``,(c=l.get(p))?(r[s]=c,c.__data__=a[s],l.delete(p)):n[s]=new Xo(e,a[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(i[s]=c)}function es(e){return e.__data__}function ts(e,t){if(!arguments.length)return Array.from(this,es);var n=t?$o:Qo,r=this._parents,i=this._groups;typeof e!=`function`&&(e=Zo(e));for(var a=i.length,o=Array(a),s=Array(a),c=Array(a),l=0;l<a;++l){var u=r[l],d=i[l],f=d.length,p=ns(e.call(u,u&&u.__data__,l,r)),m=p.length,h=s[l]=Array(m),g=o[l]=Array(m);n(u,d,h,g,c[l]=Array(f),p,t);for(var _=0,v=0,y,b;_<m;++_)if(y=h[_]){for(_>=v&&(v=_+1);!(b=g[v])&&++v<m;);y._next=b||null}}return o=new J(o,r),o._enter=s,o._exit=c,o}function ns(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function rs(){return new J(this._exit||this._groups.map(Jo),this._parents)}function is(e,t,n){var r=this.enter(),i=this,a=this.exit();return typeof e==`function`?(r=e(r),r&&=r.selection()):r=r.append(e+``),t!=null&&(i=t(i),i&&=i.selection()),n==null?a.remove():n(a),r&&i?r.merge(i).order():i}function as(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,a=r.length,o=Math.min(i,a),s=Array(i),c=0;c<o;++c)for(var l=n[c],u=r[c],d=l.length,f=s[c]=Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<i;++c)s[c]=n[c];return new J(s,this._parents)}function os(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,a=r[i],o;--i>=0;)(o=r[i])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function ss(e){e||=cs;function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}for(var n=this._groups,r=n.length,i=Array(r),a=0;a<r;++a){for(var o=n[a],s=o.length,c=i[a]=Array(s),l,u=0;u<s;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new J(i,this._parents).order()}function cs(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function ls(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function us(){return Array.from(this)}function ds(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}function fs(){let e=0;for(let t of this)++e;return e}function ps(){return!this.node()}function ms(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],a=0,o=i.length,s;a<o;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function hs(e){return function(){this.removeAttribute(e)}}function gs(e){return function(){this.removeAttributeNS(e.space,e.local)}}function _s(e,t){return function(){this.setAttribute(e,t)}}function vs(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function ys(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function bs(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function xs(e,t){var n=To(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?gs:hs:typeof t==`function`?n.local?bs:ys:n.local?vs:_s)(n,t))}function Ss(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Cs(e){return function(){this.style.removeProperty(e)}}function ws(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Ts(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Es(e,t,n){return arguments.length>1?this.each((t==null?Cs:typeof t==`function`?Ts:ws)(e,t,n??``)):Ds(this.node(),e)}function Ds(e,t){return e.style.getPropertyValue(t)||Ss(e).getComputedStyle(e,null).getPropertyValue(t)}function Os(e){return function(){delete this[e]}}function ks(e,t){return function(){this[e]=t}}function As(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function js(e,t){return arguments.length>1?this.each((t==null?Os:typeof t==`function`?As:ks)(e,t)):this.node()[e]}function Ms(e){return e.trim().split(/^|\s+/)}function Ns(e){return e.classList||new Ps(e)}function Ps(e){this._node=e,this._names=Ms(e.getAttribute(`class`)||``)}Ps.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function Fs(e,t){for(var n=Ns(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function Is(e,t){for(var n=Ns(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Ls(e){return function(){Fs(this,e)}}function Rs(e){return function(){Is(this,e)}}function zs(e,t){return function(){(t.apply(this,arguments)?Fs:Is)(this,e)}}function Bs(e,t){var n=Ms(e+``);if(arguments.length<2){for(var r=Ns(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t==`function`?zs:t?Ls:Rs)(n,t))}function Vs(){this.textContent=``}function Hs(e){return function(){this.textContent=e}}function Us(e){return function(){var t=e.apply(this,arguments);this.textContent=t??``}}function Ws(e){return arguments.length?this.each(e==null?Vs:(typeof e==`function`?Us:Hs)(e)):this.node().textContent}function Gs(){this.innerHTML=``}function Ks(e){return function(){this.innerHTML=e}}function qs(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??``}}function Js(e){return arguments.length?this.each(e==null?Gs:(typeof e==`function`?qs:Ks)(e)):this.node().innerHTML}function Ys(){this.nextSibling&&this.parentNode.appendChild(this)}function Xs(){return this.each(Ys)}function Zs(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Qs(){return this.each(Zs)}function $s(e){var t=typeof e==`function`?e:Oo(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function ec(){return null}function tc(e,t){var n=typeof e==`function`?e:Oo(e),r=t==null?ec:typeof t==`function`?t:Ao(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function nc(){var e=this.parentNode;e&&e.removeChild(this)}function rc(){return this.each(nc)}function ic(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function ac(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function oc(e){return this.select(e?ac:ic)}function sc(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function cc(e){return function(t){e.call(this,t,this.__data__)}}function lc(e){return e.trim().split(/^|\s+/).map(function(e){var t=``,n=e.indexOf(`.`);return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function uc(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++r]=a;++r?t.length=r:delete this.__on}}}function dc(e,t,n){return function(){var r=this.__on,i,a=cc(t);if(r){for(var o=0,s=r.length;o<s;++o)if((i=r[o]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},r?r.push(i):this.__on=[i]}}function fc(e,t,n){var r=lc(e+``),i,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(i=0,u=s[c];i<a;++i)if((o=r[i]).type===u.type&&o.name===u.name)return u.value}return}for(s=t?dc:uc,i=0;i<a;++i)this.each(s(r[i],t,n));return this}function pc(e,t,n){var r=Ss(e),i=r.CustomEvent;typeof i==`function`?i=new i(t,n):(i=r.document.createEvent(`Event`),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function mc(e,t){return function(){return pc(this,e,t)}}function hc(e,t){return function(){return pc(this,e,t.apply(this,arguments))}}function gc(e,t){return this.each((typeof t==`function`?hc:mc)(e,t))}function*_c(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length,o;i<a;++i)(o=r[i])&&(yield o)}var vc=[null];function J(e,t){this._groups=e,this._parents=t}function yc(){return new J([[document.documentElement]],vc)}function bc(){return this}J.prototype=yc.prototype={constructor:J,select:jo,selectAll:Io,selectChild:Ho,selectChildren:Ko,filter:qo,data:ts,enter:Yo,exit:rs,join:is,merge:as,selection:bc,order:os,sort:ss,call:ls,nodes:us,node:ds,size:fs,empty:ps,each:ms,attr:xs,style:Es,property:js,classed:Bs,text:Ws,html:Js,raise:Xs,lower:Qs,append:$s,insert:tc,remove:rc,clone:oc,datum:sc,on:fc,dispatch:gc,[Symbol.iterator]:_c};function xc(e){return typeof e==`string`?new J([[document.querySelector(e)]],[document.documentElement]):new J([[e]],vc)}function Sc(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Cc(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function wc(){}var Tc=.7,Ec=1/Tc,Dc=`\\s*([+-]?\\d+)\\s*`,Oc=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,kc=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,Ac=/^#([0-9a-f]{3,8})$/,jc=RegExp(`^rgb\\(${Dc},${Dc},${Dc}\\)$`),Mc=RegExp(`^rgb\\(${kc},${kc},${kc}\\)$`),Nc=RegExp(`^rgba\\(${Dc},${Dc},${Dc},${Oc}\\)$`),Pc=RegExp(`^rgba\\(${kc},${kc},${kc},${Oc}\\)$`),Fc=RegExp(`^hsl\\(${Oc},${kc},${kc}\\)$`),Ic=RegExp(`^hsla\\(${Oc},${kc},${kc},${Oc}\\)$`),Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Sc(wc,Y,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Rc,formatHex:Rc,formatHex8:zc,formatHsl:Bc,formatRgb:Vc,toString:Vc});function Rc(){return this.rgb().formatHex()}function zc(){return this.rgb().formatHex8()}function Bc(){return $c(this).formatHsl()}function Vc(){return this.rgb().formatRgb()}function Y(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=Ac.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Hc(t):n===3?new X(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Uc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Uc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=jc.exec(e))?new X(t[1],t[2],t[3],1):(t=Mc.exec(e))?new X(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Nc.exec(e))?Uc(t[1],t[2],t[3],t[4]):(t=Pc.exec(e))?Uc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Fc.exec(e))?Qc(t[1],t[2]/100,t[3]/100,1):(t=Ic.exec(e))?Qc(t[1],t[2]/100,t[3]/100,t[4]):Lc.hasOwnProperty(e)?Hc(Lc[e]):e===`transparent`?new X(NaN,NaN,NaN,0):null}function Hc(e){return new X(e>>16&255,e>>8&255,e&255,1)}function Uc(e,t,n,r){return r<=0&&(e=t=n=NaN),new X(e,t,n,r)}function Wc(e){return e instanceof wc||(e=Y(e)),e?(e=e.rgb(),new X(e.r,e.g,e.b,e.opacity)):new X}function Gc(e,t,n,r){return arguments.length===1?Wc(e):new X(e,t,n,r??1)}function X(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Sc(X,Gc,Cc(wc,{brighter(e){return e=e==null?Ec:Ec**+e,new X(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Tc:Tc**+e,new X(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new X(Xc(this.r),Xc(this.g),Xc(this.b),Yc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Kc,formatHex:Kc,formatHex8:qc,formatRgb:Jc,toString:Jc}));function Kc(){return`#${Zc(this.r)}${Zc(this.g)}${Zc(this.b)}`}function qc(){return`#${Zc(this.r)}${Zc(this.g)}${Zc(this.b)}${Zc((isNaN(this.opacity)?1:this.opacity)*255)}`}function Jc(){let e=Yc(this.opacity);return`${e===1?`rgb(`:`rgba(`}${Xc(this.r)}, ${Xc(this.g)}, ${Xc(this.b)}${e===1?`)`:`, ${e})`}`}function Yc(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Xc(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Zc(e){return e=Xc(e),(e<16?`0`:``)+e.toString(16)}function Qc(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new tl(e,t,n,r)}function $c(e){if(e instanceof tl)return new tl(e.h,e.s,e.l,e.opacity);if(e instanceof wc||(e=Y(e)),!e)return new tl;if(e instanceof tl)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new tl(o,s,c,e.opacity)}function el(e,t,n,r){return arguments.length===1?$c(e):new tl(e,t,n,r??1)}function tl(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Sc(tl,el,Cc(wc,{brighter(e){return e=e==null?Ec:Ec**+e,new tl(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Tc:Tc**+e,new tl(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new X(il(e>=240?e-240:e+120,i,r),il(e,i,r),il(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new tl(nl(this.h),rl(this.s),rl(this.l),Yc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Yc(this.opacity);return`${e===1?`hsl(`:`hsla(`}${nl(this.h)}, ${rl(this.s)*100}%, ${rl(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function nl(e){return e=(e||0)%360,e<0?e+360:e}function rl(e){return Math.max(0,Math.min(1,e||0))}function il(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var al=e=>()=>e;function ol(e,t){return function(n){return e+n*t}}function sl(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function cl(e){return(e=+e)==1?ll:function(t,n){return n-t?sl(t,n,e):al(isNaN(t)?n:t)}}function ll(e,t){var n=t-e;return n?ol(e,n):al(isNaN(e)?t:e)}var ul=(function e(t){var n=cl(t);function r(e,t){var r=n((e=Gc(e)).r,(t=Gc(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=ll(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function dl(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var fl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pl=new RegExp(fl.source,`g`);function ml(e){return function(){return e}}function hl(e){return function(t){return e(t)+``}}function gl(e,t){var n=fl.lastIndex=pl.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=fl.exec(e))&&(i=pl.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:dl(r,i)})),n=pl.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?hl(c[0].x):ml(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}var _l=180/Math.PI,vl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function yl(e,t,n,r,i,a){var o,s,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,c/=s),e*r<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*_l,skewX:Math.atan(c)*_l,scaleX:o,scaleY:s}}var bl;function xl(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?vl:yl(t.a,t.b,t.c,t.d,t.e,t.f)}function Sl(e){return e==null||(bl||=document.createElementNS(`http://www.w3.org/2000/svg`,`g`),bl.setAttribute(`transform`,e),!(e=bl.transform.baseVal.consolidate()))?vl:(e=e.matrix,yl(e.a,e.b,e.c,e.d,e.e,e.f))}function Cl(e,t,n,r){function i(e){return e.length?e.pop()+` `:``}function a(e,r,i,a,o,s){if(e!==i||r!==a){var c=o.push(`translate(`,null,t,null,n);s.push({i:c-4,x:dl(e,i)},{i:c-2,x:dl(r,a)})}else (i||a)&&o.push(`translate(`+i+t+a+n)}function o(e,t,n,a){e===t?t&&n.push(i(n)+`rotate(`+t+r):(e-t>180?t+=360:t-e>180&&(e+=360),a.push({i:n.push(i(n)+`rotate(`,null,r)-2,x:dl(e,t)}))}function s(e,t,n,a){e===t?t&&n.push(i(n)+`skewX(`+t+r):a.push({i:n.push(i(n)+`skewX(`,null,r)-2,x:dl(e,t)})}function c(e,t,n,r,a,o){if(e!==n||t!==r){var s=a.push(i(a)+`scale(`,null,`,`,null,`)`);o.push({i:s-4,x:dl(e,n)},{i:s-2,x:dl(t,r)})}else (n!==1||r!==1)&&a.push(i(a)+`scale(`+n+`,`+r+`)`)}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),a(t.translateX,t.translateY,n.translateX,n.translateY,r,i),o(t.rotate,n.rotate,r,i),s(t.skewX,n.skewX,r,i),c(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){for(var t=-1,n=i.length,a;++t<n;)r[(a=i[t]).i]=a.x(e);return r.join(``)}}}var wl=Cl(xl,`px, `,`px)`,`deg)`),Tl=Cl(Sl,`, `,`)`,`)`),El=0,Dl=0,Ol=0,kl=1e3,Al,jl,Ml=0,Nl=0,Pl=0,Fl=typeof performance==`object`&&performance.now?performance:Date,Il=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Ll(){return Nl||=(Il(Rl),Fl.now()+Pl)}function Rl(){Nl=0}function zl(){this._call=this._time=this._next=null}zl.prototype=Bl.prototype={constructor:zl,restart:function(e,t,n){if(typeof e!=`function`)throw TypeError(`callback is not a function`);n=(n==null?Ll():+n)+(t==null?0:+t),!this._next&&jl!==this&&(jl?jl._next=this:Al=this,jl=this),this._call=e,this._time=n,Gl()},stop:function(){this._call&&(this._call=null,this._time=1/0,Gl())}};function Bl(e,t,n){var r=new zl;return r.restart(e,t,n),r}function Vl(){Ll(),++El;for(var e=Al,t;e;)(t=Nl-e._time)>=0&&e._call.call(void 0,t),e=e._next;--El}function Hl(){Nl=(Ml=Fl.now())+Pl,El=Dl=0;try{Vl()}finally{El=0,Wl(),Nl=0}}function Ul(){var e=Fl.now(),t=e-Ml;t>kl&&(Pl-=t,Ml=e)}function Wl(){for(var e,t=Al,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Al=n);jl=e,Gl(r)}function Gl(e){El||(Dl&&=clearTimeout(Dl),e-Nl>24?(e<1/0&&(Dl=setTimeout(Hl,e-Fl.now()-Pl)),Ol&&=clearInterval(Ol)):(Ol||=(Ml=Fl.now(),setInterval(Ul,kl)),El=1,Il(Hl)))}function Kl(e,t,n){var r=new zl;return t=t==null?0:+t,r.restart(n=>{r.stop(),e(n+t)},t,n),r}var ql=yo(`start`,`end`,`cancel`,`interrupt`),Jl=[];function Yl(e,t,n,r,i,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;$l(e,n,{name:t,index:r,group:i,on:ql,tween:Jl,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function Xl(e,t){var n=Ql(e,t);if(n.state>0)throw Error(`too late; already scheduled`);return n}function Zl(e,t){var n=Ql(e,t);if(n.state>3)throw Error(`too late; already running`);return n}function Ql(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw Error(`transition not found`);return n}function $l(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=Bl(a,0,n.time);function a(e){n.state=1,n.timer.restart(o,n.delay,n.time),n.delay<=e&&o(e-n.delay)}function o(a){var l,u,d,f;if(n.state!==1)return c();for(l in r)if(f=r[l],f.name===n.name){if(f.state===3)return Kl(o);f.state===4?(f.state=6,f.timer.stop(),f.on.call(`interrupt`,e,e.__data__,f.index,f.group),delete r[l]):+l<t&&(f.state=6,f.timer.stop(),f.on.call(`cancel`,e,e.__data__,f.index,f.group),delete r[l])}if(Kl(function(){n.state===3&&(n.state=4,n.timer.restart(s,n.delay,n.time),s(a))}),n.state=2,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===2){for(n.state=3,i=Array(d=n.tween.length),l=0,u=-1;l<d;++l)(f=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(i[++u]=f);i.length=u+1}}function s(t){for(var r=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(c),n.state=5,1),a=-1,o=i.length;++a<o;)i[a].call(e,r);n.state===5&&(n.on.call(`end`,e,e.__data__,n.index,n.group),c())}function c(){for(var i in n.state=6,n.timer.stop(),delete r[t],r)return;delete e.__transition}}function eu(e,t){var n=e.__transition,r,i,a=!0,o;if(n){for(o in t=t==null?null:t+``,n){if((r=n[o]).name!==t){a=!1;continue}i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?`interrupt`:`cancel`,e,e.__data__,r.index,r.group),delete n[o]}a&&delete e.__transition}}function tu(e){return this.each(function(){eu(this,e)})}function nu(e,t){var n,r;return function(){var i=Zl(this,e),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function ru(e,t,n){var r,i;if(typeof n!=`function`)throw Error();return function(){var a=Zl(this,e),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:t,value:n},c=0,l=i.length;c<l;++c)if(i[c].name===t){i[c]=s;break}c===l&&i.push(s)}a.tween=i}}function iu(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var r=Ql(this.node(),n).tween,i=0,a=r.length,o;i<a;++i)if((o=r[i]).name===e)return o.value;return null}return this.each((t==null?nu:ru)(n,e,t))}function au(e,t,n){var r=e._id;return e.each(function(){var e=Zl(this,r);(e.value||={})[t]=n.apply(this,arguments)}),function(e){return Ql(e,r).value[t]}}function ou(e,t){var n;return(typeof t==`number`?dl:t instanceof Y?ul:(n=Y(t))?(t=n,ul):gl)(e,t)}function su(e){return function(){this.removeAttribute(e)}}function cu(e){return function(){this.removeAttributeNS(e.space,e.local)}}function lu(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttribute(e);return o===i?null:o===r?a:a=t(r=o,n)}}function uu(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===i?null:o===r?a:a=t(r=o,n)}}function du(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function fu(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function pu(e,t){var n=To(e),r=n===`transform`?Tl:ou;return this.attrTween(e,typeof t==`function`?(n.local?fu:du)(n,r,au(this,`attr.`+e,t)):t==null?(n.local?cu:su)(n):(n.local?uu:lu)(n,r,t))}function mu(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function hu(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function gu(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&hu(e,i)),n}return i._value=t,i}function _u(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&mu(e,i)),n}return i._value=t,i}function vu(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw Error();var r=To(e);return this.tween(n,(r.local?gu:_u)(r,t))}function yu(e,t){return function(){Xl(this,e).delay=+t.apply(this,arguments)}}function bu(e,t){return t=+t,function(){Xl(this,e).delay=t}}function xu(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?yu:bu)(t,e)):Ql(this.node(),t).delay}function Su(e,t){return function(){Zl(this,e).duration=+t.apply(this,arguments)}}function Cu(e,t){return t=+t,function(){Zl(this,e).duration=t}}function wu(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?Su:Cu)(t,e)):Ql(this.node(),t).duration}function Tu(e,t){if(typeof t!=`function`)throw Error();return function(){Zl(this,e).ease=t}}function Eu(e){var t=this._id;return arguments.length?this.each(Tu(t,e)):Ql(this.node(),t).ease}function Du(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw Error();Zl(this,e).ease=n}}function Ou(e){if(typeof e!=`function`)throw Error();return this.each(Du(this._id,e))}function ku(e){typeof e!=`function`&&(e=Lo(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new id(r,this._parents,this._name,this._id)}function Au(e){if(e._id!==this._id)throw Error();for(var t=this._groups,n=e._groups,r=t.length,i=n.length,a=Math.min(r,i),o=Array(r),s=0;s<a;++s)for(var c=t[s],l=n[s],u=c.length,d=o[s]=Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<r;++s)o[s]=t[s];return new id(o,this._parents,this._name,this._id)}function ju(e){return(e+``).trim().split(/^|\s+/).every(function(e){var t=e.indexOf(`.`);return t>=0&&(e=e.slice(0,t)),!e||e===`start`})}function Mu(e,t,n){var r,i,a=ju(t)?Xl:Zl;return function(){var o=a(this,e),s=o.on;s!==r&&(i=(r=s).copy()).on(t,n),o.on=i}}function Nu(e,t){var n=this._id;return arguments.length<2?Ql(this.node(),n).on.on(e):this.each(Mu(n,e,t))}function Pu(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Fu(){return this.on(`end.remove`,Pu(this._id))}function Iu(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=Ao(e));for(var r=this._groups,i=r.length,a=Array(i),o=0;o<i;++o)for(var s=r[o],c=s.length,l=a[o]=Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&(`__data__`in u&&(d.__data__=u.__data__),l[f]=d,Yl(l[f],t,n,f,l,Ql(u,n)));return new id(a,this._parents,t,n)}function Lu(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=Po(e));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var c=r[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=Ql(u,n),h=0,g=f.length;h<g;++h)(p=f[h])&&Yl(p,t,n,h,f,m);a.push(f),o.push(u)}return new id(a,o,t,n)}var Ru=yc.prototype.constructor;function zu(){return new Ru(this._groups,this._parents)}function Bu(e,t){var n,r,i;return function(){var a=Ds(this,e),o=(this.style.removeProperty(e),Ds(this,e));return a===o?null:a===n&&o===r?i:i=t(n=a,r=o)}}function Vu(e){return function(){this.style.removeProperty(e)}}function Hu(e,t,n){var r,i=n+``,a;return function(){var o=Ds(this,e);return o===i?null:o===r?a:a=t(r=o,n)}}function Uu(e,t,n){var r,i,a;return function(){var o=Ds(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),Ds(this,e))),o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s))}}function Wu(e,t){var n,r,i,a=`style.`+t,o=`end.`+a,s;return function(){var c=Zl(this,e),l=c.on,u=c.value[a]==null?s||=Vu(t):void 0;(l!==n||i!==u)&&(r=(n=l).copy()).on(o,i=u),c.on=r}}function Gu(e,t,n){var r=(e+=``)==`transform`?wl:ou;return t==null?this.styleTween(e,Bu(e,r)).on(`end.style.`+e,Vu(e)):typeof t==`function`?this.styleTween(e,Uu(e,r,au(this,`style.`+e,t))).each(Wu(this._id,e)):this.styleTween(e,Hu(e,r,t),n).on(`end.style.`+e,null)}function Ku(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function qu(e,t,n){var r,i;function a(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&Ku(e,a,n)),r}return a._value=t,a}function Ju(e,t,n){var r=`style.`+(e+=``);if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!=`function`)throw Error();return this.tween(r,qu(e,t,n??``))}function Yu(e){return function(){this.textContent=e}}function Xu(e){return function(){var t=e(this);this.textContent=t??``}}function Zu(e){return this.tween(`text`,typeof e==`function`?Xu(au(this,`text`,e)):Yu(e==null?``:e+``))}function Qu(e){return function(t){this.textContent=e.call(this,t)}}function $u(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Qu(r)),t}return r._value=e,r}function ed(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw Error();return this.tween(t,$u(e))}function td(){for(var e=this._name,t=this._id,n=od(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)if(c=o[l]){var u=Ql(c,t);Yl(c,e,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new id(r,this._parents,e,n)}function nd(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},c={value:function(){--i===0&&a()}};n.each(function(){var n=Zl(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),n.on=t}),i===0&&a()})}var rd=0;function id(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function ad(e){return yc().transition(e)}function od(){return++rd}var sd=yc.prototype;id.prototype=ad.prototype={constructor:id,select:Iu,selectAll:Lu,selectChild:sd.selectChild,selectChildren:sd.selectChildren,filter:ku,merge:Au,selection:zu,transition:td,call:sd.call,nodes:sd.nodes,node:sd.node,size:sd.size,empty:sd.empty,each:sd.each,on:Nu,attr:pu,attrTween:vu,style:Gu,styleTween:Ju,text:Zu,textTween:ed,remove:Fu,tween:iu,delay:xu,duration:wu,ease:Eu,easeVarying:Ou,end:nd,[Symbol.iterator]:sd[Symbol.iterator]};function cd(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var ld={time:null,delay:0,duration:250,ease:cd};function ud(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw Error(`transition ${t} not found`);return n}function dd(e){var t,n;e instanceof id?(t=e._id,e=e._name):(t=od(),(n=ld).time=Ll(),e=e==null?null:e+``);for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&Yl(c,e,t,l,o,n||ud(c,t));return new id(r,this._parents,e,t)}yc.prototype.interrupt=tu,yc.prototype.transition=dd;var{abs:fd,max:pd,min:md}=Math;[`w`,`e`].map(hd),[`n`,`s`].map(hd),[`n`,`w`,`e`,`s`,`nw`,`ne`,`sw`,`se`].map(hd);function hd(e){return{type:e}}var gd=Math.PI,_d=2*gd,vd=1e-6,yd=_d-vd;function bd(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function xd(e){let t=Math.floor(e);if(!(t>=0))throw Error(`invalid digits: ${e}`);if(t>15)return bd;let n=10**t;return function(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=Math.round(arguments[t]*n)/n+e[t]}}var Sd=class{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._=``,this._append=e==null?bd:xd(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,n,r){this._append`Q${+e},${+t},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(e,t,n,r,i,a){this._append`C${+e},${+t},${+n},${+r},${this._x1=+i},${this._y1=+a}`}arcTo(e,t,n,r,i){if(e=+e,t=+t,n=+n,r=+r,i=+i,i<0)throw Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,s=n-e,c=r-t,l=a-e,u=o-t,d=l*l+u*u;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(d>vd)if(!(Math.abs(u*s-c*l)>vd)||!i)this._append`L${this._x1=e},${this._y1=t}`;else{let f=n-a,p=r-o,m=s*s+c*c,h=f*f+p*p,g=Math.sqrt(m),_=Math.sqrt(d),v=i*Math.tan((gd-Math.acos((m+d-h)/(2*g*_)))/2),y=v/_,b=v/g;Math.abs(y-1)>vd&&this._append`L${e+y*l},${t+y*u}`,this._append`A${i},${i},0,0,${+(u*f>l*p)},${this._x1=e+b*s},${this._y1=t+b*c}`}}arc(e,t,n,r,i,a){if(e=+e,t=+t,n=+n,a=!!a,n<0)throw Error(`negative radius: ${n}`);let o=n*Math.cos(r),s=n*Math.sin(r),c=e+o,l=t+s,u=1^a,d=a?r-i:i-r;this._x1===null?this._append`M${c},${l}`:(Math.abs(this._x1-c)>vd||Math.abs(this._y1-l)>vd)&&this._append`L${c},${l}`,n&&(d<0&&(d=d%_d+_d),d>yd?this._append`A${n},${n},0,1,${u},${e-o},${t-s}A${n},${n},0,1,${u},${this._x1=c},${this._y1=l}`:d>vd&&this._append`A${n},${n},0,${+(d>=gd)},${u},${this._x1=e+n*Math.cos(i)},${this._y1=t+n*Math.sin(i)}`)}rect(e,t,n,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}};function Cd(){return new Sd}Cd.prototype=Sd.prototype;function Z(e){return function(){return e}}var wd=Math.abs,Q=Math.atan2,Td=Math.cos,Ed=Math.max,Dd=Math.min,Od=Math.sin,kd=Math.sqrt,Ad=Math.PI,jd=Ad/2,Md=2*Ad;function Nd(e){return e>1?0:e<-1?Ad:Math.acos(e)}function Pd(e){return e>=1?jd:e<=-1?-jd:Math.asin(e)}function Fd(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{let e=Math.floor(n);if(!(e>=0))throw RangeError(`invalid digits: ${n}`);t=e}return e},()=>new Sd(t)}function Id(e){return e.innerRadius}function Ld(e){return e.outerRadius}function Rd(e){return e.startAngle}function zd(e){return e.endAngle}function Bd(e){return e&&e.padAngle}function Vd(e,t,n,r,i,a,o,s){var c=n-e,l=r-t,u=o-i,d=s-a,f=d*c-u*l;if(!(f*f<1e-12))return f=(u*(t-a)-d*(e-i))/f,[e+f*c,t+f*l]}function Hd(e,t,n,r,i,a,o){var s=e-n,c=t-r,l=(o?a:-a)/kd(s*s+c*c),u=l*c,d=-l*s,f=e+u,p=t+d,m=n+u,h=r+d,g=(f+m)/2,_=(p+h)/2,v=m-f,y=h-p,b=v*v+y*y,x=i-a,S=f*h-m*p,C=(y<0?-1:1)*kd(Ed(0,x*x*b-S*S)),w=(S*y-v*C)/b,T=(-S*v-y*C)/b,E=(S*y+v*C)/b,D=(-S*v+y*C)/b,O=w-g,k=T-_,A=E-g,ee=D-_;return O*O+k*k>A*A+ee*ee&&(w=E,T=D),{cx:w,cy:T,x01:-u,y01:-d,x11:w*(i/x-1),y11:T*(i/x-1)}}function Ud(){var e=Id,t=Ld,n=Z(0),r=null,i=Rd,a=zd,o=Bd,s=null,c=Fd(l);function l(){var l,u,d=+e.apply(this,arguments),f=+t.apply(this,arguments),p=i.apply(this,arguments)-jd,m=a.apply(this,arguments)-jd,h=wd(m-p),g=m>p;if(s||=l=c(),f<d&&(u=f,f=d,d=u),!(f>1e-12))s.moveTo(0,0);else if(h>Md-1e-12)s.moveTo(f*Td(p),f*Od(p)),s.arc(0,0,f,p,m,!g),d>1e-12&&(s.moveTo(d*Td(m),d*Od(m)),s.arc(0,0,d,m,p,g));else{var _=p,v=m,y=p,b=m,x=h,S=h,C=o.apply(this,arguments)/2,w=C>1e-12&&(r?+r.apply(this,arguments):kd(d*d+f*f)),T=Dd(wd(f-d)/2,+n.apply(this,arguments)),E=T,D=T,O,k;if(w>1e-12){var A=Pd(w/d*Od(C)),ee=Pd(w/f*Od(C));(x-=A*2)>1e-12?(A*=g?1:-1,y+=A,b-=A):(x=0,y=b=(p+m)/2),(S-=ee*2)>1e-12?(ee*=g?1:-1,_+=ee,v-=ee):(S=0,_=v=(p+m)/2)}var te=f*Td(_),ne=f*Od(_),re=d*Td(b),ie=d*Od(b);if(T>1e-12){var ae=f*Td(v),oe=f*Od(v),j=d*Td(y),se=d*Od(y),ce;if(h<Ad)if(ce=Vd(te,ne,j,se,ae,oe,re,ie)){var le=te-ce[0],M=ne-ce[1],N=ae-ce[0],ue=oe-ce[1],de=1/Od(Nd((le*N+M*ue)/(kd(le*le+M*M)*kd(N*N+ue*ue)))/2),fe=kd(ce[0]*ce[0]+ce[1]*ce[1]);E=Dd(T,(d-fe)/(de-1)),D=Dd(T,(f-fe)/(de+1))}else E=D=0}S>1e-12?D>1e-12?(O=Hd(j,se,te,ne,f,D,g),k=Hd(ae,oe,re,ie,f,D,g),s.moveTo(O.cx+O.x01,O.cy+O.y01),D<T?s.arc(O.cx,O.cy,D,Q(O.y01,O.x01),Q(k.y01,k.x01),!g):(s.arc(O.cx,O.cy,D,Q(O.y01,O.x01),Q(O.y11,O.x11),!g),s.arc(0,0,f,Q(O.cy+O.y11,O.cx+O.x11),Q(k.cy+k.y11,k.cx+k.x11),!g),s.arc(k.cx,k.cy,D,Q(k.y11,k.x11),Q(k.y01,k.x01),!g))):(s.moveTo(te,ne),s.arc(0,0,f,_,v,!g)):s.moveTo(te,ne),!(d>1e-12)||!(x>1e-12)?s.lineTo(re,ie):E>1e-12?(O=Hd(re,ie,ae,oe,d,-E,g),k=Hd(te,ne,j,se,d,-E,g),s.lineTo(O.cx+O.x01,O.cy+O.y01),E<T?s.arc(O.cx,O.cy,E,Q(O.y01,O.x01),Q(k.y01,k.x01),!g):(s.arc(O.cx,O.cy,E,Q(O.y01,O.x01),Q(O.y11,O.x11),!g),s.arc(0,0,d,Q(O.cy+O.y11,O.cx+O.x11),Q(k.cy+k.y11,k.cx+k.x11),g),s.arc(k.cx,k.cy,E,Q(k.y11,k.x11),Q(k.y01,k.x01),!g))):s.arc(0,0,d,b,y,g)}if(s.closePath(),l)return s=null,l+``||null}return l.centroid=function(){var n=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +a.apply(this,arguments))/2-Ad/2;return[Td(r)*n,Od(r)*n]},l.innerRadius=function(t){return arguments.length?(e=typeof t==`function`?t:Z(+t),l):e},l.outerRadius=function(e){return arguments.length?(t=typeof e==`function`?e:Z(+e),l):t},l.cornerRadius=function(e){return arguments.length?(n=typeof e==`function`?e:Z(+e),l):n},l.padRadius=function(e){return arguments.length?(r=e==null?null:typeof e==`function`?e:Z(+e),l):r},l.startAngle=function(e){return arguments.length?(i=typeof e==`function`?e:Z(+e),l):i},l.endAngle=function(e){return arguments.length?(a=typeof e==`function`?e:Z(+e),l):a},l.padAngle=function(e){return arguments.length?(o=typeof e==`function`?e:Z(+e),l):o},l.context=function(e){return arguments.length?(s=e??null,l):s},l}Array.prototype.slice;function Wd(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function Gd(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function Kd(e){return e}function qd(){var e=Kd,t=Gd,n=null,r=Z(0),i=Z(Md),a=Z(0);function o(o){var s,c=(o=Wd(o)).length,l,u,d=0,f=Array(c),p=Array(c),m=+r.apply(this,arguments),h=Math.min(Md,Math.max(-Md,i.apply(this,arguments)-m)),g,_=Math.min(Math.abs(h)/c,a.apply(this,arguments)),v=_*(h<0?-1:1),y;for(s=0;s<c;++s)(y=p[f[s]=s]=+e(o[s],s,o))>0&&(d+=y);for(t==null?n!=null&&f.sort(function(e,t){return n(o[e],o[t])}):f.sort(function(e,n){return t(p[e],p[n])}),s=0,u=d?(h-c*v)/d:0;s<c;++s,m=g)l=f[s],y=p[l],g=m+(y>0?y*u:0)+v,p[l]={data:o[l],index:s,value:y,startAngle:m,endAngle:g,padAngle:_};return p}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:Z(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:Z(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:Z(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:Z(+e),o):a},o}function Jd(e,t,n){this.k=e,this.x=t,this.y=n}Jd.prototype={constructor:Jd,scale:function(e){return e===1?this:new Jd(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Jd(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var Yd=new Jd(1,0,0);Xd.prototype=Jd.prototype;function Xd(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Yd;return e.__zoom}var Zd=R(`images/BackIconWhite.svg`);function Qd(e,t){return typeof e.color==`function`?t?e.color(t):void 0:e.color}var $d=class{constructor(){}},ef=`[data-radial-click-through]`;function tf(e,t=null){let n=document.elementFromPoint(e.clientX,e.clientY);if(!n?.closest(ef))return;let r=new MouseEvent(`click`,{bubbles:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY});r[on]=!0,t===`touch`&&(r[sn]=!0),n.dispatchEvent(r)}var nf=class{constructor(e,t,n,r={}){this.eventBus=e,this.rootMenu=t,this.centerButtonElement=n,this.tooltipElement=null,this.tooltipStyleElement=null,this.isVisible=!1,this.lastPointerType=null,this.currentLevel=0,this.menuStack=[],this.currentMenuItems=[],this.centerButtonState=`default`,this.isTransitioning=!1,this.lastHideTime=0,this.reopenCooldownMs=300,this.anchorX=0,this.anchorY=0,this.menuGroups=new Map,this.menuPaths=new Map,this.menuIcons=new Map,this.selectedItemId=null,this.submenuHoverTimeout=null,this.backButtonHoverTimeout=null,this.navigationInProgress=!1,this.originalCenterButtonIcon=``,this.defaultCenterButtonColor=`#0f2744`,this.params=null,this.onCloseView=()=>this.hideRadialMenu(),this.onLeaveLobby=()=>{this.destroy()},this.handleResize=()=>{this.isVisible&&this.clampAndSetMenuPositionForLevel(this.currentLevel)},this.config={menuSize:r.menuSize??190,submenuScale:r.submenuScale??1.5,centerButtonSize:r.centerButtonSize??30,iconSize:r.iconSize??32,centerIconSize:r.centerIconSize??48,disabledColor:r.disabledColor??Gc(128,128,128).toString(),menuTransitionDuration:r.menuTransitionDuration??300,mainMenuInnerRadius:r.mainMenuInnerRadius??40,centerButtonIcon:r.centerButtonIcon??``,maxNestedLevels:r.maxNestedLevels??3,innerRadiusIncrement:r.innerRadiusIncrement??20,tooltipStyle:r.tooltipStyle??``},this.originalCenterButtonIcon=this.config.centerButtonIcon,this.backIconSize=this.config.centerIconSize*.8,this.centerButtonColor=this.defaultCenterButtonColor,this.centerButtonIconSize=this.config.centerIconSize}init(){this.createMenuElement(),this.createTooltipElement(),this.eventBus.on(an,this.onCloseView),document.addEventListener(`leave-lobby`,this.onLeaveLobby)}destroy(){document.removeEventListener(`leave-lobby`,this.onLeaveLobby),window.removeEventListener(`resize`,this.handleResize),this.eventBus.off(an,this.onCloseView),this.isVisible=!1,this.menuElement?.remove(),this.tooltipElement?.remove(),this.tooltipStyleElement?.remove()}createMenuElement(){this.menuElement=xc(document.body).append(`div`).attr(`class`,`radial-menu-container`).style(`position`,`fixed`).style(`display`,`none`).style(`z-index`,`9999`).style(`touch-action`,`none`).style(`top`,`0`).style(`left`,`0`).style(`width`,`100vw`).style(`height`,`100vh`).on(`click`,e=>{this.hideRadialMenu(),this.eventBus.emit(new $d),tf(e,this.lastPointerType),this.lastPointerType=null}).on(`pointerdown`,e=>{this.lastPointerType=e.pointerType}).on(`pointercancel`,()=>{this.lastPointerType=null}).on(`contextmenu`,e=>{e.preventDefault(),this.hideRadialMenu(),this.eventBus.emit(new $d)});let e=this.config.menuSize*this.config.submenuScale**(this.config.maxNestedLevels-1),t=this.menuElement.append(`svg`).attr(`width`,e).attr(`height`,e).style(`position`,`absolute`).style(`top`,`50%`).style(`left`,`50%`).style(`transform`,`translate(-50%, -50%)`).style(`pointer-events`,`all`).on(`click`,e=>this.hideRadialMenu()),n=t.append(`g`).attr(`class`,`menu-container`).attr(`transform`,`translate(${e/2},${e/2})`),r=t.append(`defs`).append(`filter`).attr(`id`,`glow`);r.append(`feGaussianBlur`).attr(`stdDeviation`,`2`).attr(`result`,`coloredBlur`);let i=r.append(`feMerge`);i.append(`feMergeNode`).attr(`in`,`coloredBlur`),i.append(`feMergeNode`).attr(`in`,`SourceGraphic`);let a=n.append(`g`).attr(`class`,`center-button`);a.append(`circle`).attr(`class`,`center-button-hitbox`).attr(`r`,this.config.centerButtonSize).attr(`fill`,`transparent`).style(`cursor`,`pointer`).on(`click`,e=>{e.stopPropagation(),this.handleCenterButtonClick()}).on(`touchstart`,e=>{e.preventDefault(),e.stopPropagation(),this.handleCenterButtonClick()}).on(`mouseover`,()=>this.onCenterButtonHover(!0)).on(`mouseout`,()=>this.onCenterButtonHover(!1)),a.append(`circle`).attr(`class`,`center-button-visible`).attr(`r`,this.config.centerButtonSize).attr(`fill`,this.centerButtonColor).style(`pointer-events`,`none`),a.append(`image`).attr(`class`,`center-button-icon`).attr(`xlink:href`,this.config.centerButtonIcon).attr(`width`,this.centerButtonIconSize).attr(`height`,this.centerButtonIconSize).attr(`x`,-this.centerButtonIconSize/2).attr(`y`,-this.centerButtonIconSize/2).style(`pointer-events`,`none`)}createTooltipElement(){this.tooltipElement=document.createElement(`div`),this.tooltipElement.className=`radial-tooltip`,this.tooltipElement.style.position=`absolute`,this.tooltipElement.style.pointerEvents=`none`,this.tooltipElement.style.background=`rgba(12, 35, 64, 0.88)`,this.tooltipElement.style.color=`white`,this.tooltipElement.style.padding=`6px 10px`,this.tooltipElement.style.borderRadius=`6px`,this.tooltipElement.style.fontSize=`12px`,this.tooltipElement.style.zIndex=`10000`,this.tooltipElement.style.maxWidth=`250px`,this.tooltipElement.style.display=`none`,document.body.appendChild(this.tooltipElement);let e=document.createElement(`style`);e.textContent=`
      .radial-tooltip .title {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 4px;
      }

      ${this.config.tooltipStyle}
    `,this.tooltipStyleElement=e,document.head.appendChild(e)}getInnerRadiusForLevel(e){return e===0?40:75}getOuterRadiusForLevel(e){let t=this.getInnerRadiusForLevel(e),n=55;return e!==0&&(n=65),t+n}renderMenuItems(e,t){let n=this.menuElement.select(`.menu-container`);n.selectAll(`.menu-level-${t}`).remove();let r=n.append(`g`).attr(`class`,`menu-level-${t}`);t===0?r.style(`opacity`,1).style(`transform`,`scale(1)`):r.style(`opacity`,0).style(`transform`,`scale(0.5)`),this.menuGroups.set(t,r);let i=-Math.PI/e.length,a=qd().value(()=>1).padAngle(.03).startAngle(i).endAngle(2*Math.PI+i),o=this.getInnerRadiusForLevel(t),s=this.getOuterRadiusForLevel(t),c=Ud().innerRadius(o).outerRadius(s),l=r.selectAll(`.menu-item`).data(a(e)).enter().append(`g`).attr(`class`,`menu-item-group`);return this.renderPaths(l,c,t),this.setupEventHandlers(l,t),this.renderIconsAndText(l,c),this.setupAnimations(r),r}renderPaths(e,t,n){e.append(`path`).attr(`class`,`menu-item-path`).attr(`d`,t).attr(`fill`,e=>{let t=this.params===null||e.data.disabled(this.params),r=t?this.config.disabledColor:Qd(e.data,this.params)??`#1e3a5f`,i=t?.4:.82;return e.data.id===this.selectedItemId&&this.currentLevel>n?r:Y(r)?.copy({opacity:i})?.toString()??r}).attr(`stroke`,`none`).style(`cursor`,e=>this.params===null||e.data.disabled(this.params)?`not-allowed`:`pointer`).style(`opacity`,e=>this.params===null||e.data.disabled(this.params)?.5:1).style(`transition`,`filter ${this.config.menuTransitionDuration/2}ms, fill ${this.config.menuTransitionDuration/2}ms`).attr(`data-id`,e=>e.data.id),e.each(e=>{if(e.data.timerFraction&&this.params){let t=e.data.timerFraction(this.params),n=this.params===null||e.data.disabled(this.params),r=n?this.config.disabledColor:Qd(e.data,this.params)??`#1e3a5f`,i=n?.4:.82,a=Y(r)?.copy({opacity:i})?.toString()??r,o=Y(ul(r,`white`)(.4))?.copy({opacity:i})?.toString()??a,s=`timer-gradient-${e.data.id}`,c=this.menuElement.select(`defs`);c.select(`#${s}`).remove();let l=1-t,u=c.append(`linearGradient`).attr(`id`,s).attr(`x1`,0).attr(`y1`,0).attr(`x2`,0).attr(`y2`,1);u.append(`stop`).attr(`class`,`timer-stop-faded`).attr(`offset`,l).attr(`stop-color`,o),u.append(`stop`).attr(`class`,`timer-stop-normal`).attr(`offset`,l).attr(`stop-color`,a),xc(`path[data-id="${e.data.id}"]`).attr(`fill`,`url(#${s})`)}}),e.each(e=>{let t=e.data.id,r=xc(`path[data-id="${t}"]`);if(this.menuPaths.set(t,r),t===this.selectedItemId&&n===0&&this.currentLevel>0){r.attr(`filter`,`url(#glow)`);let t=this.params===null||e.data.disabled(this.params)?this.config.disabledColor:Qd(e.data,this.params)??`#1e3a5f`;r.attr(`fill`,t)}}),this.menuGroups.forEach((e,t)=>{t<this.currentLevel?e.selectAll(`path`).each(function(){xc(this).style(`pointer-events`,`none`)}):t===this.currentLevel&&e.selectAll(`path`).style(`pointer-events`,`auto`)})}setupEventHandlers(e,t){let n=(e,n)=>{let r=this.params===null||e.data.disabled(this.params);e.data.tooltipItems&&e.data.tooltipItems.length>0?this.showTooltip(e.data.tooltipItems):e.data.tooltipKeys&&e.data.tooltipKeys.length>0&&this.showTooltip(e.data.tooltipKeys),!(r||this.currentLevel>0&&this.currentLevel!==t||this.navigationInProgress)&&n.style(`filter`,`brightness(1.5)`)},r=(e,n)=>{let r=this.params===null||e.data.disabled(this.params);if(this.submenuHoverTimeout!==null&&(window.clearTimeout(this.submenuHoverTimeout),this.submenuHoverTimeout=null),this.hideTooltip(),r||this.currentLevel>0&&t===0&&e.data.id===this.selectedItemId)return;n.style(`filter`,null);let i=r?this.config.disabledColor:Qd(e.data,this.params)??`#333333`,a=r?.4:.82;e.data.timerFraction?n.attr(`fill`,`url(#timer-gradient-${e.data.id})`):n.attr(`fill`,Y(i)?.copy({opacity:a})?.toString()??i)},i=(e,n)=>{if(n.stopPropagation(),this.params===null||e.data.disabled(this.params)||this.navigationInProgress||(this.eventBus.emit(new jt(`click`)),this.currentLevel>0&&t===0&&e.data.id!==this.selectedItemId))return;let r=e.data.subMenu?.(this.params);r&&r.length>0?(this.navigationInProgress=!0,this.selectedItemId=e.data.id,this.navigateToSubMenu(r),this.updateCenterButtonState(`back`)):(e.data.action?.(this.params),this.isTransitioning=!1,this.hideRadialMenu())};function a(e){let t=document.querySelector(`.radial-tooltip`);t&&t.style.display!==`none`&&(t.style.left=e.pageX+10+`px`,t.style.top=e.pageY+10+`px`)}e.each(e=>{let t=e.data.id,o=xc(`path[data-id="${t}"]`);o.on(`mouseover`,function(){n(e,o)}),o.on(`mouseout`,function(){r(e,o)}),o.on(`mousemove`,function(e){a(e)}),o.on(`click`,function(t){i(e,t)}),o.on(`touchstart`,function(t){t.preventDefault(),t.stopPropagation(),i(e,t)})})}isItemDisabled(e){return this.params===null||this.params.game.inSpawnPhase()||e.disabled(this.params)}renderIconsAndText(e,t){e.append(`g`).attr(`class`,`menu-item-content`).style(`pointer-events`,`none`).attr(`data-id`,e=>e.data.id).attr(`data-cx`,e=>t.centroid(e)[0].toString()).attr(`data-cy`,e=>t.centroid(e)[1].toString()).each(e=>{let n=e.data.id,r=xc(`g[data-id="${n}"]`),i=this.isItemDisabled(e.data);if(e.data.renderType&&this.params){let n=this.getStateKeyByType(e.data.renderType,i,this.params);n&&r.attr(`data-prev-state`,n),e.data.renderType===`allyExtend`&&this.renderAllyExtendIcon(r.node(),t.centroid(e)[0],t.centroid(e)[1],this.config.iconSize,i,this.params,e.data.icon)}else if(e.data.text)r.append(`text`).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`central`).attr(`x`,t.centroid(e)[0]).attr(`y`,t.centroid(e)[1]).attr(`fill`,`white`).attr(`font-size`,e.data.fontSize??`12px`).attr(`font-family`,`Arial, sans-serif`).style(`opacity`,i?.5:1).text(e.data.text);else{let n=r.append(`image`).attr(`xlink:href`,e.data.icon).attr(`width`,this.config.iconSize).attr(`height`,this.config.iconSize).attr(`x`,t.centroid(e)[0]-this.config.iconSize/2).attr(`y`,t.centroid(e)[1]-this.config.iconSize/2).attr(`opacity`,i?.5:1);if(Le(e.data.icon).then(r=>{if(!r||r===1)return;let i=this.config.iconSize,a=this.config.iconSize,o=Math.round(i*r);r>1?i=o:a=o,n.attr(`width`,i).attr(`height`,a).attr(`x`,t.centroid(e)[0]-i/2).attr(`y`,t.centroid(e)[1]-a/2)}),this.params&&e.data.cooldown?.(this.params)){let n=Math.ceil(e.data.cooldown?.(this.params));r.append(`text`).attr(`class`,`cooldown-text`).text(n+`s`).attr(`fill`,`white`).attr(`opacity`,i?.5:1).attr(`font-size`,`14px`).attr(`font-weight`,`bold`).attr(`x`,t.centroid(e)[0]-this.config.iconSize/4).attr(`y`,t.centroid(e)[1]+this.config.iconSize/2+7)}}this.menuIcons.set(n,r)})}setupAnimations(e){e.transition().duration(this.config.menuTransitionDuration*.8).style(`opacity`,1).style(`transform`,`scale(1)`).on(`start`,()=>{this.isTransitioning=!0}).on(`end`,()=>{this.isTransitioning=!1})}navigateToSubMenu(e){this.isTransitioning=!0,this.menuStack.push(this.currentMenuItems),this.currentMenuItems=e,this.currentLevel++,this.clampAndSetMenuPositionForLevel(this.currentLevel),this.renderMenuItems(this.currentMenuItems,this.currentLevel),this.updateMenuGroupVisibility(),this.animatePreviousMenu()}updateMenuGroupVisibility(){this.updateMenuVisibility(`forward`)}updateMenuVisibility(e=`backward`){this.menuGroups.forEach((t,n)=>{n===this.currentLevel?(t.style(`display`,`block`),t.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(1)`).style(`opacity`,1),t.selectAll(`path`).style(`pointer-events`,`auto`)):n===this.currentLevel-1&&this.currentLevel>0?(t.style(`display`,`block`),t.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(${this.currentLevel===1?`0.65`:`0.5`})`).style(`opacity`,.8),e===`forward`&&t.selectAll(`path`).each(function(){xc(this).style(`pointer-events`,`none`)})):n!==this.currentLevel+1&&t.transition().duration(this.config.menuTransitionDuration*.5).style(`transform`,`scale(0.5)`).style(`opacity`,0).on(`end`,function(){xc(this).style(`display`,`none`)})})}animatePreviousMenu(){this.menuElement.select(`.menu-container`).select(`.menu-level-${this.currentLevel-1}`).transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(${this.currentLevel===1?`0.65`:`0.5`})`).style(`opacity`,.8).on(`end`,()=>{this.navigationInProgress=!1})}navigateBack(){this.menuStack.length!==0&&(this.isTransitioning=!0,this.updateMenuLevels(),this.clampAndSetMenuPositionForLevel(this.currentLevel),this.clearSelectedItemHoverState(),this.updateMenuVisibility(`backward`),this.animateMenuTransitions())}updateMenuLevels(){let e=this.menuStack.pop(),t=this.currentLevel-1;this.currentLevel=t,t===0&&(this.selectedItemId=null),this.currentMenuItems=e??[],this.currentLevel===0&&this.updateCenterButtonState(`default`)}clearSelectedItemHoverState(){if(this.selectedItemId){let e=this.menuPaths.get(this.selectedItemId);e&&e.attr(`filter`,null)}this.refresh()}animateMenuTransitions(){let e=this.menuElement.select(`.menu-container`),t=e.select(`.menu-level-${this.currentLevel+1}`),n=e.select(`.menu-level-${this.currentLevel}`);t.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(0.5)`).style(`opacity`,0).on(`end`,function(){xc(this).remove()}),n.empty()?this.renderAndAnimateNewMenu():this.animateExistingMenu(n)}renderAndAnimateNewMenu(){this.renderMenuItems(this.currentMenuItems,this.currentLevel).style(`transform`,`scale(0.8)`).style(`opacity`,.3).transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(1)`).style(`opacity`,1).on(`end`,()=>{this.isTransitioning=!1,this.navigationInProgress=!1})}animateExistingMenu(e){e.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(1)`).style(`opacity`,1).on(`end`,()=>{this.isTransitioning=!1,this.navigationInProgress=!1}),e.selectAll(`path`).style(`pointer-events`,`auto`)}showRadialMenu(e,t){this.isReopeningAllowed()&&(this.resetMenu(),this.isTransitioning=!1,this.selectedItemId=null,this.anchorX=e,this.anchorY=t,this.menuElement.style(`display`,`block`),this.clampAndSetMenuPositionForLevel(this.currentLevel),this.isVisible=!0,this.renderMenuItems(this.currentMenuItems,this.currentLevel),this.onCenterButtonHover(!0),window.addEventListener(`resize`,this.handleResize))}hideRadialMenu(){this.isVisible&&(this.isTransitioning=!1,this.menuElement.style(`display`,`none`),this.isVisible=!1,this.selectedItemId=null,this.hideTooltip(),this.resetMenu(),this.isTransitioning=!1,this.menuGroups.clear(),this.menuPaths.clear(),this.menuIcons.clear(),this.lastHideTime=Date.now(),window.removeEventListener(`resize`,this.handleResize))}handleCenterButtonClick(){if(this.centerButtonState==="default"){this.params&&this.isCenterButtonEnabled()&&this.centerButtonElement?.action(this.params);return}if(this.centerButtonState===`back`){this.navigationInProgress=!0,this.navigateBack();return}}disableAllButtons(){this.updateCenterButtonState(`default`),this.refresh()}updateCenterButtonState(e){if(this.centerButtonState=e,e===`back`){let e=this.config.centerButtonSize*.8;this.menuElement.select(`.center-button-hitbox`).transition().duration(0).attr(`r`,e),this.menuElement.select(`.center-button-visible`).transition().duration(0).attr(`r`,e),this.menuElement.select(`.center-button-icon`).attr(`xlink:href`,Zd).attr(`width`,this.backIconSize).attr(`height`,this.backIconSize).attr(`x`,-this.backIconSize/2).attr(`y`,-this.backIconSize/2)}e==="default"&&(this.menuElement.select(`.center-button-hitbox`).transition().duration(0).attr(`r`,this.config.centerButtonSize),this.menuElement.select(`.center-button-visible`).transition().duration(0).attr(`r`,this.config.centerButtonSize),this.menuElement.select(`.center-button-icon`).attr(`xlink:href`,this.originalCenterButtonIcon).attr(`width`,this.centerButtonIconSize).attr(`height`,this.centerButtonIconSize).attr(`x`,-this.centerButtonIconSize/2).attr(`y`,-this.centerButtonIconSize/2));let t=this.menuElement.select(`.center-button`),n=this.isCenterButtonEnabled();t.select(`.center-button-hitbox`).style(`cursor`,n?`pointer`:`not-allowed`);let r=e===`back`?this.defaultCenterButtonColor:this.centerButtonColor;t.select(`.center-button-visible`).attr(`fill`,n?r:`#999999`),t.select(`.center-button-icon`).style(`opacity`,n?1:.5)}isCenterButtonEnabled(){return this.currentLevel>0?!0:this.params&&this.centerButtonElement?!this.centerButtonElement.disabled(this.params):!1}onCenterButtonHover(e){if(!this.isCenterButtonEnabled())return;let t=e?1.2:1;this.menuElement.select(`.center-button-hitbox`).transition().duration(200).attr(`r`,this.config.centerButtonSize*t),this.menuElement.select(`.center-button-visible`).transition().duration(200).attr(`r`,this.config.centerButtonSize*t)}isMenuVisible(){return this.isVisible}getCurrentLevel(){return this.currentLevel}setParams(e){this.params=e}getDefaultCenterIconSize(){return this.config.centerIconSize}setCenterButtonAppearance(e,t,n){this.originalCenterButtonIcon=e,this.centerButtonColor=t??this.defaultCenterButtonColor,this.centerButtonIconSize=n??this.config.centerIconSize,this.menuElement&&(this.menuElement.select(`.center-button-icon`).attr(`xlink:href`,e).attr(`width`,this.centerButtonIconSize).attr(`height`,this.centerButtonIconSize).attr(`x`,-this.centerButtonIconSize/2).attr(`y`,-this.centerButtonIconSize/2),this.menuElement.select(`.center-button-visible`).attr(`fill`,this.isCenterButtonEnabled()?this.centerButtonColor:`#999999`),this.updateCenterButtonState(this.centerButtonState))}findMenuItem(e){return this.currentMenuItems.find(t=>t.id===e)}resetMenu(){this.currentLevel=0,this.menuStack=[],this.currentMenuItems=this.rootMenu.subMenu(this.params),this.navigationInProgress=!1,this.menuGroups.clear(),this.menuPaths.clear(),this.menuIcons.clear();let e=this.menuElement?.select(`.menu-container`);e&&e.selectAll(`[class^='menu-level-']`).remove(),this.updateCenterButtonState(`default`),this.submenuHoverTimeout!==null&&(window.clearTimeout(this.submenuHoverTimeout),this.submenuHoverTimeout=null),this.backButtonHoverTimeout!==null&&(window.clearTimeout(this.backButtonHoverTimeout),this.backButtonHoverTimeout=null)}refreshMenu(){this.isVisible&&this.renderMenuItems(this.currentMenuItems,this.currentLevel)}refresh(){!this.isVisible||!this.params||(this.menuPaths.forEach((e,t)=>{let n=this.findMenuItem(t);if(n){let r=this.isItemDisabled(n),i=r?this.config.disabledColor:Qd(n,this.params)??`#333333`,a=r?.4:.82;n.timerFraction||e.attr(`fill`,Y(i)?.copy({opacity:a})?.toString()??i),e.style(`opacity`,r?.5:1),e.style(`cursor`,r?`not-allowed`:`pointer`);let o=this.menuIcons.get(t);if(o){if(n.renderType===`allyExtend`&&this.params)this.refreshAllyExtendIcon(n,r,o);else{let e=o.select(`text`);e.empty()||e.style(`opacity`,r?.5:1);let t=o.select(`image`);t.empty()||t.attr(`opacity`,r?.5:1);let i=o.select(`.cooldown-text`);if(this.params&&!i.empty()&&n.cooldown){let e=Math.ceil(n.cooldown(this.params));e<=0?i.remove():i.text(e+`s`)}}this.maybeUpdateTimerGradient(n,i,a)}}}),this.updateCenterButtonState(this.centerButtonState))}refreshAllyExtendIcon(e,t,n){if(e.renderType!==`allyExtend`||!this.params)return;let r=this.getStateKeyByType(e.renderType,t,this.params),i=n.attr(`data-prev-state`);if(!(r&&r===i)){let i=parseFloat(n.attr(`data-cx`)||`0`),a=parseFloat(n.attr(`data-cy`)||`0`);r?n.attr(`data-prev-state`,r):n.selectAll(`*`).remove(),this.renderAllyExtendIcon(n.node(),i,a,this.config.iconSize,t,this.params,e.icon,!0)}}maybeUpdateTimerGradient(e,t,n){if(!e.timerFraction||!this.params)return;let r=e.timerFraction(this.params),i=this.menuElement.select(`#timer-gradient-${e.id}`);if(!i.empty()){let e=1-r,a=Y(t)?.copy({opacity:n})?.toString()??t,o=Y(ul(t,`white`)(.4))?.copy({opacity:n})?.toString()??a;i.select(`.timer-stop-faded`).attr(`offset`,e).attr(`stop-color`,o),i.select(`.timer-stop-normal`).attr(`offset`,e).attr(`stop-color`,a)}}getStateKeyByType(e,t,n){switch(e){case`allyExtend`:return this.getAllyExtendStateKey(t,n);default:return null}}getAllyExtendStateKey(e,t){let n=t.playerActions?.interaction;return`${e}:${n?.allianceInfo?.myPlayerAgreedToExtend??!1}:${n?.allianceInfo?.otherAgreedToExtend??!1}`}renderAllyExtendIcon(e,t,n,r,i,a,o,s){if(s)for(;e.firstChild;)e.removeChild(e.firstChild);let c=a.playerActions?.interaction,l=c?.allianceInfo?.myPlayerAgreedToExtend??!1,u=c?.allianceInfo?.otherAgreedToExtend??!1,d=`http://www.w3.org/2000/svg`,f=r*.8,p=o??``;Le(p).then(r=>{let a=f*(r??1),o=a*2+2,s=document.createElementNS(d,`image`);if(s.setAttribute(`href`,p),s.setAttribute(`width`,a.toString()),s.setAttribute(`height`,f.toString()),s.setAttribute(`x`,(t-o/2).toString()),s.setAttribute(`y`,(n-f/2).toString()),s.setAttribute(`opacity`,i?`0.5`:`1`),!l){let e=document.createElementNS(d,`animate`);e.setAttribute(`attributeName`,`opacity`),e.setAttribute(`values`,i?`0.5;0.1;0.5`:`1;0.2;1`),e.setAttribute(`dur`,`1.5s`),e.setAttribute(`repeatCount`,`indefinite`),s.appendChild(e)}e.appendChild(s);let c=document.createElementNS(d,`image`);if(c.setAttribute(`href`,p),c.setAttribute(`width`,a.toString()),c.setAttribute(`height`,f.toString()),c.setAttribute(`x`,(t-o/2+a+2).toString()),c.setAttribute(`y`,(n-f/2).toString()),c.setAttribute(`opacity`,i?`0.5`:`1`),!u){let e=document.createElementNS(d,`animate`);e.setAttribute(`attributeName`,`opacity`),e.setAttribute(`values`,i?`0.5;0.1;0.5`:`1;0.2;1`),e.setAttribute(`dur`,`1.5s`),e.setAttribute(`repeatCount`,`indefinite`),c.appendChild(e)}e.appendChild(c)})}isReopeningAllowed(){return Date.now()-this.lastHideTime>=this.reopenCooldownMs}showTooltip(e){if(this.tooltipElement){this.tooltipElement.innerHTML=``;for(let n of e){let e=document.createElement(`div`);e.className=n.className,`key`in n?e.textContent=t(n.key,n.params):e.textContent=n.text,this.tooltipElement.appendChild(e)}this.tooltipElement.style.display=`block`}}hideTooltip(){this.tooltipElement&&(this.tooltipElement.style.display=`none`)}clampAndSetMenuPositionForLevel(e){let t=this.getOuterRadiusForLevel(e),n=Math.max(t,this.config.centerButtonSize)+10,r=window.innerWidth,i=window.innerHeight,a=2*n>r?r/2:Math.min(Math.max(this.anchorX,n),r-n),o=2*n>i?i/2:Math.min(Math.max(this.anchorY,n),i-n);this.menuElement.select(`svg`).style(`top`,`${o}px`).style(`left`,`${a}px`)}},rf=R(`images/AllianceRequestBlackIcon.svg`),af=R(`images/AllianceRequestWhiteIcon.svg`),of=R(`images/CrownIcon.svg`),sf=R(`images/DisconnectedIcon.svg`),cf=R(`images/EmbargoBlackIcon.svg`),lf=R(`images/EmbargoWhiteIcon.svg`),uf=R(`images/NukeIconRed.svg`),df=R(`images/NukeIconWhite.svg`),ff=R(`images/TargetIcon.svg`),pf=R(`images/DoomsdayClockSkull.svg`),mf=`doomsday-clock`,hf=`crown`,gf=`disconnected`,_f=`alliance-request`,vf=`target`,yf=`emoji`,bf=`embargo`,xf=`nuke`,Sf=`image`,Cf=`emoji`;function wf(e){let t=e.playerViews().sort((e,t)=>t.numTilesOwned()-e.numTilesOwned());return t.length>0?t[0]:null}function Tf(e){let{game:t,player:n,firstPlace:r,darkMode:i,transitiveTargets:a}=e,o=t.myPlayer(),s=i??!1,c=[];if(n===r){let e=n.cosmetics.crown?.url;c.push({id:hf,kind:Sf,src:e?R(e):of})}if(n.inDoomsdayClock()&&c.push({id:mf,kind:Sf,src:pf}),n.isDisconnected()&&c.push({id:gf,kind:Sf,src:sf}),o!==null&&n.isRequestingAllianceWith(o)){let e=s?rf:af;c.push({id:_f,kind:Sf,src:e})}(a??o?.transitiveTargets()??[]).includes(n)&&c.push({id:vf,kind:Sf,src:ff,center:!0});let l=n.outgoingEmojis().find(e=>e.recipientID===`AllPlayers`||e.recipientID===o?.smallID());if(l&&c.push({id:yf,kind:Cf,text:l.message}),o?.hasEmbargo(n)){let e=s?cf:lf;c.push({id:bf,kind:Sf,src:e})}if(!o||n.id()!==o.id()){let e=!1,r=!1,i=n.units(...b.types);for(let n of i)if(n.isActive()){e=!0;let i=n.targetTile(),a=i?t.owner(i):void 0;if(o&&a?.isPlayer()&&a.id()===o.id()){r=!0;break}}if(e){let e=r?uf:df;c.push({id:xf,kind:Sf,src:e})}}return c}var Ef={[M.Hostile]:{color:`#ef4444`,eyeCy:7.5,mouth:`M5 12 Q8 9 11 12`,brows:[`M4 5.5 L6.5 7`,`M12 5.5 L9.5 7`]},[M.Distrustful]:{color:`#f97316`,eyeCy:6.8,mouth:`M5.5 11 Q8 9.2 10.5 11`},[M.Friendly]:{color:`#22c55e`,eyeCy:6.5,mouth:`M5 10 Q8 13 11 10`}},Df=class extends _e{constructor(...e){super(...e),this.relation=M.Neutral}createRenderRoot(){return this}render(){let e=Ef[this.relation];if(!e)return N``;let{color:t,eyeCy:n,mouth:r,brows:i}=e;return N`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      style="flex-shrink:0"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="6.5"
        stroke="${t}"
        stroke-width="1.4"
        fill="none"
      />
      ${i?.map(e=>N`<path
            d="${e}"
            stroke="${t}"
            stroke-width="1.4"
            stroke-linecap="round"
          />`)}
      <circle cx="5.8" cy="${n}" r="0.9" fill="${t}" />
      <circle cx="10.2" cy="${n}" r="0.9" fill="${t}" />
      <path
        d="${r}"
        stroke="${t}"
        stroke-width="1.4"
        fill="none"
        stroke-linecap="round"
      />
    </svg>`}};I([L({type:Number})],Df.prototype,`relation`,void 0),Df=I([pe(`relation-smiley`)],Df);var Of=R(`images/SoldierIconAquarius.svg`),kf=R(`images/AllianceIcon.svg`),Af=R(`images/TraitorIcon.svg`),jf=R(`images/BattleshipIconWhite.svg`),Mf=R(`images/EmojiIconWhite.svg`),Nf=R(`images/ChatIconWhite.svg`),Pf=R(`images/AllianceIconWhite.svg`),Ff=R(`images/TraitorIconWhite.svg`),If=R(`images/TargetIconWhite.svg`),Lf=R(`images/BoatIconWhite.svg`),Rf=R(`images/CityIconWhite.svg`),zf=R(`images/FactoryIconWhite.svg`),Bf=R(`images/GoldCoinIcon.svg`),Vf=R(`images/MissileSiloIconWhite.svg`),Hf=R(`images/PortIcon.svg`),Uf=R(`images/SamLauncherIconWhite.svg`),Wf=R(`images/SoldierIcon.svg`);function Gf(e,t,n){let r=n.x(t),i=n.y(t),a=e.x-r,o=e.y-i;return Math.sqrt(a*a+o*o)}function Kf(e,t){return(n,r)=>Gf(e,n.tile(),t)-Gf(e,r.tile(),t)}var $=class extends _e{constructor(...e){super(...e),this.player=null,this.tile=null,this.playerActions=null,this.playerActionsFor=null,this.playerActionsFetchedAt=0,this.playerActionsVersion=0,this.playerProfile=null,this.unit=null,this._isInfoVisible=!1,this.spawnBarVisible=!1,this.immunityBarVisible=!1,this._isActive=!1,this.userSettings=new Ne,this.lastMouseUpdate=0,this.initGeneration=0,this.eventUnsubscribers=[],this.pointerOnPanel=!1,this.onPanelEnter=()=>this.pointerOnPanel=!0,this.onPanelLeave=()=>this.pointerOnPanel=!1}showShortcutButtons(){return window.innerWidth>=1200&&!we.isTouch&&!this.game.config().isReplay()}get barOffset(){return(this.spawnBarVisible?7:0)+(this.immunityBarVisible?7:0)}onBus(e,t){let n=this.eventBus;n?.on(e,t),this.eventUnsubscribers.push(()=>n?.off?.(e,t))}unsubscribeBus(){for(let e of this.eventUnsubscribers)e();this.eventUnsubscribers=[]}init(){this.unsubscribeBus();let e=++this.initGeneration;return this.onBus($t,e=>this.onMouseEvent(e)),this.onBus(en,e=>this.maybeShow(e.x,e.y)),this.onBus(Xt,e=>this.maybeShow(e.x,e.y)),this.onBus($d,()=>this.hide()),this.onBus(lo,e=>{this.spawnBarVisible=e.visible}),this.onBus(za,e=>{this.immunityBarVisible=e.visible}),this.onBus(Ln,e=>this.markActionTaken(e.tile,`requestAlliance`)),this.onBus(Rn,e=>this.markActionTaken(e.tile,`breakAlliance`)),this.onBus(zn,e=>this.markActionTaken(e.tile,`target`)),this._isActive=!0,()=>{e===this.initGeneration&&this.dispose()}}dispose(){this.initGeneration++,this.unsubscribeBus(),this.playerActionsVersion++,this.playerActionsFor=null,this.pointerOnPanel=!1,this.spawnBarVisible=!1,this.immunityBarVisible=!1,this.player=null,this.tile=null,this.playerActions=null,this.playerProfile=null,this.unit=null,this._isInfoVisible=!1,this._isActive=!1,this.requestUpdate()}markActionTaken(e,t){let n=this.playerActions;!n||n.player!==this.player||(e===void 0?this._isInfoVisible&&!this.pointerOnPanel:e===this.tile)&&(this.playerActionsVersion++,this.playerActionsFetchedAt=Date.now(),this.playerActions={...n,[t]:!1})}onMouseEvent(e){if(this.pointerOnPanel)return;let t=Date.now();t-this.lastMouseUpdate<100||(this.lastMouseUpdate=t,this.maybeShow(e.x,e.y))}hide(){this.pointerOnPanel=!1,this.setVisible(!1),this.unit=null,this.player=null}maybeShow(e,t){this.hide();let n=this.transform.screenToWorldCoordinates(e,t);if(!this.game.isValidCoord(n.x,n.y))return;let r=this.game.ref(n.x,n.y);if(!r)return;let i=this.game.owner(r);if(i&&i.isPlayer()){this.player=i,this.tile=r;let e=this.player;e.profile().then(t=>{!this._isActive||this.player!==e||(this.playerProfile=t)}),this.refreshPlayerActions(this.player,r),this.setVisible(!0)}else if(!this.game.isLand(r)){let e=this.game.units(F.Warship,F.TradeShip,F.TransportShip).filter(e=>Gf(n,e.tile(),this.game)<50).sort(Kf(n,this.game));e.length>0&&(this.unit=e[0],this.setVisible(!0))}}refreshPlayerActions(e,t){let n=this.game.myPlayer();if(!n||e===n||!this.showShortcutButtons())return;if(this.game.inSpawnPhase()||this.game.owner(t)!==e){this.playerActionsVersion++,this.playerActionsFor=null,this.playerActions=null;return}let r=Date.now();if(this.playerActionsFor===e&&r-this.playerActionsFetchedAt<1e3)return;this.playerActionsFor=e,this.playerActionsFetchedAt=r;let i=++this.playerActionsVersion;n.actions(t,[F.TransportShip]).then(t=>{if(i!==this.playerActionsVersion)return;let n=t.interaction;this.playerActions={player:e,requestAlliance:n?.canSendAllianceRequest??!1,breakAlliance:n?.canBreakAlliance??!1,target:n?.canTarget??!1,boat:t.buildableUnits.some(e=>e.type===F.TransportShip&&e.canBuild!==!1)}}).catch(e=>{console.warn(`Failed to check player actions:`,e)})}tick(){this._isInfoVisible&&this.player&&this.tile!==null&&this.refreshPlayerActions(this.player,this.tile),this.requestUpdate()}setVisible(e){this._isInfoVisible=e,this.requestUpdate()}getPlayerNameColor(e){return e?`text-green-500`:`text-white`}getRelationSmiley(e,t){if(!t||t===e||e.type()!==v.Nation)return``;let n=this.playerProfile?.relations[t.smallID()]??M.Neutral;return n===M.Neutral?``:N`<relation-smiley .relation=${n}></relation-smiley>`}getRelationName(e){switch(e){case M.Hostile:return t(`relation.hostile`);case M.Distrustful:return t(`relation.distrustful`);case M.Neutral:return t(`relation.neutral`);case M.Friendly:return t(`relation.friendly`);default:return t(`relation.default`)}}displayUnitCount(e,t,n){return this.game.config().isUnitDisabled(t)?``:N`<div
          class="flex items-center justify-center gap-0.5 lg:gap-1 p-0.5 lg:p-1 border rounded-md border-gray-500 text-[10px] lg:text-xs w-9 lg:w-12 h-6 lg:h-7"
          translate="no"
        >
          <img
            src=${n}
            class="w-3 h-3 lg:w-4 lg:h-4 object-contain shrink-0"
          />
          <span>${e.totalUnitLevels(t)}</span>
        </div>`}allianceExpirationText(e){let{expiresAt:t}=e,n=t-this.game.ticks(),r=0;return n>0&&(r=Math.max(0,Math.floor(n/10))),je(r)}renderPlayerNameIcons(e){return e.length===0?N``:N`<span class="flex items-center gap-1 shrink-0">
      ${e.map(e=>e.kind===`emoji`&&e.text?N`<span class="h-4 w-4 font-mono text-sm shrink-0" translate="no"
              >${e.text}</span
            >`:e.kind===`image`&&e.src?N`<img src=${e.src} alt="" class="w-4 h-4 shrink-0" />`:N``)}
    </span>`}getNameFontSize(e){let{nameLength:t,iconCount:n,hasFlag:r,hasBetrayal:i,hasAlliance:a,typeAndTeamLen:o}=e,s={perIcon:2,icon:.5,flag:3.5,betrayal:4.2,alliance:6.7,allianceWrapped:3.9},c={perIcon:2.2,icon:.5,flag:4.2,betrayal:4.6,alliance:8.6,allianceWrapped:4.8},l=window.innerWidth,u=l>=1024,d=u?s:c,f=(u?12/18*o+8/10.8:12/14*o+4/8.4)+n*d.perIcon+(n?d.icon:0)+(r?d.flag:0)+(i?d.betrayal:0),p;p=l<640?28.1+(Math.max(360,l)-360)*.119:l<768?44.8:l<1024?41:31.1;let m=!1,h=a?d.alliance:0,g=(p-(f+h))/t;a&&g<.85&&(m=!0,h=d.allianceWrapped,g=(p-(f+h))/t);let _=u?`lg`:`sm`;return{fontSize:`clamp(var(--text-${_}) * .65, var(--text-${_}) * ${g.toFixed(3)}, var(--text-${_}))`,isAllianceWrapped:m}}renderShortcutButton(e,t,n,r){let i=n?xe(n):``;return N`<button
      class="relative flex items-center justify-center size-6.5 border rounded-md border-gray-500 hover:bg-white/10 cursor-pointer"
      title=${t}
      @click=${e=>{e.stopPropagation(),r(),this.hide()}}
    >
      <img src=${e} alt="" class="size-5 object-contain" />
      ${i?N`<span
              class="pointer-events-none absolute -bottom-1 -right-1 px-0.5 rounded-sm bg-gray-800 text-[9px] leading-tight font-mono text-gray-300"
              translate="no"
              >${i}</span
            >`:``}
    </button>`}renderPlayerInfo(e){let n=this.game.myPlayer(),r=n?.isFriendly(e),i=n?.isAlliedWith(e),o=e.getTraitorRemainingTicks(),s=null,c=null,l=wf(this.game),u=Tf({game:this.game,player:e,firstPlace:l}),d=this.game.config().maxTroops(e),f=e.outgoingAttacks().map(e=>e.troops).reduce((e,t)=>e+t,0),p=e.troops(),m=``;switch(e.type()){case v.Bot:m=t(`player_type.bot`);break;case v.Nation:m=t(`player_type.nation`);break;case v.Human:m=t(`player_type.player`);break}let h=this.game.teamClanTag(e.team()),g=a(e.team(),h),_=m.length,y=g!==``&&e.type()!==v.Bot?(h??g).length+2:0,b=Math.max(_,y),{fontSize:x,isAllianceWrapped:S}=this.getNameFontSize({nameLength:e.displayName().length,iconCount:u.length,hasFlag:!!e.cosmetics.flag,hasBetrayal:o>0,hasAlliance:i??!1,typeAndTeamLen:b});if(i){let t=n?.alliances().find(t=>t.other===e.id());t!==void 0&&(s=S?N`<div
              class="${o===0?`ml-auto`:``} flex flex-col items-center gap-0 text-xs font-bold leading-none shrink-0"
            >
              <img
                src=${kf}
                width="14"
                height="14"
                class="shrink-0"
              />
              <span class="text-[10px] leading-tight"
                >${this.allianceExpirationText(t)}</span
              >
            </div>`:N`<div
              class="${o===0?`ml-auto`:``} flex items-center mr-0 gap-1 text-xs font-bold leading-tight shrink-0"
            >
              <img
                src=${kf}
                width="18"
                height="18"
                class="shrink-0"
              />
              <span>${this.allianceExpirationText(t)}</span>
            </div>`)}o>0&&(c=N`<span class="flex ml-auto items-center shrink-0 "
        ><img src=${Af} alt="" class="w-4 h-4 shrink-0" />
        <span
          class="text-sm text-red-900 
          drop-shadow-[-.2px_-.2px_.8px_rgba(0,0,0,.7),.2px_.2px_.8px_rgba(0,0,0,.7)]"
        >
          ${je(Math.floor(o/10))} </span
        ><span></span
      ></span>`);let C=this.userSettings.keybinds(we.isMac);return N`
      <div class="flex items-start gap-1 lg:gap-2 p-1 lg:p-1.5">
        ${n&&this.showShortcutButtons()?N`<div class="flex flex-col gap-1 self-center shrink-0">
                ${e===n?``:this.renderShortcutButton(Nf,t(`player_panel.chat`),C.quickChat,()=>this.eventBus.emit(new ia(e)))}
                ${this.renderShortcutButton(Mf,t(`player_panel.emotes`),C.emojiMenu,()=>this.eventBus.emit(new Pa(e)))}
              </div>`:``}
        <!-- Left: Gold & Troop bar -->
        <div class="flex flex-col gap-1 shrink-0 w-28 md:w-36">
          <div class="flex items-center gap-1">
            <div
              class="flex items-center justify-center px-1 py-0.5 border rounded-md border-yellow-400 font-bold text-yellow-400 text-sm lg:gap-1"
              translate="no"
            >
              <img src=${Bf} width="13" height="13" />
              <span class="px-0.5">${B(e.gold())}</span>
            </div>
            <div
              class="flex flex-1 flex-col items-center justify-center text-xs font-bold ${f>0?`text-aquarius`:`text-white/40`} drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
              translate="no"
            >
              <span class="flex items-center gap-px leading-none text-xs"
                ><img
                  class="w-2.5 h-2.5 inline-block ${f>0?``:`brightness-0 invert opacity-40`}"
                  src=${f>0?Of:Wf}
                  alt=""
                  aria-hidden="true"
                />↑</span
              >
              <span class="tabular-nums leading-none text-sm mt-0.5"
                >${ze(f)}</span
              >
            </div>
          </div>
          <div class="w-28 md:w-36" translate="no">
            ${this.renderTroopBar(p,f,d)}
          </div>
        </div>
        <!-- Right: Player identity + Units below -->
        <div
          class="flex flex-col justify-between self-stretch w-[100%] flex-grow-1"
        >
          <div
            class="flex items-center gap-1 lg:gap-2 font-bold text-sm lg:text-lg ${this.getPlayerNameColor(r??!1)}"
          >
            ${e.cosmetics.flag?N`<img
                    class="h-6 object-contain shrink-0"
                    src=${R(e.cosmetics.flag)}
                  />`:N``}
            <div class="shrink min-w-0">
              <span
                class="font-mono inline-block leading-[1.2] wrap-anywhere"
                style="font-size: ${x}"
                >${e.displayName()}</span
              >
            </div>
            ${this.getRelationSmiley(e,n)}
            ${g!==``&&e.type()!==v.Bot?N`<div
                    class="flex flex-col items-center leading-tight shrink-0"
                  >
                    <span
                      class="text-gray-400 text-xs font-mono font-normal whitespace-nowrap"
                      >${m}</span
                    >
                    <span
                      class="text-xs font-mono font-normal text-gray-400 whitespace-nowrap"
                      >[<span
                        style="color: ${Mt.current().teamColor(e.team()).toHex()}"
                        >${h??g}</span
                      >]</span
                    >
                  </div>`:N`<span
                    class="text-gray-400 text-xs font-mono font-normal shrink-0 whitespace-nowrap"
                    >${m}</span
                  >`}
            ${this.renderPlayerNameIcons(u)} ${c??``}
            ${s??``}
          </div>
          <div class="flex gap-0.5 lg:gap-1 items-center mt-0.5">
            ${this.displayUnitCount(e,F.City,Rf)}
            ${this.displayUnitCount(e,F.Factory,zf)}
            ${this.displayUnitCount(e,F.Port,Hf)}
            ${this.displayUnitCount(e,F.MissileSilo,Vf)}
            ${this.displayUnitCount(e,F.SAMLauncher,Uf)}
            ${this.displayUnitCount(e,F.Warship,jf)}
          </div>
        </div>
        ${n&&this.showShortcutButtons()?this.renderActionButtons(e,n,C):``}
      </div>
    `}renderActionButtons(e,n,r){let i=e!==n&&this.playerActions?.player===e?this.playerActions:null,a=this.tile??void 0,o=[];return i?.requestAlliance?o.push(this.renderShortcutButton(Pf,t(`player_panel.send_alliance`),r.requestAlliance,()=>this.eventBus.emit(new Ln(a,e.id())))):i?.breakAlliance&&o.push(this.renderShortcutButton(Ff,t(`player_panel.break_alliance`),r.breakAlliance,()=>this.eventBus.emit(new Rn(a,e.id())))),i?.target&&o.push(this.renderShortcutButton(If,t(`player_panel.target`),r.targetPlayer,()=>this.eventBus.emit(new zn(a,e.id())))),i?.boat&&o.push(this.renderShortcutButton(Lf,t(`user_setting.boat_attack`),r.boatAttack,()=>this.eventBus.emit(new Pn(a)))),N`<div
      class="grid grid-rows-2 grid-flow-col auto-cols-max justify-end gap-1 self-center shrink-0 w-14"
    >
      ${o}
    </div>`}renderTroopBar(e,t,n){let r=Math.max(n,1),i=e/r*100,a=t/r*100,o=Math.max(0,Math.min(100,i)),s=Math.max(0,Math.min(100-o,a));return N`
      <div
        class="w-full h-5 lg:h-6 border border-gray-600 rounded-md bg-gray-900/60 overflow-hidden relative"
      >
        <div class="relative h-full">
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-sky-700 transition-transform duration-200 ease-out"
            style="transform: scaleX(${o/100});"
          ></div>
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-malibu-blue transition-transform duration-200 ease-out"
            style="transform: translateX(${o}%) scaleX(${s/100});"
          ></div>
        </div>
        <div
          class="absolute inset-0 flex items-center justify-between px-1.5 text-sm font-bold leading-none pointer-events-none"
          translate="no"
        >
          <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >${ze(e)}</span
          >
          <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >${ze(n)}</span
          >
        </div>
        <img
          src=${Wf}
          alt=""
          aria-hidden="true"
          width="14"
          height="14"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-0 invert drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] pointer-events-none"
        />
      </div>
    `}renderUnitInfo(e){return N`
      <div class="p-2">
        <div class="font-bold mb-1 ${(e.owner()===this.game.myPlayer()||this.game.myPlayer()?.isFriendly(e.owner()))??!1?`text-green-500`:`text-white`}">
          ${e.owner().displayName()}
        </div>
        <div class="mt-1">
          <div class="text-sm opacity-80">${e.type()}</div>
          ${e.hasHealth()?N` <div class="text-sm">Health: ${e.health()}</div> `:``}
          ${e.type()===F.TransportShip?N`
                  <div class="text-sm">
                    Troops: ${ze(e.troops())}
                  </div>
                `:``}
        </div>
      </div>
    `}render(){if(!this._isActive||this.game.config().gameConfig().tutorial===!0)return N``;let e=this._isInfoVisible?`opacity-100 visible pointer-events-auto`:`opacity-0 invisible pointer-events-none`;return N`
      <div
        class="max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0 sm:max-lg:left-1/2 sm:max-lg:right-auto sm:max-lg:-translate-x-1/2 max-lg:z-[1001]"
        style="margin-top: ${this.barOffset}px;"
        @click=${()=>this.hide()}
        @contextmenu=${e=>e.preventDefault()}
      >
        <div
          class="bg-gray-800/92 backdrop-blur-sm shadow-xs min-[1200px]:rounded-lg sm:rounded-b-lg shadow-lg text-white text-lg lg:text-base w-full ${this.showShortcutButtons()?`sm:w-[598px]`:`sm:w-[500px]`} lg:max-w-full overflow-hidden ${e}"
          @mouseenter=${this.onPanelEnter}
          @mouseleave=${this.onPanelLeave}
        >
          ${this.player?this.renderPlayerInfo(this.player):``}
          ${this.unit?this.renderUnitInfo(this.unit):``}
        </div>
      </div>
    `}createRenderRoot(){return this}};I([L({type:Object})],$.prototype,`game`,void 0),I([L({type:Object})],$.prototype,`eventBus`,void 0),I([L({type:Object})],$.prototype,`transform`,void 0),I([P()],$.prototype,`player`,void 0),I([P()],$.prototype,`playerActions`,void 0),I([P()],$.prototype,`playerProfile`,void 0),I([P()],$.prototype,`unit`,void 0),I([P()],$.prototype,`_isInfoVisible`,void 0),I([P()],$.prototype,`spawnBarVisible`,void 0),I([P()],$.prototype,`immunityBarVisible`,void 0),$=I([pe(`player-info-overlay`)],$);function qf(e,t,n){return t<=0?e:e+Math.floor(e*t*n/100)}var Jf=`#version 300 es
precision highp float;

uniform vec2 uBarSize;
uniform float uBorderWidth;
uniform vec3 uThresholds;
uniform vec3 uColorRed;
uniform vec3 uColorOrange;
uniform vec3 uColorYellow;
uniform vec3 uColorGreen;
uniform float uSolid;       // 1.0 = veterancy pip: fill solid with uSolidColor
uniform vec3 uSolidColor;

in vec2 vLocalPos;
flat in float vProgress;

out vec4 fragColor;

void main() {
  // Veterancy pips are simple solid-filled rectangles (no border/threshold).
  if (uSolid > 0.5) {
    fragColor = vec4(uSolidColor, 1.0);
    return;
  }

  float x = vLocalPos.x;
  float y = vLocalPos.y;
  float w = uBarSize.x;
  float h = uBarSize.y;

  // Border on each side
  float bw = uBorderWidth;
  bool inBorder = x < bw || x > w - bw || y < bw || y > h - bw;

  // Colored fill region
  float fillWidth = vProgress * (w - 2.0 * bw);
  bool inFill = !inBorder && (x - bw) < fillWidth;

  if (inFill) {
    vec3 color;
    if (vProgress < uThresholds.x) color = uColorRed;
    else if (vProgress < uThresholds.y) color = uColorOrange;
    else if (vProgress < uThresholds.z) color = uColorYellow;
    else color = uColorGreen;
    fragColor = vec4(color, 1.0);
  } else {
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
}
`,Yf=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;        // unit quad [0,1]x[0,1]
layout(location = 1) in vec3 aInstData;   // x, y, progress

uniform mat3 uCamera;
uniform vec2 uBarSize;     // (width, height) in world tiles
uniform vec2 uBarOffset;   // offset from unit center in tiles
uniform float uSolid;      // 1.0 = veterancy pip mode (aInstData.z is a stack slot)
uniform float uPipStride;  // vertical spacing between stacked pips, in tiles

out vec2 vLocalPos;        // [0, barWidth] x [0, barHeight]
flat out float vProgress;

void main() {
  float worldX = aInstData.x;
  float worldY = aInstData.y;
  vProgress = aInstData.z;

  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  vec2 offset = uBarOffset;
  // In pip mode each instance is one stacked rank bar; raise it by its slot.
  offset.y -= uSolid * aInstData.z * uPipStride;
  vec2 barOrigin = center + offset;
  vec2 worldPos = barOrigin + aPos * uBarSize;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vLocalPos = aPos * uBarSize;
}
`,Xf=3,Zf=Xf*4,Qf=class{constructor(e,t,n,r){this.config=r,this.maxBars=2048,this.healthCount=0,this.progressCount=0,this.veterancyCount=0,this.gl=e,this.settings=n,this.mapW=t.mapWidth,this.warshipMaxHealth=r.unitInfo(F.Warship).maxHealth??0,this.veterancyHealthBonus=r.warshipVeterancyHealthBonus(),this.program=W(e,Yf,Jf,`BarPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uBarSize=e.getUniformLocation(this.program,`uBarSize`),this.uBarOffset=e.getUniformLocation(this.program,`uBarOffset`),this.uBorderWidth=e.getUniformLocation(this.program,`uBorderWidth`),this.uThresholds=e.getUniformLocation(this.program,`uThresholds`),this.uColorRed=e.getUniformLocation(this.program,`uColorRed`),this.uColorOrange=e.getUniformLocation(this.program,`uColorOrange`),this.uColorYellow=e.getUniformLocation(this.program,`uColorYellow`),this.uColorGreen=e.getUniformLocation(this.program,`uColorGreen`),this.uSolid=e.getUniformLocation(this.program,`uSolid`),this.uSolidColor=e.getUniformLocation(this.program,`uSolidColor`),this.uPipStride=e.getUniformLocation(this.program,`uPipStride`),this.healthData=new Float32Array(this.maxBars*Xf),this.progressData=new Float32Array(this.maxBars*Xf),this.veterancyData=new Float32Array(this.maxBars*Xf),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),this.instanceBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf),e.bufferData(e.ARRAY_BUFFER,this.maxBars*Zf,e.DYNAMIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,Zf,0),e.vertexAttribDivisor(1,1),e.bindVertexArray(null)}updateBars(e,t,n){this.healthCount=0,this.progressCount=0,this.veterancyCount=0;for(let t of e.values()){if(t.health===null||t.health<=0)continue;let e=qf(this.warshipMaxHealth,t.veterancy,this.veterancyHealthBonus);t.health<e&&this.pushHealth(t,t.health/e),t.veterancy>0&&this.pushVeterancy(t)}for(let e of t.values()){if(!e.isActive)continue;let t=this.computeStructureProgress(e,n);t!==null&&this.pushProgress(e,t)}}draw(e){if(this.healthCount===0&&this.progressCount===0&&this.veterancyCount===0)return;let t=this.gl,n=this.settings.bar;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1f(this.uSolid,0),t.uniform1f(this.uBorderWidth,n.borderWidth),t.uniform3f(this.uThresholds,n.threshold1,n.threshold2,n.threshold3),t.uniform3f(this.uColorRed,n.colorRedR,n.colorRedG,n.colorRedB),t.uniform3f(this.uColorOrange,n.colorOrangeR,n.colorOrangeG,n.colorOrangeB),t.uniform3f(this.uColorYellow,n.colorYellowR,n.colorYellowG,n.colorYellowB),t.uniform3f(this.uColorGreen,n.colorGreenR,n.colorGreenG,n.colorGreenB),t.bindVertexArray(this.vao),this.healthCount>0&&(t.uniform2f(this.uBarSize,n.healthBarW,n.healthBarH),t.uniform2f(this.uBarOffset,-n.healthBarW/2,n.healthBarOffsetY),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.healthData.subarray(0,this.healthCount*Xf)),t.drawArraysInstanced(t.TRIANGLES,0,6,this.healthCount)),this.progressCount>0&&(t.uniform2f(this.uBarSize,n.progressBarW,n.progressBarH),t.uniform2f(this.uBarOffset,-n.progressBarW/2,n.progressBarOffsetY),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.progressData.subarray(0,this.progressCount*Xf)),t.drawArraysInstanced(t.TRIANGLES,0,6,this.progressCount)),this.veterancyCount>0&&(t.uniform1f(this.uSolid,1),t.uniform3f(this.uSolidColor,n.veterancyR,n.veterancyG,n.veterancyB),t.uniform1f(this.uPipStride,n.veterancyPipH+n.veterancyPipGap),t.uniform2f(this.uBarSize,n.veterancyPipW,n.veterancyPipH),t.uniform2f(this.uBarOffset,n.veterancyPipOffsetX,n.veterancyPipOffsetY),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.veterancyData.subarray(0,this.veterancyCount*Xf)),t.drawArraysInstanced(t.TRIANGLES,0,6,this.veterancyCount)),t.bindVertexArray(null)}dispose(){this.gl.deleteProgram(this.program),this.gl.deleteBuffer(this.instanceBuf),this.gl.deleteVertexArray(this.vao)}pushHealth(e,t){if(this.healthCount>=this.maxBars)return;let n=this.healthCount*Xf;this.healthData[n]=e.pos%this.mapW,this.healthData[n+1]=(e.pos-this.healthData[n])/this.mapW,this.healthData[n+2]=t,this.healthCount++}pushVeterancy(e){let t=e.pos%this.mapW,n=(e.pos-t)/this.mapW;for(let r=0;r<e.veterancy;r++){if(this.veterancyCount>=this.maxBars)return;let e=this.veterancyCount*Xf;this.veterancyData[e]=t,this.veterancyData[e+1]=n,this.veterancyData[e+2]=r,this.veterancyCount++}}pushProgress(e,t){if(this.progressCount>=this.maxBars)return;let n=this.progressCount*Xf,r=e.pos%this.mapW;this.progressData[n]=r,this.progressData[n+1]=(e.pos-r)/this.mapW,this.progressData[n+2]=t,this.progressCount++}computeStructureProgress(e,t){if(e.markedForDeletion!==!1){let n=e.markedForDeletion-t;return Math.max(0,Math.min(1,n/this.config.deletionMarkDuration()))}if(e.underConstruction&&e.constructionStartTick!==null){let n=this.config.unitInfo(e.unitType).constructionDuration??50,r=t-e.constructionStartTick;return Math.min(1,Math.max(0,r/n))}if(e.unitType===`Missile Silo`||e.unitType===`SAM Launcher`){let n=this.missileReadiness(e,t);if(n<1)return n}return null}missileReadiness(e,t){let n=e.level,r=e.missileTimerQueue.length;if(r===0)return 1;let i=n-r,a=e.unitType===`SAM Launcher`?this.config.SAMCooldown():this.config.SiloCooldown(),o=i/n;for(let r of e.missileTimerQueue){let e=t-r;o+=e/a/n}return Math.max(0,Math.min(1,o))}},$f=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTileTex;   // R16UI — tile state per cell
uniform usampler2D uRelationTex; // R8UI — relationship matrix (ownerA × ownerB)
uniform vec2 uMapSize;
uniform uint uHighlightOwner;
uniform int uHighlightThicken; // Chebyshev radius for highlight expansion

out vec4 fragColor;

uint getOwner(ivec2 c) {
  if (c.x < 0 || c.y < 0 || c.x >= int(uMapSize.x) || c.y >= int(uMapSize.y))
    return 0u;
  return texelFetch(uTileTex, c, 0).r & uint(OWNER_MASK);
}

void main() {
  ivec2 tc = ivec2(gl_FragCoord.xy);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  uint owner = raw & uint(OWNER_MASK);

  // --- Border detection ---
  float borderType = 0.0; // 0=interior, ~0.5=normal border, ~1.0=highlight border
  uint maxRel = 0u;       // 0=neutral, 1=friendly, 2=embargo

  if (owner != 0u) {
    // Cardinal neighbor check (standard border)
    uint n = getOwner(tc + ivec2( 0, -1));
    uint s = getOwner(tc + ivec2( 0,  1));
    uint w = getOwner(tc + ivec2(-1,  0));
    uint e = getOwner(tc + ivec2( 1,  0));

    bool isBorder = (n != owner) || (s != owner) || (w != owner) || (e != owner);

    if (isBorder) {
      borderType = 0.5; // normal border

      // Relationship lookup for each cardinal neighbor with different owner
      if (n != owner && n != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, n), 0).r);
      if (s != owner && s != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, s), 0).r);
      if (w != owner && w != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, w), 0).r);
      if (e != owner && e != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, e), 0).r);
    }

    // Highlight: N-tile Chebyshev expansion
    if (uHighlightOwner != 0u && owner == uHighlightOwner) {
      if (isBorder) {
        borderType = 1.0; // upgrade to highlight border
      } else {
        // Check expanding rings for any tile with different owner
        for (int d = 1; d <= 10; d++) {
          if (d > uHighlightThicken) break;
          bool found = false;
          // Check all tiles at Chebyshev distance d
          for (int i = -d; i <= d; i++) {
            // Top/bottom edges
            if (getOwner(tc + ivec2(i, -d)) != owner) { found = true; break; }
            if (getOwner(tc + ivec2(i,  d)) != owner) { found = true; break; }
          }
          if (!found) {
            for (int i = -d + 1; i <= d - 1; i++) {
              // Left/right edges (excluding corners already checked)
              if (getOwner(tc + ivec2(-d, i)) != owner) { found = true; break; }
              if (getOwner(tc + ivec2( d, i)) != owner) { found = true; break; }
            }
          }
          if (found) {
            borderType = 1.0; // highlight border
            break;
          }
        }
      }
    }
  }

  // A = relationship: 0.0=neutral, 0.5=friendly, 1.0=embargo
  float relation = float(maxRel) * 0.5;
  // G channel is unused (formerly emberIntensity; ember is now computed in
  // FalloutBloomPass and FalloutLightPass). B channel is unused (defense post
  // proximity is now computed per-tile by DefenseCoveragePass).
  fragColor = vec4(borderType, 0.0, 0.0, relation);
}
`,ep=`#version 300 es
layout(location = 0) in vec2 aPos;
void main() {
  gl_Position = vec4(aPos * 2.0 - 1.0, 0.0, 1.0);
}
`,tp=`#version 300 es
precision highp float;
precision highp int;

// Per-patch tile coord (integer in [0, mapW) × [0, mapH))
layout(location = 0) in vec2 aPos;

uniform vec2 uMapSize;

void main() {
  // Position the point at the center of the target pixel so a 1×1 point
  // rasterizes into exactly that texel. Same trick as TileScatterPass.
  vec2 ndc = ((aPos + 0.5) / uMapSize) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,np=2,rp=4096,ip=class{constructor(e,t,n,r,i,a,o){this.highlightOwner=0,this.patchCount=0,this.patchCapacity=rp,this.gpuCapacityBytes=0,this.gl=e,this.mapW=t,this.mapH=n,this.settings=o,this.tileTex=i,this.relationTex=a,this.program=W(e,tp,U($f,{...it}),`BorderScatterPass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uHighlightOwner=e.getUniformLocation(this.program,`uHighlightOwner`),this.uHighlightThicken=e.getUniformLocation(this.program,`uHighlightThicken`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uRelationTex`),1),this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.vbo=e.createBuffer(),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.vbo),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,np*4,0),e.bindVertexArray(null),this.patchData=new Float32Array(rp*np)}push(e,t){this.patchCount>=this.patchCapacity&&this.grow();let n=this.patchCount*np;this.patchData[n]=e,this.patchData[n+1]=t,this.patchCount++}pushWithNeighbors(e,t,n,r){if(!(this.highlightOwner!==0&&(n===this.highlightOwner||r===this.highlightOwner))){this.push(e,t),e>0&&this.push(e-1,t),e<this.mapW-1&&this.push(e+1,t),t>0&&this.push(e,t-1),t<this.mapH-1&&this.push(e,t+1);return}let i=Math.max(1,Math.floor(this.settings.mapOverlay.highlightThicken)),a=Math.max(0,e-i),o=Math.min(this.mapW-1,e+i),s=Math.max(0,t-i),c=Math.min(this.mapH-1,t+i);for(let e=s;e<=c;e++)for(let t=a;t<=o;t++)this.push(t,e)}get count(){return this.patchCount}clear(){this.patchCount=0}setHighlightOwner(e){this.highlightOwner=e}flush(){if(this.patchCount===0)return;let e=this.gl,t=this.patchCount*np,n=t*4,r=this.patchData.subarray(0,t);e.bindBuffer(e.ARRAY_BUFFER,this.vbo),n>this.gpuCapacityBytes?(e.bufferData(e.ARRAY_BUFFER,r,e.STREAM_DRAW),this.gpuCapacityBytes=n):e.bufferSubData(e.ARRAY_BUFFER,0,r);let i=this.settings.mapOverlay;e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH),e.uniform1ui(this.uHighlightOwner,this.highlightOwner),e.uniform1i(this.uHighlightThicken,Math.floor(i.highlightThicken)),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.relationTex),e.bindVertexArray(this.vao),e.drawArrays(e.POINTS,0,this.patchCount),e.bindFramebuffer(e.FRAMEBUFFER,null),this.patchCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteFramebuffer(this.fbo),e.deleteBuffer(this.vbo),e.deleteVertexArray(this.vao)}grow(){let e=this.patchCapacity*2,t=new Float32Array(e*np);t.set(this.patchData),this.patchData=t,this.patchCapacity=e}},ap=1024,op=class{constructor(e,t,n,r,i){this.highlightOwner=0,this.globalDirty=!0,this.gl=e,this.settings=i,this.mapW=t,this.mapH=n,this.program=W(e,ep,U($f,{...it}),`BorderComputePass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uHighlightOwner=e.getUniformLocation(this.program,`uHighlightOwner`),this.uHighlightThicken=e.getUniformLocation(this.program,`uHighlightThicken`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uRelationTex`),1),this.relationTex=H(e,{width:ap,height:ap,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.borderTex=H(e,{width:t,height:n,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.borderFbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.borderFbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.borderTex,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.vao=mt(e),this._tileTex=r,this.scatter=new ip(e,t,n,this.borderTex,r,this.relationTex,i)}setHighlightOwner(e){if(e===this.highlightOwner)return;this.highlightOwner=e;let t=this.mapW*this.mapH>4e7;this.scatter.setHighlightOwner(t?0:e),t||(this.globalDirty=!0)}updateRelations(e,t){let n=this.gl,r=Math.min(t,ap);n.bindTexture(n.TEXTURE_2D,this.relationTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,r,r,n.RED_INTEGER,n.UNSIGNED_BYTE,e),this.globalDirty=!0}markGlobalDirty(){this.globalDirty=!0}patchTile(e,t,n,r){if(this.globalDirty)return;let i=Math.min(32768,Math.max(2048,Math.floor(this.mapW*this.mapH/1e3)));if(this.scatter.count>i){this.globalDirty=!0,this.scatter.clear();return}this.scatter.pushWithNeighbors(e,t,n,r)}getBorderTex(){return this.borderTex}draw(){if(this.globalDirty){this.globalDirty=!1,this.scatter.clear();let e=this.gl,t=this.settings.mapOverlay;e.bindFramebuffer(e.FRAMEBUFFER,this.borderFbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH);let n=this.mapW*this.mapH>4e7;e.uniform1ui(this.uHighlightOwner,n?0:this.highlightOwner),e.uniform1i(this.uHighlightThicken,Math.floor(t.highlightThicken)),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this._tileTex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.relationTex),e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6),e.bindFramebuffer(e.FRAMEBUFFER,null)}else this.scatter.count>0&&this.scatter.flush()}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.borderTex),e.deleteTexture(this.relationTex),e.deleteFramebuffer(this.borderFbo),this.scatter.dispose()}},sp=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTileTex;
uniform sampler2D uPalette;
uniform sampler2D uBorderTex;     // RGBA8 — border flags from BorderComputePass
uniform sampler2D uDefenseCoverageTex; // R8 — 1.0 = defended by same-owner post
uniform sampler2D uAffiliation;   // 256×2 RGBA8 — affiliation colors (row 0 = border)
uniform vec2 uMapSize;
uniform int uAltView;
uniform uint uHighlightOwner;
uniform float uHighlightBrighten;
uniform float uDefenseCheckerDarken;
uniform float uEmbargoTintRatio;
uniform float uFriendlyTintRatio;
uniform vec3 uEmbargoTint;
uniform vec3 uFriendlyTint;

in vec2 vWorldPos;
out vec4 fragColor;

void main() {
  ivec2 tc = ivec2(floor(vWorldPos));
  if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  uint owner = raw & uint(OWNER_MASK);

  // Read pre-computed border flags from BorderComputePass
  vec4 borderData = texelFetch(uBorderTex, tc, 0);
  float borderType = borderData.r;      // 0=interior, ~0.5=normal, ~1.0=highlight
  bool defense = texelFetch(uDefenseCoverageTex, tc, 0).r > 0.5; // same-owner defense post nearby
  float relation = borderData.a;        // 0.0=neutral, ~0.5=friendly, ~1.0=embargo

  bool isBorder = borderType > 0.25;
  bool isHighlightBorder = borderType > 0.75 || (uHighlightOwner != 0u && owner == uHighlightOwner);

  // --- Border stamp: full-brightness border color ---
  if (isBorder && owner != 0u) {
    vec3 bc;
    if (uAltView != 0) {
      // Alt-view: pure affiliation color from palette row 0
      bc = texelFetch(uAffiliation, ivec2(int(owner), 0), 0).rgb;
    } else {
      float u = (float(owner) + 0.5) / float(PALETTE_SIZE);
      bc = texture(uPalette, vec2(u, 0.75)).rgb;
      if (isHighlightBorder) {
        bc = mix(bc, vec3(1.0), uHighlightBrighten);
      }
      // Relationship tint (applied BEFORE defense checkerboard, matching game)
      if (relation > 0.75) {
        bc = mix(bc, uEmbargoTint, uEmbargoTintRatio);
      } else if (relation > 0.25) {
        bc = mix(bc, uFriendlyTint, uFriendlyTintRatio);
      }
      // Defense bonus: checkerboard darken (applied AFTER tint, matching game)
      if (defense) {
        bool checker = ((tc.x + tc.y) & 1) == 1;
        if (checker) bc *= uDefenseCheckerDarken;
      }
    }
    fragColor = vec4(bc, 1.0);
    return;
  }

  discard;
}
`,cp=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aPos;
uniform mat3 uCamera;
out vec2 vWorldPos;
void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
  vWorldPos = aPos;
}
`,lp=class{constructor(e,t,n,r,i,a,o){this.defenseCoverageTex=null,this.affiliationTex=null,this.altView=!1,this.highlightOwner=0,this.gl=e,this.settings=o,this.mapW=t,this.mapH=n,this.tileTex=r,this.paletteTex=i,this.borderTex=a,this.program=W(e,cp,U(sp,{PALETTE_SIZE:kt(),...it}),`BorderStampPass`),this.uCam=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uHighlightBrighten=e.getUniformLocation(this.program,`uHighlightBrighten`),this.uDefenseCheckerDarken=e.getUniformLocation(this.program,`uDefenseCheckerDarken`),this.uEmbargoTintRatio=e.getUniformLocation(this.program,`uEmbargoTintRatio`),this.uFriendlyTintRatio=e.getUniformLocation(this.program,`uFriendlyTintRatio`),this.uEmbargoTint=e.getUniformLocation(this.program,`uEmbargoTint`),this.uFriendlyTint=e.getUniformLocation(this.program,`uFriendlyTint`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),this.uHighlightOwner=e.getUniformLocation(this.program,`uHighlightOwner`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),1),e.uniform1i(e.getUniformLocation(this.program,`uBorderTex`),2),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),3),e.uniform1i(e.getUniformLocation(this.program,`uDefenseCoverageTex`),4),this.vao=Je(e,t,n)}setAltView(e){this.altView=e}setAffiliationTex(e){this.affiliationTex=e}setDefenseCoverageTex(e){this.defenseCoverageTex=e}setHighlightOwner(e){this.highlightOwner=e}draw(e){let t=this.gl,n=this.settings.mapOverlay;t.useProgram(this.program),t.uniformMatrix3fv(this.uCam,!1,e),t.uniform2f(this.uMapSize,this.mapW,this.mapH),t.uniform1ui(this.uHighlightOwner,this.highlightOwner),t.uniform1f(this.uHighlightBrighten,n.highlightBrighten),t.uniform1f(this.uDefenseCheckerDarken,n.defenseCheckerDarken),t.uniform1f(this.uEmbargoTintRatio,n.embargoTintRatio),t.uniform1f(this.uFriendlyTintRatio,n.friendlyTintRatio),t.uniform3f(this.uEmbargoTint,n.embargoTintR,n.embargoTintG,n.embargoTintB),t.uniform3f(this.uFriendlyTint,n.friendlyTintR,n.friendlyTintG,n.friendlyTintB),t.uniform1i(this.uAltView,+!!this.altView),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tileTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.paletteTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.borderTex),this.affiliationTex&&(t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,this.affiliationTex)),this.defenseCoverageTex&&(t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D,this.defenseCoverageTex)),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},up=`#version 300 es
precision highp float;

uniform vec2 uMapSize;
uniform float uCellSize;
uniform float uZoom;
uniform float uFontSize;
uniform sampler2D uGlyphTex;
uniform float uOpacity;

in vec2 vWorldPos;
out vec4 fragColor;

const float GLYPH_COUNT = 36.0;  // 0-9, A-Z

void main() {
  vec2 wp = vWorldPos;
  if (wp.x < 0.0 || wp.y < 0.0 || wp.x >= uMapSize.x || wp.y >= uMapSize.y)
    discard;

  float cs = uCellSize;
  float px = 1.0 / uZoom;       // 1 screen pixel in world units
  float lineW = px * 1.25;

  // Grid cell index + position within cell
  int cellCol = int(floor(wp.x / cs));
  int cellRow = int(floor(wp.y / cs));
  float localX = wp.x - float(cellCol) * cs;
  float localY = wp.y - float(cellRow) * cs;

  // --- Grid lines (at cell boundaries) ---
  if (localX < lineW || localY < lineW) {
    fragColor = vec4(1.0, 1.0, 1.0, uOpacity);
    return;
  }

  // --- Labels (only when cells are large enough on screen) ---
  float cellScreenPx = cs * uZoom;
  if (cellScreenPx < 60.0) discard;

  float fontSize = clamp(uFontSize + (uZoom - 1.0) * 1.2, uFontSize * 0.9, uFontSize * 1.6);
  float gw = fontSize * 0.6 * px;   // glyph width in world units
  float gh = fontSize * px;          // glyph height
  float pad = 8.0 * px;              // padding from cell corner

  float lx = localX - pad;
  float ly = localY - pad;

  // Compute label characters: row alpha + col digits
  // Atlas indices: 0-9 = digits '0'-'9', 10-35 = letters 'A'-'Z'
  int c0, c1 = -1, c2 = -1, c3 = -1;
  int nc;

  // Row part (A, B, ..., Z, AA, AB, ...)
  if (cellRow < 26) {
    c0 = cellRow + 10;
    nc = 1;
  } else {
    c0 = (cellRow / 26 - 1) + 10;
    c1 = (cellRow % 26) + 10;
    nc = 2;
  }

  // Col part (1-indexed: 1, 2, ..., 50)
  int colNum = cellCol + 1;
  if (nc == 1) {
    if (colNum < 10) { c1 = colNum; nc = 2; }
    else { c1 = colNum / 10; c2 = colNum % 10; nc = 3; }
  } else {
    if (colNum < 10) { c2 = colNum; nc = 3; }
    else { c2 = colNum / 10; c3 = colNum % 10; nc = 4; }
  }

  float totalW = float(nc) * gw;

  // Check if on actual glyph
  if (lx < 0.0 || ly < 0.0 || lx >= totalW || ly >= gh) {
    discard;
  }

  int ci = int(floor(lx / gw));
  if (ci < nc) {
    int g;
    if (ci == 0) g = c0;
    else if (ci == 1) g = c1;
    else if (ci == 2) g = c2;
    else g = c3;

    float cu = fract(lx / gw);
    float cv = ly / gh;
    float au = (float(g) + cu) / GLYPH_COUNT;
    vec4 gColor = texture(uGlyphTex, vec2(au, cv));
    fragColor = gColor.a * vec4(gColor.rgb, uOpacity);
    return;
  }
}
`,dp=10,fp=50,pp=2,mp=24,hp=36,gp=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`,_p=class{constructor(e,t,n,r){this.gl=e,this.mapW=t,this.mapH=n,this.cellSize=vp(t,n),this.settings=r,this.glyphTex=this.createGlyphAtlas(),this.program=W(e,Dt,up,`CoordinateGridPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uCellSize=e.getUniformLocation(this.program,`uCellSize`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uFontSize=e.getUniformLocation(this.program,`uFontSize`),this.uOpacity=e.getUniformLocation(this.program,`uOpacity`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uGlyphTex`),0),this.vao=Je(e,t,n)}draw(e,t){let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform2f(this.uMapSize,this.mapW,this.mapH),n.uniform1f(this.uCellSize,this.cellSize),n.uniform1f(this.uZoom,t),n.uniform1f(this.uFontSize,this.settings.altView.gridFontSize),n.uniform1f(this.uOpacity,this.settings.mapOverlay.coordinateGridOpacity),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.glyphTex),n.bindVertexArray(this.vao),n.drawArrays(n.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao),e.deleteTexture(this.glyphTex)}createGlyphAtlas(){let e=document.createElement(`canvas`);e.width=36*mp,e.height=hp;let t=e.getContext(`2d`);t.clearRect(0,0,e.width,e.height),t.strokeStyle=`black`,t.lineWidth=4,t.fillStyle=`white`,t.font=`bold ${hp-8}px monospace`,t.textAlign=`center`,t.textBaseline=`middle`;for(let e=0;e<36;e++)t.strokeText(gp[e],e*mp+mp/2,hp/2),t.fillText(gp[e],e*mp+mp/2,hp/2);let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}};function vp(e,t){let n=Math.min(e,t)/dp,r=Math.max(1,Math.round(t/n)),i=Math.max(1,Math.round(e/n));if(i>fp){let n=Math.floor(fp*t/e);r=Math.max(pp,Math.min(r,n)),i=fp}return Math.min(e/i,t/r)}var yp=`#version 300 es
precision highp float;

in vec2 vLocal; // [-1, +1]

uniform vec3 uColor;
uniform float uIsDiagonal;
uniform float uAlpha;

uniform sampler2D uStatusAtlas;
uniform float uHasAtlas;

out vec4 fragColor;

const float LINE_HALF_W = 0.08; // line half-width (normalized to quad)
const float GAP = 0.15;         // center gap radius (normalized)
const float AA = 0.02;          // anti-alias width

const vec3 OUTLINE_BLACK = vec3(0.0);
const vec3 ALLIANCE_GREEN = vec3(0.0, 0.9, 0.2); // Official Alliance Green

// 8 unit directions for the outline dilation sample ring (matching status-icon.frag.glsl)
const vec2 kRing[8] = vec2[8](
  vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
  vec2(0.707, 0.707), vec2(-0.707, 0.707),
  vec2(0.707, -0.707), vec2(-0.707, -0.707)
);

void main() {
  if (uIsDiagonal > 0.5) {
    // 1. Calculate Diagonal X with black outline
    float d1 = abs(vLocal.x - vLocal.y) * 0.7071;
    float d2 = abs(vLocal.x + vLocal.y) * 0.7071;
    float minD = min(d1, d2);
    float circleMask = 1.0 - smoothstep(0.85, 0.98, length(vLocal));
    float lineAlpha = (1.0 - smoothstep(0.08, 0.16, minD)) * circleMask;
    float outlineAlpha = (1.0 - smoothstep(0.20, 0.30, minD)) * circleMask;
    float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
    vec3 xCol = mix(OUTLINE_BLACK, uColor, blend);
    float xAlpha = outlineAlpha;

    // 2. Alliance Handshake Icon with 8-ring dark outline (matching status-icon.frag.glsl)
    vec4 iconTexel = vec4(0.0);
    if (uHasAtlas > 0.5) {
      // Map vLocal [-1.10, +1.10] to icon UV [0, 1] (Y flipped for WebGL)
      vec2 iconUV = vec2(
        (vLocal.x / 1.50) + 0.5,
        1.0 - ((vLocal.y / 1.50) + 0.5)
      );

      if (iconUV.x >= 0.0 && iconUV.x <= 1.0 && iconUV.y >= 0.0 && iconUV.y <= 1.0) {
        // Handshake Icon UV in status-atlas.png (col 0, row 1, cell 256x256, 16px pad)
        // mix(16/768, 240/768, iconUV.x) and mix(272/1024, 496/1024, iconUV.y)
        vec2 atlasUV = vec2(
          mix(0.0208333, 0.3125, iconUV.x),
          mix(0.265625, 0.484375, iconUV.y)
        );
        iconTexel = texture(uStatusAtlas, atlasUV);

        // 8-ring dark outline dilation (matching status-icon.frag.glsl)
        float uStatusOutlinePx = 4.0; // 4px outline radius
        vec2 uStatusTexel = vec2(1.0 / 768.0, 1.0 / 1024.0);
        vec2 sampleStep = uStatusTexel * uStatusOutlinePx;
        float ring = 0.0;
        for (int i = 0; i < 8; i++) {
          ring = max(ring, texture(uStatusAtlas, atlasUV + kRing[i] * sampleStep).a);
        }
        float outlineA = ring * (1.0 - iconTexel.a);
        iconTexel = vec4(mix(OUTLINE_BLACK, iconTexel.rgb, iconTexel.a), max(iconTexel.a, outlineA));
      }
    }

    // 3. Composite Alliance Handshake OVER the Red X reticle
    vec3 finalCol = mix(xCol, iconTexel.rgb, iconTexel.a);
    float finalAlpha = max(xAlpha, iconTexel.a);

    if (finalAlpha < 0.01) discard;
    fragColor = vec4(finalCol, finalAlpha * uAlpha);
  } else {
    float ax = abs(vLocal.x);
    float ay = abs(vLocal.y);

    // Horizontal arm: |y| < lineWidth, |x| > gap
    float hMask = smoothstep(LINE_HALF_W + AA, LINE_HALF_W - AA, ay)
                * smoothstep(GAP - AA, GAP + AA, ax)
                * (1.0 - smoothstep(1.0 - AA, 1.0, ax));

    // Vertical arm: |x| < lineWidth, |y| > gap
    float vMask = smoothstep(LINE_HALF_W + AA, LINE_HALF_W - AA, ax)
                * smoothstep(GAP - AA, GAP + AA, ay)
                * (1.0 - smoothstep(1.0 - AA, 1.0, ay));

    float mask = max(hMask, vMask);
    if (mask < 0.01) discard;

    fragColor = vec4(uColor, mask * 0.9);
  }
}
`,bp=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos; // [0,1] quad

uniform mat3 uCamera;
uniform vec2 uCenter;    // world tile coords
uniform float uHalfSize; // half-size in pixels (screen space)
uniform vec2 uViewport;  // canvas width, height in pixels

out vec2 vLocal; // [-1, +1]

void main() {
  vLocal = aPos * 2.0 - 1.0;

  // Project center to clip space
  vec3 clip = uCamera * vec3(uCenter + 0.5, 1.0);

  // Offset in screen pixels → NDC
  vec2 pixelToNDC = 2.0 / uViewport;
  gl_Position = vec4(clip.xy + vLocal * uHalfSize * pixelToNDC, 0.0, 1.0);
}
`,xp=R(`atlases/status-atlas.png`),Sp=20,Cp=new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),wp=class{constructor(e){this.statusAtlasTex=null,this.disposed=!1,this.active=!1,this.centerX=0,this.centerY=0,this.canBuild=!1,this.blockedXTile=null,this.gl=e,this.program=W(e,bp,yp,`CrosshairPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uHalfSize=e.getUniformLocation(this.program,`uHalfSize`),this.uViewport=e.getUniformLocation(this.program,`uViewport`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.uIsDiagonal=e.getUniformLocation(this.program,`uIsDiagonal`),this.uAlpha=e.getUniformLocation(this.program,`uAlpha`),this.uStatusAtlas=e.getUniformLocation(this.program,`uStatusAtlas`),this.uHasAtlas=e.getUniformLocation(this.program,`uHasAtlas`);let t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{if(!this.gl||this.disposed)return;let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),this.statusAtlasTex=n},t.src=xp,this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,Cp,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}updateGhostPreview(e){e&&(e.ghostType===`Warship`||e.ghostType===`MIRV`)?(this.active=!0,this.centerX=e.tileX,this.centerY=e.tileY,this.canBuild=e.canBuild||e.canUpgrade):this.active=!1}triggerBlockedFlash(e,t){this.blockedXTile={x:e,y:t,startTime:Date.now(),duration:600}}draw(e){let t=this.gl,n=Date.now();if(this.blockedXTile){let r=n-this.blockedXTile.startTime;if(r<this.blockedXTile.duration){let n=r/this.blockedXTile.duration,i=1-(1-n)*(1-n),a=this.blockedXTile.y-i*2,o=Math.max(0,1-i*i);t.useProgram(this.program),this.statusAtlasTex?(t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.statusAtlasTex),t.uniform1i(this.uStatusAtlas,1),t.uniform1f(this.uHasAtlas,1)):t.uniform1f(this.uHasAtlas,0),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uCenter,this.blockedXTile.x,a),t.uniform1f(this.uHalfSize,Sp*2.2),t.uniform2f(this.uViewport,t.drawingBufferWidth,t.drawingBufferHeight),t.uniform3f(this.uColor,1,.05,.05),t.uniform1f(this.uIsDiagonal,1),t.uniform1f(this.uAlpha,o),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}else this.blockedXTile=null}this.active&&(t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uCenter,this.centerX,this.centerY),t.uniform1f(this.uHalfSize,Sp),t.uniform2f(this.uViewport,t.drawingBufferWidth,t.drawingBufferHeight),t.uniform1f(this.uIsDiagonal,0),t.uniform1f(this.uAlpha,1),this.canBuild?t.uniform3f(this.uColor,.9,.15,.15):t.uniform3f(this.uColor,.4,.1,.1),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6))}dispose(){this.disposed=!0;let e=this.gl;this.statusAtlasTex&&=(e.deleteTexture(this.statusAtlasTex),null),e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},Tp=`#version 300 es
precision highp float;
precision highp usampler2D;

// Writes 1.0 into the coverage texture for every tile within \`uRange\` of the
// post being stamped AND owned by that post's owner. The texture is cleared to
// 0 first, so a tile no post touches stays 0. Overlapping circles from the same
// owner compose as a boolean union (1.0 over 1.0 is still 1.0 — no blending);
// circles from other owners discard at this tile and leave it untouched.

uniform usampler2D uTileTex;  // R16UI — tile state per cell
uniform vec2 uMapSize;
uniform float uRange;

flat in vec2 vPostCenter;
flat in float vOwner;

out vec4 fragColor;

void main() {
  ivec2 tc = ivec2(gl_FragCoord.xy);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  // Circle test in tile-integer space (matches the old per-fragment loop).
  float dx = float(tc.x) - vPostCenter.x;
  float dy = float(tc.y) - vPostCenter.y;
  if (dx * dx + dy * dy > uRange * uRange) discard;

  // Same-owner test: only the tile's own owner's posts defend it.
  uint owner = texelFetch(uTileTex, tc, 0).r & uint(OWNER_MASK);
  if (owner != uint(vOwner)) discard;

  fragColor = vec4(1.0);
}
`,Ep=`#version 300 es
precision highp float;

// One instanced quad per defense post. The quad is a box centered on the post,
// sized to cover the post's range; the fragment shader trims it to a circle and
// filters by tile owner. See DefenseCoveragePass.

layout(location = 0) in vec2 aCorner;  // unit quad corner, [0,1]²
layout(location = 1) in vec3 aPost;     // (tileX, tileY, ownerID)

uniform vec2 uMapSize;
uniform float uRange;

flat out vec2 vPostCenter;
flat out float vOwner;

void main() {
  vPostCenter = aPost.xy;
  vOwner = aPost.z;

  // Box spanning [center - range, center + range] in tile coords, plus a
  // 1-tile margin so the boundary tiles at exactly \`range\` are rasterized
  // (their pixel centers sit just past the un-padded edge).
  vec2 tilePos = aPost.xy + (aCorner * 2.0 - 1.0) * (uRange + 1.0);

  // Tile-resolution FBO (viewport = map size), so map straight to clip space.
  vec2 ndc = (tilePos / uMapSize) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`,Dp=3,Op=128,kp=class{constructor(e,t,n,r,i){this.count=0,this.fullDirty=!0,this.dirtyList=[],this.gl=e,this.settings=i,this.mapW=t,this.mapH=n,this.tileTex=r,this.blocksX=Math.ceil(t/Op),this.blocksY=Math.ceil(n/Op),this.dirtyBlock=new Uint8Array(this.blocksX*this.blocksY),this.fullFallback=Math.floor(this.blocksX*this.blocksY/2),this.program=W(e,Ep,U(Tp,{OWNER_MASK:it.OWNER_MASK}),`DefenseCoveragePass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uRange=e.getUniformLocation(this.program,`uRange`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),this.coverageTex=H(e,{width:t,height:n,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.coverageTex,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.quadBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuf),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW);let a=e.createBuffer();this.instanceBuf=new Ve(e,a,256,Dp),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuf),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,a),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,Dp*4,0),e.vertexAttribDivisor(1,1),e.bindVertexArray(null)}updateDefensePosts(e){this.count=e.length,this.instanceBuf.ensureCapacity(e.length);let t=this.instanceBuf.float32;for(let n=0;n<e.length;n++){let r=e[n],i=n*Dp;t[i]=r.x,t[i+1]=r.y,t[i+2]=r.ownerID}if(e.length>0){let t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf.buffer),t.bufferSubData(t.ARRAY_BUFFER,0,this.instanceBuf.float32,0,e.length*Dp)}this.fullDirty=!0}markTileDirty(e,t){let n=e/Op|0,r=(t/Op|0)*this.blocksX+n;this.dirtyBlock[r]===0&&(this.dirtyBlock[r]=1,this.dirtyList.push(r))}markDirty(){this.fullDirty=!0}getCoverageTex(){return this.coverageTex}draw(){if(!this.fullDirty&&this.dirtyList.length===0)return;if(this.count===0){if(this.fullDirty){let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.SCISSOR_TEST),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),this.fullDirty=!1}for(let e of this.dirtyList)this.dirtyBlock[e]=0;this.dirtyList.length=0;return}let e=this.gl;if(e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.clearColor(0,0,0,0),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH),e.uniform1f(this.uRange,this.settings.mapOverlay.defensePostRange),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.bindVertexArray(this.vao),this.fullDirty||this.dirtyList.length>this.fullFallback)e.disable(e.SCISSOR_TEST),e.clear(e.COLOR_BUFFER_BIT),this.count>0&&e.drawArraysInstanced(e.TRIANGLES,0,6,this.count);else{e.enable(e.SCISSOR_TEST);for(let t of this.dirtyList){let n=t%this.blocksX*Op,r=(t/this.blocksX|0)*Op,i=Math.min(Op,this.mapW-n),a=Math.min(Op,this.mapH-r);e.scissor(n,r,i,a),e.clear(e.COLOR_BUFFER_BIT),this.count>0&&e.drawArraysInstanced(e.TRIANGLES,0,6,this.count)}e.disable(e.SCISSOR_TEST)}for(let e of this.dirtyList)this.dirtyBlock[e]=0;this.dirtyList.length=0,this.fullDirty=!1,e.bindFramebuffer(e.FRAMEBUFFER,null)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.coverageTex),e.deleteFramebuffer(this.fbo),e.deleteBuffer(this.quadBuf),e.deleteVertexArray(this.vao),this.instanceBuf.dispose()}},Ap=`#version 300 es
precision highp float;
uniform sampler2D uTex;
uniform float uBloomCoverage;
in vec2 vUV;
out vec4 fragColor;
void main() {
  vec4 bloom = texture(uTex, vUV);
  fragColor = bloom * uBloomCoverage;
}
`,jp=`#version 300 es
precision highp float;
precision highp usampler2D;
uniform usampler2D uTileTex;
uniform vec2 uMapSize;
uniform float uTick;
uniform float uTileScale;

uniform float uBroilSpeedCold;
uniform float uBroilSpeedHot;
uniform float uNoiseFreq1;
uniform float uNoiseFreq2;
uniform float uContrastLoCold;
uniform float uContrastLoHot;
uniform float uContrastHiCold;
uniform float uContrastHiHot;
uniform float uMetaFreq;
uniform float uIntensityCold;
uniform float uIntensityHot;
uniform float uMetaInfluenceCold;
uniform float uMetaInfluenceHot;
uniform float uOpacityFadeEnd;
uniform vec3 uBloomColor;
uniform vec3 uParticleColorDark;
uniform vec3 uParticleColorBright;
uniform float uParticleThresholdUnowned;
uniform float uParticleThresholdOwned;
uniform float uParticleFlickerSpeed;
uniform float uParticleStrength;
uniform float uParticleFreshScale;

uniform sampler2D uHeatTex;

out vec4 fragColor;

float hash3(vec3 p) {
  return fract(sin(dot(mod(p, 6.2831853), vec3(127.1, 311.7, 74.7))) * 43758.5453);
}
float vnoise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash3(i);
  float n100 = hash3(i + vec3(1, 0, 0));
  float n010 = hash3(i + vec3(0, 1, 0));
  float n110 = hash3(i + vec3(1, 1, 0));
  float n001 = hash3(i + vec3(0, 0, 1));
  float n101 = hash3(i + vec3(1, 0, 1));
  float n011 = hash3(i + vec3(0, 1, 1));
  float n111 = hash3(i + vec3(1, 1, 1));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z);
}

void main() {
  // Bloom FBO is mapW/uTileScale × mapH/uTileScale; each output pixel maps
  // to the center tile of its uTileScale×uTileScale block. Still deterministic
  // and camera-independent — just sparser than 1:1.
  ivec2 tc = ivec2(gl_FragCoord.xy * uTileScale);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  if ((raw & (1u << FALLOUT_BIT)) == 0u) discard;
  uint owner = raw & uint(OWNER_MASK);

  float heat = texelFetch(uHeatTex, tc, 0).r;
  vec2 tileCenter = vec2(tc) + 0.5;

  float speed = mix(uBroilSpeedCold, uBroilSpeedHot, heat);
  float t = uTick * speed;

  float n1 = vnoise3(vec3(tileCenter * uNoiseFreq1, t));
  float n2 = vnoise3(vec3(tileCenter * uNoiseFreq2, t * 1.3));
  float broil = n1 * 0.6 + n2 * 0.4;

  float lo = mix(uContrastLoCold, uContrastLoHot, heat);
  float hi = mix(uContrastHiCold, uContrastHiHot, heat);
  broil = smoothstep(lo, hi, broil);

  float meta = vnoise3(vec3(tileCenter * uMetaFreq, t * 0.5));

  float baseIntensity = mix(uIntensityCold, uIntensityHot, heat);
  float metaInfluence = mix(uMetaInfluenceCold, uMetaInfluenceHot, heat);
  float intensity = baseIntensity * mix(1.0, meta, metaInfluence);

  float opacity = smoothstep(0.0, uOpacityFadeEnd, heat);

  fragColor = vec4(uBloomColor, 1.0) * broil * intensity * opacity;

  // Particle dots — sharper per-tile flicker gated by a stochastic hash.
  // (Relocated here from BorderStampPass; this is fallout-domain logic.)
  vec2 tcMod = mod(vec2(tc), 6.2831853);
  float h1 = fract(sin(tcMod.x * 12.9898 + tcMod.y * 78.233) * 43758.5453);
  float h2 = fract(sin(tcMod.x * 63.7 + tcMod.y * 157.3) * 23421.631);
  float pThresh = (owner == 0u) ? uParticleThresholdUnowned : uParticleThresholdOwned;
  if (h2 > pThresh) {
    // Per-tile rate variation breaks the global rhythm so tiles don't all
    // pulse at the same frequency. h1 spans [0,1] → rate spans 0.4×–1.6× base.
    float tileRate = uParticleFlickerSpeed * (0.4 + h1 * 1.2);
    float flick = max(0.0, sin(mod(uTick * tileRate, 6.2831853) + h1 * 12.0) * 0.8 + 0.2);
    flick *= flick;
    // Dampen when fresh (high heat); ramp to full as heat decays.
    flick *= mix(uParticleFreshScale, 1.0, 1.0 - heat);
    // Fade dots out with the glow. Heat decays to 0, but the fallout bit is
    // permanent on tiles that stay unowned, so without this the dots flicker
    // forever once the bloom is gone.
    flick *= opacity;
    vec3 pc = mix(uParticleColorDark, uParticleColorBright, h1) * flick * uParticleStrength;
    float pa = max(pc.r, max(pc.g, pc.b));
    fragColor += vec4(pc, pa);
  }
}
`,Mp=`#version 300 es
precision highp float;
uniform sampler2D uTex;
uniform vec2 uDir;
in vec2 vUV;
out vec4 fragColor;
const float w[3] = float[3](0.375, 0.25, 0.0625);
void main() {
  vec4 result = texture(uTex, vUV) * w[0];
  for (int i = 1; i < 3; i++) {
    vec2 off = uDir * float(i);
    result += texture(uTex, vUV + off) * w[i];
    result += texture(uTex, vUV - off) * w[i];
  }
  fragColor = result;
}
`,Np=`#version 300 es
precision highp float;
// Camera-projected map quad -> tile-space UV. Shared by the bloom/glow
// composites so they sample an offscreen map-sized texture in world space.
layout(location = 0) in vec2 aPos;
uniform mat3 uCamera;
uniform vec2 uMapSize;
out vec2 vUV;
void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
  vUV = aPos / uMapSize;
}
`,Pp=8,Fp=class{constructor(e,t,n,r,i,a){this.gl=e,this.settings=a,this.mapW=t,this.mapH=n,this.tileTex=r,this.heatManager=i,this.extractProg=W(e,ep,U(jp,it),`FalloutBloomPass.extractProg`),this.uExtractMapSize=e.getUniformLocation(this.extractProg,`uMapSize`),this.uExtractTick=e.getUniformLocation(this.extractProg,`uTick`),this.uExtractTileScale=e.getUniformLocation(this.extractProg,`uTileScale`),this.uBroilSpeedCold=e.getUniformLocation(this.extractProg,`uBroilSpeedCold`),this.uBroilSpeedHot=e.getUniformLocation(this.extractProg,`uBroilSpeedHot`),this.uNoiseFreq1=e.getUniformLocation(this.extractProg,`uNoiseFreq1`),this.uNoiseFreq2=e.getUniformLocation(this.extractProg,`uNoiseFreq2`),this.uContrastLoCold=e.getUniformLocation(this.extractProg,`uContrastLoCold`),this.uContrastLoHot=e.getUniformLocation(this.extractProg,`uContrastLoHot`),this.uContrastHiCold=e.getUniformLocation(this.extractProg,`uContrastHiCold`),this.uContrastHiHot=e.getUniformLocation(this.extractProg,`uContrastHiHot`),this.uMetaFreq=e.getUniformLocation(this.extractProg,`uMetaFreq`),this.uIntensityCold=e.getUniformLocation(this.extractProg,`uIntensityCold`),this.uIntensityHot=e.getUniformLocation(this.extractProg,`uIntensityHot`),this.uMetaInfluenceCold=e.getUniformLocation(this.extractProg,`uMetaInfluenceCold`),this.uMetaInfluenceHot=e.getUniformLocation(this.extractProg,`uMetaInfluenceHot`),this.uOpacityFadeEnd=e.getUniformLocation(this.extractProg,`uOpacityFadeEnd`),this.uBloomColor=e.getUniformLocation(this.extractProg,`uBloomColor`),this.uParticleColorDark=e.getUniformLocation(this.extractProg,`uParticleColorDark`),this.uParticleColorBright=e.getUniformLocation(this.extractProg,`uParticleColorBright`),this.uParticleThresholdUnowned=e.getUniformLocation(this.extractProg,`uParticleThresholdUnowned`),this.uParticleThresholdOwned=e.getUniformLocation(this.extractProg,`uParticleThresholdOwned`),this.uParticleFlickerSpeed=e.getUniformLocation(this.extractProg,`uParticleFlickerSpeed`),this.uParticleStrength=e.getUniformLocation(this.extractProg,`uParticleStrength`),this.uParticleFreshScale=e.getUniformLocation(this.extractProg,`uParticleFreshScale`),e.useProgram(this.extractProg),e.uniform1i(e.getUniformLocation(this.extractProg,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.extractProg,`uHeatTex`),1),this.blurProg=W(e,$e,Mp,`FalloutBloomPass.blurProg`),this.uBlurDir=e.getUniformLocation(this.blurProg,`uDir`),e.useProgram(this.blurProg),e.uniform1i(e.getUniformLocation(this.blurProg,`uTex`),0),this.compositeProg=W(e,Np,Ap,`FalloutBloomPass.compositeProg`),this.uCompositeCam=e.getUniformLocation(this.compositeProg,`uCamera`),this.uCompositeMapSize=e.getUniformLocation(this.compositeProg,`uMapSize`),this.uBloomCoverage=e.getUniformLocation(this.compositeProg,`uBloomCoverage`),e.useProgram(this.compositeProg),e.uniform1i(e.getUniformLocation(this.compositeProg,`uTex`),0),this.bloomW=Math.max(1,Math.floor(t/Pp)),this.bloomH=Math.max(1,Math.floor(n/Pp)),this.texA=this.createBloomTex(this.bloomW,this.bloomH),this.texB=this.createBloomTex(this.bloomW,this.bloomH),this.fboA=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fboA),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texA,0),this.fboB=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fboB),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texB,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.mapVao=Je(e,t,n),this.quadVao=mt(e)}createBloomTex(e,t){let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}draw(e,t){if(!this.heatManager.isHeatActive)return;let n=this.gl,r=n.canvas,i=r.width,a=r.height,o=this.mapW,s=this.mapH,c=this.bloomW,l=this.bloomH;n.bindFramebuffer(n.FRAMEBUFFER,this.fboA),n.viewport(0,0,c,l),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.disable(n.BLEND),n.useProgram(this.extractProg),n.uniform2f(this.uExtractMapSize,o,s),n.uniform1f(this.uExtractTick,t),n.uniform1f(this.uExtractTileScale,Pp);let u=this.settings.falloutBloom;n.uniform1f(this.uBroilSpeedCold,u.broilSpeedCold),n.uniform1f(this.uBroilSpeedHot,u.broilSpeedHot),n.uniform1f(this.uNoiseFreq1,u.noiseFreq1),n.uniform1f(this.uNoiseFreq2,u.noiseFreq2),n.uniform1f(this.uContrastLoCold,u.contrastLoCold),n.uniform1f(this.uContrastLoHot,u.contrastLoHot),n.uniform1f(this.uContrastHiCold,u.contrastHiCold),n.uniform1f(this.uContrastHiHot,u.contrastHiHot),n.uniform1f(this.uMetaFreq,u.metaFreq),n.uniform1f(this.uIntensityCold,u.intensityCold),n.uniform1f(this.uIntensityHot,u.intensityHot),n.uniform1f(this.uMetaInfluenceCold,u.metaInfluenceCold),n.uniform1f(this.uMetaInfluenceHot,u.metaInfluenceHot),n.uniform1f(this.uOpacityFadeEnd,u.opacityFadeEnd),n.uniform3f(this.uBloomColor,u.bloomR,u.bloomG,u.bloomB),n.uniform3f(this.uParticleColorDark,u.particleColorDarkR,u.particleColorDarkG,u.particleColorDarkB),n.uniform3f(this.uParticleColorBright,u.particleColorBrightR,u.particleColorBrightG,u.particleColorBrightB),n.uniform1f(this.uParticleThresholdUnowned,u.particleThresholdUnowned),n.uniform1f(this.uParticleThresholdOwned,u.particleThresholdOwned),n.uniform1f(this.uParticleFlickerSpeed,u.particleFlickerSpeed),n.uniform1f(this.uParticleStrength,u.particleStrength),n.uniform1f(this.uParticleFreshScale,u.particleFreshScale),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.tileTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.heatManager.getHeatTex()),n.bindVertexArray(this.quadVao),n.drawArrays(n.TRIANGLES,0,6),n.useProgram(this.blurProg),n.bindVertexArray(this.quadVao),n.bindFramebuffer(n.FRAMEBUFFER,this.fboB),n.viewport(0,0,c,l),n.clear(n.COLOR_BUFFER_BIT),n.uniform2f(this.uBlurDir,1/c,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.texA),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,this.fboA),n.viewport(0,0,c,l),n.clear(n.COLOR_BUFFER_BIT),n.uniform2f(this.uBlurDir,0,1/l),n.bindTexture(n.TEXTURE_2D,this.texB),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,i,a),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n.useProgram(this.compositeProg),n.uniformMatrix3fv(this.uCompositeCam,!1,e),n.uniform2f(this.uCompositeMapSize,o,s),n.uniform1f(this.uBloomCoverage,u.bloomCoverage),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.texA),n.bindVertexArray(this.mapVao),n.drawArrays(n.TRIANGLES,0,6),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)}dispose(){let e=this.gl;e.deleteProgram(this.extractProg),e.deleteProgram(this.blurProg),e.deleteProgram(this.compositeProg),e.deleteFramebuffer(this.fboA),e.deleteFramebuffer(this.fboB),e.deleteTexture(this.texA),e.deleteTexture(this.texB),e.deleteVertexArray(this.mapVao),e.deleteVertexArray(this.quadVao)}},Ip=`#version 300 es
precision highp float;
uniform sampler2D uTex;
in vec2 vUV;
out vec4 fragColor;
void main() {
  fragColor = texture(uTex, vUV);
}
`,Lp=`#version 300 es
precision highp float;
precision highp usampler2D;
uniform sampler2D uHeatTex;
uniform usampler2D uTileTex;
uniform vec2 uMapSize;
uniform float uTick;
uniform float uTileScale;
uniform vec3 uFalloutLightColor;
uniform float uFalloutLightIntensity;
uniform float uFalloutLightThreshold;
uniform vec3 uEmberLightColor;
uniform float uEmberLightIntensity;
uniform float uParticleThresholdUnowned;
uniform float uParticleThresholdOwned;
uniform float uParticleFlickerSpeed;
uniform float uParticleFreshScale;
out vec4 fragColor;
void main() {
  // FBO is mapW/uTileScale × mapH/uTileScale; each output pixel samples one
  // tile near the center of its uTileScale×uTileScale source block.
  ivec2 tc = ivec2(gl_FragCoord.xy * uTileScale);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  bool fallout = (raw & (1u << FALLOUT_BIT)) != 0u;
  if (!fallout) discard;

  uint owner = raw & uint(OWNER_MASK);
  float heat = texelFetch(uHeatTex, tc, 0).r;

  // Green fallout glow
  vec3 light = vec3(0.0);
  if (heat >= uFalloutLightThreshold) {
    float fi = heat * uFalloutLightIntensity;
    light += uFalloutLightColor * fi;
  }

  // Ember light — compute the same flicker as FalloutBloomPass.extract inline.
  vec2 tcMod = mod(vec2(tc), 6.2831853);
  float h1 = fract(sin(tcMod.x * 12.9898 + tcMod.y * 78.233) * 43758.5453);
  float h2 = fract(sin(tcMod.x * 63.7 + tcMod.y * 157.3) * 23421.631);
  float pThresh = (owner == 0u) ? uParticleThresholdUnowned : uParticleThresholdOwned;
  if (h2 > pThresh) {
    float tileRate = uParticleFlickerSpeed * (0.4 + h1 * 1.2);
    float flick = max(0.0, sin(mod(uTick * tileRate, 6.2831853) + h1 * 12.0) * 0.8 + 0.2);
    flick *= flick;
    flick *= mix(uParticleFreshScale, 1.0, 1.0 - heat);
    // Fade embers out with the heat. The fallout bit is permanent on tiles
    // that stay unowned, so without this the ember light flickers forever
    // once the blast has cooled.
    flick *= heat;
    light += uEmberLightColor * flick * uEmberLightIntensity;
  }

  float a = max(light.r, max(light.g, light.b));
  if (a < 0.001) discard;
  fragColor = vec4(light, a);
}
`,Rp=8,zp=class{constructor(e,t,n,r,i,a){this.gl=e,this.settings=a,this.mapW=t,this.mapH=n,this.tileTex=r,this.heatManager=i,this.falloutLightProg=W(e,ep,U(Lp,it),`FalloutLightPass.falloutLightProg`),this.uFalloutMapSize=e.getUniformLocation(this.falloutLightProg,`uMapSize`),this.uFalloutLightColor=e.getUniformLocation(this.falloutLightProg,`uFalloutLightColor`),this.uFalloutLightIntensity=e.getUniformLocation(this.falloutLightProg,`uFalloutLightIntensity`),this.uFalloutLightThreshold=e.getUniformLocation(this.falloutLightProg,`uFalloutLightThreshold`),this.uEmberLightColor=e.getUniformLocation(this.falloutLightProg,`uEmberLightColor`),this.uEmberLightIntensity=e.getUniformLocation(this.falloutLightProg,`uEmberLightIntensity`),this.uFalloutTick=e.getUniformLocation(this.falloutLightProg,`uTick`),this.uFalloutTileScale=e.getUniformLocation(this.falloutLightProg,`uTileScale`),this.uParticleThresholdUnowned=e.getUniformLocation(this.falloutLightProg,`uParticleThresholdUnowned`),this.uParticleThresholdOwned=e.getUniformLocation(this.falloutLightProg,`uParticleThresholdOwned`),this.uParticleFlickerSpeed=e.getUniformLocation(this.falloutLightProg,`uParticleFlickerSpeed`),this.uParticleFreshScale=e.getUniformLocation(this.falloutLightProg,`uParticleFreshScale`),e.useProgram(this.falloutLightProg),e.uniform1i(e.getUniformLocation(this.falloutLightProg,`uHeatTex`),0),e.uniform1i(e.getUniformLocation(this.falloutLightProg,`uTileTex`),1),this.falloutCompositeProg=W(e,Np,Ip,`FalloutLightPass.falloutCompositeProg`),this.uFalloutCompositeCam=e.getUniformLocation(this.falloutCompositeProg,`uCamera`),this.uFalloutCompositeMapSize=e.getUniformLocation(this.falloutCompositeProg,`uMapSize`),e.useProgram(this.falloutCompositeProg),e.uniform1i(e.getUniformLocation(this.falloutCompositeProg,`uTex`),0),this.lightW=Math.max(1,Math.floor(t/Rp)),this.lightH=Math.max(1,Math.floor(n/Rp)),this.falloutTex=this.createRGBA8Tex(this.lightW,this.lightH),this.falloutFbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.falloutFbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.falloutTex,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.quadVao=mt(e),this.mapQuadVao=Je(e,t,n)}createRGBA8Tex(e,t){let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}draw(e,t,n,r,i){if(!this.heatManager.isHeatActive)return;let a=this.gl,o=this.settings.lighting,s=this.settings.falloutBloom;a.bindFramebuffer(a.FRAMEBUFFER,this.falloutFbo),a.viewport(0,0,this.lightW,this.lightH),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.disable(a.BLEND),a.useProgram(this.falloutLightProg),a.uniform2f(this.uFalloutMapSize,this.mapW,this.mapH),a.uniform1f(this.uFalloutTileScale,Rp),a.uniform3f(this.uFalloutLightColor,o.falloutLightR,o.falloutLightG,o.falloutLightB),a.uniform1f(this.uFalloutLightIntensity,o.falloutLightIntensity),a.uniform1f(this.uFalloutLightThreshold,o.falloutLightThreshold),a.uniform3f(this.uEmberLightColor,o.emberLightR,o.emberLightG,o.emberLightB),a.uniform1f(this.uEmberLightIntensity,o.emberLightIntensity),a.uniform1f(this.uFalloutTick,i),a.uniform1f(this.uParticleThresholdUnowned,s.particleThresholdUnowned),a.uniform1f(this.uParticleThresholdOwned,s.particleThresholdOwned),a.uniform1f(this.uParticleFlickerSpeed,s.particleFlickerSpeed),a.uniform1f(this.uParticleFreshScale,s.particleFreshScale),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,this.heatManager.getHeatTex()),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,this.tileTex),a.bindVertexArray(this.quadVao),a.drawArrays(a.TRIANGLES,0,6),a.bindFramebuffer(a.FRAMEBUFFER,t),a.viewport(0,0,n,r),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE),a.useProgram(this.falloutCompositeProg),a.uniformMatrix3fv(this.uFalloutCompositeCam,!1,e),a.uniform2f(this.uFalloutCompositeMapSize,this.mapW,this.mapH),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,this.falloutTex),a.bindVertexArray(this.mapQuadVao),a.drawArrays(a.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.falloutLightProg),e.deleteProgram(this.falloutCompositeProg),e.deleteFramebuffer(this.falloutFbo),e.deleteTexture(this.falloutTex),e.deleteVertexArray(this.quadVao),e.deleteVertexArray(this.mapQuadVao)}},Bp=class{constructor(e,t,n,r,i,a){this.lightW=0,this.lightH=0,this.gl=e,this.settings=a,this.mapW=t,this.mapH=n,this.pointLightPass=r,this.falloutLightPass=i,this.blurProg=W(e,$e,Mp,`LightmapPass`),this.uBlurDir=e.getUniformLocation(this.blurProg,`uDir`),e.useProgram(this.blurProg),e.uniform1i(e.getUniformLocation(this.blurProg,`uTex`),0),this.lightTexA=this.createRGBA8Tex(),this.lightTexB=this.createRGBA8Tex(),this.lightFboA=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.lightFboA),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.lightTexA,0),this.lightFboB=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.lightFboB),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.lightTexB,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.quadVao=mt(e)}createRGBA8Tex(){let e=this.gl,t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),t}ensureLightSize(e,t){if(e===this.lightW&&t===this.lightH)return;this.lightW=e,this.lightH=t;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.lightTexA),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindTexture(n.TEXTURE_2D,this.lightTexB),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null)}draw(e,t,n,r){let i=this.gl,a=Math.max(1,t>>1),o=Math.max(1,n>>1);this.ensureLightSize(a,o),i.bindFramebuffer(i.FRAMEBUFFER,this.lightFboA),i.viewport(0,0,a,o),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.enable(i.BLEND),i.blendFunc(i.ONE,i.ONE),this.pointLightPass.draw(e),this.settings.passEnabled.falloutLight&&this.falloutLightPass.draw(e,this.lightFboA,a,o,r);let s=Math.abs(e[0]),c=Math.max(this.mapW,this.mapH),l=Math.min(s*c/this.settings.lighting.blurZoomDivisor,1);i.disable(i.BLEND),i.useProgram(this.blurProg),i.bindVertexArray(this.quadVao);for(let e=0;e<2;e++)i.bindFramebuffer(i.FRAMEBUFFER,this.lightFboB),i.viewport(0,0,a,o),i.clear(i.COLOR_BUFFER_BIT),i.uniform2f(this.uBlurDir,l/a,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.lightTexA),i.drawArrays(i.TRIANGLES,0,6),i.bindFramebuffer(i.FRAMEBUFFER,this.lightFboA),i.viewport(0,0,a,o),i.clear(i.COLOR_BUFFER_BIT),i.uniform2f(this.uBlurDir,0,l/o),i.bindTexture(i.TEXTURE_2D,this.lightTexB),i.drawArrays(i.TRIANGLES,0,6);return this.lightTexA}dispose(){let e=this.gl;e.deleteProgram(this.blurProg),e.deleteFramebuffer(this.lightFboA),e.deleteFramebuffer(this.lightFboB),e.deleteTexture(this.lightTexA),e.deleteTexture(this.lightTexB),e.deleteVertexArray(this.quadVao)}},Vp=`#version 300 es
precision highp float;
precision highp usampler2D;

// Layer RGBA texture (PNG with transparency).
uniform sampler2D uLayerTex;

// Raw terrain bytes (R8UI): bit 7 = isLand.
uniform usampler2D uTerrainBytes;

// Per-tile destroyed mask (R8UI): 0 = intact, 1 = destroyed.
// Only sampled when uNukeable > 0.
uniform usampler2D uDestroyedMask;

// 0 = land layer (visible only on land tiles), 1 = water layer.
uniform int uPlacement;

// 0 = permanent, 1 = destroyed in nuke blast radius.
uniform int uNukeable;

// 0.0 = hidden (user toggle), 1.0 = visible.
uniform float uVisible;

// Per-layer alpha multiplier (0–1).  Manifest default × user slider.
uniform float uAlpha;

in vec2 vUV;
out vec4 fragColor;

void main() {
  // User toggle.
  if (uVisible < 0.5) discard;

  // Sample layer texture first; if transparent, discard immediately before
  // reading terrain bytes or destroyed masks. This avoids massive texture
  // memory bandwidth on 10,000x5,000 maps where 70%+ of each layer is transparent.
  vec4 layer = texture(uLayerTex, vUV);
  if (layer.a < 0.01) discard;

  ivec2 tc = ivec2(
    int(vUV.x * float(MAP_W)),
    int(vUV.y * float(MAP_H))
  );
  tc = clamp(tc, ivec2(0), ivec2(MAP_W - 1, MAP_H - 1));

  // Land/water placement check: bit 7 of terrain byte = isLand.
  uint terrainByte = texelFetch(uTerrainBytes, tc, 0).r;
  bool isLand = (terrainByte & 0x80u) != 0u;

  if (uPlacement == 0 && !isLand) discard;  // land layer on water tile
  if (uPlacement == 1 && isLand) discard;   // water layer on land tile

  // Nukeable: skip destroyed tiles.
  if (uNukeable == 1) {
    uint destroyed = texelFetch(uDestroyedMask, tc, 0).r;
    if (destroyed > 0u) discard;
  }

  fragColor = vec4(layer.rgb, layer.a * uAlpha);
}
`,Hp=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;

out vec2 vUV;

void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // aPos ranges [0, mapW] × [0, mapH] — normalize to [0,1] UV.
  vUV = aPos / vec2(float(MAP_W), float(MAP_H));
}
`,Up=class{constructor(e,t,n,r,i,a,o){this.gl=e,this.terrainBytesTex=t,this.mapW=r,this.mapH=i,this.placement=a,this.nukeable=o,this._visible=!0,this._alpha=1,this.program=W(e,U(Hp,{MAP_W:r,MAP_H:i}),U(Vp,{MAP_W:r,MAP_H:i}),`MapLayerPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uPlacement=e.getUniformLocation(this.program,`uPlacement`),this.uNukeable=e.getUniformLocation(this.program,`uNukeable`),this.uVisible=e.getUniformLocation(this.program,`uVisible`),this.uAlpha=e.getUniformLocation(this.program,`uAlpha`),this.uLayerTex=e.getUniformLocation(this.program,`uLayerTex`),this.uTerrainBytes=e.getUniformLocation(this.program,`uTerrainBytes`),this.uDestroyedMask=e.getUniformLocation(this.program,`uDestroyedMask`),this.layerTex=H(e,{width:n.width,height:n.height,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),e.bindTexture(e.TEXTURE_2D,this.layerTex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAX_LEVEL,4),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),this.destroyedData=new Uint8Array(this.nukeable?r*i:0),this.destroyedTex=H(e,{width:this.nukeable?r:1,height:this.nukeable?i:1,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:this.nukeable?this.destroyedData:new Uint8Array(1),filter:e.NEAREST}),this.vao=Je(e,r,i)}setVisible(e){this._visible=e}setAlpha(e){this._alpha=Math.max(0,Math.min(1,e))}updateDestroyedMask(e){if(!this.nukeable||e.length!==this.mapW*this.mapH)return;this.destroyedData.set(e);let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.destroyedTex),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.mapW,this.mapH,t.RED_INTEGER,t.UNSIGNED_BYTE,this.destroyedData)}markTileDestroyed(e){if(e<0||e>=this.mapW*this.mapH||this.destroyedData[e]===1)return;this.destroyedData[e]=1;let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.destroyedTex),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texSubImage2D(t.TEXTURE_2D,0,e%this.mapW,Math.floor(e/this.mapW),1,1,t.RED_INTEGER,t.UNSIGNED_BYTE,new Uint8Array([1]))}markTilesDestroyed(e){let t=this.mapW,n=this.mapH,r=-1,i=-1,a=!1;for(let o of e){if(o<0||o>=this.mapW*this.mapH||this.destroyedData[o]===1)continue;this.destroyedData[o]=1;let e=o%this.mapW,s=(o-e)/this.mapW;e<t&&(t=e),e>r&&(r=e),s<n&&(n=s),s>i&&(i=s),a=!0}if(!a)return;let o=this.gl,s=r-t+1,c=i-n+1,l=new Uint8Array(s*c);for(let e=n;e<=i;e++){let r=e*this.mapW+t,i=(e-n)*s;l.set(this.destroyedData.subarray(r,r+s),i)}o.bindTexture(o.TEXTURE_2D,this.destroyedTex),o.pixelStorei(o.UNPACK_ALIGNMENT,1),o.texSubImage2D(o.TEXTURE_2D,0,t,n,s,c,o.RED_INTEGER,o.UNSIGNED_BYTE,l)}restoreFrom(e){let t=this.gl;t.deleteTexture(this.layerTex),this.layerTex=H(t,{width:e.width,height:e.height,internalFormat:t.RGBA8,format:t.RGBA,type:t.UNSIGNED_BYTE,data:null,filter:t.NEAREST}),t.bindTexture(t.TEXTURE_2D,this.layerTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,t.RGBA,t.UNSIGNED_BYTE,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAX_LEVEL,4),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.deleteTexture(this.destroyedTex),this.destroyedTex=H(t,{width:this.nukeable?this.mapW:1,height:this.nukeable?this.mapH:1,internalFormat:t.R8UI,format:t.RED_INTEGER,type:t.UNSIGNED_BYTE,data:this.nukeable?this.destroyedData:new Uint8Array(1),filter:t.NEAREST})}draw(e){let t=this.gl;t.useProgram(this.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.layerTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.terrainBytesTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.destroyedTex),t.uniform1i(this.uLayerTex,0),t.uniform1i(this.uTerrainBytes,1),t.uniform1i(this.uDestroyedMask,2),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1i(this.uPlacement,this.placement),t.uniform1i(this.uNukeable,+!!this.nukeable),t.uniform1f(this.uVisible,+!!this._visible),t.uniform1f(this.uAlpha,this._alpha),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6),t.bindVertexArray(null)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.layerTex),e.deleteTexture(this.destroyedTex),e.deleteVertexArray(this.vao)}},Wp=`#version 300 es
precision highp float;

in vec2 vLocal; // [-1, +1] over ±HALF tiles

uniform float uElapsed;      // wall-clock ms since activation
uniform vec3  uColor;        // RGB [0-1]
uniform float uPxPerTile;    // camera zoom (pixels per tile)
uniform float uStartRadius;  // screen px
uniform float uChevronSize;  // screen px
uniform float uLineWidth;    // screen px
uniform float uDuration;     // ms
uniform float uConverge;     // 0–1

out vec4 fragColor;

const float HALF = 16.0; // quad half-size in tiles (must match vertex shader)

// SDF: distance to a V-chevron pointing in +Y, centered at origin.
// The chevron has wings at (±w, -wingOff) meeting tip at (0, +tipOff).
float chevronSDF(vec2 p, float w, float tipOff, float wingOff) {
  p.x = abs(p.x);
  vec2 a = vec2(w, -wingOff);
  vec2 b = vec2(0.0, tipOff);
  vec2 ab = b - a;
  float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
  return length(p - a - ab * t);
}

void main() {
  float t = uElapsed / uDuration;
  if (t >= 1.0) discard;

  // Convert vLocal to screen pixels relative to center
  float px = vLocal.x * HALF * uPxPerTile;
  float py = vLocal.y * HALF * uPxPerTile;

  // Scale factor (matches game: grows above zoom 10)
  float sc = uPxPerTile > 10.0 ? 1.0 + (uPxPerTile - 10.0) / 10.0 : 1.0;

  float radius = uStartRadius * sc * (1.0 - t * uConverge);
  float cs = uChevronSize * sc;
  float tipOff = cs * 0.4;
  float wingOff = cs * 0.6;
  float w = cs; // wing half-width

  // 4 chevrons pointing inward
  float d = chevronSDF(vec2(px, -(py - radius)), w, tipOff, wingOff);
  d = min(d, chevronSDF(vec2(px, py + radius), w, tipOff, wingOff));
  d = min(d, chevronSDF(vec2(py, -(px - radius)), w, tipOff, wingOff));
  d = min(d, chevronSDF(vec2(py, px + radius), w, tipOff, wingOff));

  // Anti-aliased stroke (in screen pixels)
  float half_w = uLineWidth * sc * 0.5;
  float aa = 1.0;
  float mask = 1.0 - smoothstep(half_w - aa, half_w + aa, d);

  if (mask < 0.01) discard;

  float alpha = 1.0 - t;
  fragColor = vec4(uColor, alpha * mask);
}
`,Gp=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;
uniform vec2 uCenter; // world-space tile center

out vec2 vLocal; // [-1, +1] local quad space

void main() {
  vLocal = aPos * 2.0 - 1.0;

  // Quad covers ±16 tiles around center (enough for the chevrons)
  float r = 16.0;
  vec2 world = uCenter + 0.5 + vLocal * r;

  vec3 clip = uCamera * vec3(world, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Kp=class{constructor(e,t){this.active=!1,this.centerX=0,this.centerY=0,this.colorR=1,this.colorG=0,this.colorB=0,this.startTime=0,this.gl=e,this.settings=t,this.program=W(e,Gp,Wp,`MoveIndicatorPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uElapsed=e.getUniformLocation(this.program,`uElapsed`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.uPxPerTile=e.getUniformLocation(this.program,`uPxPerTile`),this.uStartRadius=e.getUniformLocation(this.program,`uStartRadius`),this.uChevronSize=e.getUniformLocation(this.program,`uChevronSize`),this.uLineWidth=e.getUniformLocation(this.program,`uLineWidth`),this.uDuration=e.getUniformLocation(this.program,`uDuration`),this.uConverge=e.getUniformLocation(this.program,`uConverge`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}show(e,t,n,r,i){this.active=!0,this.centerX=e,this.centerY=t,this.colorR=n,this.colorG=r,this.colorB=i,this.startTime=performance.now()}draw(e,t){if(!this.active)return;let n=this.settings.moveIndicator,r=performance.now()-this.startTime;if(r>=n.duration){this.active=!1;return}let i=this.gl;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform2f(this.uCenter,this.centerX,this.centerY),i.uniform1f(this.uElapsed,r),i.uniform3f(this.uColor,this.colorR,this.colorG,this.colorB),i.uniform1f(this.uPxPerTile,t),i.uniform1f(this.uStartRadius,n.startRadius),i.uniform1f(this.uChevronSize,n.chevronSize),i.uniform1f(this.uLineWidth,n.lineWidth),i.uniform1f(this.uDuration,n.duration),i.uniform1f(this.uConverge,n.converge),i.bindVertexArray(this.vao),i.drawArrays(i.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},qp={width:1280,height:768,cellSize:128,cols:10,emojis:{"😀":0,"😊":1,"🥰":2,"😇":3,"😎":4,"😞":5,"🥺":6,"😭":7,"😱":8,"😡":9,"😈":10,"🤡":11,"🥱":12,"🫡":13,"🖕":14,"👋":15,"👏":16,"✋":17,"🙏":18,"💪":19,"👍":20,"👎":21,"🫴":22,"🤌":23,"🤦‍♂️":24,"🤝":25,"🆘":26,"🕊️":27,"🏳️":28,"⌛":29,"🔥":30,"💥":31,"💀":32,"☢️":33,"⚠️":34,"↖️":35,"⬆️":36,"↗️":37,"👑":38,"🥇":39,"⬅️":40,"🎯":41,"➡️":42,"🥈":43,"🥉":44,"↙️":45,"⬇️":46,"↘️":47,"❤️":48,"💔":49,"💰":50,"⚓":51,"⛵":52,"🏡":53,"🛡️":54,"🏭":55,"🚂":56,"❓":57,"🐔":58,"🐀":59}},Jp=null,Yp=null;function Xp(){return Yp??=fetch(R(`atlases/msdf-atlas.json`)).then(e=>{if(!e.ok)throw Error(`Failed to fetch msdf-atlas.json: ${e.status}`);return e.json()}).then(e=>{Jp=e}),Yp}function Zp(){if(Jp===null)throw Error(`Atlas data not loaded; await preloadAtlasData() first`);return{fontSize:Jp.info.size,base:Jp.common.base,scaleW:Jp.common.scaleW,scaleH:Jp.common.scaleH,distanceRange:Jp.distanceField?.distanceRange??4,chars:Jp.chars,kernings:Jp.kernings??[]}}function Qp(e){let t=new Float32Array(384),n=new Float32Array(384),r=new Float32Array(384);for(let i of e)i.id<384&&(t[i.id]=i.xadvance,n[i.id]=i.xoffset,r[i.id]=i.width);return{advance:t,xOffset:n,visW:r}}function $p(e){let t=new Int8Array(384*384);for(let n of e)n.first<384&&n.second<384&&(t[n.first*384+n.second]=n.amount);return t}function em(){let e=new Map,t=qp;for(let[n,r]of Object.entries(t.emojis))e.set(n,r);return e}function tm(e,t){let n=new Float32Array(384*2*4);for(let e of t.chars){if(e.id>=384)continue;let r=e.id*4;n[r+0]=e.xadvance,n[r+1]=e.xoffset,n[r+2]=e.yoffset,n[r+3]=e.width;let i=(384+e.id)*4;n[i+0]=e.height,n[i+1]=e.x/t.scaleW,n[i+2]=e.y/t.scaleH,n[i+3]=(e.x+e.width)/t.scaleW}return H(e,{width:384,height:2,internalFormat:e.RGBA32F,format:e.RGBA,type:e.FLOAT,data:n})}function nm(e,t){let n=t*2;return H(e,{width:32,height:n,internalFormat:e.R32F,format:e.RED,type:e.FLOAT,data:new Float32Array(32*n)})}function rm(e,t){let n=t*2;return H(e,{width:32,height:n,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:new Uint8Array(32*n)})}function im(e,t){return H(e,{width:9,height:t,internalFormat:e.RGBA32F,format:e.RGBA,type:e.FLOAT,data:new Float32Array(9*t*4)})}var am=`#version 300 es
precision highp float;

in vec2 vUV;
flat in int vBoxType;
flat in vec4 vColor;

out vec4 fragColor;

void main() {
  if (vColor.a <= 0.0) discard;

  if (vBoxType == 2) {
    // Center crosshair — draw a + shape, discard the four corner quadrants
    float cx = abs(vUV.x - 0.5);
    float cy = abs(vUV.y - 0.5);
    // Each arm is 0.15 wide (30% of half-width)
    if (cx > 0.15 && cy > 0.15) discard;
    fragColor = vColor;
  } else {
    // Wireframe border for name/flag boxes
    float borderWidth = 1.5;
    vec2 pixelSize = fwidth(vUV);
    vec2 border = borderWidth * pixelSize;

    if (vUV.x > border.x && vUV.x < 1.0 - border.x &&
        vUV.y > border.y && vUV.y < 1.0 - border.y) {
      discard;
    }
    fragColor = vColor;
  }
}
`,om=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec2 aPos; // unit quad [0,0]→[1,1]

uniform sampler2D uPlayerData;
uniform mat3  uCamera;
uniform float uTime;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uFontSize;
uniform float uFontBase;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;

// Flag layout (for computing flag box)
uniform float uFlagCellW;
uniform float uFlagCellH;

out vec2 vUV;
flat out int vBoxType; // 0=name, 1=flag, 2=center
flat out vec4 vColor;

void main() {
  // 3 debug boxes per player: 0=name, 1=flag, 2=center crosshair
  int playerIdx = gl_InstanceID / 3;
  int boxType   = gl_InstanceID - playerIdx * 3;

  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0);
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0);
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0);
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0);

  // Skip dead players
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vBoxType = -1;
    vColor = vec4(0.0);
    return;
  }

  // Lerped world position (same as name.vert.glsl)
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // Sizing pipeline (must match name.vert.glsl exactly)
  float baseSize      = max(1.0, floor(ws));
  float nameSize      = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale     = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;

  // Zoom-based culling
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize  = nameWorldScale * uFontBase * cameraScale;
  if (screenSize < uCullThreshold) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vBoxType = -1;
    vColor = vec4(0.0);
    return;
  }

  float nameHalfWidth = pd3.w;

  vec2 boxMin, boxMax;

  if (boxType == 0) {
    // Name text bounding box (green)
    float halfW = nameHalfWidth * nameWorldScale;
    float halfH = uFontBase * nameWorldScale * 0.5;
    boxMin = vec2(wx - halfW, wy - halfH);
    boxMax = vec2(wx + halfW, wy + halfH);
    vColor = vec4(0.0, 1.0, 0.0, 0.9);
  } else if (boxType == 1) {
    // Flag bounding box (yellow)
    float flagIdx = pd4.x;
    if (flagIdx < 0.0) {
      gl_Position = vec4(0.0);
      vUV = vec2(0.0);
      vBoxType = -1;
      vColor = vec4(0.0);
      return;
    }
    float halfW = nameHalfWidth * nameWorldScale;
    float flagWorldH = uFontBase * nameWorldScale * 1.2;
    float flagWorldW = flagWorldH * (uFlagCellW / uFlagCellH);
    boxMin = vec2(wx - halfW - flagWorldW, wy - flagWorldH * 0.5);
    boxMax = vec2(wx - halfW, wy + flagWorldH * 0.5);
    vColor = vec4(1.0, 1.0, 0.0, 0.9);
  } else {
    // Center crosshair (cyan) — fixed world size proportional to name
    float arm = uFontBase * nameWorldScale * 0.3;
    boxMin = vec2(wx - arm, wy - arm);
    boxMax = vec2(wx + arm, wy + arm);
    vColor = vec4(0.0, 1.0, 1.0, 1.0);
  }

  vUV = aPos;
  vBoxType = boxType;
  vec2 worldPos = mix(boxMin, boxMax, aPos);
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,sm=128,cm=85,lm=class{constructor(e,t,n,r){this.gl=e,this.playerDataTex=n,this.maxPlayers=r,this.program=W(e,om,am,`DebugProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),0),e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uFontBase`),t.base),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellW`),sm),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellH`),cm),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`)}draw(e,t,n){let r=this.gl,i=t.name;r.useProgram(this.program),r.uniformMatrix3fv(this.uCamera,!1,e),r.uniform1f(this.uTime,performance.now()/1e3),r.uniform1f(this.uLerpSpeed,i.lerpSpeed),r.uniform1f(this.uCullThreshold,i.cullThreshold),r.uniform1f(this.uNameScaleFactor,i.nameScaleFactor),r.uniform1f(this.uNameScaleCap,i.nameScaleCap),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.playerDataTex),r.bindVertexArray(n),r.drawArraysInstanced(r.TRIANGLES,0,6,this.maxPlayers*3)}dispose(){this.gl.deleteProgram(this.program)}},um=128,dm=class{constructor(e,t,n=128,r=85,i=um){this.cellW=n,this.cellH=r,this.nextLayer=0,this.disposed=!1,this.entries=new Map,this.gl=e,this.onLayerReady=t,this.hwMaxLayers=e.getParameter(e.MAX_ARRAY_TEXTURE_LAYERS),this.layerCount=Math.min(i,this.hwMaxLayers),this.tex=this.allocTexture(this.layerCount),this.canvas=document.createElement(`canvas`),this.canvas.width=this.cellW,this.canvas.height=this.cellH,this.ctx=this.canvas.getContext(`2d`,{willReadFrequently:!1})}allocTexture(e){let t=this.gl,n=t.createTexture();return t.bindTexture(t.TEXTURE_2D_ARRAY,n),t.texStorage3D(t.TEXTURE_2D_ARRAY,fm(this.cellW,this.cellH),t.RGBA8,this.cellW,this.cellH,e),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n}grow(){let e=Math.min(this.layerCount*2,this.hwMaxLayers);if(e<=this.layerCount)return!1;let t=this.gl,n=this.allocTexture(e),r=t.createFramebuffer();t.bindFramebuffer(t.READ_FRAMEBUFFER,r);for(let e=0;e<this.nextLayer;e++)t.framebufferTextureLayer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,this.tex,0,e),t.copyTexSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,e,0,0,this.cellW,this.cellH);return t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.deleteFramebuffer(r),t.generateMipmap(t.TEXTURE_2D_ARRAY),t.deleteTexture(this.tex),this.tex=n,this.layerCount=e,!0}get texture(){return this.tex}getLayer(e){let t=this.entries.get(e);return t&&t.ready?t.layer:-1}request(e){if(this.entries.has(e)||this.nextLayer>=this.layerCount&&!this.grow())return;let t=this.nextLayer++,n={layer:t,ready:!1};this.entries.set(e,n);let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>{if(this.disposed)return;this.ctx.clearRect(0,0,this.cellW,this.cellH);let i=r.width/r.height,a=this.cellW/this.cellH,o,s;i>a?(o=this.cellW,s=this.cellW/i):(s=this.cellH,o=this.cellH*i);let c=(this.cellW-o)*.5,l=(this.cellH-s)*.5;this.ctx.drawImage(r,c,l,o,s);let u=this.gl;u.bindTexture(u.TEXTURE_2D_ARRAY,this.tex),u.texSubImage3D(u.TEXTURE_2D_ARRAY,0,0,0,t,this.cellW,this.cellH,1,u.RGBA,u.UNSIGNED_BYTE,this.canvas),u.generateMipmap(u.TEXTURE_2D_ARRAY),n.ready=!0,this.onLayerReady(e,t)},r.onerror=()=>{console.warn(`Icon image failed to load:`,e)},r.src=e}dispose(){this.disposed=!0,this.gl.deleteTexture(this.tex),this.entries.clear()}};function fm(e,t){return Math.floor(Math.log2(Math.max(e,t)))+1}var pm=`#version 300 es
precision highp float;
precision highp sampler2DArray;

uniform sampler2DArray uFlagAtlas;
uniform sampler2D      uEmojiAtlas;
uniform float          uFlagAlpha;

in vec2 vUV;
flat in int vIconType;  // 0 = flag, 1 = emoji, -1 = discard
flat in int vFlagLayer;
in float vHoverAlpha;

out vec4 fragColor;

void main() {
  if (vIconType < 0) discard;

  vec4 texel;
  if (vIconType == 0) {
    texel = texture(uFlagAtlas, vec3(vUV, float(vFlagLayer)));
    texel.a *= uFlagAlpha;
  } else {
    texel = texture(uEmojiAtlas, vUV);
  }

  if (texel.a < 0.01) discard;
  fragColor = vec4(texel.rgb, texel.a * vHoverAlpha);
}
`,mm=`#version 300 es
precision highp float;
precision highp int;

// Unit quad vertex position [0,0]→[1,1]
layout(location = 0) in vec2 aPos;

// Data textures (shared with name shader)
uniform sampler2D uPlayerData; // PLAYER_DATA_COLS × MAX_PLAYERS, RGBA32F

// Uniforms
uniform mat3  uCamera;
uniform float uTime;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;
uniform float uFontSize;        // atlas reference font size (same as name shader's uFontSize)
uniform float uFontBase;        // atlas baseline height (same as name shader's uBase)

// Flag cell shape (fixed, matches FlagAtlasArray cell size)
uniform float uFlagCellW;
uniform float uFlagCellH;

// Emoji atlas layout
uniform float uEmojiCell;    // texels per emoji cell (square)
uniform float uEmojiCols;    // columns in emoji atlas
uniform float uEmojiAtlasW;  // emoji atlas texture width
uniform float uEmojiAtlasH;  // emoji atlas texture height

// Row offset (multiples of uFontBase * nameWorldScale)
uniform float uEmojiRowOffset;

uniform float uFadeOwnerID;    // smallID of player whose name plate the cursor is over (0 = none)
uniform float uHoverFadeAlpha; // alpha multiplier applied to that player's name plate

out vec2 vUV;
flat out int vIconType;  // 0 = flag, 1 = emoji, -1 = discard
flat out int vFlagLayer; // valid when vIconType == 0
out float vHoverAlpha;

void main() {
  // Decode instance ID → playerIdx + iconType (0=flag, 1=emoji)
  int playerIdx = gl_InstanceID / 2;
  int iconType  = gl_InstanceID - playerIdx * 2;

  // Read player data
  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0); // srcX, srcY, srcScale, startTime
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0); // tgtX, tgtY, tgtScale, alive
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0); // nameLen, troopLen, isHuman, nameHalfWidth
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0); // flagLayer, emojiIdx, smallID, doomsday

  // Early out: dead player
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vIconType = -1;
    vFlagLayer = 0;
    vHoverAlpha = 1.0;
    return;
  }

  // Get atlas/layer index for this icon type
  float atlasIdx = (iconType == 0) ? pd4.x : pd4.y;
  if (atlasIdx < 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vIconType = -1;
    vFlagLayer = 0;
    vHoverAlpha = 1.0;
    return;
  }

  // Lerped world position and size (same math as name.vert.glsl)
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // Sizing pipeline (must match name.vert.glsl exactly)
  float baseSize      = max(1.0, floor(ws));
  float nameSize      = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale     = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;

  // Zoom-based culling (same as name shader)
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize  = nameWorldScale * uFontBase * cameraScale;
  // Targeted players' flag/emoji stay visible at any zoom, boosted in
  // lockstep with name.vert.glsl so the row stays aligned and centered.
  if (texelFetch(uPlayerData, ivec2(6, playerIdx), 0).y > 0.5 &&
      screenSize < uCullThreshold) {
    float boost = uCullThreshold / screenSize;
    nameWorldScale *= boost;
    screenSize = uCullThreshold;
  }
  if (screenSize < uCullThreshold) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vIconType = -1;
    vFlagLayer = 0;
    vHoverAlpha = 1.0;
    return;
  }

  float nameHalfWidth = pd3.w; // in font units (pre-scaled by nameWorldScale at runtime)

  // Compute icon size and position based on type
  float iconW, iconH;
  vec2 iconOrigin;

  if (iconType == 0) {
    // FLAG — to the left of the name. Sampled from sampler2DArray; uses
    // plain [0,1] UVs and the layer is passed via vFlagLayer.
    float flagWorldH = uFontBase * nameWorldScale * 1.2;
    float flagWorldW = flagWorldH * (uFlagCellW / uFlagCellH);

    iconOrigin = vec2(
      wx - nameHalfWidth * nameWorldScale - flagWorldW,
      wy - flagWorldH * 0.5
    );
    iconW = flagWorldW;
    iconH = flagWorldH;

    vUV = aPos;
    vFlagLayer = int(atlasIdx);
  } else {
    // EMOJI — above the name. Sampled from a 2D atlas; compute grid UVs.
    float cellW  = uEmojiCell;
    float cellH  = uEmojiCell;
    float cols   = uEmojiCols;
    float atlasW = uEmojiAtlasW;
    float atlasH = uEmojiAtlasH;

    float emojiWorldSize = uFontBase * nameWorldScale * 1.1;

    // Read precomputed active status icon count from pd8.z (set by CPU, avoids
    // duplicating flag logic here and in status-icon.vert.glsl).
    vec4 pd8 = texelFetch(uPlayerData, ivec2(8, playerIdx), 0);
    int totalStatusActive = int(pd8.z);

    // Place emoji as rightmost slot in the combined group, or centered if alone.
    float gap = emojiWorldSize * 0.15;
    int totalItems = totalStatusActive + 1;
    float totalWidth = float(totalItems) * emojiWorldSize + float(totalItems - 1) * gap;
    float emojiX = wx - totalWidth * 0.5 + float(totalStatusActive) * (emojiWorldSize + gap);

    iconOrigin = vec2(emojiX, wy - uFontBase * nameWorldScale * uEmojiRowOffset);
    iconW = emojiWorldSize;
    iconH = emojiWorldSize;

    int idx = int(atlasIdx);
    int col = idx - (idx / int(cols)) * int(cols);
    int row = idx / int(cols);
    float u0 = float(col) * cellW / atlasW;
    float v0 = float(row) * cellH / atlasH;
    float u1 = u0 + cellW / atlasW;
    float v1 = v0 + cellH / atlasH;
    vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
    vFlagLayer = 0;
  }

  // Fade the icon along with the rest of the name plate when the cursor is
  // over any part of it. Hit test runs on the CPU (NamePass).
  vHoverAlpha = (uFadeOwnerID > 0.0 && pd4.z == uFadeOwnerID)
    ? uHoverFadeAlpha : 1.0;

  // Quad world position
  vec2 worldPos = iconOrigin + aPos * vec2(iconW, iconH);

  // Camera transform
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vIconType = iconType;
}
`,hm=R(`atlases/emoji-atlas.png`),gm=2,_m=class{constructor(e,t,n,r,i){this.emojiAtlasTex=null,this.emojiReady=!1,this.gl=e,this.playerDataTex=n,this.flagAtlas=r,this.maxPlayers=i,this.program=W(e,mm,pm,`IconProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),0),e.uniform1i(e.getUniformLocation(this.program,`uFlagAtlas`),1),e.uniform1i(e.getUniformLocation(this.program,`uEmojiAtlas`),2);let a=qp;e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uFontBase`),t.base),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellW`),128),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellH`),85),e.uniform1f(e.getUniformLocation(this.program,`uEmojiCell`),a.cellSize),e.uniform1f(e.getUniformLocation(this.program,`uEmojiCols`),a.cols),e.uniform1f(e.getUniformLocation(this.program,`uEmojiAtlasW`),a.width),e.uniform1f(e.getUniformLocation(this.program,`uEmojiAtlasH`),a.height),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`),this.uEmojiRowOffset=e.getUniformLocation(this.program,`uEmojiRowOffset`),this.uFadeOwnerID=e.getUniformLocation(this.program,`uFadeOwnerID`),this.uHoverFadeAlpha=e.getUniformLocation(this.program,`uHoverFadeAlpha`),this.uFlagAlpha=e.getUniformLocation(this.program,`uFlagAlpha`),this.loadEmojiAtlas()}get ready(){return this.emojiReady}loadEmojiAtlas(){let e=this.gl,t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),this.emojiAtlasTex=n,this.emojiReady=!0},t.src=hm}draw(e,t,n,r){if(!this.emojiReady)return;let i=this.gl,a=t.name;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform1f(this.uTime,performance.now()/1e3),i.uniform1f(this.uLerpSpeed,a.lerpSpeed),i.uniform1f(this.uCullThreshold,a.cullThreshold),i.uniform1f(this.uNameScaleFactor,a.nameScaleFactor),i.uniform1f(this.uNameScaleCap,a.nameScaleCap),i.uniform1f(this.uEmojiRowOffset,a.emojiRowOffset),i.uniform1f(this.uFadeOwnerID,r),i.uniform1f(this.uHoverFadeAlpha,a.hoverFadeAlpha),i.uniform1f(this.uFlagAlpha,a.flagAlpha),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.playerDataTex),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D_ARRAY,this.flagAtlas.texture),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D,this.emojiAtlasTex),i.bindVertexArray(n),i.drawArraysInstanced(i.TRIANGLES,0,6,this.maxPlayers*gm)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.emojiAtlasTex&&e.deleteTexture(this.emojiAtlasTex)}},vm={width:768,height:1024,cellSize:256,cols:3,pad:16,icons:{crown:0,traitor:1,disconnected:2,alliance:3,allianceRequest:4,target:5,embargo:6,nukeRed:7,nukeWhite:8,allianceFaded:9,doomsdayClock:10,verified:11}},ym=`#version 300 es
precision highp float;
precision highp sampler2DArray;

uniform sampler2D uStatusAtlas;
uniform sampler2DArray uCrownAtlas; // crown-cosmetic images (skins slot 0)
uniform vec2 uStatusTexel;     // 1/atlasW, 1/atlasH
uniform float uStatusOutlinePx; // outline radius in atlas texels (0 = off)

in vec2 vUV;
in vec2 vLocalUV;
flat in int vCrownLayer;
flat in int vDiscard;
flat in float vAllianceFraction;
flat in vec2 vFadedUV0;
flat in vec2 vFadedUV1;
flat in float vFlashAlpha;
flat in float vOutline;          // 1.0 = draw a dark outline behind this icon
flat in float vDecay;            // 1.0 = tint this icon red (decaying skull)
in float vHoverAlpha;

out vec4 fragColor;

// 8 unit directions for the outline dilation sample ring.
const vec2 kRing[8] = vec2[8](
  vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
  vec2(0.707, 0.707), vec2(-0.707, 0.707),
  vec2(0.707, -0.707), vec2(-0.707, -0.707)
);

void main() {
  if (vDiscard != 0) discard;

  // A crown cosmetic replaces the default first-place crown icon. Only slot 0
  // ever carries a layer, and its quad has no outline margin, so vLocalUV is
  // plain [0,1] over the icon.
  vec4 texel = (vCrownLayer >= 0)
    ? texture(uCrownAtlas, vec3(vLocalUV, float(vCrownLayer)))
    : texture(uStatusAtlas, vUV);

  // Alliance drain: composite faded icon behind colored icon, clipped by fraction.
  // Matches the game's CSS clip-path: inset(topCut% -2px 0 -2px) behavior.
  if (vAllianceFraction > 0.0) {
    // Game formula: topCut = 20 + (1-fraction) * 80 * 0.78  (% → 0..1)
    float topCut = 0.20 + (1.0 - vAllianceFraction) * 0.624;

    // Sample faded icon at corresponding local position
    vec2 fadedUV = mix(vFadedUV0, vFadedUV1, vLocalUV);
    vec4 fadedTexel = texture(uStatusAtlas, fadedUV);

    // Above the cut line → show faded; below → show colored
    texel = vLocalUV.y < topCut ? fadedTexel : texel;
  }

  // Decaying skull: tint red, keeping some luminance so its shading still reads.
  if (vDecay > 0.5) {
    float lum = dot(texel.rgb, vec3(0.299, 0.587, 0.114));
    texel.rgb = vec3(0.90, 0.10, 0.10) * (0.55 + 0.45 * lum);
  }

  // Traitor flash + hover fade: modulate alpha
  float fade = vFlashAlpha * vHoverAlpha;
  texel.a *= fade;

  // Dark outline: dilate the icon's alpha so it stays legible over terrain of a
  // similar color (the green alliance icon vs. irradiated land). Sampling the
  // padded atlas cell never reaches a neighbouring icon.
  if (vOutline > 0.5 && uStatusOutlinePx > 0.0) {
    float ring = 0.0;
    vec2 sampleStep = uStatusTexel * uStatusOutlinePx;
    for (int i = 0; i < 8; i++) {
      ring = max(ring, texture(uStatusAtlas, vUV + kRing[i] * sampleStep).a);
    }
    ring *= fade;
    float outlineA = ring * (1.0 - texel.a);
    texel = vec4(mix(vec3(0.0), texel.rgb, texel.a), max(texel.a, outlineA));
  }

  if (texel.a < 0.01) discard;
  fragColor = texel;
}
`,bm=`#version 300 es
precision highp float;
precision highp int;

// Unit quad vertex position [0,0]→[1,1]
layout(location = 0) in vec2 aPos;

// Data textures (shared with name shader)
uniform sampler2D uPlayerData; // 8 × MAX_PLAYERS, RGBA32F

// Uniforms
uniform mat3  uCamera;
uniform float uTime;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;
uniform float uFontSize;
uniform float uFontBase;

// Status atlas layout
uniform float uStatusCell;   // texels per cell (square)
uniform float uStatusCols;   // columns in atlas
uniform float uStatusAtlasW; // atlas texture width
uniform float uStatusAtlasH; // atlas texture height
uniform float uStatusPad;    // transparent padding in texels per side
uniform float uStatusOutlinePx; // dark-outline radius in atlas texels (0 = off)

// Configurable layout
uniform float uStatusRowOffset;  // row Y offset (multiples of uFontBase * nameWorldScale)

uniform float uFadeOwnerID;    // smallID of player whose name plate the cursor is over (0 = none)
uniform float uHoverFadeAlpha; // alpha multiplier applied to that player's name plate
uniform float uAllianceFlashWindowSec; // seconds before expiry the alliance icon flashes (= renewal prompt offset)

out vec2 vUV;
out vec2 vLocalUV;               // 0..1 within the icon cell
flat out int vCrownLayer;        // crown-cosmetic atlas layer for slot 0, or -1
flat out int vDiscard;
flat out float vAllianceFraction; // 0 = no drain effect, >0 = active drain
flat out vec2 vFadedUV0;         // top-left UV of faded alliance cell
flat out vec2 vFadedUV1;         // bottom-right UV of faded alliance cell
flat out float vFlashAlpha;      // traitor flash opacity (1.0 = fully visible)
flat out float vOutline;         // 1.0 = alliance icon, draw a dark outline
flat out float vDecay;           // 1.0 = doomsday skull is DECAYING -> tint red
out float vHoverAlpha;

// Status flag float array — indexed by icon slot.
// Slot mapping: 0=crown, 1=traitor, 2=disconnected, 3=alliance,
//               4=allianceReq, 5=target, 6=embargo, 7=nukeActive, 8=doomsdayClock
float statusFlag[9];

// Read status flags from pd4.w/pd5/pd6 into the statusFlag array.
void readStatusFlags(int playerIdx) {
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0);
  vec4 pd5 = texelFetch(uPlayerData, ivec2(5, playerIdx), 0);
  vec4 pd6 = texelFetch(uPlayerData, ivec2(6, playerIdx), 0);
  statusFlag[0] = pd5.x; // crown
  statusFlag[1] = pd5.y; // traitor
  statusFlag[2] = pd5.z; // disconnected
  statusFlag[3] = pd5.w; // alliance
  statusFlag[4] = pd6.x; // allianceReq
  statusFlag[5] = pd6.y; // target
  statusFlag[6] = pd6.z; // embargo
  statusFlag[7] = pd6.w; // nukeActive
  statusFlag[8] = pd4.w; // doomsdayClock
}

// Count active icons with index < pos.
int countBelow(int pos) {
  int count = 0;
  for (int i = 0; i < pos; i++) {
    if (statusFlag[i] > 0.5) count++;
  }
  return count;
}

// Compute padded UV rect for an atlas cell.
// Returns (u0, v0) in xy and (u1, v1) in zw, inset by pad pixels.
vec4 cellUV(int idx) {
  int col = idx - (idx / int(uStatusCols)) * int(uStatusCols);
  int row = idx / int(uStatusCols);
  float u0 = (float(col) * uStatusCell + uStatusPad) / uStatusAtlasW;
  float v0 = (float(row) * uStatusCell + uStatusPad) / uStatusAtlasH;
  float iconSize = uStatusCell - 2.0 * uStatusPad;
  float u1 = u0 + iconSize / uStatusAtlasW;
  float v1 = v0 + iconSize / uStatusAtlasH;
  return vec4(u0, v0, u1, v1);
}

void main() {
  // Decode instance ID → playerIdx + iconSlot (0..8 status row, 9 = verified
  // badge to the right of the name)
  int playerIdx = gl_InstanceID / 10;
  int iconSlot  = gl_InstanceID - playerIdx * 10;
  bool isVerifiedSlot = (iconSlot == 9);

  // Read player data
  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0); // srcX, srcY, srcScale, startTime
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0); // tgtX, tgtY, tgtScale, alive
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0); // nameLen, troopLen, nameShade, nameHalfWidth
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0); // flagIdx, emojiIdx, smallID, [free]
  vec4 pd7 = texelFetch(uPlayerData, ivec2(7, playerIdx), 0); // nukeTargetsMe, traitorRemainingTicks, allianceFraction, allianceRemainingTicks
  vec4 pd8 = texelFetch(uPlayerData, ivec2(8, playerIdx), 0); // crownLayer, verified, [free]

  // A crown cosmetic skins the first-place crown (slot 0).
  vCrownLayer = (iconSlot == 0 && pd8.x >= 0.0) ? int(pd8.x) : -1;

  vDecay = 0.0; // only the decaying doomsday skull raises this

  // Early out: dead player only (emoji no longer hides status icons)
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vLocalUV = vec2(0.0);
    vDiscard = 1;
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
    vFlashAlpha = 1.0;
    vOutline = 0.0;
    vHoverAlpha = 1.0;
    return;
  }

  // Read status flags into array
  readStatusFlags(playerIdx);

  // Early out: this icon slot is inactive. The verified badge (slot 9) is
  // driven by pd8.y, not the status-row flag array.
  bool slotActive = isVerifiedSlot ? (pd8.y > 0.5) : (statusFlag[iconSlot] > 0.5);
  if (!slotActive) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vLocalUV = vec2(0.0);
    vDiscard = 1;
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
    vFlashAlpha = 1.0;
    vOutline = 0.0;
    vHoverAlpha = 1.0;
    return;
  }

  // Lerped world position and size (same math as name.vert.glsl)
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // Sizing pipeline (must match name.vert.glsl exactly)
  float baseSize      = max(1.0, floor(ws));
  float nameSize      = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale     = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;

  // Zoom-based culling (same as name shader)
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize  = nameWorldScale * uFontBase * cameraScale;
  // Targeted players' icons (incl. the crosshair) stay visible at any zoom,
  // boosted in lockstep with name.vert.glsl so the layout stays aligned.
  if (statusFlag[5] > 0.5 && screenSize < uCullThreshold) {
    float boost = uCullThreshold / screenSize;
    nameWorldScale *= boost;
    screenSize = uCullThreshold;
  }
  if (screenSize < uCullThreshold) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vLocalUV = vec2(0.0);
    vDiscard = 1;
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
    vFlashAlpha = 1.0;
    vOutline = 0.0;
    vHoverAlpha = 1.0;
    return;
  }

  // Icon world size: matches name text height
  float iconWorldSize = uFontBase * nameWorldScale * 1.1;

  float iconX;
  float iconY;
  if (isVerifiedSlot) {
    // Verified badge: small mark tucked against the name's top-right corner,
    // like a superscript. The name line spans wy +- 0.5 * lineHeight; the
    // badge is raised so its lower half overlaps the line's top edge.
    float lineHeight = uFontBase * nameWorldScale;
    iconWorldSize = lineHeight * 0.55;
    iconX = wx + pd3.w * nameWorldScale - lineHeight * 0.04;
    iconY = wy - lineHeight * 0.5 - iconWorldSize * 0.5;
  } else {
    // Count active status icons and position of this one (left-to-right).
    // If an emoji is also active it occupies one extra slot on the right,
    // so include it in the total for centering purposes.
    // totalActive is precomputed by the CPU into pd8.z — single source of truth.
    int totalActive = int(pd8.z);
    bool hasEmoji = (pd4.y >= 0.0);
    int totalItems = totalActive + (hasEmoji ? 1 : 0);
    int myIndex = countBelow(iconSlot);

    // Horizontal centering: treat status icons + emoji as one group.
    float gap = iconWorldSize * 0.15;
    float totalWidth = float(totalItems) * iconWorldSize + float(totalItems - 1) * gap;
    float startX = wx - totalWidth * 0.5;
    iconX = startX + float(myIndex) * (iconWorldSize + gap);

    // Position: same row as the emoji
    iconY = wy - uFontBase * nameWorldScale * uStatusRowOffset;
  }

  // Determine atlas index
  // Slots 0-6 map directly to atlas indices 0-6
  // Slot 7 (nuke): use nukeRed (7) if nukeTargetsMe, else nukeWhite (8)
  int atlasIdx = iconSlot;
  if (iconSlot == 7) {
    atlasIdx = (pd7.x > 0.5) ? 7 : 8;
  }
  if (iconSlot == 8) {
    atlasIdx = 10; // doomsday-clock skull
  }
  if (isVerifiedSlot) {
    atlasIdx = 11; // blue verified check
  }

  // Only the alliance icon (slot 3) gets the dark outline.
  vOutline = (iconSlot == 3) ? 1.0 : 0.0;

  // Fade the status row along with the rest of the name plate when the cursor
  // is over any part of it. Hit test runs on the CPU (NamePass).
  vHoverAlpha = (uFadeOwnerID > 0.0 && pd4.z == uFadeOwnerID)
    ? uHoverFadeAlpha : 1.0;

  // Dark-outline margin: grow the alliance icon's quad outward into the cell's
  // transparent padding so the outline halo isn't clipped at the quad edge.
  // The icon content keeps its size; only the quad's bounding box grows. Other
  // icons keep marginWorld = 0 and render pixel-identically.
  float iconTexels = uStatusCell - 2.0 * uStatusPad;
  float marginTex = (vOutline > 0.5 && uStatusOutlinePx > 0.0)
    ? min(uStatusPad - 2.0, uStatusOutlinePx + 2.0)
    : 0.0;
  float marginWorld = marginTex * (iconWorldSize / iconTexels);

  // Quad world position (expanded by the outline margin, centred on the icon)
  vec2 iconOrigin = vec2(iconX, iconY) - vec2(marginWorld);
  float quadSize = iconWorldSize + 2.0 * marginWorld;
  vec2 worldPos = iconOrigin + aPos * vec2(quadSize, quadSize);

  // Camera transform
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // vLocalUV in icon-content space: 0..1 over the icon, <0/>1 in the outline
  // margin. This keeps the drain math below unchanged and samples the
  // transparent padding (never a neighbour) when the quad is expanded.
  vLocalUV = (aPos * quadSize - marginWorld) / iconWorldSize;

  // UV from atlas grid (padded to avoid mipmap bleed)
  vec4 uv = cellUV(atlasIdx);
  vUV = vec2(mix(uv.x, uv.z, vLocalUV.x), mix(uv.y, uv.w, vLocalUV.y));

  // Alliance drain: slot 3 = alliance icon
  float allianceFrac = pd7.z;
  if (iconSlot == 3 && allianceFrac > 0.0 && allianceFrac < 1.0) {
    vAllianceFraction = allianceFrac;
    // Faded alliance icon is at atlas index 9
    vec4 fadedUV = cellUV(9);
    vFadedUV0 = fadedUV.xy;
    vFadedUV1 = fadedUV.zw;
  } else {
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
  }

  // Traitor flash: slot 1 = traitor icon
  // Frequency ramps linearly from 2 Hz (at 15s) to 5 Hz (at 0s).
  // Phase = uTime*2 + elapsed²*0.1 — the quadratic term adds smooth
  // acceleration without phase discontinuities between ticks.
  vFlashAlpha = 1.0;
  if (iconSlot == 1) {
    float remaining = pd7.y;                          // ticks (0-300, 10/sec)
    float remainingSec = remaining / 10.0;             // seconds
    if (remainingSec <= 15.0 && remainingSec > 0.0) {
      float elapsed = 15.0 - remainingSec;
      float phase = uTime * 2.0 + elapsed * elapsed * 0.1;
      vFlashAlpha = 0.3 + 0.7 * (0.5 + 0.5 * cos(phase * 6.2832));
    }
  }

  // Alliance expiry flash: slot 3 = alliance icon
  // Window matches the renewal prompt offset so the icon flashes exactly
  // while the prompt is up. Same pulse as the traitor flash (2 Hz → 5 Hz).
  if (iconSlot == 3) {
    float window = uAllianceFlashWindowSec;
    float remainingSec = pd7.w / 10.0;                 // ticks → seconds
    if (window > 0.0 && remainingSec <= window && remainingSec > 0.0) {
      float elapsed = window - remainingSec;
      float phase = uTime * 2.0 + elapsed * elapsed * (1.5 / window);
      vFlashAlpha = 0.3 + 0.7 * (0.5 + 0.5 * cos(phase * 6.2832));
    }
  }

  // Doomsday Clock skull: slot 8. While in danger (flag 1.0-1.49) the skull
  // blinks and speeds up as the warn countdown runs out — the progress 0->1 is
  // packed into the flag's fraction. Base ~2 Hz plus a p^2 phase term so it
  // accelerates toward the drain (same trick as the alliance-renewal flash
  // above, which keeps the phase continuous). Holds steady once draining (>=1.5).
  if (iconSlot == 8) {
    if (statusFlag[8] < 1.5) {
      float p = clamp((statusFlag[8] - 1.0) / 0.49, 0.0, 1.0);
      float phase = uTime * 2.0 + p * p * 40.0;
      vFlashAlpha = 0.35 + 0.65 * (0.5 + 0.5 * cos(phase * 6.2832));
    } else {
      vFlashAlpha = 1.0;
    }
    // 3.0 = decaying: steady like draining, but tinted red.
    if (statusFlag[8] > 2.5) vDecay = 1.0;
  }

  vDiscard = 0;
}
`,xm=R(`atlases/status-atlas.png`),Sm=10,Cm=class{constructor(e,t,n,r,i,a){this.crownAtlas=r,this.statusAtlasTex=null,this.atlasReady=!1,this.gl=e,this.playerDataTex=n,this.maxPlayers=i,this.program=W(e,bm,ym,`StatusIconProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),0),e.uniform1i(e.getUniformLocation(this.program,`uStatusAtlas`),1),e.uniform1i(e.getUniformLocation(this.program,`uCrownAtlas`),2);let o=vm;e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uFontBase`),t.base),e.uniform1f(e.getUniformLocation(this.program,`uStatusCell`),o.cellSize),e.uniform1f(e.getUniformLocation(this.program,`uStatusCols`),o.cols),e.uniform1f(e.getUniformLocation(this.program,`uStatusAtlasW`),o.width),e.uniform1f(e.getUniformLocation(this.program,`uStatusAtlasH`),o.height),e.uniform1f(e.getUniformLocation(this.program,`uStatusPad`),o.pad??0),e.uniform2f(e.getUniformLocation(this.program,`uStatusTexel`),1/o.width,1/o.height),e.uniform1f(e.getUniformLocation(this.program,`uAllianceFlashWindowSec`),a/10),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`),this.uStatusRowOffset=e.getUniformLocation(this.program,`uStatusRowOffset`),this.uFadeOwnerID=e.getUniformLocation(this.program,`uFadeOwnerID`),this.uHoverFadeAlpha=e.getUniformLocation(this.program,`uHoverFadeAlpha`),this.uStatusOutlinePx=e.getUniformLocation(this.program,`uStatusOutlinePx`),this.loadAtlas()}loadAtlas(){let e=this.gl,t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),this.statusAtlasTex=n,this.atlasReady=!0},t.src=xm}draw(e,t,n,r){if(!this.atlasReady)return;let i=this.gl,a=t.name;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform1f(this.uTime,performance.now()/1e3),i.uniform1f(this.uLerpSpeed,a.lerpSpeed),i.uniform1f(this.uCullThreshold,a.cullThreshold),i.uniform1f(this.uNameScaleFactor,a.nameScaleFactor),i.uniform1f(this.uNameScaleCap,a.nameScaleCap),i.uniform1f(this.uStatusRowOffset,a.statusRowOffset),i.uniform1f(this.uFadeOwnerID,r),i.uniform1f(this.uHoverFadeAlpha,a.hoverFadeAlpha),i.uniform1f(this.uStatusOutlinePx,a.statusOutlineWidth),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.playerDataTex),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,this.statusAtlasTex),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D_ARRAY,this.crownAtlas.texture),i.bindVertexArray(n),i.drawArraysInstanced(i.TRIANGLES,0,6,this.maxPlayers*Sm)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.statusAtlasTex&&e.deleteTexture(this.statusAtlasTex)}};function wm(e,t,n,r,i){r.fill(0),i.fill(0);let a=Math.min(e.length,32);for(let t=0;t<a;t++)r[t]=e.charCodeAt(t);let o=0,s=0;for(let e=0;e<a;e++){let a=r[e];i[e]=o;let c=t.advance[a];e>0&&(c+=n[s*384+a]),o+=c,s=a}let c=r[0],l=r[a-1],u=i[0]+t.xOffset[c],d=i[a-1]+t.xOffset[l]+t.visW[l],f=(u+d)*.5;for(let e=0;e<a;e++)i[e]-=f;return(d-u)*.5}var Tm=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;
uniform float uDistRange;
uniform float uOutlineWidth;
uniform float uNightAmbient;
uniform vec3  uOutlineColor;
uniform float uOutlineUsePlayerColor;
uniform float uFillUsePlayerColor;
uniform float uHoverGlowWidth; // px the white hover glow extends past the outline
uniform float uHoverGlowAlpha; // peak opacity of the hover glow

in vec2 vUV;
in vec4 vPlayerColor;   // player territory color (rgb) + alpha
in float vNameShade;      // name fill grayscale shade (0.0 = black)
flat in float vHighlight; // 1.0 when this player is hovered (white glow)
out vec4 fragColor;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  // Degenerate fragment — skip
  if (vPlayerColor.a <= 0.0) discard;

  // Border darkens with night: t² stays dark longer, snaps toward the
  // outline color late in the day cycle.
  float t = 1.0 - uNightAmbient;
  float borderT = t * t;

  // Compute fill color: player color, or per-type grayscale shade
  // (black for human, grayer for nation/bot). Applies in day and night.
  vec3 defaultFill = vec3(vNameShade);
  vec3 fillColor = mix(defaultFill, vPlayerColor.rgb, uFillUsePlayerColor);

  vec3 msd = texture(uAtlas, vUV).rgb;
  float sd = median(msd.r, msd.g, msd.b);

  vec2 unitRange = uDistRange / vec2(textureSize(uAtlas, 0));
  vec2 screenTexSize = 1.0 / fwidth(vUV);
  float screenPxRange = max(0.5 * dot(unitRange, screenTexSize), 1.0);

  float screenPxDist = screenPxRange * (sd - 0.5);
  float fillAlpha = clamp(screenPxDist + 0.5, 0.0, 1.0);

  // The SDF saturates at sd=0 (screenPxDist = -screenPxRange*0.5).
  // Reserve a 1px margin so saturated fragments always get alpha=0.
  float maxOutline = max(screenPxRange * 0.5 - 1.0, 0.0);
  float effectiveOutline = min(uOutlineWidth, maxOutline);

  vec3 color;
  float coverage;
  if (uOutlineWidth > 0.0) {
    float outlineDist = screenPxDist + effectiveOutline;
    float outlineAlpha = clamp(outlineDist + 0.5, 0.0, 1.0);

    vec3 nightOutlineColor = mix(vec3(0.0), uOutlineColor, borderT);
    vec3 borderColor = mix(nightOutlineColor, vPlayerColor.rgb, uOutlineUsePlayerColor);
    color = mix(borderColor, fillColor, fillAlpha);
    coverage = outlineAlpha;
  } else {
    color = fillColor;
    coverage = fillAlpha;
  }

  // Soft white glow behind the hovered player's name. Width is clamped to
  // the SDF margin past the outline so it never hard-clips at the quad edge.
  if (vHighlight > 0.5 && uHoverGlowAlpha > 0.0) {
    float glowWidth = min(uHoverGlowWidth, max(maxOutline - effectiveOutline, 0.0));
    if (glowWidth > 0.0) {
      float g = clamp(1.0 + (screenPxDist + effectiveOutline) / glowWidth, 0.0, 1.0);
      float glowAlpha = g * g * uHoverGlowAlpha;
      float total = coverage + glowAlpha * (1.0 - coverage);
      if (total > 0.0) {
        color = mix(vec3(1.0), color, coverage / total);
        coverage = total;
      }
    }
  }

  fragColor = vec4(color, vPlayerColor.a * coverage);
}
`,Em=`#version 300 es
precision highp float;
precision highp int;
precision highp usampler2D;

// Unit quad vertex position [0,0]→[1,1]
layout(location = 0) in vec2 aPos;

// Data textures
uniform sampler2D  uGlyphMetrics;  // CHAR_RANGE × 2, RGBA32F
uniform sampler2D  uCursorX;       // MAX_CHARS × (MAX_PLAYERS*2), R32F — pre-computed centered cursor X
uniform usampler2D uStrings;       // MAX_CHARS × (MAX_PLAYERS*2), R8UI
uniform sampler2D  uPlayerData;    // 4 × MAX_PLAYERS, RGBA32F

// Uniforms
uniform mat3  uCamera;
uniform float uTime;
uniform float uFontSize;    // atlas reference font size
uniform float uAtlasScaleW; // atlas texture width
uniform float uAtlasScaleH; // atlas texture height
uniform float uBase;        // atlas baseline height

const int MAX_CHARS_PER_LINE = MAX_CHARS;
const int LINES = LINES_PER_PLAYER;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;
uniform float uTroopSizeMultiplier;
uniform float uHighlightOwnerID;
uniform float uFadeOwnerID;    // smallID of player whose name plate the cursor is over (0 = none)
uniform float uHoverFadeAlpha; // alpha multiplier applied to that player's name plate

out vec2 vUV;
out vec4 vPlayerColor;  // player territory color (rgb) + alpha
out float vNameShade;     // name fill grayscale shade (0.0 = black)
flat out float vHighlight; // 1.0 when this player is hovered (white glow)

void main() {
  // 1. Decode instance ID → playerIdx, lineIdx, charPos
  int slotsPerPlayer = LINES * MAX_CHARS_PER_LINE;
  int playerIdx = gl_InstanceID / slotsPerPlayer;
  int remainder = gl_InstanceID - playerIdx * slotsPerPlayer;
  int lineIdx   = remainder / MAX_CHARS_PER_LINE;
  int charPos   = remainder - lineIdx * MAX_CHARS_PER_LINE;

  // 2. Read player data
  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0); // srcX, srcY, srcScale, startTime
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0); // tgtX, tgtY, tgtScale, alive
  vec4 pd2 = texelFetch(uPlayerData, ivec2(2, playerIdx), 0); // r, g, b, a
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0); // nameLen, troopLen, nameShade, nameHalfWidth
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0); // flagLayerIdx, emojiAtlasIdx, smallID, 0
  float smallID = pd4.z;

  // Early out: dead player
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // String length for this line
  int len = (lineIdx == 0) ? int(pd3.x) : int(pd3.y);
  if (charPos >= len) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 3. Read char code at this position
  int stringRow = playerIdx * LINES + lineIdx;
  uint charCode = texelFetch(uStrings, ivec2(charPos, stringRow), 0).r;
  if (charCode == 0u) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 4. Compute lerped world position and size
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // 5. Sizing pipeline (matches NameLayer.ts)
  float baseSize  = max(1.0, floor(ws));
  float nameSize  = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;
  float worldScale = nameWorldScale;

  bool isHighlighted = uHighlightOwnerID > 0.0 && smallID == uHighlightOwnerID;

  // Targeted players' names must stay findable at any zoom (pd6.y = target
  // status flag; the crosshair in status-icon.vert.glsl matches this).
  bool isTargeted = texelFetch(uPlayerData, ivec2(6, playerIdx), 0).y > 0.5;

  // Troop count is smaller
  if (lineIdx == 1) {
    worldScale *= uTroopSizeMultiplier;
  }

  // Zoom-based culling: compute screen-space size and skip if too small.
  // Highlighted (hovered) names bypass the cull so they're always visible.
  // uCamera[0][0] is the x-scale component of the camera matrix
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize = nameWorldScale * uBase * cameraScale;
  // Targeted names bypass the cull, boosted to the smallest size that
  // survives it, so a mark set from across the map is still visible.
  if (isTargeted && screenSize < uCullThreshold) {
    float boost = uCullThreshold / screenSize;
    nameWorldScale *= boost;
    worldScale *= boost;
    screenSize = uCullThreshold;
  }
  if (screenSize < uCullThreshold && !isHighlighted) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 6. Read pre-computed centered cursor X position
  float cursorX = texelFetch(uCursorX, ivec2(charPos, stringRow), 0).r;

  // 7. Glyph metrics for this character
  vec4 m0 = texelFetch(uGlyphMetrics, ivec2(int(charCode), 0), 0); // xadvance, xoffset, yoffset, width
  vec4 m1 = texelFetch(uGlyphMetrics, ivec2(int(charCode), 1), 0); // height, atlasU0, atlasV0, atlasU1
  // atlasV1 packed: we need 5 values from 2 RGBA texels (8 slots), so atlasV1 is in m0 slot?
  // Actually let's use: m0=(xadvance, xoffset, yoffset, width), m1=(height, u0, v0, u1), and compute v1
  float glyphW = m0.w;
  float glyphH = m1.x;
  float u0 = m1.y;
  float v0 = m1.z;
  float u1 = m1.w;
  float v1 = v0 + glyphH / uAtlasScaleH;

  // Degenerate if glyph has no size (e.g. space)
  if (glyphW <= 0.0 || glyphH <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 8. Compute world-space quad position
  float baselineY = -uBase * 0.5; // center vertically
  // Use name-line scale for offset so troops sit below the name, not overlapping
  float lineOffsetY = (lineIdx == 1) ? uBase * nameWorldScale * 1.1 : 0.0;

  vec2 glyphOrigin = vec2(
    cursorX + m0.y,  // + xoffset
    baselineY + m0.z // + yoffset
  ) * worldScale;

  vec2 glyphSize = vec2(glyphW, glyphH) * worldScale;

  vec2 worldPos = vec2(wx, wy + lineOffsetY) + glyphOrigin + aPos * glyphSize;

  // 9. Camera transform
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // 10. Fade the whole name plate when the cursor is on top of any part of it
  // so units underneath stay visible. Hit test runs on the CPU (NamePass).
  float hoverAlpha = (uFadeOwnerID > 0.0 && smallID == uFadeOwnerID)
    ? uHoverFadeAlpha : 1.0;

  // 11. UV interpolation across quad
  vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
  vPlayerColor = vec4(pd2.rgb, pd2.a * hoverAlpha); // player territory color + alpha
  vNameShade = pd3.z;         // name fill grayscale shade (0.0 = black)
  vHighlight = isHighlighted ? 1.0 : 0.0;
}
`,Dm=R(`atlases/msdf-atlas.png`),Om=class{constructor(e,t,n){this.atlasTex=null,this.atlasReady=!1,this.gl=e,this.textures=n,this.distanceRange=t.distanceRange,this.program=W(e,U(Em,{MAX_CHARS:32,LINES_PER_PLAYER:2}),Tm,`TextProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),e.uniform1i(e.getUniformLocation(this.program,`uGlyphMetrics`),1),e.uniform1i(e.getUniformLocation(this.program,`uCursorX`),2),e.uniform1i(e.getUniformLocation(this.program,`uStrings`),3),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),4),e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uAtlasScaleW`),t.scaleW),e.uniform1f(e.getUniformLocation(this.program,`uAtlasScaleH`),t.scaleH),e.uniform1f(e.getUniformLocation(this.program,`uBase`),t.base),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uDistRange=e.getUniformLocation(this.program,`uDistRange`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`),this.uTroopSizeMultiplier=e.getUniformLocation(this.program,`uTroopSizeMultiplier`),this.uHighlightOwnerID=e.getUniformLocation(this.program,`uHighlightOwnerID`),this.uFadeOwnerID=e.getUniformLocation(this.program,`uFadeOwnerID`),this.uHoverFadeAlpha=e.getUniformLocation(this.program,`uHoverFadeAlpha`),this.uOutlineWidth=e.getUniformLocation(this.program,`uOutlineWidth`),this.uNightAmbient=e.getUniformLocation(this.program,`uNightAmbient`),this.uOutlineColor=e.getUniformLocation(this.program,`uOutlineColor`),this.uOutlineUsePlayerColor=e.getUniformLocation(this.program,`uOutlineUsePlayerColor`),this.uFillUsePlayerColor=e.getUniformLocation(this.program,`uFillUsePlayerColor`),this.uHoverGlowWidth=e.getUniformLocation(this.program,`uHoverGlowWidth`),this.uHoverGlowAlpha=e.getUniformLocation(this.program,`uHoverGlowAlpha`),this.loadAtlas()}get ready(){return this.atlasReady}loadAtlas(){let e=this.gl,t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),this.atlasTex=n,this.atlasReady=!0},t.src=Dm}draw(e,t,n,r,i,a,o){if(!this.atlasReady)return;let s=this.gl,c=t.name;s.useProgram(this.program),s.uniformMatrix3fv(this.uCamera,!1,e),s.uniform1f(this.uTime,performance.now()/1e3),s.uniform1f(this.uDistRange,this.distanceRange),s.uniform1f(this.uLerpSpeed,c.lerpSpeed),s.uniform1f(this.uCullThreshold,c.cullThreshold),s.uniform1f(this.uNameScaleFactor,c.nameScaleFactor),s.uniform1f(this.uNameScaleCap,c.nameScaleCap),s.uniform1f(this.uTroopSizeMultiplier,c.troopSizeMultiplier),s.uniform1f(this.uHighlightOwnerID,a),s.uniform1f(this.uFadeOwnerID,o),s.uniform1f(this.uHoverFadeAlpha,c.hoverFadeAlpha),s.uniform1f(this.uOutlineWidth,c.outlineWidth),s.uniform1f(this.uNightAmbient,i),s.uniform3f(this.uOutlineColor,c.outlineR,c.outlineG,c.outlineB),s.uniform1f(this.uOutlineUsePlayerColor,+!!c.outlineUsePlayerColor),s.uniform1f(this.uFillUsePlayerColor,+!!c.fillUsePlayerColor),s.uniform1f(this.uHoverGlowWidth,c.hoverGlowWidth),s.uniform1f(this.uHoverGlowAlpha,c.hoverGlowAlpha),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,this.atlasTex),s.activeTexture(s.TEXTURE1),s.bindTexture(s.TEXTURE_2D,this.textures.glyphMetrics),s.activeTexture(s.TEXTURE2),s.bindTexture(s.TEXTURE_2D,this.textures.cursor),s.activeTexture(s.TEXTURE3),s.bindTexture(s.TEXTURE_2D,this.textures.strings),s.activeTexture(s.TEXTURE4),s.bindTexture(s.TEXTURE_2D,this.textures.playerData),s.bindVertexArray(n),s.drawArraysInstanced(s.TRIANGLES,0,6,r*2*32)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.atlasTex&&e.deleteTexture(this.atlasTex)}},km=128/85,Am=128,jm=32,Mm=class e{static{this.UPDATE_SLICES=4}constructor(e,t,n,r,i){this.slots=new Map,this.playerColors=new Map,this.slotsWaitingForFlag=new Map,this.slotsWaitingForCrown=new Map,this.playerDataDirty=!1,this.stringDataDirty=!1,this.cursorDataDirty=!1,this.slicePhase=0,this.highlightOwnerID=0,this.mouseWorldX=-1e9,this.mouseWorldY=-1e9,this.gl=e,this.settings=r,this.maxPlayers=t.maxPlayers??t.players.length;let a=Zp();this.fontSize=a.fontSize,this.fontBase=a.base,this.glyph=Qp(a.chars),this.kernTable=$p(a.kernings),this.emojiCharToIndex=em(),this.flagAtlas=new dm(e,(e,t)=>{let n=this.slotsWaitingForFlag.get(e);if(n){this.slotsWaitingForFlag.delete(e);for(let r of n)r.flagUrl===e&&(r.flagLayerIdx=t,this.writePlayerDataRow(r))}}),this.crownAtlas=new dm(e,(e,t)=>{let n=this.slotsWaitingForCrown.get(e);if(n){this.slotsWaitingForCrown.delete(e);for(let r of n)r.crownUrl===e&&(r.crownLayerIdx=t,this.writePlayerDataRow(r))}},Am,Am,jm),this.playerByID=new Map;for(let e of t.players){this.playerByID.set(e.id,e);let t=e.smallID*4;this.playerColors.set(e.id,[n[t],n[t+1],n[t+2]])}let o=this.maxPlayers*2;this.cpuPlayerData=new Float32Array(9*this.maxPlayers*4),this.cpuStringData=new Uint8Array(32*o),this.cpuCursorData=new Float32Array(32*o),this.stringRow=new Uint8Array(32),this.cursorRow=new Float32Array(32),this.vao=mt(e),this.glyphMetricsTex=tm(e,a),this.cursorTex=nm(e,this.maxPlayers),this.stringTex=rm(e,this.maxPlayers),this.playerDataTex=im(e,this.maxPlayers),this.textProgram=new Om(e,a,{glyphMetrics:this.glyphMetricsTex,cursor:this.cursorTex,strings:this.stringTex,playerData:this.playerDataTex}),this.iconProgram=new _m(e,a,this.playerDataTex,this.flagAtlas,this.maxPlayers),this.statusIconProgram=new Cm(e,a,this.playerDataTex,this.crownAtlas,this.maxPlayers,i.allianceExtensionPromptOffset()),this.debugProgram=new lm(e,a,this.playerDataTex,this.maxPlayers)}addPlayers(e,t){for(let n of e){if(this.playerByID.has(n.id))continue;this.playerByID.set(n.id,n);let e=n.smallID*4;this.playerColors.set(n.id,[t[e],t[e+1],t[e+2]])}}refreshPlayerColors(e){for(let[t,n]of this.playerByID){let r=n.smallID*4;this.playerColors.set(t,[e[r],e[r+1],e[r+2]])}for(let e of this.slots.values())this.writePlayerDataRow(e)}refreshNames(e){for(let[t,n]of e){let e=this.playerByID.get(t);if(e===void 0)continue;e.displayName=n;let r=this.slots.get(t);r!==void 0&&(r.nameLen=0)}}updatePlayerCosmetics(e){for(let t of e){let e=this.playerByID.get(t.id);if(e===void 0)continue;e.flag=t.flag,e.crown=t.crown;let n=this.slots.get(t.id);n!==void 0&&(n.flagUrl!==t.flag&&(n.flagUrl=t.flag,n.flagLayerIdx=-1,this.resolveSlotFlag(n)),n.crownUrl!==t.crown&&(n.crownUrl=t.crown,n.crownLayerIdx=-1,this.resolveSlotCrown(n)),this.writePlayerDataRow(n))}}resolveSlotFlag(e){let t=e.flagUrl;if(!t)return;this.flagAtlas.request(t);let n=this.flagAtlas.getLayer(t);if(n>=0){e.flagLayerIdx=n;return}let r=this.slotsWaitingForFlag.get(t);r||(r=new Set,this.slotsWaitingForFlag.set(t,r)),r.add(e)}resolveSlotCrown(e){let t=e.crownUrl;if(!t)return;this.crownAtlas.request(t);let n=this.crownAtlas.getLayer(t);if(n>=0){e.crownLayerIdx=n;return}let r=this.slotsWaitingForCrown.get(t);r||(r=new Set,this.slotsWaitingForCrown.set(t,r)),r.add(e)}updateNames(t,n,r,i){let a=performance.now()/1e3;if(this.slots.size!==this.playerByID.size){let e=0;for(let t of this.playerByID.values())if(this.slots.has(t.id))e=Math.max(e,this.slots.get(t.id).index+1);else{let n={index:e++,playerID:t.id,static:t,srcX:0,srcY:0,srcScale:0,tgtX:0,tgtY:0,tgtScale:0,startTime:a,alive:!1,nameLen:0,troopLen:0,lastTroopStr:``,lastTroopBucket:-1,flagUrl:t.flag,flagLayerIdx:-1,crownUrl:t.crown,crownLayerIdx:-1,emojiAtlasIdx:-1,nameHalfWidth:0,crown:!1,traitor:!1,disconnected:!1,alliance:!1,allianceReq:!1,target:!1,embargo:!1,nukeActive:!1,nukeTargetsMe:!1,inDoomsdayClock:!1,doomsdayClockDraining:!1,doomsdayClockDecaying:!1,doomsdayClockWarnProgress:0,traitorRemainingTicks:0,allianceFraction:0,allianceRemainingTicks:0};this.slots.set(t.id,n),this.resolveSlotFlag(n),this.resolveSlotCrown(n)}}let o=this.slicePhase;this.slicePhase=(o+1)%e.UPDATE_SLICES;for(let[s,c]of t){let t=this.slots.get(s);if(!t)continue;let l=r||t.tgtScale===0;if(!l&&t.nameLen!==0&&t.index%e.UPDATE_SLICES!==o)continue;let u=n.get(t.static.smallID),d=u?.isAlive??!1;if(!d&&!t.alive)continue;if(!d&&t.alive){t.alive=!1,this.writePlayerDataRow(t);continue}let f=!t.alive;if(t.alive=d,t.nameLen===0){let e=t.static.displayName;t.nameLen=Math.min(e.length,32),t.nameHalfWidth=this.uploadStringRow(t.index*2,e),f=!0}let p=Math.floor((a+t.index%5*.1)/.5);if(l||t.troopLen===0||p!==t.lastTroopBucket){t.lastTroopBucket=p;let e=ze(u?.troops??0);e!==t.lastTroopStr&&(t.troopLen=Math.min(e.length,32),t.lastTroopStr=e,this.uploadStringRow(t.index*2+1,e),f=!0)}if(c.x!==t.tgtX||c.y!==t.tgtY||c.size!==t.tgtScale){if(l)t.srcX=c.x,t.srcY=c.y,t.srcScale=c.size;else{let e=a-t.startTime,n=Math.min(1-Math.exp(-this.settings.name.lerpSpeed*e),1);t.srcX+=(t.tgtX-t.srcX)*n,t.srcY+=(t.tgtY-t.srcY)*n,t.srcScale+=(t.tgtScale-t.srcScale)*n}t.tgtX=c.x,t.tgtY=c.y,t.tgtScale=c.size,t.startTime=a,f=!0}else r&&(t.srcX!==t.tgtX||t.srcY!==t.tgtY||t.srcScale!==t.tgtScale)&&(t.srcX=t.tgtX,t.srcY=t.tgtY,t.srcScale=t.tgtScale,t.startTime=a,f=!0);let m=-1;if(u?.outgoingEmojis&&u.outgoingEmojis.length>0){for(let e of u.outgoingEmojis)if(e.recipientID===`AllPlayers`){let t=this.emojiCharToIndex.get(e.message);if(t!==void 0){m=t;break}}}m!==t.emojiAtlasIdx&&(t.emojiAtlasIdx=m,f=!0);let h=i?.get(t.static.smallID),g=h?.crown??!1,_=h?.traitor??!1,v=h?.disconnected??!1,y=h?.inDoomsdayClock??!1,b=h?.doomsdayClockDraining??!1,x=h?.doomsdayClockDecaying??!1,S=h?.doomsdayClockWarnProgress??0,C=h?.alliance??!1,w=h?.allianceReq??!1,T=h?.target??!1,E=h?.embargo??!1,D=h?.nukeActive??!1,O=h?.nukeTargetsMe??!1,k=h?.traitorRemainingTicks??0,A=h?.allianceFraction??0,ee=h?.allianceRemainingTicks??0;(g!==t.crown||_!==t.traitor||v!==t.disconnected||y!==t.inDoomsdayClock||b!==t.doomsdayClockDraining||x!==t.doomsdayClockDecaying||S!==t.doomsdayClockWarnProgress||C!==t.alliance||w!==t.allianceReq||T!==t.target||E!==t.embargo||D!==t.nukeActive||O!==t.nukeTargetsMe||k!==t.traitorRemainingTicks||A!==t.allianceFraction||ee!==t.allianceRemainingTicks)&&(t.crown=g,t.traitor=_,t.disconnected=v,t.inDoomsdayClock=y,t.doomsdayClockDraining=b,t.doomsdayClockDecaying=x,t.doomsdayClockWarnProgress=S,t.alliance=C,t.allianceReq=w,t.target=T,t.embargo=E,t.nukeActive=D,t.nukeTargetsMe=O,t.traitorRemainingTicks=k,t.allianceFraction=A,t.allianceRemainingTicks=ee,f=!0),f&&this.writePlayerDataRow(t)}for(let[e,n]of this.slots)!t.has(e)&&n.alive&&(n.alive=!1,this.writePlayerDataRow(n))}uploadStringRow(e,t){let n=wm(t,this.glyph,this.kernTable,this.stringRow,this.cursorRow),r=e*32;return this.cpuStringData.set(this.stringRow,r),this.cpuCursorData.set(this.cursorRow,r),this.stringDataDirty=!0,this.cursorDataDirty=!0,n}writePlayerDataRow(e){let t=this.cpuPlayerData,n=e.index*36;t[n+0]=e.srcX,t[n+1]=e.srcY,t[n+2]=e.srcScale,t[n+3]=e.startTime,t[n+4]=e.tgtX,t[n+5]=e.tgtY,t[n+6]=e.tgtScale,t[n+7]=+!!e.alive;let r=this.playerColors.get(e.playerID)??[0,0,0];t[n+8]=r[0],t[n+9]=r[1],t[n+10]=r[2],t[n+11]=1;let i=this.settings.name,a=0;e.static.playerType===bt.Nation?a=i.nameShadeNation:e.static.playerType===bt.Bot&&(a=i.nameShadeBot),t[n+12]=e.nameLen,t[n+13]=e.troopLen,t[n+14]=a,t[n+15]=e.nameHalfWidth,t[n+16]=e.flagLayerIdx,t[n+17]=e.emojiAtlasIdx,t[n+18]=e.static.smallID,t[n+19]=e.doomsdayClockDecaying?3:e.doomsdayClockDraining?2:e.inDoomsdayClock?1+e.doomsdayClockWarnProgress*.49:0,t[n+20]=+!!e.crown,t[n+21]=+!!e.traitor,t[n+22]=+!!e.disconnected,t[n+23]=+!!e.alliance,t[n+24]=+!!e.allianceReq,t[n+25]=+!!e.target,t[n+26]=+!!e.embargo,t[n+27]=+!!e.nukeActive,t[n+28]=+!!e.nukeTargetsMe,t[n+29]=e.traitorRemainingTicks,t[n+30]=e.allianceFraction,t[n+31]=e.allianceRemainingTicks,t[n+32]=e.crownLayerIdx,t[n+33]=+(e.static.verified===!0),t[n+34]=[e.crown,e.traitor,e.disconnected,e.alliance,e.allianceReq,e.target,e.embargo,e.nukeActive,e.inDoomsdayClock||e.doomsdayClockDraining].filter(Boolean).length,t[n+35]=0,this.playerDataDirty=!0}setHighlightOwner(e){this.highlightOwnerID=e}setMouseWorldPos(e,t){this.mouseWorldX=e,this.mouseWorldY=t}hitTestNamePlate(e,t){let n=this.mouseWorldX,r=this.mouseWorldY,i=this.settings.name,a=Math.hypot(t[0],t[3]);for(let t of this.slots.values()){if(!t.alive)continue;let o=Math.min(1-Math.exp(-i.lerpSpeed*(e-t.startTime)),1),s=t.srcX+(t.tgtX-t.srcX)*o,c=t.srcY+(t.tgtY-t.srcY)*o,l=t.srcScale+(t.tgtScale-t.srcScale)*o,u=Math.max(1,Math.floor(l)),d=Math.max(4,Math.floor(u*i.nameScaleFactor))*Math.min(u*.25,i.nameScaleCap)/this.fontSize,f=this.fontBase*d,p=f*a;if(t.target&&p<i.cullThreshold){let e=i.cullThreshold/p;d*=e,f=this.fontBase*d}let m=t.nameHalfWidth*d,h=s-m,g=s+m;t.flagLayerIdx>=0&&(h-=f*1.2*km);let _=c-f*.6,v=t.crown||t.traitor||t.disconnected||t.alliance||t.allianceReq||t.target||t.embargo||t.nukeActive||t.inDoomsdayClock||t.doomsdayClockDraining||t.doomsdayClockDecaying;t.emojiAtlasIdx>=0?_=c-f*i.emojiRowOffset:v&&(_=c-f*i.statusRowOffset),t.static.verified===!0&&(g+=f*.51,_=Math.min(_,c-f*.775));let y=c+f*(1.1+.5*i.troopSizeMultiplier);if(n>=h&&n<=g&&r>=_&&r<=y)return t.static.smallID}return 0}draw(e,t){if(!this.textProgram.ready||this.slots.size===0)return;let n=this.gl;this.stringDataDirty&&=(n.bindTexture(n.TEXTURE_2D,this.stringTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,32,this.maxPlayers*2,n.RED_INTEGER,n.UNSIGNED_BYTE,this.cpuStringData),!1),this.cursorDataDirty&&=(n.bindTexture(n.TEXTURE_2D,this.cursorTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,32,this.maxPlayers*2,n.RED,n.FLOAT,this.cpuCursorData),!1),this.playerDataDirty&&=(n.bindTexture(n.TEXTURE_2D,this.playerDataTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,9,this.maxPlayers,n.RGBA,n.FLOAT,this.cpuPlayerData),!1);let r=this.hitTestNamePlate(performance.now()/1e3,e);this.textProgram.draw(e,this.settings,this.vao,this.maxPlayers,t,this.highlightOwnerID,r),this.statusIconProgram.draw(e,this.settings,this.vao,r),this.iconProgram.draw(e,this.settings,this.vao,r),this.settings.passEnabled.nameDebug&&this.debugProgram.draw(e,this.settings,this.vao)}dispose(){let e=this.gl;this.textProgram.dispose(),this.iconProgram.dispose(),this.flagAtlas.dispose(),this.crownAtlas.dispose(),this.statusIconProgram.dispose(),this.debugProgram.dispose(),e.deleteTexture(this.glyphMetricsTex),e.deleteTexture(this.cursorTex),e.deleteTexture(this.stringTex),e.deleteTexture(this.playerDataTex),e.deleteVertexArray(this.vao)}},Nm=`#version 300 es
precision highp float;

uniform sampler2D uSceneTex;
uniform sampler2D uLightTex;
uniform float uAmbient;

in vec2 vUV;
out vec4 fragColor;

void main() {
  vec3 scene = texture(uSceneTex, vUV).rgb;
  vec3 light = texture(uLightTex, vUV).rgb;

  // Scale lights inversely with ambient — invisible at full day, full strength at deep night
  vec3 illumination = min(vec3(uAmbient) + light * (1.0 - uAmbient), vec3(1.2));
  fragColor = vec4(scene * illumination, 1.0);
}
`,Pm=class{constructor(e,t){this.gl=e,this.settings=t,this.compositeProg=W(e,$e,Nm,`NightCompositePass`),this.uCompositeAmbient=e.getUniformLocation(this.compositeProg,`uAmbient`),e.useProgram(this.compositeProg),e.uniform1i(e.getUniformLocation(this.compositeProg,`uSceneTex`),0),e.uniform1i(e.getUniformLocation(this.compositeProg,`uLightTex`),1),this.quadVao=mt(e)}getAmbient(){return this.settings.lighting.ambient}draw(e,t){let n=this.gl;n.disable(n.BLEND),n.useProgram(this.compositeProg),n.uniform1f(this.uCompositeAmbient,this.getAmbient()),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,t),n.bindVertexArray(this.quadVao),n.drawArrays(n.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.compositeProg),e.deleteVertexArray(this.quadVao)}},Fm=`#version 300 es
precision highp float;

in vec2 vLocal;
flat in float vInnerRadius;
flat in float vOuterRadius;
flat in float vRelation;        // 0 = self, 1 = ally, 2 = enemy

uniform float uTime;            // seconds
uniform vec4 uTelegraphStyle;   // (strokeWidth, dashLen, gapLen, rotationSpeed)
uniform vec4 uTelegraphAlpha;   // (baseAlpha, pulseAmplitude, pulseSpeed, fillAlphaOffset)
uniform vec3 uColorSelf;
uniform vec3 uColorAlly;
uniform vec3 uColorEnemy;

out vec4 fragColor;

void main() {
  float strokeWidth = uTelegraphStyle.x;
  float dashLen = uTelegraphStyle.y;
  float gapLen = uTelegraphStyle.z;
  float rotationSpeed = uTelegraphStyle.w;
  float baseAlphaVal = uTelegraphAlpha.x;
  float pulseAmp = uTelegraphAlpha.y;
  float pulseSpd = uTelegraphAlpha.z;
  float fillAlphaOff = uTelegraphAlpha.w;

  float paddedR = vOuterRadius + 2.0;
  float dist = length(vLocal) * paddedR;

  // Base alpha with gentle pulsation
  float baseAlpha = baseAlphaVal + pulseAmp * sin(uTime * pulseSpd);

  // Inner circle: filled disc + stroke
  float innerFill = 1.0 - smoothstep(vInnerRadius - 0.5, vInnerRadius, dist);
  float innerStroke = smoothstep(vInnerRadius - strokeWidth - 0.5, vInnerRadius - strokeWidth, dist)
                    * (1.0 - smoothstep(vInnerRadius + strokeWidth, vInnerRadius + strokeWidth + 0.5, dist));

  // Outer circle: dashed ring
  float outerRing = smoothstep(vOuterRadius - strokeWidth - 0.5, vOuterRadius - strokeWidth, dist)
                  * (1.0 - smoothstep(vOuterRadius + strokeWidth, vOuterRadius + strokeWidth + 0.5, dist));

  // Dash pattern on outer ring
  float angle = atan(vLocal.y, vLocal.x);
  float arcPos = angle * vOuterRadius;
  float period = dashLen + gapLen;
  float dashPhase = mod(arcPos + uTime * rotationSpeed, period);
  float dashAlpha = 1.0 - smoothstep(dashLen - 0.5, dashLen + 0.5, dashPhase);

  // Combine
  float fillAlpha = innerFill * max(0.0, baseAlpha - fillAlphaOff);
  float strokeAlpha = innerStroke * baseAlpha;
  float outerAlpha = outerRing * dashAlpha * baseAlpha;

  float alpha = max(max(fillAlpha, strokeAlpha), outerAlpha);
  if (alpha < 0.01) discard;

  vec3 color = vRelation < 0.5 ? uColorSelf
             : vRelation < 1.5 ? uColorAlly
             : uColorEnemy;
  fragColor = vec4(color, alpha);
}
`,Im=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;
// Per-instance: x, y, innerRadius, outerRadius
layout(location = 1) in vec4 aInstance;
// Per-instance: 0 = self, 1 = ally, 2 = enemy
layout(location = 2) in float aRelation;

uniform mat3 uCamera;

out vec2 vLocal;              // [-1, +1] local coords
flat out float vInnerRadius;
flat out float vOuterRadius;
flat out float vRelation;

void main() {
  vLocal = aPos * 2.0 - 1.0;
  vInnerRadius = aInstance.z;
  vOuterRadius = aInstance.w;
  vRelation = aRelation;

  // Expand quad to cover outer circle bbox + padding
  float r = aInstance.w + 2.0;
  vec2 center = aInstance.xy + 0.5;
  vec2 worldPos = center + vLocal * r;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Lm=5,Rm=class{constructor(e,t){this.instanceCount=0,this.startTime=performance.now(),this.gl=e,this.settings=t,this.program=W(e,Im,Fm,`NukeTelegraphPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uTelegraphStyle=e.getUniformLocation(this.program,`uTelegraphStyle`),this.uTelegraphAlpha=e.getUniformLocation(this.program,`uTelegraphAlpha`),this.uColorSelf=e.getUniformLocation(this.program,`uColorSelf`),this.uColorAlly=e.getUniformLocation(this.program,`uColorAlly`),this.uColorEnemy=e.getUniformLocation(this.program,`uColorEnemy`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let r=e.createBuffer();this.instanceBuf=new Ve(e,r,16,Lm);let i=Lm*4;e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,i,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,1,e.FLOAT,!1,i,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}update(e){let t=e.length;this.instanceBuf.ensureCapacity(t);let n=this.instanceBuf.float32;for(let r=0;r<t;r++){let t=e[r],i=r*Lm;n[i+0]=t.x,n[i+1]=t.y,n[i+2]=t.innerRadius,n[i+3]=t.outerRadius,n[i+4]=t.relation}if(this.instanceCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,t*Lm)}}draw(e){if(this.instanceCount===0)return;let t=this.gl,n=this.settings.nukeTelegraph,r=(performance.now()-this.startTime)/1e3;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1f(this.uTime,r),t.uniform4f(this.uTelegraphStyle,n.strokeWidth,n.dashLen,n.gapLen,n.rotationSpeed),t.uniform4f(this.uTelegraphAlpha,n.baseAlpha,n.pulseAmplitude,n.pulseSpeed,n.fillAlphaOffset),t.uniform3f(this.uColorSelf,n.selfColorR,n.selfColorG,n.selfColorB),t.uniform3f(this.uColorAlly,n.allyColorR,n.allyColorG,n.allyColorB),t.uniform3f(this.uColorEnemy,n.colorR,n.colorG,n.colorB),t.bindVertexArray(this.vao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.instanceCount)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}},zm=`#version 300 es
precision highp float;

in vec2 vUV;
flat in float vType;

out vec4 fragColor;

// Colors matching upstream
const vec3 COLOR_WHITE = vec3(1.0);
const vec3 OUTLINE_GRAY = vec3(0.549);    // rgba(140, 140, 140)
const vec3 COLOR_RED = vec3(1.0, 0.0, 0.0);
const vec3 OUTLINE_BLACK = vec3(0.0);

void main() {
  float alpha = 0.0;
  vec3 color = vec3(1.0);

  if (vType < 0.5) {
    // Circle marker at untargetable zone boundary
    // White ring with gray outline (upstream: 4px radius, 1.25px stroke)
    float dist = length(vUV);
    float ring = abs(dist - 0.55);
    float lineAlpha = 1.0 - smoothstep(0.06, 0.12, ring);
    float outlineAlpha = 1.0 - smoothstep(0.14, 0.22, ring);
    float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
    color = mix(OUTLINE_GRAY, COLOR_WHITE, blend);
    alpha = outlineAlpha;
  } else {
    // X marker at SAM intercept point
    // Red X with black outline (upstream: 6px arms, 2px stroke)
    float d1 = abs(vUV.x - vUV.y) * 0.7071;
    float d2 = abs(vUV.x + vUV.y) * 0.7071;
    float minD = min(d1, d2);
    float circleMask = 1.0 - smoothstep(0.7, 0.85, length(vUV));
    float lineAlpha = (1.0 - smoothstep(0.08, 0.16, minD)) * circleMask;
    float outlineAlpha = (1.0 - smoothstep(0.18, 0.28, minD)) * circleMask;
    float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
    color = mix(OUTLINE_BLACK, COLOR_RED, blend);
    alpha = outlineAlpha;
  }

  if (alpha < 0.01) discard;
  fragColor = vec4(color, alpha);
}
`,Bm=`#version 300 es
precision highp float;

// Unit quad [-1, +1]
layout(location = 0) in vec2 aCorner;

uniform mat3 uCamera;
uniform vec2 uP0, uP1, uP2, uP3;
uniform float uPixelSize;
uniform vec4 uMarker;           // (t, type: 0=circle 1=X, 0, 0)
uniform vec2 uMarkerRadii;     // (circleRadiusPx, xRadiusPx)

out vec2 vUV;
flat out float vType;

vec2 bezier(float t) {
  float T = 1.0 - t;
  float TT = T * T;
  float tt = t * t;
  return TT * T * uP0 + 3.0 * TT * t * uP1 + 3.0 * T * tt * uP2 + tt * t * uP3;
}

void main() {
  vType = uMarker.y;
  vUV = aCorner;

  vec2 center = bezier(uMarker.x) + 0.5;
  float radius = (vType < 0.5 ? uMarkerRadii.x : uMarkerRadii.y) * uPixelSize;
  vec2 pos = center + aCorner * radius;

  vec3 clip = uCamera * vec3(pos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Vm=`#version 300 es
precision highp float;

in float vT;
in float vArcDist;
in float vEdgeDist;

uniform float uPixelSize;
uniform float uTUntargetableStart;  // -1 = no zone
uniform float uTUntargetableEnd;    // -1 = no zone
uniform float uTSamIntercept;       // 1.0 = no intercept

// Settings uniforms
uniform float uQuadHalfPx;          // total half-width of quad in pixels
uniform float uLineHalfPx;          // main line half-width in pixels
uniform float uOutlineHalfPx;       // outline half-width in pixels
uniform vec4 uDashPattern;          // (dashTargetable, gapTargetable, dashUntargetable, gapUntargetable)
uniform vec3 uLineColor;            // normal line color
uniform vec3 uInterceptColor;       // line color after SAM intercept
uniform vec3 uOutlineColor;         // outline color (normal)
uniform vec3 uInterceptOutlineColor; // outline color (after intercept)

out vec4 fragColor;

void main() {
  // Zone classification
  bool inUntargetable = uTUntargetableStart >= 0.0
    && vT >= uTUntargetableStart
    && vT <= uTUntargetableEnd;
  bool intercepted = vT >= uTSamIntercept;

  // Dash pattern (pixel space)
  float dashLen = inUntargetable ? uDashPattern.z : uDashPattern.x;
  float gapLen = inUntargetable ? uDashPattern.w : uDashPattern.y;
  float period = dashLen + gapLen;
  float pixelDist = vArcDist / uPixelSize;
  float phase = mod(pixelDist, period);
  float dashAlpha = 1.0 - smoothstep(dashLen - 0.5, dashLen + 0.5, phase);
  if (dashAlpha < 0.01) discard;

  // Line vs outline (pixel distance from center line)
  float d = abs(vEdgeDist) * uQuadHalfPx;
  float lineAlpha = 1.0 - smoothstep(uLineHalfPx - 0.4, uLineHalfPx + 0.4, d);
  float outlineAlpha = 1.0 - smoothstep(uOutlineHalfPx - 0.4, uOutlineHalfPx + 0.4, d);
  if (outlineAlpha < 0.01) discard;

  // Color selection
  vec3 lineColor = intercepted ? uInterceptColor : uLineColor;
  vec3 outlineColor = intercepted ? uInterceptOutlineColor : uOutlineColor;
  float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
  vec3 color = mix(outlineColor, lineColor, blend);

  fragColor = vec4(color, outlineAlpha * dashAlpha);
}
`,Hm=`#version 300 es
precision highp float;

// Per-vertex: (t along curve, side: -1 or +1, cumulative arc distance)
layout(location = 0) in vec3 aVertex;

uniform mat3 uCamera;
uniform vec2 uP0, uP1, uP2, uP3;   // Bezier control points
uniform float uPixelSize;           // world units per pixel
uniform float uQuadHalfPx;          // half-width of quad in pixels

out float vT;          // curve parameter (0..1)
out float vArcDist;    // cumulative arc distance (world units)
out float vEdgeDist;   // -1..+1 across the line width

vec2 bezier(float t) {
  float T = 1.0 - t;
  float TT = T * T;
  float tt = t * t;
  return TT * T * uP0 + 3.0 * TT * t * uP1 + 3.0 * T * tt * uP2 + tt * t * uP3;
}

vec2 bezierDeriv(float t) {
  float T = 1.0 - t;
  return 3.0 * (T * T * (uP1 - uP0) + 2.0 * T * t * (uP2 - uP1) + t * t * (uP3 - uP2));
}

void main() {
  float t = aVertex.x;
  float side = aVertex.y;

  vec2 pos = bezier(t);
  vec2 tang = bezierDeriv(t);
  float tangLen = length(tang);
  vec2 normTang = tangLen > 0.001 ? tang / tangLen : vec2(1.0, 0.0);
  vec2 perp = vec2(-normTang.y, normTang.x);

  float halfWidth = uQuadHalfPx * uPixelSize;
  pos += perp * side * halfWidth;
  pos += 0.5; // tile center offset

  vT = t;
  vEdgeDist = side;
  vArcDist = aVertex.z;

  vec3 clip = uCamera * vec3(pos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Um=128,Wm=2,Gm=3,Km=class{constructor(e,t){this.visible=!1,this.data=null,this.gl=e,this.settings=t,this.lineProgram=W(e,Hm,Vm,`NukeTrajectoryPass.lineProgram`),this.uLineCamera=e.getUniformLocation(this.lineProgram,`uCamera`),this.uLineP0=e.getUniformLocation(this.lineProgram,`uP0`),this.uLineP1=e.getUniformLocation(this.lineProgram,`uP1`),this.uLineP2=e.getUniformLocation(this.lineProgram,`uP2`),this.uLineP3=e.getUniformLocation(this.lineProgram,`uP3`),this.uLinePixelSize=e.getUniformLocation(this.lineProgram,`uPixelSize`),this.uLineTUntargetableStart=e.getUniformLocation(this.lineProgram,`uTUntargetableStart`),this.uLineTUntargetableEnd=e.getUniformLocation(this.lineProgram,`uTUntargetableEnd`),this.uLineTSamIntercept=e.getUniformLocation(this.lineProgram,`uTSamIntercept`),this.uLineQuadHalfPx=e.getUniformLocation(this.lineProgram,`uQuadHalfPx`),this.uLineLineHalfPx=e.getUniformLocation(this.lineProgram,`uLineHalfPx`),this.uLineOutlineHalfPx=e.getUniformLocation(this.lineProgram,`uOutlineHalfPx`),this.uLineDashPattern=e.getUniformLocation(this.lineProgram,`uDashPattern`),this.uLineLineColor=e.getUniformLocation(this.lineProgram,`uLineColor`),this.uLineInterceptColor=e.getUniformLocation(this.lineProgram,`uInterceptColor`),this.uLineOutlineColor=e.getUniformLocation(this.lineProgram,`uOutlineColor`),this.uLineInterceptOutlineColor=e.getUniformLocation(this.lineProgram,`uInterceptOutlineColor`),this.lineVertexCount=129*Wm,this.lineVertices=new Float32Array(this.lineVertexCount*Gm),this.lineVAO=e.createVertexArray(),e.bindVertexArray(this.lineVAO),this.lineBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.lineBuf),e.bufferData(e.ARRAY_BUFFER,this.lineVertices.byteLength,e.DYNAMIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),this.markerProgram=W(e,Bm,zm,`NukeTrajectoryPass.markerProgram`),this.uMarkerCamera=e.getUniformLocation(this.markerProgram,`uCamera`),this.uMarkerP0=e.getUniformLocation(this.markerProgram,`uP0`),this.uMarkerP1=e.getUniformLocation(this.markerProgram,`uP1`),this.uMarkerP2=e.getUniformLocation(this.markerProgram,`uP2`),this.uMarkerP3=e.getUniformLocation(this.markerProgram,`uP3`),this.uMarkerPixelSize=e.getUniformLocation(this.markerProgram,`uPixelSize`),this.uMarker=e.getUniformLocation(this.markerProgram,`uMarker`),this.uMarkerRadii=e.getUniformLocation(this.markerProgram,`uMarkerRadii`),this.markerVAO=e.createVertexArray(),e.bindVertexArray(this.markerVAO);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}update(e){this.data=e,this.visible=e!==null,e&&this.rebuildVertices(e)}rebuildVertices(e){let t=Um,n=this.lineVertices,r=0,i=e.p0x,a=e.p0y;for(let o=0;o<=t;o++){let s=o/t,c=1-s,l=c*c,u=s*s,d=l*c*e.p0x+3*l*s*e.p1x+3*c*u*e.p2x+u*s*e.p3x,f=l*c*e.p0y+3*l*s*e.p1y+3*c*u*e.p2y+u*s*e.p3y;if(o>0){let e=d-i,t=f-a;r+=Math.sqrt(e*e+t*t)}i=d,a=f;let p=o*Wm*Gm;n[p+0]=s,n[p+1]=-1,n[p+2]=r,n[p+3]=s,n[p+4]=1,n[p+5]=r}let o=this.gl;o.bindBuffer(o.ARRAY_BUFFER,this.lineBuf),o.bufferSubData(o.ARRAY_BUFFER,0,n)}draw(e){if(!this.visible||!this.data)return;let t=this.gl,n=this.data,r=this.settings.nukeTrajectory,i=2/(e[0]*t.drawingBufferWidth),a=r.lineWidth/2,o=(r.lineWidth+r.outlineWidth)/2,s=o+1;t.useProgram(this.lineProgram),t.uniformMatrix3fv(this.uLineCamera,!1,e),t.uniform2f(this.uLineP0,n.p0x,n.p0y),t.uniform2f(this.uLineP1,n.p1x,n.p1y),t.uniform2f(this.uLineP2,n.p2x,n.p2y),t.uniform2f(this.uLineP3,n.p3x,n.p3y),t.uniform1f(this.uLinePixelSize,i),t.uniform1f(this.uLineTUntargetableStart,n.tUntargetableStart),t.uniform1f(this.uLineTUntargetableEnd,n.tUntargetableEnd),t.uniform1f(this.uLineTSamIntercept,n.tSamIntercept),t.uniform1f(this.uLineQuadHalfPx,s),t.uniform1f(this.uLineLineHalfPx,a),t.uniform1f(this.uLineOutlineHalfPx,o),t.uniform4f(this.uLineDashPattern,r.dashTargetable,r.gapTargetable,r.dashUntargetable,r.gapUntargetable),t.uniform3f(this.uLineLineColor,r.lineR,r.lineG,r.lineB),t.uniform3f(this.uLineInterceptColor,r.interceptR,r.interceptG,r.interceptB),t.uniform3f(this.uLineOutlineColor,r.outlineR,r.outlineG,r.outlineB),t.uniform3f(this.uLineInterceptOutlineColor,r.interceptOutlineR,r.interceptOutlineG,r.interceptOutlineB),t.bindVertexArray(this.lineVAO),t.drawArrays(t.TRIANGLE_STRIP,0,this.lineVertexCount),this.drawMarkers(e,n,i)}drawMarkers(e,t,n){let r=[];if(t.tUntargetableStart>=0&&(r.push([t.tUntargetableStart,0]),r.push([t.tUntargetableEnd,0])),t.tSamIntercept<1&&r.push([t.tSamIntercept,1]),r.length===0)return;let i=this.gl,a=this.settings.nukeTrajectory;i.useProgram(this.markerProgram),i.uniformMatrix3fv(this.uMarkerCamera,!1,e),i.uniform2f(this.uMarkerP0,t.p0x,t.p0y),i.uniform2f(this.uMarkerP1,t.p1x,t.p1y),i.uniform2f(this.uMarkerP2,t.p2x,t.p2y),i.uniform2f(this.uMarkerP3,t.p3x,t.p3y),i.uniform1f(this.uMarkerPixelSize,n),i.uniform2f(this.uMarkerRadii,a.markerCircleRadius,a.markerXRadius),i.bindVertexArray(this.markerVAO);for(let[e,t]of r)i.uniform4f(this.uMarker,e,t,0,0),i.drawArrays(i.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.lineProgram),e.deleteProgram(this.markerProgram),e.deleteVertexArray(this.lineVAO),e.deleteVertexArray(this.markerVAO)}},qm=`#version 300 es
precision highp float;

in vec2 vLocalPos;
flat in vec3 vColor;
flat in float vIntensity;

uniform float uFalloffPower;

out vec4 fragColor;

void main() {
  float dist = length(vLocalPos) * 2.0; // [0, 1] from center to edge
  if (dist > 1.0) discard;

  float falloff = pow(1.0 - dist, uFalloffPower);

  float brightness = falloff * vIntensity;
  fragColor = vec4(vColor * brightness, brightness);
}
`,Jm=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;         // quad corner [0,1]
layout(location = 1) in vec3 aLightPosIdx;  // x, y, typeIdx
layout(location = 2) in vec3 aLightColor;   // r, g, b

uniform mat3 uCamera;
uniform float uRadiusMultiplier;
uniform float uRadius[MAX_LIGHT_TYPES];
uniform float uIntensity[MAX_LIGHT_TYPES];

out vec2 vLocalPos;
flat out vec3 vColor;
flat out float vIntensity;

void main() {
  int typeIdx = int(aLightPosIdx.z);
  float radius = uRadius[typeIdx] * uRadiusMultiplier;
  vec2 center = vec2(aLightPosIdx.x + 0.5, aLightPosIdx.y + 0.5);
  vec2 worldPos = center + (aPos - 0.5) * radius * 2.0;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vLocalPos = aPos - 0.5; // [-0.5, 0.5]
  vColor = aLightColor.rgb;
  vIntensity = uIntensity[typeIdx];
}
`,Ym={[nt]:{r:1,g:.85,b:.5,radius:18,intensity:1.2},[pt]:{r:1,g:.75,b:.4,radius:18,intensity:1.2},[Be]:{r:1,g:.6,b:.3,radius:18,intensity:1.2},[Ze]:{r:.8,g:.85,b:1,radius:18,intensity:1.2},[at]:{r:.8,g:.85,b:1,radius:18,intensity:1.2},[St]:{r:1,g:.4,b:.2,radius:18,intensity:1.2},[wt]:{r:.9,g:.8,b:.6,radius:6,intensity:2.7},[st]:{r:.9,g:.8,b:.6,radius:6,intensity:2.7},[ct]:{r:.9,g:.85,b:.7,radius:10,intensity:2.8},[tt]:{r:1,g:.9,b:.7,radius:16,intensity:1.1},[lt]:{r:1,g:.95,b:.6,radius:22,intensity:1.3},[Ct]:{r:1,g:.9,b:.7,radius:18,intensity:1.2},[vt]:{r:1,g:.6,b:.3,radius:12,intensity:1},[ht]:{r:1,g:.85,b:.5,radius:6,intensity:.5}},Xm=6,Zm=Xm*4,Qm=64,$m=12288,eh=5,th=class{constructor(e,t,n,r,i){this.lightCount=0,this.typeToIdx=new Map,this.radiusArr=new Float32Array(Qm),this.intensityArr=new Float32Array(Qm),this.smoothSegs=[],this.lastUnitsUpdateMs=0,this.gl=e,this.settings=r,this.paletteData=n,this.mapW=t.mapWidth,this.tickIntervalMs=i.msPerTick(),this.typeNames=t.unitTypes,this.typeConfigs=Array(t.unitTypes.length);for(let e=0;e<t.unitTypes.length;e++)this.typeConfigs[e]=Ym[t.unitTypes[e]],this.typeToIdx.set(t.unitTypes[e],e);this.lightProg=W(e,U(Jm,{MAX_LIGHT_TYPES:Qm}),qm,`PointLightPass`),this.uLightCam=e.getUniformLocation(this.lightProg,`uCamera`),this.uRadiusMultiplier=e.getUniformLocation(this.lightProg,`uRadiusMultiplier`),this.uRadiusArr=e.getUniformLocation(this.lightProg,`uRadius`),this.uIntensityArr=e.getUniformLocation(this.lightProg,`uIntensity`),this.uFalloffPower=e.getUniformLocation(this.lightProg,`uFalloffPower`),this.lightData=new Float32Array($m*Xm),this.lightBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.lightBuf),e.bufferData(e.ARRAY_BUFFER,this.lightData.byteLength,e.DYNAMIC_DRAW),this.lightVao=e.createVertexArray(),e.bindVertexArray(this.lightVao);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.lightBuf),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,Zm,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,Zm,12),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}updateLights(e){let t=0;this.smoothSegs.length=0,this.lastUnitsUpdateMs=performance.now();for(let n of e.values()){if(!n.isActive||n.waitTicks>0)continue;let e=this.typeToIdx.get(n.unitType);if(e===void 0||!this.typeConfigs[e])continue;if(t>=$m)break;let r=n.pos%this.mapW,i=(n.pos-r)/this.mapW;if(xt.has(n.unitType)&&n.lastPos!==n.pos){let e=n.lastPos%this.mapW,a=(n.lastPos-e)/this.mapW;this.smoothSegs.push(t,e,a,r,i)}let a=t*Xm,o=n.ownerID*4;this.lightData[a+0]=r,this.lightData[a+1]=i,this.lightData[a+2]=e,this.lightData[a+3]=this.paletteData[o],this.lightData[a+4]=this.paletteData[o+1],this.lightData[a+5]=this.paletteData[o+2],t++}if(this.lightCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.lightBuf),e.bufferSubData(e.ARRAY_BUFFER,0,this.lightData,0,t*Xm)}}applySmoothing(){let e=this.smoothSegs;if(e.length===0)return;let t=Math.max(0,Math.min(1,(performance.now()-this.lastUnitsUpdateMs)/this.tickIntervalMs)),n=this.lightData,r=!1;for(let i=0;i<e.length;i+=eh){let a=e[i]*Xm;n[a+0]=e[i+1]+(e[i+3]-e[i+1])*t,n[a+1]=e[i+2]+(e[i+4]-e[i+2])*t,r=!0}if(r&&this.lightCount>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.lightBuf),e.bufferSubData(e.ARRAY_BUFFER,0,this.lightData,0,this.lightCount*Xm)}}draw(e){if(this.lightCount===0)return;this.applySmoothing();let t=this.gl,n=this.settings.lighting;t.useProgram(this.lightProg),t.uniformMatrix3fv(this.uLightCam,!1,e),t.uniform1f(this.uRadiusMultiplier,n.lightRadiusMultiplier),t.uniform1f(this.uFalloffPower,n.falloffPower);for(let e=0;e<this.typeNames.length;e++){let t=this.typeConfigs[e];if(!t)continue;let n=this.settings.lightConfigs[this.typeNames[e]];this.radiusArr[e]=n?.radius??t.radius,this.intensityArr[e]=n?.intensity??t.intensity}t.uniform1fv(this.uRadiusArr,this.radiusArr),t.uniform1fv(this.uIntensityArr,this.intensityArr),t.bindVertexArray(this.lightVao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.lightCount)}dispose(){let e=this.gl;e.deleteProgram(this.lightProg),e.deleteVertexArray(this.lightVao),e.deleteBuffer(this.lightBuf)}},nh=`#version 300 es
precision highp float;

in vec2 vLocal; // [-1, +1]

uniform float uRadius;
uniform vec3 uColor;

out vec4 fragColor;

void main() {
  float dist = length(vLocal) * (uRadius + 1.0); // world-space distance from center
  float edge = uRadius;

  // Smooth fill: inside the circle at 20% white
  float fill = 1.0 - smoothstep(edge - 0.5, edge + 0.5, dist);

  // Stroke: 1-tile-wide ring at the edge
  float strokeInner = edge - 1.0;
  float strokeOuter = edge;
  float stroke = smoothstep(strokeInner - 0.5, strokeInner + 0.5, dist)
               * (1.0 - smoothstep(strokeOuter - 0.5, strokeOuter + 0.5, dist));

  float alpha = fill * 0.2 + stroke * 0.5;
  if (alpha < 0.001) discard;

  fragColor = vec4(uColor, alpha);
}
`,rh=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;
uniform vec2 uCenter;   // world-space circle center (tile coords)
uniform float uRadius;  // world-space radius in tiles

out vec2 vLocal; // [-1, +1] local coords within the quad

void main() {
  // Map [0,1] → [-1,+1]
  vLocal = aPos * 2.0 - 1.0;

  // Expand quad to cover circle bbox in world space
  // Add 1-tile padding for the stroke
  float r = uRadius + 1.0;
  vec2 worldPos = uCenter + 0.5 + vLocal * r;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,ih=class{constructor(e,t){this.centerX=0,this.centerY=0,this.radius=0,this.warning=`none`,this.gl=e,this.settings=t,this.program=W(e,rh,nh,`RangeCirclePass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uRadius=e.getUniformLocation(this.program,`uRadius`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}updateGhostPreview(e){e&&e.rangeRadius>0?(this.centerX=e.radiusTileX,this.centerY=e.radiusTileY,this.radius=e.rangeRadius,this.warning=e.rangeWarning):(this.radius=0,this.warning=`none`)}draw(e){if(this.radius<=0)return;let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.bindVertexArray(this.vao),t.uniform2f(this.uCenter,this.centerX,this.centerY),t.uniform1f(this.uRadius,this.radius);let n=this.settings.rangeCircle;this.warning===`breaksAlliance`?t.uniform3f(this.uColor,n.allianceColorR,n.allianceColorG,n.allianceColorB):this.warning===`traitor`?t.uniform3f(this.uColor,n.traitorColorR,n.traitorColorG,n.traitorColorB):t.uniform3f(this.uColor,1,1,1),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},ah=`#version 300 es
precision highp float;

in vec2 vLocal;
flat in float vRadius;
flat in vec4 vColor;
flat in vec2 vArcBounds;
flat in float vSpin;

uniform float uTime;
uniform float uOutline;        // 1.0 = owner mode (outline edges), 0.0 = perspective
uniform float uStrokeWidth;    // ring half-width (world units)
uniform float uDashLen;        // dash length (world units)
uniform float uGapLen;         // gap length (world units)
uniform float uRotationSpeed;  // rotation (world units/sec)
uniform float uAlpha;          // base opacity
uniform float uOutlineWidth;   // outline border width (world units)
uniform float uOutlineSoftness; // smoothstep range (0 = hard edge)

out vec4 fragColor;

const float TWO_PI = 6.2831853;

void main() {
  float paddedR = vRadius + 2.0;
  float dist = length(vLocal) * paddedR;

  // Ring mask: stroke centered on the circle edge
  float ringAlpha = smoothstep(vRadius - uStrokeWidth - 0.5, vRadius - uStrokeWidth, dist)
                  * (1.0 - smoothstep(vRadius + uStrokeWidth, vRadius + uStrokeWidth + 0.5, dist));

  if (ringAlpha < 0.01) discard;

  // Arc clipping
  float angle = atan(vLocal.y, vLocal.x);
  float normAngle = angle < 0.0 ? angle + TWO_PI : angle;
  bool fullCircle = vArcBounds.y - vArcBounds.x >= TWO_PI - 0.001;
  if (!fullCircle) {
    if (normAngle < vArcBounds.x || normAngle > vArcBounds.y) discard;
  }

  // Dash pattern along circumference
  float arcPos = angle * vRadius;
  float period = uDashLen + uGapLen;
  float dashPhase = mod(arcPos + uTime * uRotationSpeed * vSpin, period);
  float dashAlpha = 1.0 - smoothstep(uDashLen - 0.5, uDashLen + 0.5, dashPhase);

  float alpha = ringAlpha * dashAlpha * uAlpha * vColor.a;
  if (alpha < 0.01) discard;

  // Outline: darken fragments near any edge of each dash segment
  float edgeFade = 1.0;
  if (uOutline > 0.5) {
    float ow = uOutlineWidth;
    float soft = uOutlineSoftness;
    // Radial edges (inner/outer ring boundary)
    float fromInner = dist - (vRadius - uStrokeWidth);
    float fromOuter = (vRadius + uStrokeWidth) - dist;
    edgeFade = min(smoothstep(ow - soft, ow + soft, fromInner),
                   smoothstep(ow - soft, ow + soft, fromOuter));
    // Dash start/end edges (circumferential)
    edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, dashPhase));
    edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, uDashLen - dashPhase));
    // Arc endpoint edges (where circle union clips the arc)
    if (!fullCircle) {
      float arcDistStart = (normAngle - vArcBounds.x) * vRadius;
      float arcDistEnd   = (vArcBounds.y - normAngle) * vRadius;
      edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, arcDistStart));
      edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, arcDistEnd));
    }
  }

  vec3 finalColor = vColor.rgb * edgeFade;
  fragColor = vec4(finalColor, alpha);
}
`,oh=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;
// Per-instance: x, y, radius
layout(location = 1) in vec3 aInstance;
// Per-instance: r, g, b, alpha
layout(location = 2) in vec4 aColor;
// Per-instance: arcStart, arcEnd, spin
layout(location = 3) in vec3 aArcBounds;

uniform mat3 uCamera;

out vec2 vLocal;        // [-1, +1] local coords
flat out float vRadius; // world-space radius for this instance
flat out vec4 vColor;   // relationship color + instance alpha
flat out vec2 vArcBounds; // arc start/end in [0, 2PI)
flat out float vSpin;   // 1.0 = spinning, 0.0 = static

void main() {
  vLocal = aPos * 2.0 - 1.0;
  vRadius = aInstance.z;
  vColor = aColor;
  vArcBounds = aArcBounds.xy;
  vSpin = aArcBounds.z;

  // Expand quad to cover circle bbox + padding for stroke
  float r = aInstance.z + 2.0;
  vec2 center = aInstance.xy + 0.5;
  vec2 worldPos = center + vLocal * r;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,sh=Math.PI*2,ch=1e-9,lh=100,uh=10,dh=[0,1,0],fh=[1,1,0],ph=[1,0,0];function mh(e,t){return e[0]-t[0]}function hh(e){for(;e<0;)e+=sh;for(;e>=sh;)e-=sh;return e}function gh(e){if(e.length===0)return[];let t=[];for(let[n,r]of e){let e=hh(n),i=hh(r);i<e?(t.push([e,sh]),t.push([0,i])):t.push([e,i])}t.sort(mh);let n=[],r=[t[0][0],t[0][1]];for(let e=1;e<t.length;e++){let i=t[e];i[0]<=r[1]+ch?r[1]=Math.max(r[1],i[1]):(n.push(r),r=[i[0],i[1]])}return n.push(r),n}function _h(e,t){let n=[];for(let r=0;r<t.length;r++){let i=t[r];if(e===i)continue;let a=i.x-e.x,o=i.y-e.y,s=a*a+o*o;if(s<=ch)continue;let c=i.radius-e.radius;if(c>=0&&s<=c*c+ch)return[];let l=e.radius+i.radius;if(s>=l*l-ch)continue;let u=Math.sqrt(s),d=(e.radius*e.radius+s-i.radius*i.radius)/(2*e.radius*u),f=Math.acos(Math.max(-1,Math.min(1,d))),p=Math.atan2(o,a);n.push([p-f,p+f])}let r=gh(n);if(r.length===0)return[[0,sh]];let i=[],a=0;for(let e=0;e<r.length;e++){let[t,n]=r[e];t>a+ch&&i.push([a,t]),a=Math.max(a,n)}return a<sh-ch&&i.push([a,sh]),i}var vh=class e{static{this.GEOMETRY_REFRESH_INTERVAL_MS=50}constructor(e,t,n){this.instanceCount=0,this.visible=!1,this.mapW=0,this.startTime=performance.now(),this.localPlayerID=0,this.allies=new Set,this.currentTick=0,this.lastTickTime=performance.now(),this.hasUpgradingSAM=!1,this.groupBuckets=[],this.lastGeometryTime=0,this.dirtyGroups=new Set,this.colorScratch=[0,0,0],this.paletteData=null,this.colorMode=`perspective`,this.allianceClusters=new Map,this.lastStructures=null,this.gl=e,this.mapW=t,this.settings=n,this.program=W(e,oh,ah,`SamRadiusPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uOutline=e.getUniformLocation(this.program,`uOutline`),this.uStrokeWidth=e.getUniformLocation(this.program,`uStrokeWidth`),this.uDashLen=e.getUniformLocation(this.program,`uDashLen`),this.uGapLen=e.getUniformLocation(this.program,`uGapLen`),this.uRotationSpeed=e.getUniformLocation(this.program,`uRotationSpeed`),this.uAlpha=e.getUniformLocation(this.program,`uAlpha`),this.uOutlineWidth=e.getUniformLocation(this.program,`uOutlineWidth`),this.uOutlineSoftness=e.getUniformLocation(this.program,`uOutlineSoftness`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();this.instanceBuf=new Ve(e,i,64,uh),e.bindBuffer(e.ARRAY_BUFFER,i);let a=uh*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,a,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,4,e.FLOAT,!1,a,12),e.vertexAttribDivisor(2,1),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,3,e.FLOAT,!1,a,28),e.vertexAttribDivisor(3,1),e.bindVertexArray(null)}setLocalPlayer(e){e!==this.localPlayerID&&(this.localPlayerID=e,this.rebuild())}setAllies(e){this.allies=e,this.rebuild()}setPaletteData(e){this.paletteData=e}setColorMode(e){e!==this.colorMode&&(this.colorMode=e,this.rebuild())}setAllianceClusters(e){this.allianceClusters=e}setTick(e){e!==this.currentTick&&(this.currentTick=e,this.lastTickTime=performance.now(),this.hasUpgradingSAM&&this.rebuild())}getContinuousTick(){let e=Math.min(1,Math.max(0,(performance.now()-this.lastTickTime)/lh));return this.currentTick+e}rebuild(){this.lastStructures&&this.updateStructures(this.lastStructures)}updateStructures(e,t){t!==void 0&&(this.currentTick=t,this.lastTickTime=performance.now()),this.lastGeometryTime=performance.now(),this.lastStructures=e;let n=this.collectSAMCircles(e,this.getContinuousTick());this.uploadInstances(n)}getSAMBaseGroup(e,t){return this.colorMode===`owner`?this.allianceClusters.get(e.ownerID)??e.ownerID:+!t}getSAMColor(e,t){if(this.colorMode===`owner`&&this.paletteData){let t=e*4;if(t+2<this.paletteData.length)return this.colorScratch[0]=this.paletteData[t],this.colorScratch[1]=this.paletteData[t+1],this.colorScratch[2]=this.paletteData[t+2],this.colorScratch}return e===this.localPlayerID?dh:this.allies.has(e)?fh:ph}collectSAMCircles(e,t){let n=[],r=this.mapW;this.dirtyGroups.clear();for(let n of e.values()){if(n.unitType!==`SAM Launcher`||!n.isActive)continue;let e=n.ownerID===this.localPlayerID||this.allies.has(n.ownerID),r=this.getSAMBaseGroup(n,e),i=n.samUpgradeStartTick,a=n.samUpgradeDuration??0;i!==null&&t>=i&&t-i<a&&this.dirtyGroups.add(r)}this.hasUpgradingSAM=this.dirtyGroups.size>0;for(let i of e.values()){if(i.unitType!==`SAM Launcher`||!i.isActive)continue;let e=i.ownerID===this.localPlayerID||this.allies.has(i.ownerID),a=this.getSAMBaseGroup(i,e),o=this.getSAMColor(i.ownerID,e),s=i.pos%r,c=(i.pos-s)/r;this.pushSAMCircles(n,i,s,c,o,a,t,e,this.dirtyGroups.has(a))}return n}pushSAMCircles(e,t,n,r,i,a,o,s,c){let l=t.samUpgradeStartTick,u=t.samUpgradeDuration??0,d=a*2,f=a*2+1;if(l!==null&&o>=l&&o-l<u){let a=o-l,c=Math.max(0,Math.min(1,a/u)),p=ir(t.samUpgradeTargetLevel??0),m=t.samUpgradeStartRange??0,h=m+(p-m)*c;e.push({x:n,y:r,radius:h,r:i[0],g:i[1],b:i[2],alpha:s?1:.35,group:d,spin:+!!s}),e.push({x:n,y:r,radius:p,r:i[0],g:i[1],b:i[2],alpha:s?.35:1,group:f,spin:+!s})}else e.push({x:n,y:r,radius:ir(t.level),r:i[0],g:i[1],b:i[2],alpha:1,group:d,spin:1}),c&&e.push({x:n,y:r,radius:ir(t.level),r:i[0],g:i[1],b:i[2],alpha:s?.35:1,group:f,spin:+!s})}uploadInstances(e){for(let e=0;e<this.groupBuckets.length;e++){let t=this.groupBuckets[e];t&&(t.length=0)}for(let t=0;t<e.length;t++){let n=e[t],r=this.groupBuckets[n.group];r||(r=[],this.groupBuckets[n.group]=r),r.push(n)}let t=0;for(let e=0;e<this.groupBuckets.length;e++){let n=this.groupBuckets[e];if(!(!n||n.length===0))for(let e=0;e<n.length;e++){let r=n[e],i=_h(r,n);for(let e=0;e<i.length;e++){let[n,a]=i[e];this.instanceBuf.ensureCapacity(t+1);let o=t*uh,s=this.instanceBuf.float32;s[o+0]=r.x,s[o+1]=r.y,s[o+2]=r.radius,s[o+3]=r.r,s[o+4]=r.g,s[o+5]=r.b,s[o+6]=r.alpha,s[o+7]=n,s[o+8]=a,s[o+9]=r.spin,t++}}}if(this.instanceCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,t*uh)}}setVisible(e){this.visible=e}draw(t){if(!this.visible||this.instanceCount===0)return;let n=performance.now();if(this.hasUpgradingSAM&&this.lastStructures&&n-this.lastGeometryTime>=e.GEOMETRY_REFRESH_INTERVAL_MS){this.lastGeometryTime=n;let e=this.collectSAMCircles(this.lastStructures,this.getContinuousTick());this.uploadInstances(e)}let r=this.gl,i=(performance.now()-this.startTime)/1e3,a=this.settings.samRadius;r.useProgram(this.program),r.uniformMatrix3fv(this.uCamera,!1,t),r.uniform1f(this.uTime,i),r.uniform1f(this.uOutline,+(this.colorMode===`owner`)),r.uniform1f(this.uStrokeWidth,a.strokeWidth),r.uniform1f(this.uDashLen,a.dashLen),r.uniform1f(this.uGapLen,a.gapLen),r.uniform1f(this.uRotationSpeed,a.rotationSpeed),r.uniform1f(this.uAlpha,a.alpha),r.uniform1f(this.uOutlineWidth,a.outlineWidth),r.uniform1f(this.uOutlineSoftness,a.outlineSoftness),r.bindVertexArray(this.vao),r.drawArraysInstanced(r.TRIANGLES,0,6,this.instanceCount)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}},yh=`#version 300 es
precision highp float;

in vec2 vWorld;

uniform vec2 uCenter;
uniform float uHalfSize;
uniform float uTime;     // frame tick counter (increments each frame)
uniform vec3 uColor;     // RGB [0-1], already lightened

out vec4 fragColor;

void main() {
  // Tile-space relative to center
  vec2 tile = floor(vWorld);
  vec2 rel = tile - floor(uCenter);
  float hs = uHalfSize;

  // Is this tile on the border of the selection box?
  bool inXRange = rel.x >= -hs && rel.x <= hs;
  bool inYRange = rel.y >= -hs && rel.y <= hs;
  bool isXEdge = abs(rel.x - hs) < 0.5 || abs(rel.x + hs) < 0.5;
  bool isYEdge = abs(rel.y - hs) < 0.5 || abs(rel.y + hs) < 0.5;

  bool onBorder = (isXEdge && inYRange) || (isYEdge && inXRange);
  if (!onBorder) discard;

  // Stipple: checkerboard pattern (every other tile)
  float stipple = mod(tile.x + tile.y, 2.0);
  if (stipple > 0.5) discard;

  // Pulsating alpha (matches game: base 200/255 ± 55/255)
  float baseAlpha = 0.784;  // 200/255
  float pulseAmp  = 0.216;  // 55/255
  float alpha = baseAlpha + sin(uTime * 0.1) * pulseAmp;

  fragColor = vec4(uColor, alpha);
}
`,bh=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;
uniform vec2 uCenter;    // world-space tile center (integer)
uniform float uHalfSize; // box half-size in tiles

out vec2 vWorld; // world-space position

void main() {
  // Map [0,1] → [-1,+1]
  vec2 local = aPos * 2.0 - 1.0;

  // Expand quad to cover box + 1-tile padding for AA
  float r = uHalfSize + 1.0;
  vWorld = uCenter + 0.5 + local * r;

  vec3 clip = uCamera * vec3(vWorld, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,xh=6,Sh=class{constructor(e){this.selections=[],this.gl=e,this.program=W(e,bh,yh,`SelectionBoxPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uHalfSize=e.getUniformLocation(this.program,`uHalfSize`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}setSelections(e){this.selections.length=0;for(let t=0;t<e.length;t++)this.selections.push(e[t])}update(e,t,n,r,i,a){this.selections.length=0,e&&this.selections.push({centerX:t,centerY:n,r,g:i,b:a})}hide(){this.selections.length=0}draw(e,t){if(this.selections.length===0)return;let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform1f(this.uHalfSize,xh),n.uniform1f(this.uTime,t),n.bindVertexArray(this.vao);for(let e=0;e<this.selections.length;e++){let t=this.selections[e];n.uniform2f(this.uCenter,t.centerX,t.centerY),n.uniform3f(this.uColor,t.r,t.g,t.b),n.drawArrays(n.TRIANGLES,0,6)}}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},Ch=`#version 300 es
precision highp float;

// Tints the blurred aura with the glow color and the breathing intensity
// (alpha * pulse), premultiplied for an additive composite over the map.
uniform sampler2D uTex;
uniform vec3 uGlowColor;
uniform float uIntensity; // glow alpha * pulse (0 = invisible)
in vec2 vUV;
out vec4 fragColor;

void main() {
  float g = texture(uTex, vUV).r;
  float a = clamp(g * uIntensity, 0.0, 1.0);
  fragColor = vec4(uGlowColor * a, a); // premultiplied
}
`,wh=`#version 300 es
precision highp float;
precision highp usampler2D;

// Emit 1 where a "small" player owns a tile. Territory is sparse (often lone
// tiles), so each cell scans its whole TILE_SCALE block instead of point-
// sampling, else single tiles get missed. OWNER_MASK/TILE_SCALE are injected.

uniform usampler2D uTileTex;      // R16UI — tile state (owner in low bits)
uniform usampler2D uHighlightSet; // R8UI, 1px per owner — 1 = highlighted
uniform vec2 uMapSize;

out vec4 fragColor;

void main() {
  ivec2 base = ivec2(gl_FragCoord.xy) * TILE_SCALE;
  for (int j = 0; j < TILE_SCALE; j++) {
    for (int i = 0; i < TILE_SCALE; i++) {
      ivec2 tc = base + ivec2(i, j);
      if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) continue;
      uint owner = texelFetch(uTileTex, tc, 0).r & uint(OWNER_MASK);
      if (owner != 0u &&
          texelFetch(uHighlightSet, ivec2(int(owner), 0), 0).r > 0u) {
        fragColor = vec4(1.0);
        return;
      }
    }
  }
  discard;
}
`,Th=kt(),Eh=4,Dh=class{constructor(e,t,n,r,i){this.active=!1,this.dirty=!1,this.animTime=0,this.lastTime=0,this.gl=e,this.settings=i,this.mapW=t,this.mapH=n,this.tileTex=r,this.extractProg=W(e,ep,U(wh,{...it,TILE_SCALE:Eh}),`SmallPlayerGlowPass.extractProg`),this.uExtractMapSize=e.getUniformLocation(this.extractProg,`uMapSize`),e.useProgram(this.extractProg),e.uniform1i(e.getUniformLocation(this.extractProg,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.extractProg,`uHighlightSet`),1),this.blurProg=W(e,$e,Mp,`SmallPlayerGlowPass.blurProg`),this.uBlurDir=e.getUniformLocation(this.blurProg,`uDir`),e.useProgram(this.blurProg),e.uniform1i(e.getUniformLocation(this.blurProg,`uTex`),0),this.compositeProg=W(e,Np,Ch,`SmallPlayerGlowPass.compositeProg`),this.uCompositeCam=e.getUniformLocation(this.compositeProg,`uCamera`),this.uCompositeMapSize=e.getUniformLocation(this.compositeProg,`uMapSize`),this.uGlowColor=e.getUniformLocation(this.compositeProg,`uGlowColor`),this.uIntensity=e.getUniformLocation(this.compositeProg,`uIntensity`),e.useProgram(this.compositeProg),e.uniform1i(e.getUniformLocation(this.compositeProg,`uTex`),0),this.setTex=H(e,{width:Th,height:1,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST});let a=Math.max(1,Math.ceil(t/Eh)),o=Math.max(1,Math.ceil(n/Eh));this.targetA=Xe(e,a,o),this.targetB=Xe(e,a,o),this.mapVao=Je(e,t,n),this.quadVao=mt(e)}update(e){if(e===null){this.active=!1;return}let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.setTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,Math.min(e.length,Th),1,t.RED_INTEGER,t.UNSIGNED_BYTE,e),this.active=!0,this.dirty=!0}blurAxis(e,t,n,r){let i=this.gl;Qe(i,t,()=>{i.uniform2f(this.uBlurDir,n,r),i.bindTexture(i.TEXTURE_2D,e.tex),i.bindVertexArray(this.quadVao),i.drawArrays(i.TRIANGLES,0,6)})}draw(e){let t=Math.min(1,this.settings.strength);if(!this.active||t<=0)return;let n=this.gl,r=this.settings,i=n.canvas,a=this.targetA,o=this.targetB,s=performance.now();this.lastTime>0&&(this.animTime+=Math.min(s-this.lastTime,100)*r.pulseSpeed),this.lastTime=s;let c=.5+.5*Math.sin(this.animTime);this.dirty&&=(n.disable(n.BLEND),n.useProgram(this.extractProg),n.uniform2f(this.uExtractMapSize,this.mapW,this.mapH),Qe(n,a,()=>{n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.tileTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.setTex),n.bindVertexArray(this.quadVao),n.drawArrays(n.TRIANGLES,0,6)}),n.useProgram(this.blurProg),n.activeTexture(n.TEXTURE0),this.blurAxis(a,o,1/a.w,0),this.blurAxis(o,a,0,1/o.h),!1),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),qe(n,i.width,i.height,()=>{n.useProgram(this.compositeProg),n.uniformMatrix3fv(this.uCompositeCam,!1,e),n.uniform2f(this.uCompositeMapSize,this.mapW,this.mapH),n.uniform3fv(this.uGlowColor,r.color),n.uniform1f(this.uIntensity,r.alpha*c*t),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,a.tex),n.bindVertexArray(this.mapVao),n.drawArrays(n.TRIANGLES,0,6)}),n.bindVertexArray(null),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)}dispose(){let e=this.gl;e.deleteProgram(this.extractProg),e.deleteProgram(this.blurProg),e.deleteProgram(this.compositeProg),e.deleteTexture(this.setTex),e.deleteTexture(this.targetA.tex),e.deleteTexture(this.targetB.tex),e.deleteFramebuffer(this.targetA.fbo),e.deleteFramebuffer(this.targetB.fbo),e.deleteVertexArray(this.mapVao),e.deleteVertexArray(this.quadVao)}},Oh=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTileTex;
uniform vec2 uMapSize;

uniform float uBreathRadius;   // normalized [0..1], animated via sin

// Configurable parameters (from render settings)
uniform float uHighlightRadiusSq; // tile highlight radius squared
uniform float uHighlightAlpha;    // tile highlight opacity
uniform vec4 uSelfRadii;          // (minR, maxR, _, _)
uniform vec4 uMateRadii;          // (minR, maxR, _, _)
uniform vec2 uGradientStops;      // (innerEdge, solidEnd)

in vec2 vWorldPos;
flat in vec2 vCenter;
flat in float vKind;   // 0 = enemy highlight, 1 = self ring, 2 = teammate ring
flat in vec3 vColor;

out vec4 fragColor;

void main() {
  float dx = vWorldPos.x - vCenter.x;
  float dy = vWorldPos.y - vCenter.y;
  float distSq = dx * dx + dy * dy;
  float dist = sqrt(distSq);

  // --- Enemy tile highlights: only unowned tiles within radius ---
  if (vKind < 0.5) {
    ivec2 tc = ivec2(floor(vWorldPos));
    if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y))
      discard;
    if (distSq > uHighlightRadiusSq) discard;
    uint raw = texelFetch(uTileTex, tc, 0).r;
    if ((raw & uint(OWNER_MASK)) != 0u) discard; // owned tile → no highlight
    fragColor = vec4(vColor, uHighlightAlpha);
    return;
  }

  // --- Breathing rings (self or teammate) ---
  float minR, maxR;
  vec3 color;
  if (vKind > 1.5) {
    minR = uMateRadii.x;
    maxR = uMateRadii.y;
    color = vColor;
  } else {
    minR = uSelfRadii.x;
    maxR = uSelfRadii.y;
    // Self ring pulses white → its base color in phase with the breath so one
    // end of the pulse always contrasts with the terrain.
    color = mix(vec3(1.0), vColor, uBreathRadius);
  }

  // Breathing ring: the gradient halo shrinks/expands in radius AND its
  // opacity pulses in phase with the breath — both driven by uBreathRadius.
  // Smooth bell shape: glow ramps up from center to the inner edge, stays
  // solid through the ring's body, then fades out past solidEnd.
  float scale = 0.5 + 0.65 * uBreathRadius; // 0.5 → 1.15 of base radius
  float bMinR = minR * scale;
  float bMaxR = maxR * scale;
  float range = bMaxR - bMinR;
  float t = (dist - bMinR) / range;
  float solidEnd = uGradientStops.y;
  float alpha = 0.0;
  if (dist < bMinR) {
    // Inner glow: transparent at the center (so your territory shows through)
    // ramping up to fully solid at the ring's inner edge.
    alpha = dist / max(bMinR, 0.001);
  } else if (t < solidEnd) {
    alpha = 1.0;
  } else if (t < 1.0) {
    alpha = 1.0 - (t - solidEnd) / (1.0 - solidEnd);
  }
  if (alpha <= 0.0) discard;
  // Opacity pulses 65% → 100% in phase with the radius.
  alpha *= 0.65 + 0.35 * uBreathRadius;
  fragColor = vec4(color, alpha);
}
`,kh=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;
// Per-instance: centerX, centerY, quadRadius, kind
//   kind: 0 = enemy tile highlight, 1 = self ring, 2 = teammate ring
layout(location = 1) in vec4 aInstance;
// Per-instance: r, g, b (base color)
layout(location = 2) in vec3 aColor;

uniform mat3 uCamera;

out vec2 vWorldPos;     // tile-space position of this fragment
flat out vec2 vCenter;  // spawn center (tile coords)
flat out float vKind;
flat out vec3 vColor;

void main() {
  vec2 local = aPos * 2.0 - 1.0; // [-1, +1]
  vec2 center = aInstance.xy;
  float r = aInstance.z;
  vKind = aInstance.w;
  vColor = aColor;
  vCenter = center;

  vec2 worldPos = center + local * r;
  vWorldPos = worldPos;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Ah=7,jh=1.15,Mh=1,Nh=0,Ph=1,Fh=2,Ih=class{constructor(e,t,n,r,i){this.active=!1,this.instanceCount=0,this.animTime=0,this.lastTime=0,this.gl=e,this.mapW=t,this.mapH=n,this.tileTex=r,this.settings=i,this.program=W(e,kh,U(Oh,{...it}),`SpawnOverlayPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uBreathRadius=e.getUniformLocation(this.program,`uBreathRadius`),this.uHighlightRadiusSq=e.getUniformLocation(this.program,`uHighlightRadiusSq`),this.uHighlightAlpha=e.getUniformLocation(this.program,`uHighlightAlpha`),this.uSelfRadii=e.getUniformLocation(this.program,`uSelfRadii`),this.uMateRadii=e.getUniformLocation(this.program,`uMateRadii`),this.uGradientStops=e.getUniformLocation(this.program,`uGradientStops`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let o=e.createBuffer();this.instanceBuf=new Ve(e,o,64,Ah),e.bindBuffer(e.ARRAY_BUFFER,o);let s=Ah*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,s,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,s,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}update(e){if(this.active=e.length>0,!this.active){this.instanceCount=0;return}let t=this.settings,n=t.selfMaxRad*jh+Mh,r=t.mateMaxRad*jh+Mh,i=t.highlightRadius+Mh;this.instanceBuf.ensureCapacity(e.length);let a=this.instanceBuf.float32,o=0,s=(e,t,n)=>{let r=o*Ah;a[r+0]=e.x,a[r+1]=e.y,a[r+2]=n,a[r+3]=t,a[r+4]=e.r,a[r+5]=e.g,a[r+6]=e.b,o++};for(let t of e)!t.isSelf&&!t.isTeammate&&s(t,Nh,i);for(let t of e)t.isTeammate&&s(t,Fh,r);for(let t of e)t.isSelf&&s(t,Ph,n);this.instanceCount=o;let c=this.gl;c.bindBuffer(c.ARRAY_BUFFER,this.instanceBuf.buffer),c.bufferSubData(c.ARRAY_BUFFER,0,this.instanceBuf.float32,0,o*Ah)}draw(e){if(!this.active||this.instanceCount===0)return;let t=this.gl,n=this.settings,r=performance.now();this.lastTime>0&&(this.animTime+=(r-this.lastTime)*n.animSpeed),this.lastTime=r;let i=.5+.5*Math.sin(this.animTime);t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uMapSize,this.mapW,this.mapH),t.uniform1f(this.uBreathRadius,i),t.uniform1f(this.uHighlightRadiusSq,n.highlightRadius*n.highlightRadius),t.uniform1f(this.uHighlightAlpha,n.highlightAlpha),t.uniform4f(this.uSelfRadii,n.selfMinRad,n.selfMaxRad,0,0),t.uniform4f(this.uMateRadii,n.mateMinRad,n.mateMaxRad,0,0),t.uniform2f(this.uGradientStops,n.gradientInnerEdge,n.gradientSolidEnd),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tileTex),t.bindVertexArray(this.vao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.instanceCount),t.bindVertexArray(null)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}},Lh=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;
uniform float uDistRange;
uniform float uOutlineWidth;
uniform int   uHighlightMask;
uniform float uHighlightDimAlpha;
uniform int   uClassic; // 1 = round_6x6 bitmap font, 0 = overpass MSDF

in vec2 vUV;
flat in float vAlive;
flat in float vAtlasIdx;
out vec4 fragColor;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  if (vAlive <= 0.0) discard;

  vec3 color;
  float alpha;

  if (uClassic == 1) {
    // round_6x6_modified bitmap: white digits with a baked-in dark outline
    // on a transparent background (non-premultiplied RGBA).
    vec4 texel = texture(uAtlas, vUV);
    if (texel.a <= 0.0) discard;
    color = texel.rgb;
    alpha = texel.a;
  } else {
    // overpass-bold MSDF: white fill with a synthesized dark outline.
    vec3 msd = texture(uAtlas, vUV).rgb;
    float sd = median(msd.r, msd.g, msd.b);

    vec2 unitRange = uDistRange / vec2(textureSize(uAtlas, 0));
    vec2 screenTexSize = 1.0 / fwidth(vUV);
    float screenPxRange = max(0.5 * dot(unitRange, screenTexSize), 1.0);

    float screenPxDist = screenPxRange * (sd - 0.5);
    float fillAlpha = clamp(screenPxDist + 0.5, 0.0, 1.0);

    float maxOutline = max(screenPxRange * 0.5 - 1.0, 0.0);
    float effectiveOutline = min(uOutlineWidth, maxOutline);
    float outlineAlpha = clamp(screenPxDist + effectiveOutline + 0.5, 0.0, 1.0);

    color = mix(vec3(0.0), vec3(1.0), fillAlpha);
    alpha = outlineAlpha;
  }

  // Dim level text for non-highlighted structure types
  if (uHighlightMask != 0) {
    int bit = 1 << int(vAtlasIdx + 0.5);
    if ((uHighlightMask & bit) == 0) {
      alpha *= uHighlightDimAlpha;
    }
  }

  fragColor = vec4(color, alpha);
}
`,Rh=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

// Per-instance: worldX, worldY, cursorX, charCode
layout(location = 1) in vec4 aInst;
layout(location = 2) in float aAtlasIdx;

uniform sampler2D uGlyphMetrics;  // CHAR_RANGE x 2, RGBA32F

uniform mat3  uCamera;
uniform float uZoom;

// Structure icon sizing (mirrors structure.vert.glsl)
uniform float uIconSize;
uniform float uDotsThreshold;
uniform float uScaleFactor;
uniform float uIconGrowZoom;

// Text sizing
uniform float uFontSize;
uniform float uAtlasScaleH;
uniform float uBase;
uniform float uLevelScale;
uniform float uLevelOffsetY;  // extra height above icon, in halfIconSize units

out vec2 vUV;
flat out float vAlive;
flat out float vAtlasIdx;

void main() {
  float worldX  = aInst.x;
  float worldY  = aInst.y;
  float cursorX = aInst.z;
  int charCode  = int(aInst.w);

  // Same icon scale logic as structure.vert.glsl
  float iconScale;
  if (uZoom <= uDotsThreshold) {
    iconScale = 0.0;  // hidden in dots mode
  } else if (uZoom >= uIconGrowZoom) {
    // World-anchored: grow with the map past this zoom, matching the icons.
    iconScale = uZoom / uIconGrowZoom;
  } else {
    iconScale = min(1.0, uZoom / uScaleFactor);
  }

  // Cull when invisible
  if (iconScale <= 0.0 || charCode == 0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlive = 0.0;
    return;
  }
  vAlive = 1.0;
  vAtlasIdx = aAtlasIdx;

  float halfIconSize = uIconSize * iconScale * 0.5 / uZoom;

  // Level text scale: proportional to icon size
  float levelScale = halfIconSize * uLevelScale / uFontSize;

  // Glyph metrics from data texture
  vec4 m0 = texelFetch(uGlyphMetrics, ivec2(charCode, 0), 0); // xadvance, xoffset, yoffset, width
  vec4 m1 = texelFetch(uGlyphMetrics, ivec2(charCode, 1), 0); // height, u0, v0, u1

  float glyphW = m0.w;
  float glyphH = m1.x;
  float u0 = m1.y;
  float v0 = m1.z;
  float u1 = m1.w;
  float v1 = v0 + glyphH / uAtlasScaleH;

  // Skip degenerate glyphs
  if (glyphW <= 0.0 || glyphH <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlive = 0.0;
    return;
  }

  // Position above icon center
  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  float baselineY = -uBase * 0.5;
  // above icon top edge; uLevelOffsetY raises (or lowers) it proportionally
  float yOff =
    -halfIconSize * (1.0 + uLevelOffsetY) - levelScale * uBase * 0.6;

  vec2 glyphOrigin = vec2(
    cursorX + m0.y,  // + xoffset
    baselineY + m0.z // + yoffset
  ) * levelScale;

  vec2 glyphSize = vec2(glyphW, glyphH) * levelScale;

  vec2 worldPos = center + vec2(0.0, yOff) + glyphOrigin + aPos * glyphSize;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
}
`,zh=R(`fonts/round_6x6_modified.png`),Bh=R(`atlases/msdf-atlas.png`),Vh=[nt,pt,Be,Ze,at,St],Hh=4,Uh=5,Wh=Uh*4,Gh=16,Kh=16,qh=208,Jh=114;function Yh(){let e=[];for(let t=0;t<=9;t++)e.push({id:48+t,char:String(t),width:16,height:16,xoffset:0,yoffset:0,xadvance:14,x:t*16,y:64,page:0});return e}var Xh=class{constructor(e,t,n){this.instanceCount=0,this.charCodes=new Uint8Array(32),this.cursors=new Float32Array(32),this.typeToAtlasCol=new Map,this.highlightMask=0,this.lastUnits=null,this.layoutClassic=null,this.gl=e,this.settings=n,this.mapW=t.mapWidth;for(let e=0;e<t.unitTypes.length;e++){let n=Vh.indexOf(t.unitTypes[e]);n>=0&&this.typeToAtlasCol.set(t.unitTypes[e],n)}this.kernTable=new Int8Array(384*384);let r=Yh(),i={fontSize:Gh,base:Kh,scaleW:qh,scaleH:Jh,distanceRange:0,chars:r,kernings:[]};this.classic={glyph:Qp(r),metricsTex:tm(e,i),fontSize:i.fontSize,base:i.base,atlasScaleH:i.scaleH,distanceRange:i.distanceRange,atlasTex:null,atlasReady:!1};let a=Zp();this.msdf={glyph:Qp(a.chars),metricsTex:tm(e,a),fontSize:a.fontSize,base:a.base,atlasScaleH:a.scaleH,distanceRange:a.distanceRange,atlasTex:null,atlasReady:!1},this.program=W(e,Rh,Lh,`StructureLevelPass`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),e.uniform1i(e.getUniformLocation(this.program,`uGlyphMetrics`),1),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uIconSize=e.getUniformLocation(this.program,`uIconSize`),this.uDotsThreshold=e.getUniformLocation(this.program,`uDotsThreshold`),this.uScaleFactor=e.getUniformLocation(this.program,`uScaleFactor`),this.uIconGrowZoom=e.getUniformLocation(this.program,`uIconGrowZoom`),this.uFontSize=e.getUniformLocation(this.program,`uFontSize`),this.uAtlasScaleH=e.getUniformLocation(this.program,`uAtlasScaleH`),this.uBase=e.getUniformLocation(this.program,`uBase`),this.uDistRange=e.getUniformLocation(this.program,`uDistRange`),this.uOutlineWidth=e.getUniformLocation(this.program,`uOutlineWidth`),this.uLevelScale=e.getUniformLocation(this.program,`uLevelScale`),this.uLevelOffsetY=e.getUniformLocation(this.program,`uLevelOffsetY`),this.uHighlightMask=e.getUniformLocation(this.program,`uHighlightMask`),this.uHighlightDimAlpha=e.getUniformLocation(this.program,`uHighlightDimAlpha`),this.uClassic=e.getUniformLocation(this.program,`uClassic`),this.loadAtlas(zh,this.classic),this.loadAtlas(Bh,this.msdf);let o=e.createBuffer();this.instanceBuf=new Ve(e,o,4096,Uh),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,o),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,Wh,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,1,e.FLOAT,!1,Wh,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}loadAtlas(e,t){let n=new Image;n.crossOrigin=`anonymous`,n.onload=()=>{let e=this.gl,r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),t.atlasTex=r,t.atlasReady=!0},n.src=e}updateStructures(e){this.lastUnits=e;let t=this.settings.structureLevel.classicFont;this.layoutClassic=t;let n=t?this.classic.glyph:this.msdf.glyph,r=0;for(let t of e.values()){if(!t.isActive||!Ge.has(t.unitType)||t.level<=1)continue;let e=t.level.toString();wm(e,n,this.kernTable,this.charCodes,this.cursors);let i=t.pos%this.mapW,a=(t.pos-i)/this.mapW,o=Math.min(e.length,Hh),s=this.typeToAtlasCol.get(t.unitType)??0;for(let e=0;e<o;e++){this.instanceBuf.ensureCapacity(r+1);let t=r*Uh,n=this.instanceBuf.float32;n[t+0]=i,n[t+1]=a,n[t+2]=this.cursors[e],n[t+3]=this.charCodes[e],n[t+4]=s,r++}}if(this.instanceCount=r,r>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,r*Uh)}}draw(e,t){let n=this.settings.structureLevel.classicFont;this.lastUnits!==null&&this.layoutClassic!==n&&this.updateStructures(this.lastUnits);let r=n?this.classic:this.msdf;if(!r.atlasReady||this.instanceCount===0)return;let i=this.gl,a=this.settings.structure,o=this.settings.structureLevel;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform1f(this.uZoom,t),i.uniform1f(this.uIconSize,a.iconSize),i.uniform1f(this.uDotsThreshold,a.dotsZoomThreshold),i.uniform1f(this.uScaleFactor,a.iconScaleFactorZoomedOut),i.uniform1f(this.uIconGrowZoom,a.iconGrowZoom),i.uniform1f(this.uFontSize,r.fontSize),i.uniform1f(this.uAtlasScaleH,r.atlasScaleH),i.uniform1f(this.uBase,r.base),i.uniform1f(this.uDistRange,r.distanceRange),i.uniform1f(this.uOutlineWidth,o.outlineWidth),i.uniform1f(this.uLevelScale,o.scale),i.uniform1f(this.uLevelOffsetY,o.offsetY),i.uniform1i(this.uHighlightMask,this.highlightMask),i.uniform1f(this.uHighlightDimAlpha,a.highlightDimAlpha),i.uniform1i(this.uClassic,+!!n),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,r.atlasTex),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,r.metricsTex),i.bindVertexArray(this.vao),i.drawArraysInstanced(i.TRIANGLES,0,6,this.instanceCount)}setHighlightTypes(e){let t=0;if(e)for(let n of e){let e=this.typeToAtlasCol.get(n);e!==void 0&&(t|=1<<e)}this.highlightMask=t}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao),e.deleteTexture(this.classic.metricsTex),e.deleteTexture(this.msdf.metricsTex),this.classic.atlasTex&&e.deleteTexture(this.classic.atlasTex),this.msdf.atlasTex&&e.deleteTexture(this.msdf.atlasTex)}},Zh=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;
uniform float uDistRange;

in vec2 vUV;
flat in float vAlpha;
flat in vec3 vColor;
flat in float vOutlineWidth;
out vec4 fragColor;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  if (vAlpha <= 0.0) discard;

  vec3 msd = texture(uAtlas, vUV).rgb;
  float sd = median(msd.r, msd.g, msd.b);

  vec2 unitRange = uDistRange / vec2(textureSize(uAtlas, 0));
  vec2 screenTexSize = 1.0 / fwidth(vUV);
  float screenPxRange = max(0.5 * dot(unitRange, screenTexSize), 1.0);

  float screenPxDist = screenPxRange * (sd - 0.5);
  float fillAlpha = clamp(screenPxDist + 0.5, 0.0, 1.0);

  // Colored text with dark outline
  float maxOutline = max(screenPxRange * 0.5 - 1.0, 0.0);
  float effectiveOutline = min(vOutlineWidth, maxOutline);
  float outlineDist = screenPxDist + effectiveOutline;
  float outlineAlpha = clamp(outlineDist + 0.5, 0.0, 1.0);

  // Soft dark halo extending past the hard outline — easier to read over
  // busy terrain. Uses whatever SDF range is left after the hard outline so
  // it can always fade fully to zero before hitting the SDF saturation
  // boundary (otherwise the glow clips at the glyph quad and looks square).
  // Quadratic falloff for a true glow shape — brightest right next to the
  // text, smoothly thinning to nothing.
  float glowExtent = max(screenPxRange * 0.5 - effectiveOutline - 0.5, 0.0);
  float glowT =
    clamp((outlineDist + glowExtent) / max(glowExtent, 0.0001), 0.0, 1.0);
  float glowAlpha = glowExtent > 0.0 ? glowT * glowT * 0.75 : 0.0;

  vec3 color = mix(vec3(0.0), vColor, fillAlpha);
  fragColor = vec4(color, max(outlineAlpha, glowAlpha) * vAlpha);
}
`,Qh=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

// Per-instance: worldX, worldY, cursorX, charCode
layout(location = 1) in vec4 aInst;
// Per-instance: alpha, colorR, colorG, colorB
layout(location = 2) in vec4 aStyle;
// Per-instance: scale, outlineWidth
layout(location = 3) in vec2 aScaleOutline;

uniform sampler2D uGlyphMetrics;  // CHAR_RANGE x 2, RGBA32F

uniform mat3  uCamera;
uniform float uFontSize;
uniform float uAtlasScaleH;
uniform float uBase;
uniform float uZoom;
uniform float uMinScreenScale;  // minimum world-scale factor when zoomed out

out vec2 vUV;
flat out float vAlpha;
flat out vec3 vColor;
flat out float vOutlineWidth;

void main() {
  float worldX  = aInst.x;
  float worldY  = aInst.y;
  float cursorX = aInst.z;
  int charCode  = int(aInst.w);

  if (charCode == 0 || aStyle.x <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlpha = 0.0;
    vColor = vec3(1.0);
    vOutlineWidth = 0.0;
    return;
  }

  // Per-instance scale (world units per font em).
  // Zoom-aware minimum: ensure popups don't shrink below minScreenScale when
  // zoomed out.  effectiveScale = max(scale, minScreenScale / zoom) so that
  // at low zoom the popup grows in world-space to maintain a minimum screen
  // footprint.
  float effectiveScale = max(aScaleOutline.x, uMinScreenScale / uZoom);
  float worldScale = effectiveScale / uFontSize;

  // Glyph metrics from data texture
  vec4 m0 = texelFetch(uGlyphMetrics, ivec2(charCode, 0), 0);
  vec4 m1 = texelFetch(uGlyphMetrics, ivec2(charCode, 1), 0);

  float glyphW = m0.w;
  float glyphH = m1.x;
  float u0 = m1.y;
  float v0 = m1.z;
  float u1 = m1.w;
  float v1 = v0 + glyphH / uAtlasScaleH;

  if (glyphW <= 0.0 || glyphH <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlpha = 0.0;
    vColor = vec3(1.0);
    vOutlineWidth = 0.0;
    return;
  }

  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  float baselineY = -uBase * 0.5;

  vec2 glyphOrigin = vec2(
    cursorX + m0.y,
    baselineY + m0.z
  ) * worldScale;

  vec2 glyphSize = vec2(glyphW, glyphH) * worldScale;

  vec2 worldPos = center + glyphOrigin + aPos * glyphSize;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
  vAlpha = aStyle.x;
  vColor = aStyle.yzw;
  vOutlineWidth = aScaleOutline.y;
}
`,$h=R(`atlases/msdf-atlas.png`),eg=10,tg=eg*4,ng=2500,rg=8,ig=6,ag=2,og=1.4,sg=17,cg=1.2;function lg(e){return e>=1e6?(e/1e6).toFixed(1)+`M`:e>=1e3?(e/1e3).toFixed(1)+`K`:e.toString()}var ug=class{now(){return this.timeFn()}constructor(e,t,n){this.config=n,this.maxInstances=512,this.instanceCount=0,this.atlasTex=null,this.atlasReady=!1,this.charCodes=new Uint8Array(32),this.cursors=new Float32Array(32),this.active=[],this.ghostCostLabel=null,this.attackTroopLabels=[],this.mapW=0,this.timeFn=()=>performance.now(),this.gl=e,this.settings=t;let r=Zp();this.glyph=Qp(r.chars),this.kernTable=new Int8Array(384*384),this.distanceRange=r.distanceRange,this.fontSize=r.fontSize,this.atlasScaleH=r.scaleH,this.base=r.base,this.program=W(e,Qh,Zh,`WorldTextPass`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),e.uniform1i(e.getUniformLocation(this.program,`uGlyphMetrics`),1),e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),this.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uAtlasScaleH`),this.atlasScaleH),e.uniform1f(e.getUniformLocation(this.program,`uBase`),this.base),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uMinScreenScale=e.getUniformLocation(this.program,`uMinScreenScale`),this.uDistRange=e.getUniformLocation(this.program,`uDistRange`),this.glyphMetricsTex=tm(e,r),this.loadAtlas(),this.instanceData=new Float32Array(this.maxInstances*eg),this.instanceBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf),e.bufferData(e.ARRAY_BUFFER,this.instanceData.byteLength,e.DYNAMIC_DRAW),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,tg,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,4,e.FLOAT,!1,tg,16),e.vertexAttribDivisor(2,1),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,2,e.FLOAT,!1,tg,32),e.vertexAttribDivisor(3,1),e.bindVertexArray(null)}loadAtlas(){let e=new Image;e.crossOrigin=`anonymous`,e.onload=()=>{let t=this.gl,n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),this.atlasTex=n,this.atlasReady=!0},e.src=$h}setMapWidth(e){this.mapW=e}applyConquestEvents(e){let t=this.now();for(let n of e){let e=t-(n.tickAge??0)*this.config.msPerTick();t-e>=ng||this.active.push({x:n.x,y:n.y+rg,text:`+ `+lg(n.gold),startMs:e,lifetimeMs:ng,riseSpeed:0,colorR:1,colorG:1,colorB:1,scale:ig,outlineWidth:ag})}}applyBonusEvents(e){if(this.mapW===0)return;let t=this.now(),n=this.settings.bonusPopup;for(let r of e){if(r.gold===0)continue;let e=r.tile%this.mapW,i=Math.floor(r.tile/this.mapW),a=r.gold>=0?`+`:`-`;this.active.push({x:e,y:i+n.yOffset,text:a+` `+lg(Math.abs(r.gold)),startMs:t,lifetimeMs:n.lifetimeMs,riseSpeed:n.riseSpeed,colorR:n.colorR,colorG:n.colorG,colorB:n.colorB,scale:n.scale,outlineWidth:n.outlineWidth})}}setGhostCostLabel(e){if(e===null){this.ghostCostLabel=null;return}let t=1,n=1,r=1;e.canAfford?e.canPlace||(t=.6,n=.6,r=.6):(n=.3,r=.3),this.ghostCostLabel={x:e.tileX,y:e.tileY,text:e.cost>0?B(e.cost):``,topText:e.topText,colorR:t,colorG:n,colorB:r}}setAttackTroopLabels(e){this.attackTroopLabels=e}tick(e,t){if(this.active.length===0&&this.ghostCostLabel===null&&this.attackTroopLabels.length===0){this.instanceCount=0;return}let n=this.now();for(let e=this.active.length-1;e>=0;e--)n-this.active[e].startMs>=this.active[e].lifetimeMs&&(this.active[e]=this.active[this.active.length-1],this.active.pop());this.rebuildInstances(n,e,t)}rebuildInstances(e,t,n){let r=0,i=Ue();for(let t of this.active){let i=e-t.startMs,a=Math.max(0,1-i/t.lifetimeMs);if(a<=0)continue;let o=t.riseSpeed>0?t.y-i/1e3*t.riseSpeed:t.y;if(n){let e=(t.text.length*.6+.5)*t.scale,r=t.scale;if(t.x+e<n.minX||t.x-e>n.maxX||o+r<n.minY||o-r>n.maxY)continue}wm(t.text,this.glyph,this.kernTable,this.charCodes,this.cursors);let s=Math.min(t.text.length,32);for(let e=0;e<s;e++){if(this.charCodes[e]===0)continue;r>=this.maxInstances&&this.growBuffer();let n=r*eg;this.instanceData[n+0]=t.x,this.instanceData[n+1]=o,this.instanceData[n+2]=this.cursors[e],this.instanceData[n+3]=this.charCodes[e],this.instanceData[n+4]=a,this.instanceData[n+5]=t.colorR,this.instanceData[n+6]=t.colorG,this.instanceData[n+7]=t.colorB,this.instanceData[n+8]=t.scale,this.instanceData[n+9]=t.outlineWidth,r++}}let a=sg*i/Math.max(t,1e-4);for(let e of this.attackTroopLabels){if(n){let t=(e.text.length*.6+.5)*a,r=a;if(e.x+t<n.minX||e.x-t>n.maxX||e.y+r<n.minY||e.y-r>n.maxY)continue}wm(e.text,this.glyph,this.kernTable,this.charCodes,this.cursors);let t=Math.min(e.text.length,32);for(let n=0;n<t;n++){if(this.charCodes[n]===0)continue;r>=this.maxInstances&&this.growBuffer();let t=r*eg;this.instanceData[t+0]=e.x,this.instanceData[t+1]=e.y,this.instanceData[t+2]=this.cursors[n],this.instanceData[t+3]=this.charCodes[n],this.instanceData[t+4]=1,this.instanceData[t+5]=e.colorR,this.instanceData[t+6]=e.colorG,this.instanceData[t+7]=e.colorB,this.instanceData[t+8]=a,this.instanceData[t+9]=cg,r++}}let o=this.ghostCostLabel;if(o){let e=1/Math.max(t,1e-4),a=this.settings.ghostCost.screenScale*i*e,s=o.y+this.settings.ghostCost.screenYOffset*i*e,c=(Math.max(o.text.length,o.topText?.length??0)*.6+.5)*a,l=a;if(!n||o.x+c>=n.minX&&o.x-c<=n.maxX&&s+l>=n.minY&&s-l<=n.maxY){if(o.topText){let t=o.y-30*i*e;wm(o.topText,this.glyph,this.kernTable,this.charCodes,this.cursors);let n=Math.min(o.topText.length,32);for(let e=0;e<n;e++){if(this.charCodes[e]===0)continue;r>=this.maxInstances&&this.growBuffer();let n=r*eg;this.instanceData[n+0]=o.x,this.instanceData[n+1]=t,this.instanceData[n+2]=this.cursors[e],this.instanceData[n+3]=this.charCodes[e],this.instanceData[n+4]=1,this.instanceData[n+5]=o.colorR,this.instanceData[n+6]=o.colorG,this.instanceData[n+7]=o.colorB,this.instanceData[n+8]=a,this.instanceData[n+9]=og,r++}}if(o.text){wm(o.text,this.glyph,this.kernTable,this.charCodes,this.cursors);let e=Math.min(o.text.length,32);for(let t=0;t<e;t++){if(this.charCodes[t]===0)continue;r>=this.maxInstances&&this.growBuffer();let e=r*eg;this.instanceData[e+0]=o.x,this.instanceData[e+1]=s,this.instanceData[e+2]=this.cursors[t],this.instanceData[e+3]=this.charCodes[t],this.instanceData[e+4]=1,this.instanceData[e+5]=o.colorR,this.instanceData[e+6]=o.colorG,this.instanceData[e+7]=o.colorB,this.instanceData[e+8]=a,this.instanceData[e+9]=og,r++}}}}this.instanceCount=r}growBuffer(){this.maxInstances*=2;let e=new Float32Array(this.maxInstances*eg);e.set(this.instanceData),this.instanceData=e;let t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferData(t.ARRAY_BUFFER,this.instanceData.byteLength,t.DYNAMIC_DRAW)}draw(e,t){if(!this.atlasReady||this.instanceCount===0||t<this.settings.bonusPopup.cullZoom)return;let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform1f(this.uZoom,t);let r=Ue();n.uniform1f(this.uMinScreenScale,this.settings.bonusPopup.minScreenScale*r),n.uniform1f(this.uDistRange,this.distanceRange),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.atlasTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.glyphMetricsTex),n.bindBuffer(n.ARRAY_BUFFER,this.instanceBuf),n.bufferSubData(n.ARRAY_BUFFER,0,this.instanceData,0,this.instanceCount*eg),n.bindVertexArray(this.vao),n.drawArraysInstanced(n.TRIANGLES,0,6,this.instanceCount)}setTimeFn(e){this.timeFn=e}clear(){this.active.length=0,this.attackTroopLabels=[],this.instanceCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteBuffer(this.instanceBuf),e.deleteVertexArray(this.vao),e.deleteTexture(this.glyphMetricsTex),this.atlasTex&&e.deleteTexture(this.atlasTex)}},dg=0,fg=1,pg=2,mg=kt(),hg=2,gg=class{constructor(e,t){this.settings=t,this.cpuData=new Uint8Array(mg*hg*4),this.dirty=!1,this.localPlayerID=0,this.relationData=null,this.relationSize=0,this.gl=e,this.rebuild(),this.tex=H(e,{width:mg,height:hg,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:this.cpuData,filter:e.NEAREST}),this.dirty=!1}getTexture(){return this.tex}setLocalPlayer(e){e!==this.localPlayerID&&(this.localPlayerID=e,this.rebuild())}updateRelations(e,t){this.relationData=e,this.relationSize=t,this.rebuild()}flush(){if(!this.dirty)return;let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.tex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,mg,hg,e.RGBA,e.UNSIGNED_BYTE,this.cpuData),this.dirty=!1}rebuild(){let e=this.cpuData,t=this.localPlayerID,n=this.relationData,r=this.relationSize,i=this.settings.affiliation,a=e=>Math.round(e*255),o=a(i.selfR),s=a(i.selfG),c=a(i.selfB),l=a(i.allyR),u=a(i.allyG),d=a(i.allyB),f=a(i.neutralR),p=a(i.neutralG),m=a(i.neutralB),h=a(i.enemyR),g=a(i.enemyG),_=a(i.enemyB);for(let i=0;i<mg;i++){let a=dg;n&&t>0&&i>0&&i<r&&t<r&&(a=n[t*r+i]);let v=i>0&&i===t,y=i*4;i===0?(e[y]=0,e[y+1]=0,e[y+2]=0,e[y+3]=0):v?(e[y]=o,e[y+1]=s,e[y+2]=c,e[y+3]=255):a===fg?(e[y]=l,e[y+1]=u,e[y+2]=d,e[y+3]=255):a===pg?(e[y]=h,e[y+1]=g,e[y+2]=_,e[y+3]=255):(e[y]=f,e[y+1]=p,e[y+2]=m,e[y+3]=255);let b=(mg+i)*4;i===0?(e[b]=0,e[b+1]=0,e[b+2]=0,e[b+3]=0):v?(e[b]=o,e[b+1]=s,e[b+2]=c,e[b+3]=255):a===fg?(e[b]=l,e[b+1]=u,e[b+2]=d,e[b+3]=255):(e[b]=h,e[b+1]=g,e[b+2]=_,e[b+3]=255)}this.dirty=!0}dispose(){this.gl.deleteTexture(this.tex)}};function _g(e,t,n,r,i){return{tileTex:H(e,{width:t,height:n,internalFormat:e.R16UI,format:e.RED_INTEGER,type:e.UNSIGNED_SHORT,data:null,filter:e.NEAREST}),trailTex:H(e,{width:t,height:n,internalFormat:e.R16UI,format:e.RED_INTEGER,type:e.UNSIGNED_SHORT,data:null,filter:e.NEAREST}),paletteTex:r,borderTex:i,heatTexA:H(e,{width:t,height:n,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),heatTexB:H(e,{width:t,height:n,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST})}}function vg(e,t){e.deleteTexture(t.tileTex),e.deleteTexture(t.trailTex),e.deleteTexture(t.heatTexA),e.deleteTexture(t.heatTexB)}var yg=`#version 300 es
precision highp float;
precision highp usampler2D;
uniform sampler2D uHeatTex;
uniform usampler2D uTileTex;
uniform usampler2D uPrevTileTex;
uniform vec2 uMapSize;
uniform float uDecay;
out vec4 fragColor;
void main() {
  ivec2 tc = ivec2(gl_FragCoord.xy);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  float heat = texelFetch(uHeatTex, tc, 0).r;
  uint curr = texelFetch(uTileTex, tc, 0).r;
  uint prev = texelFetch(uPrevTileTex, tc, 0).r;

  bool wasFallout = (prev & (1u << FALLOUT_BIT)) != 0u;
  bool isFallout  = (curr & (1u << FALLOUT_BIT)) != 0u;

  if (isFallout && !wasFallout) {
    heat = 1.0;
  } else if (!isFallout && wasFallout) {
    heat = 0.0;
  } else {
    heat = max(0.0, heat - uDecay / 255.0);
  }

  fragColor = vec4(heat, 0.0, 0.0, 1.0);
}
`,bg=class{constructor(e,t,n,r,i,a,o){this.heatCurrent=0,this.needsPrevTileCopy=!0,this.pendingDecay=0,this.heatActive=!1,this.decayAccumulated=0,this.gl=e,this.settings=o,this.mapW=t,this.mapH=n,this.tileTex=r,this.heatTexA=i,this.heatTexB=a,this.heatFboA=this.createFboFor(i),this.heatFboB=this.createFboFor(a),this.prevTileTex=H(e,{width:t,height:n,internalFormat:e.R16UI,format:e.RED_INTEGER,type:e.UNSIGNED_SHORT,data:null,filter:e.NEAREST}),this.prevTileFbo=this.createFboFor(this.prevTileTex),this.tileTexReadFbo=this.createFboFor(r),this.decayProg=W(e,ep,U(yg,it),`HeatManager`),this.uDecayMapSize=e.getUniformLocation(this.decayProg,`uMapSize`),this.uDecayAmount=e.getUniformLocation(this.decayProg,`uDecay`),e.useProgram(this.decayProg),e.uniform1i(e.getUniformLocation(this.decayProg,`uHeatTex`),0),e.uniform1i(e.getUniformLocation(this.decayProg,`uTileTex`),1),e.uniform1i(e.getUniformLocation(this.decayProg,`uPrevTileTex`),2),this.quadVao=mt(e)}createFboFor(e){let t=this.gl,n=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,n),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),t.bindFramebuffer(t.FRAMEBUFFER,null),n}get heatReadTex(){return this.heatCurrent===0?this.heatTexA:this.heatTexB}get heatWriteFbo(){return this.heatCurrent===0?this.heatFboB:this.heatFboA}swapHeat(){this.heatCurrent=1-this.heatCurrent}getHeatTex(){return this.heatReadTex}get isHeatActive(){return this.heatActive}updateHeat(){let e=this.gl,t=this.mapW,n=this.mapH;if(this.needsPrevTileCopy){this.blitTileToPrev(),this.needsPrevTileCopy=!1,e.bindFramebuffer(e.FRAMEBUFFER,null);return}if(!this.heatActive){this.pendingDecay=0;return}e.bindFramebuffer(e.FRAMEBUFFER,this.heatWriteFbo),e.viewport(0,0,t,n),e.disable(e.BLEND),e.useProgram(this.decayProg),e.uniform2f(this.uDecayMapSize,t,n),e.uniform1f(this.uDecayAmount,this.pendingDecay),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.heatReadTex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.prevTileTex),e.bindVertexArray(this.quadVao),e.drawArrays(e.TRIANGLES,0,6),this.swapHeat(),this.decayAccumulated+=this.pendingDecay,this.decayAccumulated>=255&&(this.heatActive=!1),this.pendingDecay=0,this.blitTileToPrev(),e.bindFramebuffer(e.FRAMEBUFFER,null)}blitTileToPrev(){let e=this.gl;e.bindFramebuffer(e.READ_FRAMEBUFFER,this.tileTexReadFbo),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this.prevTileFbo),e.blitFramebuffer(0,0,this.mapW,this.mapH,0,0,this.mapW,this.mapH,e.COLOR_BUFFER_BIT,e.NEAREST)}decayHeat(){this.pendingDecay+=this.settings.falloutBloom.heatDecayPerTick}activate(){this.heatActive=!0,this.decayAccumulated=0}dispose(){let e=this.gl;e.deleteProgram(this.decayProg),e.deleteFramebuffer(this.heatFboA),e.deleteFramebuffer(this.heatFboB),e.deleteFramebuffer(this.prevTileFbo),e.deleteFramebuffer(this.tileTexReadFbo),e.deleteTexture(this.prevTileTex),e.deleteVertexArray(this.quadVao)}},xg=new Set([`Missile Silo`,`SAM Launcher`,`City`,`Atom Bomb`,`Hydrogen Bomb`]),Sg=new Set([`SAM Launcher`,`Atom Bomb`,`Hydrogen Bomb`]),Cg=`renderer:grid_view_enabled`,wg=class{constructor(e,t,n,r,i,a,o=requestAnimationFrame.bind(window),s=cancelAnimationFrame.bind(window)){this.inSpawnPhase=!1,this.mapLayerPasses=new Map,this.terrainBytesTex=null,this.storedLayers=[],this.storedLayerImages=new Map,this.animId=null,this.frameTick=0,this.mapW=0,this.mapH=0,this.lastUnits=new Map,this.lastStructures=new Map,this.localPlayerID=0,this.playerTeams=new Map,this.altView=!1,this.gridView=!1,this.samGhostVisible=!1,this.samHighlightVisible=!1,this.selectedUnitIds=[],this.selectionBoxEntries=[],this.textBoundsScratch={minX:0,minY:0,maxX:0,maxY:0},this.renderLoop=()=>{this.draw(),this.animId=this.raf(this.renderLoop)},this.canvas=e,this.settings=a,this.raf=o,this.caf=s;let c=Ye(e,{alpha:!1,antialias:!1,powerPreference:`high-performance`});if(c.gl===null)throw new He(c.status,c.renderer);this.glLimited=c.status===`limited`?{renderer:c.renderer,maxTextureSize:c.maxTextureSize}:null;let l=c.gl;this.gl=l,l.pixelStorei(l.UNPACK_ALIGNMENT,1),l.getExtension(`EXT_color_buffer_float`)||console.warn(`EXT_color_buffer_float not available — palette may fail`);let u=t.mapWidth,d=t.mapHeight;this.mapW=u,this.mapH=d,this.camera=new et(u,d);let f=n();this.terrainPass=new ft(l,n,f,u,d,{backgroundColor:V(this.settings.terrain.backgroundColor)??void 0,oceanColor:V(this.settings.terrain.oceanColor)??void 0,sandColor:V(this.settings.terrain.sandColor)??void 0,plainsColor:V(this.settings.terrain.plainsColor)??void 0,highlandColor:V(this.settings.terrain.highlandColor)??void 0,mountainColor:V(this.settings.terrain.mountainColor)??void 0}),this.terrainBytesTex=H(l,{width:u,height:d,internalFormat:l.R8UI,format:l.RED_INTEGER,type:l.UNSIGNED_BYTE,data:f,filter:l.NEAREST}),this.paletteData=r;let p=kt();this.paletteTex=H(l,{width:p,height:2,internalFormat:l.RGBA32F,format:l.RGBA,type:l.FLOAT,data:r,filter:l.NEAREST}),this.effectTex=H(l,{width:p,height:48,internalFormat:l.RGBA32F,format:l.RGBA,type:l.FLOAT,data:new Float32Array(p*48*4),filter:l.NEAREST}),this.patternMetaTex=H(l,{width:p,height:1,internalFormat:l.RGBA32F,format:l.RGBA,type:l.FLOAT,data:new Float32Array(p*4),filter:l.NEAREST}),this.patternDataTex=H(l,{width:1024,height:p,internalFormat:l.R8UI,format:l.RED_INTEGER,type:l.UNSIGNED_BYTE,data:new Uint8Array(p*1024),filter:l.NEAREST}),this.skinLayerCpu=new Uint8Array(p),this.skinLayerTex=H(l,{width:p,height:1,internalFormat:l.R8UI,format:l.RED_INTEGER,type:l.UNSIGNED_BYTE,data:this.skinLayerCpu,filter:l.NEAREST}),this.skinAnchorCpu=new Uint16Array(p*2),this.skinAnchorTex=H(l,{width:p,height:1,internalFormat:l.RG16UI,format:l.RG_INTEGER,type:l.UNSIGNED_SHORT,data:this.skinAnchorCpu,filter:l.NEAREST}),this.skinAtlas=new Tt(l,[],()=>{}),this.res=_g(l,u,d,this.paletteTex,null),this.borderPass=new op(l,u,d,this.res.tileTex,this.settings),this.res.borderTex=this.borderPass.getBorderTex(),this.defenseCoveragePass=new kp(l,u,d,this.res.tileTex,this.settings),this.heatManager=new bg(l,u,d,this.res.tileTex,this.res.heatTexA,this.res.heatTexB,this.settings),this.territoryPass=new gt(l,u,d,this.res.tileTex,this.paletteTex,this.patternMetaTex,this.patternDataTex,this.skinAtlas.texture,this.skinLayerTex,this.skinAnchorTex,this.settings),this.territoryPass.setBorderPatchConsumer((e,t,n,r)=>{this.borderPass.patchTile(e,t,n,r),this.defenseCoveragePass.markTileDirty(e,t)}),this.territoryPass.setDefenseCoverageTex(this.defenseCoveragePass.getCoverageTex()),this.territoryPass.setBorderTex(this.res.borderTex),this.spawnOverlayPass=new Ih(l,u,d,this.res.tileTex,this.settings.spawnOverlay),this.smallPlayerGlowPass=new Dh(l,u,d,this.res.tileTex,this.settings.smallPlayerGlow),this.trailPass=new yt(l,u,d,this.res.trailTex,this.paletteTex,this.effectTex,this.settings),this.spiralRibbonPass=new rt(l,this.settings),this.borderStampPass=new lp(l,u,d,this.res.tileTex,this.paletteTex,this.res.borderTex,this.settings),this.borderStampPass.setDefenseCoverageTex(this.defenseCoveragePass.getCoverageTex()),this.bloomPass=new Fp(l,u,d,this.res.tileTex,this.heatManager,this.settings),this.pointLightPass=new th(l,t,r,this.settings,i),this.falloutLightPass=new zp(l,u,d,this.res.tileTex,this.heatManager,this.settings),this.lightmapPass=new Bp(l,u,d,this.pointLightPass,this.falloutLightPass,this.settings),this.nightCompositePass=new Pm(l,this.settings),this.railroadPass=new Ot(l,u,d,this.res.tileTex,this.paletteTex,this.effectTex,this.terrainBytesTex,this.settings),this.rangeCirclePass=new ih(l,this.settings),this.samRadiusPass=new vh(l,u,this.settings),this.samRadiusPass.setPaletteData(r),this.crosshairPass=new wp(l),this.structurePass=new dt(l,t,this.paletteTex,this.effectTex,this.settings),this.structureLevelPass=new Xh(l,t,this.settings),this.unitPass=new ut(l,t,this.paletteTex,this.effectTex,this.settings,i),this.namePass=new Mm(l,t,r,this.settings,i),this.fxPass=new ot(l,t,this.settings,i),this.barPass=new Qf(l,t,this.settings,i),this.worldTextPass=new ug(l,this.settings,i),this.worldTextPass.setMapWidth(this.mapW),this.selectionBoxPass=new Sh(l),this.moveIndicatorPass=new Kp(l,this.settings),this.nukeTrajectoryPass=new Km(l,this.settings),this.nukeTelegraphPass=new Rm(l,this.settings);let m=l.createTexture();l.bindTexture(l.TEXTURE_2D,m),l.texImage2D(l.TEXTURE_2D,0,l.RGBA8,1,1,0,l.RGBA,l.UNSIGNED_BYTE,null),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE);let h=l.createFramebuffer();l.bindFramebuffer(l.FRAMEBUFFER,h),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,m,0),l.bindFramebuffer(l.FRAMEBUFFER,null),this.sceneTarget={fbo:h,tex:m,w:1,h:1},this.affiliationPalette=new gg(l,this.settings);let g=this.affiliationPalette.getTexture();this.borderStampPass.setAffiliationTex(g),this.territoryPass.setAffiliationTex(g),this.unitPass.setAffiliationTex(g),this.structurePass.setAffiliationTex(g),this.trailPass.setAffiliationTex(g),this.coordinateGridPass=new _p(l,u,d,this.settings);try{this.gridView=window.localStorage.getItem(Cg)===`true`}catch{this.setGridView(!1)}for(let e of t.players)e.team!==null&&this.playerTeams.set(e.smallID,e.team);this.territoryPass.setTeamMode(this.playerTeams.size>0),this.startLoop()}startLoop(){this.animId??=this.raf(this.renderLoop)}stopLoop(){this.animId!==null&&(this.caf(this.animId),this.animId=null)}resize(e,t){let n=Ue();this.canvas.width=Math.round(e*n),this.canvas.height=Math.round(t*n),this.camera.resize(e,t)}setCameraState(e,t,n){this.camera.setCameraState(e,t,n)}uploadTileAndTrailState(e,t){this.territoryPass.setLiveRef(e),this.trailPass.setLiveRef(t)}uploadLiveDelta(e,t){this.territoryPass.applyLiveDelta(e,t)}uploadLiveTrailDelta(e,t,n,r){this.trailPass.applyLiveDelta(e,t,n,r)}updateSpiralRibbons(e){this.spiralRibbonPass.updateRibbons(e)}updatePalette(e){let t=this.gl;this.paletteData.set(e),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.paletteTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,kt(),2,t.RGBA,t.FLOAT,this.paletteData),this.samRadiusPass.setPaletteData(this.paletteData),this.namePass.refreshPlayerColors(this.paletteData)}updateEffectPalette(e){let t=this.gl;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.effectTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,kt(),48,t.RGBA,t.FLOAT,e)}addPlayers(e,t,n,r){this.updatePalette(t),this.uploadPatterns(n,r),this.namePass.addPlayers(e,this.paletteData);for(let t of e)t.team!==null&&this.playerTeams.set(t.smallID,t.team);this.territoryPass.setTeamMode(this.playerTeams.size>0)}updatePlayerCosmetics(e,t,n,r){this.updatePalette(t),this.uploadPatterns(n,r),this.namePass.updatePlayerCosmetics(e)}uploadPatterns(e,t){let n=this.gl,r=kt();n.bindTexture(n.TEXTURE_2D,this.patternMetaTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,r,1,n.RGBA,n.FLOAT,e),n.bindTexture(n.TEXTURE_2D,this.patternDataTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,1024,r,n.RED_INTEGER,n.UNSIGNED_BYTE,t)}setPlayerSpawn(e,t,n){let r=e*2;this.skinAnchorCpu[r]=t,this.skinAnchorCpu[r+1]=n;let i=this.gl;i.bindTexture(i.TEXTURE_2D,this.skinAnchorTex),i.texSubImage2D(i.TEXTURE_2D,0,0,0,kt(),1,i.RG_INTEGER,i.UNSIGNED_SHORT,this.skinAnchorCpu)}initSkinAtlas(e){this.skinAtlas.dispose(),this.skinAtlas=new Tt(this.gl,e,()=>{}),this.territoryPass.setSkinAtlas(this.skinAtlas.texture)}setPlayerSkin(e,t){let n=-1;t!==null&&(n=this.skinAtlas.getLayer(t),n<0)||(this.skinLayerCpu[e]=n+1,this.uploadSkinLayerTex())}uploadSkinLayerTex(){let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.skinLayerTex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,kt(),1,e.RED_INTEGER,e.UNSIGNED_BYTE,this.skinLayerCpu)}uploadRailroadState(e){this.railroadPass.uploadRailroadState(e)}updateUnits(e,t){this.lastUnits=e,this.frameTick++,this.unitPass.setFrameTick(this.frameTick),this.unitPass.updateUnits(e,t),this.samRadiusPass.setTick(t),this.barPass.updateBars(e,this.lastStructures,t),this.pointLightPass.updateLights(e),this.heatManager.decayHeat()}updateNames(e,t,n,r){if(this.namePass.updateNames(e,t,n,r),this.localPlayerID>0){let e=t.get(this.localPlayerID),n=new Set(e?.allies??[]),r=this.playerTeams.get(this.localPlayerID);if(r!==void 0)for(let[e,t]of this.playerTeams)t===r&&e!==this.localPlayerID&&n.add(e);this.samRadiusPass.setAllies(n),this.unitPass.setAllies(n)}}refreshNames(e){this.namePass.refreshNames(e)}updateRelations(e,t){this.borderPass.updateRelations(e,t),this.affiliationPalette.updateRelations(e,t)}updateStructures(e){this.lastStructures=e,this.structurePass.updateStructures(e),this.structureLevelPass.updateStructures(e),this.samRadiusPass.updateStructures(e),this.unitPass.setStructures(e);let t=[],n=this.mapW;for(let r of e.values())r.unitType===`Defense Post`&&!r.underConstruction&&t.push({x:r.pos%n,y:(r.pos-r.pos%n)/n,ownerID:r.ownerID});this.defenseCoveragePass.updateDefensePosts(t)}applyDeadUnits(e){e.length>0&&this.fxPass.applyDeadUnits(e)}applyRailroadDust(e){e.length>0&&this.fxPass.applyRailroadDust(e)}applyTerrainRects(e,t){e.length!==0&&(this.terrainPass.applyTerrainRects(e,t),this.railroadPass.applyTerrainRects(e,t))}rebuildTerrain(){this.terrainPass.setTerrainColors({backgroundColor:V(this.settings.terrain.backgroundColor)??void 0,oceanColor:V(this.settings.terrain.oceanColor)??void 0,sandColor:V(this.settings.terrain.sandColor)??void 0,plainsColor:V(this.settings.terrain.plainsColor)??void 0,highlandColor:V(this.settings.terrain.highlandColor)??void 0,mountainColor:V(this.settings.terrain.mountainColor)??void 0})}applyConquestEvents(e){e.length>0&&(this.fxPass.applyConquestEvents(e),this.worldTextPass.applyConquestEvents(e))}setAttackTroopLabels(e){this.worldTextPass.setAttackTroopLabels(e)}applyBonusEvents(e){if(e.length===0)return;let t=this.localPlayerID>0?e.filter(e=>e.smallID===this.localPlayerID):e;t.length>0&&this.worldTextPass.applyBonusEvents(t)}triggerBlockedFlash(e,t){this.crosshairPass.triggerBlockedFlash(e,t)}updateAttackRings(e){this.fxPass.updateAttackRings(e)}updateGhostPreview(e){this.structurePass.updateGhostPreview(e),this.railroadPass.updateGhostPreview(e),this.rangeCirclePass.updateGhostPreview(e),this.crosshairPass.updateGhostPreview(e);let n=e?.multiplier&&e.multiplier>1?t(`build_menu.upgrade_amount`,{amount:e.multiplier.toString()}):void 0,r=e!==null&&e.showCost&&e.cost>0;this.worldTextPass.setGhostCostLabel(e&&(r||n!==void 0)?{tileX:e.tileX,tileY:e.tileY,cost:r?e.cost:0,canAfford:e.canAfford,canPlace:e.canBuild||e.canUpgrade,topText:n}:null),this.samGhostVisible=e!==null&&xg.has(e.ghostType),this.samRadiusPass.setVisible(this.samGhostVisible||this.samHighlightVisible)}updateNukeTrajectory(e){this.nukeTrajectoryPass.update(e)}updateNukeTelegraphs(e){this.nukeTelegraphPass.update(e)}updateSpawnOverlay(e,t){this.inSpawnPhase=e,this.spawnOverlayPass.update(t)}updateSmallPlayerGlow(e){this.smallPlayerGlowPass.update(e)}setHighlightOwner(e){this.borderPass.setHighlightOwner(e),this.borderStampPass.setHighlightOwner(e),this.territoryPass.setHighlightOwner(e),this.namePass.setHighlightOwner(e),this.structurePass.setHighlightOwner(e),this.railroadPass.setHighlightOwner(e)}setMouseWorldPos(e,t){this.namePass.setMouseWorldPos(e,t)}setHighlightStructureTypes(e){this.structurePass.setHighlightTypes(e),this.structureLevelPass.setHighlightTypes(e),this.samHighlightVisible=e!==null&&e.some(e=>Sg.has(e)),this.samRadiusPass.setVisible(this.samGhostVisible||this.samHighlightVisible)}setLocalPlayerID(e){e!==this.localPlayerID&&(this.localPlayerID=e,this.samRadiusPass.setLocalPlayer(e),this.structurePass.setLocalPlayer(e),this.affiliationPalette.setLocalPlayer(e),this.unitPass.setLocalPlayer(e),this.railroadPass.setLocalPlayer(e))}setLocalRailColor(e,t,n){this.railroadPass.setLocalRailColor(e,t,n)}setSAMAllianceClusters(e){this.samRadiusPass.setAllianceClusters(e)}setAltView(e){this.altView=e,this.territoryPass.setAltView(e),this.borderStampPass.setAltView(e),this.unitPass.setAltView(e),this.structurePass.setAltView(e),this.trailPass.setAltView(e)}setGridView(e){this.gridView=e;try{window.localStorage.setItem(Cg,e?`true`:`false`)}catch{}}getSettings(){return this.settings}setSelectedUnits(e){this.selectedUnitIds.length=0;for(let t=0;t<e.length;t++)this.selectedUnitIds.push(e[t]);this.selectedUnitIds.length===0&&this.selectionBoxPass.hide()}updateSelectionBox(){if(this.selectedUnitIds.length===0)return;let e=this.selectionBoxEntries;e.length=0;let t=0;for(let n=0;n<this.selectedUnitIds.length;n++){let r=this.selectedUnitIds[n],i=this.lastUnits.get(r);if(!i||!i.isActive)continue;this.selectedUnitIds[t++]=r;let a=i.pos%this.mapW,o=Math.floor(i.pos/this.mapW),s=i.ownerID*4,c=Math.min(1,this.paletteData[s]+(1-this.paletteData[s])*.3),l=Math.min(1,this.paletteData[s+1]+(1-this.paletteData[s+1])*.3),u=Math.min(1,this.paletteData[s+2]+(1-this.paletteData[s+2])*.3);e.push({centerX:a,centerY:o,r:c,g:l,b:u})}this.selectedUnitIds.length=t,this.selectionBoxPass.setSelections(e)}showMoveIndicator(e,t,n){let r=n*4,i=Math.min(1,this.paletteData[r]+(1-this.paletteData[r])*.3),a=Math.min(1,this.paletteData[r+1]+(1-this.paletteData[r+1])*.3),o=Math.min(1,this.paletteData[r+2]+(1-this.paletteData[r+2])*.3);this.moveIndicatorPass.show(e,t,i,a,o)}draw(){this.uploadTextures(),this.computeTextures(),this.renderFrame()}uploadTextures(){this.altView&&this.affiliationPalette.flush(),this.inSpawnPhase?this.territoryPass.flushAllDripBuckets():this.territoryPass.drainDripBucket(),this.territoryPass.flushTileTexture()===`full`&&(this.borderPass.markGlobalDirty(),this.defenseCoveragePass.markDirty()),this.territoryPass.consumeFalloutTouched()&&this.heatManager.activate(),this.trailPass.flushTexture(),this.heatManager.updateHeat()}computeTextures(){this.settings.passEnabled.borderCompute&&this.borderPass.draw(),this.defenseCoveragePass.draw()}renderFrame(){let e=this.camera.getMatrix(),t=this.camera.zoom,n=this.canvas.width,r=this.canvas.height;if(this.isLightCompositingActive()){this.resizeSceneTargetIfNeeded(n,r);let t=Qe(this.gl,this.sceneTarget,()=>this.drawBaseLayer(e)),i=this.lightmapPass.draw(e,n,r,this.frameTick);qe(this.gl,n,r,()=>this.nightCompositePass.draw(t,i))}else qe(this.gl,n,r,()=>this.drawBaseLayer(e));this.renderOverlays(e,t)}isLightCompositingActive(){return this.settings.lighting.enabled}resizeSceneTargetIfNeeded(e,t){if(this.sceneTarget.w===e&&this.sceneTarget.h===t)return;this.sceneTarget.w=e,this.sceneTarget.h=t;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.sceneTarget.tex),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null)}drawBaseLayer(e){let t=this.gl,n=this.settings.passEnabled,[r,i,a]=V(this.settings.terrain.backgroundColor)??[60,60,60];t.clearColor(r/255,i/255,a/255,1),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.BLEND),n.terrain&&this.terrainPass.draw(e),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA);for(let t of this.mapLayerPasses.values())this.altView&&t.placement===0||t.draw(e);n.territory&&this.territoryPass.draw(e)}renderOverlays(e,t){let n=this.gl,r=this.settings.passEnabled;n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),this.spawnOverlayPass.draw(e),r.borderStamp&&this.borderStampPass.draw(e),r.railroad&&this.railroadPass.draw(e,t),r.unit&&this.unitPass.drawGround(e),r.falloutBloom&&this.bloomPass.draw(e,this.frameTick),this.samRadiusPass.draw(e),this.rangeCirclePass.draw(e),this.nukeTrajectoryPass.draw(e),this.crosshairPass.draw(e),r.structure&&this.structurePass.draw(e,t),r.structure&&this.structureLevelPass.draw(e,t),this.smallPlayerGlowPass.draw(e),r.bar&&this.barPass.draw(e),this.updateSelectionBox(),this.selectionBoxPass.draw(e,this.frameTick),this.moveIndicatorPass.draw(e,t),this.nukeTelegraphPass.draw(e),r.trail&&this.trailPass.draw(e),this.altView||this.spiralRibbonPass.draw(e),r.unit&&this.unitPass.drawMissiles(e),r.fx&&(this.fxPass.tick(),this.fxPass.draw(e,t)),(this.gridView||this.altView)&&this.coordinateGridPass.draw(e,t),r.name&&!this.altView&&this.namePass.draw(e,this.nightCompositePass.getAmbient());let i=this.camera.getWorldBounds(100,this.textBoundsScratch);this.worldTextPass.tick(t,i),this.worldTextPass.draw(e,t),n.disable(n.BLEND)}setMapLayers(e,t){for(let e of this.mapLayerPasses.values())e.dispose();if(this.mapLayerPasses.clear(),this.storedLayers=e,this.storedLayerImages=t,!this.terrainBytesTex)return;let n=this.gl;for(let r of e){let e=t.get(r.id);if(!e){console.warn(`[Renderer] Layer image "${r.id}" not found`);continue}let i=+(r.placement===`water`),a=new Up(n,this.terrainBytesTex,e,this.mapW,this.mapH,i,r.nukeable??!1);this.mapLayerPasses.set(r.id,a)}}setLayerVisible(e,t){this.mapLayerPasses.get(e)?.setVisible(t)}setLayerAlpha(e,t){this.mapLayerPasses.get(e)?.setAlpha(t)}markLayerTilesDestroyed(e,t){this.mapLayerPasses.get(e)?.markTilesDestroyed(t)}setLayerDestroyedMask(e,t){this.mapLayerPasses.get(e)?.updateDestroyedMask(t)}dispose({releaseContext:e=!0}={}){this.stopLoop();for(let e of this.mapLayerPasses.values())e.dispose();this.mapLayerPasses.clear(),this.terrainBytesTex&&=(this.gl.deleteTexture(this.terrainBytesTex),null),this.terrainPass.dispose(),this.territoryPass.dispose(),this.trailPass.dispose(),this.spiralRibbonPass.dispose(),this.borderStampPass.dispose(),this.borderPass.dispose(),this.defenseCoveragePass.dispose(),this.bloomPass.dispose(),this.pointLightPass.dispose(),this.falloutLightPass.dispose(),this.lightmapPass.dispose(),this.nightCompositePass.dispose(),this.heatManager.dispose(),this.affiliationPalette.dispose(),this.coordinateGridPass.dispose(),this.spawnOverlayPass.dispose(),this.smallPlayerGlowPass.dispose(),this.railroadPass.dispose(),this.rangeCirclePass.dispose(),this.samRadiusPass.dispose(),this.crosshairPass.dispose(),this.structurePass.dispose(),this.structureLevelPass.dispose(),this.unitPass.dispose(),this.namePass.dispose(),this.fxPass.dispose(),this.worldTextPass.dispose(),this.selectionBoxPass.dispose(),this.moveIndicatorPass.dispose(),this.nukeTrajectoryPass.dispose(),this.nukeTelegraphPass.dispose(),this.barPass.dispose(),vg(this.gl,this.res),this.gl.deleteTexture(this.paletteTex),this.gl.deleteTexture(this.effectTex),this.gl.deleteTexture(this.patternMetaTex),this.gl.deleteTexture(this.patternDataTex),this.gl.deleteTexture(this.skinLayerTex),this.gl.deleteTexture(this.skinAnchorTex),this.skinAtlas.dispose(),this.gl.deleteFramebuffer(this.sceneTarget.fbo),this.gl.deleteTexture(this.sceneTarget.tex),this.lastUnits=new Map,this.lastStructures=new Map,e&&this.gl.getExtension(`WEBGL_lose_context`)?.loseContext()}},Tg=class{constructor(e,t,n,r,i,a,o,s){this.canvas=e,this.header=t,this.terrainSource=n,this.paletteData=r,this.config=i,this.settings=a,this.raf=o,this.caf=s,this.renderer=null,this.resizeObs=null,this.storedLayers=[],this.storedLayerImages=new Map,this.layerVisibility=new Map,this.layerAlpha=new Map,this.layerDestroyedMasks=new Map,this.onContextRestored=null,this.initRenderer=()=>{this.renderer=new wg(this.canvas,this.header,this.terrainSource,this.paletteData,this.config,this.settings,this.raf,this.caf);let e=this.canvas.getBoundingClientRect();e.width>0&&this.renderer.resize(e.width,e.height)},this.handleContextLost=e=>{e.preventDefault(),console.warn(`[Renderer] WebGL context lost — awaiting restore`),this.renderer&&=(this.renderer.dispose({releaseContext:!1}),null)},this.handleContextRestored=()=>{console.warn(`[Renderer] WebGL context restored`);try{this.initRenderer()}catch(e){this.renderer=null,console.error(`[Renderer] context restore failed`,e);return}if(this.storedLayers.length>0&&this.storedLayerImages.size>0){this.renderer?.setMapLayers(this.storedLayers,this.storedLayerImages);for(let[e,t]of this.layerVisibility)this.renderer?.setLayerVisible(e,t);for(let[e,t]of this.layerAlpha)this.renderer?.setLayerAlpha(e,t);for(let[e,t]of this.layerDestroyedMasks)this.renderer?.setLayerDestroyedMask(e,t)}this.onContextRestored?.()},this.initRenderer(),this.resizeObs=new ResizeObserver(e=>{for(let t of e){let{width:e,height:n}=t.contentRect;e>0&&n>0&&this.renderer?.resize(e,n)}}),this.resizeObs.observe(e),e.addEventListener(`webglcontextlost`,this.handleContextLost,!1),e.addEventListener(`webglcontextrestored`,this.handleContextRestored,!1)}get glLimited(){return this.renderer?.glLimited??null}setCameraState(e,t,n){this.renderer?.setCameraState(e,t,n)}uploadLiveDelta(e,t){this.renderer?.uploadLiveDelta(e,t)}uploadLiveTrailDelta(e,t,n,r){this.renderer?.uploadLiveTrailDelta(e,t,n,r)}uploadTileAndTrailState(e,t){this.renderer?.uploadTileAndTrailState(e,t)}updateSpiralRibbons(e){this.renderer?.updateSpiralRibbons(e)}updatePalette(e){this.renderer?.updatePalette(e)}updateEffectPalette(e){this.renderer?.updateEffectPalette(e)}addPlayers(e,t,n,r){this.renderer?.addPlayers(e,t,n,r)}updatePlayerCosmetics(e,t,n,r){this.renderer?.updatePlayerCosmetics(e,t,n,r)}setPlayerSkin(e,t){this.renderer?.setPlayerSkin(e,t)}initSkinAtlas(e){this.renderer?.initSkinAtlas(e)}setPlayerSpawn(e,t,n){this.renderer?.setPlayerSpawn(e,t,n)}uploadRailroadState(e){this.renderer?.uploadRailroadState(e)}updateUnits(e,t){this.renderer?.updateUnits(e,t)}updateNames(e,t,n,r){this.renderer?.updateNames(e,t,n,r)}refreshNames(e){this.renderer?.refreshNames(e)}updateRelations(e,t){this.renderer?.updateRelations(e,t)}updateStructures(e){this.renderer?.updateStructures(e)}applyDeadUnits(e){this.renderer?.applyDeadUnits(e)}applyConquestEvents(e){this.renderer?.applyConquestEvents(e)}setAttackTroopLabels(e){this.renderer?.setAttackTroopLabels(e)}applyBonusEvents(e){this.renderer?.applyBonusEvents(e)}triggerBlockedFlash(e,t){this.renderer?.triggerBlockedFlash(e,t)}applyRailroadDust(e){this.renderer?.applyRailroadDust(e)}applyTerrainRects(e,t){this.renderer?.applyTerrainRects(e,t)}rebuildTerrain(){this.renderer?.rebuildTerrain()}updateAttackRings(e){this.renderer?.updateAttackRings(e)}updateGhostPreview(e){this.renderer?.updateGhostPreview(e)}updateNukeTrajectory(e){this.renderer?.updateNukeTrajectory(e)}updateNukeTelegraphs(e){this.renderer?.updateNukeTelegraphs(e)}updateSpawnOverlay(e,t){this.renderer?.updateSpawnOverlay(e,t)}updateSmallPlayerGlow(e){this.renderer?.updateSmallPlayerGlow(e)}setMapLayers(e,t){this.storedLayers=e,this.storedLayerImages=t,this.renderer?.setMapLayers(e,t);for(let[e,t]of this.layerDestroyedMasks)this.renderer?.setLayerDestroyedMask(e,t)}setLayerVisible(e,t){this.layerVisibility.set(e,t),this.renderer?.setLayerVisible(e,t)}setLayerAlpha(e,t){this.layerAlpha.set(e,t),this.renderer?.setLayerAlpha(e,t)}markLayerTilesDestroyed(e,t){let n=this.layerDestroyedMasks.get(e);n||(n=new Uint8Array(this.header.mapWidth*this.header.mapHeight),this.layerDestroyedMasks.set(e,n));for(let e of t)e>=0&&e<n.length&&(n[e]=1);this.renderer?.markLayerTilesDestroyed(e,t)}setLayerDestroyedMask(e,t){let n=this.layerDestroyedMasks.get(e);n?.length===t.length?n.set(t):this.layerDestroyedMasks.set(e,new Uint8Array(t)),this.renderer?.setLayerDestroyedMask(e,t)}setSelectedUnits(e){this.renderer?.setSelectedUnits(e)}showMoveIndicator(e,t,n){this.renderer?.showMoveIndicator(e,t,n)}setSAMAllianceClusters(e){this.renderer?.setSAMAllianceClusters(e)}setLocalPlayerID(e){this.renderer?.setLocalPlayerID(e)}setLocalRailColor(e,t,n){this.renderer?.setLocalRailColor(e,t,n)}setAltView(e){this.renderer?.setAltView(e)}setGridView(e){this.renderer?.setGridView(e)}setHighlightOwner(e){this.renderer?.setHighlightOwner(e)}setMouseWorldPos(e,t){this.renderer?.setMouseWorldPos(e,t)}setHighlightStructureTypes(e){this.renderer?.setHighlightStructureTypes(e)}getSettings(){return this.renderer?.getSettings()??{}}dispose(){this.resizeObs?.disconnect(),this.resizeObs=null,this.onContextRestored=null,this.renderer?.dispose(),this.canvas.removeEventListener(`webglcontextlost`,this.handleContextLost),this.canvas.removeEventListener(`webglcontextrestored`,this.handleContextRestored)}};function Eg(e,t){for(let n of Object.keys(t))Array.isArray(t[n])?n in e&&(e[n]=structuredClone(t[n])):typeof t[n]==`object`&&t[n]!==null&&typeof e[n]==`object`&&e[n]!==null?Eg(e[n],t[n]):n in e&&(e[n]=t[n])}export{wi as $,zn as $t,ha as A,Nr as At,Yi as B,rn as Bt,va as C,Sn as Cn,Mr as Ct,Ca as D,ln as Dn,Ur as Dt,ba as E,cn as En,Ar as Et,ta as F,Cr as Ft,Gi as G,en as Gt,Ji as H,Kn as Ht,ea as I,Jr as It,Ri as J,jn as Jt,Hi as K,Pn as Kt,$i as L,Er as Lt,ia as M,kr as Mt,ra as N,br as Nt,wa as O,Vt as On,Br as Ot,na as P,zr as Pt,Ei as Q,In as Qt,Qi as R,fr as Rt,_a as S,Cn as Sn,jr as St,ya as T,mn as Tn,Pr as Tt,qi as U,an as Ut,Ui as V,Bn as Vt,Ki as W,hn as Wt,Ai as X,Fn as Xt,Ni as Y,An as Yt,Di as Z,Ln as Zt,Fa as _,yn as _n,vr as _t,$d as a,wn as an,Qr as at,ga as b,_n as bn,yr as bt,go as c,Dn as cn,Or as ct,so as d,Jn as dn,Gr as dt,Yn as en,Ti as et,Xa as f,Hn as fn,Wr as ft,Ra as g,Xt as gn,xr as gt,Ba as h,pn as hn,Sr as ht,$ as i,Vn as in,Zr as it,ma as j,wr as jt,Ea as k,Bt as kn,Vr as kt,lo as l,kn as ln,Lr as lt,za as m,dn as mn,Hr as mt,Tg as n,$t as nn,$r as nt,nf as o,En as on,ei as ot,Ga as p,fn as pn,_r as pt,Bi as q,Rn as qt,Xp as r,Jt as rn,Xr as rt,q as s,On as sn,Yr as st,Eg as t,Qt as tn,ti as tt,uo as u,bn as un,Rr as ut,Pa as v,gn as vn,Tr as vt,xa as w,xn as wn,Fr as wt,Ta as x,Zt as xn,Ir as xt,Sa as y,vn as yn,Dr as yt,Xi as z,lr as zt};