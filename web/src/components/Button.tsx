import React from "react";

interface Ibutton {
   nome: string;
}
const Button = (rest: Ibutton) => {
   return <div>{rest.nome}</div>;
};

export default Button;
