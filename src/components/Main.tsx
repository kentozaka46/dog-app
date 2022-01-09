import Gallery from './Gallery'
import { useEffect, useState } from 'react'
import { fetchImages } from '../usecase/api'
import Form from '../atoms/Form'

function Main() {
  const [urls, setUrls] = useState<string[] | null>(null)

  function reloadImages(breed: string) {
    fetchImages(breed).then((dogUrls) => {
      setUrls(dogUrls)
    })
  }

  useEffect(() => {
    fetchImages('shiba').then((dogUrls: string[]) => {
      setUrls(dogUrls)
    })
  }, [])

  return (
    <main>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  )
}

export default Main
