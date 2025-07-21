const malla = [
  {
    semestre: 1,
    year: 1,
    ramos: [
      { nombre: "Química", creditos: 5 },
      { nombre: "Biología", creditos: 5 },
      { nombre: "Bases Teoricas de Enfermeria I", creditos: 5 },
      { nombre: "Primeros Auxilios", creditos: 3 },
      { nombre: "Psicología Evolutiva", creditos: 5 },
      { nombre: "Inglés I", creditos: 5 }
    ]
  },
  {
    semestre: 2,
    year: 1,
    ramos: [
      { nombre: "Bioquímica", creditos: 5, requiere: ["Química"] },
      { nombre: "Morfofuncion I", creditos: 8, requiere: ["Biología"] },
      { nombre: "Bases Teoricas de Enfermeria II", creditos: 5, requiere: ["Bases Teoricas de Enfermeria I"] },
      { nombre: "Comunicación y educación en salud", creditos: 3, requiere: ["Bases Teoricas de Enfermeria I"] },
      { nombre: "Inglés II", creditos: 5, requiere: ["Inglés I"] },
      { nombre: "CFG", creditos: 5 }
    ]
  },
  {
    semestre: 3,
    year: 2,
    ramos: [
      { nombre: "Microbiología Integrada", creditos: 6, requiere: ["Bioquímica"] },
      { nombre: "Morfofuncion II", creditos: 8, requiere: ["Morfofuncion I"] },
      {
        nombre: "Cuidados de Enfermeria I",
        creditos: 9,
        requiere: ["Morfofuncion I", "Bases Teoricas de Enfermeria II", "Comunicación y educación en salud"]
      },
      { nombre: "Competencias genéricas para el desarrollo profesional", creditos: 3, requiereCreditos: 55 },
      { nombre: "Inglés III", creditos: 5, requiere: ["Inglés II"] }
    ]
  },
  {
    semestre: 4,
    year: 2,
    ramos: [
      { nombre: "Farmacología", creditos: 6, requiere: ["Microbiología Integrada"] },
      { nombre: "Fisiopatología", creditos: 6, requiere: ["Morfofuncion II"] },
      {
        nombre: "Cuidados de enfermería II",
        creditos: 11,
        requiere: ["Morfofuncion II", "Cuidados de Enfermeria I"]
      },
      { nombre: "Enfermería en Salud mental", creditos: 5, requiereCreditos: 70 },
      { nombre: "Bioestadística", creditos: 3, requiereCreditos: 70 }
    ]
  },
  {
    semestre: 5,
    year: 3,
    ramos: [
      {
        nombre: "Gestión del cuidado de la persona adulta en el área hospitalaria",
        creditos: 12,
        requiere: ["Farmacología", "Fisiopatología", "Cuidados de enfermería II"]
      },
      {
        nombre: "Enfermería en Psiquiatría",
        creditos: 6,
        requiere: ["Farmacología", "Fisiopatología", "Cuidados de enfermería II"]
      },
      {
        nombre: "Bioética y Logística en Enfermeria",
        creditos: 5,
        requiere: ["Cuidados de enfermería II"]
      },
      {
        nombre: "Salud Pública",
        creditos: 3,
        requiere: ["Cuidados de enfermería II", "Bioestadística"]
      },
      { nombre: "CFG", creditos: 5 }
    ]
  },
  {
    semestre: 6,
    year: 3,
    ramos: [
      {
        nombre: "Gestión del Cuidado en la Comunidad I",
        creditos: 12,
        requiere: [
          "Gestión del cuidado de la persona adulta en el área hospitalaria",
          "Salud Pública"
        ]
      },
      {
        nombre: "Enfermería del Adulto Mayor y Psicogeriatría",
        creditos: 6,
        requiere: [
          "Gestión del cuidado de la persona adulta en el área hospitalaria",
          "Enfermería en Psiquiatría"
        ]
      },
      {
        nombre: "Enfermería basada en Evidencia",
        creditos: 3,
        requiere: ["Bioética y Logística en Enfermeria", "Salud Pública"]
      },
      {
        nombre: "Gestión y Liderazgo en Enfermeria",
        creditos: 4,
        requiere: ["Gestión del cuidado de la persona adulta en el área hospitalaria"]
      },
      { nombre: "CFG", creditos: 5 }
    ]
  },
  {
    semestre: 7,
    year: 4,
    ramos: [
      {
        nombre: "Gestión del Cuidado en la Comunidad II",
        creditos: 12,
        requiere: ["Gestión del Cuidado en la Comunidad I"]
      },
      {
        nombre: "Calidad, seguridad y gestión de proyectos en Enfermeria",
        creditos: 6,
        requiere: ["Gestión y Liderazgo en Enfermeria"]
      },
      {
        nombre: "Metodología de la Investigación I",
        creditos: 5,
        requiere: ["Enfermería basada en Evidencia"]
      },
      {
        nombre: "Optativo",
        creditos: 3,
        requiereCreditos: 150
      },
      { nombre: "CFG", creditos: 5 }
    ]
  },
  {
    semestre: 8,
    year: 4,
    ramos: [
      {
        nombre: "Gestión del Cuidado Infanto-juvenil Intrahospitalario",
        creditos: 12,
        requiere: ["Gestión del Cuidado en la Comunidad II"]
      },
      {
        nombre: "Cuidado de enfermería a personas en Unidades Críticas y de Urgencias",
        creditos: 6,
        requiere: ["Gestión del Cuidado en la Comunidad II"]
      },
      {
        nombre: "Metodología de la Investigación II",
        creditos: 6,
        requiere: ["Metodología de la Investigación I"]
      },
      {
        nombre: "Enfermería y medicina integrativa",
        creditos: 3,
        requiereCreditos: 150
      },
      {
        nombre: "Optativo",
        creditos: 3,
        requiereCreditos: 150
      }
    ]
  },
  {
    semestre: 9,
    year: 5,
    ramos: [
      {
        nombre: "Internado comunitario",
        creditos: 25,
        requiereCreditos: 243
      },
      {
        nombre: "Internado en Unidades Clínicas y de urgencias",
        creditos: 10,
        requiereCreditos: 243
      }
    ]
  },
  {
    semestre: 10,
    year: 5,
    ramos: [
      {
        nombre: "Internado Intrahospitalario",
        creditos: 25,
        requiereCreditos: 243
      }
    ]
  }
];
// --- UTILIDADES -------------------------------------------------
const aprobados = new Set(JSON.parse(localStorage.getItem("aprobados") || "[]"));
function totalCreditos() {
  return ramos.reduce((acc, r) => (aprobados.has(r.nombre) ? acc + r.creditos : acc), 0);
}
function cumpleRequisitos(r) {
  const byRamos = (r.requiere || []).every((req) => aprobados.has(req));
  const byCreds = r.requiereCreditos ? totalCreditos() >= r.requiereCreditos : true;
  return byRamos && byCreds;
}

// --- CONSTRUCCIÓN DINÁMICA DE LA GRILLA -------------------------
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";                       // limpia contenedor
  
  // Agrupa por semestre
  for (let s = 1; s <= 10; s++) {
    const lista = ramos.filter((r) => r.semestre === s);
    if (!lista.length) continue;
    
    const { year } = lista[0];               // todos comparten año
    const box = document.createElement("div");
    box.className = `semestre year-${year}`;
    box.innerHTML = `<h2>Semestre ${s}</h2>`;
    
    lista.forEach((r) => {
      const div = document.createElement("div");
      div.className = "ramo";
      if (aprobados.has(r.nombre)) div.classList.add("aprobado");
      
      const btn = document.createElement("button");
      btn.textContent = aprobados.has(r.nombre) ? "✓" : "Aprobar";
      btn.onclick = () => {
        if (!cumpleRequisitos(r)) return;     // aún no habilitado
        aprobados.has(r.nombre) ? aprobados.delete(r.nombre) : aprobados.add(r.nombre);
        localStorage.setItem("aprobados", JSON.stringify([...aprobados]));
        location.reload();
      };
      
      // Deshabilita si no cumple requisitos
      if (!cumpleRequisitos(r)) {
        btn.disabled = true;
        div.style.opacity = 0.5;
      }
      
      div.append(r.nombre + " ", btn);
      box.appendChild(div);
    });
    grid.appendChild(box);
  }
});
