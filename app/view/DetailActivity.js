Ext.define('HOPHOP.view.DetailActivity', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Toolbar',
        'Ext.Img',
        'Ext.Label',
        'Ext.Spacer',
        'Ext.Button',
        'Ext.field.TextArea'
    ],

    config: {
        cls: 'container-generali',
        itemId: 'DetailActivity',
        margin: '20 0 0 0',
        padding: 10,
        layout: {
        	type: 'vbox',
        	align: 'stretch'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'image',
                        height: 24,
                        itemId: 'IconaTipoAttivita',
                        margin: '0 10 0 15',
                        width: 24,
                        src: 'resources/img/cup.svg'
                    },
                    {
                        xtype: 'label',
                        html: '<b>Tipo attività &nbsp; 00-00-0000',
                        itemId: 'LabelTipoDataAttivita'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        cls: 'square',
                        itemId: 'BtnExpandActivity',
                        margin: 0,
                        icon: 'resources/img/updown.svg',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'DetailActivityGara',
                hidden: true,
                layout: {
            		type: 'vbox',
            		align: 'stretch'
            	},
                items: [
                    {
                    	xtype: 'checkboxfield',
                    	itemId: 'IsGara',
                    	hidden: true
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Nome gara: '
                            },
                            {
                                xtype: 'label',
                                itemId: 'NomeGara',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Tempo gara: '
                            },
                            {
                                xtype: 'label',
                                itemId: 'TempoGara',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Posizione: '
                            },
                            {
                            	xtype: 'container',
                            	layout: {
                            		type: 'vbox',
                            		align: 'stretch'
                            	},
                            	items: [
									{
		                                xtype: 'label',
		                                itemId: 'PosizioniGaraAss',
		                                margin: '0 0 0 10'
		                            },
		                            {
		                                xtype: 'label',
		                                itemId: 'PosizioniGaraCat',
		                                margin: '0 0 0 10'
		                            },
		                            {
		                                xtype: 'label',
		                                itemId: 'PosizioniGaraTot',
		                                margin: '0 0 0 10'
		                            }
                    	        ]
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        cls: 'toolbar-Dettaglio-Dettaglio',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'image',
                                height: 16,
                                margin: '0 5 0 10',
                                width: 16,
                                src: 'resources/img/cup.svg'
                            },
                            {
                                xtype: 'label',
                                html: '<center><b>Risultati gara</center>',
                                margin: 5
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'DetailActivityDatiPercorso',
                margin: '10 0 0 0',
                layout: {
            		type: 'vbox',
            		align: 'stretch'
            	},
                items: [
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        hidden: true,
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Tempo attività: ',
							    width: 140
                            },
                            {
                                xtype: 'label',
                                itemId: 'TempoAttivita',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Distanza: ',
							    width: 140
                            },
                            {
                                xtype: 'label',
                                itemId: 'DistanzaAttivita',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Velocità ( km/h ): ',
							    width: 140
                            },
                            {
                            	xtype: 'container',
                            	layout: {
                            		type: 'vbox',
                            		align: 'stretch'
                            	},
                            	flex: 1,
                            	items: [
									{
									    xtype: 'label',
									    itemId: 'VelocitaAttivitaMed',
									    margin: '0 0 0 10'
									},
									{
									    xtype: 'label',
									    itemId: 'VelocitaAttivitaMax',
									    margin: '0 0 0 10',
									    hidden: true
									}
                    	        ]
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        itemId: 'ToolbarGruppoDatiPercorso',
                        hidden: true,
                        cls: 'toolbar-Dettaglio-Dettaglio',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'image',
                                height: 16,
                                margin: '0 5 0 10',
                                width: 16,
                                src: 'resources/img/route.svg'
                            },
                            {
                                xtype: 'label',
                                html: '<center><b>Dati percorso</center>',
                                margin: 5
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'DetailActivityDatiAltimetrici',
                margin: '10 0 0 0',
                layout: {
            		type: 'vbox',
            		align: 'stretch'
            	},
                items: [
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Dislivello ( mt ) : ',
							    width: 140
                            },
                            {
                            	xtype: 'container',
                            	layout: {
                            		type: 'vbox',
                            		align: 'stretch'
                            	},
                            	flex: 1,
                            	items: [
                        	        {
	                                    xtype: 'label',
	                                    itemId: 'DislivelloPos',
	                                    margin: '0 0 0 10'
                        	        },
                        	        {
	                                    xtype: 'label',
	                                    itemId: 'DislivelloNeg',
	                                    margin: '0 0 0 10',
	                                    hidden: true
                        	        }
                    	        ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        hidden: true,
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Altitudine ( mt ) : ',
							    width: 140
                            },
                            {
                                xtype: 'label',
                                itemId: 'AltitudiniAttivita',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Pendenza ( % ) : ',
							    width: 140
                            },
                            {
                            	xtype: 'container',
                            	layout: {
                            		type: 'vbox',
                            		align: 'stretch'
                            	},
                            	flex: 1,
                            	items: [
									{
									    xtype: 'label',
									    itemId: 'PendenzeAttivitaMed',
									    margin: '0 0 0 10'
									},
									{
									    xtype: 'label',
									    itemId: 'PendenzeAttivitaMax',
									    margin: '0 0 0 10',
									    hidden: true
									}
                    	        ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        hidden: true,
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Distanza salita ( km ) : '
                            },
                            {
                                xtype: 'label',
                                itemId: 'DistanzaSalita',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        itemId: 'ToolbarGruppoDatiAltimetrici',
                        hidden: true,
                        cls: 'toolbar-Dettaglio-Dettaglio',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'image',
                                height: 16,
                                margin: '0 5 0 10',
                                width: 16,
                                src: 'resources/img/ascend.svg'
                            },
                            {
                                xtype: 'label',
                                html: '<center><b>Dati altimetrici</center>',
                                margin: 5
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'DetailActivityDatiCardio',
                margin: '10 0 0 0',
                layout: {
            		type: 'vbox',
            		align: 'stretch'
            	},
                items: [
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Frequenza ( bpm ) : ',
							    width: 150
                            },
                            {
                            	xtype: 'container',
                            	layout: {
                            		type: 'vbox',
                            		align: 'stretch'
                            	},
                            	flex: 1,
                            	items: [
									{
		                                xtype: 'label',
		                                itemId: 'FrequenzaCardioMed',
		                                margin: '0 0 0 10'
		                            },
									{
									    xtype: 'label',
									    itemId: 'FrequenzaCardioMax',
									    margin: '0 0 0 10',
									    hidden: true
									}
                    	        ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Energia Kcal : ',
							    width: 150
                            },
                            {
                                xtype: 'label',
                                itemId: 'KcalBruciate',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        hidden: true,
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Tempo zona all.: ',
							    width: 150
                            },
                            {
                                xtype: 'label',
                                itemId: 'TempoZonaAll',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        itemId: 'ToolbarGruppoDatiCardio',
                        hidden: true,
                        cls: 'toolbar-Dettaglio-Dettaglio',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'image',
                                height: 16,
                                margin: '0 5 0 10',
                                width: 16,
                                src: 'resources/img/heart.svg'
                            },
                            {
                                xtype: 'label',
                                html: '<center><b>Dati cardio</center>',
                                margin: 5
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'DetailActivityDatiClima',
                margin: '10 0 0 0',
                layout: {
            		type: 'vbox',
            		align: 'stretch'
            	},
                items: [
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        hidden: true,
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Tempo: ',
							    width: 70
                            },
                            {
                                xtype: 'label',
                                itemId: 'TipoTempoClima',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        hidden: true,
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Vento: ',
							    width: 70
                            },
                            {
                                xtype: 'label',
                                itemId: 'TipoVentoClima',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        margin: '5 0 0 0',
                        layout: {
                    		type: 'hbox',
                    		align: 'stretch'
                    	},
                        hidden: true,
                        items: [
                            {
                                xtype: 'label',
                                html: '<b>Temperatura °C : '
                            },
                            {
                                xtype: 'label',
                                itemId: 'TemperaturaClima',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        itemId: 'ToolbarGruppoClima',
                        hidden: true,
                        cls: 'toolbar-Dettaglio-Dettaglio',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'image',
                                height: 16,
                                margin: '0 5 0 10',
                                width: 16,
                                src: 'resources/img/weather.svg'
                            },
                            {
                                xtype: 'label',
                                html: '<center><b>Clima</center>',
                                margin: 5
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'DetailActivityDatiNote',
                margin: '10 0 0 0',
                layout: {
            		type: 'vbox',
            		align: 'stretch'
            	},
                padding: 5,
                hidden: true,
                items: [
                    {
                        xtype: 'textareafield',
                        itemId: 'NoteAttivita',
                        readOnly: true,
                        height: 50
                    },
                    {
                        xtype: 'toolbar',
                        cls: 'toolbar-Dettaglio-Dettaglio',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'image',
                                height: 16,
                                margin: '0 10 0 15',
                                width: 16,
                                src: 'resources/img/notes.svg'
                            },
                            {
                                xtype: 'label',
                                html: '<center><b>Note attività</center>',
                                margin: 5
                            }
                        ]
                    }
                ]
            },
            {
            	xtype: 'container',
            	itemId: 'ToolbarBtnsActions',
            	layout: {
            		type: 'hbox',
            		align: 'stretch'
            	},
            	margin: '10 0 0 0',
            	hidden: true,
            	items: [
					{
					    xtype: 'button',
					    itemId: 'BtnModificaAttivita',
					    ui: 'action',
					    text: 'Modifica'
					},
					{
					    xtype: 'spacer'
					},
					{
					    xtype: 'button',
					    itemId: 'BtnEliminaAttivita',
					    ui: 'decline',
					    iconCls: '',
					    text: 'Elimina'
					}
    	        ]
            }
        ]
    }

});