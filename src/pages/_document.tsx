import { Html, Head, Main, NextScript } from 'next/document'

type documentProps = { title: string; description: string; ogImgPath: string; siteURL: string }

const HTMLHead: React.FC<documentProps> = ({
  title,
  description,
  ogImgPath,
  siteURL,
}): JSX.Element => {
  const ogImageURL = `${siteURL}${ogImgPath}`

  return (
    <>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='msapplication-TileColor' content='#e4d8b4' />
      <meta name='theme-color' content='#e4d8b4' />

      <meta name='author' content='Kalmarv' />
      <meta name='descriptionription' content={description} />
      <link rel='canonical' href={siteURL} />
      <meta name='twitter:card' content={ogImageURL} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:descriptionription' content={description} />
      <meta name='twitter:image:src' content={ogImageURL} />
      <meta property='og:url' content={siteURL} />
      <meta property='og:title' content={title} />
      <meta property='og:image' content={ogImageURL} />
      <meta property='og:descriptionription' content={description} />
      <meta property='og:site_name' content={title} />
      <meta itemProp='name' content={title} />
      <meta itemProp='descriptionription' content={description} />
      <meta itemProp='image' content={ogImageURL} />

      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
    </>
  )
}

export default function Document() {
  return (
    <Html>
      <Head>
        <HTMLHead
          title="Kalmarv's Portfolio"
          description="Kalmarv's Portfolio"
          ogImgPath='/PortfolioOG.png'
          siteURL='https://portfolio.kalmarv.xyz/'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
