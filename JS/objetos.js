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

            GuardiaCivil.prototype.toHTMLRowMultasPorGuardia = function (){
                let iContadorMulta = 0;
                let iSumaImporte = 0;
               

                let sFila = "<tr>";
                sFila+="<td>"+this.dni+"</td>";
                sFila+="<td>"+this.nombre+"</td>";
                sFila+="<td>"+this.apellidos+"</td>";
                sFila+="<td>"+this.puesto+"</td>";
                sFila+="<td>"+iContadorMulta+"</td>";
                sFila+="<td>"+iSumaImporte+"</td>";
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

    Multa.prototype.toHTMLRowListadoSaldo = function (){

        let sFila = "<tr>";
        sFila+="<td>"+this.idMulta+"</td>";
        if(this.bonificada=="si"){
            let fSaldoConImporte = parseFloat(this.importe - (this.importe*0.25));
            sFila+="<td>"+fSaldoConImporte+"</td>";
        }
        else{
            sFila+="<td>"+this.importe+"</td>";   
        }
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

            Grave.prototype.toHTMLRowPuntosCarnet = function (){

                let sFila = "<tr>";
                let puntosRestantes = 15 - this.puntos;
                sFila+="<td>"+this.nifConductror+"</td>";
                sFila+="<td>"+puntosRestantes+"</td>";
                sFila += "</tr>";
                
                return sFila;
                }
    


            /*function DGT()
            {
                this.multas=[];
                this.personas=[];
            }*/

            /*DGT.prototype.altaConductor = function (oC){

                let oConductorExistente = null;

                    oConductorExistente = this._buscarPersona(oC.dni);

                    if(oConductorExistente==null)
                    {
                    this.personas.push(oC);
                    alert("Alta de conductor realizada");
                    }
                    else
                    alert("Ya hay una persona con ese dni");
                }*/

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

            altaMultaLeve(oM){


                let oMultaExistente = null;
    
                oMultaExistente = this._buscarMultas(oM.idMulta);
    
            if(oMultaExistente==null)
            {
                this.multas.push(oM);
               alert("Alta de multa realizada");
            }
               else
               alert("Ya hay una multa con ese id");

                }

            
            
            altaMultaGrave(oM){
        
                let oMultaExistente = null;
    
                oMultaExistente = this._buscarMultas(oM.idMulta);
    
            if(oMultaExistente==null)
            {
                this.multas.push(oM);
               alert("Alta de multa realizada");
            }
               else
               alert("Ya hay una multa con ese id");
                 
                 }


                 pagaMulta(oM){
        
                    let oMultaExistente = null;
        
                    oMultaExistente = this._buscarMultas(oM.idMulta);
        
                if(oMultaExistente==null)
                {
                   alert("No existe ninguna multa con ese nombre");
                }else if(oMultaExistente.pagada==false){
                    
                    oMultaExistente.pagada=true;
                    alert("Multa pagada");
                    
                }else{

                   alert("Multa ya pagada anteriormente");
                }
                     }
            



    listadoMultas(){
        let sTabla = '<table border="1">';

        // Encabezado de la tabla
        sTabla += "<thead><tr>";
        sTabla += "<th>DNI</th><th>Saldo pendiente</th>";
        sTabla += "</tr></thead>";

        // Contenido de la tabla
        sTabla += "<tbody>";

        // Obtenemos array que no tiene productos con 0 unidades
        let oMultasAux  = this.multas.filter( oMulta => oMulta.pagada == false );


        for (let oMultas of oMultasAux){
            sTabla += oMultas.toHTMLRowListadoSaldo();
        }

        sTabla += "</tbody>";
        sTabla += "</table>";

        return sTabla;
    }

    listadoPuntosConductores(){
        let sTabla = '<table border="1">';

        // Encabezado de la tabla
        sTabla += "<thead><tr>";
        sTabla += "<th>DNI</th><th>Puntos</th>";
        sTabla += "</tr></thead>";

        // Contenido de la tabla
        sTabla += "<tbody>";

        // Obtenemos array que no tiene productos con 0 unidades
        let oPuntosAux  = this.multas.filter( oMulta => oMulta.puntos!=null);


        for (let oPuntos of oPuntosAux){
            sTabla += oPuntos.toHTMLRowPuntosCarnet();
        }

        sTabla += "</tbody>";
        sTabla += "</table>";

        return sTabla;
    }

    listadoMultasPorGuardia()
    {
        let sTabla = '<table border="1">';

        // Encabezado de la tabla
        sTabla += "<thead><tr>";
        sTabla += "<th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Puesto</th><th>Nº Multa</th><th>Importe Multa</th>";
        sTabla += "</tr></thead>";

        // Contenido de la tabla
        sTabla += "<tbody>";

     let oPuntosAux  = this.personas.filter( oPersona => oPersona.puesto!=null);
        for (let oPuntos of oPuntosAux){
            sTabla += oPuntos.toHTMLRowMultasPorGuardia();
        }

        

        sTabla += "</tbody>";
        sTabla += "</table>";

        return sTabla;
    }

    listadoConductores(){

        let sTabla = '<table border="1">';

        // Encabezado de la tabla
        sTabla += "<thead><tr>";
        sTabla += "<th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Dirección</th><th>Caducidad</th>";
        sTabla += "</tr></thead>";

        // Contenido de la tabla
        sTabla += "<tbody>";

     let oPuntosAux  = this.personas.filter( oPersona => oPersona.caducidadCarnet!=null);
        for (let oPuntos of oPuntosAux){
            sTabla += oPuntos.toHTMLRow();
        }

        

        sTabla += "</tbody>";
        sTabla += "</table>";

        return sTabla;

    }

    listadoGuardias(){

        let sTabla = '<table border="1">';

        // Encabezado de la tabla
        sTabla += "<thead><tr>";
        sTabla += "<th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Dirección</th><th>Puesto</th>";
        sTabla += "</tr></thead>";

        // Contenido de la tabla
        sTabla += "<tbody>";

     let oPuntosAux  = this.personas.filter( oPersona => oPersona.puesto!=null);
        for (let oPuntos of oPuntosAux){
            sTabla += oPuntos.toHTMLRow();
        }

        

        sTabla += "</tbody>";
        sTabla += "</table>";

        return sTabla;





    }


    _buscarPersona(sDni){

      let oConductorExistente=null;

        oConductorExistente=this.personas.find(oC => oC.dni==sDni);

        return oConductorExistente;

    }

    _buscarMultas(sIdMulta){

        let oMultaExistente=null;
  
          oMultaExistente=this.multas.find(oM => oM.idMulta==sIdMulta);
  
          return  oMultaExistente;
  
      }

    
    
}

/*function DGT()    EJEMPLO DGT Y UN METODO EN FORMA ANITUGA
            {
            
                    this.multas=[];
                this.personas=[];

            }

            DGT.prototype.altaConductor= function (oC){

                let oConductorExistente = null;
        
                if(oConductorExistente==null)
                {
                   this.personas.push(oC);
                   alert("Alta de conductor realizada");
                }
                   else
                   alert("Ya hay una persona con ese dni");
                
                }*/ 