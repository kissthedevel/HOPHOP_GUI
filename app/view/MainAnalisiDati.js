Ext.define('HOPHOP.view.MainAnalisiDati', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Toolbar',
        'Ext.Img',
        'Ext.Label'
    ],

    config: {
        itemId: 'ContainerMain',
        layout: 'vbox',
        flex: 1,
        items: [
            {
            	xtype: 'button',
            	itemId: 'ButtonProva',
            	text: 'Prova'
            }
        ]
    }

});