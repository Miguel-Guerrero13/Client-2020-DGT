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
    
// Esta sería la clase por el metodo antiguo
function Multa(iIdMulta, sNifConductor,sNifGuardia,fImporte,bPagada,sDescripcion,dFecha){
   // Poligono.call(this,3);    // Llamada al constructor del objeto base
    this.idmulta = iIdMulta;
    this.nifconductor = sNifConductor;
    this.nifguardia=sNifGuardia;
    this.importe=fImporte;
    this.pagada=bPagada;
    this.descripcion=sDescripcion;
    this.fecha=new Date(dFecha);
};

function Leve(iIdMulta, sNifConductor,sNifGuardia,fImporte,bPagada,sDescripcion,dFecha,bBonificada)
{
    Multa.call(this, iIdMulta, sNifConductor,sNifGuardia,fImporte,bPagada,sDescripcion,dFecha);
    this.bonificada=bBonificada;
}

// Aqui es donde heredamos propiedades y metodos
Leve.prototype = Object.create(Multa.prototype);
Leve.prototype.constructor = Leve;

function Grave(iIdMulta, sNifConductor,sNifGuardia,fImporte,bPagada,sDescripcion,dFecha,iPuntos)
{
    Multa.call(this, iIdMulta, sNifConductor,sNifGuardia,fImporte,bPagada,sDescripcion,dFecha);
    this.puntos=iPuntos;
}

// Aqui es donde heredamos propiedades y metodos
Grave.prototype = Object.create(Multa.prototype);
Grave.prototype.constructor = Grave;

//Clase nueva

class DGT {
	constructor(){
        this.multas=[];
        this.personas=[];
    }
}
