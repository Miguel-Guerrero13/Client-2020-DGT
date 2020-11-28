var oDGT = new DGT();

ocultarFormularios();

function ocultarFormularios(){
frmAltaConductor.style.display = "none";
frmAltaGuardia.style.display = "none";
frmRegistrarMulta.style.display="none";
}

function mostrarAltaConductor(){
ocultarFormularios();
frmAltaConductor.style.display = "block";
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
    let iPuntosMulta = parseInt(frmRegistrarMulta.puntos.value.trim());
    if(bTipoMulta == "Leve")
    {
        let oM = new Leve(iMulta,sNifConductor, sNifGuardia, fImporteMulta,bPagada ,sDescripcionMulta,dFechaMulta,bBonificada);
        oDGT.altaMultaLeve(oM);
    }
    else
    {
        let oM = new Grave(iMulta,sNifConductor, sNifGuardia, fImporteMulta,bPagada ,sDescripcionMulta,dFechaMulta,iPuntosMulta);
        oDGT.altaMultaGrave(oM);
    }

    

    // Inserto en el almacen
  

    ocultarFormularios();
}


