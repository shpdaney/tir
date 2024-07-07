import './GameList.css'
import crossIcon from '../assets/cross.svg'


function GameList(props) {
	const listToHTML = props.list.map(item =>
		<li className='ball__item' key={item.id}>
			<p className="ball__item-text">{item.time}</p>
			<span />
			<button
				className='ball__item-delete-button'
				onClick={() => {
					props.delete(item.id)
				}}
			>
				<img
					src={crossIcon}
					alt="cross"
					width={12} height={12}
				/>
			</button>
		</li>
	)
	return (
		<ul className='ball__list'>{listToHTML}</ul>
	)
}

export default GameList
