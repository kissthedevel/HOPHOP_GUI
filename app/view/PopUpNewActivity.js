Ext.define('HOPHOP.view.PopUpNewActivity', {
    extend: 'Ext.Container',

    requires: [
        'Ext.form.Panel',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.field.Number',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.Checkbox',
        'Ext.Label',
        'Ext.Img',
        'Ext.field.TextArea'
    ],

    config: {
        cls: 'background-generali',
        itemId: 'PopUpNewActivity',
        layout: 'fit',
        modal: true,
        items: [
            {
                xtype: 'formpanel',
                centered: true,
                height: '95%',
                itemId: 'FormNewActivity',
                maxHeight: 500,
                maxWidth: 300,
                padding: 10,
                width: '95%',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'BtnCancelNewAct',
                                ui: 'decline',
                                text: 'Indietro'
                            },
                            {
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'button',
                                itemId: 'BtnSalvaNewAct',
                                ui: 'action',
                                iconCls: '',
                                text: 'Salva'
                            }
                        ]
                    },
                    {
                        xtype: 'numberfield',
                        hidden: true,
                        name: 'id'
                    },
                    {
                        xtype: 'container',
                        itemId: 'ContainerDataOra',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'datepickerfield',
                                flex: 1,
                                label: 'Data',
                                name: 'data',
                                value: new Date(),
                                usePicker: true,
                                dateFormat: 'd-m-Y',
                                picker: {
                                    zIndex: 21000
                                }
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'OraAttivita',
                                width: 70,
                                clearIcon: false,
                                value: '00:00',
                                name: 'ora'
                            }
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Sport',
                        name: 'sport',
                        options: [
                            {
                                text: 'MTB',
                                value: 1
                            },
                            {
                                text: 'BDC',
                                value: 2
                            },
                            {
                                text: 'Ciclocross',
                                value: 3
                            },
                            {
                                text: 'Triathlon',
                                value: 4
                            },
                            {
                                text: 'Corsa',
                                value: 5
                            },
                            {
                                text: 'Corsa Montagna',
                                value: 6
                            },
                            {
                                text: 'Trekking',
                                value: 7
                            }
                        ]
                    },
                    {
                        xtype: 'checkboxfield',
                        itemId: 'CkIsGara',
                        margin: '10 0 0 0',
                        label: 'Gara',
                        name: 'isgara'
                    },
                    {
                        xtype: 'container',
                        itemId: 'ContainerDatiGara',
                        hidden: true,
                        cls: 'container-generali',
                        padding: 5,
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Nome',
                                name: 'nomegara'
                            },
                            {
                                xtype: 'label',
                                html: '<center><b>Tempo gara</center>',
                                margin: 5
                            },
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'numberfield',
                                        margin: 3,
                                        width: 80,
                                        label: 'ore',
                                        labelAlign: 'top',
                                        name: 'oregara'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        margin: 3,
                                        width: 80,
                                        label: 'min',
                                        labelAlign: 'top',
                                        name: 'mingara'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        margin: 3,
                                        width: 80,
                                        label: 'sec',
                                        labelAlign: 'top',
                                        name: 'secgara'
                                    }
                                ]
                            },
                            {
                                xtype: 'label',
                                html: '<center><b>Posizione arrivo</center>',
                                margin: 5
                            },
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'vbox',
                                    align: 'center',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'numberfield',
                                        width: 220,
                                        label: 'Assoluto',
                                        labelWidth: 120,
                                        name: 'posassoluto'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        width: 220,
                                        label: 'Categoria',
                                        labelWidth: 120,
                                        name: 'poscategoria'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        width: 220,
                                        label: 'Tot arrivati',
                                        labelWidth: 120,
                                        name: 'totclassificati'
                                    }
                                ]
                            },
                            {
                                xtype: 'toolbar',
                                docked: 'top',
                                items: [
                                    {
                                        xtype: 'image',
                                        height: 24,
                                        margin: '0 10 0 15',
                                        width: 24,
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
                        cls: 'container-generali',
                        margin: '10 0 0 0',
                        padding: 5,
                        items: [
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'numberfield',
                                        flex: 1,
                                        label: 'Ore',
                                        labelAlign: 'top',
                                        name: 'oreattivita'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        flex: 1,
                                        width: 80,
                                        label: 'min.',
                                        labelAlign: 'top',
                                        name: 'minutiattivita'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        flex: 1,
                                        width: 80,
                                        label: 'sec.',
                                        labelAlign: 'top',
                                        name: 'secondiattivita'
                                    }
                                ]
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Distanza ( km )',
                                labelWidth: 150,
                                name: 'distanzaattivita'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Vel. med. (km)',
                                labelWidth: 150,
                                name: 'velmedia'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Vel. max. (km)',
                                labelWidth: 150,
                                name: 'velmax'
                            },
                            {
                                xtype: 'toolbar',
                                docked: 'top',
                                items: [
                                    {
                                        xtype: 'image',
                                        height: 24,
                                        margin: '0 10 0 15',
                                        width: 24,
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
                        cls: 'container-generali',
                        margin: '10 0 0 0',
                        padding: 5,
                        items: [
                            {
                                xtype: 'numberfield',
                                label: 'Dislivello+',
                                labelWidth: 150,
                                name: 'dislivellopos'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Dislivello-',
                                labelWidth: 150,
                                name: 'dislivellomen'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Altezza part.',
                                labelWidth: 150,
                                name: 'altezzapart'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Altezza max.',
                                labelWidth: 150,
                                name: 'altezzamax'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Pend. med. (%)',
                                labelWidth: 150,
                                name: 'pendenzamed'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Pend. max. (%)',
                                labelWidth: 150,
                                name: 'pendenzamax'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Dist salita (km)',
                                labelWidth: 150,
                                name: 'distsalita'
                            },
                            {
                                xtype: 'toolbar',
                                docked: 'top',
                                items: [
                                    {
                                        xtype: 'image',
                                        height: 24,
                                        margin: '0 10 0 15',
                                        width: 24,
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
                        cls: 'container-generali',
                        margin: '10 0 0 0',
                        padding: 5,
                        items: [
                            {
                                xtype: 'numberfield',
                                label: 'Freq. med. ( bpm )',
                                labelWidth: 180,
                                name: 'bpmmedia'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Freq. max. ( bpm )',
                                labelWidth: 180,
                                name: 'bpmmax'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Energia ( Kcal )',
                                labelWidth: 180,
                                name: 'kcal'
                            },
                            {
                                xtype: 'label',
                                html: '<center><b>Tempo zona allenamento</center>',
                                margin: 5
                            },
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'numberfield',
                                        flex: 1,
                                        label: 'Ore',
                                        labelAlign: 'top',
                                        name: 'orezonacardio'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        flex: 1,
                                        width: 80,
                                        label: 'min.',
                                        labelAlign: 'top',
                                        name: 'minzonacardio'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        flex: 1,
                                        width: 80,
                                        label: 'sec.',
                                        labelAlign: 'top',
                                        name: 'seczonacardio'
                                    }
                                ]
                            },
                            {
                                xtype: 'toolbar',
                                docked: 'top',
                                items: [
                                    {
                                        xtype: 'image',
                                        height: 24,
                                        margin: '0 10 0 15',
                                        width: 24,
                                        src: 'resources/img/heart.svg'
                                    },
                                    {
                                        xtype: 'label',
                                        html: '<center><b>Dati Cardio</center>',
                                        margin: 5
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'container-generali',
                        margin: '10 0 0 0',
                        padding: 5,
                        items: [
                            {
                                xtype: 'selectfield',
                                label: 'Tempo',
                                labelWidth: 100,
                                name: 'climatempo',
                                options: [
                                    {
                                        text: 'Cielo sereno',
                                        value: 1
                                    },
                                    {
                                        text: 'Poco nuvoloso',
                                        value: 2
                                    },
                                    {
                                        text: 'Variabile con rovesci',
                                        value: 3
                                    },
                                    {
                                        text: 'Nuvoloso',
                                        value: 4
                                    },
                                    {
                                        text: 'Pioggia',
                                        value: 5
                                    },
                                    {
                                        text: 'Temporale',
                                        value: 6
                                    },
                                    {
                                        text: 'Grandine',
                                        value: 7
                                    },
                                    {
                                        text: 'Nevischio',
                                        value: 8
                                    },
                                    {
                                        text: 'Neve',
                                        value: 9
                                    },
                                    {
                                        text: 'Nebbia',
                                        value: 10
                                    }
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                label: 'Vento',
                                labelWidth: 100,
                                name: 'climavento',
                                options: [
                                    {
                                        text: 'Assente',
                                        value: 1
                                    },
                                    {
                                        text: 'Debole',
                                        value: 2
                                    },
                                    {
                                        text: 'Moderato',
                                        value: 3
                                    },
                                    {
                                        text: 'Forte',
                                        value: 4
                                    },
                                    {
                                        text: 'Molto forte',
                                        value: 5
                                    }
                                ]
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Temperatura °C',
                                labelWidth: 180,
                                name: 'climatemperatura'
                            },
                            {
                                xtype: 'toolbar',
                                docked: 'top',
                                items: [
                                    {
                                        xtype: 'image',
                                        height: 24,
                                        margin: '0 10 0 15',
                                        width: 24,
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
                        cls: 'container-generali',
                        margin: '10 0 0 0',
                        padding: 5,
                        items: [
                            {
                                xtype: 'textareafield',
                                name: 'noteattivita'
                            },
                            {
                                xtype: 'toolbar',
                                docked: 'top',
                                items: [
                                    {
                                        xtype: 'image',
                                        height: 24,
                                        margin: '0 10 0 15',
                                        width: 24,
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
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMytextfieldFocus',
                event: 'focus',
                delegate: '#OraAttivita'
            }
        ]
    },

    onMytextfieldFocus: function(textfield, e, eOpts) {
        textfield.blur();
        var hours = [
            {text: '00',value: '00'},{text: '01',value: '01'},{text: '02',value: '02'},
            {text: '03',value: '03'},{text: '04',value: '04'},{text: '05',value: '05'},
            {text: '06',value: '06'},{text: '07',value: '07'},{text: '08',value: '08'},
            {text: '09',value: '09'},{text: '10',value: '10'},{text: '11',value: '11'},
            {text: '12',value: '12'},{text: '13',value: '13'},{text: '14',value: '14'},
            {text: '15',value: '15'},{text: '16',value: '16'},{text: '17',value: '17'},
            {text: '18',value: '18'},{text: '19',value: '19'},{text: '20',value: '20'},
            {text: '21',value: '21'},{text: '22',value: '22'},{text: '23',value: '23'}
        ];

        var minutes = [
            {text: '00',value: '00'},{text: '05',value: '05'},{text: '10',value: '10'},
            {text: '15',value: '15'},{text: '20',value: '20'},{text: '25',value: '25'},
            {text: '30',value: '30'},{text: '35',value: '35'},{text: '40',value: '40'},
            {text: '45',value: '45'},{text: '50',value: '50'},{text: '55',value: '55'}
        ];
        var picker = Ext.create('Ext.Picker', {
            useTitles: true,
            maxWidth: 240,
            listeners: {
                change: function(picker, value, eOpts) {
                    textfield.setValue(value.hour+':'+value.minute);
                }
            },
            slots: [{
                align: 'left',
                name: 'hour',
                title: 'Ore',
                data: hours
            }, {
                align: 'right',
                name: 'minute',
                title: 'Minuti',
                data: minutes
            }] // slots
        }); // create()

        Ext.Viewport.add(picker);
    }

});