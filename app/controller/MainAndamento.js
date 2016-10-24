Ext.define('HOPHOP.controller.MainAndamento', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	IntervalloAndamento: '#IntervalloAndamento',
        	ContainerMainAndamento: '#ContainerMainAndamento'
        },

        control: {
            "selectfield#IntervalloAndamento": {
                change: 'onChangeIntervalloAndamento'
            },
            "container#ContainerMainAndamento": {
            	initialize: 'onInitializeContainerMainAndamento'
            }
        }
    },

//    onTapButtonProva: function(button, e, eOpts) {
//        alert('tap');
//    }
    onChangeIntervalloAndamento: function( th, newValue, oldValue ) {
    	var me = this,
    		date = new Date(),
    		firstDay = null,
    		lastDay = null;
    	
    	switch ( newValue ) {
    		case 1:	//questa settimana
    			
    			break;
    		case 2:	//questo mese
    			firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    			lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    			lastDay.setHours(23, 59, 59, 0);
    			break;
    		case 3:	//mese scorso
    			firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    			firstDay = Ext.Date.add(firstDay, Ext.Date.MONTH, -1);
    			lastDay = Ext.Date.getLastDateOfMonth(firstDay);
    			lastDay.setHours(23, 59, 59, 0);
    			break;
			default:
				break;
    	}
    	
    	this.updateData( firstDay, lastDay );
    },
    
    updateData: function( firstDay, lastDay ) {
    	var me = this;
    	var date = new Date();
    	
    	if( !firstDay )
    		firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    	if( !lastDay ) {
    		lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        	lastDay.setHours(23, 59, 59, 0);
    	}
    	
    	Ext.Ajax.request({
            url: '../HOPHOP_WS/attivita/andamentoMain.php',
            params: {
            	idatleta: 1,
            	datadal: firstDay,
            	dataal: lastDay
            },
            method: 'GET',
            success: function(response){
                var result = Ext.JSON.decode(response.responseText);
                var resultData = result.data;

				var ss = resultData.sommatorie;
				var c = me.getContainerMainAndamento();
				c.down('#BtnTotAttivita').setText(ss.numAttivita + ' Attività');
				c.down('#BtnAndamentoDistanza').setText(ss.kmPercorsi + ' Km');
				c.down('#BtnAndamentoTempo').setText(ss.tempoPercorso);
				c.down('#BtnAndamentoDislivello').setText(ss.dislivelloPositivo + ' D+');
				c.down('#BtnAndamentoDistSalita').setText(ss.kmSalita + ' Km');
				c.down('#BtnCimaCoppi').setText(ss.alitudineMax + ' s.l.m.');
				c.down('#BtnAndamentoTempoZona').setText(ss.tempoInZona);
				c.down('#BtnAndamentoKcal').setText(ss.kcalTotali + ' Kcal');
				c.down('#BtnAndamentoGare').setText(ss.totaleGare + ' Gare');
            },
            failure: function(conn, response, options, eOpts) {
            	var result = Ext.JSON.decode(response.responseText);
            	alert(result.message);
            }
        });
    },
	onInitializeContainerMainAndamento: function(th) {
    	this.updateData();	//non passo parametri date, quindi MESE IN CORSO
    },
});