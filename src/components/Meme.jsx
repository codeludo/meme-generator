import "../style/components/meme.css"
import React, { useEffect, useState } from "react"

const Meme = () => {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "https://i.imgflip.com/46y0ne.png",
	})

	const [allMemes, setAllMemes] = useState([])

	useEffect(
		() => {
			fetch('https://api.imgflip.com/get_memes')
				.then(res => res.json())
				.then(data => setAllMemes(data.data.memes))
		},
		[]
	)
	/**
	 * useEffect with async
	 * 
	 * React.useEffect(() => {
	 * async function getMemes() {
	 * const res = await fetch("https://api.imgflip.com/get_memes")
	 * const data = await res.json()
	 * setAllMemes(data.data.memes)
	 * }
	 * getMemes()
	 * }, [])
	 */

	function getMemesImage() {
		const randNum = Math.floor(Math.random() * allMemes.length - 1)
		const imageUrl = allMemes[randNum].url
		console.log("image: " + imageUrl)
		setMeme((prevMeme) => {
			return { ...prevMeme, randomImage: imageUrl }
		})
	}

	function handleChange(event) {
		const { name, value } = event.target
		setMeme((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	return (
		<main>
			<div action="" className="meme-form">
				<div className="input-text">
					<input
						name="topText"
						value={meme.topText}
						onChange={handleChange}
						type="text"
						className="top-text"
						placeholder="top text"
					/>
					<input
						name="bottomText"
						value={meme.bottomText}
						onChange={handleChange}
						type="text"
						className="bottom-text"
						placeholder="bottom text"
					/>
				</div>
				<button onClick={getMemesImage} className="btn-image">
					Get a new meme image 🖼
				</button>
				<figure>
					<img className="image" src={meme.randomImage} alt="meme" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</figure>
			</div>
		</main>
	)
}

export default Meme

