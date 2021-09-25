function ajax() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
           



            var output = "";
            output += `<tr>`
            output += `<th>Tasks</th>`;
            output += `<th>Staus</th>`;
            output += `<tr>`


            for (i = 0; i < response.length; i++) {
                if (response[i].completed == true) {
                    output += `
                <tr> 
                <td>${response[i].title}</td>
                <td><input type="checkbox" checked class="largerCheckbox" disabled ></td>
                </tr>`;
                } 
                
                else { output += `
                <tr> 
                <td>${response[i].title}</td>
                <td><input id="check" type="checkbox" class="largerCheckbox" ></td> 
                </tr>`; }

            }
           
            document.getElementById("tablebody").innerHTML = output;

            var count = 0;
            $(document).ready(function() {

                $("#tablebody").on("change", ":checkbox",
                    function() {

                        var CheckedCount = this.checked;
                        var promise = new Promise(function(resolve, reject) {

                            if (CheckedCount === true) {
                                count++;

                            }
                            if (CheckedCount === false) {
                                count--;
                            }
                            if (count == 5) {
                                resolve();
                            }

                        });
                        promise.then(function() {
                            setTimeout(() => {
                                alert("5 Tasks selected");
                            }, 300);
                        });
                    });
                $("table").on("load", function() {
                    $("#spin").hide();
                });

            })
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}
