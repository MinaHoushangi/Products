import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Card from '@components/Card';
import {
  LIST_NUM_OF_COLUMNS,
  horizontalScale,
  verticalScale,
} from '@constants/dimensions';
import routes from '@navigation/routes';
import {Product} from 'src/types/Product';

const fakeData = [
  {
    id: 1,
    image:
      'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
    price: '$100',
    name: 'Sun Flower',
    description:
      'The common sunflower (Helianthus annuus) is a species of large annual forb of the daisy family Asteraceae. The common sunflower is harvested for its edible oily seeds which are used in the production of cooking oil.',
  },
  {
    id: 2,
    image:
      'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
    price: '$100',
    name: 'Sun Flower',
    description:
      'The common sunflower (Helianthus annuus) is a species of large annual forb of the daisy family Asteraceae. The common sunflower is harvested for its edible oily seeds which are used in the production of cooking oil.',
  },
  {
    id: 3,
    image:
      'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
    price: '$100',
    name: 'Sun Flower',
    description:
      'The common sunflower (Helianthus annuus) is a species of large annual forb of the daisy family Asteraceae. The common sunflower is harvested for its edible oily seeds which are used in the production of cooking oil.',
  },
  {
    id: 4,
    image:
      'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
    price: '$100',
    name: 'Sun Flower',
    description:
      'The common sunflower (Helianthus annuus) is a species of large annual forb of the daisy family Asteraceae. The common sunflower is harvested for its edible oily seeds which are used in the production of cooking oil.',
  },
  {
    id: 5,
    image:
      'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
    price: '$100',
    name: 'Sun Flower',
    description:
      'The common sunflower (Helianthus annuus) is a species of large annual forb of the daisy family Asteraceae. The common sunflower is harvested for its edible oily seeds which are used in the production of cooking oil.',
  },
  {
    id: 6,
    image:
      'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
    price: '$100',
    name: 'Sun Flower',
    description:
      'The common sunflower (Helianthus annuus) is a species of large annual forb of the daisy family Asteraceae. The common sunflower is harvested for its edible oily seeds which are used in the production of cooking oil.',
  },
  {
    id: 7,
    image:
      'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg',
    price: '$100',
    name: 'Sun Flower',
    description:
      'The common sunflower (Helianthus annuus) is a species of large annual forb of the daisy family Asteraceae. The common sunflower is harvested for its edible oily seeds which are used in the production of cooking oil.',
  },
];

/**
 * ProductListScreen is for rendering list of products from server
 */

type RenderItemProps = {
  item: Product;
  index: number;
};

function ProductListScreen() {
  const {navigate} = useNavigation();

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

  return (
    <View style={styles.container}>
      <FlatList
        data={fakeData}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        numColumns={LIST_NUM_OF_COLUMNS}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListItemSeparator}
      />
    </View>
  );
}

const ListItemSeparator = () => <View style={styles.verticalSeparator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: horizontalScale(16),
    paddingBottom: 1,
  },
  listItemContainer: {flexDirection: 'row'},
  horizontalSeparator: {
    width: horizontalScale(16),
  },
  verticalSeparator: {
    height: verticalScale(16),
    width: '100%',
  },
});

export default ProductListScreen;
