// @module CMSadapter
define(
	'CMSadapter.Landing.View'
,	[
	]
,	function (
	)
{
	'use strict';

	// @class CMSadapter.Landing.View @extends Backbone.View
	// TODO: better context. breadcrumb?
	return Backbone.View.extend({

		template: 'cms_landing_page'

	,	title: ''

	,	page_header: ''

	,	attributes: {
			'id': 'cms-landing-page'
		,	'class': 'cms-landing-page'
		}

	,	initialize: function(options)
		{
			Backbone.View.prototype.initialize.apply(this, arguments);
			this.model = options.model;
		}

	,	getBreadcrumbPages: function ()
		{
			var url = this.model.get('url')
			,	path = url[0] === '/' ? url : '/' + url;

			return [{ href: path, text: this.model.get('page_title') }];
		}

		// @method getContext @returns {CMSadapter.Landing.View.Context}
	,	getContext: function ()
		{
			// @class CMSadapter.Landing.View.Context
			return {
				// @property {Boolean} inModal
				inModal: this.inModal
				// @property {String} title
			,	title: this.title
				// @property {String} pageHeader
			,	pageHeader: this.page_header
				// @property {CMSadapter.Page.Model} model
			,	model: this.model
			};
		}
	});
});
