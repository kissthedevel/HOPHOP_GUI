Ext.define('HOPHOP.view.Main', {
    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.tab.Bar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.Panel'
    ],

    config: {
        id: 'MainApp',
        itemId: 'MainApp',
        tabBar: {
            border: '',
            docked: 'top',
            layout: {
                type: 'hbox',
                pack: 'center'
            }
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                cls: 'toolbars-second',
                items: [
                    {
                        xtype: 'button',
                        cls: 'square',
                        itemId: 'BtnNewActivity',
                        ui: 'action',
                        iconCls: 'add',
                        text: 'Nuova attività'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        cls: 'square',
                        itemId: 'MenuHopHop',
                        ui: 'action',
                        iconCls: 'user'
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'TabAreaAndamento',
                title: 'Andamento',
                cls: 'background-generali',
                layout: 'vbox'
            },
            {
                xtype: 'panel',
                title: 'Timeline',
                cls: 'background-generali',
                itemId: 'TabTimelineActivities',
                layout: 'vbox'
            },
            {
                xtype: 'panel',
                itemId: 'TabAreaAnalisiDati',
                title: 'Analisi',
                cls: 'background-generali',
                layout: 'vbox'
            }
        ]
    }

});