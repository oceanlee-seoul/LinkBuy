import { Product } from '../../../apis/productsApis';
import {
  sectionTitle,
  bestProducstListWrapper,
  imageWrapper,
  image,
  contentWrapper,
  name,
  price,
  favoriteCount,
} from './BestProductsSection.css';
import formatKRW from '../../../utils/formatKRW';

interface BestProductsSectionProps {
  bestProducts: Product[];
}

export default function BestProductsSection({
  bestProducts,
}: BestProductsSectionProps) {
  return (
    <section>
      <h2 className={sectionTitle}>베스트 상품</h2>
      <div className={bestProducstListWrapper}>
        {bestProducts.map((product) => (
          <div key={`product-${product.id}`}>
            <div className={imageWrapper}>
              <img className={image} src={product.images[0]} />
            </div>
            <div className={contentWrapper}>
              <h3 className={name}>{product.name}</h3>
              <p className={price}>{formatKRW(product.price)}</p>
              <p className={favoriteCount}>{product.favoriteCount}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
