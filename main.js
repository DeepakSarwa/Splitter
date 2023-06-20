// $("#addParticipant").click((e) => {
//   $("#addNewGroup").append($("#addNewGroup div.form-group:eq(0)").clone(true));
//   $("#addNewGroup div.form-group").eq(-1).find("form-group").val("");

//   e.preventDefault();
// });
count = 1;
let addMoreField = function name() {
  let emailField = document.getElementById("emailField");
  let Participant = document.getElementById("Participant");

  let inputHtml = `<input
    type="email"
    name="Participant"
    id="Participant-${count}"
    placeholder="Enter email"
    required
    class="mt-2"
  /> 
  <div class="btn btn-sm btn-danger mx-1" onClick="remove('Participant-${count}','close-btn-${count}')" id="close-btn-${count}">Close</div>`;
  count++;
  inputHtml = emailField.innerHTML + inputHtml;
  emailField.innerHTML = inputHtml;
  console.log(emailField);
  //   console.log(emailField.firstChild);
  //   let cloneNode = Participant.cloneNode(true);
  //   cloneNode.setAttribute("class","mt-2")
  //   console.log(cloneNode);
  //   //   console.log(emailField.childNodes);
  //   emailField.appendChild(cloneNode);
};

function remove(inputFieldId, closeBtnId) {
  //   alert(id + "");
  //   console.log(id);
  let element = document.getElementById(inputFieldId);
  let closeBtn = document.getElementById(closeBtnId);
  element.remove();
  closeBtn.remove();
}
