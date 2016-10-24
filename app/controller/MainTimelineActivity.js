Ext.define('HOPHOP.controller.MainTimelineActivity', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	FindActivities: '#FindActivities',
        	ContainerActivities: '#ContainerActivities'
        },

        control: {
            "button#FindActivities": {
                tap: 'onTapFindActivities'
            }
        }
    },

    onTapFindActivities: function(button, e, eOpts) {
    	var me = this;
    	
    	Ext.Ajax.request({
            url: '../HOPHOP_WS/attivita/attivitaList.php',
            params: {
            	idatleta: 1
            },
            method: 'GET',
            success: function(response){
                var result = Ext.JSON.decode(response.responseText);
                var resultData = result.data;

                Ext.each(me.getContainerActivities().innerItems, function(i) {
                	i.destroy();
                });
                Ext.each(resultData, function(rec) {
                	me.getContainerActivities().add(Ext.create('HOPHOP.view.DetailActivity', {
                		HHConfig: {
                			record: rec
                		}
                	}));
                });
            },
            failure: function(conn, response, options, eOpts) {
            	var result = Ext.JSON.decode(response.responseText);
            	alert(result.message);
            }
        });
    }
});