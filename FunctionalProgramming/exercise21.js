/**
 * Rellene la urlSlugfunción para que convierta una cadena titley devuelva la versión con guión de la URL. 
 * Puede usar cualquiera de los métodos que se tratan en esta sección y no use replace. 
 * Aquí están los requisitos:

La entrada es una cadena con espacios y palabras en mayúsculas y minúsculas

El resultado es una cadena con los espacios entre palabras reemplazados por un guión ( -)

La salida debe ser todas las letras minúsculas

La salida no debe tener espacios.
 */

function urlSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-");
    
    }
    urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");