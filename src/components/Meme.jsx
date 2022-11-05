import "../style/components/meme.css"
import React, {useState} from "react"
import data from "../utils/data"

const Meme = () => {
	const [meme, setMeme] = useState({topText: "",
									bottomText: "",
									randomImage: "https://i.imgflip.com/46y0ne.png"})

	const [allMemes, setAllMemes] = useState(data)
    
    function getMemesImage() {
        const memesArray = allMemes.data.memes
        const randNum = Math.floor(Math.random()*memesArray.length-1)
        const imageUrl = memesArray[randNum].url
        console.log("image: " + imageUrl)
		setMeme(prevMeme =>
			{
				return {...prevMeme,
				randomImage: imageUrl}
			})
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
				<button onClick={getMemesImage} className="btn-image">Get a new meme image 🖼</button>
                <figure>
                    <img className="image" src={meme.randomImage} alt="meme" />
                </figure>
			</div>
		</main>
	)
}

export default Meme
