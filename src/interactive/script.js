import {useState} from'react'

const Script = () => {
    const [text, setText] = useState("");
    const [color, setColor] = useState("");

    // const changeText = () => {
    //     setText("Text Changed!");
    // }

    const changeColor = () => {
        setText("Text blue color!");
        setColor("text-primary");
    }

    // Mengembalikkan hasil dari function yang sudah di deklarasi
    return {
        text,
        color, 
        changeColor
    }
}

export default Script;