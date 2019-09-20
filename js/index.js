// const isEmpty = require("validation.js");
$(document).ready(function() {
  if (localStorage.IsahIsahId == undefined) {
    window.location = "index.html";
  }
  getExistingData();
});

$("#addNew").on("click", function() {
  window.location = "new.html";
});

$("#plateNumber").on("submit", function(e) {
  e.preventDefault();
  Add("add");
});

// EDIT SAVE FUNCTION
function editSave(rowID) {
  var name = $("#nameEdit");
  var address = $("#addressEdit");
  var sex = $("#sexEdit");
  var state = $("#stateEdit");
  var user = localStorage.IsahIsahId;
  console.log(name.val() + "" + address.val() + "" + sex.val() + state.val());
  document.getElementById("editBtn").innerText = " ";
  $("#editBtn").addClass("fa fa-circle-o-notch fa-2x fa-spin fa-fw");
  if (
    isNotEmpty(name) &&
    isNotEmpty(sex) &&
    isNotEmpty(address) &&
    isNotEmpty(state)
  ) {
    $.ajax({
      url: "ajax.php",
      method: "POST",
      dataType: "text",
      data: {
        key: "updateRow",
        name: name.val(),
        sex: sex.val(),
        address: address.val(),
        state: state.val(),
        rowID,
        user
      },

      success: function(response) {
        console.log(response);

        document.getElementById("editBtn").innerText = "Submit";
        $("#editBtn").removeClass("fa fa-circle-o-notch fa-2x fa-spin fa-fw");
        window.location = "manage.html";
      }
    });
  }
}

// EDIT GET
function editGet(rowID) {
  console.log("work");
  $.ajax({
    url: "ajax.php",
    method: "POST",
    dataType: "json",
    data: {
      key: "viewRowData",
      rowID: rowID
    },
    success: function(response) {
      if (response.hasOwnProperty("data")) {
        console.log(response);
        localStorage.setItem("isahEditInfo", JSON.stringify(response.data));
        window.location = "edit.html";
      } else {
        alert("Network Error");
      }
    }
  });
}

// VIEW FUNCTION
function view(rowID) {
  console.log("work");
  $.ajax({
    url: "ajax.php",
    method: "POST",
    dataType: "json",
    data: {
      key: "viewRowData",
      rowID: rowID
    },
    success: function(response) {
      response = response.data;
      console.log(response);
      $("#viewName").empty();
      $("#viewName").append(response.myName);
      $("#viewAddr").empty();
      $("#viewAddr").append(response.addr);
      $("#viewSex").empty();
      $("#viewSex").append(response.sex);
      $("#viewState").empty();
      $("#viewState").append(response.state);
      $("#viewPlate").empty();
      $("#viewPlate").append(response.plate_no);
      $("#viewDate").empty();
      $("#viewDate").append(response.date);
      $("#tableView").modal("show");
    }
  });
}

// DELETE
function deleteRow(rowID) {
  if (confirm("Are you sure? ")) {
    alert("Deleted!");
    $.ajax({
      url: "http://localhost/isah/ajax.php",
      method: "post",
      dataType: "text",
      data: {
        key: "deleteRow",
        rowID: rowID
      },
      success: function(response) {
        $("#plate_" + rowID)
          .parent()
          .remove();
        alert(response);
      }
    });
  }
}

function getExistingData() {
  $.ajax({
    url: "ajax.php",
    method: "POST",
    dataType: "text",
    data: {
      key: "getExistingData"
    },
    success: function(response) {
      if (response != "reachedMax") {
        $("tbody").append(response);
      } else {
        $(".table").DataTable();
      }
    }
  });
}

// save function
function Add(key) {
  var name = $("#name");
  var address = $("#address");
  var sex = $("#sex");
  var state = $("#state");
  var user = localStorage.IsahIsahId;
  console.log(name.val() + address.val() + sex.val() + state.val());
  if (
    isNotEmpty(name) &&
    isNotEmpty(sex) &&
    isNotEmpty(address) &&
    isNotEmpty(state)
  ) {
    $.ajax({
      url: "ajax.php",
      method: "POST",
      dataType: "text",
      data: {
        key: key,
        name: name.val(),
        sex: sex.val(),
        address: address.val(),
        state: state.val(),
        user
      },
      success: function(response) {
        console.log(response);
        // if (response != "success") {
        //   alert(response);
        // } else {
        //   $("#country_" + editRowID.val()).html(name.val());
        //   $("#tableManager").modal("hide");
        //   $("#manageBtn")
        //     .attr("value", "Add")
        //     .attr("onclick", "manageData('addNew')");

        name.val("");
        address.val("");
      }
    });
  }
}

function isNotEmpty(caller) {
  if (caller.val().length < 1) {
    caller.css("border", "1px solid red");
    return false;
  } else caller.css("border", "");
  return true;
}

function login() {
  document.getElementById("btnText").innerText = " ";
  $("#btnText").addClass("fa fa-circle-o-notch fa-2x fa-spin fa-fw");
  $.ajax({
    url: "http://localhost/isah/ajax.php",
    method: "POST",
    dataType: "json",
    data: {
      key: "login",
      username: $("#username").val(),
      password: $("#password").val()
    },
    success: function(response) {
      console.log(response);
      res = response.result;
      if (res === "Username or Password Incorrect") {
        $("#error-msg").text(res);
        $("#error-msg").show();
        document.getElementById("btnText").innerText = "Login";
        $("#btnText").removeClass("fa fa-circle-o-notch fa-2x fa-spin fa-fw");
      } else {
        localStorage.setItem("IsahIsahId", res);
        document.getElementById("btnText").innerText = "Home";
        $("#btnText").removeClass("fa fa-circle-o-notch fa-2x fa-spin fa-fw");
        window.location = "Home.html";
      }
      // $("#totalNumber").append(response['0']);
    }
  });
}

function logout() {
  localStorage.removeItem("IsahIsahId");
  window.location = "index.html";
}
