// Función para añadir un comentario al contenedor de comentarios
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentContainer = document.getElementById('commentContainer');
    
    if (commentInput.value.trim() !== "") {
        // Crear un nuevo párrafo para el comentario
        const newComment = document.createElement('p');
        newComment.textContent = commentInput.value;
        
        // Añadir el nuevo comentario al contenedor de comentarios
        commentContainer.appendChild(newComment);
        
        // Limpiar el área de texto después de añadir el comentario
        commentInput.value = "";
    }
}
