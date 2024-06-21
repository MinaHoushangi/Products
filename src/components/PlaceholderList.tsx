import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import ListItemSeparator from '@components/ListItemSeparator';
import PlaceholderCard from '@components/PlaceholderCard';
import {
  LIST_NUM_OF_COLUMNS,
  SCREEN_PADDING,
  horizontalScale,
} from '@constants/dimensions';

const PlaceholderList = () => {
  const renderLoaderItem = ({index}) => {
    const shouldAddSpacer =
      LIST_NUM_OF_COLUMNS === 2 ? index % 2 === 0 : index % 3 !== 2;

    return (
      <View style={styles.listItemContainer}>
        <PlaceholderCard />
        {shouldAddSpacer && <View style={styles.horizontalSeparator} />}
      </View>
    );
  };

  return (
    <FlatList
      data={Array.from({length: 10})}
      initialNumToRender={10}
      ItemSeparatorComponent={ListItemSeparator}
      numColumns={LIST_NUM_OF_COLUMNS}
      renderItem={renderLoaderItem}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listItemContainer: {flexDirection: 'row'},
  horizontalSeparator: {
    width: horizontalScale(SCREEN_PADDING),
  },
});

export default PlaceholderList;
