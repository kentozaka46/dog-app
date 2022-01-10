/**
 * 犬種を選ぶフォーム
 * @author K.Kento
 */
function Form(props: { onFormSubmit: (breed: string) => void }) {
  // 読み込むボタンが押された時に、犬種の情報をAPIに送る処理
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { breed } = event.currentTarget
    props.onFormSubmit(breed.value)
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="breed" defaultValue="shiba">
                <option value="shiba">Shiba</option>
                <option value="akita">Akita</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-dark">
              読み込む
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
