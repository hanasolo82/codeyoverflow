import React from 'react';


/*Funcionará con la commentpropiedad de nuestro objeto pasado comments extraído de commentData.js .
 debería recibir props. 
 Este props objeto contiene todos los datos de nuestro comentario, como el nombre de usuario, la imagen de perfil y el comentario
 funciona Body específicamente solo con la commentpropiedad.

 el componente devuelva un <p>elemento que contenga la comment propiedad de props.*/
 function Body({props}) {

    return <p>{props.comment}</p>
 };

 export default Body;