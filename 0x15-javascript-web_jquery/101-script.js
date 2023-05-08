$(document).ready(function () {
  // add item to list
  $("#add_item").click(function () {
    $("<li>Item</li>").appendTo(".my_list");
  });

  // remove last item from list
  $("#remove_item").click(function () {
    $(".my_list li:last-child").remove();
  });

  // clear list
  $("#clear_list").click(function () {
    $(".my_list").empty();
  });
});

