Ext.define('HOPHOP.controller.DetailActivity', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	DetailActivity: '#DetailActivity'
        },

        control: {
            "container#DetailActivity": {
                initialize: 'onInitializeDetailActivity'
            }
        }
    },
    
    onInitializeDetailActivity: function(th) {
    	var me = this;
    	me.collapsed = true;
    	
    	th.down('#BtnExpandActivity').setHandler(function() {
    		me.espandiDettaglio(th, !me.collapsed);
    		me.collapsed = !me.collapsed;
    	});
    	
    	//setto valori record
    	var rec = th.HHConfig.record;
    	var dataFormatted = new Date(rec.data);
    	dataFormatted.setHours(rec.ora.split(':')[0]);
    	dataFormatted.setMinutes(rec.ora.split(':')[1]);
    	dataFormatted = Ext.Date.format(dataFormatted, 'd/m/Y - H:i');
    	th.down('#LabelTipoDataAttivita').setHtml('<b>' + traduciSport(rec.sport) + '&nbsp;&nbsp;&nbsp;' + dataFormatted);
    	if(rec.tempoattivita && rec.tempoattivita != '') {
	    	var tempoAttivita = new Date('1899-01-01 00:00:00');
	    	tempoAttivita.setHours(rec.tempoattivita.split(':')[0]);
	    	tempoAttivita.setMinutes(rec.tempoattivita.split(':')[1]);
	    	tempoAttivita.setSeconds(rec.tempoattivita.split(':')[2]);
	    	th.down('#TempoAttivita').setHtml(Ext.Date.format(tempoAttivita, 'H:i:s'));
    	}
    	th.down('#DistanzaAttivita').setHtml('<b>' + rec.distanzaattivita + ' Km');
    	th.down('#VelocitaAttivitaMed').setHtml('<b>' + rec.velmedia + ' med.');
    	th.down('#VelocitaAttivitaMax').setHtml(rec.velmax + ' max.');
    	th.down('#DislivelloPos').setHtml('<b>' + rec.dislivellopos + ' +');
    	th.down('#DislivelloNeg').setHtml(rec.dislivellomen + ' -');
    	th.down('#AltitudiniAttivita').setHtml('<b>' + rec.altezzamax + ' max</b><br>' + rec.altezzapart + ' base');
    	th.down('#PendenzeAttivitaMed').setHtml('<b>' + rec.pendenzamed + ' med.');
    	th.down('#PendenzeAttivitaMax').setHtml(rec.pendenzamax + ' max.');
    	th.down('#DistanzaSalita').setHtml(rec.distsalita + ' Km');
    	th.down('#FrequenzaCardioMed').setHtml('<b>' + rec.bpmmedia + ' med.');
    	th.down('#FrequenzaCardioMax').setHtml(rec.bpmmax + ' max.');
    	th.down('#KcalBruciate').setHtml('<b>' + rec.kcal);
    	if(rec.tempozonacardio && rec.tempozonacardio != '') {
	    	var tempoZona = new Date('1899-01-01 00:00:00');
	    	tempoZona.setHours(rec.tempozonacardio.split(':')[0]);
	    	tempoZona.setMinutes(rec.tempozonacardio.split(':')[1]);
	    	tempoZona.setSeconds(rec.tempozonacardio.split(':')[2]);
	    	th.down('#TempoZonaAll').setHtml(Ext.Date.format(tempoZona, 'H:i:s'));
    	}
    	th.down('#TipoTempoClima').setHtml(traduciTempoClima(rec.climatempo));
    	th.down('#TipoVentoClima').setHtml(traduciVento(rec.climavento));
    	th.down('#TemperaturaClima').setHtml(rec.climatemperatura);
    	th.down('#NoteAttivita').setValue(rec.noteattivita);
    	th.down('#IsGara').setValue(rec.isgara);
    	th.down('#NomeGara').setHtml(rec.nomegara);
    	if(rec.tempogara && rec.tempogara != '') {
    		var tempoGara = new Date('1899-01-01 00:00:00');
        	tempoGara.setHours(rec.tempogara.split(':')[0]);
        	tempoGara.setMinutes(rec.tempogara.split(':')[1]);
        	tempoGara.setSeconds(rec.tempogara.split(':')[2]);
        	th.down('#TempoGara').setHtml(Ext.Date.format(tempoGara, 'H:i:s'));
    	}
    	th.down('#PosizioniGaraAss').setHtml('<b>' + rec.posassoluto + ' ass.');
    	th.down('#PosizioniGaraCat').setHtml(rec.poscategoria + ' cat.');
    	th.down('#PosizioniGaraTot').setHtml('Tot arrivati: ' + rec.totclassificati);
    },
    espandiDettaglio: function(cntMain, collapsed) {
    	var me = this;
    	//SHOW/HIDE GRUPPO GARA se isGara
    	if(cntMain.down('#IsGara').getValue())
    		cntMain.down('#DetailActivityGara').setHidden(collapsed);
    	
    	//SHOW/HIDE TOOLBARS
    	Ext.each(cntMain.query('toolbar'), function(i) {
    		if(i.getItemId().indexOf('ToolbarGruppo') != -1)
    			i.setHidden(collapsed);
    	});
    	
    	//SHOW/HIDE Campi secondari
    	cntMain.down('#TempoAttivita').up().setHidden(collapsed);
    	cntMain.down('#VelocitaAttivitaMax').setHidden(collapsed);
    	cntMain.down('#DislivelloNeg').setHidden(collapsed);
    	cntMain.down('#AltitudiniAttivita').up().setHidden(collapsed);
    	cntMain.down('#PendenzeAttivitaMax').setHidden(collapsed);
    	cntMain.down('#DistanzaSalita').up().setHidden(collapsed);
    	cntMain.down('#FrequenzaCardioMax').setHidden(collapsed);
    	cntMain.down('#TempoZonaAll').up().setHidden(collapsed);
    	cntMain.down('#TipoTempoClima').up().setHidden(collapsed);
    	cntMain.down('#TipoVentoClima').up().setHidden(collapsed);
    	cntMain.down('#TemperaturaClima').up().setHidden(collapsed);
    	cntMain.down('#NoteAttivita').up().setHidden(collapsed);
    	
    	cntMain.down('#ToolbarBtnsActions').setHidden(collapsed);
    }
});