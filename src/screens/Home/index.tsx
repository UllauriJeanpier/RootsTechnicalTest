import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {COLORS} from '../../constans';
import {ItemList} from './components/ItemList';
import {useHome} from './hook';
import {indexStyles as styles} from './styles';

export const Home = () => {
  const {data, isLoadingRetrieve} = useHome();

  return (
    <View style={styles.container}>
      {!isLoadingRetrieve ? (
        <>
          <View style={styles.subContainer}>
            <Text style={styles.txtField}>
              Name: <Text style={styles.txtValue}>{data?.collection.name}</Text>
            </Text>
            <Text style={styles.txtField}>
              Symbol:{' '}
              <Text style={styles.txtValue}>{data?.collection.symbol}</Text>
            </Text>
            <Text style={styles.txtField}>
              Published date:{' '}
              <Text style={styles.txtValue}>
                {data?.collection.published_date}
              </Text>
            </Text>
            <Text style={styles.txtField}>
              Website:{' '}
              <Text style={styles.txtValue}>{data?.collection.website}</Text>
            </Text>
          </View>

          <FlatList
            data={data?.nft_metadata}
            renderItem={({item}) => <ItemList item={item} />}
            keyExtractor={item => item.mint}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : (
        <ActivityIndicator size="large" color={COLORS.primary} />
      )}
    </View>
  );
};
