Ext.define('HOPHOP.controller.MainApp', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            MainApp: '#MainApp',
            TabTimelineActivities: '#TabTimelineActivities',
        	TabAreaAnalisiDati: '#TabAreaAnalisiDati',
        	TabAreaAndamento: '#TabAreaAndamento'
        },

        control: {
            "tabpanel#MainApp": {
                activeitemchange: 'onTabChangeMainApp',
                initialize: 'onInitializeMainApp'
            }
        }
    },

    onTabChangeMainApp: function(container, value, oldValue, eOpts) {
        if (oldValue && oldValue.getItemId() == 'TabTimelineActivities')
            this.getTabTimelineActivities().removeAll();
        else if (oldValue && oldValue.getItemId() == 'TabAreaAnalisiDati')
        	this.getTabAreaAnalisiDati().removeAll();
        else if (oldValue && oldValue.getItemId() == 'TabAreaAndamento')
        	this.getTabAreaAndamento().removeAll();
        
        if(value.getItemId() == 'TabTimelineActivities'){
            this.getTabTimelineActivities().add(Ext.create('HOPHOP.view.MainTimelineActivity', {}));
        } else if(value.getItemId() == 'TabAreaAnalisiDati') {
        	this.getTabAreaAnalisiDati().add(Ext.create('HOPHOP.view.MainAnalisiDati', {}));
        } else if(value.getItemId() == 'TabAreaAndamento') {
        	this.getTabAreaAndamento().add(Ext.create('HOPHOP.view.MainAndamento', {}));
        }
    },
    
    onInitializeMainApp: function(th) {
    	this.getTabAreaAndamento().add(Ext.create('HOPHOP.view.MainAndamento', {}));
    }

});