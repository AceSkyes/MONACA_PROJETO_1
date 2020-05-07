$(document).on("click","#btnSomar", function()
{
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var resultado = parseFloat(valor1) + parseFloat(valor2);
  $("#resultado").val(resultado);
}
)

$(document).on("click","#btnSubtra", function()
{
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var resultado = parseFloat(valor1) - parseFloat(valor2);
  $("#resultado").val(resultado);
}
)

$(document).on("click","#btnMulti", function()
{
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var resultado = parseFloat(valor1) * parseFloat(valor2);
  $("#resultado").val(resultado);
}
)

$(document).on("click","#btnDiv", function()
{
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var resultado = parseFloat(valor1) / parseFloat(valor2);
  $("#resultado").val(resultado);
}
)