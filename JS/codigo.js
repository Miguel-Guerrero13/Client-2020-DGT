var oDGT = new DGT();

ocultarFormularios();

function ocultarFormularios(){
frmAltaConductor.style.display = "none";
frmAltaGuardia.style.display = "none";
frmRegistrarMulta.style.display="none";
frmPagaMulta.style.display="none";
document.getElementById('solucion').style.display = "none";
document.getElementById('frmFecha').style.display = "none";
document.getElementById('frmImprimir').style.display = "none";
}

function mostrarAltaConductor(){
ocultarFormularios();
frmAltaConductor.style.display = "block";
}

function mostrarPagaMulta(){
    ocultarFormularios();
    frmPagaMulta.style.display = "block";
    }

function mostrarAltaGuardia(){
ocultarFormularios();
frmAltaGuardia.style.display = "block";
}
function mostrarRegistrarMulta()
{
    ocultarFormularios();
    frmRegistrarMulta.style.display="block";
}

function aceptarAltaConductor(){

    let sNif = frmAltaConductor.txtCodigo.value.trim();
    let sNombre = frmAltaConductor.txtNombre.value.trim();
    let sApellidos = frmAltaConductor.txtCodigo.value.trim();
    let sDireccion = frmAltaConductor.txtNombre.value.trim();
    let dCaducidadCarnet= frmAltaConductor.txtFecha.value.trim();

    let oC = new Conductor(sNif,sNombre, sApellidos, sDireccion, dCaducidadCarnet);

    // Inserto en el almacen
    oDGT.altaConductor(oC);

    ocultarFormularios();
}

function aceptarPagaMulta(){

    let idMulta = frmPagaMulta.txtMulta.value.trim();

    let oC = new Multa(idMulta);

    // Inserto en el almacen
    oDGT.pagaMulta(oC);

    ocultarFormularios();
}

function aceptarAltaGuardia(){

    let sNif = frmAltaGuardia.txtCodigo.value.trim();
    let sNombre = frmAltaGuardia.txtNombre.value.trim();
    let sApellidos = frmAltaGuardia.txtPrecio.value.trim();
    let sDireccion = frmAltaGuardia.txtUnidades.value.trim();
    let dpuesto= frmAltaGuardia.txtPuesto.value.trim();

    let oC = new GuardiaCivil(sNif,sNombre, sApellidos, sDireccion, dpuesto);

    // Inserto en el almacen
    oDGT.altaGuardia(oC);

    ocultarFormularios();
}

function aceptarRegistrarMulta(){

    let iMulta = parseInt(frmRegistrarMulta.txtIdMulta.value.trim());
    let sNifConductor = frmRegistrarMulta.txtNifConductor.value.trim();
    let sNifGuardia = frmRegistrarMulta.txtNifGuardia.value.trim();
    let fImporteMulta = parseFloat(frmRegistrarMulta.txtImporteMulta.value.trim());
    let bPagada = false;
    let sDescripcionMulta= frmRegistrarMulta.txtDescripcionMulta.value.trim();
    let dFechaMulta= frmRegistrarMulta.txtFechaMulta.value.trim();
    let bTipoMulta = frmRegistrarMulta.inlineCheckbox1.value.trim();
    let bBonificada = frmRegistrarMulta.inlineRadio1.value.trim();
    let bBonificada2 = frmRegistrarMulta.inlineRadio2.value.trim();
    let iPuntosMulta = parseInt(frmRegistrarMulta.puntos.value.trim());

    if(bTipoMulta == "Leve")
    {
        if(document.getElementById('inlineRadio2').checked == false){
            let oM = new Leve(iMulta,sNifConductor, sNifGuardia, fImporteMulta,bPagada ,sDescripcionMulta,dFechaMulta,bBonificada);
            oDGT.altaMultaLeve(oM);
        }
        else{
            let oM = new Leve(iMulta,sNifConductor, sNifGuardia, fImporteMulta,bPagada ,sDescripcionMulta,dFechaMulta,bBonificada2);
            oDGT.altaMultaLeve(oM);
        }
        
    }
    else
    {
        if(iPuntosMulta>=1 && iPuntosMulta<=15){

            let oM = new Grave(iMulta,sNifConductor, sNifGuardia, fImporteMulta,bPagada ,sDescripcionMulta,dFechaMulta,iPuntosMulta);
        oDGT.altaMultaGrave(oM);

        }else{

            alert("Introduce unos puntos entre 1 y 15");

        }
        
    }

    

    // Inserto en el almacen
  

    ocultarFormularios();
}

function mostrarListadoSaldoPendiente(){
    
    ocultarFormularios();

    let oMultasPagadas = oDGT.listadoMultas();

    document.getElementById('solucion').innerHTML = oMultasPagadas;

    document.getElementById('solucion').style.display = 'block';
}

function mostrarListadoPuntosConductor(){
    
    ocultarFormularios();

    let oPuntosConductores = oDGT.listadoPuntosConductores();

    document.getElementById('solucion').innerHTML = oPuntosConductores;

    document.getElementById('solucion').style.display = 'block';

}
function mostrarListadoMultasPorGuardia()
{
    ocultarFormularios();

    let oMultasPorGuardia = oDGT.listadoMultasPorGuardia();

    document.getElementById('solucion').innerHTML = oMultasPorGuardia;

    document.getElementById('solucion').style.display = 'block';
}

function mostrarListadoConductores(){
    ocultarFormularios();

    let oConductores = oDGT.listadoConductores();

    document.getElementById('solucion').innerHTML = oConductores;

    document.getElementById('solucion').style.display = 'block';

}

function mostrarListadoGuardias(){
    ocultarFormularios();

    let oGuardias = oDGT.listadoGuardias();

    document.getElementById('solucion').innerHTML = oGuardias;

    document.getElementById('solucion').style.display = 'block';

}

function mostrarListadoFecha(){
    ocultarFormularios();
    document.getElementById('frmFecha').style.display = "block";
   
}

function aceptarMultasPorFecha(){
    let fecha1 = new Date(document.getElementById('txtDate').value).getTime();
    let fecha2 = new Date(document.getElementById('txtDate2').value).getTime();
    let sFechas = oDGT.mostrarListadoFecha(fecha1, fecha2);
    document.getElementById('solucion').innerHTML = sFechas;
    document.getElementById('solucion').style.display = 'block';
}

function mostrarimprimir(){
    ocultarFormularios();
    document.getElementById('frmImprimir').style.display = "block";
}

function btnAceptarImprimirPulsado(){
    let idMultaImprimir = document.getElementById('txtIDMultaImprimir').value;
    let resultado = oDGT.imprimirMulta(idMultaImprimir);
    let nuevaVentana = open();
    nuevaVentana.document.body.innerHTML = resultado;
    nuevaVentana.document.title = 'Multa';
}