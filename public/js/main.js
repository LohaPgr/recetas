let $fragment = document.createDocumentFragment(),
        $listaRecetas = document.querySelector(".list-recipes"),
        $template = document.querySelector(".template").content;
      async function getRecipes() {
        try {
          let res = await fetch("https://easy-recipes.up.railway.app/recetas");

          if (!res.ok) throw { status: res.status, statusText: res.statusText };

          let json = await res.json();
          json.forEach((receta) => {
            $template.querySelector(
              ".card-image img"
            ).src = `${receta.imagen_url}`;
            $template.querySelector(".card-image img").alt = `${receta.nombre}`;
            $template.querySelector(".name").textContent = `${receta.nombre}`;
            $template.querySelector(
              ".description"
            ).textContent = `${receta.descripcion}`;
            $template.querySelector(".card-info a").dataset.id = `${receta.id}`;

            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
          });
          $listaRecetas.appendChild($fragment);
        } catch (err) {
          let message = err.statusText || "Ocurrió un error";
          $listaRecetas.insertAdjacentHTML(
            "afterend",
            `<p><b> Error: ${err.status}: ${message} </b></p>`
          );
        }
      }
      document.addEventListener("DOMContentLoaded", getRecipes);

      document.addEventListener("click", async (e) => {
        if (e.target.matches(".btn-show-recipe")) {
          e.preventDefault(); // Prevenir la acción por defecto del enlace

          const id = e.target.dataset.id; // Obtener el ID de la receta desde el botón
          try {
            const res = await fetch(`https://easy-recipes.up.railway.app/recetas/${id}`);
            if (!res.ok)
              throw { status: res.status, statusText: res.statusText };

            const recipe = await res.json(); // La respuesta contiene la receta
            console.log(recipe); // Aquí puedes manipular los datos como desees
            // Mostrar los datos de la receta en un modal o en otra sección
            mostrarReceta(recipe);
          } catch (err) {
            const message =
              err.statusText || "Ocurrió un error al cargar la receta";
            console.error(`Error ${err.status}: ${message}`);
          }
        }
      });

      // Función para mostrar los datos de la receta (puedes personalizarla)
      // Función para mostrar los datos de la receta (puedes personalizarla)
      function mostrarReceta(receta) {
        const modal = document.createElement("div");
        modal.classList.add("modal");

        // Generar la lista de ingredientes
        const listaIngredientes = receta.ingredientes
          .map((ingrediente) => `<li>${ingrediente}</li>`)
          .join(""); // Unir todos los elementos en una sola cadena
        const instrucciones = receta.instrucciones
          .map((instruccion) => `<li>${instruccion}</li>`)
          .join("");
        // Crear el contenido del modal
        modal.innerHTML = `
    <div class="modal-content">
      <h2>${receta.nombre}</h2>
      <img src="${receta.imagen_url}" alt="${receta.nombre}">
      <p>${receta.descripcion}</p>
      <h3>Ingredientes:</h3>
      <ul>
        ${listaIngredientes}
      </ul>
      <h3>Instrucciones:</h3>
      <ol>
        ${instrucciones}
      </ol>
      <button class="close-modal">Cerrar</button>
    </div>
  `;

        document.body.appendChild(modal);
        document.body.classList.add("no-scroll"); // Bloquear el scroll de la página principal

        // Cerrar el modal
        modal.querySelector(".close-modal").addEventListener("click", () => {
          modal.remove();
          document.body.classList.remove("no-scroll"); // Restaurar el scroll de la página principal
        });
      }