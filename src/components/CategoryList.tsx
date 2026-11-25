import type { Product } from "../data/products";

type Props = {
  products: Product[];
};

export default function CategoryList({ products }: Props) {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <section className="container category-section">
      <h2 className="section-title">Danh mục sản phẩm</h2>
      <div className="category-list">
        {categories.map((category) => (
          <span key={category} className="category-chip">
            {category}
          </span>
        ))}
      </div>
    </section>
  );
}