    const malla = [
      // Año 1
      { semestre: 1, year: 1, ramos: [
        { nombre: "Química", creditos: 5 },
        { nombre: "Biología", creditos: 5 },
        { nombre: "Bases Teóricas de Enfermería I", creditos: 5 },
        { nombre: "Primeros Auxilios", creditos: 3 },
        { nombre: "Psicología Evolutiva", creditos: 5 },
        { nombre: "Inglés I", creditos: 5 }
      ]},
      { semestre: 2, year: 1, ramos: [
        { nombre: "Bioquímica", creditos: 5, requiere: ["Química"] },
        { nombre: "Morfofunción I", creditos: 8, requiere: ["Biología"] },
        { nombre: "Bases Teóricas de Enfermería II", creditos: 5, requiere: ["Bases Teóricas de Enfermería I"] },
        { nombre: "Comunicación y educación en salud", creditos: 3, requiere: ["Bases Teóricas de Enfermería I"] },
        { nombre: "Inglés II", creditos: 5, requiere: ["Inglés I"] },
        { nombre: "CFG", creditos: 5 }
      ]},
      // Año 2
      { semestre: 3, year: 2, ramos: [
        { nombre: "Microbiología Integrada", creditos: 6, requiere: ["Bioquímica"] },
        { nombre: "Morfofunción II", creditos: 8, requiere: ["Morfofunción I"] },
        { nombre: "Cuidados de Enfermería I", creditos: 9, requiere: ["Morfofunción I", "Bases Teóricas de Enfermería II", "Comunicación y educación en salud"] },
        { nombre: "Competencias genéricas para el desarrollo profesional", creditos: 3, requiereCreditos: 55 },
        { nombre: "Inglés III", creditos: 5, requiere: ["Inglés II"] }
      ]},
      { semestre: 4, year: 2, ramos: [
        { nombre: "Farmacología", creditos: 6, requiere: ["Microbiología Integrada"] },
        { nombre: "Fisiopatología", creditos: 6, requiere: ["Morfofunción II"] },
        { nombre: "Cuidados de Enfermería II", creditos: 11, requiere: ["Morfofunción II", "Cuidados de Enfermería I"] },
        { nombre: "Enfermería en Salud mental", creditos: 5, requiereCreditos: 70 },
        { nombre: "Bioestadística", creditos: 3, requiereCreditos: 70 }
      ]},
      // Año 3
      { semestre: 5, year: 3, ramos: [
        { nombre: "Gestión del cuidado de la persona adulta en el área hospitalaria", creditos: 12, requiere: ["Farmacología", "Fisiopatología", "Cuidados de Enfermería II"] },
        { nombre: "Enfermería en Psiquiatría", creditos: 6, requiere: ["Farmacología", "Fisiopatología", "Cuidados de Enfermería II"] },
        { nombre: "Bioética y Logística en Enfermería", creditos: 5, requiere: ["Cuidados de Enfermería II"] },
        { nombre: "Salud Pública", creditos: 3, requiere: ["Cuidados de Enfermería II", "Bioestadística"] },
        { nombre: "CFG", creditos: 5 }
      ]},
      { semestre: 6, year: 3, ramos: [
        { nombre: "Gestión del Cuidado en la Comunidad I", creditos: 12, requiere: ["Gestión del cuidado de la persona adulta en el área hospitalaria", "Salud Pública"] },
        { nombre: "Enfermería del Adulto Mayor y Psicogeriatría", creditos: 6, requiere: ["Gestión del cuidado de la persona adulta en el área hospitalaria", "Enfermería en Psiquiatría"] },
        { nombre: "Enfermería basada en Evidencia", creditos: 3, requiere: ["Bioética y Logística en Enfermería", "Salud Pública"] },
        { nombre: "Gestión y Liderazgo en Enfermería", creditos: 4, requiere: ["Gestión del cuidado de la persona adulta en el área hospitalaria"] },
        { nombre: "CFG", creditos: 5 }
      ]},
      // Año 4
      { semestre: 7, year: 4, ramos: [
        { nombre: "Gestión del Cuidado en la Comunidad II", creditos: 12, requiere: ["Gestión del Cuidado en la Comunidad I"] },
        { nombre: "Calidad, seguridad y gestión de proyectos en Enfermería", creditos: 6, requiere: ["Gestión y Liderazgo en Enfermería"] },
        { nombre: "Metodología de la Investigación I", creditos: 5, requiere: ["Enfermería basada en Evidencia"] },
        { nombre: "Optativo", creditos: 3, requiereCreditos: 150 },
        { nombre: "CFG", creditos: 5 }
      ]},
      { semestre: 8, year: 4, ramos: [
        { nombre: "Gestión del Cuidado Infanto-juvenil Intrahospitalario", creditos: 12, requiere: ["Gestión del Cuidado en la Comunidad II"] },
        { nombre: "Cuidado de enfermería a personas en Unidades Críticas y de Urgencias", creditos: 6, requiere: ["Gestión del Cuidado en la Comunidad II"] },
        { nombre: "Metodología de la Investigación II", creditos: 6, requiere: ["Metodología de la Investigación I"] },
        { nombre: "Enfermería y medicina integrativa", creditos: 3, requiereCreditos: 150 },
        { nombre: "Optativo", creditos: 3, requiereCreditos: 150 }
      ]},
      // Año 5
      { semestre: 9, year: 5, ramos: [
        { nombre: "Internado comunitario", creditos: 25, requiereCreditos: 243 },
        { nombre: "Internado en Unidades Clínicas y de urgencias", creditos: 10, requiereCreditos: 243 }
      ]},
      { semestre: 10, year: 5, ramos: [
        { nombre: "Internado Intrahospitalario", creditos: 25, requiereCreditos: 243 }
      ]}
    ];

     let creditosAcumulados = 0;
    const aprobados = new Set();
    const contenedor = document.getElementById("contenedor");

    malla.forEach(s => {
      const sec = document.createElement("section");
      sec.className = `semestre year-${s.year}`;
      const h2 = document.createElement("h2");
      h2.textContent = `Semestre ${s.semestre}`;
      h2.onclick = () => {
        sec.classList.toggle("expanded");
        sec.classList.toggle("collapsed");
      };

      const ul = document.createElement("ul");
      ul.className = "ramos";
      let creditosSemestre = 0;

 s.ramos.forEach(ramo => {
  const li = document.createElement("li");
  const requisitos = ramo.requiere || [];
  const cumpleReq = requisitos.every(req => aprobados.has(req));
  const cumpleCred = ramo.requiereCreditos ? creditosAcumulados >= ramo.requiereCreditos : true;
  const habilitado = cumpleReq && cumpleCred;
  const aprobado = aprobados.has(ramo.nombre);

  li.className = habilitado ? "" : "inhabilitado";
  if (aprobado) li.classList.add("aprobado");

  li.innerHTML = `
    <div>
      <strong>${ramo.nombre}</strong> <span class="creditos">(${ramo.creditos} créditos)</span>
      ${requisitos.length || ramo.requiereCreditos ? `<br><small>Prerrequisitos: ${requisitos.join(", ")}${ramo.requiereCreditos ? ", " + ramo.requiereCreditos + " créditos aprobados" : ""}</small>` : ""}
    </div>
  `;

  if (habilitado) {
    const btn = document.createElement("button");
    btn.textContent = aprobado ? "✓ Aprobado" : "Marcar como aprobado";
    btn.style.marginLeft = "1rem";
    btn.style.padding = "0.25rem 0.5rem";
    btn.style.cursor = "pointer";
    btn.onclick = () => {
      if (!aprobados.has(ramo.nombre)) {
        aprobados.add(ramo.nombre);
        localStorage.setItem("ramosAprobados", JSON.stringify([...aprobados]));
        location.reload();
      }
    };
    li.appendChild(btn);
  }

  if (habilitado && aprobado) {
    creditosSemestre += ramo.creditos;
  }

  ul.appendChild(li);
});
      });

      creditosAcumulados += creditosSemestre;

      const pCreditos = document.createElement("p");
      pCreditos.className = "acumulados";
      pCreditos.textContent = `Créditos acumulados hasta este semestre: ${creditosAcumulados}`;

      sec.appendChild(h2);
      sec.appendChild(pCreditos);
      sec.appendChild(ul);
      contenedor.appendChild(sec);
    });
