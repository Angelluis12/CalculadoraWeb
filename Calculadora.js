class Calculadora {
  
    sumar(num1, num2) {
        var resultado=num1 + num2;
        var histroial = num1+"+"+ num2+"="+resultado;
        addRow("historial",histroial);
        
        return resultado ;
    }

    restar(num1, num2) {

        var resultado=num1 - num2;
        var histroial = num1+"-"+ num2+"="+resultado;
        addRow("historial",histroial);
        
        return resultado ;
    }

    dividir(num1, num2) {
        
        var resultado=num1 / num2;
        var histroial = num1+"/"+ num2+"="+resultado;
        addRow("historial",histroial);
        
        return resultado ;
    }

    multiplicar(num1, num2) {
        var resultado=num1 * num2;
        var histroial = num1+"*"+ num2+"="+resultado;
        addRow("historial",histroial);
        
        return resultado ;
        
    }

} 

function limpiarhistorial(){
    var tableRef= document.getElementById("historial")
    tableRef.innerHTML="";
}

function addRow(tableID,resultado) {
    // Obtiene una referencia a la tabla
    var tableRef = document.getElementById(tableID);
  
    // Inserta una fila en la tabla, en el índice 0
    var newRow   = tableRef.insertRow(0);
  
    // Inserta una celda en la fila, en el índice 0
    var newCell  = newRow.insertCell(0);
  
    // Añade un nodo de texto a la celda
    var newText  = document.createTextNode(resultado);
    newCell.appendChild(newText);
  }

