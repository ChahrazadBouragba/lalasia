import logo from '../img/logo.svg'
import menu from '../img/menu.png'



export default function Hero() {
    return (
        <section className='hero--section'>
            <header>
                <img className='logo' src={logo}></img>
                <h3 className='logo--title'>lalasia</h3>
                <img src={menu}></img>
            </header>

            <main className='hero--intro'>
                <h1 className='hero--title'>Discover Furniture With High Quality</h1>
                <p className='hero-description'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet.</p>
            </main>
        </section>
    )
}