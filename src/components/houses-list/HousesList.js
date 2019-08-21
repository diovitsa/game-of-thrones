import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchHousesData, nextPage, prevPage } from '../../actions/ac';
import { head } from 'lodash';
import House from '../house/House';
import { articlesLoadingSelector } from '../../selectors';

function HousesList({ fetchHousesData, houses, page, nextPage, prevPage }) {
  useEffect(() => {
    fetchHousesData(page);
  }, [page]);

  const currentPage = head(houses.filter((housesPage) => {
    return housesPage.index === page;
  }));

  const housesList = currentPage
    ? currentPage.data.map((house, index) => {
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
      {housesList}
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
  houses: state.houses,
  page: state.page,
  isLoading: articlesLoadingSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(HousesList);