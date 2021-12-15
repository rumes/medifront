define('BrontoIntegration'
,	[]
,	function ()
{
	'use strict';

  return {
		instanceId: ''
	,	loadScript: function ()
		{
			if (SC.ENVIRONMENT.jsEnvironment === 'browser')
			{
				jQuery('body').append(jQuery('<script src="https://cdn.bronto.com/netsuite/configure.js" data-bronto-integrations="' + this.instanceId + '"></script>'));
			}
		}
	,	mountToApp: function (application)
		{
			var bronto_config = application.getConfig('bronto');

			if (bronto_config && bronto_config.accountId)
			{
				this.instanceId = bronto_config.accountId;
				application.getLayout().once('afterAppendView', jQuery.proxy(this, 'loadScript'));
			}
		}
	};
});
