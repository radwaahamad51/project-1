import Banner from "../design/Banner"
import BlogPosts from "../design/Blogs"
import Product from "../design/product"
import Reviews from "../design/review"
import SportsCategories from "../design/Sport"
import BrandLogoSlider from "../design/TopBand"

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>

            <div>
              <BlogPosts></BlogPosts>

            </div>

            <div>
                <Product></Product>
            </div>

            <div>
                <Reviews></Reviews>
            </div>

            <div>
                <SportsCategories></SportsCategories>
            </div>
            <div>
            <BrandLogoSlider></BrandLogoSlider>
            </div>

        </div>
    )
}

export default Homepage