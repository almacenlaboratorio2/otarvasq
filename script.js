document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    const codigo = document.getElementById('codigo').value;
    const producto = document.getElementById('producto').value;
    const lote = document.getElementById('lote').value;
    const analisis = document.getElementById('analisis').value;
    const cantidad = document.getElementById('cantidad').value;
    const medida = document.getElementById('medida').value;
    const fecha = document.getElementById('fecha').value;
    const proveedor = document.getElementById('proveedor').value;

    // Crear una nueva fila en la tabla
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insertar celdas en la nueva fila
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);

    // Asignar los valores a las celdas
    cell1.textContent = codigo;
    cell2.textContent = producto;
    cell3.textContent = lote;
    cell4.textContent = analisis;
    cell5.textContent = cantidad;
    cell6.textContent = medida;
    cell7.textContent = fecha;
    cell8.textContent = proveedor;

    // Limpiar el formulario
    document.getElementById('dataForm').reset();
});