import { useState, useRef } from'react'
import dataSepatu from '../dummy/dataSepatu'

const Script = () => {
    // useRef Go To Top
    const linkRef = useRef(null)

    const gotoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // Change Color & Text
    const [text, setText]   = useState("");
    const [color, setColor] = useState("");

    const changeColor = () => {
        setText("Text blue color!");
        setColor("text-primary");
    }

    // Load More
    const data      = dataSepatu.sepatu;
    const limitItem = 3;
    const [listItem, setListItem] = useState(limitItem);
    const slice     = data.slice(0, listItem)
    const maxItem   = data.length == slice.length;

    const handleLoadMore = () => {
        setListItem(listItem + limitItem)
    }

    // Mengembalikkan hasil dari function yang sudah di deklarasi
    return {
        linkRef, gotoTop, //useRef Go To Bottom
        text, color, changeColor, // Chande Color & Text
        slice, maxItem, handleLoadMore // Load More
    }
}

export default Script;