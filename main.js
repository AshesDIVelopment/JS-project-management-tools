
var userid, username;
var toggled = false;




function showCreateIssuePopup(){

	// body...
}


var toggled = false;

var projects =[];

function createIssue() {
	var type = document.getElementById('issueTypeInput').value;
	//TODO take all other values from popup form
	console.dir(type);


	var resultLabel = document.getElementById('createdIssue');
	resultLabel.innerHTML="Issue created: " + type;

    var createdBy = document.getElementById('createdByIdInput');
    createdBy.innerHTML = "CreatedBy:" + userid;

  


}

function createProject(){
	var name = document.getElementById('projectName').value;
	var resultProject = document.getElementById('createdProject');
	resultProject.innerHTML = "Project created: " + name;
	projects.push(name);
}

function populateSelect(select, options) {
	for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
	}
}

function resetSelect(select){
	var i;
	for(i = select.options.length - 1 ; i >= 0 ; i--)
    {
        select.remove(i);
    }
}

function initModal() {
	var select = document.getElementById('projectSelect');
	var createdByIdInput = document.getElementById('createdByIdInput');
	createdByIdInput.value = userid;

	resetSelect(select);
	populateSelect(select, projects);



}

function login(){
	var mainDiv = document.getElementById('mainPage');
	var loginDiv = document.getElementById('loginPage');
	mainDiv.removeAttribute('class');
	loginPage.className += 'hidden';

	userid = uuidv4();
	username = document.getElementById('loginId').value;


	var userDisplay = document.getElementById('user');
	var userIdDisplay = document.getElementById('userid');

	userDisplay.innerHTML = "User: " + username;
	userIdDisplay.innerHTML = "Id: " + userid;
}


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}



 

function updateClock() {
    var now = new Date(), 
        months = ['January', 'February', '...']; 
        time = now.getHours() + ':' + now.getMinutes(), 
        
        date = [now.getDate(), 
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    
    document.getElementById('time').innerHTML = [date, time].join(' / ');

    
    setTimeout(updateClock, 1000);
}
updateClock(); 














