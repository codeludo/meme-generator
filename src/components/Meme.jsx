import "../style/components/meme.css"
import React, {useState} from "react"
import data from "../utils/data"

const Meme = () => {
	const [memeImage, setMemeImage] = useState("https://i.imgflip.com/46y0ne.png")
    
    function memesImage() {
        const memesArray = data.data.memes
        const randNum = Math.floor(Math.random()*memesArray.length-1)
        const imageUrl = memesArray[randNum].url
        console.log("image: " + imageUrl)
		setMemeImage(imageUrl)
    }


	return (
		<main>
			<div action="" className="meme-form">
				<div className="input-text">
					<input
						type="text"
						className="top-text"
						placeholder="top text"
					/>
					<input
						type="text"
						className="bottom-text"
						placeholder="bottom text"
					/>
				</div>
				<button onClick={memesImage} className="btn-image">Get a new meme image 🖼</button>
                <figure>
                    <img className="image" src={memeImage} alt="meme" />
                </figure>
			</div>
		</main>
	)
}

export default Meme
