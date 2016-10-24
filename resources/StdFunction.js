function traduciSport( codice ) {
	var attivita = ['MTB','BDC','Ciclocross','Triathlon','Corsa','Corsa Montagna','Trekking'];
	var codAttivita = [1,2,3,4,5,6,7];
	var indexAttivita = codAttivita.indexOf(codice);
	return indexAttivita != -1 ? attivita[indexAttivita] : 'Attività generica';
}

function traduciTempoClima( codice ) {
	var tempo = ['Cielo sereno','Poco nuvoloso','Variabile con rovesci','Nuvoloso','Pioggia','Temporale','Grandine','Nevischio','Neve','Nebbia'];
	var codTempo = [1,2,3,4,5,6,7,8,9,10];
	var indexTempo = codTempo.indexOf(codice);
	return indexTempo != -1 ? tempo[indexTempo] : 'Tempo sconosciuto';
}

function traduciVento( codice ) {
	var vento = ['Assente','Debole','Moderato','Forte','Molto forte'];
	var codVento = [1,2,3,4,5];
	var indexVento = codVento.indexOf(codice);
	return indexVento != -1 ? vento[indexVento] : 'Vento sconosciuto';
}