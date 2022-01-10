import { useCallback, useEffect, useState } from 'react'
import { fetchImages } from '../usecase/dogApi'
import Gallery from './Gallery'
import Form from '../atoms/Form'

/**
 * メインのコンポーネント
 * @author K.Kento
 */
function Main() {
  // APIから受け取ったURLを格納するステート
  const [urls, setUrls] = useState<string[] | null>(null)

  // APIから受け取ったURLをステートに格納する処理
  const reloadImages = useCallback((breed: string) => {
    fetchImages(breed).then((dogUrls) => {
      setUrls(dogUrls)
    })
  }, [])

  // 画面が読み込まれるたびにAPIから画像を取得する
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
