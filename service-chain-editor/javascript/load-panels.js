if(!loadedPlugins['load-panels']) {
	loadedPlugins['load-panels'] = true;
	var $panel_handler = $('#panelGroup');
	window.load_panel = function(panel, callback) {
		if($panel_handler.length < 1) {
			$panel_handler = $('#panelGroup');
		}
		//console.log($(getTemplate(panel + 'Panel', true)));
		$panel_handler.append($($.data(document, panel + 'Panel')).bind('click', function() {return callback();}));
	}
	//load_panel('wsdl', function() {});
	//load_panel('workspace', function() {});
	/*load_menu('service', 'Service List', function() {alert('test');});
	load_menu('io', 'Service I/O', function() {alert('test');});
	load_menu('export', 'Export', function() {alert('test');});*/
	load_panel('workspace', function() {
		return false;
	});
	load_panel('service', function() {
		return false;
	});
	load_panel('settings', function() {
		return false;
	});
}