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

    for(i in employee_list) {
        if (employee_list.hasOwnProperty(i)) {
            emp_data = emp_data + "<tr><td>" + employee_list[i][0] + "</td><td>" + employee_list[i][1] + "</td><td>" + employee_list[i][2] + "</td><td><input type='button' id='delete_btn_" + i + "' class='btn' value='Delete' onclick='delete_employee(\"delete_btn_" +i+"\")'></td></tr>"; 
        }
    }
                                    
                                  
    $("employees_info").innerHTML = emp_data;    
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

function delete_employee(id) {   
    "use strict"; 

    var elem_id = id.split("_");   
    var deleted_index = elem_id.pop();  

    employee_list.splice(deleted_index,1);            

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
         
});