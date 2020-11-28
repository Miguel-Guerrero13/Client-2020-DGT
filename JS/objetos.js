//Creación del objeto persona en método antiguo con el toHtmlRow

function Persona(sNif,sNombre,sApellidos,sDireccion){
    this.dni=sNif;
        this.nombre=sNombre;
        this.apellidos=sApellidos;
        this.direccion=sDireccion;
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

    function Conductor(sNif,sNombre,sApellidos,sDireccion,dCaducidadCarnet)
    {
        Persona.call(this,sNif,sNombre,sApellidos,sDireccion);
        this.caducidadCarnet=dCaducidadCarnet;
    }
    
    // Aqui es donde heredamos propiedades y metodos
    Conductor.prototype = Object.create(Persona.prototype);
    Conductor.prototype.constructor = Conductor;

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


        function GuardiaCivil(sNif,sNombre,sApellidos,sDireccion,sPuesto)
        {
            Persona.call(this,sNif,sNombre,sApellidos,sDireccion);
            this.puesto=sPuesto;
        }
        
        // Aqui es donde heredamos propiedades y metodos
        GuardiaCivil.prototype = Object.create(Persona.prototype);
        GuardiaCivil.prototype.constructor = GuardiaCivil;

    
        Conductor.prototype.toHTMLRow = function (){
    
            let sFila = "<tr>";
            sFila+="<td>"+this.dni+"</td>";
            sFila+="<td>"+this.nombre+"</td>";
            sFila+="<td>"+this.apellidos+"</td>";
            sFila+="<td>"+this.direccion+"</td>";
            sFila+="<td>"+this.puesto+"</td>";
            sFila += "</tr>";
            
            return sFila;
            }


//Clase nueva

class Multa {
	constructor(iIdMulta,sNifConductor,sNifGuardia, fImporte,bPagada,sDescripcion,dFecha){
        this.idMulta=iIdMulta;
        this.nifConductror=sNifConductor;
        this.nifGuardia=sNifGuardia;
        this.importe=fImporte;
        this.pagada=bPagada;
        this.descripcion=sDescripcion;
        this.fecha=dFecha;
    }
}

Multa.prototype.toHTMLRow = function (){

    let sFila = "<tr>";
    sFila+="<td>"+this.idMulta+"</td>";
    sFila+="<td>"+this.nifConductror+"</td>";
    sFila+="<td>"+this.nifGuardia+"</td>";
    sFila+="<td>"+this.importe+"</td>";
    sFila+="<td>"+this.pagada+"</td>";
    sFila+="<td>"+this.descripcion+"</td>";
    sFila+="<td>"+this.fecha+"</td>";
    sFila += "</tr>";
    
    return sFila;
    }

    
    class Leve extends Multa{

        constructor(iIdMulta,sNifConductor,sNifGuardia, fImporte,bPagada,sDescripcion,dFecha,bBonificada){
            super(iIdMulta,sNifConductor,sNifGuardia, fImporte,bPagada,sDescripcion,dFecha);
            this.bonificada=bBonificada;

        }
    }

    Leve.prototype.toHTMLRow = function (){

        let sFila = "<tr>";
        sFila+="<td>"+this.idMulta+"</td>";
        sFila+="<td>"+this.nifConductror+"</td>";
        sFila+="<td>"+this.nifGuardia+"</td>";
        sFila+="<td>"+this.importe+"</td>";
        sFila+="<td>"+this.pagada+"</td>";
        sFila+="<td>"+this.descripcion+"</td>";
        sFila+="<td>"+this.fecha+"</td>";
        sFila+="<td>"+this.bonificada+"</td>";
        sFila += "</tr>";
        
        return sFila;
        }


        class Grave extends Multa{

            constructor(iIdMulta,sNifConductor,sNifGuardia, fImporte,bPagada,sDescripcion,dFecha,iPuntos){
                super(iIdMulta,sNifConductor,sNifGuardia, fImporte,bPagada,sDescripcion,dFecha);
                this.puntos=iPuntos;
    
            }
        }

        Grave.prototype.toHTMLRow = function (){

            let sFila = "<tr>";
            sFila+="<td>"+this.idMulta+"</td>";
            sFila+="<td>"+this.nifConductror+"</td>";
            sFila+="<td>"+this.nifGuardia+"</td>";
            sFila+="<td>"+this.importe+"</td>";
            sFila+="<td>"+this.pagada+"</td>";
            sFila+="<td>"+this.descripcion+"</td>";
            sFila+="<td>"+this.fecha+"</td>";
            sFila+="<td>"+this.puntos+"</td>";
            sFila += "</tr>";
            
            return sFila;
            }




class DGT {
	constructor(){
        this.multas=[];
        this.personas=[];
    }

    altaConductor(oC){

        let oConductorExistente = null;

        oConductorExistente = this._buscarPersona(oC.dni);

        if(oConductorExistente==null)
        {
           this.personas.push(oC);
           alert("Alta de conductor realizada");
        }
           else
           alert("Ya hay una persona con ese dni");
        
        }

        altaGuardia(oC){

            let oGuardiaExistente = null;
    
            oGuardiaExistente = this._buscarPersona(oC.dni);
    
            if(oGuardiaExistente==null)
            {
               this.personas.push(oC);
               alert("Alta de conductor realizada");
            }
               else
               alert("Ya hay una persona con ese dni");
            
            }

    


    _buscarPersona(sDni){

      let oConductorExistente=null;

        oConductorExistente=this.personas.find(oC => oC.dni==sDni);

        return oConductorExistente;

    }
    
}
