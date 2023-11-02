import ImageGallery from './(components)/ImageGallery/ImageGallery';
import homecss from './page.module.css'
export default function HomePage() {
  return <main className={homecss.main}>
    <section className={homecss.section1}>
      <h1>This is the HERO section</h1>
    </section>
    <section className={homecss.section2}>
      <h1>Events</h1>
    </section>
    <section className={homecss.section3}>
      <ImageGallery />
    </section>
  </main>;
}
