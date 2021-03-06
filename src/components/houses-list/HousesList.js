import React, { useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchHousesData } from '../../actions/houses';
import { nextPage, prevPage } from '../../actions/paging';
import House from '../house/House';
import { articlesLoadingSelector, housesSelector } from '../../selectors';
import LoadingBar from '../loading-bar/LoadingBar';
import { CustomButton } from '../custom-button/CustomButton';

export function HousesList({ fetchHousesData, houses, page, nextPage, prevPage, isLoading }) {
  useEffect(() => {
    fetchHousesData(page);
  }, [page]);

  const housesList = houses
    ? houses.data.map((house, index) => {
      return <House house={house} id={index} key={index}/>
    })
    : null;

  function handleButtonClick(isNext) {
    return isNext
      ? nextPage()
      : prevPage();
  }

  return (
    <ScrollView>
      {isLoading ? <LoadingBar/> : <View>{housesList}</View>}
      <View style={styles.flex}>
        <CustomButton id={'prevPageBtn'} disabled={page === 1} onPress={() => handleButtonClick(false)}
                      title={'Prev Page'}/>
        <CustomButton id={'nextPageBtn'} onPress={() => handleButtonClick(true)} title={'Next Page'}/>
      </View>
    </ScrollView>
  );
}

const mapDispatchToProps = {
  fetchHousesData,
  nextPage,
  prevPage
};

const mapStateToProps = state => ({
  houses: housesSelector(state),
  page: state.page,
  isLoading: articlesLoadingSelector(state)
});

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HousesList);