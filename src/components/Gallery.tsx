import Image from '../atoms/Image'
import Loading from '../atoms/Loading'

function Gallery(props: { urls: string[] | null }) {
  const { urls } = props
  if (urls === null) {
    return <Loading />
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image url={url} />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
