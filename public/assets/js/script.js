$(document).ready(function () {
	// Add smooth scrolling to all links in navbar + footer link
	$(".navbar a, footer a[href='#myPage']").on("click", function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				900,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				},
			);
		} // End if
	});

	$(window).scroll(function () {
		$(".slideanim").each(function () {
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass("slide");
			}
		});
	});

	// Data Picker
	$("#datepicker-input input").datepicker({
		format: "mm/dd/yy",
		maxViewMode: 2,
		todayBtn: "linked",
		clearBtn: true,
		orientation: "bottom auto",
		forceParse: false,
		autoclose: true,
	});

	/* === || PHOTOSHOP || === */
	/* © Before-after.js */

	// Call & init
	$(document).ready(function () {
		$(".ba-slider").each(function () {
			var cur = $(this);
			// Adjust the slider
			var width = cur.width() + "px";
			cur.find(".resize img").css("width", width);
			// Bind dragging events
			drags(cur.find(".handle"), cur.find(".resize"), cur);
		});
	});

	// Update sliders on resize.
	// Because we all do this: i.imgur.com/YkbaV.gif
	$(window).resize(function () {
		$(".ba-slider").each(function () {
			var cur = $(this);
			var width = cur.width() + "px";
			cur.find(".resize img").css("width", width);
		});
	});

	function drags(dragElement, resizeElement, container) {
		// Initialize the dragging event on mousedown.
		dragElement
			.on("mousedown touchstart", function (e) {
				dragElement.addClass("draggable");
				resizeElement.addClass("resizable");

				// Check if it's a mouse or touch event and pass along the correct value
				var startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;

				// Get the initial position
				var dragWidth = dragElement.outerWidth(),
					posX = dragElement.offset().left + dragWidth - startX,
					containerOffset = container.offset().left,
					containerWidth = container.outerWidth();

				// Set limits
				minLeft = containerOffset + 10;
				maxLeft = containerOffset + containerWidth - dragWidth - 10;

				// Calculate the dragging distance on mousemove.
				dragElement
					.parents()
					.on("mousemove touchmove", function (e) {
						// Check if it's a mouse or touch event and pass along the correct value
						var moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;

						leftValue = moveX + posX - dragWidth;

						// Prevent going off limits
						if (leftValue < minLeft) {
							leftValue = minLeft;
						} else if (leftValue > maxLeft) {
							leftValue = maxLeft;
						}

						// Translate the handle's left value to masked divs width.
						widthValue =
							((leftValue + dragWidth / 2 - containerOffset) * 100) /
								containerWidth +
							"%";

						// Set the new values for the slider and the handle.
						// Bind mouseup events to stop dragging.
						$(".draggable")
							.css("left", widthValue)
							.on("mouseup touchend touchcancel", function () {
								$(this).removeClass("draggable");
								resizeElement.removeClass("resizable");
							});
						$(".resizable").css("width", widthValue);
					})
					.on("mouseup touchend touchcancel", function () {
						dragElement.removeClass("draggable");
						resizeElement.removeClass("resizable");
					});
				e.preventDefault();
			})
			.on("mouseup touchend touchcancel", function (e) {
				dragElement.removeClass("draggable");
				resizeElement.removeClass("resizable");
			});
	}

	/* Modal */
	$("#myModal").on("shown.bs.modal", function () {
		$("#myInput").trigger("focus");
	});
});
