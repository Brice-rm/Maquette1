$(function () {
    $(".filter-list").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      const value = $(this).attr("data-filter");
      // console.log(value)
      if (value === "all") {
        $(".itembox").show("1000");
      } else {
        $(".itembox")
          .not("." + value)
          .hide("1000");
        $(".itembox")
          .filter("." + value)
          .show("1000");
      }
    });
  });

