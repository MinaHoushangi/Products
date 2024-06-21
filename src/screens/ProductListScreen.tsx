import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Card from '@components/Card';
import {
  LIST_NUM_OF_COLUMNS,
  SCREEN_PADDING,
  horizontalScale,
} from '@constants/dimensions';
import routes from '@navigation/routes';
import {Product} from 'src/types/Product';
import useApi from '@hooks/useApi';
import productListApi from '@api/productList';
import {NUMBER_OF_ITEMS_PER_API_CALL} from '@constants/config';
import ListFooter from '@components/ListFooter';
import ListItemSeparator from '@components/ListItemSeparator';
import PlaceholderList from 'src/components/PlaceholderList';

/**
 * ProductListScreen is for rendering list of products from server
 */

type RenderItemProps = {
  item: Product;
  index: number;
};

function ProductListScreen() {
  const {navigate} = useNavigation();
  const {loading, request} = useApi(productListApi.getProductList);

  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);

  const renderItem = ({item, index}: RenderItemProps) => {
    const shouldAddSpacer =
      LIST_NUM_OF_COLUMNS === 2 ? index % 2 === 0 : index % 3 !== 2;

    return (
      <View style={styles.listItemContainer}>
        <Card
          imageUri={item.image}
          onPress={() => navigate(routes.PRODUCTDETAILS, {product: item})}
          title={item.name}
          text={item.price}
        />
        {shouldAddSpacer && <View style={styles.horizontalSeparator} />}
      </View>
    );
  };

  const fetchProducts = async () => {
    try {
      const response = await request(offset);
      if (!response || response.status !== 200) {
        throw new Error('Failed to fetch products');
      }

      const items: Product[] = await response.data.map(item => ({
        id: item.id,
        name: item.title,
        image: item.url,
        price: `$${(Math.random() * 100).toFixed(2)}`, // Random price for demonstration
      }));

      if (items.length < NUMBER_OF_ITEMS_PER_API_CALL) {
        setHasMoreData(false);
      }

      setProducts(prev => [...prev, ...items]);
      setOffset(prev => prev + 1);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const onEndReached = () => {
    if (!loading && hasMoreData) {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      {products.length === 0 && loading ? (
        <PlaceholderList />
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={10}
          ItemSeparatorComponent={ListItemSeparator}
          numColumns={LIST_NUM_OF_COLUMNS}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<ListFooter isVisible={hasMoreData} />}
          onEndReached={onEndReached}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: SCREEN_PADDING,
    paddingBottom: 1,
  },
  listItemContainer: {flexDirection: 'row'},
  horizontalSeparator: {
    width: horizontalScale(SCREEN_PADDING),
  },
});

export default ProductListScreen;
