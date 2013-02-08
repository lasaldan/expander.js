/*
 * Expander - jQuery Plugin
 * Daniel Fuller -  2012
 * 
 * Converts a dictionary list to an expandable list, each DT
 * becoming the clickable item, and the cooresponding DD
 * being the toggled item.
 *
 * Accepts an object as parameter with the following options:
 *   listClass: class to be added to the parent DL
 *   openedClass: the class to be added to open items
 *   closedClass: the class to be added to closed items
 *   animate: int indicating number of ms for slide duration
 *   controls: bool indicating need for show/hide all buttons
 *   initiallyOpen: bool indicating start state of items
 *   showButtonLbl: Text to place in the Show All link
 *   hideButtonLbl: Text to place in the Hide All link
 *	 accordian: bool indicating accordian functionality
 *
 */
 
// Anonymous function for closure (like our own namespace)
(function( $ ) {

	// Encapsulates methods for this plugin, keeping the $.fn
	// namespace a bit less cluttered
	var methods = {

		init: function( options ) {

			defaults = {
				listClass: 'expanderList',
				openedClass: 'opened',
				closedClass: 'closed',
				animate: 300,
				controls: true,
				initiallyOpen: false,
				showButtonLbl: "Show All",
				hideButtonLbl: "Hide All",
				accordian: false
			};

			// Merge provided options with the default options
			options = $.extend(defaults, options);
			if(options.animate == false) options.animate = 0;

			// If accordian is true, controls and initiallyOpen MUST be false
			if(options.accordian)
				options.controls = options.initiallyOpen = false;
				
			// Encapsulate the data unique to this instance
			this.data('originalOptions', options);
			opts = this.data('originalOptions');

			// Set width to prevent jumping (jQuery issue)
			// Hopefully this little bit can be removed as it's pretty silly to have
			// to do this, but it's the only reliable way we've found to eliminate the 
			// jumping with animations on elements with margin. Maybe in jQuery update
			this.find('dt, dd').each(function() {
				$(this).width($(this).width());
			});
			
			// Hide all definitions and set initial classes
			if( ! opts.initiallyOpen)
				this.children('dd').hide().prev('dt').addClass(opts.closedClass);
			else
				this.children('dd').prev('dt').addClass(opts.openedClass);

			// Add click event on term tags
			this.children('dt').each(function() {
				$.fn.expander('addClickEvent',$(this));
			});

			// Add controls if necessary - Open and close all buttons also
			// open/close all children DL's if applicable
			if(opts.controls) {

				// Prepare button to Show All descendant DDs
				var showButton = "<a href='#' class='expanderShowAll' " +
					"onclick='return $.fn.expander(\"open\",$(this).nextAll(\"dl\").first())'>" +
					opts.showButtonLbl + "</a>";

				// Prepare button to Hide All descendant DDs
				var hideButton = "<a href='#' class='expanderHideAll' " +
					"onclick='return $.fn.expander(\"close\",$(this).nextAll(\"dl\").first())'>" +
					opts.hideButtonLbl+"</a>";

				// Add button just before the DL tag
				this.before(showButton+hideButton);
			}

			// Add listClass to this parent DL
			this.addClass(opts.listClass);

			// return this for chaining
			return this;

		},

		// Closes the targeted DD or if the target is a DL
		// all DDs within the DL are hidden (nested included)
		close: function(el) {

			// Get Options for the DL containing el
			var op = el.closest('dl').data('originalOptions');

			// If target el is DL, hide all, else hide el
			if( el.is('dl') )
				el.find('dd').each(function(i,e) {

					// Get Local DL configuration options
					var localops = $(e).closest('dl').data('originalOptions');

					// Open at same speed as target DL
					$(e).slideUp(op.animate)
					.prev()
					// But adjust classes based on local DL
					.removeClass( localops.openedClass ).addClass(localops.closedClass);
				});
			else
				el.slideUp(op.animate)
				.prev()
				.removeClass(op.openedClass).addClass(op.closedClass);

			return false;
		},

		// Opens the targeted DD or if the target is a DL
		// all DDs within the DL are opened (nested included)
		open: function(el) {

			// Get Options for the DL containing el
			var op = el.closest('dl').data('originalOptions');
			
			if(op.accordian)
				$.fn.expander('close',el.closest('dl'));

			// If target el is DL, show all, else show el
			if( el.is('dl') )
				el.find('dd').each(function(i,e) {

					// Get Local DL configuration options
					var localops = $(e).closest('dl').data('originalOptions');

					// Open at same speed as target DL
					$(e).slideDown(op.animate)
					.prev()
					// But adjust classes based on local DL
					.addClass( localops.openedClass ).removeClass(localops.closedClass);
				});
			else
				el.slideDown(op.animate)
				.prev()
				.addClass(op.openedClass).removeClass(op.closedClass);

			return false;
		},

		// Adds a click event to the passed element
		addClickEvent: function (el) {
			el.click( function() {
				// get the definition for the term which was clicked
				var def = el.next('dd');

				// Show or hide definition
				if(def.css('display') == 'none')
					$.fn.expander('open',def);
				else
					$.fn.expander('close',def);

				return false;
			});
		}
	};

	// Add expander function to jQuery
	$.fn.expander  = function( method ) {

		// If a method is provided, and it exists, call it with params
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));

		// If no method, or an object is provided, call init method
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );

		// Otherwise, throw an error, as we don't know what is wanted
		} else {
			$.error( 'Method ' +  method + ' does not exist in Expander' );
		} 
	};
})( jQuery );
