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

        constructor(dCaducidadCarnet){
            super(this);
            this.caducidadCarnet=dCaducidadCarnet;

        }
    }

    Conductor.prototype.toHTMLRow = function (){

        let dFila = "<tr>";
        dFila+="<td>"+this.caducidadCarnet+"</td>";
        dFila += "</tr>";
        
        return dFila;
        }

        class GuardiaCivil extends Persona{

            constructor(sPuesto){
                super(this);
                this.puesto=sPuesto;
    
            }
        }