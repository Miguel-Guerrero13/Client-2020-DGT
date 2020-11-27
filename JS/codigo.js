var oDGT = new DGT();

ocultarFormularios();

function ocultarFormularios(){
frmAltaConductor.style.display = "none";
frmAltaGuardia.style.display = "none";
}

function mostrarAltaConductor(){
ocultarFormularios();
frmAltaConductor.style.display = "block";
}

function mostrarAltaGuardia(){
ocultarFormularios();
frmAltaGuardia.style.display = "block";
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


