$.getJSON("/spells.json", function(spells) {
  window.spells = spells;
  $.each(spells, function(i, spell) {
    var tr = $("<tr />");
    var cols = [
      spell.name,
      spell.class,
      spell.school,
      spell.desc,
      spell.range,
      spell.duration,
      spell.casting_time];

    $.each(cols, function(j, col) {
      tr.append("<td>" + col + "</td>");
    });

    $("#spells-body").append(tr);
  });
});
