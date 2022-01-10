/**
 * 犬の写真1枚のパーツ
 * @author K.Kento
 */
function Image(props: { url: string }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.url} alt="cute dog" />
        </figure>
      </div>
    </div>
  )
}

export default Image
