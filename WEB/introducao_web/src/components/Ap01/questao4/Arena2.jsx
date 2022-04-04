import React from "react";

import Hero from "../questao1/Hero";
import Enemy from "../questao1/Enemy";

const Arena2 = (props) => {
    return(
        <div>
            {React.Children.map(props.children,arena => {
                return React.cloneElement(arena,{...props});
            })}
        </div>
    )
}

export default Arena2