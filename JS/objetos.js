//Creación del objeto persona en método nuevo con el toHtmlRow

class Persona {
	constructor(sNif,sNombre,sApellidos,sDireccion){
        this.dni=sNif;
        this.nombre=sNombre;
        this.apellidos=sApellidos;
        this.direccion=sDireccion;
    }
}

Persona.prototype.toHTMLRow = function (){

    let sFila = "<tr>";
    sFila+="<td>"+this.dni+"</td>";
    sFila+="<td>"+this.nombre+"</td>";
    sFila+="<td>"+this.apellidos+"</td>";
    sFila+="<td>"+this.direccion+"</td>";
    sFila += "</tr>";
    
    return sFila;
    }

    class Conductor extends Persona{

        constructor(dni,nombre,apellidos,direccion,dCaducidadCarnet){
            super(dni,nombre,apellidos,direccion,dCaducidadCarnet);
            this.caducidadCarnet=dCaducidadCarnet;

        }
    }

    Conductor.prototype.toHTMLRow = function (){

        let sFila = "<tr>";
        sFila+="<td>"+this.dni+"</td>";
        sFila+="<td>"+this.nombre+"</td>";
        sFila+="<td>"+this.apellidos+"</td>";
        sFila+="<td>"+this.direccion+"</td>";
        sFila+="<td>"+this.caducidadCarnet+"</td>";
        sFila += "</tr>";
        
        return sFila;
        }

        class GuardiaCivil extends Persona{

            constructor(dni,nombre,apellidos,direccion,sPuesto){
                super(dni,nombre,apellidos,direccion,sPuesto);
                this.puesto=sPuesto;
    
            }
        }

        GuardiaCivil.prototype.toHTMLRow = function (){

            let sFila = "<tr>";
            sFila+="<td>"+this.dni+"</td>";
            sFila+="<td>"+this.nombre+"</td>";
            sFila+="<td>"+this.apellidos+"</td>";
            sFila+="<td>"+this.direccion+"</td>";
            sFila+="<td>"+this.puesto+"</td>";
            sFila += "</tr>";
            
            return sFila;
            }