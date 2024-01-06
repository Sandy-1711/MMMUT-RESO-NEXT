import BranchCards from './(components)/BranchCards/BranchCards';
import Footer from './(components)/Footer/Footer';
import ImageGallery from './(components)/ImageGallery/ImageGallery';
import Navbar from './(components)/Navbar/Navbar';
import homecss from './page.module.css'
export default function HomePage() {

  return <>
    <Navbar />

    <main className={homecss.main}>
      <section className={homecss.section1}>
        <p>One stop solution for all your exam preparations</p>
        <h1>MMMUT.XYZ</h1>
      </section>
      <section className={homecss.section2}>
        <BranchCards />

      </section>
      <section className={homecss.section3}>
        <ImageGallery />
      </section>
    </main>;
    {/* <Footer /> */}
  </>
}
