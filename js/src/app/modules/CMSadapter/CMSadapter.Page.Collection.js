// @module CMSadapter
define(
		'CMSadapter.Page.Collection'
,	[
		'CMSadapter.Page.Model'
	]
,	function (
		Model
	)
{
	'use strict';

	// @class CMSadapter.Page.Collection @extends Backbone.Collection
	// TODO: let it extend CachedModel
	return Backbone.Collection.extend ({

		model: Model

	});
});
