/*eslint-env browser*/
var emp_name, emp_title, emp_ext, i;

//Generate the table header
var emp_data = ""; 

var employee_list = [
                 ["Zak Ruvalcaba", "Faculty", 4454],
                 ["Sally Smith", "Quality Assurance", 3423],
                 ["Fred Franklin", "VP Sales", 3346],
                 ["John Smith", "Marketing" , 3232],
                 ["Jane Caruthers", "Customer Service" , 7573]
                 ];
                 
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
}

function load_info(){   
    "use strict";

    //for (i=0; i < employee_list.length; i++){ //alert(i);

    for(i in employee_list) {
        if (employee_list.hasOwnProperty(i)) {
            emp_data = emp_data + "<tr><td>" + employee_list[i][0] + "</td><td>" + employee_list[i][1] + "</td><td>" + employee_list[i][2] + "</td><td><input type='button' id='delete_btn_" + i + "' class='btn' value='Delete'></td></tr>"; 
        }
    }
                                    
                                  
    $("employees_info").innerHTML = emp_data;    //alert(emp_data);
    $("employee_no").innerHTML = "Showing " + employee_list.length + " Employee(s)";

    

}

function add_employee() {
    "use strict";          

    emp_name = $("name").value;
    emp_title = $("title").value;
    emp_ext = $("extension").value;

    if(emp_name === ""){
        window.document.getElementById("name").nextElementSibling.firstChild.nodeValue = "Employee name is required";
    }
    else if(emp_title === ""){
        window.document.getElementById("title").nextElementSibling.firstChild.nodeValue = "Employee title is required";
    }
    else if(emp_ext === ""){
        window.document.getElementById("extension").nextElementSibling.firstChild.nodeValue = "Employee extension is required";
    }
    else if(isNaN(emp_ext)){
        window.document.getElementById("extension").nextElementSibling.firstChild.nodeValue = "Employee extension should be a number";
    }
    else {
        employee_list[employee_list.length] = [emp_name, emp_title, emp_ext];

        window.document.getElementById('name').nextElementSibling.firstChild.nodeValue = "*";
        window.document.getElementById('title').nextElementSibling.firstChild.nodeValue = "*";
        window.document.getElementById('extension').nextElementSibling.firstChild.nodeValue = "*";

        $("employees_info").innerHTML = "";  
        emp_data = "";   
        load_info();

        $("name").value = "";
        $("title").value = "";
        $("extension").value = "";
        $("name").focus();
    }
    
}

function delete_employee(elem_id) {  alert(elem_id);
    "use strict"; 
    
    var elem_id = elem_id.split("_");
    var deleted_index = elem_id.pop();
    
    delete employee_list[deleted_index];

    $("employees_info").innerHTML = "";  
    emp_data = "";  
    load_info();
}


window.addEventListener("load", function () {
    "use strict";

    load_info();
    
    $("name").focus();

    $("add_emp").addEventListener("click", add_employee);

    //Handle blur 
    $("name").addEventListener("blur", function (){
        if ($("name").value !== ""){
            $("name").nextElementSibling.firstChild.nodeValue = "*";
        }
    });

    $("title").addEventListener("blur", function (){
        if ($("title").value !== ""){
            $("title").nextElementSibling.firstChild.nodeValue = "*";
        }
    });

    $("extension").addEventListener("blur", function (){
        if ($("extension").value !== ""){
            $("extension").nextElementSibling.firstChild.nodeValue = "*";
        }
    });
   
    var elements_arr = window.document.querySelectorAll(".btn:not(.add_btn)");  //.btn:not(.add_btn)
                                                            
      /*for (var j = 0; j < elements_arr.length; j++) {     
       elements_arr[j].addEventListener('click', function () {   alert(elements_arr[j]);
            var elem_id = elements_arr[j].id.split("_");
            var deleted_index = elem_id.pop();
            delete_employee(deleted_index); 
          
            alert(deleted_index);
        });
      }*/

   elements_arr.forEach(function(elem) {  
    //for (var j = 0; j < elements_arr.length; j++) {  
        //elements_arr[j].addEventListener("click", function(e) {  
        elem.addEventListener("click", function(e) {  

            //elem.addEventListener("click", delete_employee.bind(null,e.target.id) { 
            //console.log(e.target.id);
           // e.stopPropagation();

            var elem_id = e.target.id;

           /* return function () {
                var elem_id = e.target.id;
                delete_employee(elem_id);
            };*/

            //delete_employee(elem_id);


           


            //Convert the element id to array and extract the last part to get the index
           // var elem_id = e.target.id.split("_");
            //var deleted_index = elem_id.pop();
            //delete_employee(deleted_index);
        }, false);
    });
   // }



   /*elements_arr.forEach(function(elem) {  
    //for (var j = 0; j < elements_arr.length; j++) {  
        //elements_arr[j].addEventListener("click", function(e) {  
        //elem.addEventListener("click", function(e) {  

            //elem.addEventListener("click", delete_employee.bind(null,e.target.id) { 
            console.log(elem.id);       delete_employee(elem.id);
           // e.stopPropagation();

           // var elem_id = e.target.id;

           /* return function () {
                var elem_id = e.target.id;
                delete_employee(elem_id);
            };*/

            //delete_employee(elem_id);


           
       // });
    /*});*/

        
});