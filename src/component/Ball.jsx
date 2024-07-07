import { useEffect, useState } from 'react'
import './Ball.css'
import plusIcon from '../assets/plus-icon.svg'
import copyIcon from '../assets/copy-icon.svg'
import resetIcon from '../assets/reset-icon.svg'

import GameList from './GameList'

import { generateId } from '../helper'
import { getCurrentTime } from '../helper'

const PRICE = 500


function Ball() {
	// Локальный список игр
	const localGames = JSON.parse(localStorage.getItem('localGames'))
	const [games, setGame] = useState(localGames ? localGames : [])
	const count = games.length

	// Запись в локальный список игр
	useEffect(() => {
		localStorage.setItem('localGames', JSON.stringify(games))
	}, [games])

	const addGame = list => {
		setGame([
			...list,
			{ id: generateId(), time: getCurrentTime() }
		])
	}
	const deleteGame = id => {
		setGame(games.filter(e => e.id !== id))
	}


	return (
		<>
			<section className="section-ball">
				<div className="ball__inner">
					<header className="ball__header">
						<h2 className="ball__titel">Шарики</h2>
						<button
							className="ball__add-button"
							onClick={() => {
								addGame(games)
							}}
						>
							<img src={plusIcon} alt="logo" />
						</button>
					</header>
					<div className="ball__sum">
						<h3 className="ball__sum-text">
							{`${count} шт - ${count * PRICE}р`}
						</h3>
						<nav className='ball__nav'>
							<button
								className='ball__button-copy'
								onClick={() => {
									setGame([])
								}}
							>
								<img src={copyIcon} alt="logo"
									width={22} height={22} />
							</button>
							<button
								className='ball__button-reset'
								onClick={() => {
									setGame([])
								}}
							>
								<img src={resetIcon} alt="logo"
									width={22} height={22} />
							</button>
						</nav>
					</div>
					<GameList
						list={games}
						delete={deleteGame}
					/>
				</div>
			</section>
		</>
	)
}

export default Ball
