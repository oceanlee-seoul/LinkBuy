import { getProducts, ProductsResponse } from '../../apis/productsApis';
import { useEffect, useState, useCallback } from 'react';
import BestProductsSection from '../../components/products/BestProductsSection';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Products() {
  const [products, setProducts] = useState<ProductsResponse>({
    totalCount: 0,
    list: [],
  });
  const [bestProducts, setBestProducts] = useState<ProductsResponse>({
    totalCount: 0,
    list: [],
  });

  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  const loadProducts = useCallback(async () => {
    const response = await getProducts();
    setProducts(response);
  }, []);

  const loadBestProducts = useCallback(async () => {
    let count = 0;

    if (isMobile) {
      count = 1;
    } else if (isTablet) {
      count = 2;
    } else if (isDesktop) {
      count = 4;
    }

    if (count === 0) return;

    const response = await getProducts(1, count, 'favorite');
    setBestProducts(response);
  }, [isMobile, isTablet, isDesktop]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    loadBestProducts();
  }, [loadBestProducts]);

  useEffect(() => {
    console.log(products);
    console.log(bestProducts);
  }, [products, bestProducts]);

  useEffect(() => {
    if (isMobile) console.log('ISMOBILE');
    if (isTablet) console.log('ISTABLET');
    if (isDesktop) console.log('ISDESKTOP');
  }, [isDesktop, isMobile, isTablet]);

  return (
    <div>
      <BestProductsSection bestProducts={bestProducts.list} />
    </div>
  );
}
