Riot.namespace("Riot.utils");Riot.utils.getFilterString=function(a){var b=new RegExp(/[><=]/);if(b.test(a.value)){return a.value}else{if(a.id.indexOf("tier")!==-1){return"rune.tier="+a.value}else{return"tags->"+a.value}}};Riot.utils.createFilter=function(e,a){var d=[],b,c;if(a){a=Riot.get(a);if(a.dom.value.length>0){d.push("searchKey:"+a.dom.value)}}for(b=0,c=e.length;b<c;b=b+1){d.push(Riot.utils.getFilterString(e[b]))}return d};Riot.namespace("Riot.data.DragonArmor");(function(){var c=Riot.data.DragonArmor;c.sets={};function b(h,g,e){var f,d;for(f in g){if(g.hasOwnProperty(f)){if((e&&h[f]===undefined)||!e){if(Riot.isFunction(g[f])){d=g[f];if(d===false){return false}h[f]=d}else{h[f]=g[f]}}}}return h}var a=function(d){var e=this;Riot.apply(e,d)};a.prototype.equip=function(e){var d=this;if(Riot.isString(d.model)){d.model=Riot.DDragon.models[d.model]}if(b(e,d.data,d.conditionalApply)===false){d.removeItem(e)}};a.prototype.remove=function(f){var e=this,d=e.model.keys.indexOf(f.id);e.model.keys.splice(d,1);delete e.model.data[f.id]};c.forge=function(f,g){var e={base:{},pieces:{}},d;if(g.hasOwnProperty("base")){for(d in g.base){if(g.base.hasOwnProperty(d)){e.base[d]=g.base[d]}}}e.base=new a({data:e.base,conditionalApply:true,model:f});for(d in g){if(g.hasOwnProperty(d)&&d!="base"){e.pieces[d]=new a({data:g[d],model:f})}}c.sets[f]=e};c.equip=function(f){var d,g,e;if(!c.sets.hasOwnProperty(f)){return}d=Riot.DDragon.models[f];g=c.sets[f];for(e in d.data){if(d.data.hasOwnProperty(e)){d.parseData(e);g.base.equip(d.data[e])}}for(e in d.data){if(d.data.hasOwnProperty(e)&&g.pieces.hasOwnProperty(e)){g.pieces[e].equip(d.data[e])}}}}());Riot.data.DragonArmor.forge("summoner",{base:{modes:[],level:1,available:true,category:"offense"},SummonerBarrier:{modes:["sr","tt","odin","aram"],level:6,category:"defense"},SummonerBattleCry:{available:false},SummonerBoost:{modes:["sr","tt","odin","aram"],level:2,category:"defense"},SummonerClairvoyance:{modes:["sr","tt","odin","aram"],level:10,category:"utility"},SummonerDot:{modes:["sr","tt","odin","aram"],level:8},SummonerExhaust:{modes:["sr","tt","odin","aram"],level:8},SummonerFlash:{modes:["sr","tt","odin","aram"],level:12,category:"utility"},SummonerFortify:{level:4,available:false},SummonerHaste:{modes:["sr","tt","odin","aram"]},SummonerHeal:{modes:["sr","tt","odin","aram"],category:"defense"},SummonerMana:{modes:["sr","tt","odin","aram"],category:"utility"},SummonerOdinGarrison:{modes:["odin"],level:1,category:"utility"},SummonerPromoteSR:{level:6,available:false},SummonerRally:{level:8,available:false},SummonerRevive:{modes:["sr","tt","odin","aram"],category:"utility"},SummonerSmite:{level:3,modes:["sr","tt","odin"],category:"defense"},SummonerTeleport:{modes:["sr","tt"],level:2,category:"utility"}});Riot.data.DragonArmor.forge("item",{base:{maps:function(b){var a;for(a in b.maps){if(b.maps.hasOwnProperty(a)){if(b.maps[a]){b.maps[a]=1}else{b.maps[a]=0}}}return b}}});Riot.data.DragonArmor.forge("rune",{base:{available:true},"5109":{available:false},"5231":{available:false},"5353":{available:false},"5079":{available:false},"5201":{available:false},"5323":{available:false},"8018":{available:false},"8004":{available:false},"8010":{available:false}});