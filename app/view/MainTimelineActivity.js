Ext.define('HOPHOP.view.MainTimelineActivity', {
    extend: 'Ext.Container',

    requires: [
		'Ext.tab.Bar',
		'Ext.Button',
		'Ext.Spacer',
		'Ext.Panel'
    ],

    config: {
        itemId: 'ContainerMain',
        layout: 'vbox',
        flex: 1,
        items: [
			{
                xtype: 'toolbar',
                cls: 'toolbars-second',
                items: [
                    {
                    	xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        cls: 'square',
                        itemId: 'FindActivities',
                        ui: 'action',
                        text: 'Cerca',
                        width: 100
                    }
                ]
            },
			{
			    xtype: 'container',
			    flex: 1,
			    layout: 'hbox',
			    items: [
			        {
			            xtype: 'container',
			            flex: 1
			        },
			        {
			            xtype: 'container',
			            flex: 1,
			            itemId: 'ContainerActivities',
			            maxWidth: 450,
			            minWidth: 280,
			            layout: 'vbox',
			            scrollable: 'vertical'
			        },
			        {
			            xtype: 'container',
			            flex: 1
			        }
			    ]
			}
        ]
    }

});