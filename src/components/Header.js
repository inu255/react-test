import Button from './Button.js'

const Header = (props) => {
    const onClick = () => {
        console.log('click');
    }
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

export default Header
