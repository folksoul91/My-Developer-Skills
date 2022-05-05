$("#btn").click(() => {
  let userInput = $("#user-input").val();
  let addTableRows = `<tr><td><button class='delete'>X</button></td><td>${userInput}</td></tr>`;
  $("#table").append(addTableRows);
  $("#user-input").val("");
});

// Create a fn to remove the table rows
$("#table").on("click", "button", function () {
  let rows = $(this).closest("tr");
  rows.remove();
});
