window.addEventListener("load", function () {
    const fichero = document.getElementById("fichero");
    const boton = document.getElementById("boton");
    const guardar = this.document.getElementById("guardar");
    boton.onclick = function () {



        if (fichero.files.length > 0) {
            for (let l = 0; l < fichero.files.length; l++) {
                var lector = new FileReader();
                lector.onload = function (ev) {
                    var datos = ev.target.result;
                    var filas = datos.split("\n");
                    const tabla = document.createElement("table");
                    const tHead = document.createElement("thead");
                    const tbody = document.createElement("tbody");
                    //Creo la cabecera
                    const tr = document.createElement("tr");
                    const celdas = filas[0].split(";");
                    for (let i = 0; i < celdas.length; i++) {
                        const th = document.createElement("th");
                        th.innerHTML = celdas[i];
                        tr.appendChild(th);
                    }

                    tHead.appendChild(tr);
                    //codigo para crear los datos

                    for (let j = 1; j < filas.length; j++) {
                        var trb = document.createElement("tr");
                        var celdasB = filas[j].split(";");
                        for (let k = 0; k < celdasB.length; k++) {
                            const td = document.createElement("td");
                            td.innerHTML = celdasB[k];
                            trb.appendChild(td);
                        }
                        tbody.appendChild(trb);
                    }


                    tabla.appendChild(tHead);
                    tabla.appendChild(tbody);
                    document.body.appendChild(tabla);

                }
                lector.readAsText(fichero.files[l]);
            }

        }

    }
    guardar.onclick = function () {
        var tablas = document.getElementsByTagName("table");
        for (s = 0; s < tablas.length; s++) {
            var tabla = tablas[s];
            var vectorFila = [];
            var filas = tabla.rows;
            for (i = 0; i < filas.length; i++) {
                let columnas = [];
                for (let j = 0; filas[i].cells.length; j++) {
                    columnas.push(filas[i].cells[j].innerHTML);

                }
                vectorFila.push(columnas.join(","));
            }
            var text = vectorFila.join("\n");
            var fichero = new Blob([text], { type: "text/plain" });
            var enlance = URL.createObjectURL(fichero);
            var a = document.createElement("a");
            a.href = enlance;
            a.download = "misdtos" + s + ".csv";
            a.click();
        }

    }

})