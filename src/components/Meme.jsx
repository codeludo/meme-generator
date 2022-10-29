import "../style/components/meme.css"
import React from "react"

const Meme = () => {
	return (
		<main>
			<form action="" className="meme-form">
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
				<button className="btn-image">Get a new meme image 🖼</button>
                <figure>
                    <img className="image" src="https://i.imgflip.com/46y0ne.png" alt="meme" />
                </figure>
			</form>
		</main>
	)
}

export default Meme
