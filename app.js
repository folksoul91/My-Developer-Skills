$("#btn").click(() => {
  let userInput = $("#user-input").val();
  let addTableRows = `<tr><td><button class='delete'>X</button></td><td>${userInput}</td></tr>`;
  $("#table").append(addTableRows);
});
