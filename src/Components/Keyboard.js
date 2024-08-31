import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Button from "./Button";
import { text } from "d3";


function Keyboard ({onButtonClick}){
    return(
        <>
       <Button text="Q" onClick={() =>onButtonClick("q")}/>
       <Button text="W" onClick={() =>onButtonClick("w")}/>
       <Button text="E" onClick={() =>onButtonClick("e")}/>
       <Button text="R" onClick={() =>onButtonClick("r")}/>
       <Button text="T" onClick={() =>onButtonClick("t")}/>
       <Button text="Y" onClick={() =>onButtonClick("y")}/>
       <Button text="U" onClick={() =>onButtonClick("u")}/>
       <Button text="I" onClick={() =>onButtonClick("i")}/>
       <Button text="O" onClick={() =>onButtonClick("o")}/>
       <Button text="P" onClick={() =>onButtonClick("p")}/> <br />
       <Button text="A" onClick={() =>onButtonClick("a")}/>
       <Button text="S" onClick={() =>onButtonClick("s")}/>
       <Button text="D" onClick={() =>onButtonClick("d")}/>
       <Button text="F" onClick={() =>onButtonClick("f")}/>
       <Button text="G" onClick={() =>onButtonClick("g")}/>
       <Button text="H" onClick={() =>onButtonClick("h")}/>
       <Button text="J" onClick={() =>onButtonClick("j")}/>
       <Button text="K" onClick={() =>onButtonClick("k")}/>
       <Button text="L" onClick={() =>onButtonClick("l")}/>
       <Button text="Ñ" onClick={() =>onButtonClick("ñ")}/> <br />
       <Button text="Z" onClick={() =>onButtonClick("z")}/>
       <Button text="X" onClick={() =>onButtonClick("x")}/>
       <Button text="C" onClick={() =>onButtonClick("c")}/>
       <Button text="V" onClick={() =>onButtonClick("v")}/>
       <Button text="B" onClick={() =>onButtonClick("b")}/>
       <Button text="N" onClick={() =>onButtonClick("n")}/>
       <Button text="M" onClick={() =>onButtonClick("m")}/>
       <Button text="Space"  onClick={() =>onButtonClick(" ")}/>
       <Button text="Delete"  onClick={() =>onButtonClick("Delete")}/>
    


        </>
    )
}

export default Keyboard;