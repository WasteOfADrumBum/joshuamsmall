$(document).ready(function () {
  /* === || Scroll || === */
  $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );
    }
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

  /* === || DatePicker || === */
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

  $(window).resize(function () {
    $(".ba-slider").each(function () {
      var cur = $(this);
      var width = cur.width() + "px";
      cur.find(".resize img").css("width", width);
    });
  });

  function drags(dragElement, resizeElement, container) {
    dragElement
      .on("mousedown touchstart", function (e) {
        dragElement.addClass("draggable");
        resizeElement.addClass("resizable");

        var startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        var dragWidth = dragElement.outerWidth(),
          posX = dragElement.offset().left + dragWidth - startX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth();

        minLeft = containerOffset + 10;
        maxLeft = containerOffset + containerWidth - dragWidth - 10;

        dragElement
          .parents()
          .on("mousemove touchmove", function (e) {
            var moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;

            leftValue = moveX + posX - dragWidth;

            if (leftValue < minLeft) {
              leftValue = minLeft;
            } else if (leftValue > maxLeft) {
              leftValue = maxLeft;
            }

            widthValue =
              ((leftValue + dragWidth / 2 - containerOffset) * 100) /
                containerWidth +
              "%";

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

  /* === || MODAL || === */
  $("#myModal").on("shown.bs.modal", function () {
    $("#myInput").trigger("focus");
  });
});
