import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <div className ="">
        <Slider />

        {/* ProductList */}
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl">Featured Products</h1>
          <ProductList />
        </div>

        {/* Category List */}
        <div className="mt-24">
          <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
            Categories
          </h1>
          {/* <Suspense fallback={<Skeleton />}> */}
            <CategoryList />
          {/* </Suspense> */}
        </div>

        {/* New Product List */}
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        {/* <Suspense fallback={<Skeleton />}> */}
          <ProductList
            // categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!}
            // limit={4}
          />
        {/* </Suspense> */}
      </div>
      </div>
    </>
  );
}
