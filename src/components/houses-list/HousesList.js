import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchHousesData, nextPage, prevPage } from '../../actions/ac';
import House from '../house/House';
import { articlesLoadingSelector, housesSelector } from '../../selectors';
import LoadingBar from '../loading-bar/LoadingBar';

function HousesList({ fetchHousesData, houses, page, nextPage, prevPage, isLoading }) {
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
    <View style={{ marginTop: 50 }}>
      {isLoading ? <LoadingBar/> : <View>{housesList}</View>}
      <Button disabled={page === 1} onPress={() => handleButtonClick(false)} title={'Prev Page'}/>
      <Button onPress={() => handleButtonClick(true)} title={'Next Page'}/>
    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(HousesList);