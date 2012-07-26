Ext.require("Ext.container.Viewport");
Ext.require("Ext.data.TreeStore");
Ext.require("Ext.form.Label");
Ext.require("Ext.form.Panel");
Ext.require("Ext.layout.container.Accordion");
Ext.require("Ext.layout.container.Border");
Ext.require("Ext.tree.Panel");
Ext.require("Ext.util.History");
Ext.require("Ext.Img");

var _ = { title: "SA tools presentation search" };

function not_implemented() {
    Ext.Msg.alert(_["title"], "Functionality not implemented yet");
}

Ext.application({
    name: "Juno",
    appFolder: "static",

    controllers: [
	"SearchController",
	"SlidesController",
	"FileUploadController",
	"FilesystemController"
    ],

    launch: function() {
        Ext.create("Ext.container.Viewport", {
	    items: [{
		xtype: "filesystem",
		region: "west",
		title: "Filesystem",
		collapsible: true,
		split: true,
		width: "21%"
	    }, {
		items: [{
		    xtype: "search",
		    region: "center"
		}, {
		    items: [{
			xtype: "presobrowser"
		    }],
		    region: "south",
		    title: "Presentation",
		    autoScroll: true,
		    collapsible: true,
		    layout: "fit",
		    height: 252,
		    split: true
		}],
		layout: "border",
		region: "center",
		border: false
	    }],
	    layout: {
		padding: 5,
		type: "border"
	    },
	    id: "myviewport"
        });

	Ext.util.History.init();
	var sc = this.getController("SearchController");
	Ext.util.History.on('change', sc.historysearch, sc);
	sc.historysearch(Ext.util.History.getToken());

	_Juno = this;
    }
});
