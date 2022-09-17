import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {INftMetadatum} from '../../../../interfaces/meta';

interface Props {
  item: INftMetadatum;
}

export const ItemList = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: item.metadata.image}} style={styles.img} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoName}>{item.metadata.name.toUpperCase()}</Text>
        <Text style={styles.infoSymbol}>{item.metadata.symbol}</Text>
        <Text style={styles.infoDescription}>{item.metadata.description}</Text>
      </View>
    </View>
  );
};
