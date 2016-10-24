/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Ext.MessageBox',
        'Ext.device.Camera'
    ],
    views: [
        'Main',
        'PopUpNewActivity',
        'DetailActivity',
        'MainAnalisiDati',
        'MainTimelineActivity',
        'MainAndamento'
    ],
    controllers: [
        'NewActivity',
        'MainApp',
        'DetailActivity',
        'MainAnalisiDati',
        'MainTimelineActivity',
        'MainAndamento'
    ],
    name: 'HOPHOP',

    launch: function() {
    	HOPHOP.globals = {
			appLoader: false,
			appLoaderCount: 0
    	};
    	
        Ext.util.Format.empty = function(value, defaultValue) {
            return !Ext.isEmpty(value) ? value : defaultValue;
        };
        Ext.util.Format.undef = function(value, defaultValue) {
            return Ext.isDefined(value) ? value : defaultValue;
        };
        /*var ds = Ext.StoreMgr.lookup('ContactStore');
        if (!ds.getCount()) {
            Ext.Msg.alert('Intro', 'Setting up default database.');
            ds.add({
                firstName: 'Aaron',
                lastName: 'Conran',
                emailAddress: 'aaron@sencha.com',
                phoneNumber: '443-555-1234'
            });
            ds.add({
                firstName: 'Aditya',
                lastName: 'Bansod',
                phoneNumber: '555-555-1234'
            });
            ds.add({
                firstName: 'Luca',
                lastName: 'Candela',
                phoneNumber: '555-555-1234'
            });
            ds.add({
                firstName: 'Tommy',
                lastName: 'Maintz',
                isFavorite: true,
                phoneNumber: '717-555-1234'
            });
            ds.add({
                firstName: 'Nige',
                lastName: '(Animal) White',
                isFavorite: true,
                phoneNumber: '555-555-1234'
            });
        }*/
        
        //ABILITA SCROLL MOUSE MOUSEWHEEL
        var mouseWheelHandler = function (e) {
            var e = window.event || e,
                el = e.target,
                cmp,
                offset,
                scroller,
                delta,
                _results = [];
            e.preventDefault(); // prevent scrolling when in iframe
            while (el !== document.body) {
                if (el && el.className && el.className.indexOf('x-container') >= 0) {
                    cmp = Ext.getCmp(el.id);
                    if (cmp && typeof cmp.getScrollable == 'function' && cmp.getScrollable()) {
                        scroller = cmp.getScrollable().getScroller();
                        if (scroller) {
                            delta = e.detail ? e.detail*(-120) : e.wheelDelta;
                            offset = { x:0, y: -delta*0.5 };
                            scroller.fireEvent('scrollstart', scroller, scroller.position.x, scroller.position.y, e);
                            scroller.scrollBy(offset.x, offset.y);
                            scroller.snapToBoundary();
                            scroller.fireEvent('scrollend', scroller, scroller.position.x, scroller.position.y-offset.y);
                            break;
                        }
                    }
                }
            _results.push(el = el.parentNode);
            }
            return _results;
        };

        if (document.addEventListener) {
            // IE9, Chrome, Safari, Opera
            document.addEventListener('mousewheel', mouseWheelHandler, false);
            // Firefox
            document.addEventListener('DOMMouseScroll', mouseWheelHandler, false);
        }
        else {
            // IE 6/7/8
            document.attachEvent('onmousewheel', mouseWheelHandler);
        }
        //fine**ABILITA SCROLL MOUSE MOUSEWHEEL
        
        Ext.create('HOPHOP.view.Main', {fullscreen: true});
        
        //LOADER
        Ext.Ajax.on('beforerequest', function( conn, options, eOpts ) {
        	if( !HOPHOP.globals.appLoader ) {
        		var loader = Ext.create('Ext.Panel', {
            		floating: true,
                    centered: true,
                    modal: true,
                    html: "<div class=\"loaderAjax\">" +
    		            		"<i class=\"loader__tile loader__tile__1\"></i>" +
    		    				"<i class=\"loader__tile loader__tile__2\"></i>" +
    							"<i class=\"loader__tile loader__tile__3\"></i>" +
    							"<i class=\"loader__tile loader__tile__4\"></i>" +
    							"<i class=\"loader__tile loader__tile__5\"></i>" +
    							"<i class=\"loader__tile loader__tile__6\"></i>" +
    							"<i class=\"loader__tile loader__tile__7\"></i>" +
    							"<i class=\"loader__tile loader__tile__8\"></i>" +
    							"<i class=\"loader__tile loader__tile__9\"></i>" +
    						"</div>"
            	});
            	loader.show();
            	HOPHOP.globals.appLoader = loader;
        	}        	
        	HOPHOP.globals.appLoaderCount++;
        });
        
        Ext.Ajax.on('requestcomplete', function ( conn, response, options, eOpts ) {
        	if( HOPHOP.globals.appLoaderCount > 0 ) {
        		HOPHOP.globals.appLoaderCount--;
        	}
        	if( HOPHOP.globals.appLoaderCount == 0 && HOPHOP.globals.appLoader ){
        		HOPHOP.globals.appLoader.hide();
        		HOPHOP.globals.appLoader.destroy();
        		HOPHOP.globals.appLoader = false;
        	}
        });
        Ext.Ajax.on('requestexception', function ( conn, response, options, eOpts ) {
        	if( HOPHOP.globals.appLoaderCount > 0 ) {
        		HOPHOP.globals.appLoaderCount--;
        	}
        	if( HOPHOP.globals.appLoaderCount == 0 && HOPHOP.globals.appLoader ){
        		HOPHOP.globals.appLoader.hide();
        		HOPHOP.globals.appLoader.destroy();
        		HOPHOP.globals.appLoader = false;
        	}
        	
        	alert(response.responseText);
        });
    }

});
