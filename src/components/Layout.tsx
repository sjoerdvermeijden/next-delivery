import Header from './header'
import Footer from './footer'
import Main from './main'

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