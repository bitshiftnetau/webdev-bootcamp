alert("TEST");

var todos = []

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "new"){
		input = (prompt("Add a todo"));
		todos.push(input);
	} else if(input === "list"){
		todos.forEach(function(elements, i){
			alert(i + ":" + elements);
		})
	} else if(input === "delete"){
		var index = prompt("Please enter an index");
		todos[index] = null;

		for(i = index; i < todos.length; i++){
			todos[index] = todos[index + 1];
		}
	}

	input = prompt("What would you like to do?");

}