import Head from 'next/head'


export default ({ url: { query: { name }}}) => {
    return (
        <div>
            <Head>
                <title>Eli Marshall</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {name}
        </div>
    )
}