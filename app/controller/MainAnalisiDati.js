Ext.define('HOPHOP.controller.MainAnalisiDati', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            ButtonProva: '#ButtonProva',
        },

        control: {
            "button#ButtonProva": {
                tap: 'onTapButtonProva'
            }
        }
    },

    onTapButtonProva: function(button, e, eOpts) {
        alert('tap');
    }
});