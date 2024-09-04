import Header from './Header'
import Footer from './Footer'
import Main from './Main'

type Props = {
    children: React.ReactNode
}

function Layout({ children }: Props) {
    return (
        <div>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    )
}

export default Layout