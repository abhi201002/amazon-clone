import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    const url = "https://m.media-amazon.com/images/I/61WmI6QmQfL._SX3000_.jpg"
  return (
    <>
        <div className="Home">
            <div className="Home_img">
                <img src= {url} alt="" />
            </div>
            <div className="product_info">
              <Product id = "1234"name="Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not!: (25th Anniversary Edition)" price="215" img="https://m.media-amazon.com/images/I/81PuKheA8xL._AC_UY327_FMwebp_QL65_.jpg" rating = {3}/>
              <Product id = "2314"name="Do It Today: Overcome Procrastination, Improve Productivity" price="98" img="https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg" rating = "4"/>
            </div>
            <div className="product_info">
              <Product id = "5478"name="Apple Watch Ultra GPS + Cellular, 49mm Titanium Case with Orange Alpine Loop - Small" price="85,400" img="https://m.media-amazon.com/images/I/91z5KuonXrL._AC_UY327_FMwebp_QL65_.jpg" rating = {4}/>
              <Product id = "3412"name='Dell Inspiron 3520 Laptop, Intel Core i5-1235U, Windows 11' price="58,290" img="https://m.media-amazon.com/images/I/51A5zIgX5LL._AC_UY327_FMwebp_QL65_.jpg" rating = {2}/>
              <Product id = "5132"name="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)" price="13,490" img="https://m.media-amazon.com/images/I/71a4ZQNqTiL._AC_UY327_FMwebp_QL65_.jpg" rating = {4}/>
            </div>
            <div className="product_info">
              <Product id = "3344"name="Yonex Arcsaber 71 Light Strung Badminton Racquet, 5UG4 - Gold" price="2,195" img="https://m.media-amazon.com/images/I/61K20GLs86L._AC_UL480_FMwebp_QL65_.jpg" rating = {5}/>
            </div>
        </div>
    </>
  )
}

export default Home