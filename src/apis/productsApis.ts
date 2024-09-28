import instance from './axios';

export interface Product {
  createdAt: string;
  favoriteCount: 0;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

export interface ProductsResponse {
  totalCount: number;
  list: Product[];
}

export const getProducts = async (
  page: number = 1,
  pageSize: number = 10,
  orderBy: 'favorite' | 'recent' = 'recent',
  keyword: string = ''
): Promise<ProductsResponse> => {
  const response = await instance.get<ProductsResponse>(`/products`, {
    params: {
      page,
      pageSize,
      orderBy,
      keyword,
    },
  });
  return response.data;
};
