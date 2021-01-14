$(document).ready(function() {
  $("input:radio").click(function() {
    const animal = $("input:radio[name=pageradio]:checked").val();

    if (animal === "skunk") {
      $(".card").hide();
      $("#spotted-skunk").show();
    } else if (animal === "honeybadger") {
      $(".card").hide();
      $("#honeybadger").show();
    } else {
      $(".card").hide();
      $("#palm-civet").show();
    }
  });
});