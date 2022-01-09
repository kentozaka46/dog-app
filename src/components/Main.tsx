import Gallery from './Gallery'
import { useEffect, useState } from 'react'
import { fetchImages } from '../usecase/api'

function Main() {
  const [urls, setUrls] = useState<string[] | null>(null)

  useEffect(() => {
    fetchImages('shiba').then((dogUrls: string[]) => {
      setUrls(dogUrls)
    })
  }, [])

  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  )
}

export default Main
