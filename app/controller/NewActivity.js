Ext.define('HOPHOP.controller.NewActivity', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            BtnNewActivity: '#BtnNewActivity',
            BtnCancelNewAct: '#BtnCancelNewAct',
            PopUpNewActivity: '#PopUpNewActivity',
            BtnSalvaNewAct: '#BtnSalvaNewAct',
            FormNewActivity: '#FormNewActivity',
            ContainerDataOra: '#ContainerDataOra',
            CkIsGara: '#CkIsGara',
            ContainerDatiGara: '#ContainerDatiGara'
        },

        control: {
            "button#BtnNewActivity": {
                tap: 'onTapBtnNewActivity'
            },
            "button#BtnCancelNewAct": {
                tap: 'onTapBtnCancelNewAct'
            },
            "button#BtnSalvaNewAct": {
                tap: 'onTapBtnSalvaNewAct'
            },
            "checkboxfield#CkIsGara": {
            	change: 'onChangeCkIsGara'
            }
        }
    },

    onChangeCkIsGara: function(th, newValue, oldValue) {
    	this.getContainerDatiGara().setHidden(!newValue);
    },
    onTapBtnNewActivity: function(button, e, eOpts) {
        var popupAct = Ext.create('HOPHOP.view.PopUpNewActivity', {});
        popupAct.show();
        Ext.getCmp('MainApp').hide();
    },

    onTapBtnCancelNewAct: function(button, e, eOpts) {
        this.getPopUpNewActivity().hide();
        this.getPopUpNewActivity().destroy();
        Ext.getCmp('MainApp').show();
    },

    onTapBtnSalvaNewAct: function(button, e, eOpts) {
        var me = this;
        var values = me.getFormNewActivity().getValues();
        var record = values;
        
        Ext.apply(record, {
        	idatleta: 1,	//TODO da getsire login
        	tempogara: record.oregara || record.mingara ? new Date(1899, 1, 1, record.oregara, record.mingara, record.secgara, 0) : null,
        	tempoattivita: record.oreattivita || record.minutiattivita ? new Date(1899, 1, 1, record.oreattivita, record.minutiattivita, record.secondiattivita, 0) : null,
        	tempozonacardio: record.orezonacardio || record.minzonacardio ? new Date(1899, 1, 1, record.orezonacardio, record.minzonacardio, record.seczonacardio, 0) : null,
        });
        
        delete record.oregara;
        delete record.mingara;
        delete record.secgara;
        delete record.oreattivita;
        delete record.minutiattivita;
        delete record.secondiattivita;
        delete record.orezonacardio;
        delete record.minzonacardio;
        delete record.seczonacardio;
        
        Ext.Ajax.request({
            url: '../HOPHOP_WS/attivita/attivitaSalva.php',
            params: Ext.JSON.encode(record),
            success: function(response){
                var result = Ext.JSON.decode(response.responseText);
                alert(result.message);
                me.getPopUpNewActivity().hide();
                me.getPopUpNewActivity().destroy();
                Ext.getCmp('MainApp').show();
            },
            failure: function(conn, response, options, eOpts) {
            	var result = Ext.JSON.decode(response.responseText);
            	alert(result.message);
            }
        });
    }

});