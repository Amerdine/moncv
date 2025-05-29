// On sélectionne tous les éléments avec la classe 'item-f'
  const items = document.querySelectorAll('.item-f');

  // Pour chaque élément (item)
  items.forEach((item, index) => {
    
    // Quand la souris entre sur un item
    item.addEventListener('mouseenter', () => {
      
      // Pour chaque élément encore, on vérifie sa position par rapport à celui survolé
      items.forEach((el, i) => {
        if (i !== index) { // On évite de modifier l'élément lui-même

          // Si l'élément est avant dans la liste, on le fait monter
          if (i < index) {
            el.style.transform = 'translateY(-20px)';
          } 
          // Si l'élément est après dans la liste, on le fait descendre
          else {
            el.style.transform = 'translateY(20px)';
          }

          // On applique un fond semi-transparent
          el.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }
      });
    });

    // Quand la souris quitte l'élément, on remet tout à zéro
    item.addEventListener('mouseleave', () => {
      items.forEach(el => {
        el.style.transform = 'translateY(0)'; // Revenir à la position d'origine
        el.style.backgroundColor = '';        // Retirer la couleur temporaire
      });
    });
  });


/* popup */
const popup = document.getElementById("popupContact");
    const overlay = document.getElementById("overlay");

    function togglePopup(event) {
      popup.style.display = "block";
      overlay.style.display = "block";
      event.stopPropagation();
    }

    function hidePopup() {
      popup.style.display = "none";
      overlay.style.display = "none";
    }

    window.addEventListener("click", function () {
      hidePopup();
    });

    popup.addEventListener("click", function (event) {
      event.stopPropagation();
    });