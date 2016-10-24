Ext.define('HOPHOP.view.MainAndamento', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Toolbar',
        'Ext.Img',
        'Ext.Label'
    ],

    config: {
        itemId: 'ContainerMainAndamento',
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
                        xtype: 'selectfield',
                        itemId: 'IntervalloAndamento',
                        options: [
                            {
                                text: 'Questa Settimana',
                                value: 1
                            },
                            {
                                text: 'Questo Mese',
                                value: 2
                            },
                            {
                                text: 'Mese scorso',
                                value: 3
                            },
                            {
                                text: 'Anno in corso',
                                value: 4
                            }
                        ],
                        value: 2
                    },
                    {
                    	xtype: 'spacer'
                    }
                ]
            },
            {
            	xtype: 'container',
			    layout: 'hbox',
			    flex: 1,
            	items: [
        	        {
        	        	xtype: 'container',
        	        	layout: 'vbox',
        	        	flex: 1,
        	        	items: [
							{
								xtype: 'button',
								itemId: 'BtnTotAttivita',
								text: '0 Attività',
								flex: 1,
								cls: 'btn-area-greenfluo',
								labelCls: 'btn-label-greenfluo',
								iconAlign: 'top',
								iconCls: 'icon-activity-1'
							}
        	        	]
        	        },
        	        {
        	        	xtype: 'container',
        	        	layout: 'vbox',
        	        	flex: 1,
        	        	items: [
    	        	        {
		        	        	xtype: 'button',
		        	        	itemId: 'BtnAndamentoDistanza',
		        	        	text: '0 Km',
		        	        	flex: 1,
								cls: 'btn-area-violet',
								labelCls: 'btn-label-violet',
								iconAlign: 'top',
								iconCls: 'icon-distance-2'
		        	        }
        	        	]
        	        },
        	        {
        	        	xtype: 'container',
        	        	layout: 'vbox',
        	        	flex: 1,
        	        	items: [
							{
								xtype: 'button',
								itemId: 'BtnAndamentoTempo',
								text: '00:00:00',
								flex: 1,
								cls: 'btn-area-electricblue',
								labelCls: 'btn-label-electricblue',
								iconAlign: 'top',
								iconCls: 'icon-time-1'
							}
        	        	]
        	        }
    	        ]
            },
            {
            	xtype: 'container',
			    layout: 'hbox',
			    flex: 1,
            	items: [
        	        {
        	        	xtype: 'container',
        	        	layout: 'vbox',
        	        	flex: 1,
        	        	items: [
    	        	        {
	            	        	xtype: 'button',
	            	        	itemId: 'BtnAndamentoDislivello',
	            	        	text: '0 D+',
	            	        	flex: 1,
	            	        	cls: 'btn-area-whitered',
								labelCls: 'btn-label-whitered',
								iconAlign: 'top',
								iconCls: 'icon-dislivello-1'
	            	        }
        	        	]
        	        },
        	        {
        	        	xtype: 'container',
        	        	layout: 'vbox',
        	        	flex: 1,
        	        	items: [
							{
								xtype: 'button',
								itemId: 'BtnAndamentoDistSalita',
								text: '0 Km',
								flex: 1,
								cls: 'btn-area-orangejuice',
								labelCls: 'btn-label-orangejuice',
								iconAlign: 'top',
								iconCls: 'icon-distance-3'
							}
        	        	]
        	        },
        	        {
        	        	xtype: 'container',
        	        	layout: 'vbox',
        	        	flex: 1,
        	        	items: [
							{
								xtype: 'button',
								itemId: 'BtnCimaCoppi',
								text: '0 s.l.m.',
								flex: 1,
								cls: 'btn-area-lime',
								labelCls: 'btn-label-lime',
								iconAlign: 'top',
								iconCls: 'icon-summit'
							}
        	        	]
        	        }
    	        ]
            },
            {
            	xtype: 'container',
			    layout: 'hbox',
			    flex: 1,
            	items: [
        	        {
        	        	xtype: 'container',
        	        	layout: 'vbox',
        	        	flex: 1,
        	        	items: [
    	        	        {
	            	        	xtype: 'button',
	            	        	itemId: 'BtnAndamentoTempoZona',
	            	        	text: '00:00:00',
	            	        	flex: 1,
	            	        	cls: 'btn-area-yellow',
								labelCls: 'btn-label-yellow',
								iconAlign: 'top',
								iconCls: 'icon-tempozona'
	            	        }
        	        	]
        	        },
        	        {
        	        	xtype: 'container',
        	        	layout: 'vbox',
        	        	flex: 1,
        	        	items: [
							{
								xtype: 'button',
								itemId: 'BtnAndamentoKcal',
								text: '0 Kcal',
								flex: 1,
								cls: 'btn-area-bluecustom',
								labelCls: 'btn-label-bluecustom',
								iconAlign: 'top',
								iconCls: 'icon-kalories-1'
							}
        	        	]
        	        },
        	        {
        	        	xtype: 'container',
        	        	layout: 'vbox',
        	        	flex: 1,
        	        	items: [
							{
								xtype: 'button',
								itemId: 'BtnAndamentoGare',
								text: '0 Gare',
								flex: 1,
								cls: 'btn-area-yellowblack',
								labelCls: 'btn-label-yellowblack',
								iconAlign: 'top',
								iconCls: 'icon-gara-1'
							}
        	        	]
        	        }
    	        ]
            },
            {
            	xtype: 'container',
			    layout: 'hbox',
			    flex: 1,
            	items: []
            }
        ]
    }
});