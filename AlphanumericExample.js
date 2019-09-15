var pass = "A235bfghfA$%^&@#Fgj86ADD9hT757";
if (pass.match("^[a-zA-z0-9]+ || [a-z0-9A-Z]+ || [A-Za-z0-9]+ || [A-Z0-9a-z]+ || [0-9A-Za-z]+ || [0-9a-zA-Z]+$")) {

    if (pass.match(/[!@#$%^&*]/)) {

        console.log("Dont Allow access");
    } else {
        console.log("Allow access");
    }

}