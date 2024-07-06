import './GameList.css'


function GameList(props) {
	const listToHTML = props.list.map(item =>
		<li className='ball__item' key={item.id}>
			<p className="ball__item-text">{item.time}</p>
			<button 
			className='ball__item-delete-button'
			onClick={() => {
				props.delete(item.id)
			}}
			>X</button>
		</li>
	)
	return (
		<ul className='ball__list'>{listToHTML}</ul>
	)
}

export default GameList
