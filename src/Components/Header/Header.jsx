/*Import del css*/
import "./Header.css"

function Header(){
    
//Dentro de la funcion de cada componente hasta el return () va codigo JavaScript//

    function llamoFuncion(){
        console.log("Hiciste click")
    }
    
    return (
        //Dentro del return va codigo jsx --> HTML y JS//
        /*Eventos en react*/
        <button onClick={llamoFuncion}>Hace click</button>

    )
}
export {Header}
    