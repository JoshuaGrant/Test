Riot.define("RiotKit.widget.DropdownToggle",{extend:"RiotKit.Widget",initComponent:function(){var a=this;a.addClass("dropdown-toggle");a.callParent(arguments)},show:function(){var f=this,c=f.el.getParent().dom.childNodes,a=Riot.query(".dropdown.open"),d,b,e;f.el.getParent().clean();for(b=0,e=c.length;b<e;b=b+1){d=Riot.get(c[b]);d.setStyle("display","none")}for(b=0,e=a.length;b<e;b=b+1){Riot.getCmp(a[b].id).hide()}f.el.setStyle("display","block");f.fireEvent("show",f)}});RiotKit.WidgetController.registerWidget("dropdownToggle",["show"]);Riot.define("Riot.cd.Controller",{extend:"Riot.app.Controller",initController:function(){var a=this;a.control({fn:"instanceOf",args:"RiotKit.widget.DropdownToggle"},{show:a.onShow})},onShow:function(a){var c=Riot.get(Riot.query("a[href=#"+a.id+"]")[0]),d=c.dom.innerHTML,b=Riot.query("> a",c.getParent(".dropdown"))[0];b.innerHTML=d+'<div class="icon icon-arrow-down-light"><em></em></div>'}});(function(){var c=jQuery(window),b=c.height(),a=c.width();c.on("resize",function(){b=c.height();a=c.width()});Riot.define("Riot.cd.Tooltip",{extend:"Riot.Component",baseClass:"rg-box-tooltip",baseId:"riot-cd-tooltip",update:function(d){var e=this;e.getTargetEl().html(d)},onRender:function(){var d=this;d.el.setStyle("position","fixed");d.el.setStyle("display","none");d.callParent(arguments)},show:function(){this.el.show()},showAt:function(d,g){var e=this,f={};if(g>b/2){f.top=g-(e.el.getHeight()+5)}else{f.top=g+5}if(d>a/2){f.left=d-(e.el.getWidth()+5)}else{f.left=d+5}e.el.setStyle(f);e.show()},hide:function(){var d=this;d.el.hide()}})}());Riot.createApp({controllers:["Riot.cd.Controller"],run:function(){jQuery(".skins").colorbox({rel:"skins",transition:"none",width:1145,height:717});var a=Riot.create("Riot.cd.Tooltip",{renderTo:document.body});jQuery("#ability-summary a").on("mouseover",function(){var b=jQuery(this),c=jQuery(b.attr("href")+" .spell-description").eq(0).html(),d=jQuery(b.attr("href")+" h3").text();a.update(['<div class="info">','<div class="name">'+d+"</div>",'<div class="description">'+c+"</div>","</div>"].join(""));a.show()}).on("mouseout",function(){a.hide()}).on("click",function(b){b.preventDefault()}).on("mousemove",function(b){a.showAt(b.clientX,b.clientY)})}});