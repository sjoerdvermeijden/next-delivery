import Link from 'next/link'

type Props = {}

function Header({ }: Props) {
    return (
        <div className='p-4 bg-red-500'>
            <Link href="/">
                <h1 className='font-bold text-3xl'>BezorgApp</h1>
            </Link>
        </div>
    )
}

export default Header