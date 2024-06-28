import { useState } from 'react'
import './Ball.css'
import plusIcon from '../assets/plus-icon.svg'

import GameList from './GameList'

import { generateId } from '../helper'
import { getCurrentTime } from '../helper'


function Ball() {
	const [gamesList, setCount] = useState([])
	const count = gamesList.length

	return (
		<>
			<section className="section-ball">
				<div className="ball__inner">
					<header className="ball__header">
						<h2 className="ball__titel">Шарики</h2>
						<button
							className="ball__add-button"
							onClick={() => {
								setCount([
									...gamesList,
									{ id: generateId(), time: getCurrentTime() }
								])
							}}
						>
							<img src={plusIcon} alt="logo" />
						</button>
					</header>
					<div className="ball__sum">
						<h3 className="ball__sum-text">
							{`${count}шт - ${count * 500}р`}
						</h3>
						<button
							className='ball__button-open'
							onClick={() => setCount([])}
						>R</button>
					</div>
					<GameList list={gamesList} />
				</div>
			</section>
		</>
	)
}

export default Ball
